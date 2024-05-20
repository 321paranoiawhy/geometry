<script setup lang="ts">
const predefinedColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

const state = reactive({
  sideCounts: 5,
  sideColor: '#000000',
  diagonalColor: '#000000',
  animation: false,
})
</script>

<template>
  <div class="setting">
    <div class="setting-item">
      <span>Side Counts</span>
      <el-input-number
        v-model="state.sideCounts"
        :min="3"
        :max="99999"
        :step="1"
        step-strictly
        :precision="0"
        :value-on-clear="3"
      />
    </div>
    <div class="setting-item">
      <span>Side Color</span>
      <el-color-picker v-model="state.sideColor" :predefine="predefinedColors" show-alpha />
    </div>
    <div class="setting-item">
      <span>Diagonal Color</span>
      <el-color-picker v-model="state.diagonalColor" :predefine="predefinedColors" show-alpha />
    </div>
    <div class="setting-item">
      <span>Animation</span>
      <el-switch v-model="state.animation" />
    </div>
  </div>
  <div class="output">
    <regular-polygon
      :side-counts="state.sideCounts"
      :side-color="state.sideColor"
      :diagonal-color="state.diagonalColor"
      :animation="state.animation"
    />
  </div>
</template>

<style scoped lang="scss">
.setting-item {
  margin-bottom: 8px;
  span {
    margin-right: 16px;
  }
}
</style>
