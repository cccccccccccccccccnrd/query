<template>
  <div class="the-search">
    <input
      v-model="term"
      @keyup.enter="search"
      class="search"
      type="text"
      name="search"
    >
  </div>
</template>

<script>
import { term, streams, loading } from '@/shared/state'
import { get } from '@/shared/api'

export default {
  name: 'TheSearch',
  setup() {
    async function search () {
      loading.value = true
      streams.value = await get(term.value)
      loading.value = false
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
  padding: 0.5em;
  font-family: serif;
  font-size: 2em;
  border: 0;
  border-bottom: 1px solid black;
}

.search:focus {
  outline: 0;
}
</style>
