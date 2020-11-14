<template>
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
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: [
      "data"
    ]

  }
</script>

<style lang="scss" scoped>
    .project-infos{
        // position: fixed;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        width: 100%;
        max-width: 600px;
        margin: 0 auto ;
        &-w{
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            // opacity: 0;
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
</style>
