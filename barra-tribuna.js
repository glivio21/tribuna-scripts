javascript:(function(){
  const id = 'tw-scripts-unified-menu';
  if (document.getElementById(id)) return document.getElementById(id).remove();

  // ====== Tema ======
  let currentTheme = localStorage.getItem('twScriptsTheme') || 'light';
  const themes = {
    light: { bg:'#ffffff', fg:'#000000', border:'#333333', hover:'#eeeeee', panelBg:'#ffffff', panelBorder:'#cccccc' },
    dark:  { bg:'#000000', fg:'#ffffff', border:'#000000', hover:'#222222', panelBg:'#000000', panelBorder:'#444444' }
  };
  const theme = themes[currentTheme];

  // ====== Cria menu ======
  const menu = document.createElement('div');
  menu.id = id;
  applyMenuStyle();
  function applyMenuStyle(){
    menu.style = `
      position: fixed; top: 100px; left: 100px;
      background: ${theme.bg}; color: ${theme.fg};
      border: 2px solid ${theme.border}; border-radius: 8px;
      padding: 10px; z-index: 9999;
      box-shadow: 0 0 10px rgba(0,0,0,0.4);
      max-width: 520px; max-height: 85vh; overflow-y: auto;
      font-family: sans-serif;
    `;
  }

  // ====== Ícones ======
  const iconePadrao   = "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png";
  const iconeEdificio = "https://icons.iconarchive.com/icons/icondigest/main-street/32/Cradle-of-learning-icon.png";
  const iconeTribo    = "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png";
  const iconeOfensivo = "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png";
  const iconeDefensivo= "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png";
  const iconeRecurso  = "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png";
  const iconeCalc     = "https://icons.iconarchive.com/icons/be-os/be-box/32/Clock-icon.png";

  // ====== Categorias e scripts ======
  const categorias = [
    {
      titulo: '🏰 Edifícios',
      icone: iconeEdificio,
      scripts: [
        ["Bem Vindo", "https://icons.iconarchive.com/icons/be-os/be-box/32/Flash-Updater-icon.png", "{game}&screen=welcome&intro&oscreen=overview"],
        ["Edifício Principal", iconeEdificio, "{game}&screen=main"],
        ["Praça de Reunião", "https://icons.iconarchive.com/icons/icondigest/main-street/32/Pow-wow-icon.png", "{game}&screen=place"],
        ["Ferreiro", "https://icons.iconarchive.com/icons/icondigest/main-street/32/Three-Mile-Island-icon.png", "{game}&screen=smith"],
        ["Mercado", "https://icons.iconarchive.com/icons/calle/the-village/32/Joes-Bar-icon.png", "{game}&screen=market"],
        ["Academia", "https://icons.iconarchive.com/icons/calle/royal-red-system/32/3817-icon.png", "{game}&screen=snob"],
        ["Estátua", "https://icons.iconarchive.com/icons/iconfactory/copland-6/32/Statue-of-Liberty-icon.png", "{game}&screen=statue"],
        ["Recrutar Tropas", "https://icons.iconarchive.com/icons/calle/black-knight/32/Swords-icon.png", "{game}&screen=train"],
        ["Torre Simulator", "https://icons.iconarchive.com/icons/icondigest/main-street/32/In-days-of-yore-icon.png", "https://twscripts.dev/scripts/watchtowerEvolved.js"],
        ["Treinar Paladinos", "https://icons.iconarchive.com/icons/be-os/be-box/32/Flash-Updater-icon.png", "https://twdevtools.github.io/approved/scripts/training.js"]
      ]
    },
    {
      titulo: '⚙️ Scripts de Configuração',
      icone: iconePadrao,
      scripts: [
        ["Mostrar Pontos dos Edifícios", iconePadrao, "https://almis90.github.io/tw-scripts/building-points.js"],
        ["Renomeador de Aldeias", iconePadrao, "https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/TsalkaponeVillageRenamer.js"],
        ["Contador de Tropas", iconePadrao, "https://twscripts.dev/scripts/troopsCounterFixed.js"],
        ["Contador de Tropas 2", iconePadrao, "https://dl.dropboxusercontent.com/s/75jut7q397e03e5/troop_counter.js"],
        ["Adicionar Amigos", iconePadrao, "https://twscripts.dev/scripts/friendRequest.js"],
        ["Mostrar Bandeiras Novas", iconePadrao, "https://marcelogpereira.github.io/TwPTScripts/WordFlagResume.js"],
        ["UP Bandeiras em Massa", iconePadrao, "https://papajik.github.io/TW-Scripts/scripts/massFlagUpgrade.js"],
        ["Contador de Grupos", iconePadrao, "https://dl.dropboxusercontent.com/s/ry6d9uu2m0mcxsb/group%20counts.js"],
        ["Import Grupos Dinâmicos", iconePadrao, "https://twscripts.dev/scripts/importExportDynamicGroups.js"],
        ["Adicionar Grupo Manual", iconePadrao, "https://shinko-to-kuma.com/scripts/groupImport.js"],
        ["Histórico PPs", iconePadrao, "https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/PPPurchaseHistoryScript.js"]
      ]
    },
    {
      titulo: '🤝 Scripts para Tribo',
      icone: iconeTribo,
      scripts: [
        ["Aristocracia", iconeTribo, "https://shinko-to-kuma.com/scripts/overwatch.js"],
        ["Ver ataques na tribo", iconeTribo, "https://dl.dropboxusercontent.com/s/ikunxd5d59059b4/scriptMostrarAtaquesACaminho.js"],
        ["Ataques (Tribo) - Membros", iconeTribo, "https://dl.dropboxusercontent.com/s/oy16zihcrmtul4k/tribeinc.js"],
        ["Evolução (Tribo) - Membros", iconeTribo, "https://shinko-to-kuma.com/scripts/tribeStats.js"],
        ["Evolução Players Rank", iconeTribo, "https://twscripts.dev/scripts/rankingGraphs.js"],
        ["Calcular Tropas da Tribo", iconeTribo, "https://shinko-to-kuma.com/scripts/tribeMembersTroopCalculator.js"],
        ["Análise de Tribos", iconeTribo, "https://twscripts.dev/scripts/tribeStatsTool.js"],
        ["Convidar P/ Tribo em Massa", iconeTribo, "https://twscripts.dev/scripts/inviteToTribe.js"],
        ["Gerar lista (Membros)", iconeTribo, "https://media.innogamescdn.com/com_DS_PL/skrypty/lista_mail.js"],
        ["Noblagens ao VIVO", iconeTribo, "https://raw.githubusercontent.com/filipemiguel97/scriptsTW/main/noblagens-ao-vivo.js"]
      ]
    },
    {
      titulo: '🎯 Scripts Ofensivos',
      icone: iconeOfensivo,
      scripts: [
        ["Exibir Comandos (Confirmar Ataque)", iconeOfensivo, "https://media.innogames.com/com_DS_NL/scripts/ConfirmEnhancer_206293.js"],
        ["Todos os Ataques Enviados (Perfil Player)", iconeOfensivo, "https://twscripts.dev/scripts/getIncsForPlayer.js"],
        ["Calculadora de MS (Confirmar Ataque)", iconeOfensivo, function(){
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
        ["Coletar de Coordenadas (Perfil Player)", iconeOfensivo, "https://tylercamp.me/tw/get-coords.js"],
        ["Planejador de Ataques Individual", iconeOfensivo, "https://twscripts.dev/scripts/singleVillagePlanner.js"],
        ["Quebrar Muralha", iconeOfensivo, "javascript:$.getScript('https://twscripts.dev/scripts/clearBarbarianWalls.js');"],
        ["Planejador de Ataques em Massa", iconeOfensivo, "https://twscripts.dev/scripts/massCommandTimer.js"],
        ["Planejador de Ataques em Massa 2", iconeOfensivo, "https://twscripts.dev/scripts/massAttackPlanner.js"],
        ["Planejador de Ataques -", iconeOfensivo, "https://twdevtools.github.io/approved/scripts/planner.js"],
        ["Fake NT (Confirmar Ataque)", iconeOfensivo, "https://twscripts.dev/scripts/evolvedFakeTrain.js"]
      ]
    },
    {
      titulo: '🛑 Scripts Defensivos',
      icone: iconeDefensivo,
      scripts: [
        ["Remover Tropas de Apoio", iconeDefensivo, "https://twscripts.dev/scripts/supportCounterEvolved.js"],
        ["Apoio em Massa", iconeDefensivo, function(){
          window.heavyCav=4;$.getScript('https://dl.dropboxusercontent.com/s/idwa7mmpn6nxl3l/supportSender.js?dl=0');
        }],
        ["Simulador Defensor de Ataques", iconeDefensivo, "https://twscripts.dev/scripts/defenseHealthCheck.js"],
        ["Ver Todos os Ataques", iconeDefensivo, "https://dl.dropbox.com/s/flt8iokmg7pomow/IncomingOpSpotter.js"],
        ["Visão Geral de Ataques", iconeDefensivo, function(){
          window.NOBLE_GAP=100;window.FORMAT='%unit% | %sent%';
          $.getScript('https://twscripts.dev/scripts/incomingsOverview.js');
        }],
        ["Devil DEF", iconeDefensivo, "https://media.innogames.com/com_DS_NL/scripts/Devils-Def-Pack_206163.js"],
        ["Renomear Comandos GL", iconeDefensivo, function(){
          alert("Use o script Renomear Comandos GL diretamente na página ou via bookmark separado.");
        }]
      ]
    },
    {
      titulo: '⛏️ Scripts de Obter Recursos',
      icone: iconeRecurso,
      scripts: [
        ["Coleta em Massa", iconeRecurso, function(){
          window.premiumBtnEnabled=false;$.getScript('https://shinko-to-kuma.com/scripts/massScavenge.js');
        }],
        ["Desbloqueador de Coleta", iconeRecurso, "https://twscripts.dev/scripts/massUnlockScav.js"],
        ["Organizador de Recursos", iconeRecurso, function(){
          $.ajaxSetup({dataType:'script'});$.getScript('https://www.minecraft.as/tw_scripts/outstanding_organizer.js');
        }],
        ["Enviar Recursos", iconeRecurso, function(){
          $.getScript('https://shinko-to-kuma.com/scripts/res-senderV2.js');
        }],
        ["Balanceador de Recursos", iconeRecurso, function(){
          window.settings={highFarm:23000,lowPoints:2000,builtOutPercentage:0.25,needsMorePercentage:0.85};
          $.getScript("https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/WarehouseBalancer.js");
        }],
        ["Balanceador GOD", iconeRecurso, "https://dl.dropboxusercontent.com/s/bytvle86lj6230c/resBalancer.js?dl=0"],
        ["Eficiência do Farm (Relatórios)", iconeRecurso, "https://twscripts.dev/scripts/farmingEfficiencyCalculator.js"],
        ["Requisitar Recursos", iconeRecurso, "https://gistcdn.githack.com/brunommpreto/cf2e40b0e7ec4cfd6e953635eff547b2/raw/coinMinter.js?min=1"],
        ["Mint Helper", iconeRecurso, "https://twscripts.dev/scripts/mintHelper.js"],
        ["Farm A/B/C", iconeRecurso, function(){
          window.cookieName='fakeypress';$.getScript('https://media.innogamescdn.com/com_DS_FR/Scripts/Pillage/fakeypress_lau.js');
        }],
        ["Farm LA (Assistente de Saque)", iconeRecurso, "https://scripts.ibragonza.nl/enhancer/enhancer.js"],
        ["Farm GOD", iconeRecurso, "https://higamy.github.io/TW/Scripts/Approved/FarmGodCopy.js"]
      ]
    },
    {
      titulo: '🧮 Scripts de Calculadora',
      icone: iconeCalc,
      scripts: [
        ["Calculadora de Ataques nas Bárbaras", iconeCalc, "https://twscripts.dev/scripts/lastTimeAttacked.js"],
        ["Calculadora de Snip Individual", iconeCalc, "https://twscripts.dev/scripts/singleVillageSnipe.js"],
        ["Calculadora de Snip 2", iconeCalc, "https://shinko-to-kuma.com/scripts/massSnipe.js"],
        ["Calculadora de Snip 3", iconeCalc, function(){
          window.ezsSettings={minimumSnipeDefense:{infantry:2000,cavalry:2000,archer:0},offensiveSnipes:false,maximumTimeUntilLaunch:4};
          $.getScript('https://tylercamp.me/tw/ez-snipe.js');
        }],
        ["Calculadora de Snip (Mapa)", iconeCalc, "https://twscripts.dev/scripts/villagesInRange.js"],
        ["Calculadora de Lealdade", iconeCalc, "https://twscripts.dev/scripts/loyaltyCalculator.js"],
        ["Calculadora Snip e BT", iconeCalc, "https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/TsalkaponeCalculatorCompilation.js"],
        ["Calculadora de BT", iconeCalc, function(){
          if(!game_data.player.premium){UI.InfoMessage('Para utilizar esse script é necessário uma Conta Premium!',3000,true);return;}
          function calcular(){
            const v1=document.getElementById('bt1').value,v2=document.getElementById('bt2').value;
            if(!v1.match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/)||!v2.match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/)){
              return $("#resultado").html("Insira horários válidos (HH:MM:SS).");
            }
            let [h1,m1,s1]=v1.split(':'),[h2,m2,s2]=v2.split(':');
            h1=+h1;m1=+m1;s1=+s1;h2=+h2;m2=+m2;s2=+s2;
            let backH=h1+h2, backM=m1+m2, backS=s1+s2;
            if(backS>=60){backM++; backS-=60;} if(backM>=60){backH++; backM-=60;} if(backH>=24){backH-=24;}
            backH=('0'+backH).slice(-2); backM=('0'+backM).slice(-2); backS=('0'+backS).slice(-2);
            $("#resultado").html("Back: "+backH+":"+backM+":"+backS+" (Tropas retornam)");
          }
          const div = document.createElement('div');
          div.style.padding = '10px';
          div.innerHTML = `
            <label>BT1 (HH:MM:SS): <input id="bt1" type="text" value="01:00:00" /></label><br/>
            <label>BT2 (HH:MM:SS): <input id="bt2" type="text" value="01:00:00" /></label><br/>
            <button id="calcularBT">Calcular Back</button>
            <div id="resultado" style="margin-top:10px;"></div>
          `;
          document.body.appendChild(div);
          document.getElementById('calcularBT').onclick=calcular;
        }]
    }
  ];

  // ====== Função para abrir scripts ======
  function abrirScript(script){
    if(typeof script === "function"){
      script();
      return;
    }
    if(script.startsWith("javascript:")){
      try { eval(script.slice(11)); } catch(e){ alert('Erro no script: '+e.message); }
      return;
    }
    if(script.startsWith("http")){
      window.open(script,"_blank");
      return;
    }
    // Caso seja URL parcial (como {game}&screen=main), tenta formar URL
    if(script.includes("{game}")){
      let url = game_data ? game_data.link_base_pure || game_data.link_base || '' : '';
      if(!url) url = window.location.origin + window.location.pathname + "?";
      url += script.replace("{game}", "");
      window.open(url,"_blank");
      return;
    }
    alert("Script desconhecido ou inválido.");
  }

  // ====== Construção do menu ======
  // Botão de fechar e alternar tema
  const header = document.createElement('div');
  header.style = 'display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;';
  const title = document.createElement('div');
  title.textContent = 'Scripts Tribuna - Menu Unificado';
  title.style = 'font-weight:bold; font-size:16px;';
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✖';
  closeBtn.title = "Fechar menu";
  closeBtn.style = 'background:none; border:none; color:'+theme.fg+'; font-size:16px; cursor:pointer;';
  closeBtn.onclick = () => menu.remove();

  // Botão de alternar tema
  const themeBtn = document.createElement('button');
  themeBtn.textContent = currentTheme==='light' ? '🌙 Escuro' : '☀️ Claro';
  themeBtn.title = "Alternar tema claro/escuro";
  themeBtn.style = 'background:none; border:none; color:'+theme.fg+'; font-size:14px; cursor:pointer;';
  themeBtn.onclick = () => {
    currentTheme = currentTheme==='light' ? 'dark' : 'light';
    localStorage.setItem('twScriptsTheme', currentTheme);
    location.reload();
  };

  header.appendChild(title);
  header.appendChild(themeBtn);
  header.appendChild(closeBtn);
  menu.appendChild(header);

  // Container das categorias
  const categoriasContainer = document.createElement('div');
  categoriasContainer.style = 'display:flex; flex-wrap: wrap; gap:10px; max-height: 60vh; overflow-y: auto;';

  // Criar botão de categoria (só ícone e título abaixo)
  categorias.forEach(cat => {
    const catBtn = document.createElement('button');
    catBtn.style = `
      flex: 0 0 80px;
      display:flex; flex-direction: column; align-items:center;
      border: 1px solid ${theme.border};
      border-radius: 8px;
      padding: 8px 6px;
      background: ${theme.bg};
      color: ${theme.fg};
      cursor: pointer;
      font-size: 11px;
      user-select: none;
    `;
    catBtn.title = cat.titulo;
    const img = document.createElement('img');
    img.src = cat.icone || iconePadrao;
    img.alt = cat.titulo;
    img.style = 'width:32px; height:32px; margin-bottom: 6px;';
    catBtn.appendChild(img);
    const span = document.createElement('span');
    span.textContent = cat.titulo;
    span.style = 'text-align:center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;';
    catBtn.appendChild(span);

    catBtn.onclick = () => {
      mostrarScripts(cat);
    };

    categoriasContainer.appendChild(catBtn);
  });
  menu.appendChild(categoriasContainer);

  // Área para mostrar scripts da categoria selecionada
  const scriptsPanel = document.createElement('div');
  scriptsPanel.style = `
    margin-top: 12px; 
    border-top: 1px solid ${theme.panelBorder}; 
    padding-top: 10px; 
    max-height: 50vh; 
    overflow-y: auto;
    background: ${theme.panelBg};
  `;
  menu.appendChild(scriptsPanel);

  // Função para mostrar scripts da categoria clicada
  function mostrarScripts(cat){
    scriptsPanel.innerHTML = '';
    const titulo = document.createElement('div');
    titulo.textContent = cat.titulo;
    titulo.style = 'font-weight:bold; margin-bottom:8px; font-size:14px;';
    scriptsPanel.appendChild(titulo);

    cat.scripts.forEach(([nome, icone, script]) => {
      const btn = document.createElement('button');
      btn.style = `
        width: 100%; 
        display:flex; 
        align-items:center; 
        margin-bottom: 6px; 
        background: ${theme.bg}; 
        border: 1px solid ${theme.border}; 
        border-radius: 6px;
        color: ${theme.fg};
        cursor:pointer;
        padding: 6px 8px;
        font-size: 13px;
      `;
      btn.title = nome;
      btn.onmouseenter = () => btn.style.backgroundColor = theme.hover;
      btn.onmouseleave = () => btn.style.backgroundColor = theme.bg;

      const img = document.createElement('img');
      img.src = icone || iconePadrao;
      img.alt = nome;
      img.style = 'width:24px; height:24px; margin-right: 8px;';
      btn.appendChild(img);

      const span = document.createElement('span');
      span.textContent = nome;
      btn.appendChild(span);

      btn.onclick = () => {
        abrirScript(script);
      };

      scriptsPanel.appendChild(btn);
    });
  }

  // Adiciona o menu na página
  document.body.appendChild(menu);
})();
