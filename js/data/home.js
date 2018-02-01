mui.post(http_host+'home/index',{
		station_id:2, token:123456
},function(data){
		var bt=baidu.template;
		var html=bt('t:_1234-abcd-1',data.data);
		document.getElementById('result').innerHTML=html;
		
		var d_recommend=bt('t:recommend',data.data);
		document.getElementById('d-recommend').innerHTML=d_recommend;
	},'json'
);
function prolist(){
	mui.openWindow({
	    url: 'prolist.html', 
	  });
}
