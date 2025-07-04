if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'3-2-3', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:134, target:gPath+'/'+gId, icon:'차시명', title:'② 일상생활에서 인권 침해 사례를 찾아볼까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:134, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:134, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:134, target:gPath+'/'+gId, icon:'본문 학습', title:'일상생활 속 인권 침해 사례 살펴보기'});
	step.push({info:iId, id:++gId, mode:mode, page:135, target:gPath+'/'+gId, icon:'해 보기', title:'그림을 보고 비슷한 상황을 보거나 겪은 경험을 말해 보기'});
	step.push({info:iId, id:++gId, mode:mode, page:136, target:gPath+'/'+gId, icon:'활동', title:'인권 침해 사례 조사하기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:136, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:137, target:gPath+'/'+gId, icon:'', title:'생활 속 사회 이야기'});	
	step.push({info:iId, id:++gId, mode:mode, page:137, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
