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

  return d > props.minCanvasSize ? d : props.minCanvasSize
})

const canvas = ref<HTMLCanvasElement>()
onMounted(() => {
  if (!canvas.value!.getContext) {
    console.warn('不支持 canvas')
    return
  }

  const ctx = canvas.value!.getContext('2d')!
  // 移动原点至中心
  ctx.translate(canvasSize.value / 2, canvasSize.value / 2)

  drawSide(ctx, { sideCounts: props.sideCounts, sideWidth: props.sideWidth, minSideLength: props.minSideLength, sideColor: props.sideColor })
})

type TDrawSideOptions = Pick<TProps, 'sideCounts' | 'sideWidth' | 'minSideLength' | 'sideColor'>

/**
 * 绘制边
 * @param ctx
 * @param options
 */
function drawSide(ctx: CanvasRenderingContext2D, options: TDrawSideOptions) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { sideCounts, sideWidth, minSideLength, sideColor } = options
  const r = D.value / 2
  const deltaTheta = 2 * Math.PI / sideCounts

  ctx.beginPath()
  ctx.moveTo(0, r)

  for (let i = 0; i <= sideCounts; i++) {
    const theta = i * deltaTheta
    ctx.lineTo(r * Math.sin(theta), r * Math.cos(theta))
  }

  // ctx.lineTo(100, 75)
  // ctx.lineTo(100, 25)
  ctx.stroke()
}

// type TDrawDiagonalOptions = Pick<TProps, 'sideCounts' | 'sideWidth' | 'minSideLength' | 'sideColor'>

/**
 * 绘制对角线, 正 n 边形有 TODO 条对角线
 * @param ctx
 * @param options
 */
// function drawDiagonal(ctx: CanvasRenderingContext2D, options: TDrawDiagonalOptions) {}
</script>

<template>
  <canvas ref="canvas" :width="canvasSize" :height="canvasSize" />
</template>

<style scoped lang="scss">
canvas {
  border: 1px solid green;
}
</style>
