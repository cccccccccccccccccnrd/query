<template>
  <the-search/>
  <section>
    <div
      v-if="loading"
    >
      <p>Loading...</p>
    </div>
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
  </section>
</template>

<script>
import { term, streams, loading } from '@/shared/state'
import TheSearch from '@/components/TheSearch.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'App',
  components: {
    TheSearch,
    Card
  },
  setup() {
    return {
      term,
      streams,
      loading
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

a, a:visited {
  text-decoration: none;
}

p {
  margin: 0;
}

#app {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

section {
  padding: 1em;
}

.card-container {
  display: flex;
  flex-flow: row wrap;
  gap: 1em;
}
</style>
