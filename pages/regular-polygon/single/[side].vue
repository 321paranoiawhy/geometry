<script setup lang="ts">
import nzh from 'nzh'

const nzhCN = nzh.cn
const route = useRoute<'regular-polygon-single-side'>()
const side = +route.params.side
if (Number.isNaN(side))
  ElMessage.error({ message: 'Invalid route param side!' })
</script>

<template>
  <div>
    <h2>正{{ nzhCN.encodeS(side) }}边形</h2>
    <regular-polygon :side-counts="side" />
  </div>
</template>
