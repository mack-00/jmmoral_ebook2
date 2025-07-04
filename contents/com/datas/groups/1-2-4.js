if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'1-2-4', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
//  * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:44, target:gPath+'/'+gId, icon:'', title:'③ 역사 자료에서 독도를 찾아 볼까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:44, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:44, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:44, target:gPath+'/'+gId, icon:'본문 학습', title:'독도의 역사 자료'});
	step.push({info:iId, id:++gId, mode:mode, page:45, target:gPath+'/'+gId, icon:'해 보기', title:'독도박물관 누리집에서 독도의 역사 자료를 찾아 봅시다.'});
	step.push({info:iId, id:++gId, mode:mode, page:46, target:gPath+'/'+gId, icon:'활동', title:'우리 영토 독도 바로 알리기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:46, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:47, target:gPath+'/'+gId, icon:'', title:'생활 속 사회 이야기 1'});
	step.push({info:iId, id:++gId, mode:mode, page:47, target:gPath+'/'+gId, icon:'', title:'생활 속 사회 이야기 2'});
	step.push({info:iId, id:++gId, mode:mode, page:47, target:gPath+'/'+gId, icon:'', title:'생활 속 사회 이야기 3'});
	step.push({info:iId, id:++gId, mode:mode, page:47, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
