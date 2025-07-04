/*=========
 LISTENER
===========*/
UTIL.message.listener(function(e){
	var ms=e.data;
	if(ms&&ms.messageType=='plugin'){
		switch(ms.messageMode){
			case 'load':
				INDEX.start(ms);
			break;
			case 'position':
				INDEX.position(ms);
			break;
			case 'unload':
				INDEX.destroy();
			break;
		};
	};
});

/*=========
 INDEX
===========*/
INDEX=(function(){
	/*기본 정보*/
	var mDatas,mRegist;
	/**/
	var mLoadDatas;
	/*객체 정보*/
	var $mPlugin;
	
return{
	/**
	 * 시작하기 
	 */
	start:function(ms){
		/*효과음 초기 위치 설정*/
		EFFECT.path('../../../files/effects/');
		/*셋팅 데이터*/
		mDatas=ms;
		mRegist=mDatas.regist+'.plugin.index';
		/*메모 객체*/
		$mPlugin=document.querySelector('#plugin');
		/*저장된 데이터 불러오기*/
		loadDatas();
		/*목차 리스트 만들기*/
		makeList();
		/*목차 업데이트 하기*/
		updateSize();
	},
	position:function(ms){
		mDatas.x=ms.x;
		mDatas.y=ms.y;
		mDatas.z=ms.z;
	},
	/**
	 * 제거하기 
	 */
	destroy:function(){
		EFFECT.destroy();
		
		if($mPlugin){
			$mPlugin.querySelectorAll('[data-lesson]>.title').off();
			$mPlugin.querySelectorAll('[data-chapter]>.title').off();
			$mPlugin=null;
		};
		mLoadDatas=null;
		mDatas=mRegist=null;
	}/*end*/
};
	/*=========
	 업데이트 
	===========*/
	/*업데이트 플러그인 사이즈*/
	function updateSize(){
		mDatas.messageMode='resize';
		mDatas.w=$mPlugin.offsetWidth;
		mDatas.h=$mPlugin.offsetHeight;
		UTIL.message.parent(mDatas);
	};
	/*=========
	 플러그인 함수 
	===========*/
	/*리스트 만들기*/
	function makeList(){
		if(typeof DATAS != undefined){
			if(DATAS.index){
				/*리스트 초기화*/
				$mPlugin.empty();
				/*레슨 리스트 만들기*/
				makeLesson(DATAS.index);
			};
		};
	};
	/*레슨 리스트 만들기*/
	function makeLesson(list){
		
		var obj;
		var $lesson, $title, $ul;
		
		var arr=["Ⅰ", "Ⅱ ", "Ⅲ ", "Ⅳ ", "Ⅴ ", "Ⅵ ", "Ⅶ ", "Ⅷ ", "Ⅸ ", "Ⅹ"];
		
		for(var i=0; i<list.length; i++){
			obj=list[i];
			if(obj){
				$lesson=document.createElement('li');
				$mPlugin.append($lesson);
				
				$lesson.attr('data-lesson',i);
				if(mLoadDatas==i){
					$lesson.addClass('on');
				};
				
				$title=document.createElement('div');
				$lesson.append($title);
				
				$title.addClass('title');
				$title.attr('data-page',obj.page);
				$title.text(arr[i]+' '+obj.title);
				$title.on('click', onClickOpenList);
				
				if(obj.list){
					$ul=document.createElement('ul');
					$lesson.append($ul);
					makeChapter($ul, obj.list);
				};
			};
		};
	};
	/*챕터 리스트 만들기*/
	function makeChapter($ul, list){
		
		var i=0; lens=list.length;
		var obj;
		var $chapter, $title, $ul;
		
		var noArr=['1.','2.','3.','4.','5.','6.','7.'];
		
		for(i=0; i<lens; i++){
			obj=list[i];
			if(obj){
				$chapter=document.createElement('li');
				$chapter.attr('data-chapter',i);
				
				$title=document.createElement('div');
				$title.addClass('title');
				$title.attr('data-page',obj.page);
				$title.text(noArr[i]+' '+obj.title);
				$title.on('click', onClickUpdate);
				
				$chapter.append($title);
				$ul.append($chapter);
			};
		};
	};
	/**
	 * 리스트 확장하기 
	 */
	function onClickOpenList(){
		EFFECT.play('open');
		
		var $parent=this.parentElement;
		var $ul=$parent.queryDirect('ul');
		
		if(!$parent.hasClass('on')){
			closeOpenList();
			$parent.addClass('on');
			
			saveDatas($parent.attr('data-lesson'));
		}else{
			$parent.removeClass('on');
			
			saveDatas('');
		};
		
		updateSize();
	};
	/**
	 * 리스트 선택 전송하기 
	 */
	function onClickUpdate(){
		mDatas.messageMode='gotoPage';
		mDatas.page=parseInt(this.attr('data-page'));
		UTIL.message.parent(mDatas);
	};
	/*열린 리스트 닫기*/
	function closeOpenList(){
		var $lesson=$mPlugin.querySelector('[data-lesson].on');
		if($lesson) $lesson.removeClass('on');
	};
	
	/*====================
	 LOAD & SAVE & UPDATE
	=====================*/
	/*데이터 불러오기*/
	function loadDatas(){
		mLoadDatas=EXE.loadValue(mRegist);
		if(!mLoadDatas) mLoadDatas=-1;
	};
	/*데이터 저장하기*/
	function saveDatas(str){
		EXE.saveValue(mRegist, str);
	};
}());
