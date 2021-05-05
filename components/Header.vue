<template>
  <header>
    <a href="/" class="title">0505Keitan</a>
    <nav class="nav">
      <ul class="nav_list">
        <li><a href="https://scrapbox.io/0505Keitan/index">About</a></li>
        <li><a href="https://0505keitan.com/">Nuxt.js</a></li>
        <li><a href="https://next.0505keitan.com/">Next.js</a></li>
        <li><a href="https://jekyll.0505keitan.com/">Jekyll</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: grid;
  font-family: 'nobel';
  grid-template-columns: auto 1fr auto;
  margin: 0 auto;
  max-width: 1100px;
  padding: 1rem;
  position: relative;
  z-index: 1;
}

a {
  text-decoration: none;
}

.title {
  font-size: 1.5rem;
  color: #474a54;
}

.nav {
  grid-column: 3/4;
}

.nav_list {
  margin: 0;
  padding: 0;
  li {
    display: inline;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 12px;
    a {
      text-decoration: none;
      color: #474a54;
    }
  }
}
</style>
