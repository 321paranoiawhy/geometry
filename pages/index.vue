<script setup lang="ts">
const online = useOnline()

interface TLink { title: string, to: string }
const regularPolygon: TLink[] = [
  { title: 'Regular Decagon', to: '/regular-polygon/single/10' },
  { title: 'Showcase', to: '/regular-polygon/showcase' },
  { title: 'Playground', to: '/regular-polygon/playground' },
]
const circle: TLink[] = [
  { title: 'Circle with ten vertices', to: '/circle/single/10' },
  { title: 'Showcase', to: '/circle/showcase' },
  { title: 'Playground', to: '/circle/playground' },
]
</script>

<template>
  <div>
    <!--    <Logos mb-6 /> -->
    <Suspense>
      <ClientOnly>
        <!--        <PageView v-if="online" /> -->
        <div v-if="!online" text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>

    <h2 my-4>
      Regular Polygon
    </h2>
    <ul class="custom-ul">
      <li v-for="item in regularPolygon" :key="item.to">
        <nuxt-link :to="item.to" target="_blank">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>

    <h2 my-4>
      Circle
    </h2>
    <ul class="custom-ul">
      <li v-for="item in circle" :key="item.to">
        <nuxt-link :to="item.to" target="_blank">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>

    <!--    <InputEntry /> -->
  </div>
</template>

<style scoped lang="scss">
.custom-ul {
  list-style: disc;
  li {
    color: var(--el-color-primary);
    &::marker {
      color: #848486;
    }
    a {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
}
</style>
