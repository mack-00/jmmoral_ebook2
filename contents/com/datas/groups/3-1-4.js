if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'3-1-4', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
//  * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:116, target:gPath+'/'+gId, icon:'차시명', title:'③ 헌법은 인권을 어떻게 보장할까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:116, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:116, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:116, target:gPath+'/'+gId, icon:'본문 학습', title:'헌법의 의미'});
	step.push({info:iId, id:++gId, mode:mode, page:117, target:gPath+'/'+gId, icon:'본문 학습', title:'헌법이 보장하는 인권'});
	step.push({info:iId, id:++gId, mode:mode, page:117, target:gPath+'/'+gId, icon:'본문 학습', title:'일상생활 속 기본권 살펴보기'});
	step.push({info:iId, id:++gId, mode:mode, page:117, target:gPath+'/'+gId, icon:'해 보기', title:'일상생활에서 기본권을 보장받는 또 다른 사례를 이야기해 보기'});
	step.push({info:iId, id:++gId, mode:mode, page:118, target:gPath+'/'+gId, icon:'본문 학습', title:'헌법의 역할'});
	step.push({info:iId, id:++gId, mode:mode, page:118, target:gPath+'/'+gId, icon:'활동', title:'헌법이 하는 일 살펴보기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:119, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:119, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
