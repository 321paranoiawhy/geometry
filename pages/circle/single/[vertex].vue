<script setup lang="ts">
const route = useRoute<'circle-single-vertex'>()
const vertex = +route.params.vertex
if (Number.isNaN(vertex))
  ElMessage.error({ message: 'Invalid route param vertex!' })
</script>

<template>
  <div>
    <h2>Circle with {{ vertex }} vertices</h2>
    <custom-circle :vertices="vertex" />
  </div>
</template>
