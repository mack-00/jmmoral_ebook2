if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'3-2-2', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:128, target:gPath+'/'+gId, icon:'차시명', title:'① 우리 사회는 인권 보장을 위해 어떤 노력을 하고 있나요?'});
	step.push({info:iId, id:++gId, mode:mode, page:128, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:128, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:128, target:gPath+'/'+gId, icon:'본문 학습', title:'국가의 인권 보장 노력'});
	step.push({info:iId, id:++gId, mode:mode, page:130, target:gPath+'/'+gId, icon:'본문 학습', title:'시민들의 인권 보장 노력'});
	step.push({info:iId, id:++gId, mode:mode, page:130, target:gPath+'/'+gId, icon:'해 보기', title:'학교에서는 학교 구성원의 인권을 보장하고자 어떤 노력을 하는지 생각해 봅시다.'});
	step.push({info:iId, id:++gId, mode:mode, page:131, target:gPath+'/'+gId, icon:'활동', title:'유니버설 디자인 탐구하기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:131, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:132, target:gPath+'/'+gId, icon:'', title:'생활 속 사회 이야기'});	
	step.push({info:iId, id:++gId, mode:mode, page:133, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
