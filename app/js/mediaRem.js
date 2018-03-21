	(function() {　　　
		function changeRootFont() {　　　
			var designWidth = 750,
				rem2px = 100;　　　
			document.documentElement.style.fontSize=((window.innerWidth / designWidth) * rem2px) +'px';
			console.log();　　　
		}　　　
		window.addEventListener('resize', changeRootFont, false);
		changeRootFont();
	})(window, document);