/*<홈 화면>*/
DEV=(function(){
	
	var mPath='../../com/datas/groups/';
	
	var mIsContent=false;
	
	var mOriginInfo, mOriginStep;
	var mStepList;
	var mStepIdx;
	
	/*======================*/
	/* 초기 설정*/
	/*======================*/
	
	/**
	 * 화면 네비 설정하기 
	 */
	function startPopup(){
				
		clearPlugins();
		/*화면 불러오기*/
		loadContent();
		/*이벤트 시작하기*/
		startEvents();
	};

	/**
	 * 화면 변경하기 
	 */
	function loadContent(){
		
		UTIL.query('#screen').attr('data-lesson',parseInt(USER.depths[0])+1);
		/*페이지*/
		var $page=UTIL.query('#page').attr('data-page',USER.page);
		$page.query('.page').text(USER.page);
		
		/*컨텐츠 정보*/
		var ol=DATAS.index[USER.depths[0]];
		if(ol){
			/*lesson*/
			var $d1=UTIL.query('[data-path="lesson"]');
			$d1.innerHTML='<span class="icon">'+ol.icon+'</span> <span>'+ol.title+'</span>';
			/*chapter*/
			var oc=ol.list[USER.depths[1]];
			if(oc){
				var $d2=UTIL.query('[data-path="chapter"]');
				$d2.innerHTML='<span class="icon">'+oc.icon+'</span> <span>'+oc.title+'</span>';
				/*corner*/
				var on=oc.list[USER.depths[2]];
				if(on){
					var $d3=UTIL.query('[data-path="corner"]');
					$d3.innerHTML='<span class="icon">'+on.icon+'</span> <span>'+on.title+'</span>';
				};
			};
		};
		
		var dp=(USER.depths[0]+1)+'-'+(USER.depths[1]+1)+'-'+(USER.depths[2]+1);
		var src='../popup-view/'+dp+'/'+USER.group+'/index.html';
		
		/*객체*/
		var $view=UTIL.query('#body');
		
		/*iframe 추가하기 */
		var $ifr=document.createElement("iframe");
		$ifr.css('opacity',0);
		/*iframe 로드 완료 확인*/
		UTIL.iframe.load($ifr, src, function($ifr){
			
			UTIL.iframe.unselectRemove($view, $ifr.attr('name'));
			
			$ifr.css('opacity',1);
			
			/*플러그인 정보 교체*/
			changePlugins();
		});
		
		$view.append($ifr);
	};
	
	function startEvents(){
		
		UTIL.query('#page',true).on('click',function(){
			USER.sandParent(USER.id.ebook);
		});
		UTIL.query('#nav button',true).on('click',function(){
			switch(this.attr('data-type')){
				case 'save':
					saveMyClass();
				break;
				case 'tools':
					UTIL.change.showHide(UTIL.query('#tools'));
				break;
			};
		});
	};
	
	function saveMyClass(){
		
		var regist=USER.project+'.plugin.study.info';
		
		var v=USER.depths.join('-')+'◈'+USER.group+'◈'+USER.page;
		
		EXE.saveValue(regist,v);
		
		alert('진도 저장이 되었습니다.');
	};
	
	/*======================*/
	/* 플러그 인*/
	/*======================*/
	
	function changePlugins(){
		PLUGINS.change('content',{
			type:USER.mode,
			depths:USER.depths,
			group:USER.group/*end*/
		});
	};
	function clearPlugins(){
		PLUGINS.change('clear');
	};
	function startPlugins(){
		/*플러그인 기능 시작하기*/
		PLUGINS.start(
			document.querySelector('#screen'),
			function(type,datas){
				switch(type){
					case 'btns':
						UTIL.change.showHide(UTIL.query('#tools'));
					break;
					case 'plugin':
						pluginEvents(datas);
					break;
				};
			}/*end*/
		);
		function pluginEvents(datas){
			switch(datas.messageMode){
				case 'gotoContent':
					TURN.gotoPage(datas);
				break;
			};
		};
	};
return{
	ready:function(){
		/*파일 초기 위치 조정*/
		EXE.root('../../');
		EXE.appType(USER.appType,'');
		/*사용자 데이터 초기화*/
		USER.init(USER.id.popup);
		/*데이터 전달 받기*/
		UTIL.message.listener(function(event){
			var obj=event.data;
			if(obj&&obj.messageMode=='popup'){
				switch(obj.messageType){
					case 'setPage':
						if(obj.page){
							var $page=document.querySelector('#page');
							$page.attr('data-page',obj.page);
							var $span=$page.querySelector('span');
							$span.text(obj.page);
						};
					break;
				};
			};
		});
	},
	load:function(){
		/*플러그인*/
		startPlugins();
		/*상단 인덱스 네비 설정*/
		startPopup();
	},
	unload:function(){}
};
}()); UTIL.init(DEV);
