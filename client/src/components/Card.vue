<template>
  <div class="card">
    <iframe
      :src="stream.url"
      frameborder="0"
    ></iframe>
    <div class="meta">
      <p
        v-for="(entry, index) in stream.meta"
        :key="`meta-${index}`"
        class="chip"
      >{{ entry.toUpperCase().trim() }}</p>
      <a :href="stream.url" class="chip">&nearr;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['stream'],
  setup() {
    return {}
  }
}
</script>

<style scoped>
.card {
  max-width: 20vh;
  height: 100%;
  color: black;
  border: 1px solid black;
  overflow: hidden;
}

iframe {
  display: block;
  width: 100%;
  min-height: 30vh;
}

.meta {
  display: flex;
  flex-flow: row wrap;
  gap: 0.25em;
  padding: 0.25em;
}

.chip {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.4em;
  font-size: 0.75em;
  border-radius: 5px;
  border: 1px solid black;
}
</style>
