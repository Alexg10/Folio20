<template>
    <div class="projects">
        <div class="projects-infos">
            <div class="projects-nb">
                <span class="projects-current-index">
                    0{{this.currentIndex + 1}}
                </span>
                <span class="projects-count">
                    0{{projectsLenght}}
                </span>

            </div>
            <nuxt-link :to="'/projects/' + currentProject.slug" class="projects-title-link">
                <div class="projects-title">
                    {{currentProject.Title}}
                </div>
            </nuxt-link>
        </div>

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
    import projectsQuery from '~/apollo/queries/project/projects'

    export default {
        data() {
            return {
                api_url: process.env.strapiBaseUri,
                projects: [],
                currentIndex: 0,
                slickOptions: {
                    accessibility: true,
                    slidesToShow: 2,
                    infinite: true,
                    arrows: false,
                    focusOnSelect: true

                },
            };
        },
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
        },
        apollo: {
            projects: {
                prefetch: true,
                query: projectsQuery
            }
        }
    }
</script>

<style lang="scss">

    .projects{
        overflow: hidden;
        width: 100vw;
        display: block;
        height: 100vh;
        position: relative;
    }
    .slide-project{
        width: 400px;
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
        width: 870px;
        position: absolute;
        right: -100px;
        top: 50%;
        transform: translateY(-50%);

    }
    .slick-slide{
        margin: 0 40px;
            width: 400px;
            height: 510px;
    }

</style>
