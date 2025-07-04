if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'1-1-2', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:7, target:gPath+'/'+gId, icon:'', title:'① 우리나라에는 어떤 지형이 있을까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:7, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:7, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:8, target:gPath+'/'+gId, icon:'본문 학습', title:'지형의 뜻'});
	step.push({info:iId, id:++gId, mode:mode, page:8, target:gPath+'/'+gId, icon:'본문 학습', title:'그림으로 지형 살펴보기'});
	step.push({info:iId, id:++gId, mode:mode, page:8, target:gPath+'/'+gId, icon:'해 보기', title:'그림에 나타난 지형 외에 또 어떤 지형이 있는지 생각해 봅시다.'});
	step.push({info:iId, id:++gId, mode:mode, page:8, target:gPath+'/'+gId, icon:'본문 학습', title:'사진으로 지형 살펴보기'});
	step.push({info:iId, id:++gId, mode:mode, page:8, target:gPath+'/'+gId, icon:'활동 1', title:'디지털 영상 지도에서 우리나라의 다양한 지형 찾기'});
	step.push({info:iId, id:++gId, mode:mode, page:8, target:gPath+'/'+gId, icon:'활동 2', title:'디지털 영상 지도에서 우리나라의 다양한 지형 찾기'});
	
info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:9, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:9, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
