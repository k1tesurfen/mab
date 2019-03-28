var d,h,m,s,animate,weekday,day,month,year;
var days = ['sun','mon','tue','wed','thu','fri','sat'];


function init(){
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    day=d.getDate();
    weekday=days[d.getDay()];
    month=d.getMonth()+1;
    year=d.getFullYear().toString().substr(-2);
    clock();
};

function clock(){
    s++;
    if(s==60){
        s=0;
        m++;
        if(m==60){
            m=0;
            h++;
            if(h==24){
                h=0;
                day++;
            }
        }
    }
    $('min', m);
    $('hr', h);
    $('weekday', weekday);
    $('day', day);
    $('month', month);
    document.getElementById('year').innerHTML = year;

    animate=setTimeout(clock,1000);
};

function $(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};

window.onload=init;
