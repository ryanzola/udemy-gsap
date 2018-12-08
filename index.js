import {TweenMax, Power4, Bounce, TimelineMax} from "gsap/all";

/* 
 *  Tweening Basics
 *  Branch: feature/tweeningBasics
 */ 

// TweenMax.to('#logo1', 1, {x: 850, y: 830, ease:
// Power4.easeInOut});

// TweenMax.to('#logo1', 1, {x:850});
// TweenMax.to('#logo1', 1, {y: 850, delay: 1});

// TweenMax.from('#logo1', 1, {x: 850});

// TweenMax.fromTo('#logo1', 1, {autoAlpha: 1, x: 0, y: 830}, {autoAlpha:0.2, x: 850, y: 830});

// TweenMax.to('#logo1', 1, {y: 830});
// TweenMax.to('#logo2', 1, {y: 830, delay: 0.25});
// TweenMax.to('#logo3', 1, {y: 830, delay: 0.5});

// TweenMax.to(['#logo1', '#logo2', '#logo3'], 1, {y: 830});

// TweenMax.staggerTo(['#logo1', '#logo2', '#logo3'], 1, {y: 830}, 0.25);

// TweenMax.staggerFrom(['#logo1', '#logo2', '#logo3'], 1, {y: 830}, 0.25);

// TweenMax.staggerFromTo(['#logo1', '#logo2', '#logo3'], 1, {y: 350}, {y: 830, ease: Bounce.easeOut}, 0.25);

/* 
 *  Timeline Basics
 *  Branch: feature/timelineBasics
 */

 let masterTl = new TimelineMax();
 let servantTl = new TimelineMax()

 masterTl.to('#logo1', 1, {x: 850})
         .to('#logo2', 1, {y: 830}, '-=0.5')
         .add(animateLogo3, '-=0.5');

function animateLogo3() {
  var logo3Tl = new TimelineMax();

  logo3Tl.to('#logo3', 1, {x: '-=850'});

  return logo3Tl;
}
