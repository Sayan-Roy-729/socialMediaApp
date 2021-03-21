// import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import gsap from "gsap"; 
 
 
 var tl = new  gsap.timeline()


var bgd = document.querySelector('#background rect');
var table = document.querySelector('#table_legs, #table');
var lampLeg = document.querySelector('#lamp > .lamp-leg');
var lampbt = document.querySelector('#lamp-bottom');
var lampLight = document.querySelector('#lamp > .light');
var lampLine = document.querySelector('#lamp-line');
var lampLineB = document.querySelector('#lamp-line-b');
var lampLineT = document.querySelector('#lamp-line-t');
var lampCircle = document.querySelector('#lamp-circle');
var lampHead = document.querySelector('#lamp-head');
var lampHeader = document.querySelector('#lamp-header');
var lampBody = document.querySelector('#lamp-body');
var computer = document.querySelector('#computer > *');
var keyboard = document.querySelector('#keyboard > *');
var asset = document.querySelector('#computer_mouse > * , #coffee_mug > *');

tl.from(bgd, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
  .staggerFrom(table, 0.2, {y:"-=200", opacity: 0, ease: '"easeOut"'}, 0.1)
  .from(lampLeg, 0.2, {opacity:0, x: "-200", ease: "easeOut"})
  .from(lampbt, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
  .from(lampLineB, 0.3,{opacity:0, transformOrigin: '100% 100%', rotation: '-180deg'})
  .from(lampCircle,0.1,{opacity:0, x: '-=100', y: '-=100'})
  .from(lampLineT, 0.3,{opacity:0, transformOrigin: '0% 100%', rotation: '-180deg'})
  .from(lampHead, 0.2, {opacity:0, scale:0, ease: "easeOut"})
  .from(lampHeader, 0.5, {transformOrigin: '60% 60%', rotation: '60deg'})
  .from(lampBody, 0.5, {transformOrigin: '70% 70%', rotation: '-25deg'})
  .staggerFrom(computer, 1, {opacity: 0, scale: 0, transformOrigin: 'center center', ease:"easeOut"}, 0.2)
  .staggerFrom(keyboard, 0.5, {opacity: 0, y: '-=100', ease: 'easeInOut' }, 0.05)
  .staggerFrom(asset, 0.5, {opacity: 0}, 0.05)
  .to(lampLight, 0.2, {opacity:0.8, ease: "easeOut", delay:0.5}, "a")
  .to(lampLight, 0.1, {opacity:0}, "b")
  .to(lampLight, 0.1, {opacity:0.2}, "c")
  .to(bgd, 0.2, {opacity: 0.1, delay:0.5}, "a-=0.05")
  .to(bgd, 0.1, {opacity: 1}, "b-=0.05")
  .to(bgd, 0.1, {opacity: 0.5}, "c-=0.05")
  .to(bgd, 0.2, {opacity: 1, fill: '#FDD10D'})
  .fromTo(lampLine, 0.2, {opacity: 0},{opacity: 0.2, delay:0.5}, "a-=0.05")
  .to(lampLine, 0.1, {opacity: 1}, "b-=0.05")
  .to(lampLine, 0.1, {opacity: 0.5}, "c-=0.05");


