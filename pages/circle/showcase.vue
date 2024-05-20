<script setup lang="ts">
const vertices = [5, 10, 15, 20, 30, 50, 80, 100]
</script>

<template>
  <div v-for="vertex in vertices" :key="vertex">
    <h2>Circle with {{ vertex }} vertices</h2>
    <custom-circle :vertices="vertex" />
  </div>
</template>
