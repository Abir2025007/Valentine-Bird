const q=[
 "Samia 💖 tumi amar shobcheye shundor golpo",
 "17 July 2025 – amader shuru",
 "1 August – Anniversary 💍"
];
let i=0;
setInterval(()=>{quote.innerText=q[i++%q.length]},3000);

const h=new Date().getHours();
greet.innerText = h<12?"Good Morning Jan 💖":h<17?"Good Afternoon Jan 💖":"Good Evening Jan 💖";

function toggleMusic(){
 const a=document.getElementById('bgm');
 a.paused?a.play():a.pause();
}
function sayLove(){
 const u=new SpeechSynthesisUtterance("I love you Jan");
 u.lang='en-US'; speechSynthesis.speak(u);
}
