/*<홈 화면>*/
DEV=(function(){
	
	function initIndex(){
		
		var _i=UTIL.query('#index');
		
		var dp=USER.get.depths();
		
		/*레슨 추가*/
		lesson(DATAS.index);
		
		/**
		 *lesson 추가하기 
		 */
		function lesson(list){
			if(!list) return;
			
			/*레슨 컨테이너*/
			var _l=_i.query('#lesson').empty();
		
			var sID=(dp[0]+1)+'';
			/*엘리먼트*/
			var lID,_div,_p,_span;
			/*추가하기*/
			UTIL.forIn(list,function(b1,b2){
				
				lID=(b2+1)+'';
				
				_div=document.createElement('div');
				_div.attr('data-depth',1);
				_l.append(_div);
				
				_p=document.createElement('p');
				_p.attr('data-lesson',lID);
				_p.addClass('title');
				_p.lessonObj=b1;
				_p.innerHTML='<span data-icon="'+b1.icon+'">'+b1.icon+'</span><span>'+b1.title+'</span>';
				_p.bookPage=b1.page;
				_div.append(_p);
				
				/*선택된 아이템만 등록*/
				if(sID==lID){
					_i.attr('data-type',lID);
					_div.addClass('on');
					chapter(b1.list, lID, sID+'-'+(dp[1]+1));
				};
				/*이벤트 주기*/
				_p.off().on('click',click);
			});
			
			function click(){
				
				var lID=this.attr('data-lesson');
				
				_i.attr('data-type',lID);
				
				dp=[parseInt(lID)-1,0,0];
				USER.set.depths(dp);
				
				USER.set.page(this.bookPage);
				
				_l.querySelectorAll('[data-depth="1"].on').removeClass('on');
				this.parentNode.addClass('on');
				
				chapter(this.lessonObj.list, lID, lID+'-'+(dp[1]+1));
			};
		};
		
		function chapter(list, lID, sID){
			if(!list) return;
			
			/*챕터 컨테이너*/
			var _c=_i.query('#chapter').empty();
		
			/*엘리먼트*/
			var cID,_div,_p,_span;
			/*추가하기*/
			UTIL.forIn(list,function(b1,b2){
				
				cID=lID+'-'+(b2+1);
				
				_div=document.createElement('div');
				_div.attr('data-depth',2);
				_c.append(_div);
				
				_p=document.createElement('p');
				_p.attr('data-chapter',cID);
				_p.addClass('title');
				_p.innerHTML='<span data-icon="'+b1.icon+'">'+b1.icon+'</span><span>'+b1.title+'</span><span class="page">'+b1.page+'쪽</span>';
				_p.bookPage=b1.page;
				_div.append(_p);
				
				/*선택 표시*/
				if(sID==cID) _div.addClass('on');
				
				/*이벤트 주기*/
				_p.off().on('click',click);
				
				/*모든 코너 등록*/
				corner(_div, b1.list, cID);
			});
			
			function click(){
				
				var lID=this.attr('data-chapter').split('-');
				dp=[parseInt(lID[0])-1,parseInt(lID[1])-1,0];
				USER.set.depths(dp);
				
				USER.set.page(this.bookPage);
				
				_c.querySelectorAll('[data-depth="2"].on').removeClass('on');
				this.parentNode.addClass('on');
			};
		};
		
		function corner(_tgt, list, cID){
			if(!list) return;
			
			/*챕터 컨테이너*/
			var _n=document.createElement('div');
			_n.attr('data-corner-box','');
			_tgt.append(_n);
			
			/*엘리먼트*/
			var nID,_div,_p,_span;
			/*추가하기*/
			UTIL.forIn(list,function(b1,b2){
				
				nID=cID+'-'+(b2+1);
				
				_div=document.createElement('div');
				_div.attr('data-depth',3);
				_n.append(_div);
				
				_p=document.createElement('p');
				_p.attr('data-corner',nID);
				_p.addClass('title');
				_p.innerHTML='<span data-icon="'+b1.icon+'">'+b1.icon+'</span><span>'+b1.title+'</span><span class="page">'+b1.page+'쪽</span>';
				_p.bookPage=b1.page;
				_div.append(_p);
				
				/*이벤트 주기*/
				_p.off().on('click',click);
			});
			
			
			function click(){
				
				var lID=this.attr('data-corner').split('-');
				dp=[parseInt(lID[0])-1,parseInt(lID[1])-1,parseInt(lID[2])-1];
				USER.set.depths(dp);
				
				USER.set.page(this.bookPage);
				
				USER.sandParent(USER.id.ebook);
			};
		};
	};
	
	function initMenu(){
		
		document.querySelectorAll('[data-menu]').on('click', function(){
			
			EFFECT.play('click');
			
			switch(this.attr('data-menu')){
				case 'load':
					loadMyClass();
				break;
				case 'TSolution':
					window.open('https://tsol.jihak.co.kr','_blank');
				break;
				case 'help':
					PLUGINS.open('helpHome');
				break;
				case 'fileroom':
					USER.sandParent(USER.id.fileroom);
				break;
			};
		});
	};
	
	function loadMyClass(){
		
		var regist=USER.project+'.plugin.study.info';
		var value=EXE.loadValue(regist);
		
		if(value){
			
			var arr=value.split('◈');
			var depths=arr[0];
			var group=arr[1];
			var page=arr[2];
			/*뎁스 설정*/
			if(depths){
				var depthArr=depths.split('-');
				if(depthArr&&depthArr.length==3){
					USER.depths=depthArr;
				};
			};
			/*그룹 설정*/
			if(group){
				USER.group=group;
			};
			/*그룹 설정*/
			if(page){
				USER.page=page;
			};
			
			USER.sandParent(USER.id.popup);
		}else{
			alert('저장된 최근 수업이 없습니다.\n수업 내용을 등록해 주세요.');
		};
	};
	
	/*============================================*/
	
	function startPlugins(){
		/*플러그인 기능 시작하기*/
		PLUGINS.start(
			document.querySelector('#screen'),
			function(type,datas){
				switch(type){
					case 'btns':
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
					gotoContent(datas);
				break;
			};
		};
		
		function gotoContent(datas){
			
			if(datas.depths) USER.depths=datas.depths;
			if(datas.group) USER.group=datas.group;
			if(datas.page) USER.page=datas.page;
			switch(datas.mode){
				case 'popup':
					USER.sandParent(USER.id.popup);
				break;
				case 'ebook':
					USER.sandParent(USER.id.ebook);
				break;
			};
		};
	};
	
return{
	ready:function(){
		/*사용자 데이터 초기화*/
		EXE.root('../../../');
		EXE.appType(USER.appType,'');
		/*사용자 데이터 초기화*/
		USER.init(USER.id.home);
	},
	load:function(){
		/*플러그인*/
		startPlugins();
		/*실행하기*/
		initIndex();
		initMenu();
	},
	unload:function(){}
};
}()); UTIL.init(DEV);
