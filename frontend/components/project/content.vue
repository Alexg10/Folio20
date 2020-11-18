<template>
  <div class="project" :key="data.slug">
      <hero :data="data"></hero>
      <projectInfos :data="data" />
      <client-only>
        <gallery v-if="data" :data="data" />
      </client-only>
  </div>
</template>

<script>
  import { gsap } from "gsap/dist/gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  import hero from '~/components/project/hero'
  import projectInfos from '~/components/project/projectInfos'
  import gallery from '~/components/project/gallery'

  export default {
    data() {
      return {
        api_url: process.env.strapiBaseUri,
      }
    },
    props: [
      'data'
    ],
    components: {
      hero,
      projectInfos,
      gallery,
    },
    methods: {
      anim(){

      }
    },
    mounted() {
      this.anim();
    },
    destroyed(){
      // ScrollTrigger.getAll().forEach(t => t.kill());
      // let triggers = ScrollTrigger.getAll();
    }
  }
</script>

<style lang="scss" scoped>
    .project{
      position: relative;
    }
    .splash{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: $primary-color;
        z-index: -1;
        transform: translate(0px, -100%);
        transition: 0.8s cubic-bezier(0.94, 0.24, 0.36, 1);
        transition-delay: 0.5s;
        &.reveal{
            transform: translate(0px, 100%);
            transition: 1.2s cubic-bezier(0.88, 0.3, 0.29, 0.82);
        }
    }
    .horizontal-scroll{
        width: 300vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        transition: background-color 0.5s ease;
        &.red{
            background: $primary-color;
            transition: background-color 0.5s ease;
        }
        .gallery{
            height: 100vh;
            display: flex;
            top: 0;
            left: 0;
            padding-left: 120vw;
            box-sizing: border-box;
            justify-content: flex-start;
            transition: background-color 0.5s ease;
            &.red{
                background: $primary-color;
                transition: background-color 0.5s ease;
            }
        }
    }

</style>
