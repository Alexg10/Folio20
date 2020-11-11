<template>
    <div ref="gallera">
    <div class="gallery" ref="gallery">
        <div class="gallery__images" v-for="(images,indexa) in images" :key="'images-'+indexa">
            <div class="gallery__image" v-for="(image, index) in images.images" :key="'image-'+index">
                <img :src="api_url + image.url" alt="">
            </div>
        </div>
    </div>
    <div class="next-project" ref="nextProject">
        <div class="next-project-link" @mouseenter="revealNextProject" @mouseleave="hideNextProject" >
            <svg width="25px" height="12px" viewBox="0 0 25 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="next-arrow">
                <defs>
                    <path d="M20.035062,7.20713701 C19.7591217,6.92771933 19.3066628,6.93134029 19.0262573,7.21588767 C18.7455542,7.5001333 18.7416845,7.95909042 19.0173272,8.2385081 L22.5512693,11.8205462 L0.707264696,11.8205462 C0.317316568,11.8205462 4.61436445e-14,12.1476399 4.61436445e-14,12.5498686 C4.61436445e-14,12.9520973 0.317316568,13.279191 0.707264696,13.279191 L22.5509716,13.279191 L19.0173272,16.8612291 C18.7416845,17.1409485 18.7455542,17.5996039 19.0262573,17.8841513 C19.3066628,18.1686987 19.7591217,18.1723196 20.035062,17.8926002 L24.7960012,13.0664594 C24.9356086,12.9249401 25.0028821,12.7375552 24.9999054,12.5498686 C25.0028821,12.3624837 24.9356086,12.1747971 24.7960012,12.0332778 L20.035062,7.20713701 Z" id="path-1"></path>
                </defs>
                <g id="A---Portfolio" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="C.1.4---Project-page-2---05" transform="translate(-1201.000000, -395.000000)">
                        <g id="next-project---hover" transform="translate(1028.000000, 306.000000)">
                            <g id="icon-/-arrow" transform="translate(173.000000, 82.000000)">
                                <mask id="mask-2" fill="white">
                                    <use xlink:href="#path-1"></use>
                                </mask>
                                <use id="icon" fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <nuxt-link :to="next.slug" prefetch>
                <span>Next-project</span>
            </nuxt-link>
        </div>
        <div class="next-project-name" ref="nextProjectName">
            {{next.Title}}
        </div>
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
        galleryW: 0
      }
    },
    props: [
      'images',
      'next'
    ],
    methods: {
      revealNextProject(e){
          e.fromElement.lastChild.classList.add('visible');
      },
      hideNextProject(e){
          e.fromElement.nextElementSibling.classList.remove('visible');
      },
      matchHeight () {
        let width = this.$refs.gallery.clientWidth;
        console.log("width");
        console.log(width);
      }
    },
    mounted() {
      this.$nextTick(function () {
        console.log(this.$el.clientWidth);
        console.log(this.$el);

        this.matchHeight();
      })
      window.addEventListener('resize', this.getWindowHeight)

      this.matchHeight();

      setTimeout(() => {
        console.log("settiemOUUUUUUT" );

        this.galleryW = document.querySelector('.gallery').offsetWidth;
        let docHeight = window.innerHeight;
        console.log(docHeight);
        console.log(this.galleryW );
        let scrollZone = docHeight + this.galleryW;
        console.log(scrollZone);
        // gsap.to('.gallery', {
        //   x: () => -(this.galleryW - document.documentElement.clientWidth) + "px",
        //   ease: "none",
        //   scrollTrigger: {
        //     trigger: '.horizontal-scroll',
        //     pin: true,
        //     id: "lt5",
        //     scrub: 1,
        //     markers: true,
        //     end: () => "+=" + this.galleryW,
        //   }
        // })
          ScrollTrigger.create({
              id: "lt4",
              trigger: ".project-infos",
              start: "top top",
              end: this.galleryW,
              pin: ".project-infos",
              // markers: true,
          });

        gsap.to('.horizontal-scroll', {
            x: () => -(this.galleryW - document.documentElement.clientWidth) + "px",
            ease: "none",
            scrollTrigger: {
                id: "lt3",
                trigger: '.horizontal-scroll',
                invalidateOnRefresh: true,
                end: () => "+=" + this.galleryW,
                scrub: 1,
                markers: true,
                pin: ".horizontal-scroll",
                // onUpdate: ({progress, direction, isActive}) =>{
                //     if(progress > 0.27){
                //         document.getElementsByClassName('.project-infos').classList.add("uk-invisible");
                //     }else{
                //         document.getElementsByClassName('.project-infos').classList.remove("uk-invisible");
                //     }
                //     if(progress > 0.98){
                //         document.getElementsByClassName('.gallery').classList.add("red");
                //         document.getElementsByClassName('.next-project').classList.add("red");
                //     }else{
                //         document.getElementsByClassName('.gallery').classList.remove("red");
                //         document.getElementsByClassName('.next-project').classList.remove("red");
                //     }
                // }
            }
        })
      }, 50);

        console.log("OFFSET2");
        this.galleryW = document.querySelector('.gallery').offsetWidth;
        console.log("this.galleryW ");
        console.log(this.galleryW );

        let horizontalScroll = document.getElementsByClassName('gallery')[0];
        let horizontalScrollOW = horizontalScroll.clientWidth;

        console.log(horizontalScroll);
        console.log(horizontalScrollOW);
        console.log(this.$refs);


    }


  }
</script>

<style lang="scss" scoped>
    .gallery{
        height: 100vh;
        display: flex;
        top: 0;
        left: 0;
        // padding-left: 120vw;
        box-sizing: border-box;
        justify-content: flex-start;
        transition: background-color 0.5s ease;
        &.red{
            background: $primary-color;
            transition: background-color 0.5s ease;
        }
    }
    .gallery__images{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        width: max-content;

    }
    .gallery__image{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 50px;
        pointer-events: none;
        height: 70vh;
        width: auto;
        object-fit: cover;
        &:first-of-type{
            padding-left: 0;
        }
        img{
            // height: 100%;
            object-fit: cover;
        }
    }

    .next-project{
        position: relative;
        pointer-events: initial;
        height: 100vh;
        float: left;
        display: flex;
        min-width: 50vw;
        justify-content: flex-end;
        align-items: center;
        padding: 0 200px 0 150px;
        color: $black;
        font-size: 32px;
        white-space: nowrap;
        transition: all 0.5s ease;
        overflow: hidden;
        &.red{
            color: white;
            background: $primary-color;
            transition: all 0.5s ease;
            span{
                background: $primary-color;
                color: $white;
                transition: all 0.5s ease;
            }
        }
        span{
            background: white;
            color: $black;
            position: relative;
            transition: all 0.5s ease;
        }
        .next-project-name{
            position: absolute;
            color: $white;
            top: 50%;
            right: -93px;
            transform: translate(50%, -50%) rotate(-90deg);
            font-size: 5rem;
            font-weight: 600;
            transition: 0.6s cubic-bezier(0.66, 0.02, 0.31, 1);
            &.visible{
                transform: translate(0, -50%) rotate(-90deg);
                transition: 0.6s cubic-bezier(0.66, 0.02, 0.31, 1);
            }
        }
        .next-project-link{
            position: relative;
            transform: translateX(0px);
            transition: 0.6s cubic-bezier(0.66, 0.02, 0.31, 1);
            &:hover{
                a{
                  text-decoration: none;
                }
                cursor: pointer;
                transform: translateX(-40px);
                transition: 0.6s cubic-bezier(0.66, 0.02, 0.31, 1);
                .next-arrow{
                    transform: translateX(40px) translateY(-50%);
                    transition: 0.6s cubic-bezier(0.66, 0.02, 0.31, 1);
                }
            }
            .next-arrow{
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateX(0px) translateY(-50%);
                transition: 0.6s cubic-bezier(0.66, 0.02, 0.31, 1);
            }
        }
    }
</style>
