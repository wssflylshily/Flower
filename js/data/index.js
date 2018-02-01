
function login(){
        if($('#phone').val()==''){
        	mui.toast('请输入您的手机号');
        	return false;
        }
        if($('#pwd').val()==''){
        	mui.toast('请输入您的登录密码');
            return false;
        }
        var phone = $('#phone').val();
        var pwd = $('#pwd').val();
        

        mui.post(http_host+"auth/login",{
        		phone:phone, pwd:pwd
        },function(data){
            if (data.code==1){
            	mui.toast('登录成功');
            	mui.openWindow({
				    url: 'home.html', 
				  });
            }else {
            	mui.toast(data.msg);
            }
        	},'json'
        );
    }

function reg(){
	mui.openWindow({
	    url: 'reg.html', 
	  });
}
