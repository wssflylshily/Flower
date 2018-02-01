mui.post(http_host+'home/index',{
		station_id:2, token:123456
},function(data){
//		var tpl = document.getElementById('tpl').innerHTML;
//		var html = juicer(tpl, data);
	},'json'
);
function prolist(){
	mui.openWindow({
	    url: 'prolist.html', 
	  });
}
