if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'2-1-3', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:64, target:gPath+'/'+gId, icon:'', title:'② 우리나라의 기온은 어떤 특징이 있을까요?'});
	step.push({info:iId, id:++gId, mode:mode, page:64, target:gPath+'/'+gId, icon:'생각 열기', title:'차시 도입 질문 확인하기'});
	step.push({info:iId, id:++gId, mode:mode, page:64, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:64, target:gPath+'/'+gId, icon:'본문 학습', title:'우리나라 기온의 특징'});
	step.push({info:iId, id:++gId, mode:mode, page:64, target:gPath+'/'+gId, icon:'본문 학습', title:'기온을 나타내는 기후도와 그래프'});
	step.push({info:iId, id:++gId, mode:mode, page:64, target:gPath+'/'+gId, icon:'해 보기', title:'기후도를 보고 서울과 부산의 연평균 기온을 비교해 봅시다.'});	
	step.push({info:iId, id:++gId, mode:mode, page:65, target:gPath+'/'+gId, icon:'활동', title:'우리나라 기온의 특징 알아보기'});
	step.push({info:iId, id:++gId, mode:mode, page:66, target:gPath+'/'+gId, icon:'본문 학습', title:'기온에 따른 사람들의 생활 모습'});
	step.push({info:iId, id:++gId, mode:mode, page:67, target:gPath+'/'+gId, icon:'더 알아보기', title:'기온에 따른 사람들의 생활 모습'});	

info[++iId]={title:'정리'};
	step.push({info:iId, id:++gId, mode:mode, page:67, target:gPath+'/'+gId, icon:'', title:'스스로 확인하기'});	
	step.push({info:iId, id:++gId, mode:mode, page:67, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내하기'});
