// Preload Zip
var zip = new JSZip();
var loaded = false;

JSZipUtils.getBinaryContent('dentist.zip', function(err, data) {
    if(err) {
        throw err; // or handle err
    }
    
    zip = new JSZip();
    zip.loadAsync(data).then(function () {
        console.log('file loaded');
        loaded = true;
    });
});

// Takes the positioned image and mouth and generates a game from them!
function generateGame(image, mouth) {
	if (!loaded) {
		console.log('File not loaded yet... try again??');
		return;
	}

	var data_text = image.bitmap.image.src;
	var data_split = data_text.split(',');
	var fileInfo = data_split[0];
	var data = atob(data_split[1]);

	zip.file('dentist/images/image.jpg', data, {binary: true});

	// Save
	zip.generateAsync({type:"blob"})
	.then(function(content) {
	    // see FileSaver.js
	    saveAs(content, "dentist.zip");
	});
}
