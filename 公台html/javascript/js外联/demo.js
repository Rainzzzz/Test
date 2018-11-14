
/*
 var box;
 alert(typeof box);//box是Undefinded类型，值是undefine,类型返回的字符串是undefine

 var box=false;
 alert(typeof box);//box是Boolean类型，值是false，类型返回的字符串是boolean

 var box="佳佳";
 alert(typeof box);//box是String类型，值是"佳佳"，类型返回的字符串是string

 var box=56;
 alert(typeof box);//box是Number类型，值是56，类型返回的字符串是number

 //空的对象表示这个对象创建了，里面没东西
 //空对象表示没有创建，就是一个null
 var box=null;
 alert(typeof box);//box是Null类型，值是null，类型返回的字符串是object



 */


//空的对象表示这个对象创建了，里面没东西
//空对象表示没有创建，就是一个null
/*
function box(){};
alert(typeof box);//box是Function函数，值是function box(){}，类型返回的字符串是function
*/


//typeof可以操作变量，也可以操作字面量，以下是直接使用字面量
/*
alert(typeof box)*/

/*
var box;
alert(typeof box);
alert(typeof age);//以后必须声明一个变量就初始化以避免这种问题
*/



/*var box={};
if(box!=null){//不等于null说明不是空对象
 }
alert("对象已经创建成功")*/


/*
var box="lee";
if(box){
 alert("真");
}
else{
 alert("假");
}*/


/*
alert(Number.MIN_VALUE);
alert(Number.MAX_VALUE);

*/


/*
var box=5;
switch(box){
 case 1:
        alert("one");
        break;
 case 2:
        alert("two");
        break;
 default:
        alert("cuole")
}*/

/*

function box(){
    alert("gohome");
};
box();//必须调用才能执行  */


/*
function box(name,age){
    alert("你的名字是："+name+",年龄为："+age);
}
box("jiajia",25);*/


/*

function box(){
    return"home";
}
alert(box());

*/



/*
function box(name,age){
    return("名字:"+name+"，年龄:"+age);
}
alert(box("jhiajia",25));*/


/*
function box(num){
    if(num<5) return num;
    return 100;
}
alert(box(4));*/
/*

function box(){
    return arguments[0]+"|"+arguments[1]+"|"+arguments[2]+"|";
}
alert(box("jiajhi",28,"计算机"));
*/


/*
 function box(){
 var sum=0;
 for(var i=0;i<arguments.length;i++){
 sum=sum+arguments[i];
 }
 return sum;
 }
 var a= 3,b=4;
 alert(box(a,b));*/



/*
var box=Object();
box.age=25;
box.name="jiajia";
alert(box.age);
alert(box["name"]);
*/


/*
var box={
    name:"jiajia",
    age:25,
run:function(){
    return "124";
}
};
alert(box.name);
delete box.name;
alert(box.name);*/

/*

function box(obj){
    if(obj.name!=undefined)alert(obj.name);
    if(obj.love!=undefined)alert(obj.love);
    if(obj.age!=undefined)alert(obj.age);
}
var obj={
    name:"佳佳",
    age:"25",
    height:1454
};
box(obj);                           //调用box（）函数，并引入对象obj*/


/*
var box=new Date("4/12/2007");
alert(box);
*/


/*
var pattern=/g..gle/;       //  .   是模糊搜索忽略其中某个字符，可以代替出换行符外的任何字符
var str="g5tgle";
alert(pattern.test(str));*/



/*
var pattern=/go*gle/;       //  o*   表示0个，1个，或者多个o
var str="gooooogle";
alert(pattern.test(str));*/



/*
var pattern=/go{2,4}gle/;       //  o{2,4}   表示匹配哦2至4次，包含2和4
var str="goooogle";
alert(pattern.test(str));*/

/*
var pattern=/[a-z]oogle/;       //  [a-z]   表示匹配a至z的小写字母，包含a和z
var str="google";
alert(pattern.test(str));*/


/*var pattern=/[A-Z]oogle/;       //  [a-z]   表示匹配A至Z的小写字母，包含A和Z  阿拉伯数字同理
var str="Google";
alert(pattern.test(str));*/


/*
var pattern=/[a-zA-Z0-9]oogle/;       //  [a-zA-Z0-9]   表示匹配大小写的a-z  A-Z 0-9
var str="Google";
alert(pattern.test(str));*/



/*var pattern=/[^0-9]oogle/;       //  [^0-9]   表示非0-9的任意字符
var str="Google";
alert(pattern.test(str));*/


/*
var pattern=/^google$/;       //  ^google$   表示字符串的开头至结尾全匹配
var str="google";
alert(pattern.test(str));
*/

/*var pattern=/google|baidu|bing/;       //  google|baidu|bing   表示匹配或者选择模式
var str="google";
alert(pattern.test(str));*/

/*
var pattern =/8.*8/;                       //  .*   匹配任意字符
var str="This is a 8jajai8";
alert(pattern.test(str));
*/

/*var pattern =/8(.*)8/;                       // .*   获取88间的任意字符，加（）是为了将匹配到的内容列入分组
var str="This is a 8你号8";
pattern.test(str);
alert(RegExp.$1);                             //RegExp.$1  表示获取模式中第一个分组对应的匹配字符串
document.write(str.replace(pattern,"<strong>123</strong>"));
document.write(str.replace(pattern,"<strong>$1</strong>"));    ///  $1表示分组获取字符串匹配到的内容*/



/*
var pattern=/([1-9][0-9]{5})/;
var str="This is a  224000 ?";
alert(pattern.test(str));
document.write(RegExp.$1);
*/


/*
var pattern=/^([a-z]+)\s([0-9]{4})$/;
var str="google 1201";
alert(pattern.exec(str));
alert(a[0]);
alert(a[1]);
alert(a[2]);*/



/*var pattern=/^[\w]+\.zip|7z|rar/;    // \w   相当于[a-zA-Z0-9_]      加上^来限定首字符
var str="213.zip";
alert(pattern.test(str));*/



/*
 var pattern=/\s/g;   //    \s   指空格
 var str="111 111 222 333";
 alert(str.replace(pattern,""));
 */

/*
var pattern=/^([\w\.\_]+)@([\w\_]+)\.([a-zA-Z]{2,4})$/;     //邮箱地址验证是否合法
var str="yc60.com@gmail.com";
alert(pattern.test(str));*/



/*
function box(num){
    if(num<=1){
        return 1;
    }else{
        return num*box(num-1);
    }
}
alert(box(3));*/



/*var color="Red";                   //全局变量



var box={
    color:"Blue"                     //局部变量
};
function sayColor(){
    alert(this.color);
}
sayColor();*/



/*var color="Red";                   //全局变量

var box={
    color:"Blue"                     //局部变量
};
function sayColor(){
    alert(this.color);
}

//用call是为了实现对象冒充，
sayColor.call(window);     //冒充window
sayColor.call(box);       //冒充box*/




/*
function box(num1,num2){
    return num1+num2;
}
alert(box(1,2));
*/ 


/*
var box=1000.578;
alert(box.toFixed(2));                     //四舍五入，保留两位小数
*/

/*
var box="Mr.zheng";
alert(box.slice(4,6));          //显示第四个和第六个之间的字符*/


/*
var box="Mr.zheng";
alert(box.substring(4,6));        //同上
alert(box.toUpperCase());         //全部转变为大写
alert(box.toLowerCase());           //全部转变为小写

*/

/*
var box= new Object();
box.name="lee";
box.age=100;
box.run=function(){
     return this.name+this.age+ "运行中"      //this表示当前作用域下对象相当于box
};
var box2=new Object();
box2.name="jia";
box2.age=200;
box2.run=function(){
    return this.name+this.age+"运行中"
};

alert(box.run());
alert(box2.run());
*/

/*function Box(name,age){
this.name=name;
this.age=age;
this.run=function(){
    return this.name + this.age+"运行中。。。";
};
};
var box1=new Box("Lee",100);
var box2=new Box("jack",200);
alert(box1.run());
alert(box2.run());*/

/*

function Box(name,age){
    this.name=name;
    this.age=age;
    this.family=["gg","jiejei","meimei"];

}
Box.prototype={
    constructor:Box,
    run:function(){
        return this.name+this.age+"yunxinzhong"
    }
};

var box1=new Box("lee",100);
/!*alert(box1.run());*!/
alert(box1.family);
box1.family.push("didi");
alert(box1.family);
var box2=new Box("jack",200);
/!*alert(box2.run());*!/

*/

/*function obj(o){
    function F(){
    }
    F.prototype=o;
    return new F();
}*/

/*
function box(){
    return function(){
        return "lee";
    }
}
alert(box()());*/

/*
function box(){
    var age=100;
    return function(){
        age++;
        return age;
    };
}

var b=box();
alert(b());
alert(b());
alert(b());

*/


/*
alert(box()());
alert(box()());
*/

/*
function box(){
    var arr=[];
for(var i=0;i<=5;i++){
    arr[i]=function(){
        return i;
    }
};
    return arr;
}
/!*alert(box());*!/
/!*var b=box();
for (var i=0;i<=5;i++){
    alert(b[i]());
}*!/
function box(){
    var arr=[];
    for(var i=0;i<=5;i++){
        a[i]=i;
    }
return arr;
}
var b=box();
for (var i=0;i<=5;i++){
alert(b[i]);
}+
*/


/*var num=0;
var max=5;
setInterval(
    function(){
        num++;
        document.getElementByid("a")
        if(num==max){
            alert("5miao");
        }
    },1000
);*/

/*
var box=["li","58","hefei"];
box.push("jisuanji","jiangsu");
alert(box);
alert(box.push("jisuanji","jiangsu"));
alert(box.pop());   //移除数组最后的元素，并且返回移除的元素
alert(box);
*/


/*var box=["li","58","hefei"];
box.push("jisuanji","jiangsu");
alert(box);
alert(box.shift());    //移除数组第一个元素，并且返回移除的元素
alert(box);
alert(box.unshift("jiajia"));//在数组首部添加一个元素，并返回最新的长度
alert(box);*/


/*
var box=[1,2,1,4,5];
box.reverse();
alert(box);*/



var box=[1,2,6,4,5,8,10,124];
box.sort();
alert(box);

function compare(value1,value2){
    if(value1<value2){
        return -1;
    }else if(value1>value2){
        return 1;
    }else{
        return 0;
    }
}                      //比较大小

alert("从小到大排序："+box.sort(compare));