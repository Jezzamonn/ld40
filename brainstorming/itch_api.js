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