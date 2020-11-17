<template>
  <div class="home">
    <div class="home-hero uk-text-center">
      <div class="home__cta-container home__cta-container__hello">
        <h1 class="home-title home-hello">Hello</h1>
      </div>
      <div class="home__cta-container home__cta-container__project">
        <nuxt-link to="/project" class="home-title home-project">Projects</nuxt-link>
      </div>
    </div>
    <div class="home-description uk-text-left">
      Hello I’m Alex lorem ipsum dolor sit amet consectetut sed to, adisciping lorem dolor!
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
      var font = document.getElementsByClassName("home-title");
      for (var i = 0; i < font.length; i++) {
        font[i].style['font-variation-settings'] = `"wght" ${weight}`;
      }
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
    &-title{
      // position: absolute;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
      color: $black-light;
      text-align: left;
      font-size: 15.625rem;
      line-height: 240px;
      margin: 0;
      transition: all 0.1s ease, transform 0.4s ease,;
    }
    &-hero{
      position: relative;
      width: 100%;
      height: 280px;
    }
    &-hello{
      display: flex;
      transform: translateY(0);
      transition: transform 0.4s ease;
      &-container{
        overflow: hidden;
      }
    }
    &-project{
      display: block;
      transform: translateY(100%);
      transition: transform 0.4s ease;
    }
    &-description{
      position: absolute;
      max-width: 17.8125rem;
      right: 10%;
    }
    &__cta{
      &-container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 90%;
        overflow: hidden;
        &__hello{
          z-index: 99;
          &:hover{
            .home-hello{
              transform: translateY(-100%);
              transition: transform 0.4s ease;
            }
            &+.home__cta-container__project{
              .home-project{
                transform: translateY(0%);
                transition: transform 0.4s ease;
              }
            }
          }
        }
        &__project{
          z-index: 95;
        }
      }
    }
  }
</style>
