<template>
    <div class="project">
        <div class="hero">
            <div class="hero-subtitle">Website - {{projects[0].Who}}</div>
            <div class="hero-title">
                <span>{{projects[0].Title}}</span>
            </div>
            <div class="cover-container">
                <div class="hero-cover" :style="{ backgroundImage: `url('${api_url + projects[0].Preview.url}')` }" ></div>
                <div class="marker-trigger"></div>
            </div>
            <div class="hider">
                <div class="hider-ref"></div>
            </div>
        </div>
        <div class="project-infos">
            <div class="project-infos-content">
                <div class="project-infos-title-container">
                    <div class="project-infos-title">{{projects[0].Title}}</div>
                </div>
                <div class="project-infos-w">
                    <div class="project-infos-column project-infos-who">
                        <div class="question">who?</div>
                        <div class="answer">{{projects[0].Who}}</div>
                    </div>
                    <div class="project-infos-column project-infos-when">
                        <div class="question">when?</div>
                        <div class="answer">{{projects[0].When}}</div>
                    </div>
                    <div class="project-infos-column project-infos-what">
                        <div class="question">what?</div>
                        <div class="answer">{{projects[0].What}}</div>
                    </div>
                    <div class="project-infos-column project-infos-how">
                        <div class="question">how?</div>
                        <div class="answer">{{projects[0].How}}</div>
                    </div>
                    <div class="project-infos-column project-infos-link">
                        <div class="question">where?</div>
                        <div class="answer">
                            <a :href="projects[0].Urllink" target="_blank"></a>{{projects[0].Url}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="splash"></div>
        <div class="horizontal-scroll">
            <div class="gallery">
                <div class="gallery__images" v-for="(images,indexa) in projects[0].Gallery" :key="'images-'+indexa">
                    <div class="gallery__image" v-for="(image, index) in images.images" :key="'image-'+index">
                        <img :src="api_url + image.url" alt=""></g>
                    </div>
                </div>
            </div>
            <div class="next-project">
                <div class="next-project-link" @mouseenter="revealNextProject" @mouseleave="hideNextProject">
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
                    <nuxt-link :to="projects[0].Nextproject.slug">
                      <span>Next-project</span>
                    </nuxt-link>
                </div>
                <div class="next-project-name">
                    {{projects[0].Nextproject.Title}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import projectQuery from "~/apollo/queries/project/project";
    import { gsap } from "gsap/dist/gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


    export default {
        data() {
            return {
                api_url: process.env.strapiBaseUri,
                project: {},
                heighPosition:0
            };
        },
        apollo: {
            projects: {
                prefetch: true,
                query: projectQuery,
                variables(){
                    return {
                        slug : this.$route.params.id
                    }
                },
            }
        },
        methods: {
            ...mapActions({
                curentP: 'projects/current'
            }),
            revealNextProject(){
                document.querySelector('.next-project-name').classList.add('visible');
            },
            hideNextProject(){
                document.querySelector('.next-project-name').classList.remove('visible');
            }
        },
        mounted() {
            this.curentP(this.projects[0].Title);

            ScrollTrigger.create({
                trigger: ".hero",
                start: "top top",
                end: "bottom-=230px ",
                pin: ".hero-title",
                onLeave: ({progress, direction, isActive}) => {
                    document.querySelector('.hero-title').style.display = "none";
                    document.querySelector('.hider').style.display = "none";
                    document.querySelector('.project-infos-title-container').classList.add('leave');
                    document.querySelector('.project-infos-w').classList.add('reveal');

                    // document.querySelector('.splash').classList.add('reveal');

                },
                onEnterBack: ({progress, direction, isActive}) => {
                    document.querySelector('.hero-title').style.display = "block";
                    document.querySelector('.hider').style.display = "block";
                    document.querySelector('.project-infos-title-container').classList.remove('leave');
                    document.querySelector('.project-infos-w').classList.remove('reveal');

                    // document.querySelector('.splash').classList.remove('reveal');
                }
            });
            ScrollTrigger.create({
                trigger: "body",
                start: "top top",
                end: "170px ",
                pin: ".hero-subtitle",
                // markers: true,
            });

            let horizontalScroll = document.querySelector('.horizontal-scroll');

            gsap.to(horizontalScroll, {
                x: () => -(horizontalScroll.scrollWidth - document.documentElement.clientWidth) + "px",
                ease: "none",
                scrub: 0.5,
                scrollTrigger: {
                    trigger: horizontalScroll,
                    invalidateOnRefresh: true,
                    end: () => "+=" + horizontalScroll.offsetWidth,
                    scrub: 1,
                    pin: ".horizontal-scroll",
                    onUpdate: ({progress, direction, isActive}) =>{
                        console.log(progress);
                        if(progress > 0.27){
                            document.querySelector('.project-infos').classList.add("uk-invisible");
                        }else{
                            document.querySelector('.project-infos').classList.remove("uk-invisible");
                        }

                        if(progress > 0.98){
                            document.querySelector('.gallery').classList.add("red");
                            document.querySelector('.next-project').classList.add("red");
                        }else{
                            document.querySelector('.gallery').classList.remove("red");
                            document.querySelector('.next-project').classList.remove("red");
                        }
                    }
                }
            });
        },
    }
</script>

<style lang="scss" scoped>
    .project{
        position: relative;
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
            width: 100%;
            height: 100vh;
            object-fit: cover;
            background-size: cover;
            position: relative;

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
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 600px;
        z-index: -1;
        margin: 0 auto ;
        &-w{
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            opacity: 0;
            transform: translateY(50px) rotate(0.5deg);
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
        &-column{
            position: relative;
            width: 100%;
            max-width: 240px;
            display: flex;
            flex-direction: column;
            margin-bottom: 65px;
            overflow: hidden;
            color: $black;
        }
        &-title-container{
            position: relative;
            margin-bottom: 34px;
            overflow: hidden;
            color: transparent;
            .project-infos-title{
                color:$black;
                transform: translate(0px, 100px) rotate(3deg);
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
