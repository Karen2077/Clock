let clock = document.querySelector('.clock');
let color = document.querySelector('.color');

function showclock(){
    let time = new Date();
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if(h.length < 2){
        h = '0' + h;
    }
    if(m.length < 2){
        m = '0' + m;
    }
    if(s.length < 2){
        s = '0' + s;
    }
let clockString = h + ':' + m + ':' + s;
let colorString = '#' + h + m + s;

clock.textContent = clockString;
color.textContent = colorString;

document.body.style.background = colorString;
}


showclock();
setInterval(showclock,1000)












