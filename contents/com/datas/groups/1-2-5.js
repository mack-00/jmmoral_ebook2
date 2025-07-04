if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'1-2-5', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:48, target:gPath+'/'+gId, icon:'', title:'④ 독도를 지키기 위한 노력을 알아볼까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:48, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:48, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:48, target:gPath+'/'+gId, icon:'본문 학습', title:'독도와 관련된 역사 속 인물'});
	step.push({info:iId, id:++gId, mode:mode, page:49, target:gPath+'/'+gId, icon:'본문 학습', title:'오늘날의 노력'});
	step.push({info:iId, id:++gId, mode:mode, page:49, target:gPath+'/'+gId, icon:'본문 학습', title:'오늘날의 노력'});
	step.push({info:iId, id:++gId, mode:mode, page:49, target:gPath+'/'+gId, icon:'본문 학습', title:'더 알아보기'});
	step.push({info:iId, id:++gId, mode:mode, page:50, target:gPath+'/'+gId, icon:'본문 학습', title:'오늘날의 노력'});
	step.push({info:iId, id:++gId, mode:mode, page:50, target:gPath+'/'+gId, icon:'본문 학습', title:'오늘날의 노력'});
	step.push({info:iId, id:++gId, mode:mode, page:51, target:gPath+'/'+gId, icon:'활동', title:'독도의 다양한 가치를 알리는 독도 모형 만들기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:51, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:51, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
