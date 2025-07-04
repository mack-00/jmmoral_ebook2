if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'3-1-2', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:108, target:gPath+'/'+gId, icon:'차시명', title:'① 법이란 무엇일까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:108, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:108, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:108, target:gPath+'/'+gId, icon:'본문 학습', title:'법의 의미'});
	step.push({info:iId, id:++gId, mode:mode, page:109, target:gPath+'/'+gId, icon:'본문 학습', title:'법의 특성'});
	step.push({info:iId, id:++gId, mode:mode, page:109, target:gPath+'/'+gId, icon:'본문 학습', title:'우리 생활에 적용된 법 살펴보기'});
	step.push({info:iId, id:++gId, mode:mode, page:109, target:gPath+'/'+gId, icon:'해 보기', title:'사람들이 법을 어떻게 지키고 있는지 이야기해 봅시다.'});
	step.push({info:iId, id:++gId, mode:mode, page:110, target:gPath+'/'+gId, icon:'본문 학습', title:'변화하는 법'});
	step.push({info:iId, id:++gId, mode:mode, page:111, target:gPath+'/'+gId, icon:'활동', title:'우리 생활 속 법 찾아보기'});
	
	
info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:111, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:111, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
