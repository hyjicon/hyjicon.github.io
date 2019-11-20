//加载钉钉
var ddCode = "123";

dd.ready(function () {
    // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
    dd.runtime.permission.requestAuthCode({
        corpId: "dingc2f3af5167e8a18a35c2f4657eb6378f",
        onSuccess: function (result) {
            ddCode = result.code;
            userInfo();
        },
        onFail: function (err) {
            alert("dd 出错了" + JSON.stringify(err));
        }
    });
    //出错
    dd.error(function (error) {
        alert('dd error: ' + JSON.stringify(error));
    });
});