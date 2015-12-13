/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function(e,t){typeof module!="undefined"?module.exports=t():typeof define=="function"&&typeof define.amd=="object"?define(t):this[e]=t()}("goodigloo_domready",function(){var e=[],t,n=document,r=n.documentElement.doScroll,i="DOMContentLoaded",s=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return s||n.addEventListener(i,t=function(){n.removeEventListener(i,t),s=1;while(t=e.shift())t()}),function(t){s?setTimeout(t,0):e.push(t)}});

goodigloo_domready(function () {

	var _gi = {};

	/*
	*
	* BUILD HTML IGLOO
	*/
	var content = document.getElementById('goodigloo');
	var buttonHTML = '<button id="goodigloo-button">Essayez</button>';

	var modalHTML = '<div id="goodigloo-modal" style="display:none;"></div>';

	var lightboxHTML = '<div id="goodigloo-lightbox" style="display:none;">';
			lightboxHTML +='<div id="goodigloo-lightbox-header">';
				lightboxHTML +='<span id="goodigloo-lightbox-header-close">';
			lightboxHTML +='</div>';

			lightboxHTML +='<div id="goodigloo-lightbox-content">';
				lightboxHTML +='<div id="goodigloo-lightbox-content-left">';
				lightboxHTML +='</div>';
				lightboxHTML +='<div id="goodigloo-lightbox-content-right">';
					lightboxHTML +='<iframe id="goodigloo-lightbox-content-iframe"></iframe>';
				lightboxHTML +='</div>';
			lightboxHTML +='</div>';
		lightboxHTML +='</div>';

	content.innerHTML += buttonHTML;
	content.innerHTML += modalHTML;
	content.innerHTML += lightboxHTML;

	var button = document.getElementById("goodigloo-button"); 
	button.addEventListener("click", function(){
		var lightbox = document.getElementById('goodigloo-lightbox').style.display = "block";
		var modal = document.getElementById('goodigloo-modal').style.display = "block";
		_gi.resizeLightbox()
		_gi.buildIframe();
	}, false); 

	var close = document.getElementById("goodigloo-lightbox-header-close"); 
	close.addEventListener("click", function(){
		var lightbox = document.getElementById('goodigloo-lightbox').style.display = "none";
		var modal = document.getElementById('goodigloo-modal').style.display = "none";
	}, false); 

	/*
	* resizeLightbox function 
	* return none
	* Description : resizelightbox
	*/
	_gi.resizeLightbox = function () {
		var left = (window.outerWidth - 800)/2;
		var top = (window.outerHeight - 600)/2;
		var lightbox = document.getElementById('goodigloo-lightbox');
		lightbox.style.left = left+"px";
		lightbox.style.top = top+"px";
	};

	/*
	* buildIframe function 
	* return none
	* Description : build all the attributes for the Iframe
	*/
	_gi.buildIframe = function () {
		var id = _gi.getIdCart();
		var website = _gi.getwebsite();
		var iframe = document.getElementById('goodigloo-lightbox-content-iframe');
		iframe.setAttribute("src","./iframe/index.html?id_cart="+id+"&website="+website);
	};

	_gi.getIdCart = function () {
		return "181122340";
	};

	_gi.getwebsite = function () {
		return "mywebsite.com";
	};
})