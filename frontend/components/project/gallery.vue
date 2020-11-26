<template>
  <div class="gallery" ref="gallery">
    <div v-images-loaded="horizontalScroll" class="gallery__images" v-for="(images, i) in data.Gallery" :key="'images-'+i">
      <div class="gallery__image" v-for="(image, index) in images.images" :key="'image-'+index">
        <img :src="api_url + image.url" alt="">
      </div>
      <div class="gallery__image">
        <nextProject :next="data.Nextproject"/>
      </div>
    </div>
  </div>
</template>

<script>
  import nextProject from '~/components/project/nextProject'

  import {gsap} from "gsap/dist/gsap";

  export default {
    data() {
      return {
        api_url: process.env.strapiBaseUri,
      }
    },
    components: {
      nextProject
    },
    props: [
      'data'
    ],
    methods: {
      horizontalScroll() {
        const container = this.$refs.gallery;
        container.style.width = Object.values(container.querySelectorAll('.gallery__image')).reduce((total, el) => total + el.offsetWidth, 0) + 720 + 'px';
        gsap.to(container, {
          x: () => -(container.clientWidth - document.documentElement.clientWidth) + "px",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            onUpdate: ({progress, direction, isActive}) => {
                // if(progress > 0.27){
                //     this.$refs.projectInfos.classList.add("uk-invisible");
                // }else{
                //     this.$refs.projectInfos.classList.remove("uk-invisible");
                // }
                if(progress > 0.98){
                  document.body.classList.add("bg-red");
                }else{
                  document.body.classList.remove("bg-red");
                }
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .gallery {
    height: 100vh;

    &__images {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      height: 100%;
    }

    &__image {
      display: flex;
      align-items: center;
      padding: 0 50px;
      pointer-events: none;
      height: 100%;
      width: auto;
      background-color: $white;
      transition: background-color 0.5s ease;

      .bg-red & {
        background: $primary-color;
        transition: background-color 0.5s ease;

        .next-project span {
          color: $white;
          background: $primary-color;
          transition: background-color 0.5s ease;
        }
      }

      &:first-of-type {
        padding-left: 0;
      }

      &:last-of-type {
        padding: 0;
      }
    }
  }
</style>
