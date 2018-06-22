console.log('app.js');
import '../css/common.css';
import Layer from '../template/layer/layer.js';
import Vue from 'vue';
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