<template>
    <div class="hero">
        <div class="hero-subtitle">Website - {{data.Who}}</div>
        <div class="hero-title" ref="heroTitle">
            <span>{{data.Title}}</span>
        </div>
        <div class="cover-container">
            <div class="hero-cover" :style="{ backgroundImage: `url('${api_url + data.Preview.url}')` }"></div>
            <div class="marker-trigger"></div>
        </div>
        <div class="hider" ref="hider">
            <div class="hider-ref"></div>
        </div>
    </div>
</template>

<script>
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  export default {
    data() {
      return {
        api_url: process.env.strapiBaseUri,
      }
    },
    props: [
      'data'
    ],
    mounted() {
      const title = this.$refs.heroTitle;
      ScrollTrigger.create({
        id: 'pinTitle-' + this.data.Title,
        trigger: '.project',
        endTrigger: '.hider',
        end: `bottom top+=${title.offsetTop + title.clientHeight}`,
        pin: title,
        markers: true
      })
    },
    destroyed(){
      ScrollTrigger.getById('pinTitle-' + this.data.Title).kill();
    }
  }
</script>

<style lang="scss" scoped>
    .hero{
        position: relative;
        background-color: $white;
        height: 100%;
        box-sizing: border-box;
        &-subtitle{
            position: relative;
            top: 170px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 3px;
            text-align: center;
            margin-bottom: 120px;
        }
        &-title{
            position: absolute;
            top: 200px;
            left: 50%;
            width: 100%;
            text-align: center;
            color: $primary-color;
            font-size: 8.625rem;
            font-weight: bold;
            transform: translateX(-50%);
            z-index: 9;
            overflow: hidden;
        }
        &-cover{
            position: relative;
            width: 100%;
            height: 100vh;
            object-fit: cover;
            background-size: cover;
            background-position: 50%;
        }
    }
    .cover-container{
        top: 320px;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: -1;
    }
    .hider{
        position: absolute;
        bottom: -200px;
        width: 100%;
        height: 200px;
        background: white;
        z-index: 99;
        overflow: hidden;
    }
</style>
