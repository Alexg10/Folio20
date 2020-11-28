import Vue from 'vue'
import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { RoughEase } from 'gsap/dist/EasePack'


Vue.use(gsap)
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(RoughEase);
