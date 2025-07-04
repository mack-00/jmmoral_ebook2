if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'2-1-5', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:72, target:gPath+'/'+gId, icon:'', title:'④ 기후변화와 자연재해는 어떤 관련이 있을까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:72, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:72, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:72, target:gPath+'/'+gId, icon:'본문 학습', title:'기후와 관련된 자연재해'});
	step.push({info:iId, id:++gId, mode:mode, page:74, target:gPath+'/'+gId, icon:'본문 학습', title:'통계로 보는 자연재해'});
	step.push({info:iId, id:++gId, mode:mode, page:75, target:gPath+'/'+gId, icon:'본문 학습', title:'기후변화와 관련된 자연재해'});
	step.push({info:iId, id:++gId, mode:mode, page:75, target:gPath+'/'+gId, icon:'본문 학습', title:'기후변화로 심화되는 자연재해 · 이상 기후 현상'});
	step.push({info:iId, id:++gId, mode:mode, page:76, target:gPath+'/'+gId, icon:'더 알아보기', title:'지형과 관련된 자연재해'});
	step.push({info:iId, id:++gId, mode:mode, page:76, target:gPath+'/'+gId, icon:'활동', title:'우리나라의 자연재해 조사하기'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:76, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:77, target:gPath+'/'+gId, icon:'', title:'생활 속 사회 이야기 1'});
	step.push({info:iId, id:++gId, mode:mode, page:77, target:gPath+'/'+gId, icon:'', title:'생활 속 사회 이야기 2'});
	step.push({info:iId, id:++gId, mode:mode, page:77, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
