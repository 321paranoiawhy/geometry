<script setup lang="ts">
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

const props = withDefaults(defineProps<Partial<TProps>>(), {
  minCanvasSize: 500,
  sideCounts: 10,
  sideWidth: 1,
  sideColor: 'red',
  minSideLength: 100,
  diagonalWidth: 1,
  diagonalColor: 'blue',
  onlyVertex: true,
  animation: false,
  lazy: true,
})

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

/**
 * 各顶点坐标
 */
const points = computed(() => {
  const result: Record<'x' | 'y', number>[] = []

  const r = D.value / 2
  const deltaTheta = 2 * Math.PI / props.sideCounts
  for (let i = 0; i < props.sideCounts; i++) {
    const theta = i * deltaTheta
    // 向右为 x 轴正方向
    // 向下为 y 轴正方向
    result[i] = { x: r * Math.sin(theta), y: -r * Math.cos(theta) }
  }

  return result
})

const canvas = ref<HTMLCanvasElement>()
// TODO 界面缩放
function onWindowResize() {}

onMounted(() => {
  if (!canvas.value!.getContext) {
    console.warn('不支持 canvas')
    return
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas#turn_off_transparency
  const ctx = canvas.value!.getContext('2d', { alpha: false })!
  // 移动原点至中心
  // ----> x
  // |
  // |
  // ⋁
  // y
  ctx.translate(canvasSize.value / 2, canvasSize.value / 2)
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

  drawSide(ctx, { sideCounts: props.sideCounts, sideWidth: props.sideWidth, minSideLength: props.minSideLength, sideColor: props.sideColor })
  // drawDiagonal(ctx, { sideCounts: props.sideCounts, diagonalWidth: props.diagonalWidth, minSideLength: props.minSideLength, diagonalColor: props.diagonalColor })

  window.addEventListener('resize', onWindowResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize)
})

type TDrawSideOptions = Pick<TProps, 'sideCounts' | 'sideWidth' | 'minSideLength' | 'sideColor'>

/**
 * 绘制边
 * @param ctx
 * @param options
 */
async function drawSide(ctx: CanvasRenderingContext2D, options: TDrawSideOptions) {
  const { sideCounts, sideWidth, sideColor } = options

  ctx.lineWidth = sideWidth
  ctx.lineJoin = 'round'
  ctx.strokeStyle = sideColor
  // TODO 保证 canvas 清晰度 (不失真)
  // SVG 实现

  // 动画可参考 https://juejin.cn/post/6924866572972457992

  ctx.beginPath()
  ctx.moveTo(points.value[0].x, points.value[0].y)

  const index = 0

  // const drawOneSide = () => {
  //
  //   if (index < sideCounts) {
  //     console.log('hhh', index, sideCounts)
  //     ctx.lineTo(points.value[index].x, points.value[index].y)
  //     ctx.stroke()
  //     // ctx.restore()
  //     index++
  //     setTimeout(() => {
  //       requestAnimationFrame(drawOneSide)
  //     }, 500)
  //     // requestAnimationFrame(drawOneSide)
  //   }
  //   else {
  //     ctx.lineTo(points.value[0].x, points.value[0].y)
  //     ctx.stroke()
  //
  //   }
  // }
  //
  // requestAnimationFrame(drawOneSide)

  for (let i = 0; i < sideCounts - 1; i++)
    await drawLineWithAnimation(ctx, points.value[i], points.value[i + 1])
  // drawLineWithAnimation(ctx, points.value[0], points.value[1])

  // ctx.lineTo(points.value[i].x, points.value[i].y)

  // 闭合之, 等价于 ctx.closePath()
  ctx.lineTo(points.value[0].x, points.value[0].y)

  ctx.stroke()
}

type TDrawDiagonalOptions = Pick<TProps, 'sideCounts' | 'diagonalWidth' | 'minSideLength' | 'diagonalColor'>

/**
 * 绘制对角线, 正 n 边形有 n * (n - 3) / 2 条对角线
 * @param ctx
 * @param options
 */
function drawDiagonal(ctx: CanvasRenderingContext2D, options: TDrawDiagonalOptions) {
  const { sideCounts, diagonalWidth, minSideLength, diagonalColor } = options

  ctx.lineWidth = diagonalWidth
  ctx.lineJoin = 'round'
  ctx.strokeStyle = diagonalColor

  // const drawOneDiagonal = () => {
  //   requestAnimationFrame(drawOneDiagonal)
  // }
  //
  // requestAnimationFrame(drawOneDiagonal)

  for (let i = 0; i < sideCounts - 1; i++) {
    // 跳过相邻顶点
    for (let j = i + 2; j < sideCounts; j++) {
      // 避开起点相邻点
      if (i === 0 && j === sideCounts - 1)
        break

      ctx.beginPath()
      ctx.moveTo(points.value[i].x, points.value[i].y)
      ctx.lineTo(points.value[j].x, points.value[j].y)
      ctx.stroke()
    }
  }
}

function drawLineWithAnimation(ctx: CanvasRenderingContext2D, start: Record<'x' | 'y', number>, end: Record<'x' | 'y', number>) {
  return new Promise((resolve) => {
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)

    // 动画时长 1s (1000ms)
    const duration = 300
    const dx = end.x - start.x
    const dy = end.y - start.y
    const distance = (dx ** 2 + dy ** 2) ** 0.5
    const speed = distance / duration
    const startTime = Date.now()

    const drawPiece = () => {
      const currentTime = Date.now()
      if (currentTime - startTime > duration) {
        ctx.lineTo(end.x, end.y)
        ctx.stroke()
        resolve(true)
        return
      }
      ctx.lineTo(start.x + dx * (currentTime - startTime) / duration, start.y + dy * (currentTime - startTime) / duration)
      ctx.stroke()
      requestAnimationFrame(drawPiece)
    }

    requestAnimationFrame(drawPiece)
  })
}
</script>

<template>
  <!--  正多边形 -->
  <canvas ref="canvas" :width="canvasSize" :height="canvasSize" />
  <div>{{ points }}</div>
</template>

<style scoped lang="scss">
canvas {
  border: 1px solid green;
}
</style>
