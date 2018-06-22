import '../css/common.css';//引入CSS样式
import Layer from '../template/layer/layer.js';//引入一个组件
import Vue from 'vue';//引入vuejs,vue安装参考官网

const  App=function () {

    var divObj=document.createElement("div");
    var layer1= new Layer();
    divObj.innerHTML=layer1.tpl;
    var first=document.body.firstChild;//得到页面的第一个元素
    document.body.insertBefore(divObj,first);//在得到的第一个元素之前插入

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })
}
new App();