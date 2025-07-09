javascript:(function(){
  const SCRIPT_ID = 'tw-barra-tribuna';
  if(document.getElementById(SCRIPT_ID)) {
    document.getElementById(SCRIPT_ID).remove();
    return;
  }

  // Temas
  const themes = {
    light: {
      bg: '#ffffff',
      fg: '#000000',
      border: '#333333',
      hover: '#eeeeee',
      panelBg: '#ffffff',
      panelBorder: '#cccccc'
    },
    dark: {
      bg: '#000000',
      fg: '#ffffff',
      border: '#000000',
      hover: '#222222',
      panelBg: '#000000',
      panelBorder: '#444444'
    }
  };

  let currentTheme = localStorage.getItem('twBarraTheme') || 'dark';
  const theme = themes[currentTheme];

  // Ícones padrão
  const icons = {
    padrao: "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png"
  };

 // Categorias e scripts
  const categorias = [
    {
      titulo: '🏰 Edifícios',
      icone: "https://icons.iconarchive.com/icons/icondigest/main-street/32/Cradle-of-learning-icon.png",
      scripts: [
        ["Bem Vindo", "https://icons.iconarchive.com/icons/be-os/be-box/32/Flash-Updater-icon.png", "{game}?screen=welcome&intro=1&oscreen=overview"],
        ["Edifícios", "https://icons.iconarchive.com/icons/icondigest/main-street/32/Cradle-of-learning-icon.png", "javascript:$.getScript('https://twscripts.dev/scripts/redirector.js');"],
        ["Recrutar Tropas", "https://icons.iconarchive.com/icons/calle/black-knight/32/Swords-icon.png", "{game}?screen=train"],
        ["Torre Simulator", "https://icons.iconarchive.com/icons/icondigest/main-street/32/In-days-of-yore-icon.png", "https://twscripts.dev/scripts/watchtowerEvolved.js"],
        ["Treinar Paladinos", "https://icons.iconarchive.com/icons/be-os/be-box/32/Flash-Updater-icon.png", "https://twdevtools.github.io/approved/scripts/training.js"]
      ]
    },
    {
  titulo: '⚙️ Configuração',
  icone: "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png",
  scripts: [
    ["Mostrar Pontos dos Edifícios", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "https://almis90.github.io/tw-scripts/building-points.js"],
    ["Notas Manager", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "javascript:$.getScript('https://twscripts.dev/scripts/ownNotesManager.js');"],
    ["Adicionar Amigos", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "https://twscripts.dev/scripts/friendRequest.js"],
    ["Renomeador de Aldeias", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/TsalkaponeVillageRenamer.js"],
    ["Contador de Tropas 1", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "javascript:$.getScript('https://twscripts.dev/scripts/countHomeTroops.js');"],
    ["Contador de Tropas 2", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "https://twscripts.dev/scripts/troopsCounterFixed.js"],
    ["Contador de Tropas 3", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "https://dl.dropboxusercontent.com/s/75jut7q397e03e5/troop_counter.js"],
    ["Contador de Grupos", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "https://dl.dropboxusercontent.com/s/ry6d9uu2m0mcxsb/group%20counts.js"],
    ["Histórico PPs", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/PPPurchaseHistoryScript.js"],
    ["Filtrar Coordenadas", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "javascript:(function(){fetch('https://raw.githubusercontent.com/glivio21/Filtrar-Coordenadas/main/coord-filter.js').then(r=>r.text()).then(t=>Function(t)()).catch(e=>alert('Erro ao carregar script: '+e.message));})();"],
    ["Filtrar Relatórios", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "javascript:$.getScript('https://twscripts.dev/scripts/advancedReportFilters.js');"],
    ["Filtrar Aldeias Front", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "javascript:$.getScript('https://twscripts.dev/scripts/findFrontlineVillages.js');"],
    ["Template de Tropas (GC)", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "javascript:$.getScript('https://twscripts.dev/scripts/troopTemplatesManager.js');"],
    ]
},    
    {
      titulo: '🎯 Ofensivos',
      icone: "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png",
      scripts: [
        ["Calculadora de Ataques nas Bárbaras", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "https://twscripts.dev/scripts/lastTimeAttacked.js"],
        ["Calculadora de MS (Confirmar Ataque)", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", function(){
          !function(){
            function e(){
              var e=$("#serverDate").text(),r=$("#serverTime").text(),t=e.match(/(..)\/(..)\/(....)/);
              return t[3]+"-"+t[2]+"-"+t[1]+" "+r
            }
            function r(e){
              var r=(new Date).getMilliseconds();
              return(1e3+r-e) - (1e3 * Math.floor((1e3+r-e)/1e3))
            }
            function t(e){
              var t=setInterval(function(){
                var t=r(e);
                $("#serverMs").text(":"+("00"+t).substr(-3))
              },80);
              return t
            }
            if(!$("#serverMs").length){
              $("#date_arrival").append('<span id="serverMs"></span>');
              $("#serverMs").css({color:"black","font-weight":"Bold"});
              var n,s=e(),i=s,a=setInterval(function(){
                s=e(),s!==i&&(n=(new Date).getMilliseconds(),clearInterval(a),t(n)),
                i=s
              },20)
            }
          }()
        }],
        ["Coletar de Coordenadas (Perfil Player)", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "https://tylercamp.me/tw/get-coords.js"],
        ["Todos os Ataques Enviados (Perfil Player)", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "https://twscripts.dev/scripts/getIncsForPlayer.js"],
        ["Planejador de Ataques Individual", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "https://twscripts.dev/scripts/singleVillagePlanner.js"],
        ["Planejador de Ataques em Massa", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "https://twscripts.dev/scripts/massCommandTimer.js"],
        ["Planejador de Ataques em Massa 2", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "https://twscripts.dev/scripts/massAttackPlanner.js"],
        ["Planejador de Ataques -", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "https://twdevtools.github.io/approved/scripts/planner.js"],
        ["Fake NT (Confirmar Ataque)", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "https://twscripts.dev/scripts/evolvedFakeTrain.js"],
        ["Exibir Comandos (Confirmar Ataque)", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "https://media.innogames.com/com_DS_NL/scripts/ConfirmEnhancer_206293.js"],
        ["Temporizador (Confirmar Ataque)", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "javascript:$.getScript('https://twscripts.dev/scripts/obfsucated/commandTimer.min.js');"],
        ["Quebrar Muralha", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "javascript:$.getScript('https://twscripts.dev/scripts/clearBarbarianWalls.js');"],
        ["Barbs Finder", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "javascript:$.getScript('https://twscripts.dev/scripts/barbsFinder.js');"],
        ["Bônus Finder", "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png", "javascript:$.getScript('https://twscripts.dev/scripts/bonusFinderEvolved.js');"],
      ]
    },
    {
      titulo: '🛑 Defensivos',
      icone: "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png",
      scripts: [
        ["Calculadora de Snip Individual", "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png", "https://twscripts.dev/scripts/singleVillageSnipe.js"],
        ["Calculadora de Snip Coletivo", "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png", "https://twscripts.dev/scripts/villagesInRange.js"],
        ["Remover Tropas de Apoio", "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png", "https://twscripts.dev/scripts/supportCounterEvolved.js"],
        ["Apoio em Massa", "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png", function(){
          window.heavyCav=4;
          $.getScript('https://dl.dropboxusercontent.com/s/idwa7mmpn6nxl3l/supportSender.js?dl=0');
        }],
        ["Simulador Defensor de Ataques", "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png", "https://twscripts.dev/scripts/defenseHealthCheck.js"],
        ["Ver Todos os Ataques", "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png", "https://dl.dropbox.com/s/flt8iokmg7pomow/IncomingOpSpotter.js"],
        ["Visão Geral de Ataques", "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png", function(){
          window.NOBLE_GAP = 100;
          window.FORMAT = '%unit% | %sent%';
          $.getScript('https://twscripts.dev/scripts/incomingsOverview.js');
        }],
        ["Devil DEF", "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png", "https://media.innogames.com/com_DS_NL/scripts/Devils-Def-Pack_206163.js"]
      ]
    },
    {
      titulo: '⛏️ Recursos',
      icone: "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png",
      scripts: [
        ["Coleta em Massa", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", function(){
          window.premiumBtnEnabled=false;$.getScript('https://shinko-to-kuma.com/scripts/massScavenge.js');
        }],
        ["Desbloqueador de Coleta", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", "https://twscripts.dev/scripts/massUnlockScav.js"],
        ["Organizador de Recursos", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", function(){
          $.ajaxSetup({dataType:'script'});$.getScript('https://www.minecraft.as/tw_scripts/outstanding_organizer.js');
        }],
        ["Calcular Recursos para Nobre", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", "javascript:$.getScript('https://twscripts.dev/scripts/nobleCalculator.js');"],
        ["Enviar Recursos", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", function(){
          $.getScript('https://shinko-to-kuma.com/scripts/res-senderV2.js');
        }],
        ["Balanceador de Recursos", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", function(){
          window.settings={highFarm:23000,lowPoints:2000,builtOutPercentage:0.25,needsMorePercentage:0.85};
          $.getScript("https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/WarehouseBalancer.js");
        }],
        ["Eficiência do Farm (Relatórios)", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", "https://twscripts.dev/scripts/farmingEfficiencyCalculator.js"],
        ["Mint Helper", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", "https://twscripts.dev/scripts/mintHelper.js"],
        ["Farm A/B/C", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", function(){
          window.cookieName='fakeypress';$.getScript('https://media.innogamescdn.com/com_DS_FR/Scripts/Pillage/fakeypress_lau.js');
        }],
        ["Farm LA (Assistente de Saque)", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", "https://scripts.ibragonza.nl/enhancer/enhancer.js"],
        ["Farm GOD", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", "https://higamy.github.io/TW/Scripts/Approved/FarmGodCopy.js"]
      ]
    },
    {
      titulo: '🤝 Tribo',
      icone: "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png",
      scripts: [
        ["Aristocracia", "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png", "https://shinko-to-kuma.com/scripts/overwatch.js"],
        ["Ver ataques na tribo", "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png", "https://dl.dropboxusercontent.com/s/ikunxd5d59059b4/scriptMostrarAtaquesACaminho.js"],
        ["Ataques (Tribo) - Membros", "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png", "https://dl.dropboxusercontent.com/s/oy16zihcrmtul4k/tribeinc.js"],
        ["Evolução (Tribo) - Membros", "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png", "https://shinko-to-kuma.com/scripts/tribeStats.js"],
        ["Calcular Tropas da Tribo", "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png", "https://shinko-to-kuma.com/scripts/tribeMembersTroopCalculator.js"],
        ["Análise de Tribos", "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png", "https://twscripts.dev/scripts/tribeStatsTool.js"],
        ["Convidar P/ Tribo em Massa", "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png", "https://twscripts.dev/scripts/inviteToTribe.js"],
        ["Gerar lista (Membros)", "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png", "https://media.innogamescdn.com/com_DS_PL/skrypty/lista_mail.js"]
      ]
    },
        {
      titulo: '📢 Serviços',
      icone: "https://i.ibb.co/2YmvSFmb/logo-ttw-2.png",
      scripts: [
    ["🎓 Acessar Curso", "https://icons.iconarchive.com/icons/bokehlicia/captiva/32/rocket-icon.png", "https://hotmart.com/pt-br/marketplace/produtos/curso-de-tribal-wars/U96903865S"],
    ["🧿 Obsidian Scripts", "https://www.obsidiantribal.com/images/IMG_3002.GIF", "https://www.obsidiantribal.com/"],
    ["📺 Tribuna", "https://icons.iconarchive.com/icons/danleech/simple/32/youtube-icon.png", "https://www.youtube.com/@tribunatribalwars"],
    ["🛠️ Serviços", "https://icons.iconarchive.com/icons/bokehlicia/captiva/32/steam-icon.png", "https://tribunatw.com/services"],
    ["💬 Discord", "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/32/discord-icon.png", "https://discord.gg/kwTUFCyFRA"],
    ["📱  WhatsApp", "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/32/whatsapp-icon.png", "https://chat.whatsapp.com/LJf55XqXUC6CgURf1dPBkM"]
      ]
    }
  ];

  // Cria o container do menu e estiliza
  const menu = document.createElement('div');
  menu.id = SCRIPT_ID;
  menu.style = `
    position: fixed; top: 100px; left: 100px;
    background: ${theme.bg}; color: ${theme.fg};
    border: 2px solid ${theme.border}; border-radius: 8px;
    padding: 10px; z-index: 99999;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    max-width: 520px; max-height: 85vh; overflow-y: auto;
    font-family: sans-serif;
    user-select: none;
  `;

  function limparMenu(){
    menu.innerHTML = '';
  }
function createThemeToggle() {
  const container = document.createElement('div');
  container.style = 'display: flex; align-items: center;';

  const label = document.createElement('label');
  label.style = `
  position: relative;
  display: inline-block;
  width: 42px;
  height: 22px;
`;

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = currentTheme === 'dark';
  input.style = 'opacity: 0; width: 0; height: 0;';

  const slider = document.createElement('span');
  slider.style = `
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: ${currentTheme === 'dark' ? '#00ff66' : '#555'};
    transition: .4s;
    border-radius: 34px;
    box-shadow: 0 0 6px ${currentTheme === 'dark' ? '#00ff66' : '#333'};
  `;

  const circle = document.createElement('span');
  circle.style = `
  position: absolute;
  height: 16px; width: 16px;
  left: ${currentTheme === 'dark' ? '24px' : '4px'};
  bottom: 3px;
  background-color: ${currentTheme === 'dark' ? '#000' : '#222'};
  transition: .4s;
  border-radius: 50%;
`;

  slider.appendChild(circle);
  label.appendChild(input);
  label.appendChild(slider);
  container.appendChild(label);

  input.onchange = () => {
    const newTheme = input.checked ? 'dark' : 'light';
    localStorage.setItem('twBarraTheme', newTheme);
    location.reload();
  };

  return container;
}

 function renderHeader(){
  const header = document.createElement('div');
  header.style = 'position: relative; display:flex; align-items:center; gap: 12px; margin-bottom:10px;';

  const titulo = document.createElement('h2');
  titulo.textContent = 'Tribuna Scripts - Versão 0.0.2';
  titulo.style = `margin:0; color:${theme.fg}; flex-shrink: 0;`;

  const toggle = createThemeToggle();

  const btnClose = document.createElement('span');
  btnClose.textContent = '✖';
  btnClose.style = `
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: ${theme.fg};
  padding: 4px 8px;
  border-radius: 4px;
  background: transparent;
  border: none;
  line-height: 1;
`;

  btnClose.title = 'Fechar menu';
  btnClose.onclick = () => menu.remove();

  header.appendChild(titulo);
  header.appendChild(toggle);
  header.appendChild(btnClose);
  menu.appendChild(header);
}
  
  // Estilos para rolagem das categorias
const style = document.createElement('style');
style.textContent = `
  .scripts-scroll {
    max-height: 300px; /* altura para cerca de 10 itens — ajuste conforme seu layout */
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
document.head.appendChild(style);
  
  // Renderiza categorias como ícones clicáveis
  function renderCategorias(){
    limparMenu();
    renderHeader();    

    const container = document.createElement('div');
    container.style = 'display:flex; flex-wrap: wrap; gap: 12px;';
    categorias.forEach(cat => {
      const box = document.createElement('div');
      box.style = `
        width: 80px; text-align: center; cursor: pointer;
        background: ${theme.panelBg}; border: 1px solid ${theme.panelBorder};
        border-radius: 6px; padding: 6px; user-select: none;
        display: flex; flex-direction: column; align-items: center;
      `;
      box.title = cat.titulo;
      box.onclick = () => renderScripts(cat);

      const img = document.createElement('img');
      img.src = cat.icone;
      img.style = 'width: 40px; height: 40px; margin-bottom: 6px;';
      img.alt = cat.titulo;

      const label = document.createElement('span');
      label.textContent = cat.titulo;
      label.style = `font-size: 12px; color: ${theme.fg};`;

      box.appendChild(img);
      box.appendChild(label);
      container.appendChild(box);
    });

    menu.appendChild(container);
  }

  // Renderiza scripts da categoria
  function renderScripts(cat){
    limparMenu();
    renderHeader();    

    const btnVoltar = document.createElement('button');
    btnVoltar.textContent = '← Voltar';
    btnVoltar.style = `
      margin-bottom: 12px; padding: 6px 10px; cursor: pointer;
      background: ${theme.panelBg}; border: 1px solid ${theme.panelBorder};
      color: ${theme.fg}; border-radius: 5px;
    `;
    btnVoltar.onclick = renderCategorias;
    menu.appendChild(btnVoltar);

    const titulo = document.createElement('h3');
    titulo.textContent = cat.titulo;
    titulo.style = `margin: 4px 0 12px 0; color: ${theme.fg};`;
    menu.appendChild(titulo);

    // Cria container com scroll para os scripts
const scrollHost = document.createElement('div');
scrollHost.classList.add('scripts-scroll');

// Adiciona cada script dentro do container
cat.scripts.forEach(script => {
  const linha = document.createElement('div');
  linha.style = `
    display: flex; align-items: center; padding: 6px; margin-bottom: 8px;
    cursor: pointer; border-radius: 5px;
    background: ${theme.panelBg}; border: 1px solid ${theme.panelBorder};
    user-select: none;
  `;
  linha.onmouseenter = () => linha.style.backgroundColor = theme.hover;
  linha.onmouseleave = () => linha.style.backgroundColor = theme.panelBg;
  linha.onclick = () => executarScript(script);

  const img = document.createElement('img');
  img.src = script[1] || icons.padrao;
  img.alt = script[0];
  img.style = 'width: 24px; height: 24px; margin-right: 10px;';
  linha.appendChild(img);

  const texto = document.createElement('span');
  texto.textContent = script[0];
  texto.style = `color: ${theme.fg}; font-size: 14px;`;
  linha.appendChild(texto);

  scrollHost.appendChild(linha);
});

// Finalmente, anexa o container com scroll ao menu
menu.appendChild(scrollHost);

  }

  // Executa o script
  function executarScript(script){
    try {
      if(typeof script[2] === 'function'){
        script[2]();
      } else if(typeof script[2] === 'string'){
        const url = script[2];
        if(url.startsWith('javascript:')){
          eval(url.slice(11));
        } else if(url.endsWith('.js')){
          $.getScript(url).fail(() => alert('Erro ao carregar o script!'));
        } else if(url.startsWith('http')){
          window.open(url, '_blank');
        } else if(url.includes('{game}')){
          let base = window.location.href.split('?')[0];
          window.location.href = url.replace('{game}', base);
        } else {
          alert('Formato de script inválido.');
        }
      }
    } catch(e){
      alert('Erro ao executar o script: ' + e.message);
    }
  }
 function tornarMenuArrastavel(el) {
  let isMouseDown = false;
  let offsetX = 0;
  let offsetY = 0;

  // Restaura a posição salva (se existir)
  const posSalva = localStorage.getItem('twBarraPos');
  if (posSalva) {
    try {
      const pos = JSON.parse(posSalva);
      if (pos.left && pos.top) {
        el.style.left = pos.left;
        el.style.top = pos.top;
      }
    } catch(e) {
      // Ignora erros e mantém posição padrão
    }
  }

  el.addEventListener('mousedown', function(e) {
    // Evita arrastar se clicou em botão, link ou input
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.tagName === 'INPUT') return;

    isMouseDown = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    e.preventDefault();
  });

  document.addEventListener('mouseup', function() {
    if (isMouseDown) {
      // Salva posição no localStorage ao soltar o mouse
      localStorage.setItem('twBarraPos', JSON.stringify({
        left: el.style.left,
        top: el.style.top
      }));
    }
    isMouseDown = false;
  });

  document.addEventListener('mousemove', function(e) {
    if (!isMouseDown) return;
    el.style.left = (e.clientX - offsetX) + 'px';
    el.style.top = (e.clientY - offsetY) + 'px';
  });
}

tornarMenuArrastavel(menu);  

document.body.appendChild(menu);  
  renderCategorias();
  })();
