<template>
    <div class="next-project" ref="nextProject">
        <div class="next-project-link">
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
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props:[
      'next'
    ]

  }
</script>

<style lang="scss" scoped>
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
