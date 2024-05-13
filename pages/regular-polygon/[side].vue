<script setup lang="ts">
const route = useRoute<'regular-polygon-side'>()
const side = +route.params.side
</script>

<template>
  <div>
    <div>{{ side }}</div>
    <regular-polygon />
  </div>
</template>
