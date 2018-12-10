import { TweenMax, TimelineMax, Back } from 'gsap/all';
import jquery from "jquery";

window.$ = window.jQuery = jquery;

	// declare actors here
	let $backFallingLeaves = $('#brownLeaf, #orangeLeaf, #redLeaf');
	let $textLine1 = $('.text-line-1');
	let $textLine2 = $('.text-line-2');
	let $textGreeting = $('.text-greeting');
	let $treeLeaves = $('[id^=treeleaf]');
	let $floorLeaves = $('[id^=floorleaf]');
	let $bird = $('#Bird');
	let $birdHat = $bird.find('#BirdHat');
	let $birdEyes = $bird.find('#leftEye, #rightEye');
	let $nest = $('#NestAndLeaves');
	let $tree = $('#tree_trunk');
	let $cardContainer = $('.card.container');

	// clear stage 
	function clearStage() {
		let clearTl = new TimelineMax();

		clearTl
			.set($backFallingLeaves, {autoAlpha: 0})
			.set($textLine1, {autoAlpha: 0})
			.set($textLine2, {autoAlpha: 0})
			.set($textGreeting, {autoAlpha: 0})
			.set($treeLeaves, {autoAlpha: 0})
			.set($bird, {y: `+=65`})
			.set($nest, {autoAlpha: 0})
			.set($tree, {autoAlpha: 0})
			.set($floorLeaves, {y: '+=275', onComplete: showContainer})

		;

		return clearTl;
	}

	function showContainer() {
		$cardContainer.css('display', 'block');
	}

	// enter floor vegetation
	function enterFloorVegitation() {
		var fLeavesTl = new TimelineMax();

		fLeavesTl
			.staggerTo($floorLeaves, 1, {y: 0, ease: Back.easeOut}, 0.01)
			.fromTo($tree, 1.1, {
				scaleY: 0.2,
				autoAlpha: 0,
				transformOrigin:'bottom center'
			}, {
				scaleY: 1,
				autoAlpha: 1,
				transformOrigin: 'bottom center',
				ease: Back.easeInOut
			})
			.fromTo($tree, 0.9, {
				scaleX: 0.2,
				autoAlpha: 0,
				transformOrigin:'bottom center'
			}, {
				scaleX: 1,
				autoAlpha: 1,
				transformOrigin: 'bottom center',
				ease: Back.easeInOut
			}, '-=0.9')
			;

		return fLeavesTl;
	}


	// enter tree

	// enter the greeting text
	
	// the GO function ...to kick things all off
	function go() {
		console.log('go...')

		let masterTl = new TimelineMax();

		// TODO: add child timelines to master timeline
		masterTl
			.add(clearStage(), 'clear-scene-stage')
			.add(enterFloorVegitation, 'floor-vegitation')
			;
	}

	go();