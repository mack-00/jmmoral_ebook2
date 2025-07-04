

/*<홈 화면>*/
DEV=(function(){
	
	var mRegist=USER.project+'.'+USER.id.step;
	var mPath='../../com/datas/groups/';
	
	var $mFnStep, $mFnRoom;
	
	/**
	 * 네비 시작하기
	 */
	function startNavi(){
		
		NAVI.dropdown(
			document.querySelector('[data-fn="step-navi"]'),
			{
				isFrist:true,
				depths:USER.depths,
				datas:DATAS.index,
				callback:function(datas){
					switch(datas.type){
						case 'change':
							loadGroupDatas(datas.depths, datas.page);
						break;
					};
				}/*end*/
			}/*end*/
		);
	};
	
	/**
	 * 이벤트 시작하기 
	 */
	function startEvents(){
		
		/*메뉴 이벤트*/
		document.querySelectorAll('#step-menu [data-btn]').on('click',function(){
			var type=this.attr('data-btn');
			switch(type){
				case 'home':
					USER.sandParent(USER.id.home);
				break;
				case 'fileroom':
					USER.sandParent(USER.id.fileroom);
				break;
				case 'ebook':
					USER.sandParent(USER.id.ebook);
				break;
			};
		});
		
		
		/*리스트 초기화 버튼*/
		document.querySelector('.step [data-btn="reset"]').on('click',function(){
			$mFnStep.reset();
		});
		
		/*내자료 선택하기 기능 활성화*/
		var $roomChoose=document.querySelector('.room .room-choose');
		var $fnChoose=$FN.Choose($roomChoose, {
			id:'room-choose',
			val:(USER.depths[0]+1),
			callback:changeRoomItem/*end*/
		});
		$fnChoose.start();
		
		/*파일 찾기 버튼 이벤트*/
		document.querySelector('.room [data-btn="load"]').on('click',function(){
			/*파일 찾기  [filterType(all/image/audio/video/document)|selectType(single/multi)|target(복사위치)]*/
			EXE.searchFile('exeStepRoomSearch','all|single');
		});
		
		/*WEB링크 버튼 이벤트*/
		document.querySelector('.room [data-btn="add-url"]').on('click',function(){
			addRoomWeb();
		});
		
		/*WEB링크 아이템 삭제 버튼*/
		document.querySelector('[data-btn="delete-room"]').on('click',function(){
			deleteRoomItems();
		});
	};
	
	/**
	 * 해당 데이터 불러오기
	 */
	function loadGroupDatas(depths, page){
		USER.depths=depths;
		USER.page=page;
		
		var src=mPath+(depths[0]+1)+'-'+(depths[1]+1)+'-'+(depths[2]+1)+'.js';
		/*파일 불러오기*/
		UTIL.load.js(src,function(){
			if(DATAS.group){
				/*수업 내용 만들기*/
				makeStepView();
				/*자료실 내용 만들기*/
				makeRoomView();
				/*이벤트 시작하기*/
				startEvents();
			};
		});
	};
	
	/*==============================*/
	/*수업 목차 이벤트 함수 지역*/
	/*==============================*/
	
	/**
	 *수업 목차 리스트 만들기 
	 */
	function makeStepView(){
		
		var id=mRegist+'.'+(USER.depths[0]+1)+'-'+(USER.depths[1]+1)+'-'+(USER.depths[2]+1)+'.step';
		
		$mFnStep=GROUP.step(
			document.querySelector('[data-fn="group-step"]'),
			{
				regist:id,
				info:DATAS.group.info,
				step:DATAS.group.step,
				callback:onStepCallback/*end*/
			}/*end*/
		);
		/**
		 * 리스트 클릭 이벤트 
		 */
		function onStepCallback(datas){
			if(datas){
				USER.group=datas.id;
				USER.sandParent(USER.id.popup);
			};
		};
	};
	/**
	 * 수업 목차 아이템 추가하기 
	 */
	function addStepItem(datas){
		var $step=document.querySelector('[data-fn="group-step"]');
		if($step&&datas){
			var $fn=$step.fnGroupStep;
			if($fn){
				$fn.add(datas);
			};
		};
	};
	
	/*==============================*/
	/*자료실 목차 이벤트 함수 지역*/
	/*==============================*/
	
	function initRoomChoose(){
		
		if(DATAS.index){
			
			var arr=DATAS.index;
			
			if(arr){
				/*룸 선택 창 불러오기*/
				var $roomChoose=document.querySelector('.room-choose');
				$roomChoose.empty();
				/*전체 선택 추가*/
				$roomChoose.append(addItem('all', '전체'));
				/*단원별 추가*/
				var $rVal, val;
				for(var i=0; i<arr.length; i++){
					val=i+1;
					$roomChoose.append(addItem(val, val+'단원'));
				};
			};
		};
		function addItem(val, title){
			var $val=document.createElement('div');
			$val.attr('data-val',val);
			var $span=document.createElement('span');
			$span.text(title);
			$val.append($span);
			return $val;
		};
	};
	
	/**
	 *자료실 목차 리스트 만들기 
	 */
	function makeRoomView(){
		
		var id=mRegist+'.room';
		
		/*그룹 파일 리스트 만들기*/
		$mFnRoom=GROUP.room(
			document.querySelector('[data-fn="group-room"]'),
			{
				regist:id,
				/*room:DATAS.room[USER.depths[0]],*/
				lesson:(USER.depths[0]+1),
				callback:onRoomCallback/*end*/
			}/*end*/
		);
		
		/**
		 * 자료실 클릭 이벤트 
		 */
		function onRoomCallback(datas){
			
			if(datas){
				
				if(datas.eType=='click'){
					
					switch(datas.icon){
						case 'web':
						case 'youtube':
							EXE.openWeb(datas.src);
						break;
						break;
						case 'img':
						case 'mov':
						default :
							EXE.shellExecute(datas.src,true);
						break;
					};
				}else{
					addStepItem(datas);
				};
			};
		};
	};
	/**
	 * 자료실 단원별로 변경하기 
	 */
	function changeRoomItem(datas){
		if(datas){
			if($mFnRoom){
				$mFnRoom.change(datas.val);
			};
		};
	};
	/**
	 * 자료실에 웹페이지 추가하기 
	 */
	function addRoomWeb(){
		
		var $url=document.querySelector('.link-body .url');
		var $name=document.querySelector('.link-body .name');
		var url=$url.value;
		var name=$name.value;
		
		var isFail=false;
		if(!url && url!=''){
			isFail=true;
			alert('등록할 인터넷 주소를 입력하세요.');
			return;
		};
		if(!name || name==''){
			isFail=true;
			alert('등록할 URL 저장명을 입력하세요.');
			return;
		};
		if(url.indexOf('.')<0){
			isFail=true;
			alert('잘 못된 인터넷 주소입니다.');
			return;
		};
		/*인터넷 주소가 정확히 입력이 되었을 때*/
		if(!isFail){
			addRoomItem({
				type:'web',
				src:url, 
				title:name/*end*/
			});
			
			$url.value='';
			$name.value='';
		};
	};
	/**
	 * 자료실 링크 아이템 추가하기 
	 */
	function addRoomItem(datas){
		if(!datas) return;
		
		var $room=document.querySelector('[data-fn="group-room"]');
		if($room){
			var $fn=$room.fnGroupRoom;
			if($fn){
				if(datas.type=='file'){
					
					var arr=datas.src.split('◈');
					UTIL.forIn(arr,function(src,idx){
						$fn.add(datas.type, src);
					});
				}else{
					$fn.add(datas.type, datas.src, datas.title);
				};
				
			};
		};
	};
	/**
	 *선택된 자료실 아이템 제거하기 
	 */
	function deleteRoomItems(){
		var $room=document.querySelector('[data-fn="group-room"]');
		if($room){
			var $fn=$room.fnGroupRoom;
			if($fn){
				$fn.removeSelect();
			};
		};
	};
return{
	ready:function(){
		/*파일 초기 위치 조정*/
		EXE.root('../../');
		EXE.appType(USER.appType,'');
		/*사용자 데이터 초기화*/
		USER.init(USER.id.step);
		
		/*데이터 전달 받기*/
		UTIL.message.listener(function(event){
			var obj=event.data;
			if(obj){
				switch(obj.messageType){
					case 'exe':
						addRoomItem({
							type:'file',
							src:obj.result
						});
					break;
				};
			};
		});
	},
	load:function(){
		/*상단 인덱스 네비 설정*/
		startNavi();
		/*룸 선택 만들기*/
		initRoomChoose();
	},
	unload:function(){}
};
}()); UTIL.init(DEV);
