
const quotes=[
"Samia ❤️ tumi amar protita diner shuru.",
"17 July 2025 — amader golper prothom din.",
"1 August 💍 — amader anniversary.",
"Boss 💼 & Jan 💖 — always together."
];
let qi=0;
setInterval(()=>{
document.getElementById('quote').innerText=quotes[qi++%quotes.length];
},4000);

function greet(){
const h=new Date().getHours();
let t='Good Evening';
if(h<12)t='Good Morning'; else if(h<17)t='Good Afternoon';
document.getElementById('greet').innerText=t+', Jan 💖';
}
greet();

const themes=[['#ff9a9e','#fad0c4'],['#0f2027','#203a43'],['#ff512f','#dd2476']];
let ti=0;
function theme(){
ti=(ti+1)%themes.length;
document.documentElement.style.setProperty('--a',themes[ti][0]);
document.documentElement.style.setProperty('--b',themes[ti][1]);
}

function toggleMusic(){
const a=document.getElementById('bgm');
a.paused?a.play():a.pause();
}

function notifyLove(){
if(Notification.permission!=='granted')Notification.requestPermission();
else new Notification('💖 Love',{body:'Boss says: I love you Jan ❤️'});
}
