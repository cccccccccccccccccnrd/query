<template>
  <the-search/>
  <main
    :class="{ loading: loading }"
  >
    <div
      class="card-container"
      v-if="!loading"
    >
      <card
        v-for="(stream, index) in streams"
        :key="`stream-${index}`"
        :stream="stream"
      />
    </div>
  </main>
  <footer>
    <p>{{ info }}</p>
  </footer>
</template>

<script>
import TheSearch from '@/components/TheSearch.vue'
import Card from '@/components/Card.vue'

import { computed } from 'vue'
import { term, streams, platforms, loading, speed } from '@/shared/state'

export default {
  name: 'App',
  components: {
    TheSearch,
    Card
  },
  setup() {
    const info = computed(() => {
      if (speed.value) {
        return `The query took ${speed.value}ms and scraped streams from ${platforms.value.join(' and ')}.`
      } else {
        return '...'
      }
    })

    return {
      term,
      streams,
      platforms,
      loading,
      info
    }
  },
}
</script>

<style>
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

a, a:visited {
  color: black;
  text-decoration: none;
}

p {
  margin: 0;
}

main {
  padding: 0.5em;
  flex: 1;
  overflow-y: scroll;
}

footer {
  width: 100%;
  padding: 0.25em;
  font-size: 2em;
  text-transform: uppercase;
  border-top: 1px solid black;
}

#app {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.loading {
  background: rgba(0, 0, 0, 0.075);
}

.card-container {
  display: flex;
  flex-flow: row wrap;
  gap: 0.5em;
}
</style>
