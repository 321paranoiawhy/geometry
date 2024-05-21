<script setup lang="ts">
import nzh from 'nzh'
import type { RouteLocationNormalizedLoadedTyped } from 'unplugin-vue-router'
import type { RouteNamedMap } from 'vue-router/auto/routes'

const nzhCN = nzh.cn

definePageMeta({
  validate: async (route) => {
    const side = (route as RouteLocationNormalizedLoadedTyped<RouteNamedMap, 'regular-polygon-single-side'>).params.side
    // Check if the side is made up of digits
    const isValidSide = typeof side === 'string' && /^\d+$/.test(side)
    if (isValidSide) {
      return true
    }
    else {
      return {
        statusMessage: 'route param [side] must be a digit',
      }
    }
  },
})

const route = useRoute<'regular-polygon-single-side'>()
const side = +route.params.side
</script>

<template>
  <div>
    <h2>正{{ nzhCN.encodeS(side) }}边形</h2>
    <regular-polygon :side-counts="side" />
  </div>
</template>
