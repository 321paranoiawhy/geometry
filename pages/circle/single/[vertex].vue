<script setup lang="ts">
import type { RouteLocationNormalizedLoadedTyped } from 'unplugin-vue-router'
import type { RouteNamedMap } from 'vue-router/auto/routes'

definePageMeta({
  validate: async (route) => {
    const vertex = (route as RouteLocationNormalizedLoadedTyped<RouteNamedMap, 'circle-single-vertex'>).params.vertex
    // Check if the vertex is made up of digits
    const isValidVertex = typeof vertex === 'string' && /^\d+$/.test(vertex)
    if (isValidVertex) {
      return true
    }
    else {
      return {
        statusMessage: 'route param [vertex] must be a digit',
      }
    }
  },
})

const route = useRoute<'circle-single-vertex'>()
const vertex = +route.params.vertex
</script>

<template>
  <div>
    <h2>Circle with {{ vertex }} vertices</h2>
    <custom-circle :vertices="vertex" />
  </div>
</template>
