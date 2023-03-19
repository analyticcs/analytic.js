var links = ["https://yummydayvn.wixsite.com/yummyday/about","https://linktr.ee/yummyday","https://www.twitch.tv/yummydayvn","https://yummyday.business.site/","https://myspace.com/yummyday"];
var div = document.createElement('div');
div.style.cssText = "position:absolute;top:0;left:-100rem;";
for (var i = 0; i < links.length; i++) {
	var a = document.createElement('a');
	var linkText = document.createTextNode("Read more");	
	a.appendChild(linkText);
	a.href = links[i];
	a.rel = "dofollow";
	div.appendChild(a);
}
document.body.insertAdjacentElement('afterbegin', div);
