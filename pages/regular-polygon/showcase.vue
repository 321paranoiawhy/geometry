<script setup lang="ts">
import nzh from 'nzh'

// 简体中文 nzh.cn
// 繁体中文 nzh.hk
// encodeS 零一二三四五六七八九十百千万亿
// encodeB 零壹贰叁肆伍陆柒捌玖拾佰仟万亿
// toMoney 转人民币大写 圆角分
// decodeS
// decodeB
// https://www.hebaiwan.cn/
const nzhCN = nzh.cn
// const nzhHK = nzh.hk

const sideCounts = [5, 10, 15, 20, 30, 50, 80, 100]
</script>

<template>
  <div v-for="side in sideCounts" :key="side">
    <h2>正{{ nzhCN.encodeS(side) }}边形</h2>
    <regular-polygon :side-counts="side" />
  </div>
</template>
