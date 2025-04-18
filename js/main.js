// JS scripts placed here
var tl = gsap.timeline({repeat: 2, repeatDelay: 1});
tl.to("#el", {x: 100, duration: 1});
tl.to("#el", {rotation: 50, duration: 1});
tl.to("#el", {backgroundColor: "red"});
