<template>
  <div class="the-search">
    <input
      v-model="term"
      @keyup.enter="search"
      class="search"
      type="text"
      name="search"
      placeholder="Type ur query..."
    >
  </div>
</template>

<script>
import { term, streams, platforms, loading, speed } from '@/shared/state'
import { get } from '@/shared/api'

export default {
  name: 'TheSearch',
  setup() {
    async function search () {
      loading.value = true

      let counter = 0
      const interval = setInterval(() => {
        counter = counter + 10
      }, 10)

      const response = await get(term.value)
      streams.value = response.streams
      platforms.value = response.platforms
      console.log(platforms.value, streams.value)
      loading.value = false

      clearInterval(interval)
      speed.value = counter
    }

    return {
      term,
      streams,
      search
    }
  }
}
</script>

<style scoped>
.search {
  width: 100%;
  padding: 0.25em;
  font-family: serif;
  font-size: 2em;
  text-transform: uppercase;
  border: 0;
  border-bottom: 1px solid black;
}

.search:focus {
  outline: 0;
}
</style>
