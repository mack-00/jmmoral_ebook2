if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'3-1-3', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:112, target:gPath+'/'+gId, icon:'차시명', title:'② 법은 어떤 역할을 할까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:112, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:112, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:112, target:gPath+'/'+gId, icon:'본문 학습', title:'개인의 권리 보호'});
	step.push({info:iId, id:++gId, mode:mode, page:112, target:gPath+'/'+gId, icon:'해 보기', title:'내 권리를 보호받는다고 느낀 경험 이야기해 보기'});
	step.push({info:iId, id:++gId, mode:mode, page:113, target:gPath+'/'+gId, icon:'본문 학습', title:'사회 질서 유지'});
	step.push({info:iId, id:++gId, mode:mode, page:114, target:gPath+'/'+gId, icon:'활동', title:'법의 역할 알아보기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:114, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:115, target:gPath+'/'+gId, icon:'', title:'생활 속 사회 이야기'});
	step.push({info:iId, id:++gId, mode:mode, page:115, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
