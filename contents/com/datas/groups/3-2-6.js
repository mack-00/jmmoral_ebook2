if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'3-2-6', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:144, target:gPath+'/'+gId, icon:'', title:'배운 내용 돌아보기'});
	step.push({info:iId, id:++gId, mode:mode, page:144, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	 
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:144, target:gPath+'/'+gId, icon:'단원 마무리', title:'1주제 생각 그물 정리하기'});
	step.push({info:iId, id:++gId, mode:mode, page:145, target:gPath+'/'+gId, icon:'단원 마무리', title:'2주제 생각 그물 정리하기'});
	step.push({info:iId, id:++gId, mode:mode, page:145, target:gPath+'/'+gId, icon:'스스로 평가하기', title:'이 단원에서 배운 내용을 스스로 평가해 보기'});
	step.push({info:iId, id:++gId, mode:mode, page:146, target:gPath+'/'+gId, icon:'함께하는 창의 활동', title:'옛날이야기 속 모의재판하기'});
	step.push({info:iId, id:++gId, mode:mode, page:147, target:gPath+'/'+gId, icon:'함께하는 창의 활동', title:'활동 평가하기'});
	 
info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:147, target:gPath+'/'+gId, icon:'', title:'기억에 남는 내용 이야기하기'});
	step.push({info:iId, id:++gId, mode:mode, page:147, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});