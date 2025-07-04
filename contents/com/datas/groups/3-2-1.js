if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'3-2-1', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:126, target:gPath+'/'+gId, icon:'생각 쑥쑥', title:'주제 핵심 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:126, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:126, target:gPath+'/'+gId, icon:'', title:'주제 열기'});
	step.push({info:iId, id:++gId, mode:mode, page:127, target:gPath+'/'+gId, icon:'배울 내용 알아보기', title:'차시 흐름 보기'});
	step.push({info:iId, id:++gId, mode:mode, page:127, target:gPath+'/'+gId, icon:'핵심 용어 미리 보기', title:''});
	step.push({info:iId, id:++gId, mode:mode, page:127, target:gPath+'/'+gId, icon:'', title:'이 주제를 배우면'});
	
info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:127, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내'});