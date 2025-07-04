if(typeof DATAS == 'undefined') DATAS={}; 
DATAS.group={path:'1-2-6', info:{}, step:[]}; 

var info=DATAS.group.info;
var step=DATAS.group.step; 
var gPath=DATAS.group.path;
 
var iId=0,gId=0,mode;

/*===============
 * 단원 리스트
 ================*/
mode='step';
info[++iId]={title:'도입'};
	step.push({info:iId, id:++gId, mode:mode, page:52, target:gPath+'/'+gId, icon:'', title:'배운 내용 돌아보기',  sub:''});
	step.push({info:iId, id:++gId, mode:mode, page:52, target:gPath+'/'+gId, icon:'학습 목표', title:'학습 목표 확인하기'});
	 
info[++iId]={title:'전개'};
	step.push({info:iId, id:++gId, mode:mode, page:52, target:gPath+'/'+gId, icon:'', title:'탄탄! 민주 시민 역량 키우기'});
	step.push({info:iId, id:++gId, mode:mode, page:53, target:gPath+'/'+gId, icon:'', title:'배운 내용 정리하기 1'});
	step.push({info:iId, id:++gId, mode:mode, page:53, target:gPath+'/'+gId, icon:'', title:'배운 내용 정리하기 2'});
	 
info[++iId]={title:'정리'};
step.push({info:iId, id:++gId, mode:mode, page:53, target:gPath+'/'+gId, icon:'', title:'생각 쑥쑥 돌아보기'});
step.push({info:iId, id:++gId, mode:mode, page:53, target:gPath+'/'+gId, icon:'', title:'다음 차시 안내'});