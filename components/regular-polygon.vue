<script setup lang="ts">
import rawGifWorker from '@/utils/gifjs/gif.worker?raw'
import canvas2svg from '@/utils/canvas2svg?raw'

const props = withDefaults(defineProps<Partial<TProps>>(), {
  minCanvasSize: 500,
  sideCounts: 50,
  sideWidth: 1,
  sideColor: 'black',
  minSideLength: 100,
  diagonalWidth: 1,
  diagonalColor: 'black',
  onlyVertex: true,
  animation: false,
  lazy: true,
})

const FILE_NAME = `regular-polygon-${props.sideCounts}`

const globalStore = useGlobalStore()
const gifLoading = ref(false)
const gifProgress = ref(0)
const gifSrc = ref('')

useHead({
  script: [
    // import('https://cdn.bootcdn.net/ajax/libs/gif.js/0.2.0/gif.js').then().catch()
    { key: 'canvas2svg', innerHTML: canvas2svg },
    // https://unhead.unjs.io/usage/composables/use-script
    { key: 'gif', src: 'https://cdn.bootcdn.net/ajax/libs/gif.js/0.2.0/gif.js', onload: () => {
      console.log('gif.js loaded')
      globalStore.setGifJsLoaded(true)
    }, onerror: () => {
      ElMessage.error({ message: 'Fail to load gif.js from CDN' })
    } },
    // { key: 'gif.worker', src: 'https://cdn.bootcdn.net/ajax/libs/gif.js/0.2.0/gif.worker.js', onload: () => {
    //   console.log('gif.worker.js loaded')
    // }, onerror: () => {
    //   ElMessage.error({ message: 'Fail to load gif.worker.js from CDN' })
    // } },
  ],
})

interface TProps {
  minCanvasSize: number
  /**
   * 正多边形边数
   */
  sideCounts: number
  /**
   * 边的宽度
   */
  sideWidth: number
  /**
   * 边的颜色
   */
  sideColor: string
  /**
   * 对角线宽度
   */
  diagonalWidth: number
  /**
   * 对角线颜色
   */
  diagonalColor: string
  /**
   * 各边最短长度, 决定 canvas 尺寸
   */
  minSideLength: number
  /**
   * 是否仅顶点互连
   */
  onlyVertex: boolean
  /**
   * 是否使用动画 (requestAnimationFrame)
   * 动画步骤
   * 1. 绘制正多边形
   * 2. 顶点互连 (不重复绘制)
   * https://github.com/tweenjs/tween.js
   * https://pixijs.com/
   * https://konvajs.org/index.html
   * https://echarts.apache.org/en/index.html
   * https://antv.antgroup.com/
   * https://d3js.org/
   * https://threejs.org/
   */
  animation: boolean
  /**
   * 绘制方向, north 北, east 东, south 南, west 西
   */
  startDirection: 'north' | 'east' | 'south' | 'west'
  /**
   * 绘制方向, true 顺时针, false 逆时针
   */
  clockwise: boolean
  /**
   * 是否懒加载
   */
  lazy: boolean
}

/**
 * 校核 props
 */
// const validateProps = computed(() => {
//
// })

const D = ref(0)
const canvasSize = computed(() => {
  // 取任意相邻两顶点与正多边形中心相连所成的等腰三角形
  // 该小三角形各边长分别为 L r r
  // sin(2π / n) = (L / 2) / r
  // => d = 2r = L / sin(2π / n)
  const n = props.sideCounts
  const L = props.minSideLength
  const d = L / Math.sin(2 * Math.PI / n)
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  D.value = d

  return (d > props.minCanvasSize ? d : props.minCanvasSize)
})

type TPoint = Record<'x' | 'y', number>

/**
 * 各顶点坐标
 */
const points = computed(() => {
  const result: TPoint[] = []

  const r = D.value / 2
  // 相邻两对角线夹角
  const deltaTheta = 2 * Math.PI / props.sideCounts
  for (let i = 0; i < props.sideCounts; i++) {
    const theta = i * deltaTheta
    // 向右为 x 轴正方向
    // 向下为 y 轴正方向
    // server 和 client 计算结果可能不一致, 这里暂时保留三位小数
    // result[i] = { x: r * Math.sin(theta), y: -r * Math.cos(theta) }
    result[i] = { x: +(r * Math.sin(theta)).toFixed(3), y: -(r * Math.cos(theta)).toFixed(3) }
  }

  return result
})

const canvas = ref<HTMLCanvasElement>()

// TODO 界面缩放
function onWindowResize() {}

onMounted(async () => {
  if (!canvas.value!.getContext) {
    console.warn('不支持 canvas')
    return
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas#turn_off_transparency
  const ctx = canvas.value!.getContext('2d', { alpha: false })!

  init(ctx)

  await drawSide(ctx, { sideCounts: props.sideCounts, sideWidth: props.sideWidth, sideColor: props.sideColor })
  await drawDiagonal(ctx, { sideCounts: props.sideCounts, diagonalWidth: props.diagonalWidth, diagonalColor: props.diagonalColor })
  console.log('绘制完成')
  window.addEventListener('resize', onWindowResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize)
})

type TDrawSideOptions = Pick<TProps, 'sideCounts' | 'sideWidth' | 'sideColor'>

/**
 * 绘制边
 * @param ctx canvas 上下文
 * @param options
 * @param record
 */
async function drawSide(ctx: CanvasRenderingContext2D, options: TDrawSideOptions, record = () => {}) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const { sideCounts, sideWidth, sideColor } = options

    ctx.lineWidth = sideWidth
    ctx.strokeStyle = sideColor
    // TODO 保证 canvas 清晰度 (不失真)
    // 动画可参考 https://juejin.cn/post/6924866572972457992
    ctx.beginPath()
    ctx.moveTo(points.value[0].x, points.value[0].y)

    if (props.animation) {
      for (let i = 0; i < sideCounts - 1; i++) {
        await drawLineWithAnimation(ctx, points.value[i], points.value[i + 1])
        record()
      }
      // 闭合之
      await drawLineWithAnimation(ctx, points.value[points.value.length - 1], points.value[0])
      record()
    }
    else {
      for (let i = 0; i < sideCounts; i++) {
        ctx.lineTo(points.value[i].x, points.value[i].y)
        record()
      }
      // for (let i = 0; i < 2; i++)

      // 闭合之
      ctx.lineTo(points.value[0].x, points.value[0].y)
      record()
      ctx.stroke()
    }

    resolve(true)
  })
}

type TDrawDiagonalOptions = Pick<TProps, 'sideCounts' | 'diagonalWidth' | 'diagonalColor'>

/**
 * 绘制对角线, 正 n 边形有 n * (n - 3) / 2 条对角线
 * @param ctx canvas 上下文
 * @param options
 * @param record
 */
async function drawDiagonal(ctx: CanvasRenderingContext2D, options: TDrawDiagonalOptions, record = () => {}) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const { sideCounts, diagonalWidth, diagonalColor } = options

    ctx.lineWidth = diagonalWidth
    ctx.strokeStyle = diagonalColor

    for (let i = 0; i < sideCounts - 1; i++) {
      // 跳过相邻顶点
      for (let j = i + 2; j < sideCounts; j++) {
        // 避开起点相邻点
        if (i === 0 && j === sideCounts - 1)
          break

        if (props.animation) {
          await drawLineWithAnimation(ctx, points.value[i], points.value[j])
          record()
        }
        else {
          ctx.beginPath()
          ctx.moveTo(points.value[i].x, points.value[i].y)
          ctx.lineTo(points.value[j].x, points.value[j].y)
          record()
          ctx.stroke()
        }
      }
    }

    resolve(true)
  })
}

function drawLineWithAnimation(ctx: CanvasRenderingContext2D, start: TPoint, end: TPoint) {
  return new Promise((resolve) => {
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)

    // 动画时长 1s (1000ms)
    const duration = 300
    const dx = end.x - start.x
    const dy = end.y - start.y
    const startTime = Date.now()

    const drawPiece = () => {
      const currentTime = Date.now()
      const fraction = (currentTime - startTime) / duration
      if (fraction > 1) {
        ctx.lineTo(end.x, end.y)
        ctx.stroke()
        resolve(true)
        return
      }
      ctx.lineTo(start.x + dx * fraction, start.y + dy * fraction)
      ctx.stroke()
      requestAnimationFrame(drawPiece)
    }

    requestAnimationFrame(drawPiece)
  })
}

function eraseLineWithAnimation(ctx: CanvasRenderingContext2D, start: TPoint, end: TPoint) {

}

/**
 * canvas 全局通用配置
 * @param ctx canvas context
 */
function init(ctx: CanvasRenderingContext2D) {
  // 全局配置
  ctx.lineJoin = 'miter'
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvasSize.value, canvasSize.value)

  // 移动原点至中心
  // ----> x
  // |
  // |
  // ⋁
  // y
  ctx.translate(canvasSize.value / 2, canvasSize.value / 2)
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
}

/**
 * 支持的导出图片类型
 */
const supportedExportFormat = ['JPEG', 'PNG', 'SVG', 'GIF', 'BASE64'] as const

// svg 在线预览 https://uutool.cn/svg-preview/
async function toSVG() {
  const _ctx = new C2S(canvasSize.value, canvasSize.value)

  init(_ctx)

  await drawSide(_ctx, { sideCounts: props.sideCounts, sideWidth: props.sideWidth, sideColor: props.sideColor })
  await drawDiagonal(_ctx, { sideCounts: props.sideCounts, diagonalWidth: props.diagonalWidth, diagonalColor: props.diagonalColor })

  const serializedSVG = _ctx.getSerializedSvg()
  const blob = new Blob([serializedSVG], { type: 'image/scg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  download(url, `${FILE_NAME}.svg`)
}

/**
 * toGif
 * https://github.com/jnordberg/gif.js
 * https://github.com/antimatter15/jsgif
 * @param ctx canvas 上下文
 */
async function toGif(ctx: CanvasRenderingContext2D) {
  const isAvailable = globalStore.isGifJsLoaded && typeof GIF === 'function'

  if (!isAvailable)
    return ElMessage.error({ message: 'Please wait until gif.js loaded' })

  // const _ctx = new C2S(canvasSize.value, canvasSize.value)
  //
  // init(_ctx)

  // gif 不可共用, 每次使用时均须重新实例化
  const gif = new GIF({
    // 默认值 gif.worker.js
    // Worker 可借助于 blob url 启动
    // https://github.com/jnordberg/gif.js/issues/115#issuecomment-588581837
    workerScript: URL.createObjectURL(new Blob([rawGifWorker], { type: 'application/javascript' })),
    workers: 2,
    repeat: 0, // 0 forever, -1 once
    background: '#fff', // 背景色
    quality: 10, // 默认值 10, 质量越低性能越好
    debug: import.meta.dev,
    width: canvasSize.value,
    height: canvasSize.value,
  })

  // gif.addFrame(ctx, { copy: true, delay: 100 })

  gif.on('start', () => {
    gifLoading.value = true
  })

  // 监听进度
  gif.on('progress', (progress: number) => {
    // progress 0 ~ 1
    console.log(progress)
    gifProgress.value = progress
  })

  // 监听完成事件
  gif.on('finished', (blob: Blob) => {
    gifLoading.value = false

    const url = URL.createObjectURL(blob)
    gifSrc.value = url
    download(url, `${FILE_NAME}.gif`)

    gif.abort()
  })

  gif.on('abort', () => {
    gifLoading.value = false
    gifProgress.value = 0
  })

  const record = () => {
    gif.addFrame(ctx, { copy: true, delay: props.sideCounts > 10 ? 100 : 300 })
  }

  ctx.fillStyle = '#fff'
  ctx.clearRect(-canvasSize.value / 2, -canvasSize.value / 2, canvasSize.value, canvasSize.value)
  ctx.fillRect(-canvasSize.value / 2, -canvasSize.value / 2, canvasSize.value, canvasSize.value)

  await drawSide(ctx, { sideCounts: props.sideCounts, sideWidth: props.sideWidth, sideColor: props.sideColor }, record)
  await drawDiagonal(ctx, { sideCounts: props.sideCounts, diagonalWidth: props.diagonalWidth, diagonalColor: props.diagonalColor }, record)

  // 渲染 gif
  gif.render()
}

/**
 * 导出 canvas
 * @param format 待转换的图片格式
 */
async function exportCanvas(format: typeof supportedExportFormat[number]) {
  let url = ''
  switch (format) {
    case 'GIF':
      toGif(canvas.value!.getContext('2d')!)
      break
    case 'JPEG':
      url = canvas.value!.toDataURL('image/jpeg', 1.0)
      download(url, `${FILE_NAME}.jpeg`)
      break
    case 'PNG':
      url = canvas.value!.toDataURL('image/png', 1.0)
      download(url, `${FILE_NAME}.png`)
      break
    case 'SVG':
      toSVG()
      break
    case 'BASE64':
      url = canvas.value!.toDataURL('image/png', 1.0)
      const { copy } = useClipboard({ legacy: true })
      copy(url).then(() => {
        ElMessage.success({ message: 'Copied!' })
      }).catch(() => {
        ElMessage.error({ message: 'Fail to copy' })
      })
      break
  }
}

/**
 * 下载图片
 * @param url 路径
 * @param fileName 图片名
 */
function download(url: string, fileName: string) {
  const a = document.createElement('a')
  a.download = fileName
  a.href = url

  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

<template>
  <!--  正多边形 -->
  <div>
    <el-button v-for="format in supportedExportFormat" :key="format" type="primary" @click="exportCanvas(format)">
      <div flex-center>
        <img i-mdi-tray-arrow-down alt="下载"><span ml-6px flex-self-baseline>{{ format }}</span>
      </div>
    </el-button>
    <div v-loading="gifLoading && { text: `${+gifProgress.toFixed(2) * 100}%` }" mt-16px w-fit>
      <canvas ref="canvas" :width="canvasSize" :height="canvasSize" />
    </div>

    <img v-if="gifSrc" :src="gifSrc" :alt="`regular-polygon-${sideCounts}.gif`" :width="canvasSize" :height="canvasSize">
    <!--  导出 jpeg png svg base64 gif -->
    <!--  放大查看 -->
    <!--  鼠标 -->
    <!--    <canvas ref="canvas" :width="canvasSize" :height="canvasSize" /> -->
  </div>
</template>

<style scoped lang="scss">
canvas {
  //background-color: white;
  border: 1px solid green;
}
</style>
