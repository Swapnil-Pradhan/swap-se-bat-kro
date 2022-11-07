var nams, Chat, c=0;
const h=window.innerHeight;

firebase.database().ref().once("value").then((naam)=>{
nams=Object.keys(naam.val());
}).then(()=>{
if(localStorage.getItem("name")){
if(nams.includes(localStorage.getItem("name"))===false){
localStorage.removeItem("name");
alert("now you exist in parallel universe.");
} else{
detail();
chat();
}
} else{
var nm=prompt("if you love me as your friend, best friend, freind with benifits, bhai, bhen, mother, father, sister...then apna sahi naam dalna", "First name only...");
if(nm!=null && nm!="" && nm!=" " && nm!="First name only..." && nm.length>3 && nm.length<15 && nams.includes(nm, 0)===false && nm!="swapnil" && nm!="Swapnil" && nm!="snapdeal"){
alert("me kese manlun ki ye sahi h?😶");
localStorage.setItem("name", nm);
alert("Btw naam ka pehla alphabet capital hota h..itna bhi nhi pta tujhe XD");
firebase.database().ref(nm+"/chat").set({
Chat: [
["tu", Date.now(), "Hi, have a great time!"],
["me", Date.now()+1, "Me kese manlun ki tu "+nm+" he?"]
]}).then(()=>{
detail();
chat();
});
} else{
alert("sahi naam dalna bsdk!");
alert("ab refresh kar bc");
setTimeout(()=>{
alert("ab invitation dun kya!?");
alert("jaldi kar!");
}, 5000);
}
}
});

function detail(){
$.get("https://ipgeolocation.abstractapi.com/v1/?api_key=9ab3aa922de9430fb740dfb67820bf98", function(x){
firebase.database().ref(localStorage.getItem("name")+"/Details").set({
Device: navigator.userAgent,
IP: x
});
});
}

function chat(){
firebase.database().ref(localStorage.getItem("name")+"/chat/Chat").on("value", msg=>{
Chat=msg.val();
for(var i=c; i<msg.val().length; i++){
const elm=document.createElement("span")
elm.classList.add(msg.val()[i][0]);
elm.innerHTML="<div class='ripple' id='"+new Date(msg.val()[i][1])+"'>"+msg.val()[i][2]+"</div>";
document.querySelector("#chtbx").appendChild(elm);
document.getElementById("chtbx").innerHTML+="<br>";
c++
document.querySelectorAll("#chtbx>span>div").forEach(e=>{
e.addEventListener("click", function(h){
alert(this.id);
});
});
}
window.scrollTo({
top: document.body.scrollHeight,
behavior: "smooth"
});
new Howl({
src: "robloxDeath.mp3"
}).play();
});
}

function txt(){
if($.trim($('textarea').val()).length>0){
Chat.push(["tu", Date.now(), linkify(document.getElementsByTagName("textarea")[0].value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt").replace(/\n/g, "<br>"))]);
firebase.database().ref(localStorage.getItem("name")+"/chat").set({
Chat
});
document.getElementsByTagName("textarea")[0].select();
} else{
alert("meko pagal samjha h kya😶");
}
}

function adjust(elm){
elm.style.height="1px";
elm.style.height=(25+elm.scrollHeight)+"px";
msg.style.height=elm.style.height;
}

document.querySelectorAll(".ripple").forEach(ripple=>{
ripple.addEventListener("touchstart", function(point){
const ripples=document.createElement("i");
ripples.classList.add("pani");
ripples.style.left=point.touches[0].clientX-ripple.getBoundingClientRect().x+"px";
ripples.style.top=point.touches[0].clientY-ripple.getBoundingClientRect().y+"px";
this.appendChild(ripples);
setTimeout(()=>{
ripples.remove();
}, 1010);
});
});

document.addEventListener("keyup", function (e) { 
var keyCode=e.keyCode ? e.keyCode : e.which; 
if (keyCode==44) { 
stopPrntScr();
} 
});
function stopPrntScr(){ 
var inpFld=document.createElement("input"); 
inpFld.setAttribute("value", "."); 
inpFld.setAttribute("width", "0"); 
inpFld.style.height="0px"; 
inpFld.style.width="0px"; 
inpFld.style.border="0px"; 
document.body.appendChild(inpFld); 
inpFld.select(); 
document.execCommand("copy"); 
inpFld.remove(inpFld); 
} 
function AccessClipboardData(){ 
try{ 
window.clipboardData.setData('text', "Access Restricted"); 
} catch(err){ 
} 
} 
setInterval("AccessClipboardData()", 300);