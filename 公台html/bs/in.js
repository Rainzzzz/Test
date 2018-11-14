//window.onload=function(){
//    document.onkeydown=function(){
//        var e=event||window.event;
//        alert(e.keyCode);
//    };
//};


window.onload=function(){
    document.onkeypress=function(){
        var e=event||window.event;
        alert(e.charCode);
    };
};