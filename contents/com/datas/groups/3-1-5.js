if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'3-1-5', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:120, target:gPath+'/'+gId, icon:'차시명', title:'④ 헌법에 규정된 인권을 보장하는 사례를 찾아볼까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:120, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:120, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:120, target:gPath+'/'+gId, icon:'본문 학습', title:'일상생활 속 인권 보장'});
	step.push({info:iId, id:++gId, mode:mode, page:120, target:gPath+'/'+gId, icon:'본문 학습', title:'헌법에 규정된 인권 보장 사례 살펴보기'});
	step.push({info:iId, id:++gId, mode:mode, page:121, target:gPath+'/'+gId, icon:'활동', title:'헌법에 규정된 인권을 보장하는 사례 소개하기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:122, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:123, target:gPath+'/'+gId, icon:'', title:'생활 속 사회 이야기'});	
	step.push({info:iId, id:++gId, mode:mode, page:123, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
