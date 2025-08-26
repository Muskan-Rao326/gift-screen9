// // --- Simple carousel drag scroll ---
// const top3 = document.getElementById('top3');
// let isDown=false, startX=0, scrollLeft=0;
// top3.addEventListener('pointerdown',e=>{
//   isDown=true;startX=e.pageX;scrollLeft=top3.scrollLeft;
//   top3.style.cursor='grabbing';
// });
// window.addEventListener('pointerup',()=>{isDown=false;top3.style.cursor='grab'});
// window.addEventListener('pointermove',e=>{
//   if(!isDown) return;
//   const dx=e.pageX-startX;
//   top3.scrollLeft=scrollLeft-dx;
// });
// top3.style.cursor='grab';

// // --- Week Switch ---
// const switchWrap=document.getElementById('weekSwitch');
// switchWrap.addEventListener('click',e=>{
//   if(e.target.tagName!=='BUTTON')return;
//   [...switchWrap.children].forEach(b=>b.classList.remove('active'));
//   e.target.classList.add('active');
// });

// // --- Countdown to next Monday 00:00 ---
// function nextMondayMidnight(){
//   const now=new Date();
//   const result=new Date(now);
//   const day=now.getDay();
//   const daysAhead=(8-day)%7||7;
//   result.setDate(now.getDate()+daysAhead);
//   result.setHours(0,0,0,0);
//   return result;
// }
// const pills={
//   days: document.querySelector('.pill[data-k="days"]'),
//   hours: document.querySelector('.pill[data-k="hours"]'),
//   minutes: document.querySelector('.pill[data-k="minutes"]'),
//   seconds: document.querySelector('.pill[data-k="seconds"]'),
// };
// function tick(){
//   const target=nextMondayMidnight();
//   const now=new Date();
//   let diff=Math.max(0,target-now);
//   const d=Math.floor(diff/(1000*60*60*24));diff-=d*86400000;
//   const h=Math.floor(diff/(1000*60*60));diff-=h*3600000;
//   const m=Math.floor(diff/(1000*60));diff-=m*60000;
//   const s=Math.floor(diff/1000);
//   pills.days.textContent=d;
//   pills.hours.textContent=h;
//   pills.minutes.textContent=m;
//   pills.seconds.textContent=s;
// }
// tick();
// setInterval(tick,1000);



const toggle = document.getElementById('toggle');
const indicator = document.getElementById('indicator');
const options = toggle.querySelectorAll('.toggle-option');

options.forEach(option => {
  option.addEventListener('click', () => {
    const index = parseInt(option.dataset.index);
    indicator.style.left = index === 0 ? '5px' : '115px'; // adjust based on slider width

    options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
  });
});




 const countdownDate = new Date().getTime() + (5*24*60*60*1000); // 5 days from now

    const timer = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerHTML = days + "d";
      document.getElementById("hours").innerHTML = hours + "h";
      document.getElementById("minutes").innerHTML = minutes + "m";
      document.getElementById("seconds").innerHTML = seconds + "s";

      if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = "EXPIRED";
      }
    }, 1000);