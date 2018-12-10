import { TweenMax, TimelineMax } from 'gsap/all';
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

	// enter tree

	// enter the greeting text
	
	// the GO function ...to kick things all off
	function go() {
		console.log('go...')

		let masterTl = new TimelineMax();

		// TODO: add child timelines to master timeline
		masterTl
			.add(clearStage(), 'clear-scene-stage')

			;
	}

	go();