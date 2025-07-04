if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'1-2-2', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:38, target:gPath+'/'+gId, icon:'', title:'① 독도는 어디에 위치할까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:38, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:38, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:38, target:gPath+'/'+gId, icon:'본문 학습', title:'대한민국의 영토'});
	step.push({info:iId, id:++gId, mode:mode, page:39, target:gPath+'/'+gId, icon:'본문 학습', title:'독도의 위치'});
	step.push({info:iId, id:++gId, mode:mode, page:38, target:gPath+'/'+gId, icon:'본문 학습', title:'대한민국의 영역 알아보기'});
	step.push({info:iId, id:++gId, mode:mode, page:39, target:gPath+'/'+gId, icon:'해 보기', title:'디지털 영상 지도에서 독도의 위치를 찾아 봅시다.'});
	step.push({info:iId, id:++gId, mode:mode, page:39, target:gPath+'/'+gId, icon:'활동', title:'우리 영토인 독도로 여행가는 방법 알아보기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:39, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:39, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
