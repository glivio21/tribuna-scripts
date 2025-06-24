javascript:(function(){
  const id = 'tw-scripts-unified-menu';
  if(document.getElementById(id)) return document.getElementById(id).remove();

  const menu = document.createElement('div');
  menu.id = id;
  menu.style = `
    position: fixed;
    top: 100px;
    left: 100px;
    background: #fff;
    border: 2px solid #333;
    border-radius: 8px;
    padding: 10px;
    z-index: 9999;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
    max-width: 520px;
    max-height: 85vh;
    overflow-y: auto;
    font-family: sans-serif;
  `;

  function criarCategoria(tituloText, scriptsArray, iconePadrao){
    const titulo = document.createElement('h3');
    titulo.textContent = tituloText;
    titulo.style = "margin: 12px 0 6px; font-size: 15px; border-bottom: 1px solid #ccc;";
    menu.appendChild(titulo);

    const grid = document.createElement('div');
    grid.style = "display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;";

    scriptsArray.forEach(([nome, icone, urlOrFunc]) => {
      const btn = document.createElement('div');
      btn.style = "cursor:pointer;text-align:center;font-size:11px";
      btn.title = nome;
      btn.innerHTML = `<img src="${icone || iconePadrao}" style="display:block;margin:0 auto 4px;width:32px;height:32px;"><span>${nome}</span>`;

      btn.onclick = () => {
        try {
          if(typeof urlOrFunc === 'function'){
            urlOrFunc();
          } else if(urlOrFunc.startsWith('javascript:')){
            eval(urlOrFunc.slice(11));
          } else if(urlOrFunc.includes('{game}')){
            if(typeof game_data !== 'undefined' && game_data.link_base){
              window.location.href = game_data.link_base + urlOrFunc.replace('{game}', '');
            } else {
              alert('game_data.link_base não definido.');
            }
          } else {
            $.getScript(urlOrFunc).fail(() => alert('Erro ao carregar o script: ' + urlOrFunc));
          }
        } catch(e){
          alert('Erro ao executar o script: ' + e.message);
        }
      };

      grid.appendChild(btn);
    });

    menu.appendChild(grid);
  }

  // Ícones padrão
  const iconePadrao = "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png";
  const iconeEdificio = "https://icons.iconarchive.com/icons/icondigest/main-street/32/Cradle-of-learning-icon.png";
  const iconeTribo = "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png";
  const iconeOfensivo = "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png";
  const iconeDefensivo = "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png";
  const iconeRecurso = "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png";
  const iconeCalculadora = "https://icons.iconarchive.com/icons/be-os/be-box/32/Clock-icon.png";

  // Categorias e scripts
  const categorias = [
    {
      titulo: '🏰 Edifícios',
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
        ["Fakes (Configurar Coords)", iconeOfensivo, function(){
          var coords='492|450';
          var doc=document;
          if(window.frames.length>0 && window.main!=null) doc=window.main.document;
          var url=doc.URL;
          if(url.indexOf('screen=place')==-1) alert('Use o script na página do posto de comando!');
          coords=coords.split(' ');
          var index=0;
          var farmcookie=document.cookie.match('(^|;) ?farm=([^;]*)(;|$)');
          if(farmcookie!=null) index=parseInt(farmcookie[2]);
          if(index>=coords.length) alert('Todas as aldeias foram usadas, voltando para a primeira!');
          if(index>=coords.length) index=0;
          coords=coords[index];
          coords=coords.split('|');
          index=index+1;
          var cookie_date=new Date(2025,3,27);
          document.cookie ='farm='+index+';expires='+cookie_date.toGMTString();
          doc.forms[0].x.value=coords[0];
          doc.forms[0].y.value=coords[1];
          $('#place_target').find('input').val(coords[0]+'|'+coords[1]);
          doc.forms[0].spy.value=5;
          end();
        }],
        ["Fake NT (Confirmar Ataque)", iconeOfensivo, "https://twscripts.dev/scripts/evolvedFakeTrain.js"]
      ]
    },
    {
      titulo: '🛑 Scripts Defensivos',
      scripts: [
        ["Remover Tropas de Apoio", iconeDefensivo, "https://twscripts.dev/scripts/supportCounterEvolved.js"],
        ["Apoio em Massa", iconeDefensivo, function(){
          window.heavyCav=4;
          $.getScript('https://dl.dropboxusercontent.com/s/idwa7mmpn6nxl3l/supportSender.js?dl=0');
        }],
        ["Simulador Defensor de Ataques", iconeDefensivo, "https://twscripts.dev/scripts/defenseHealthCheck.js"],
        ["Ver Todos os Ataques", iconeDefensivo, "https://dl.dropbox.com/s/flt8iokmg7pomow/IncomingOpSpotter.js"],
        ["Visão Geral de Ataques", iconeDefensivo, function(){
          window.NOBLE_GAP=100;
          window.FORMAT='%unit% | %sent%';
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
      scripts: [
        ["Coleta em Massa", iconeRecurso, function(){
          window.premiumBtnEnabled = false;
          $.getScript('https://shinko-to-kuma.com/scripts/massScavenge.js');
        }],
        ["Desbloqueador de Coleta", iconeRecurso, "https://twscripts.dev/scripts/massUnlockScav.js"],
        ["Organizador de Recursos", iconeRecurso, function(){
          $.ajaxSetup({dataType:'script'});
          $.getScript('https://www.minecraft.as/tw_scripts/outstanding_organizer.js');
        }],
        ["Enviar Recursos", iconeRecurso, function(){
          $.getScript('https://shinko-to-kuma.com/scripts/res-senderV2.js');
        }],
        ["Balanceador de Recursos", iconeRecurso, function(){
          window.settings = {
            highFarm: 23000,
            lowPoints: 2000,
            builtOutPercentage: 0.25,
            needsMorePercentage: 0.85
          };
          $.getScript("https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/WarehouseBalancer.js");
        }],
        ["Balanceador GOD", iconeRecurso, "https://dl.dropboxusercontent.com/s/bytvle86lj6230c/resBalancer.js?dl=0"],
        ["Eficiência do Farm (Relatórios)", iconeRecurso, "https://twscripts.dev/scripts/farmingEfficiencyCalculator.js"],
        ["Requisitar Recursos", iconeRecurso, "https://gistcdn.githack.com/brunommpreto/cf2e40b0e7ec4cfd6e953635eff547b2/raw/coinMinter.js?min=1"],
        ["Mint Helper", iconeRecurso, "https://twscripts.dev/scripts/mintHelper.js"],
        ["Farm A/B/C", iconeRecurso, function(){
          window.cookieName = 'fakeypress';
          $.getScript('https://media.innogamescdn.com/com_DS_FR/Scripts/Pillage/fakeypress_lau.js');
        }],
        ["Farm LA (Assistente de Saque)", iconeRecurso, "https://scripts.ibragonza.nl/enhancer/enhancer.js"],
        ["Farm GOD", iconeRecurso, "https://higamy.github.io/TW/Scripts/Approved/FarmGodCopy.js"]
      ]
    },
    {
      titulo: '🧮 Scripts de Calculadora',
      scripts: [
        ["Calculadora de Ataques nas Bárbaras", iconeCalculadora, "https://twscripts.dev/scripts/lastTimeAttacked.js"],
        ["Calculadora de Snip Individual", iconeCalculadora, "https://twscripts.dev/scripts/singleVillageSnipe.js"],
        ["Calculadora de Snip 2", iconeCalculadora, "https://shinko-to-kuma.com/scripts/massSnipe.js"],
        ["Calculadora de Snip 3", iconeCalculadora, function(){
          window.ezsSettings = {
            minimumSnipeDefense: { infantry: 2000, cavalry: 2000, archer: 0 },
            offensiveSnipes: false,
            maximumTimeUntilLaunch: 4
          };
          $.getScript('https://tylercamp.me/tw/ez-snipe.js');
        }],
        ["Calculadora de Snip (Mapa)", iconeCalculadora, "https://twscripts.dev/scripts/villagesInRange.js"],
        ["Calculadora de Lealdade", iconeCalculadora, "https://twscripts.dev/scripts/loyaltyCalculator.js"],
        ["Calculadora Snip e BT", iconeCalculadora, "https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/TsalkaponeCalculatorCompilation.js"],
        ["Calculadora de BT", iconeCalculadora, function(){
          if(game_data.player.premium == false){
            UI.InfoMessage('Para utilizar esse script é necessário uma Conta Premium!', 3000, true);
            return;
          }
          function calcular(){
            if(document.getElementById('bt1').value.match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/) != null &&
              document.getElementById('bt2').value.match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/) != null){
              var timeArray = document.getElementById('bt1').value.split(':');
              var travArray = document.getElementById('bt2').value.split(':');
              var result;
              var h = parseInt(timeArray[0], 10) + parseInt(travArray[0], 10);
              var m = parseInt(timeArray[1], 10) + parseInt(travArray[1], 10);
              var s = parseInt(timeArray[2], 10) + parseInt(travArray[2], 10);
              if(s >= 60){ m += 1; s -= 60; }
              if(m >= 60){ h += 1; m -= 60; }
              if(h >= 24){ h -= 24; }
              if(s < 10){ s = '0' + s; }
              if(m < 10){ m = '0' + m; }
              if(h < 10){ h = '0' + h; }
              result = h + ':' + m + ':' + s;
              $("#resultado").html("Back:&nbsp; " + result + " (Tropas retornam)");

              var H = parseInt(timeArray[0], 10) - parseInt(travArray[0], 10);
              var M = parseInt(timeArray[1], 10) - parseInt(travArray[1], 10);
              var S = parseInt(timeArray[2], 10) - parseInt(travArray[2], 10);
              if(S < 0){ S = 60 - (S * -1); M--; }
              if(M < 0){ M = 60 - (M * -1); H--; }
              if(H < 0){ H = 24 - (H * -1); if(H > 10){ H = 'Ontem às ' + H; } else if(H < 10){ H = 'Ontem às ' + H; } }
              if(S < 10){ S = '0' + S; }
              if(M < 10){ M = '0' + M; }
              if(H < 10){ H = '0' + H; }
              result = H + ':' + M + ':' + S;
              $("#resultado").html($("#resultado").html() + "<br />Snipe: " + result);
              $("#resultado").fadeIn("slow");
            } else {
              $("#resultado").html("<p style='color: red;'>Formato de horas incorreto!<br />Utilize: HH:MM:SS</p>");
              $("#resultado").fadeIn("slow");
            }
          }
          var conteudo = '<div style=max-width:600px;>' +
            '<h2 class="popup_box_header">Calc. BT & Snipe</h2>' +
            '<p><div style="text-align: center;">Hora do ataque<br /><input type="text" id="bt1"><br />Duração<br /><input type="text" id="bt2"><br /><br />' +
            '<input onClick="calcular()" style="padding-left: 28px; background: #6C4824 url(https://brtwscripts.com/calc-icon.png) no-repeat 10px" class="btn" type="submit" value="Calcular"></div></p>' +
            '<div id="resultado" style="display: none;">Back:&nbsp; xx:xx:xx<br />Snipe: xx:xx:xx</div>' +
            '</div>';
          Dialog.show('bt_snipe_calc', conteudo);
        }],
        ["Calculadora de Snip + Aflição", iconeCalculadora, function(){
          let script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = 'https://dl.dropboxusercontent.com/s/5f0ewzcwkh39pau/TESTE12.js?dl=0';
          document.head.appendChild(script);
        }],
        ["Calculadora de Snip Cancel", iconeCalculadora, "https://twdevtools.github.io/approved/scripts/snipe.js"]
      ]
    }
  ];

  categorias.forEach(cat => criarCategoria(cat.titulo, cat.scripts, iconePadrao));

  // Botão fechar
  const close = document.createElement('div');
  close.innerHTML = "✖";
  close.style = "position:absolute;top:4px;right:6px;font-size:16px;cursor:pointer;";
  close.onclick = () => menu.remove();
  menu.appendChild(close);

  document.body.appendChild(menu);
})();
