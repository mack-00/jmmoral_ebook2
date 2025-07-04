if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'2-1-2', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:62, target:gPath+'/'+gId, icon:'', title:'① 우리나라는 어떤 기후 환경이 나타날까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:62, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:62, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:62, target:gPath+'/'+gId, icon:'본문 학습', title:'기후'});
	step.push({info:iId, id:++gId, mode:mode, page:62, target:gPath+'/'+gId, icon:'본문 학습', title:'우리나라 기후 환경'});
	step.push({info:iId, id:++gId, mode:mode, page:62, target:gPath+'/'+gId, icon:'본문 학습', title:'우리나라의 사계절 살펴보기'});
	step.push({info:iId, id:++gId, mode:mode, page:62, target:gPath+'/'+gId, icon:'해 보기', title:'우리나라의 계절별 모습과 사람들의 생활에 대하여 이야기해 봅시다.'});
	step.push({info:iId, id:++gId, mode:mode, page:63, target:gPath+'/'+gId, icon:'활동', title:'계절과 관련된 축제 살펴보기'});	
	
info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:63, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:63, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
