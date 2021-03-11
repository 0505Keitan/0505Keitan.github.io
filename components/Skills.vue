<template>
  <section class="section" id="profile">
    <h1>Skiils</h1>
    <div class="inner">
      <Skill name="JavaScript" level="★★★★☆" fa="fa-js-square" />
      <Skill name="Node.js" level="★★★★☆" fa="fa-node-js" />
      <Skill name="Python" level="★★★☆☆" fa="fa-python" />
      <Skill name="HTML5" level="★★★★★" fa="fa-html5" />
      <Skill name="CSS3" level="★★★★☆" fa="fa-css3-alt" />
      <Skill name="PHP" level="★★★☆☆" fa="fa-php" />
      <Skill name="Google Apps Script" level="★★★★★" fa="fa-google" />
      <Skill name="SwiftUI" level="★★★☆☆" fa="fa-swift" />
      <Skill name="Nuxt.js" level="★★★☆☆" fa="fa-vuejs" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Skill from '../components/Skill.vue'
export default Vue.extend({
  components: {
    Skill: Skill
  }
})
</script>

<style lang="scss" scoped>
.inner {
  max-width: 1320px;
  width: 100%;
}

.card-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;

  .skill-card {
    text-align: center;
  }
}

@media screen and (max-width: 1200px) {
  .card-wrapper {
    flex-wrap: wrap;
    justify-content: normal;
    .skill-card {
      margin-bottom: 20px;
    }
  }
}
</style>
