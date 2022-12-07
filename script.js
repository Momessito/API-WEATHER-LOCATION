const ajax = new XMLHttpRequest();
ajax.open('GET','https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid='+'dd88cb73827ad4b36a3d1a99fc7777d5')
ajax.send();

ajax.onload = function(){

    let obj = JSON.parse(this.responseText);
    document.getElementById('oi').innerHTML ="OLA" + obj.current
}





function change(id){

console.log(id)
    
var classe = id

document.getElementById(classe+'Um').style.visibility = 'visible'
document.getElementById('start').style.display = 'none'

switch (classe) {
    case 'Rio':
        document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/125819.jpg)'
        break;
    case 'Tokyo':
        document.body.style.backgroundImage = 'url(https://images4.alphacoders.com/562/thumb-1920-562920.jpg)'
        break;
    case 'Xangai':
        document.body.style.backgroundImage = 'url(https://images8.alphacoders.com/435/thumb-1920-435639.jpg)'
        break;
    case 'NewYork':
        document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/123346.jpg)'
        break;

    default:
        break;
}
}


function back(elem){

    console.log(elem)
    document.getElementById(elem).style.visibility = 'hidden'
    document.getElementById('start').style.display = 'flex'
    document.body.style.backgroundImage = 'url(https://www.oenz.co.nz/wp-content/uploads/2022/03/20210308_121249.jpg)'
}