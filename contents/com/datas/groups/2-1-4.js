if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'2-1-4', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
//  * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:68, target:gPath+'/'+gId, icon:'', title:'③ 우리나라의 강수량과 바람은 어떤 특징이 있을까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:68, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:68, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:68, target:gPath+'/'+gId, icon:'본문 학습', title:'우리나라 강수량의 특징'});
	step.push({info:iId, id:++gId, mode:mode, page:68, target:gPath+'/'+gId, icon:'본문 학습', title:'강수량을 나타내는 기후도와 그래프'});	
	step.push({info:iId, id:++gId, mode:mode, page:68, target:gPath+'/'+gId, icon:'해 보기', title:'연 강수량 지도를 보고 북쪽에서 남쪽으로 갈수록 강수량의 변화가 어떤지 말해 봅시다.'});
	step.push({info:iId, id:++gId, mode:mode, page:69, target:gPath+'/'+gId, icon:'본문 학습', title:'강수량에 따른 사람들의 생활 모습'});
	step.push({info:iId, id:++gId, mode:mode, page:70, target:gPath+'/'+gId, icon:'활동', title:'우리나라 강수량의 특징 알아보기'});
	step.push({info:iId, id:++gId, mode:mode, page:71, target:gPath+'/'+gId, icon:'본문 학습', title:'우리나라의 바람'});
	step.push({info:iId, id:++gId, mode:mode, page:71, target:gPath+'/'+gId, icon:'해 보기', title:'우리나라의 여름과 겨울에 부는 바람의 차이를 말해 봅시다.'});

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:71, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:71, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
