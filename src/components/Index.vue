<template>
  <div>
    <button @click="toPage('/1')">1</button>
    <button @click="toPage('/2')">2</button>
    <button @click="toPage('/3')">3</button>
  </div>
</template>
<script>

export default {
  name: 'Index',
  methods: {
    toPage(path) {
      this.$router.push(path);
    }
  }
}
</script>
<style scoped>
  button {
    display: block;
  }
</style>
