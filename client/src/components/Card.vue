<template>
  <div class="card">
    <iframe
      :src="stream.url"
      frameborder="0"
    ></iframe>
    <div class="meta">
      <p class="chip">{{ stream.platform }}</p>
      <p
        v-for="(entry, index) in stream.meta"
        :key="`meta-${index}`"
        class="chip"
      >{{ entry }}</p>
      <a
        :href="stream.url"
        class="chip"
        target="_blank"
      >&nearr;</a>
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
a:hover {
  box-shadow: 0 0.075em 0 black;
  transform: translateY(-0.075em);
  transition: all 400ms ease-in-out;
}

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
  background: rgba(0, 0, 0, 0.075);
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
  text-transform: uppercase;
  border-radius: 5px;
  border: 1px solid black;
}
</style>
