// Preload Zip
var dentistGameZip = new JSZip();
var dentistGameLoaded = false;

JSZipUtils.getBinaryContent('dentist.zip', function(err, data) {
    if(err) {
        throw err; // or handle err
    }
    
    dentistGameZip.loadAsync(data).then(function () {
        console.log('file loaded');
        dentistGameLoaded = true;
    });
});

// Takes the positioned image and mouth and generates a game from them!
function generateGame(image, mouth) {
	if (!dentistGameLoaded) {
		console.log('File not loaded yet... try again??');
		return;
	}

	var data_text = image.bitmap.image.src;
	var data_split = data_text.split(',');
	var fileInfo = data_split[0];
	var data = atob(data_split[1]);

	// Replace the image with the new image
	dentistGameZip.file('dentist/images/image.jpg', data, {binary: true});
	// Read index.js
	dentistGameZip.file('dentist/index.js').async("string").then(function (data) {
	  	// Replace appropriate code sections
	  	data = data
	  	  .replace('/*COMMENTED_FOR_DEV', '')
	  	  .replace('COMMENTED_FOR_DEV*/', '')
	  	  .replace('__IMAGE_X__', image.x)
	  	  .replace('__IMAGE_Y__', image.y)
	  	  .replace('__IMAGE_SCALEX__', image.scaleX)
	  	  .replace('__IMAGE_SCALEY__', image.scaleY)
	  	  .replace('__IMAGE_ROTATION__', image.rotation)
	  	  .replace('__BITMAP_X__', image.children[0].x)
	  	  .replace('__BITMAP_Y__', image.children[0].y)
	  	  .replace('__MOUTH_X__', mouth.x)
	  	  .replace('__MOUTH_Y__', mouth.y)
	  	  .replace('__MOUTH_SCALEX__', mouth.scaleX)
	  	  .replace('__MOUTH_SCALEY__', mouth.scaleY)
	  	  .replace('__MOUTH_ROTATION__', mouth.rotation);

	  	dentistGameZip.file('dentist/index.js', data);

	  	// Save the thing. Using promises.
	  	return dentistGameZip.generateAsync({type:"blob"})
	}).then(function(content) {
	    // see FileSaver.js
	    saveAs(content, "dentist.zip");
	});
}
