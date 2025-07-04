/*<홈 화면>*/
DEV=(function(){
	
	function initFileroom(){
		
		if(typeof FILES != 'undefined'){
			D1(FILES);
		};
	};
	/*D1*/
	function D1(a1){
		if(!a1.list) return;
		
		var id=USER.depths[0];
		
		var _d1=UTIL.query('#view>.view-1>[data-dp="1"]');
		_d1.empty();
		
		var _li;
		
		UTIL.forIn(a1.list,function(b1,b2){
			
			_li=document.createElement('li');
			_li.attr('data-idx',b2);
			
			_li.innerHTML='<p><span data-icon="'+b1.icon+'">'+b1.icon+'</span> '
						+'<span>'+b1.title+'</span></p>';
						
			_d1.append(_li);
			
			if(id==b2){
				_li.addClass('on');
				D2(b1);
			}else{
				_li.removeClass('on');
			};
			_li.on('click',onClick);
		});
		
		function onClick(){
			
			_d1.query('>li',true).removeClass('on');
			this.addClass('on');
			
			var idx=parseInt(this.attr('data-idx'));
			D2(a1.list[idx],idx);
		};
	};
	/*D2*/
	function D2(a1,idx){
		if(!a1.list) return;
		
		var _d1=UTIL.query('#view>.view-2>[data-dp="1"]');
		_d1.attr('data-lesson',idx+1);
		_d1.empty();
		
		var _li,html;
		
		UTIL.forIn(a1.list,function(b1,b2){
			
			_li=document.createElement('li');
			html='<p>';
			if(b1.icon) html+='<span data-idx="'+b2+'" data-icon="'+b1.icon+'">'+b1.icon+'</span> ';
			html+='<span>'+b1.title+'</span></p>';
			
			_li.innerHTML=html;
			
			_d1.append(_li);
			
			/*D3*/
			if(b1.list) D3(b1,_li);
		});
		
		function D3(b1,b2){
			if(!b1.list) return;
		
			var _ul=document.createElement('ul');
			_ul.attr('data-dp',2);
			b2.append(_ul);
			
			var _li,html,_icon;
		
			UTIL.forIn(b1.list,function(c1,c2){
				
				_li=document.createElement('li');
				
				html='<p><span class="title">'+c1.title+'</span></p>';
				html+='<p><span data-url="'+c1.url+'" data-icon="'+c1.icon+'">다운로드</span></p>';
				_li.innerHTML=html;
				
				_ul.append(_li);
				
				_icon=_li.querySelector('span[data-icon]');
				
				_icon.on('click',onclick);
			});
		};
		
		function onclick(){
			
			var url=FILES.path+this.attr('data-url');
			
			if(typeof EXE!='undefined'){
				EXE.openFile(url);
			}else{
				window.open("../../../contents/"+url);
			};
		};
	};
	
	function startFileroom(){
		
		UTIL.query('[data-btn="close"]').on('click',function(){
			USER.sandParent(USER.from,{from:USER.from});
		});
	};
	
return{
	ready:function(){
		/*사용자 데이터 초기화*/
		EXE.root('../../../', '');
		EXE.appType(USER.appType,'');
		if(!EXE.is()){
			document.querySelector('body').addClass('web');
		};
		/*사용자 데이터 초기화*/
		USER.init(USER.id.fileroom);
		/*자료실 설정*/
		initFileroom();
	},
	load:function(){
		/*자료실 시작하기*/
		startFileroom();
	},
	unload:function(){}
};
}()); UTIL.init(DEV);
