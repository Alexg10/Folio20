<template>
    <div class="gallery" ref="gallery">
        <div class="gallery__images" v-for="(images,indexa) in data.Gallery" :key="'images-'+indexa">
            <div class="gallery__image" v-for="(image, index) in images.images" :key="'image-'+index">
                <img :src="api_url + image.url" alt="">
            </div>
            <div class="gallery__image">
              <nextProject :next="data.Nextproject" />
            </div>
        </div>
    </div>
</template>

<script>
  import nextProject from '~/components/project/nextProject'

  import { gsap } from "gsap/dist/gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
    mounted() {
      setTimeout(function(){
        const container = document.querySelector('.gallery');
        let galleryImage = document.getElementsByClassName('gallery__image');
        console.log(container.scrollWidth);
        gsap.to(container, {
          x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            end: () => "+=" + container.offsetWidth,
            onUpdate: ({progress, direction, isActive}) =>{
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
      },200)

    },
    destroyed() {
      let triggers = ScrollTrigger.getAll();
    },
  }
</script>

<style lang="scss">
    .gallery{
      position: relative;
      height: 100vh;
      &__scroll{
        display: flex;
      }
      &__images{
        // position: absolute;
        // top: 50%;
        // display: flex;
        // flex-direction: row;
        // flex-wrap: nowrap;
        // align-items: center;
        // width: max-content;
        // transform: translateY(-50%);
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
        height:100vh;
      }
      &__image{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 50px;
        pointer-events: none;
        height: 100%;
        width: auto;
        object-fit: cover;
        background-color: $white;
        transition: background-color 0.5s ease;
        .bg-red &{
          background: $primary-color;
          transition: background-color 0.5s ease;
          .next-project span{
            color: $white;
            background: $primary-color;
            transition: background-color 0.5s ease;
          }
        }
        &:first-of-type{
            padding-left: 0;
        }
        &:last-of-type{
          padding: 0;
        }
        img{
            // height: 100%;
            object-fit: cover;
        }
      }
    }
</style>
