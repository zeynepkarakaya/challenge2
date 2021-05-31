function updateTime(){

  var marsDay = new Date();
  document.getElementById('date').innerHTML = marsDay.getDate() + ' / ' + (marsDay.getMonth()+1) + ' / ' + (marsDay.getFullYear()+11);
  document.getElementById('time').innerHTML = addLeadingZero(marsDay.getHours()) + ' : ' + addLeadingZero(marsDay.getMinutes()) + ' : ' + addLeadingZero(marsDay.getSeconds());
  function addLeadingZero(number){
    if (number < 10) {
      number = '0'+ number;
    }
    return number;
  }
};

setInterval (updateTime , 1000);

var bg = ['bgchange' , 'bgchange1' , 'bgchange2' , 'bgchange3' , 'bgchange4' , 'bgchange5' , 'bgchange6'];
document.getElementById('body').onclick = function(){
  document.getElementById('body').className = bg[Math.floor(Math.random()*bg.length)];
};




