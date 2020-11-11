<template>
  <div class="project">
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
      <div class="project-infos" ref="projectInfos">
          <div class="project-infos-content">
              <div class="project-infos-title-container" ref="projectInfosTitleContainer">
                  <div class="project-infos-title">{{data.Title}}</div>
              </div>
              <div class="project-infos-w" ref="projectInfosW">
                  <div class="project-infos-column project-infos-who">
                      <div class="question">who?</div>
                      <div class="answer">{{data.Who}}</div>
                  </div>
                  <div class="project-infos-column project-infos-when">
                      <div class="question">when?</div>
                      <div class="answer">{{data.When}}</div>
                  </div>
                  <div class="project-infos-column project-infos-what">
                      <div class="question">what?</div>
                      <div class="answer">{{data.What}}</div>
                  </div>
                  <div class="project-infos-column project-infos-how">
                      <div class="question">how?</div>
                      <div class="answer">{{data.How}}</div>
                  </div>
                  <div class="project-infos-column project-infos-link">
                      <div class="question">where?</div>
                      <div class="answer">
                          <a :href="data.Urllink" target="_blank"></a>{{data.Url}}
                      </div>
                  </div>
              </div>
          </div>

          <div class="horizontal-scroll" ref="horizontalScroll">
              <gallery :images="data.Gallery" :next="data.Nextproject" />
          </div>
      </div>
      <div class="splash"></div>

  </div>
</template>

<script>
  import gallery from '~/components/project/gallery'

  import { gsap } from "gsap/dist/gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  export default {
    data() {
      return {
        api_url: process.env.strapiBaseUri,
        heighPosition: 0
      }
    },
    components: {
      gallery
    },
    props: [
      'data'
    ],
    methods: {
        revealNextProject(e){
            e.fromElement.lastChild.classList.add('visible');
        },
        hideNextProject(e){
            e.fromElement.nextElementSibling.classList.remove('visible');
        },
        anim(){
          ScrollTrigger.create({
            id: "lt",
            trigger: ".hero",
            start: "top top",
            end: "bottom-=230px ",
            pin: ".hero-title",
            onLeave: ({progress, direction, isActive}) => {
                this.$refs.heroTitle.style.display = "none";
                this.$refs.hider.style.display = "none";
                this.$refs.projectInfosTitleContainer.classList.add('leave');
                this.$refs.projectInfosW.classList.add('reveal');
                // document.querySelector('.splash').classList.add('reveal');
            },
            onEnterBack: ({progress, direction, isActive}) => {
                this.$refs.heroTitle.style.display = "block";
                this.$refs.hider.style.display = "block";
                this.$refs.projectInfosTitleContainer.classList.remove('leave');
                this.$refs.projectInfosW.classList.remove('reveal');
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




          let horizontalScroll = document.getElementsByClassName('.horizontal-scroll');
          let horizontalScrollOW = horizontalScroll.clientWidth;
          console.log(horizontalScroll);

          console.log(horizontalScrollOW);

          // gsap.to('gallery', {
          //   x: () => -(document.getElementsByClassName('.gallery').clientWidth - document.documentElement.clientWidth) + "px",
          //   ease: "none",
          //   scrollTrigger: {
          //     trigger: '.horizontal-scroll',
          //     invalidateOnRefresh: true,
          //     pin: true,
          //     scrub: 1,
          //     end: () => "+=" + document.getElementsByClassName('gallery').clientWidth
          //   }
          // })

          // gsap.to(horizontalScroll, {
          //     x: () => -(horizontalScroll.scrollWidth - document.documentElement.clientWidth) + "px",
          //     ease: "none",
          //     scrollTrigger: {
          //         id: "lt3",
          //         trigger: horizontalScroll,
          //         invalidateOnRefresh: true,
          //         end: () => "+=" + horizontalScrollOW,
          //         scrub: 1,
          //         pin: ".horizontal-scroll",
          //         onUpdate: ({progress, direction, isActive}) =>{
          //             if(progress > 0.27){
          //                 document.getElementsByClassName('.project-infos').classList.add("uk-invisible");
          //             }else{
          //                 document.getElementsByClassName('.project-infos').classList.remove("uk-invisible");
          //             }
          //             if(progress > 0.98){
          //                 document.getElementsByClassName('.gallery').classList.add("red");
          //                 document.getElementsByClassName('.next-project').classList.add("red");
          //             }else{
          //                 document.getElementsByClassName('.gallery').classList.remove("red");
          //                 document.getElementsByClassName('.next-project').classList.remove("red");
          //             }
          //         }
          //     }
          // })
        }
    },
    mounted() {
        this.anim();
        // let horizontalScroll = this.$refs.horizontalScroll;
        // let horizontalScrollOW = horizontalScroll.clientWidth;
        console.log("OFFSET");
        // console.log(this.$refs.gallery);
        // console.log(this.$refs.gallery.clientWidth);
        console.log(ScrollTrigger.getAll());
    },
    destroyed(){
      console.log("destroyed");
      // ScrollTrigger.getAll().forEach(t => t.kill());
      let triggers = ScrollTrigger.getAll();
      triggers.forEach( trigger => {
        trigger.kill();
      });
    }
  }
</script>

<style lang="scss" scoped>
    .project{
      position: relative;
      overflow: hidden;
    }
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
    .splash{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: $primary-color;
        z-index: 0;
        z-index: -1;
        transform: translate(0px, -100%);
        transition: 0.8s cubic-bezier(0.94, 0.24, 0.36, 1);
        transition-delay: 0.5s;
        &.reveal{
            transform: translate(0px, 100%);
            transition: 1.1s cubic-bezier(0.94, 0.24, 0.36, 1);
            transition: 1.2s cubic-bezier(0.88, 0.3, 0.29, 0.82);
        }
    }
    .project-infos{
        position: relative;
        // position: fixed;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        display: flex;
        width: 100%;
        height: 100vh;
        z-index: -1;
        margin: 0 auto ;
        &-w{
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            // opacity: 0;
            // transform: translateY(50px) rotate(0.5deg);
            transition: 0.8s cubic-bezier(0.94, 0.24, 0.36, 1);
            &.reveal{
                opacity: 1;
                transform: translateY(0) rotate(0deg);
                transition: 1s cubic-bezier(0.94, 0.24, 0.36, 1);
                // transition-delay: 1.2s;
                transition-delay: 0.4s;
            }
            .question{
                font-size: 35px;
                color: $primary-color;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .answer{
            }
        }
        &-content{
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        &-column{
            position: relative;
            width: 100%;
            max-width: 240px;
            display: flex;
            flex-direction: column;
            margin-bottom: 65px;
            overflow: hidden;
            color: $black;
            &:last-of-type{
              margin-bottom: 0;
            }
        }
        &-title-container{
            position: relative;
            margin-bottom: 34px;
            overflow: hidden;
            color: transparent;
            .project-infos-title{
                color:$black;
                // transform: translate(0px, 100px) rotate(3deg);
                transform-origin: left;
                transition: 0.6s cubic-bezier(0.82, 0.33, 0.39, 0.95);
            }
            &.leave{
                color: $black;
                .project-infos-title{
                    color:$black;
                    transform: translate(0px, 0) rotate(0deg);
                    transform-origin: left;
                    transition: 0.6s cubic-bezier(0.82, 0.33, 0.39, 0.95);
                    transition-delay: 0.3s;
                }
            }
        }
        &-title{
            font-size: 5rem;
            font-weight: 600;
            color: transparent;
        }
        &-link{
            color: $primary-color;
        }
    }
    .horizontal-scroll{
        // width: 300vw;
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        display: flex;
        flex-direction: row;
        transition: background-color 0.5s ease;
        // overflow: hidden;

        opacity:0.5;
        &.red{
            background: $primary-color;
            transition: background-color 0.5s ease;
        }

    }

</style>
