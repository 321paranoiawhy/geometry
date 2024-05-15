<script setup lang="ts">
import nzh from 'nzh'

const nzhCN = nzh.cn
const route = useRoute<'regular-polygon-side'>()
const side = +route.params.side
if (Number.isNaN(side)) {
  // ElMe
}
</script>

<template>
  <div>
    <h2>正{{ nzhCN.encodeS(side) }}边形</h2>
    <regular-polygon :side-counts="side" />
  </div>
</template>
