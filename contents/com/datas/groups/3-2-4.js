if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'3-2-4', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
//  * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:138, target:gPath+'/'+gId, icon:'차시명', title:'③ 일상생활에서 인권 보호를 어떻게 실천해야 할까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:138, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:138, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:138, target:gPath+'/'+gId, icon:'본문 학습', title:'일상생활 속 인권 보호 방법 살펴보기'});
	step.push({info:iId, id:++gId, mode:mode, page:138, target:gPath+'/'+gId, icon:'해 보기', title:'짝에게 배려와 응원이 담긴 말하기'});
	step.push({info:iId, id:++gId, mode:mode, page:139, target:gPath+'/'+gId, icon:'본문 학습', title:'적극적인 인권 보호 방법 살펴보기'});
	step.push({info:iId, id:++gId, mode:mode, page:140, target:gPath+'/'+gId, icon:'활동 1', title:'선택 활동1 인권 존중 사진 찍기'});
	step.push({info:iId, id:++gId, mode:mode, page:141, target:gPath+'/'+gId, icon:'활동 2', title:'선택 활동2 인권 존중 토론하기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:141, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:141, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
