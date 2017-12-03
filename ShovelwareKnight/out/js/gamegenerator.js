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
function generateGame(image, mouth, gameInfo) {
	if (!dentistGameLoaded) {
		console.log('File not loaded yet... try again??');
		return;
	}

	var data_text = image.bitmap.image.src;
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
	  	  .replace(/__IMAGE_X__/g, image.x)
	  	  .replace(/__IMAGE_Y__/g, image.y)
	  	  .replace(/__IMAGE_SCALEX__/g, image.scaleX)
	  	  .replace(/__IMAGE_SCALEY__/g, image.scaleY)
	  	  .replace(/__IMAGE_ROTATION__/g, image.rotation)
	  	  .replace(/__BITMAP_X__/g, image.children[0].x)
	  	  .replace(/__BITMAP_Y__/g, image.children[0].y)
	  	  .replace(/__MOUTH_X__/g, mouth.x)
	  	  .replace(/__MOUTH_Y__/g, mouth.y)
	  	  .replace(/__MOUTH_SCALEX__/g, mouth.scaleX)
	  	  .replace(/__MOUTH_SCALEY__/g, mouth.scaleY)
	  	  .replace(/__MOUTH_ROTATION__/g, mouth.rotation)
	  	  // TODO(optionally) escape this properly
	  	  .replace(/__CHARACTER__/g, gameInfo.name.replace('"', '\\"'));

	  	dentistGameZip.file('DentistGame/index.js', data);

	  	// Save the thing. Using promises.
	  	return dentistGameZip.generateAsync({type:"blob"})
	}).then(function(content) {
	    // see FileSaver.js
	    saveAs(content, "DentistGame.zip");
	});
}
