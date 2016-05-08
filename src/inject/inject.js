var overlay_html = '<div id="overlay" class="overlay">' +
		'<div id="my_awesome_iframe_container">' +
		'<iframe id="1click_iframe" width=100% height=100% frameborder=0></iframe>' +
		'</div>' +
		'</div>';


var newsfeed_items = document.querySelectorAll('div[id="substream_1"]');
if(newsfeed_items.length){
	for (var i = 0; i < newsfeed_items.length; i++) {
		var link = newsfeed_items[i];
		//plugin_name = link.href.split('/').pop().split('.')[0];
//		var p = document.createElement('p');
        var p = document.createElement('div');
			p.innerHTML = '<a class="news-a" href="#">Dipity News Item here!</a>';
			p.className = "dipity-news-item";
			link.parentElement.insertAdjacentElement('afterbegin',p);
			p.dataset.name = "hello";
			p.querySelector('a').addEventListener('click',clickHandler,true);
	}
	document.querySelector('body').insertAdjacentHTML('beforeend',overlay_html);
}

function clickHandler(e){
	var plugin_name = this.parentNode.dataset.name;
	e.preventDefault();
	var iframe = document.querySelector('#my_awesome_iframe_container iframe');
		iframe.src = chrome.extension.getURL('src/page_action/page_action.html') + '?plugin_name=' + plugin_name + "#buttons";
//	setts.child = new_win(url + "/plugin-install.php?tab=plugin-information&plugin=" + plugin_name +"&TB_iframe=true&width=600&height=550",'new_win',600,550);

	document.querySelector('#overlay').classList.add('show');
	document.querySelector('#overlay').onclick = removeOverlay;
//	window.onfocus = removeOverlay;


}
function removeOverlay(){

	document.getElementById("overlay").classList.remove('show');

}
