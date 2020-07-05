<template>
  <div class="home">
    <div class="home-hero uk-text-center">
      <h1 class="home-hello">Hello</h1>
      <div class="home-description uk-text-left">
        Hello I’m Alex lorem ipsum dolor sit amet consectetut sed to, adisciping lorem dolor!
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted(){
    document.body.onmousemove = e => {
      var w = window.innerWidth;
      var mousePosX = e.clientX;
      var pourcentage = (mousePosX / w) * 100;
      var weight = 900 * (pourcentage / 100);
      var font = document.getElementsByClassName('home-hello')[0];
      
      font.style['font-variation-settings'] = `"wght" ${weight}`;
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: $black;
    color: $white;
    &-hero{
      position: relative;
      width: 50%;
    }
    &-hello{
      color: $black-light;
      font-size: 15.625rem;
    }
    &-description{
      position: absolute;
      max-width: 17.8125rem;
      right: -25%;
    }
  }
</style>
