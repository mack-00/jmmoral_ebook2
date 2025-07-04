if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'2-1-6', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:78, target:gPath+'/'+gId, icon:'', title:'⑤ 자연재해와 기후변화에 대응하기 위해 어떤 노력을 하고 있을까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:78, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:78, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:78, target:gPath+'/'+gId, icon:'본문 학습', title:'자연재해에 대비하는 국가의 노력'});
	step.push({info:iId, id:++gId, mode:mode, page:79, target:gPath+'/'+gId, icon:'본문 학습', title:'자연재해 대비하는 개인의 노력'});
	step.push({info:iId, id:++gId, mode:mode, page:79, target:gPath+'/'+gId, icon:'해 보기', title:'그림의 행동 요령 외에 또 어떤 것이 필요한지 국민 재난 안전 포털 누리집에 방문하여 살펴봅시다.'});
	step.push({info:iId, id:++gId, mode:mode, page:80, target:gPath+'/'+gId, icon:'본문 학습', title:'기후변화와 기후 행동'});
	step.push({info:iId, id:++gId, mode:mode, page:80, target:gPath+'/'+gId, icon:'본문 학습', title:'지구와 나를 위해 실천하는 기후 행동'});
	step.push({info:iId, id:++gId, mode:mode, page:81, target:gPath+'/'+gId, icon:'활동', title:'지구와 나를 위한 나의 기후 행동 계획하기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:81, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});	
	step.push({info:iId, id:++gId, mode:mode, page:81, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
