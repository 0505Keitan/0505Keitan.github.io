<template>
  <div class="skill">
    <em class="fab skill-icon" :class="fa"></em>
    <span class="skill-level">{{ level }}</span>
    <span class="skill-name">{{ name }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: [
    'name',
    'level',
    'fa'
  ]
})
</script>

<style lang="scss" scoped>
.skill {
  margin: 0 0 20px;
}
em {
  font-size: 40px;
}
span {
  font-size: 40px;
}

.skill-icon {
  margin: 0 12px 0 0;
}
.skill-level {
  color: #000;
}
.skill-name {
  margin: 0 12px 0 0;
  font-size: 30px;
}
</style>