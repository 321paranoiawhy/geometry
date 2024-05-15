export const useGlobalStore = defineStore('global', () => {
  const isGifJsLoaded = ref(false)
  const setGifJsLoaded = (bool: boolean) => { isGifJsLoaded.value = bool }

  return { isGifJsLoaded, setGifJsLoaded }
})
