// BEGIN DAY 1.

var gallery;

function setup() {
	gallery = document.getElementById('myGallery');

	gallery.addEventListener('drawer-open', handleOpen);
	gallery.addEventListener('drawer-close', handleClose);

	drawThumbnails();
	
	document.addEventListener('tap', function() {
		gallery.openDrawer();
	});

}

function handleOpen() {
	var artistName = document.getElementById('artist-name');
	artistName.innerHTML = 'Lady Gaga';

	var artistDescription = document.getElementById('artist-description');
	artistDescription.innerHTML = "Glamorously gaudy, a self-made post-modern diva stitched together from elements of Madonna, David Bowie, and Freddie Mercury, Lady Gaga was the first true millennial superstar. Mastering the constant connection of the internet era, Gaga generated countless mini sensations through her style, her videos, and her music, cultivating a devoted audience she dubbed Little Monsters. But it wasn't just a cult that turned her 2008 manifesto The Fame into a self-fulfilling prophecy: Gaga crossed over into the mainstream, ushering out one pop epoch and kick-starting a new one, quickly making such turn-of-the-century stars as Christina Aguilera and Britney Spears seem old-fashioned, quite a trick for any artist to pull off, but especially impressive for an artist who specialized in repurposing the past -- particularly the '80s -- for present use, creating sustainable pop for a digital world.";

	var mainContent = document.getElementById('main-content');
	mainContent.style.opacity = 1;

	var songTitle = document.getElementById('song');
	songTitle.innerHTML = "Edge of Glory";

}

function handleClose() {
	var mainContent = document.getElementById('main-content');
	mainContent.style.opacity = 0;

}

function drawThumbnails() {
	
	var gymclass = {
		id: 'gymclassheroes',
		thumbnail: 'resources/gymclass.jpg'

	};

	var katy = {
		id: 'katyperry',
		thumbnail: 'resources/katyperry.jpg'
	};

	var group = [gymclass, katy];

	myGallery.drawThumbnailsFromArray(group);
}


window.addEventListener('WebComponentsReady', function(e) {
  setup();
});