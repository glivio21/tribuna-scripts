(function(){

const SCRIPT_ID='tw-barra-2026';

if(document.getElementById(SCRIPT_ID)){
document.getElementById(SCRIPT_ID).remove();
return;
}

/* ---------- TEMAS ---------- */

const themes={
light:{bg:'#ffffff',fg:'#000',border:'#333',hover:'#eee',panelBg:'#fff',panelBorder:'#ccc'},
dark:{bg:'#000',fg:'#fff',border:'#000',hover:'#222',panelBg:'#000',panelBorder:'#444'}
};

let currentTheme=localStorage.getItem('twBarraTheme')||'dark';
const theme=themes[currentTheme];

/* ---------- ICONE PADRAO ---------- */

const icons={
padrao:"https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png"
};

/* ---------- CATEGORIAS ---------- */

const categorias=[

/* EDIFICIOS */

{
titulo:'🏰 Edifícios',
icone:"https://icons.iconarchive.com/icons/icondigest/main-street/32/Cradle-of-learning-icon.png",
scripts:[
["Bem Vindo","https://icons.iconarchive.com/icons/be-os/be-box/32/Flash-Updater-icon.png","{game}?screen=welcome&intro=1&oscreen=overview"],
["Edifícios","https://icons.iconarchive.com/icons/icondigest/main-street/32/Cradle-of-learning-icon.png","javascript:$.getScript('https://twscripts.dev/scripts/redirector.js');"],
["Recrutar Tropas","https://icons.iconarchive.com/icons/calle/black-knight/32/Swords-icon.png","{game}?screen=train"],
["Torre Simulator","https://icons.iconarchive.com/icons/icondigest/main-street/32/In-days-of-yore-icon.png","https://twscripts.dev/scripts/watchtowerEvolved.js"],
["Treinar Paladinos","https://icons.iconarchive.com/icons/be-os/be-box/32/Flash-Updater-icon.png","https://twdevtools.github.io/approved/scripts/training.js"]
]
},

/* CONFIG */

{
titulo:'⚙️ Configuração',
icone:"https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png",
scripts:[
["Mostrar Pontos dos Edifícios",icons.padrao,"https://almis90.github.io/tw-scripts/building-points.js"],
["Notas Manager",icons.padrao,"javascript:$.getScript('https://twscripts.dev/scripts/ownNotesManager.js');"],
["ADD/DEL Grupos",icons.padrao,"javascript:$.getScript('https://toxicdonut.dev:8080/js/Toxic_Donut_s_Group_Placer.js');"],
["Adicionar Amigos",icons.padrao,"https://twscripts.dev/scripts/friendRequest.js"],
["Renomeador de Aldeias",icons.padrao,"https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/TsalkaponeVillageRenamer.js"]
]
},

/* OFENSIVOS */

{
titulo:'🎯 Ofensivos',
icone:"https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png",
scripts:[
["Planejador Individual",icons.padrao,"https://twscripts.dev/scripts/singleVillagePlanner.js"],
["Planejador Massa",icons.padrao,"https://twscripts.dev/scripts/massCommandTimer.js"],
["Fake Train",icons.padrao,"https://twscripts.dev/scripts/evolvedFakeTrain.js"],
["Timer Ataque",icons.padrao,"javascript:$.getScript('https://twscripts.dev/scripts/obfsucated/commandTimer.min.js');"],
["Bônus Finder",icons.padrao,"javascript:$.getScript('https://twscripts.dev/scripts/bonusFinderEvolved.js');"]
]
},

/* DEF */

{
titulo:'🛑 Defensivos',
icone:"https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png",
scripts:[
["Snip Individual",icons.padrao,"https://twscripts.dev/scripts/singleVillageSnipe.js"],
["Snip Coletivo",icons.padrao,"https://twscripts.dev/scripts/villagesInRange.js"],
["Remover Apoios",icons.padrao,"https://twscripts.dev/scripts/supportCounterEvolved.js"],
["Simulador Defesa",icons.padrao,"https://twscripts.dev/scripts/defenseHealthCheck.js"],
["Visão Geral Ataques",icons.padrao,function(){
window.NOBLE_GAP=100;
window.FORMAT='%unit% | %sent%';
$.getScript('https://twscripts.dev/scripts/incomingsOverview.js');
}]
]
},

/* RECURSOS */

{
titulo:'⛏️ Recursos',
icone:"https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png",
scripts:[
["Coleta em Massa",icons.padrao,function(){
window.premiumBtnEnabled=false;
$.getScript('https://shinko-to-kuma.com/scripts/massScavenge.js');
}],
["Desbloquear Coleta",icons.padrao,"https://twscripts.dev/scripts/massUnlockScav.js"],
["Organizador Recursos",icons.padrao,function(){
$.ajaxSetup({dataType:'script'});
$.getScript('https://www.minecraft.as/tw_scripts/outstanding_organizer.js');
}],
["Mint Helper",icons.padrao,"https://twscripts.dev/scripts/mintHelper.js"]
]
},

/* TRIBO */

{
titulo:'🤝 Tribo',
icone:"https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png",
scripts:[
["Análise Tribos",icons.padrao,"https://twscripts.dev/scripts/tribeStatsTool.js"],
["Convidar em Massa",icons.padrao,"https://twscripts.dev/scripts/inviteToTribe.js"]
]
},

/* SERVICOS */

{
titulo:'📢 Serviços',
icone:"https://i.ibb.co/2YmvSFmb/logo-ttw-2.png",
scripts:[
["📺 Tribuna","https://icons.iconarchive.com/icons/danleech/simple/32/youtube-icon.png","https://www.youtube.com/@tribunatribalwars"],
["🎓 Curso","https://icons.iconarchive.com/icons/bokehlicia/captiva/32/rocket-icon.png","https://hotmart.com/pt-br/marketplace/produtos/curso-de-tribal-wars/U96903865S"],
["🧿 Obsidian","https://www.obsidiantribal.com/images/IMG_3002.GIF","https://www.obsidiantribal.com/"],
["🛠️ Serviços","https://icons.iconarchive.com/icons/bokehlicia/captiva/32/steam-icon.png","https://tribunatw.com/services"],
["💬 Discord","https://icons.iconarchive.com/icons/papirus-team/papirus-apps/32/discord-icon.png","https://discord.gg/kwTUFCyFRA"],
["📱 WhatsApp","https://icons.iconarchive.com/icons/papirus-team/papirus-apps/32/whatsapp-icon.png","https://chat.whatsapp.com/LJf55XqXUC6CgURf1dPBkM"]
]
}

];

/* ---------- MENU ---------- */

const menu=document.createElement('div');
menu.id=SCRIPT_ID;

menu.style=`
position:fixed;
top:100px;
left:100px;
background:${theme.bg};
color:${theme.fg};
border:2px solid ${theme.border};
border-radius:8px;
padding:10px;
z-index:99999;
max-width:520px;
max-height:85vh;
overflow-y:auto;
font-family:sans-serif;
`;

/* ---------- EXECUTAR SCRIPT ---------- */

function executarScript(script){

try{

const acao=script[2];

if(typeof acao==="function"){
acao();
return;
}

if(acao.startsWith("javascript:")){
Function(acao.replace("javascript:",""))();
return;
}

if(/\.js(\?|$)/.test(acao)){
let s=document.createElement("script");
s.src=acao;
document.body.appendChild(s);
return;
}

if(acao.includes("{game}")){
location.href=acao.replace("{game}","game.php");
return;
}

if(acao.startsWith("http")){
window.open(acao,"_blank");
}

}catch(e){
alert("Erro ao executar script: "+e.message);
}

}

/* ---------- RENDER ---------- */

function renderCategorias(){

menu.innerHTML="<h2>Tribuna Scripts</h2>";

categorias.forEach(cat=>{

let btn=document.createElement("div");

btn.style="cursor:pointer;margin:6px 0";

btn.innerHTML=`<b>${cat.titulo}</b>`;

btn.onclick=()=>renderScripts(cat);

menu.appendChild(btn);

});

}

function renderScripts(cat){

menu.innerHTML=`<button id="back">← Voltar</button><h3>${cat.titulo}</h3>`;

document.getElementById("back").onclick=renderCategorias;

cat.scripts.forEach(s=>{

let row=document.createElement("div");

row.style="cursor:pointer;margin:5px 0";

row.textContent=s[0];

row.onclick=()=>executarScript(s);

menu.appendChild(row);

});

}

/* ---------- START ---------- */

document.body.appendChild(menu);

renderCategorias();

})();
