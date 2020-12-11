<template>
  <div>
    <slick-slide
        ref="slick"
        class="projects-slider"
        :options="slickOptions"
        @init="handleInit"
        @afterChange="handleAfterChange"
        >
        <div class="slide-project" v-for="(project, index) in projects" :key="index">
            <div class="project-img">
                <img :src="api_url + project.Preview.url" alt="cover">
            </div>
        </div>
    </slick-slide>
    </div>
</template>

<script>
  import mapGetters from 'vuex';

  export default {
    data() {
      return {
          api_url: process.env.strapiBaseUri,
          currentIndex: 0,
          slickOptions: {
              speed: 800,
              accessibility: true,
              slidesToShow: 2,
              infinite: true,
              arrows: false,
              focusOnSelect: true
          },
      };
    },
    props : [
      'projects'
    ],
    computed: {
      cover(){
          return this.projects[this.currentIndex].acfProjectFields.headerPicture.sourceUrl;
      },
      currentProject(){
          return this.projects[this.currentIndex];
      },
      projectsLenght(){
          return this.projects.length
      }

    },
    methods: {
        reInit() {
          this.$refs.slick.reSlick();
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        handleAfterChange(event, slick, currentSlide) {
            console.log(currentSlide);
            this.currentIndex = currentSlide;
            // currentProject;
        },
        keySlide(e) {
            var vm = this;
            document.onkeydown = function(e){
                e = e || window.event;
                if (e.keyCode == '38') {
                    vm.$refs.slick.prev();
                }
                else if (e.keyCode == '40') {
                    vm.$refs.slick.next();
                }
                else if (e.keyCode == '37') {
                    vm.$refs.slick.prev();
                }
                else if (e.keyCode == '39') {
                    vm.$refs.slick.next();
                }
            }
        },
    },
    mounted() {
      this.keySlide();
    }
  }
</script>

<style lang="scss" scoped>
    .slide-project{
        width: 400px;
        min-width: 400px;
        height: 510px;
        img{
            height: 510px;
            object-fit: cover;
        }
    }
        .projects-slider{
        width: 875px;
        position: absolute;
        right: -100px;
        top: 50%;
        transform: translateY(-50%);
        &:after{
          content: '';
          position: absolute;
          left: 425px;
          top: 0;
          width: 80px;
          height: 100%;
          background-color: $white;

        }

    }
    .slick-slide{
        margin: 0;
        width: 400px;
        height: 510px;
    }
</style>
