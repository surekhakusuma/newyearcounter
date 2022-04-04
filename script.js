const daysel=document.getElementById('days'); 
const hoursel=document.getElementById('hours'); 
const minsel=document.getElementById('minutes'); 
const secsel=document.getElementById('seconds'); 
 
 const newYear= '1 Jan 2023';

 function countdown()
 {
     const newYearsDate=new Date(newYear);
     const today=new Date();
     const seconds=(newYearsDate-today)/1000;
     const days=Math.floor(seconds/3600/24);
     const hours=Math.floor(seconds/3600)%24;
     const minutes=Math.floor(seconds/60)%60;
     const remseconds=Math.floor(seconds%60);
daysel.innerHTML =format(days);
hoursel.innerHTML =format(hours);
minsel.innerHTML =format(minutes);
secsel.innerHTML =format(remseconds);

 }
 countdown();
 setInterval(countdown,1000);

 function format(timey)
 {
     return  timey<10 ? `0${timey}` :timey;
 }
