function updateTime(){

  var marsDay = new Date();
  document.getElementById('date').innerHTML = marsDay.getDate() + ' / ' + (marsDay.getMonth()+1) + ' / ' + (marsDay.getFullYear()+11);
  document.getElementById('time').innerHTML = daynight(addLeadingZero(marsDay.getHours())) + ' : ' + addLeadingZero(marsDay.getMinutes()) + ' : ' + addLeadingZero(marsDay.getSeconds());
  function addLeadingZero(number){
    if (number < 10) {
      number = '0'+ number;
    }
    return number;
  }
};

setInterval (updateTime , 1000);

function daynight(number){
    if (number < 6 || number > 20) {
      document.getElementById('message').innerHTML = 'Time to sleep!';
    } else if (5 < number < 21) {
      document.getElementById('message').innerHTML = 'Have a nice day!';
    }
    return number;
  }

var bg = ['bgchange' , 'bgchange1' , 'bgchange2' , 'bgchange3' , 'bgchange4' , 'bgchange5' , 'bgchange6' , 'bgchange7' , 'bgchange8' , 'bgchange9' , 'bgchange10'];
document.getElementById('body').onclick = function(){
  document.getElementById('body').className = bg[Math.floor(Math.random()*bg.length)];
};

