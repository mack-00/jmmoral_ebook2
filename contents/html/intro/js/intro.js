UTIL.init((function() {
    return {
        ready: function() {
            USER.init(USER.id.intro)
        },
        load: function() {
        	
            var a = document.querySelector('video');
	        a.attr('webkit-playsinline', '').attr('playsinline', '');
	        a.preload = 'none';
	        a.controls = false;
	        a.attr('muted', 'muted');
	        a.muted = true;
	        a.autoplay = false;
	        a.addEventListener('ended', onEnded);
	        if (a.readyState > 2) canplay();
	        else a.addEventListener('canplaythrough', canplay);
	        var b = USER.grade.split('-')[0];
	        a.src = 'ui/intro.mp4';
	        a.load();
	        
	        document.querySelector('#screen').on('click', function() {
	            onEnded()
	        });
	
	        function canplay() {
	        	a.style.opacity=1;
	            a.removeEventListener('canplaythrough', canplay);
	            a.play()
	        };
	
	        function onEnded() {
	            document.querySelector('#screen').off();
	            a.removeEventListener('canplaythrough', canplay);
	            a.removeEventListener('ended', canplay);
	            a.pause();
	            USER.sandParent(USER.id.home)
	        }
        },
        unload: function() {}
    }
}()));