if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'1-2-3', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:40, target:gPath+'/'+gId, icon:'', title:'② 독도에서는 어떤 자연환경을 볼 수 있을까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:40, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:40, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:40, target:gPath+'/'+gId, icon:'본문 학습', title:'독도의 지형'});
	step.push({info:iId, id:++gId, mode:mode, page:41, target:gPath+'/'+gId, icon:'본문 학습', title:'독도의 기후'});
	step.push({info:iId, id:++gId, mode:mode, page:41, target:gPath+'/'+gId, icon:'해 보기', title:'독도의 모습을 살펴 봅시다.'});
	step.push({info:iId, id:++gId, mode:mode, page:42, target:gPath+'/'+gId, icon:'본문 학습', title:'독도의 아름다운 생태계'});
	step.push({info:iId, id:++gId, mode:mode, page:42, target:gPath+'/'+gId, icon:'본문 학습', title:'독도의 다양한 생물들'});
	step.push({info:iId, id:++gId, mode:mode, page:43, target:gPath+'/'+gId, icon:'활동', title:'독도 캐릭터 만들기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:43, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:43, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
