<template>
  <div>
    <div class="projects-infos">
        <!-- <div class="projects-nb">
            <span class="projects-current-index">
                0{{this.currentIndex + 1}}
            </span>
            <span class="projects-count">
                0{{projectsLenght}}
            </span>

        </div>
        <nuxt-link v-if="currentProject" :to="'/projects/' + currentProject.slug" class="projects-title-link">
            <div class="projects-title">
                {{currentProject.Title}}
            </div>
        </nuxt-link> -->
    </div>
    <client-only>
      <ListSlider :projects="projects" />
    </client-only>
  </div>
</template>

<script>
  import {mapGetters, mapState } from 'vuex';

  export default {
    data() {
      return {
          currentIndex: 0,
      };
    },
    computed: {
      // ...mapGetters({
      //   projects: 'projects/list'
      // }),
      ...mapState({
        projects: state => state.projects.projects,
      })
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
    .projects-infos{
        position: absolute;
        top: 50%;
        left: 6rem;
        transform: translateY(-50%);
        z-index: 9;
        .projects-nb{
            color: $grey;
            .projects-current-index{
                position: relative;
                color: $black;
                margin-right: 50px;
                display: inline-block;
                min-width: 26px;
                &:after{
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: -40px;
                    width: 30px;
                    height: 1px;
                    background-color: $grey;
                }
            }
        }
    }
    .projects-title{
        color: $primary-color;
        font-size: 10.625rem;
        font-size: 5.625rem;
        font-weight: bold;
        &-link{
            &:hover{
                text-decoration: none;
            }
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
