<template>
  <div class="container">
    <div>
      <Top />
      <Profile />
      <Skills />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '../assets/css/style.scss'

export default Vue.extend({})
</script>

<style lang="scss">
.container {
  margin-top: 65px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  padding: 1rem 2rem;
}

.section {
  margin-bottom: 15px;

  .inner {
    padding: 10px 0;
  }

  h1 {
    font-family: 'Oswald', sans-serif;
    letter-spacing: -0.01em;
    font-size: 40px;
    margin-bottom: 5px;
    color: #008c16;
    text-align: left;
  }
}
</style>
