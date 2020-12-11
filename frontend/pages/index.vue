<template>
  <div class="home">
    <div class="home-hero uk-text-center">
      <div class="home__cta-container" @mouseenter="glitchPlay" @mouseleave="glitchReset">
        <h1 class="home-title home-hello" data-text="Hello" ref="homeHello">Hello</h1>
        <div class="home-title home-project" data-text="Projects" ref="homeProject" @click="goToProjects">Projects</div>
      </div>
    </div>
    <div class="home-description uk-text-left">
      Hello I’m Alex lorem ipsum dolor sit amet consectetut sed to, adisciping lorem dolor!
    </div>
  </div>
</template>

<script>

import gsap from 'gsap/dist/gsap'
import { RoughEase } from "gsap/dist/EasePack";

export default {
  data() {
    return {
      glitchIn: null,
      glitchOut: null,
      letterAnim: null,
      skewRepeat: null
    }
  },
  methods: {
    mouseWeight(){
      // Variant weight Anim
      let root = document.documentElement;

      document.body.onmousemove = e => {
        var w = window.innerWidth;
        var mousePosX = e.clientX;
        var pourcentage = (mousePosX / w) * 100;
        var weight = 900 * (pourcentage / 100);
        var font = document.getElementsByClassName("home-title");
        root.style.setProperty('--font-weight', weight);
      }
    },
    initAnim(){


      // Glitch Anim
      this.glitchIn = gsap.timeline({paused: true, delay: 0.4 });
      this.glitchOut = gsap.timeline({paused: true });
      this.letterAnim =  gsap.timeline({paused: true });

      this.skewRepeat = gsap.timeline({paused: true, repeat: -1, repeatDelay: 4, delay: 2 });
      const hello = this.$refs.homeHello;
      const project = this.$refs.homeProject;
      let vm = this;

      this.glitchIn.fromTo(hello, {
          y: -2,
          x: 10,
        },{
          duration: 0.6,
          ease: "rough({ template: none.out, strength: 8, points: 8, taper: 'none', randomize: true, clamp:  false})",
          y: 1,
          x: -8,
          clearProps:"all"
        }
      )
      .to({}, 0.2, {})
      .to(hello, { duration: 0, opacity: 0 })
      .to({}, 0.2, {})
      .to('.home-project', { duration: 0, display:'block' })
      .fromTo('.home-project', {
          y: -2,
          x: 10,
        },{
          duration: 0.5,
          ease: "rough({ template: none.out, strength: 8, points: 5, taper: 'none', randomize: true, clamp:  false})",
          y: 1,
          x: -8,
        }
      )
      .to({}, 0.5, {})
      .to('.home-project', { duration: 0.2, color: "#fff" });

      this.glitchOut.to('.home-project', {duration: 0.1,skewX:70,ease: "power4.inOut"})
        .to('.home-project', {duration: 0.04, skewX:0,ease: "power4.inOut"})
        .to('.home-project', {duration: 0.04, opacity:0})
        .to('.home-project', { duration: 0, display:'none' })
        .to(hello, { duration: 0, opacity: 1 })
        .to(hello, {duration: 0.04, x:-60})
        .to(hello, {duration: 0.04, x:0})
        .to(hello, {duration: 0.02, scaleY:1.2,ease: "power4.inOut"})
        .to(hello, {duration: 0.04, scaleY:1,ease: "power4.inOut"});

      this.glitchIn.eventCallback("onComplete", function(){
        vm.glitchOut.pause(0)
      })
      this.glitchOut.eventCallback("onComplete", function(){
        vm.glitchIn.pause(0)
      })


      this.skewRepeat.to('.home-project', {duration: 0.1,skewX:10,ease: "power4.inOut"})
        .to('.home-project', {duration: 0.04, skewX:0,ease: "power4.inOut"})
        .to('.home-project', {duration: 0.04, opacity:0})
        .to('.home-project', {duration: 0.04, opacity:1})
        .to('.home-project', {duration: 0.04, x:-30})
        .to('.home-project', {duration: 0.04, x:0})
        .to('.home-project', {duration: 0.04, opacity:0})
        .to('.home-project', {duration: 0.04, opacity:1})
        .to('.home-project', {duration: 0.04, x:-60})
        .to('.home-project', {duration: 0.04, x:0})
        .to('.home-project', {duration: 0.02, scaleY:1.2,ease: "power4.inOut"})
        .to('.home-project', {duration: 0.04, scaleY:1,ease: "power4.inOut"})

    },
    glitchPlay(){
      this.glitchIn.play();
      // this.skewRepeat.play();
    },
    glitchReset(){
      this.glitchOut.play();
    },
    splitText(){
        var word = document.querySelector(".home-project");

        //ADD SPAN TO LETTERS
        var wordContent      = word.textContent.trim();
        var wordContentSplit = wordContent.split("");
            word.innerHTML   = "";
        var tabLetterLength  = [];

        for(var i=0; i< wordContentSplit.length; i++){
            var newSpan = document.createElement('span');
            newSpan.style.display = "inline-block";
            newSpan.setAttribute("class", "letter letter-"+i);
            newSpan.innerHTML = wordContentSplit[i];
            word.appendChild(newSpan);
            tabLetterLength.push(i)
        }
    },
    goToProjects(){
      let vm = this;
      document.querySelector('.home-project').classList.add('clicked');
      this.letterAnim.to(".letter", { duration: 0.05, "--font-weight": 700, ease: "power4.inOut",  stagger: 0.08})
        .to({}, 0.2, {})
        .to(".home-project", { duration: 1, scale: 250, x:-50,  ease: "power4.inOut"});

      this.letterAnim.play();
      this.letterAnim.eventCallback("onComplete",function(){
        console.log("pushed pager");
        vm.$router.push({
            path: '/projects'
        })
      })
    }
  },
  mounted(){
    this.mouseWeight();
    this.splitText();
    this.initAnim();
  }
}
</script>

<style lang="scss" >

  :root{
    --font-weight: 100;
    --font-weight-letter: 100;
  }
  .letter{
    font-variation-settings: "wght" var(--font-weight);
  }
  .home{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: $black;
    color: $white;
    &-title{
      position: absolute;
      top: 0;
      left: 0;
      color: $black-light;
      text-align: left;
      font-size: 15.625rem;
      line-height: 240px;
      margin: 0;
      &:hover{
        text-decoration: none;
      }
    }
    &-hero{
      position: relative;
      width: 100%;
      height: 280px;
    }
    &-hello,
    &-project{
      display: flex;
      transform: translateY(0);
      transform: scaleX(var(--scale, 1));
      &::after {
        --f-size: 30;
        --f-unit: 1vmin;
        --f: calc(var(--f-size) * var(--f-unit));
        --top: 0;
        --left: 0;
        --v-height: 30%;
        --n-tenth: calc(var(--f-size) * .1 * var(--top));
        --t-cut: calc(var(--n-tenth) / var(--f-size) * 100%);
        --b-cut: calc(var(--t-cut) + var(--v-height));
        content: attr(data-text);
        position: absolute;
        width: 100%;
        left: 0;
        text-align: center;
        font-variation-settings: "wght" var(--font-weight);
        transform: translateX(calc(var(--left) * 100%));
        filter: drop-shadow(0 0 transparent);
        background-color: var(--bg);
        clip-path: polygon(0% var(--t-cut), 100% var(--t-cut), 100% var(--b-cut), 0% var(--b-cut));
        z-index: -1;
      }
      &-container{
        overflow: hidden;
      }
    }
    &-hello{
      font-variation-settings: "wght" var(--font-weight);
      &:hover{
        &::after{
          animation: glitch-home 0.8s infinite alternate;
        }
      }
    }
    &-project{
      display: none;
      &:hover{
        animation: skewRepeat 3s infinite alternate;
        animation-delay: 0.6s;
        &:after{
          animation: glitch-home 1s infinite alternate, pause-between-iterations 7s infinite;
        }
      }
      &.clicked{
        &:after{
          display: none;
        }
      }
      .letter{
        font-variation-settings: "wght" var(--font-weight);
      }
    }
    &-description{
      position: absolute;
      max-width: 17.8125rem;
      right: 10%;
    }
  }

@keyframes glitch-home {
  10%,30%,50%,70%,90% {
    --top: 0;
    --left: 0;
    z-index: 1;
  }
  20% {
    --left: .005;
    z-index: 1;
    color: $primary-color;
  }
  40% {
    --left: .01;
    --v-height: 20%;
    --top: 3;
    color: $black-light;
  }
  60% {
    --left: .03;
    --v-height: 25%;
    --top: 6;
    color: $primary-color;
  }
  80% {
    --left: .07;
    --v-height: 5%;
    --top: 8;
    color: $black-light;
  }
  100% {
    --left: .083;
    --v-height: 30%;
    --top: 1;
  }
}

@keyframes glitch-project {
  10%,30%,50%,70%,90% {
    --top: 0;
    --left: 0;
    z-index: 1;
  }
  0% {
    --v-height: 15%;
  }
  20% {
    --left: .008;
    --v-height: 20%;
    --top: 3;
    z-index: 1;
    color: $white;

  }
  40% {
    --left: .01;
    --v-height: 20%;
    --top: 5;
    color: $white;
    color: $primary-color;
    z-index: -1;
  }
  60% {
    --left: .003;
    --v-height: 25%;
    --top: 6;
    color: $primary-color;
    color: $white;
  }
  80% {
    --left: .07;
    --v-height: 5%;
    --top: 8;
    color: $white;
    color: $primary-color;


  }
  100% {
    --left: .083;
    --v-height: 30%;
    --top: 1;
    color: $primary-color;

  }
}


// @keyframes skewRepeat {
//   8% {
//     transform: skew(10);
//   }
//   16%{
//     transform: skew(0);
//   }
//   24%{
//     opacity:0
//   }
//   32%{
//     opacity:1
//   }
//   40%{
//     transform: translateX(-30px);
//   }
//   48%{
//     transform: translateX(0);
//   }
//   56%{
//     opacity:0
//   }
//   64%{
//     opacity:1
//   }
//   72%{
//     transform: translateX(-60px);
//   }
//   80%{
//     transform: translateX(0);
//   }
//   88%{
//     transform: scale(1.2);
//   }
//   94%{
//     transform: scale(1);
//   }
//   100%{
//     opacity:1
//   }
// }


// @keyframes skewRepeat {
//  0.571% {
//     transform: skew(5);
//   }
//   1.143% {
//     transform: skew(0);
//   }
//   2.857% {
//     transform: translateX(-20px);
//   }
//   3.429% {
//     transform: translateX(0);
//   }
//   4% {
//     opacity: 0
//   }
//   4.571% {
//     opacity: 1
//   }
//   5.143% {
//     transform: translateX(-35px);
//   }
//   5.714% {
//     transform: translateX(0);
//   }
//   6.286% {
//     transform: scale(1.1);
//   }
//   6.714% {
//     transform: scale(1);
//   }
//   7.143% {
//     opacity: 1;
//     transform: translate(0);
//   }
//   100% {
//     opacity: 1;
//     transform: translate(0);
//   }
// }

@keyframes pause-between-iterations {
  /* Other animation is visible for 25% of the time */
  0% {
    opacity: 1;
  }
  18% {
    opacity: 1;
  }
  /* Other animation is hidden for 75% of the time */
  19.1% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
