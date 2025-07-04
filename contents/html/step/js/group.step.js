if(typeof GROUP=='undefined') GROUP={};
/*<홈 화면>*/
GROUP.step=function($step, datas){
	if(!$step||!datas) return;
	
	/*전달 받은 데이터*/
	var mRegistID=datas.regist;
	var mOriginInfo=datas.info;
	var mOriginStep=datas.step;
	var mOriginRoom=datas.room;
	/*저장 데이터 교차하기*/
	var mStepList=loadStep();
	if(!mStepList) mStepList=copyList(mOriginStep);
	
	var mCB=datas.callback;
	/*엘리멘트 변수*/
	var $mStep=$step;
		$mStep.addClass('fn-group-step');
	var $mContainer;
	/*화면에 꽉채울 아이템 개수*/
	var mEnoughMax=8;
	/*만들기*/
	makeStep();
	/**
	 * 객체 전달하기
	 */
	return $mStep.fnGroupStep=result();
	function result(){
		return {
			add:add,
			remove:remove,
			reset:reset,
		};
	};
	
	function copyList(arr){
		if(!arr) return;
		var reArr=[];
		for(var i=0; i<arr.length; i++){
			reArr[i]=UTIL.get.extend({},arr[i]);
		};
		return reArr;
	};
	/*==============================*/
	/**
	 * 리스트 만들기
	 */
	function makeStep(){
		if(!mStepList) return;
		/*내부 컨터이너 등록*/
		$mContainer=document.createElement('div');
		$mContainer.addClass('container');
		$mStep.empty().append($mContainer);
		
		var infoID,$dp1,$dp2;
		UTIL.forIn(mStepList,function(obj,idx){
			if(obj.info&&obj.info!='null'){
				
				if(infoID!=obj.info){
					infoID=obj.info;
					
					$dp1=makeDP1(infoID);
					if($dp1){
						$mContainer.append($dp1);
						
						$dp2=$dp1.querySelector('.dp2');
					};
				};
				
				if($dp2){
					makeItem(obj, $dp2, 'append');
				};
			};
		});
		/*오버플로어 확인*/
		checkOverflow();
	};
	/*==============================*/
	/**
	 * 아이템 클릭 및 이동 변동하기 
	 */
	function onDragEvents(datas){
		switch(datas.type){
			case 'up':
				if(!datas.isMove){
					/*클릭 이벤트*/
					var obj=UTIL.find.arrayToID(mStepList,datas.origin.attr('data-id'));
					/*콜백 보내기*/
					sandDatas(obj);
				}else{
					/*드래그 이벤트*/
					if(addItem(datas.target)){
						datas.fn.remove();
						saveStep();
					}else{
						datas.fn.reset();
					};
				};
			break;
		};
	};
	
	/*==============================*/
	/**
	 * 뎁스 1 아이템 추가하기 
	 */
	function addDP1(obj){
		
		var $dp1;
		
		if(obj.info){
			$dp1=makeDP1(id);
		}else{
			$dp1=$mContainer.querySelector('.dp1');
		};
		
		if($dp1){
			
			var $dp2=$dp1.querySelector('.dp2');
			if($dp2){
				var obj={
					info:$dp1.attr('data-id'),
					mode:obj.mode,
					id:obj.id,
					icon:obj.icon,
					title:obj.title,
					src:obj.src
				};
				makeItem(obj, $dp2, 'append');
			};
		};
	};
	/**
	 * 뎁스 1 아이템  만들기
	 */
	function makeDP1(id){
		
		var obj=mOriginInfo[id];
		if(obj){
			var $div=document.createElement('div');
				$div.attr('data-id',id).addClass('dp1');
			
			var $title=document.createElement('div');
				$title.addClass('title');
			var $p=document.createElement('p');
				$p.text(obj.title);
			
			$title.append($p);
			$div.append($title);
			
			var $list=document.createElement('div');
				$list.addClass('dp2');
			$div.append($list);
			
			return $div;
		};
		return null;
	};
	
	/**
	 * 아이템 추가하기 
	 */
	function addItem($drag,obj,pos){
		
		var $tgts=$mContainer.querySelectorAll('[data-mode]');
		var $result;
		
		if(!pos){
			$result=UTIL.events.hitTest($tgts, $drag);
			if(!$result){
				$tgts=$mContainer.querySelectorAll('.dp2');
				$result=UTIL.events.hitTest($tgts, $drag);
			};
		}else{
			$result=UTIL.events.hitTest($tgts, pos.x, pos.y);
			if(!$result){
				$tgts=$mContainer.querySelectorAll('.dp2');
				$result=UTIL.events.hitTest($tgts, pos.x, pos.y);
			};
		};
		
		if($result){
			/*인포 ID값 필수*/
			var $tgt=$result.hit;
			/*오브젝트 데이터 채크*/
			if(!obj){
				obj=UTIL.find.arrayToObj(mStepList,{
					id:$drag.attr('data-id'),
					mode:$drag.attr('data-mode')
				});
			}else{
				mStepList.push(obj);
			};
			/*추가하기*/
			if($tgt.hasClass('dp2')){
				/*인포 ID값 필수*/
				obj.info=$tgt.parentNode.attr('data-id');
				/*아이템 추가하기*/
				makeItem(obj, $tgt, 'append');
			}else{
				/*인포 ID값 필수*/
				obj.info=$tgt.parentNode.parentNode.attr('data-id');
				/*아이템 추가하기*/
				if($result.v=='top'){
					makeItem(obj, $tgt, 'before');
				}else{
					makeItem(obj, $tgt, 'after');
				};
			};
			
			checkOverflow();
			
			return true;
		}else{
			return false;
		};
	};
	/**
	 * 리스트 아이템 만들기
	 */
	function makeItem(obj, $tgt, appendType){
		if(!obj) return;
		
		var $div=document.createElement('div');
		switch(appendType){
			case 'before':
				$tgt.before($div);
			break;
			case 'after':
				$tgt.after($div);
			break;
			default:
				$tgt.append($div);
			break;
		};
		
		/*모드 아이디값 설정*/
		$div.attr('data-mode',obj.mode);
		$div.attr('data-id',obj.id);
				
		var $tBox=document.createElement('div');
		$div.append($tBox);
		
		var $pBox=document.createElement('div');
		$pBox.addClass('p-box');
		$tBox.append($pBox);
		
		var $icon, $title, $page, $close;
		var html;
		switch(obj.mode){
			case 'step':
				if(obj.icon){
					$icon=document.createElement('span');
					$icon.attr('data-icon',obj.mode);
					$icon.text(obj.icon);
					$pBox.append($icon);
					$pBox.addClass('icon-title');
				};
			break;
			case 'room':
			default :
				if(obj.icon){
					$icon=document.createElement('span');
					$icon.attr('data-icon',obj.icon);
					$icon.text(obj.icon);
					$pBox.append($icon);
					$pBox.addClass('icon-title');
				};
			break;
		};
		
		if(obj.title=='') obj.title=' ';
		$title=document.createElement('p');
		$title.addClass('title');
		$title.text(obj.title);
		$pBox.append($title);
		if(obj.icon){
			$title.css('margin-left', ($icon.offsetWidth+10)+'px');
		};
		
		if(obj.sub){
			var $sub=document.createElement('span');
			$sub.addClass('sub');
			$sub.text(obj.sub);
			$title.append($sub);
		};
		
		var mt;
		if((obj.mode=='load'||obj.mode=='room')&&$icon){
			mt=($pBox.offsetHeight-$icon.offsetHeight)/2;
			$icon.css('top', mt+'px');
		};
		
		$close=document.createElement('span');
		$close.addClass('btn-close');
		$close.text('닫기');
		$tBox.append($close);
		
		mt=($pBox.offsetHeight-$close.offsetHeight)/2;
		$close.css('margin-top', mt+'px');
		
		if(obj.page){
			$page=document.createElement('span');
			$page.addClass('page');
			$page.text(obj.page+'쪽');
			$tBox.append($page);
			
			mt=($pBox.offsetHeight-$page.offsetHeight)/2;
			$page.css('margin-top', mt+'px');
		};
		
		var $appendTarget=document.querySelector('#content');
		var $fnDrag=$FN.Drag($div,{
			clone:'once',
			appendTarget:$appendTarget,
			cloneTarget:$appendTarget,
			type:''
		});
		$fnDrag.start(onDragEvents);
		
		/*아이템 상태 등록*/
		if(obj.state=='disabled'){
			$fnDrag.hold(true);
		};
		
		$close.on(UTIL.get.mouseType('down'),function(){
			/*부모에게 전달되는 이벤트 막기*/
			event.stopPropagation();
		});
		$close.on('click',function(){
			
			if(obj.mode=='load'){
				remove(obj);
			}else{
				/*리스트 아이템 상태 변경*/
				if(!$div.hasClass('disabled')){
					$fnDrag.hold(true);
				}else{
					$fnDrag.hold(false);
				};
			};
			
			saveStep();
		});
		
		return $div;
	};
	
	function checkOverflow(){
		
		var $list=document.querySelectorAll('.dp2>[data-mode]');
		if($list&&$list.length>=mEnoughMax){
			$mStep.removeClass('not-enough');
		}else{
			$mStep.addClass('not-enough');
		};
		
		var $dp1s=document.querySelectorAll('.dp1');
		$dp1s.css('opacity',0);
		setTimeout(function(){
			
			var $dp, $title;
			var dpH,tH;
			for(var i=0; i<$dp1s.length; i++){
				$dp=$dp1s[i];
				$title=$dp.queryDirect('.title');
				dpH=$dp.offsetHeight;
				tH=$title.getBoundingClientRect().height;
				
				$title.css('top', ((dpH-tH)/2)+'px');
			};
			
			$dp1s.css('opacity',1);
		},0);
	};
	/*==============================*/
	
	/**
	 * 초기화 하기 
	 */
	function reset(){
		
		mStepList=copyList(mOriginStep);
		
		for(var i=0; i<mStepList.length; i++){
			mStepList[i].state='';
		};
		saveStep(true);
		makeStep();
	};
	/**
	 * 아이템 추가하기 
	 */
	function add(obj){
		if(obj){
			
			if(obj.target){
				addItem(obj.target,{
					mode:obj.mode,
					id:UTIL.get.time(),
					icon:obj.icon,
					title:obj.title,
					src:obj.src
				},obj.pos);
			}else{
				addDP1(obj);
			};
			/*오버플로어 확인*/
			checkOverflow();
			/*변경 저장하기*/
			saveStep();
		};
	};
	/**
	 * 아이템 제거하기 
	 */
	function remove(obj){
		if(obj){
			var $r=$mContainer.querySelector('[data-mode="'+obj.mode+'"][data-id="'+obj.id+'"]');
			$r.remove();
		};
		/*오버플로어 확인*/
		checkOverflow();
		/*변경 저장하기*/
		saveStep();
	};
	
	/*==============================*/
	/**
	 * 데이터 보내기
	 */
	function sandDatas(obj){
		if(mCB) mCB(obj);
	};
	/**
	 * 데이터 저장하기 
	 */
	function saveStep(empty){
		if(!empty){
			var arr=[],str='';
			var $items=$mContainer.querySelectorAll('[data-mode]');
			UTIL.forIn($items,function($i, idx){
				/*아이템 모드*/
				var mode=$i.attr('data-mode');
				/*아이템 ID*/
				var id=$i.attr('data-id');
				/*아이템 상태값*/
				var state=$i.hasClass('disabled')?'disabled':'';
				/*아이템 오브젝트 가져와서 데이터 업데이트*/
				var obj=UTIL.find.arrayToObj(mStepList, {
					id:id,
					mode:mode
				});
				
				obj.state=state;
				
				if(obj){
					if(str!='') str+='⊙';
					
					if(obj.mode=='step'){ /*||(mOriginRoom&&obj.mode=='room')){*/
						/*기본 데이터인 경우*/
						str+='info◈'+obj.info;
						str+='▣id◈'+obj.id;
						str+='▣mode◈'+obj.mode;
						str+='▣state◈'+obj.state;
					}else{
						/*불러온 데이터*/
						str+='info◈'+obj.info;
						str+='▣id◈'+obj.id;
						str+='▣mode◈'+obj.mode;
						str+='▣state◈'+obj.state;
						str+='▣icon◈'+obj.icon;
						str+='▣title◈'+obj.title;
						str+='▣src◈'+obj.src;
					};
					arr.push(obj);
				};
			});
			mStepList=arr;
			EXE.saveValue(mRegistID, str);
		}else{
			EXE.saveValue(mRegistID, '');
		};
	};
	/**
	 * 데이터 불러오기 
	 */
	function loadStep(){
		var loadTxt=EXE.loadValue(mRegistID);
		/*
		loadTxt='mode◈step▣info◈1▣id◈1';
		loadTxt+='⊙mode◈step▣info◈1▣id◈2';
		loadTxt+='⊙mode◈step▣info◈2▣id◈3';
		*/
		var returnArr;
		
		if(loadTxt){
			
			returnArr=[];
			
			var groupArr=loadTxt.split('⊙');
			UTIL.forIn(groupArr,function(gTxt,idx){
				
				/*데이터 가공*/
				var obj={},infoID,infoState;
				var dataArr=gTxt.split('▣');
				UTIL.forIn(dataArr,function(data,idx){
					var v=data.split('◈');
					obj[v[0]]=v[1];
				});
				
				infoID=obj.info;
				infoState=obj.state;
				/*기존 데이터에서 찾기*/
				if(obj.mode=='step'){
					obj=UTIL.find.arrayToID(mOriginStep, obj.id);
					obj=UTIL.get.extend({},obj);
				}else{
					if(mOriginRoom&&obj.mode=='room'){
						obj=UTIL.find.arrayToID(mOriginRoom, obj.id);
						obj=UTIL.get.extend({},obj);
					};
				};
				if(obj){
					/*타이틀 정보 ID 설정*/
					if(infoID) obj.info=infoID;
					obj.state=infoState;
					
					/*데이터 저장*/
					returnArr.push(obj);
				};
			});	
		};
		
		return returnArr;
	};
};