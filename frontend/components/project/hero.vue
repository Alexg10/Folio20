<template>
    <div class="hero">
        <div class="hero-subtitle">Website - {{data.Who}}</div>
        <div class="hero-title" ref="heroTitle">
            <span>{{data.Title}}</span>
        </div>
        <div class="cover-container">
            <div class="hero-cover" :style="{ backgroundImage: `url('${api_url + data.Preview.url}')` }" ></div>
            <div class="marker-trigger"></div>
        </div>
        <div class="hider" ref="hider">
            <div class="hider-ref"></div>
        </div>
    </div>
</template>

<script>
  import { gsap } from "gsap/dist/gsap";
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
    methods: {
      animHero(){
          console.log(document.querySelector('.hero').offsetHeight);
          ScrollTrigger.create({
            id: "lt",
            trigger: ".hero",
            start: "top top",
            end: document.querySelector('.hero').offsetHeight,
            pin: ".hero-title",
            // onLeave: ({progress, direction, isActive}) => {
            //     this.$refs.heroTitle.style.display = "none";
            //     this.$refs.hider.style.display = "none";
            //     this.$refs.projectInfosTitleContainer.classList.add('leave');
            //     this.$refs.projectInfosW.classList.add('reveal');
            //     // document.querySelector('.splash').classList.add('reveal');
            // },
            // onEnterBack: ({progress, direction, isActive}) => {
            //     this.$refs.heroTitle.style.display = "block";
            //     this.$refs.hider.style.display = "block";
            //     this.$refs.projectInfosTitleContainer.classList.remove('leave');
            //     this.$refs.projectInfosW.classList.remove('reveal');
            //     // document.querySelector('.splash').classList.remove('reveal');
            // }
            onLeave: ({progress, direction, isActive}) => {
                document.querySelector('.hero-title').style.display = "none";
                document.querySelector('.hider').style.display = "none";
                document.querySelector('.project-infos-title-container').classList.add('leave');
                document.querySelector('.project-infos-w').classList.add('reveal');
                // document.querySelector('.splash').classList.add('reveal');
            },
            onEnterBack: ({progress, direction, isActive}) => {
                document.querySelector('.heroTitle').style.display = "block";
                document.querySelector('.hider').style.display = "block";
                document.querySelector('.project-infos-title-container').classList.remove('leave');
                document.querySelector('.project-infos-w').classList.remove('reveal');
                // document.querySelector('.splash').classList.remove('reveal');
            }
          });

          ScrollTrigger.create({
              id: "lt2",
              trigger: "body",
              start: "top top",
              end: "170px ",
              pin: ".hero-subtitle",
              // markers: true,
          });
      }
    },
    mounted() {
      setTimeout(() => {
          this.animHero();
      },500)
    },
    destroyed(){
      console.log("destroyedHero");
      ScrollTrigger.getAll().forEach(t => t.kill());
      let triggers = ScrollTrigger.getAll();
      triggers.forEach( trigger => {
        console.log(trigger);
        trigger.kill();
      });
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
            font-size: 10.625rem;
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
