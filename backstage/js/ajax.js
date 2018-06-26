function ajaxMethod(str,o) {
    var oLink = urlLink(str);
    var result = {};
    console.log("Ajax请求：我准备好了-^_^-");
    $.ajax({
        type: oLink.method,
        url: '${url}' + oLink.url,
        data: o,
        dataType:'json',
        async:false,
        cache:false,
        success:function (data) {
            result = data;
            //console.log(result.code);
            
             if(data.code == '1012' ||data.code == 1012 ){
            
                 window.location.href = 'index.html';
            }
            if(data.status == '0'){
           
                layerMes(data.msg);
            }
            
            
        },
        error:function (xhr,textStatus) {
            if(xhr == 504){
                layerMes('请求超时，请稍后再试。');
            }else{
                layerMes('连接出错，请稍后再试。');
            }
            result.status = 0;
        }
    });
    return result;
}


var urlLink = function (str)
{
    var url = {
        // 公开接口（无需验证）=================================================
        getSysInfo:{//系统信息
            method:'post',
            url:'/index.php/upload'
        },

        // 基础接口=============================================================
        login:{//后台登陆
            method:'post',
            url:'/index.php/admin/base/login'
        },
        logout:{//退出
            method:'post',
            url:'/index.php/admin/base/logout'
        },

        // 权限接口=============================================================
        picUpload:{//图片上传
            method:'post',
            url:'/index.php/upload'
        }
        picDoc:{//图片上传
            method:'post',
            url:'/index.php/upload'
        }
    }
    return url[str];
}