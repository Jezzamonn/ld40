var my_awesome_script = document.createElement('script');
my_awesome_script.setAttribute('src','https://static.itch.io/api.js');
document.head.appendChild(my_awesome_script);

Itch.getGameData({user:'jezzamon', game:'adventure-boy-cheapskate', onComplete: function(data) {console.log(data)} })

// Returns
// {
// 	cover_image: "https://img.itch.zone/aW1hZ2UvMTk3OTQxLzkyNzc3OC5naWY=/315x250%23c/jeEEVE.gif",
// 	id: 197941,
// 	original_price: false,
// 	price: "$0.00",
// 	sale: false,
// 	title: "Adventure Boy Cheapskate",
// }



// HTML to create for upload
// <input type="file" style="position: absolute;top: 0px;left: 0px;width: 200px;height: 100px;">

var inp = document.createElement("input");
inp.setAttribute("type", "file");
inp.style.position = "absolute";
inp.style.top = "0px"
inp.style.left = '0px';
inp.style.width = '640px';
inp.style.height = '100px';
document.getElementById("animation_container").appendChild(inp)

inp.files

document.getElementById('file').onchange = function() {
    // fire the upload here
};



// ---- Generating a file ------
var data_text = globalImage.bitmap.image.src;
var data_split = data_text.split(',');
var fileInfo = data_split[0];
var data = atob(data_split[1]);

var zip = new JSZip();
zip.file('image.jpg', data, {binary: true});

// Save
zip.generateAsync({type:"blob"})
.then(function(content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
});
