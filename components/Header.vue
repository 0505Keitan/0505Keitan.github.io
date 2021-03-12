<template>
  <header>
    <a href="/" class="title">0505Keitan</a>
    <nav class="nav">
      <ul class="nav-list">
        <li><a href="https://scrapbox.io/0505Keitan/index">About</a></li>
        <li><a href="https://portfolio.0505keitan.now.sh/">Portfolio</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$ruler: 16px;
$color-red: #AE1100;
$color-bg: #EBECF0;
$color-shadow: #9FC98D;
$color-white: #FFF;

header {
  margin: 0 auto;
  max-width: 1140px;
  padding: 1rem;
  position: relative;
}

a {
  text-decoration: none;
}

.title {
  font-size: 1.5rem;
  color: #474a54;
}

.nav {
  float: right;
}

.nav-list li {
  display: inline;
  font-size: 1.2rem;
  font-weight: 400;
}

li {
  a {
    color:#717688;
    font-weight: bold;
    box-shadow: -5px -5px 20px $color-white,  5px 5px 20px $color-shadow;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 600;
    border-radius: 10px;
    padding: 10px;
    font-size: 30px;

    &:hover {
      box-shadow: -2px -2px 5px $color-white, 2px 2px 5px $color-shadow;
    }

    &:active {
      box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px $color-white;
    }

    .icon {
      margin-right: $ruler/2;
    }

    &.unit {
      border-radius: $ruler/2;
      line-height: 0;
      width: $ruler*3;
      height: $ruler*3;
      display:inline-flex;
      justify-content: center;
      align-items:center;
      margin: 0 $ruler/2;
      font-size: $ruler*1.2;

      .icon {
        margin-right: 0;
      }
    }

    &.red {
      display: block;
      width: 100%;
      color:$color-red;
    }
  }
}
</style>
