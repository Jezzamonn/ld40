// Preload Zip
var dentistGameZip = new JSZip();
var dentistGameLoaded = false;

JSZipUtils.getBinaryContent('DentistGame.zip', function(err, data) {
    if(err) {
        throw err; // or handle err
    }
    
    dentistGameZip.loadAsync(data).then(function () {
        console.log('file loaded');
        dentistGameLoaded = true;
    });
});

// Takes the positioned image and mouth and generates a game from them!
function generateGame(game) {
	if (!dentistGameLoaded) {
		console.log('File not loaded yet... try again??');
		return;
	}

	var data_text = game.image.bitmap.image.src;
	var data_split = data_text.split(',');
	var fileInfo = data_split[0];
	var data = atob(data_split[1]);

	// Replace the image with the new image
	dentistGameZip.file('DentistGame/images/image.jpg', data, {binary: true});
	// Read index.js
	dentistGameZip.file('DentistGame/index.js').async("string").then(function (data) {
	  	// Replace appropriate code sections
	  	data = data
	  	  .replace(/\/\*COMMENTED_FOR_DEV/g, '')
	  	  .replace(/COMMENTED_FOR_DEV\*\//g, '')
	  	  .replace(/__IMAGE_X__/g, game.image.x)
	  	  .replace(/__IMAGE_Y__/g, game.image.y)
	  	  .replace(/__IMAGE_SCALEX__/g, game.image.scaleX)
	  	  .replace(/__IMAGE_SCALEY__/g, game.image.scaleY)
	  	  .replace(/__IMAGE_ROTATION__/g, game.image.rotation)
	  	  .replace(/__BITMAP_X__/g, game.image.children[0].x)
	  	  .replace(/__BITMAP_Y__/g, game.image.children[0].y)
	  	  .replace(/__MOUTH_X__/g, game.mouth.x)
	  	  .replace(/__MOUTH_Y__/g, game.mouth.y)
	  	  .replace(/__MOUTH_SCALEX__/g, game.mouth.scaleX)
	  	  .replace(/__MOUTH_SCALEY__/g, game.mouth.scaleY)
	  	  .replace(/__MOUTH_ROTATION__/g, game.mouth.rotation)
	  	  // TODO(optionally) escape this properly
	  	  .replace(/__CHARACTER__/g, (game.name || "Someone").replace('"', '\\"'));

	  	dentistGameZip.file('DentistGame/index.js', data);

	  	// Save the thing. Using promises.
	  	return dentistGameZip.generateAsync({type:"blob"})
	}).then(function(content) {
	    // see FileSaver.js
	    saveAs(content, "DentistGame.zip");
	});
}


function getPostWords(game) {
	var postWords = "Finally, live your dreams as __CHARACTER__'s " +
	"__ADJECTIVE_2__ dentist!\n\n" +
	"__URL__\n\n" +
	"#gamedev #__ADJECTIVE_1__ #SWKGAME";
	return postWords
          .replace(/__CHARACTER__/g, game.name || "Someone")
	  	  .replace(/__ADJECTIVE_1__/g, (game.adj1 || "wonderful").replace(/\s/g, ''))
	  	  .replace(/__ADJECTIVE_2__/g, game.adj2 || "beautiful")
	  	  .replace(/__URL__/g, game.url || "https://jezzamon.itch.io/shovelware-knight");
}
