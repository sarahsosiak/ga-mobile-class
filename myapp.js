// BEGIN DAY 1.

var gallery;
var artistMap;
var selectedArtistId;

function setup() {
	gallery = document.getElementById('myGallery');
	gallery.addEventListener('drawer-open', handleOpen);
	gallery.addEventListener('drawer-close', handleClose);
	gallery.addEventListener('thumbnail-tap', handleTap);	

	var sampleTrack = document.getElementById('sample-track');
	sampleTrack.addEventListener('tap', handlePlayback);

	fetchData();
}

function fetchData() {
	$.getJSON('https://cardshark.firebaseio.com/artists.json', function (dagoods) {
		artistMap = dagoods;
		gallery.drawThumbnailsFromObject(artistMap);
	});
}

function handlePlayback(){
	var myAudio = document.getElementById('music-sample');
	var playImage = document.getElementById('play');
	var equalImage = document.getElementById('equalizer');

	playImage.style.opacity = 0;

	myAudio.addEventListener('canplay', function () {
		equalImage.style.opacity = 1;
	})

	myAudio.addEventListener('pause', function () {
		equalImage.style.opacity = 0;
		playImage.style.opacity = 1;
		console.log('stopped');
	})

	myAudio.src = artistMap[selectedArtistId].sampletrack.url;
	myAudio.play();
}

function handleTap(e) {
	selectedArtistId = e._args;
	gallery.setDrawerBackground(artistMap[selectedArtistId].thumbnail);
	gallery.openDrawer();
}

function handleOpen(e) {

	console.log(selectedArtistId);

	var artistName = document.getElementById('artist-name');
	artistName.innerHTML = artistMap[selectedArtistId].name;

	var artistDescription = document.getElementById('artist-description');
	artistDescription.innerHTML = artistMap[selectedArtistId].description;

	var mainContent = document.getElementById('main-content');
	mainContent.style.opacity = 1;

	var songTitle = document.getElementById('song');
	songTitle.innerHTML = artistMap[selectedArtistId].sampletrack.trackname;
}

function handleClose() {
	var mainContent = document.getElementById('main-content');
	mainContent.style.opacity = 0;
}


window.addEventListener('WebComponentsReady', function(e) {
  setup();
});