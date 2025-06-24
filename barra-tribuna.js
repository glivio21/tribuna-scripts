javascript:(function(){
  // Carrega jQuery se não existir, usa noConflict para evitar conflito
  function loadjQuery(callback){
    if(window.jQuery) return callback(window.jQuery);
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.onload = function(){
      var jq = jQuery.noConflict(true);
      callback(jq);
    };
    document.head.appendChild(script);
  }

  loadjQuery(function($){
    const id = 'tw-scripts-unified-menu';
    if (document.getElementById(id)) return document.getElementById(id).remove();

    // ====== Tema ======
    let currentTheme = localStorage.getItem('twScriptsTheme') || 'light';
    const themes = {
      light: { bg:'#ffffff', fg:'#000000', border:'#333333', hover:'#eeeeee', panelBg:'#ffffff', panelBorder:'#cccccc' },
      dark:  { bg:'#000000', fg:'#ffffff', border:'#000000', hover:'#222222', panelBg:'#000000', panelBorder:'#444444' }
    };
    let theme = themes[currentTheme];

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
            (function(){
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
            })();
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
        try {
          script();
        } catch(e) {
          alert('Erro no script (function): '+e.message);
        }
        return;
      }
      if(typeof script === "string"){
        if(script.startsWith("javascript:")){
          try {
            eval(script.slice(11));
          } catch(e){
            alert('Erro no script: '+e.message);
          }
          return;
        }
        if(script.includes("{game}")){
          let baseUrl = '';
          if(window.game_data){
            baseUrl = game_data.link_base_pure || game_data.link_base || (window.location.origin + window.location.pathname + "?");
          } else {
            baseUrl = window.location.origin + window.location.pathname + "?";
          }
          let fullUrl = script.replace("{game}", baseUrl);
          window.open(fullUrl,"_blank");
          return;
        }
        if(script.endsWith(".js")){
          $.getScript(script).fail(()=>alert('Erro ao carregar script externo!'));
          return;
        }
        // Caso padrão: abre em nova aba
        window.open(script,"_blank");
      }
    }

    // ====== Criação do menu ======
    const menu = document.createElement('div');
    menu.id = id;
    menu.style.cssText = `
      position: fixed;
      top: 100px;
      left: 100px;
      width: 320px;
      max-height: 600px;
      overflow-y: auto;
      background: ${theme.bg};
      color: ${theme.fg};
      border: 2px solid ${theme.border};
      border-radius: 8px;
      font-family: Arial, sans-serif;
      font-size: 14px;
      z-index: 999999;
      box-shadow: 0 0 10px rgba(0,0,0,0.7);
      user-select: none;
    `;

    // Cabeçalho do menu
    const header = document.createElement('div');
    header.textContent = 'Scripts Tribuna - Tribal Wars';
    header.style.cssText = `
      background: ${theme.border};
      color: ${theme.fg};
      font-weight: bold;
      padding: 8px;
      cursor: move;
      text-align: center;
      border-radius: 6px 6px 0 0;
      user-select: none;
    `;

    // Botão para alternar tema
    const themeBtn = document.createElement('button');
    themeBtn.textContent = currentTheme === 'light' ? 'Tema Escuro' : 'Tema Claro';
    themeBtn.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 2px 8px;
      font-size: 12px;
      cursor: pointer;
      background: transparent;
      border: 1px solid ${theme.fg};
      color: ${theme.fg};
      border-radius: 4px;
      user-select: none;
    `;
    themeBtn.title = 'Alternar tema claro/escuro';

    header.appendChild(themeBtn);
    menu.appendChild(header);

    // Container para categorias
    const catContainer = document.createElement('div');
    catContainer.style.padding = '6px';

    // Lista para armazenar todos botões para mudança de tema
    const allButtons = [];

    // Função para criar botão com ícone e texto
    function criarBotao(texto, icone){
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.style.cssText = `
        width: 100%;
        margin: 3px 0;
        padding: 6px 6px 6px 32px;
        font-size: 13px;
        text-align: left;
        border-radius: 4px;
        border: 1px solid ${theme.border};
        background: ${theme.bg};
        color: ${theme.fg};
        cursor: pointer;
        position: relative;
        user-select: none;
        transition: background 0.3s ease;
      `;
      btn.onmouseenter = () => { btn.style.background = theme.hover; };
      btn.onmouseleave = () => { btn.style.background = theme.bg; };

      if(icone){
        const img = document.createElement('img');
        img.src = icone;
        img.alt = '';
        img.style.cssText = `
          width: 20px;
          height: 20px;
          position: absolute;
          left: 6px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        `;
        btn.appendChild(img);
      }

      const span = document.createElement('span');
      span.textContent = texto;
      btn.appendChild(span);

      allButtons.push(btn);

      return btn;
    }

    // Função para criar categoria com título e lista de scripts
    function criarCategoria(categoria){
      const divCat = document.createElement('div');
      divCat.style.marginBottom = '10px';

      // Botão que mostra apenas o ícone da categoria inicialmente
      const catBtn = criarBotao(categoria.titulo, categoria.icone);
      catBtn.style.fontWeight = 'bold';
      catBtn.style.textAlign = 'center';
      catBtn.style.paddingLeft = '28px';
      catBtn.style.userSelect = 'none';

      // Container para scripts da categoria (inicialmente escondido)
      const scriptsDiv = document.createElement('div');
      scriptsDiv.style.cssText = `
        margin-top: 4px;
        padding-left: 16px;
        display: none;
        max-height: 250px;
        overflow-y: auto;
        border-left: 2px solid ${theme.border};
      `;

      // Toggle para mostrar/esconder scripts
      catBtn.onclick = () => {
        if(scriptsDiv.style.display === 'none'){
          scriptsDiv.style.display = 'block';
        } else {
          scriptsDiv.style.display = 'none';
        }
      };

      // Adiciona os botões dos scripts dentro da categoria
      categoria.scripts.forEach(([nome, icone, script]) => {
        const btn = criarBotao(nome, icone || iconePadrao);
        btn.style.fontWeight = 'normal';
        btn.onclick = () => abrirScript(script);
        scriptsDiv.appendChild(btn);
      });

      divCat.appendChild(catBtn);
      divCat.appendChild(scriptsDiv);

      return divCat;
    }

    categorias.forEach(cat => {
      catContainer.appendChild(criarCategoria(cat));
    });

    menu.appendChild(catContainer);
    document.body.appendChild(menu);

    // Atualiza tema de todos os botões e elementos ao trocar tema
    function atualizarTema(novoTema){
      theme = themes[novoTema];
      menu.style.background = theme.bg;
      menu.style.color = theme.fg;
      menu.style.borderColor = theme.border;
      header.style.background = theme.border;
      header.style.color = theme.fg;
      themeBtn.style.borderColor = theme.fg;
      themeBtn.style.color = theme.fg;
      themeBtn.textContent = novoTema === 'light' ? 'Tema Escuro' : 'Tema Claro';

      // Atualiza estilo dos botões
      allButtons.forEach(btn => {
        btn.style.background = theme.bg;
        btn.style.color = theme.fg;
        btn.style.borderColor = theme.border;
        btn.onmouseenter = () => { btn.style.background = theme.hover; };
        btn.onmouseleave = () => { btn.style.background = theme.bg; };
      });
    }

    themeBtn.onclick = () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('twScriptsTheme', currentTheme);
      atualizarTema(currentTheme);
    };

    // ====== Drag and drop do menu ======
    (function(){
      let posX = 0, posY = 0, mouseX = 0, mouseY = 0;
      header.style.cursor = 'move';

      function dragMouseDown(e){
        e = e || window.event;
        e.preventDefault();
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }

      function elementDrag(e){
        e = e || window.event;
        e.preventDefault();
        posX = mouseX - e.clientX;
        posY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        menu.style.top = (menu.offsetTop - posY) + "px";
        menu.style.left = (menu.offsetLeft - posX) + "px";
      }

      function closeDragElement(){
        document.onmouseup = null;
        document.onmousemove = null;
      }

      header.onmousedown = dragMouseDown;
    })();

  });
})();
