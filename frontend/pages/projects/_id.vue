<template>
    <transition name="page" mode="out-in">
      <div v-if="projects[0]">
        <projectContent :data='projects[0]'></projectContent>
      </div>
      <div v-else class="project">
          LOADING
      </div>
    </transition>
</template>

<script>
    import projectQuery from "~/apollo/queries/project/project";
    import { mapActions, mapGetters } from 'vuex'
    import { gsap } from "gsap/dist/gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    import projectContent from '~/components/project/content'

    export default {
        data() {
            return {
                api_url: process.env.strapiBaseUri,
                projects: {},
            };
        },
        components: {
          projectContent
        },
        transition: {
            name: 'page',
            mode: 'out-in'
        },
        apollo: {
            projects: {
                query: projectQuery,
                variables(){
                    return {
                        slug : this.$route.params.id
                    }
                }
            }
        },
        computed: {
            // ...mapGetters({
            //     currentProject: "projects/currentProject",
            //     currentGalleryW: "projects/currentGalleryW",
            // }),
        }

    }
</script>

<style lang="scss" scoped>
    .project{
        position: relative;
    }


</style>
