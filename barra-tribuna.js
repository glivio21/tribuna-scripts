javascript:(function(){
  const SCRIPT_ID = 'tw-barra-tribuna';
  if(document.getElementById(SCRIPT_ID)) {
    document.getElementById(SCRIPT_ID).remove();
    return;
  }

  //Temas
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
    ["Renomeador GOD de Aldeias", "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png", "javascript:(function(){if(!window.location.href.includes('mode=prod')){if(confirm('Você não está na tela certa. Ir agora para a Visualização de Produção?')){window.location.href='game.php?screen=overview_villages&mode=prod';}return;}if(document.getElementById('renameGui')){return;}let gui=document.createElement('div');gui.id='renameGui';gui.style.position='fixed';gui.style.top='100px';gui.style.left='50%';gui.style.transform='translateX(-50%)';gui.style.background='#222';gui.style.padding='10px';gui.style.border='2px solid #666';gui.style.borderRadius='10px';gui.style.zIndex=9999;gui.style.boxShadow='0px 0px 15px rgba(0,0,0,0.8)';gui.innerHTML=`<label style=\"color:#eee;\"><b>Nome da aldeia:</b></label><input id=\"villageBaseName\" type=\"text\" style=\"width:150px;margin:5px 0;background:#333;color:#eee;border:1px solid #555;\"><br><label style=\"color:#eee;\"><input type=\"checkbox\" id=\"seqCheck\"> Adicionar numeração sequencial</label><br><label style=\"color:#eee;\"><b>Velocidade:</b></label><br><select id=\"speedSelect\" style=\"margin-top:5px;background:#333;color:#eee;border:1px solid #555;\"><option value=\"300\">🐢 Devagar</option><option value=\"150\" selected>⚖️ Médio</option><option value=\"50\">⚡ Rápido</option></select><br><button id=\"startRename\" style=\"margin-top:10px;padding:5px 10px;background:#555;color:#eee;border:1px solid #777;\">▶️ START</button><button id=\"closeGui\" style=\"margin-left:10px;padding:5px 10px;background:#555;color:#eee;border:1px solid #777;\">❌ Fechar</button><div style=\"margin-top:10px;font-size:11px;color:#aaa;\">Tribuna Tribal Wars</div>`;document.body.appendChild(gui);document.getElementById('closeGui').onclick=function(){gui.remove();};document.getElementById('startRename').onclick=function(){let name=document.getElementById('villageBaseName').value.trim();let useSeq=document.getElementById('seqCheck').checked;let speed=parseInt(document.getElementById('speedSelect').value);if(!name||name.length<3){alert('Nome deve ter ao menos 3 letras.');return;}let delay=0;document.querySelectorAll('#production_table tr').forEach((row,i)=>{if(i===0)return;setTimeout(()=>{let icon=row.querySelector('.rename-icon');if(icon)icon.click();let input=row.querySelector('.quickedit-edit input[type=text]');let btn=row.querySelector('.quickedit-edit input[type=button]');if(input&&btn){input.value=name+(useSeq?(' '+String(i).padStart(2,'')):'');btn.click();}},delay+=speed);delay+=speed;});gui.remove();};})();"],
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
        ["Balanceador de Recursos Shinko", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", function(){
          window.settings={highFarm:23000,lowPoints:2000,builtOutPercentage:0.25,needsMorePercentage:0.85};
          $.getScript("https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/WarehouseBalancer.js");
        }],
        ["Balanceador de Recursos GOD", "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png", function( ){
  window.settings={highFarm:23000,lowPoints:2000,builtOutPercentage:0.25,needsMorePercentage:0.85};
  $.getScript("https://dl.dropboxusercontent.com/s/bytvle86lj6230c/resBalancer.js?dl=0" );void(0);
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
      titulo: '⚡ Speed',
      icone: "https://icons.iconarchive.com/icons/etherbrian/space-bits/32/Comet-icon.png",
      scripts: [
        ['Coletor de Coordenadas', 'https://icons.iconarchive.com/icons/etherbrian/space-bits/32/Torpedo-icon.png',
        `javascript:(function(){
          if(typeof bb==='undefined') var bb=false;
          if(document.URL.indexOf('screen=info_player')===-1){
            alert('Você deve executar o script no perfil de algum jogador!');
          } else {
            var tds=document.getElementsByTagName('TD'), K=[], C=[];
            for(var idx=0;idx<100;idx++) K[idx]=[];
            for(var i=0;i<tds.length;i++){
              var xy=tds[i].innerHTML;
              if(/^\\d+\\|\\d+$/.test(xy)){
                var id=$(tds[i]).parent().find('span.village_anchor.contexted').attr('data-id');
                var aux=id+'&'+xy; C.push(aux);
                var xys=xy.split('|');
                K[Math.floor(parseInt(xys[0])/100)+Math.floor(parseInt(xys[1])/100)*10].push(aux);
              }
            }
            if(bb) C='Esta aldeia não existe Esta aldeia não existe';
            else C=C.join(',');
            var prefix='<textarea cols=80 rows=10>', postfix='</textarea>';
            var S='<html><head><title>Coletor de Coordenadas</title><meta http-equiv="content-type" content="text/html; charset=UTF-8"/></head><body><b>Coletor de Coordenadas</b><hr>Todas as Aldeias do Jogador:<br>'+prefix+C+postfix;
            for(var j=0;j<100;j++){
              if(K[j].length>0){
                var Ks=bb?'Esta aldeia não existe Esta aldeia não existe':K[j].join(',');
                S+='<br><br> Aldeias do Continente '+j+' <br>'+prefix+Ks+postfix;
              }
            }
            S+='</body></html>';
            var popup=window.open('about:blank','twcc','width=720,height=480,scrollbars=1');
            popup.document.open('text/html','replace');
            popup.document.write(S); popup.document.close();
          }
        })();`],         
  ["Ataque em Massa", "https://icons.iconarchive.com/icons/etherbrian/space-bits/32/Torpedo-icon.png", javascript: (function() { var permission = ['livioprofight']; if (1) { var Aldeia = function(_coord, _id, _alvoId, _alvoC, _data, _time) { this.coord = _coord; this.id = _id; this.alvoId = _alvoId; this.alvoC = _alvoC; this.data = _data; this.time = _time; }; aldeias = []; aldeiasAux = []; aldeiasLength = 0; deuError = 0; setParam = function(name, value) { localStorage.setItem(name, value); }; getParam = function(name) { return localStorage.getItem(name); }; usefullVillages = function() { $(%27.quickedit-vn%27).each(function(index) { aldeias[index] = new Aldeia($(this).find(%27a span%27).text().match(/\d{3}[|]\d{3}/g)[0], $(this).data(%27id%27), 0, 0, {}, ""); }); }; getAlvos = function(alvos) { var infoAlvos = {}, infoAlvosLen; if (!alvos || alvos == -1) alvos = $("textarea[name=%27coords%27]").val().split(%27,%27); else alvos = alvos.split(%27,%27); infoAlvosLen = alvos.length; infoAlvos.id = []; infoAlvos.coord = []; for (var k = 0; k < infoAlvosLen; k++) { alvos[k] = alvos[k].split(%27&%27); infoAlvos.id[k] = alvos[k][0]; infoAlvos.coord[k] = alvos[k][1]; } return infoAlvos; }; sortCoords = function() { var len = aldeias.length, lenAlvos, x, y, prim, seg, coord = [], id, string = "", objAlvo = getAlvos(getParam(%27coordsRes%27)); lenAlvos = objAlvo.coord.length; if (lenAlvos <= 0) { objAlvo = getAlvos(getParam(%27coords%27)); lenAlvos = objAlvo.coord.length; } for (var i = 0; i < len; i++) { if (!lenAlvos) { objAlvo = getAlvos(null); lenAlvos = objAlvo.coord.length; } x = aldeias[i].coord.split(%27|%27); for (var j = 0; j < lenAlvos; j++) { y = objAlvo.coord[j].split(%27|%27); if (!j) prim = Math.sqrt(Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2)); seg = Math.sqrt(Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2)); if (prim >= seg) { prim = seg; coord = y; id = objAlvo.id[j]; } } prim = objAlvo.coord.indexOf(coord.join(%27|%27)); objAlvo.coord.splice(prim, 1); objAlvo.id.splice(prim, 1); lenAlvos--; aldeias[i].alvoC = coord.join(%27|%27); aldeias[i].alvoId = id; } seg = objAlvo.coord.length; for (var m = 0; m < seg; m++) { string += objAlvo.id[m] + %27&%27 + objAlvo.coord[m]; if (m < (seg - 1)) string += %27,%27; } setParam(%27coordsRes%27, string); $("#combined_table tbody tr:eq(0) th:eq(0)").html("<b>Alvos Restantes: " + lenAlvos + "</b>"); }; removeVillage = function(id) { var len = aldeias.length; while (len && len--) { if (aldeias[len].id == id) { aldeias.splice(len, 1); return; } } }; removeVillageAux = function(id) { var len = aldeiasAux.length; while (len--) { if (aldeiasAux[len].id == id) { aldeiasAux.splice(len, 1); return; } } }; firstRequest = function() { var comando = $('#comando').val(); var spear = getParam('spear'), sword = getParam('sword'), axe = getParam('axe'), archer = getParam('archer'), spy = getParam('spy'), light = getParam('light'), heavy = getParam('heavy'), marcher = getParam('marcher'), ram = getParam('ram'), catapult = getParam('catapult'), snob = getParam('snob'), count = 0, i = 0; aldeiasLength = aldeias.length; for (let aldeia of aldeias) { setTimeout(function() { $.ajax({ type: "GET", url: "/game.php?village=" + aldeia.id + "&screen=place&ajax=command&target=" + aldeia.alvoId + "&client_time=" + Math.round(Timing.getCurrentServerTime() / 1e3), data: {}, dataType: "json", headers: { "TribalWars-Ajax": 1 }, success: function(data) { var string, len, tropas = {}, spearN, swordN, axeN, archerN, spyN, marcherN, lightN, heavyN, ramN, catapultN, snobN, first; if (!data.error) { data = $(data.response.dialog); string = data.serialize().split('&'); len = string.length; spearN = jQuery('#unit_input_spear', data).data('all-count'); swordN = jQuery('#unit_input_sword', data).data('all-count'); axeN = jQuery('#unit_input_axe', data).data('all-count'); archerN = jQuery('#unit_input_archer', data).data('all-count'); spyN = jQuery('#unit_input_spy', data).data('all-count'); marcherN = jQuery('#unit_input_marcher', data).data('all-count'); lightN = jQuery('#unit_input_light', data).data('all-count'); heavyN = jQuery('#unit_input_heavy', data).data('all-count'); ramN = jQuery('#unit_input_ram', data).data('all-count'); catapultN = jQuery('#unit_input_catapult', data).data('all-count'); snobN = jQuery('#unit_input_snob', data).data('all-count'); for (var l = 0; l < len; l++) { tropas[string[l].split('=')[0]] = string[l].split('=')[1]; } first = aldeia.alvoC.split('|'); tropas.x = first[0]; tropas.y = first[1]; tropas.spear = (spearN > parseInt(spear)) ? spear : spearN; tropas.sword = (swordN > parseInt(sword)) ? sword : swordN; tropas.axe = (axeN > parseInt(axe)) ? axe : axeN; tropas.archer = (archerN > parseInt(archer)) ? archer : archerN; tropas.spy = (spyN > parseInt(spy)) ? spy : spyN; tropas.marcher = (marcherN > parseInt(marcher)) ? marcher : marcherN; tropas.light = (lightN > parseInt(light)) ? light : lightN; tropas.heavy = (parseInt(heavy) < heavyN) ? parseInt(heavy) : heavyN; tropas.ram = (ramN > parseInt(ram)) ? ram : ramN; tropas.catapult = (catapultN > parseInt(catapult)) ? catapult : catapultN; tropas.snob = (parseInt(snob) && parseInt(snobN)) ? 1 : 0; tropas["string"] = ""; if (snobN > 1 && parseInt(snob) > 1) { tropas.light = tropas.light ? tropas.light - (25 * parseInt(snob)) : 0; for (var k = 2; k <= snob && k <= snobN; k++) { tropas["string"] += "train[" + k + "][axe]=0&"; tropas["string"] += "train[" + k + "][marcher]=0&"; tropas["string"] += "train[" + k + "][light]="+(tropas.light ? 25 : 0)+"&"; tropas["string"] += "train[" + k + "][snob]=1"; if (k < snobN) { tropas["string"] += "&"; } } } if (comando == "attack") { tropas.attack = 'l'; } else if (comando == "support") { tropas.support = 'l'; } else { UI.ErrorMessage("Tipo de comando não especificado!"); throw error; } aldeia.data = tropas; i++; } else { removeVillage(aldeia.id); console.log("First Request: " + data.error); } if (i == aldeias.length) { secondRequest(); } }, error: function(data) { console.log("Error First Request: " + data.status + " { " + data.error + " }"); if (data.status == 429 || data.status == 405) { console.log(data.status); removeVillage(aldeia.id); aldeiasAux.push(aldeia); aldeiasLength--; } else { alert("Programa caiu, erro inesperado: { " + data.error + " }"); throw error; } if (i == aldeias.length) { secondRequest(); } } }); }, random(200, 220) + (random(200, 220) * count)); count++; } }; secondRequest = function() { let count = 0, i = 0; if (deuError) { $('#combined_table tbody tr').remove(); $('#combined_table tbody').append('<tr id="listCommands"><td style="text-align:center;color: rgb(70, 39, 7);background-color: burlywood;font-size: x-large;">Aldeias Próprias</td><td style="text-align:center;color: rgb(70, 39, 7);background-color: burlywood;font-size: x-large;">Aldeias Alvos</td><td style="text-align:center;color: rgb(70, 39, 7);background-color: burlywood;font-size: x-large;">Duração</td><td style="text-align:center;color: rgb(70, 39, 7);background-color: burlywood;font-size: x-large;">Status</td></tr>'); } for (let aldeia of aldeias) { console.log(aldeia.data); setTimeout(function() { $.ajax({ type: "POST", url: "/game.php?village=" + aldeia.id + "&screen=place&ajax=confirm&h=" + csrf_token + "&client_time=" + Math.round(Timing.getCurrentServerTime() / 1e3), data: aldeia.data, dataType: "json", headers: { "TribalWars-Ajax": 1 }, success: function(data) { if (!data.error) { string = aldeia.data["string"]; aldeia.data = $(data.response.dialog).serialize() + ((string.length) ? ("&" + string) : ""); aldeia.time = jQuery('table.vis:eq(0) tr:eq(3) td:eq(1)', data.response.dialog).text(); $('#combined_table tbody').append('<tr><td style="text-align:center"><a href="/game.php?village=' + aldeia.id + '">' + aldeia.coord + '</a></td><td style="text-align:center"><a href="/game.php?village=' + game_data.village.id + '&screen=info_village&id=' + aldeia.alvoId + '">' + aldeia.alvoC + '</a></td><td style="text-align:center;">' + aldeia.time + '</td><td id="status"></td></tr>'); i++; } else { console.log("Second Request: " + data.error + " coord: " + aldeia.coord); removeVillage(aldeia.id); aldeiasLength--; } if (i == aldeias.length) { $('td#status').text("All Done"); $('#listCommands').append('<td><input id="Enviar" class="btn" name="x" type="submit" value="Enviar"></td>'); $('#listCommands').before('<p>Engatilhados ' + ($('td#status').length) + ' de ' + aldeiasLength + '</p>'); if (!deuError) { $('input#Enviar').click(function(e) { e.preventDefault(); thirdRequest(); }); } else { deuError = 0; thirdRequest(); } } }, error: function(data) { console.log("Error Second Request: " + data.status + " { " + data.error + " }"); if (data.status == 429 || data.status == 405) { removeVillage(aldeia.id); removeVillageAux(aldeia.id); aldeiasAux.push(aldeia); aldeiasLength--; } else { alert("Programa caiu, erro inesperado: { " + data.error + " }"); throw error; } if (i == aldeias.length) { $('td#status').text("All Done"); $('#listCommands').append('<td><input id="Enviar" class="btn" name="x" type="submit" value="Enviar"></td>'); $('#listCommands').before('<p>Engatilhados ' + ($('td#status').length) + ' de ' + aldeiasLength + '</p>'); if (!deuError) { $('input#Enviar').click(function(e) { e.preventDefault(); thirdRequest(); }); } else { deuError = 0; thirdRequest(); } } } }); }, random(200, 220) + (random(200, 220) * count)); count++; } }; thirdRequest = function() { let count = 0, i = 0, aux = 1; for (let aldeia of aldeias) { setTimeout(function() { $.ajax({ url: "/game.php?village=" + aldeia.id + "&screen=place&ajaxaction=popup_command&h=" + csrf_token + "&client_time=" + Math.round(Timing.getCurrentServerTime() / 1e3), data: aldeia.data, type: "POST", dataType: "json", headers: { "TribalWars-Ajax": 1 }, success: function(data) { if (!data.error) { $('#combined_table tbody tr:eq(' + aux + ') td:eq(3)').text('ENVIADO!').css("text-align", "center").css("background-color", "#adff2f"); removeVillage(aldeia.id); } else if (data.error != _("9a07c3a91c3f2b7a6a8bc675d1bcb913")) { $('#combined_table tbody tr:eq(' + aux + ') td:eq(3)').text('Erorr!').css("text-align", "center").css("background-color", "#ff1313"); removeVillage(aldeia.id); console.log("Third Request: " + data.error); } else { $('#combined_table tbody tr:eq(' + aux + ') td:eq(3)').text('ERROR 5 COMMANDS!').css("text-align", "center").css("background-color", "#ff1313"); console.log("Third Request 2: " + data.error); } i++; aux++; console.log("aldeiasLength == " + aldeiasLength + " i == " + i); if (!aldeias.length) { alert('Todos os comandos foram enviados!'); } else if (aldeiasLength == i) { aldeias = $.merge(aldeias, aldeiasAux); console.dir(aldeias); deuError = 1; firstRequest(); } }, error: function(data) { console.log("Error Third Request: " + data.status + " { " + data.error + " }"); if (data.status == 429 || data.status == 405) { removeVillage(aldeia.id); removeVillageAux(aldeia.id); aldeiasAux.push(aldeia); aldeiasLength--; } else { alert("Programa caiu, erro inesperado: { " + data.error + " }"); throw error; } console.log("aldeiasLength == " + aldeiasLength + " i == " + i); if (!aldeias.length) { alert('Todos os comandos foram enviados!'); } else if (aldeiasLength == i) { aldeias = $.merge(aldeias, aldeiasAux); console.dir(aldeias); deuError = 1; firstRequest(); } } }); console.log(random(250, 280) + (random(250, 280) * count)); }, random(250, 280) + (random(250, 280) * count)); count++; } }; random = function(inferior, superior) { var numPossibilidades = superior - inferior, aleat = Math.random() * numPossibilidades; return Math.round(parseInt(inferior) + aleat); }; main = function() { var coords = getParam('coords'), comando = getParam('comando'), i, tropas = "", href, spearIndex, snobIndex; coords = (!coords) ? "" : coords; comando = (!comando) ? "" : comando; spearIndex = $('#combined_table tr:eq(0) th a img[src*="spear"]').parent().parent().index(); snobIndex = $('#combined_table tr:eq(0) th a img[src*="snob"]').parent().parent().index(); if ($("#combined_table tr:eq(0) th:eq(11) a").attr('href').indexOf("archer") == -1) { for (i = spearIndex; i <= snobIndex; i++) { href = $("#combined_table tr:eq(0) th:eq(" + i + ") a img").attr("src"); tropas += "<div class='itemTropa'><img src=" + href + ">" + "<input type='text' id='" + href.match(/unit_?[a-z]+/g)[0].split('_')[1] + "' size='5'/></div>"; } } else { for (i = spearIndex; i <= snobIndex; i++) { href = $("#combined_table tr:eq(0) th:eq(" + i + ") a img").attr("src"); tropas += "<div class='itemTropa'><img src=" + href + ">" + "<input type='text' id='" + href.match(/unit_?[a-z]+/g)[0].split('_')[1] + "' size='10'/></div>"; } } $('#overview_menu').after("<div style='width:98%;padding:1%;background:rgba(234, 199, 127, 0.64);' class='content-command'><h3 style='border-bottom: 1px solid #c3ab5a;color: #592805;PADDING-BOTTOM: 8px;'>COORDENADAS ALVO</h3><textarea name='coords' rows='10' style='width:99%;border-radius:5px;'>" + (!coords ? "" : coords) + "</textarea><br><div name='nCoords'></div><br><div style='display:block;padding-top:5px;padding-bottom:5px'><p style='float:left'>Tipo de Comando:</p>%C2%A0%C2%A0<select id='comando' style='float:left'><option disabled='disabled' " + ((comando == -1 || !comando) ? "selected='selected'" : "") + "></option><option value='attack'" + (comando == 'attack' ? "selected='selected'" : "") + ">Ataque</option><option value='support' " + (comando == 'support' ? "selected='selected'" : "") + ">Apoio</option></select></div><br><br><input type='submit' id='salvar' name='Att1' value='#SALVAR#' style='background:no-repeat 3px -74px, -webkit-gradient(linear, left top, left bottom, color-stop(0%,#b69471), color-stop(22%,#9f764d), color-stop(30%,#8f6133), color-stop(100%,#6c4d2d));color:white;display: inline-block;padding:3px;margin:0 2px;text-align: center;font-family: Verdana, Arial;font-size: 12px !important;font-weight: bold;line-height: normal;cursor: pointer;border-radius: 5px;border: 1px solid #000;color: #fff;white-space: nowrap;'/><input type='submit' name='send' value='#Enviar Comandos#' style='background:no-repeat 3px -74px, -webkit-gradient(linear, left top, left bottom, color-stop(0%,#b69471), color-stop(22%,#9f764d), color-stop(30%,#8f6133), color-stop(100%,#6c4d2d));color:white;display: inline-block;padding:3px;margin:0 2px;text-align: center;font-family: Verdana, Arial;font-size: 12px !important;font-weight: bold;line-height: normal;cursor: pointer;border-radius: 5px;border: 1px solid #000;color: #fff;white-space: nowrap;'/></div>"); $(".content-command").prepend("<div style='width:100%' class='tropas'><h3 style='border-bottom: 1px solid #c3ab5a;color: #592805;PADDING-BOTTOM: 8px;'>TROPAS</h3></div>"); $(".tropas").append("<div id='camposTropas' style='display:flex;flex-wrap: wrap;justify-content: space-around;'>" + tropas + "</div>"); $("input#salvar").click(function() { setParam('spear', $('#spear').val()); setParam('sword', $('#sword').val()); setParam('axe', $('#axe').val()); setParam('archer', $('#archer').val()); setParam('spy', $('#spy').val()); setParam('light', $('#light').val()); setParam('heavy', $('#heavy').val()); setParam('marcher', $('#marcher').val()); setParam('ram', $('#ram').val()); setParam('catapult', $('#catapult').val()); setParam('knight', $('#knight').val()); setParam('snob', $('#snob').val()); setParam('comando', $('#comando').val()); setParam('coords', $("textarea[name='coords']").val()); UI.InfoMessage("Configurações salvas!"); }); usefullVillages(); $('tr.nowrap').each(function(i) { $(this).find("td:eq(1)").prepend("<input type='checkbox' data-id='" + aldeias[i].id + "' data-coord='" + aldeias[i].coord + "' class='chkbox'/>"); }); $('.menu-side:eq(0)').after("<td class='qtdCheckbox' style='background: #0c0707;color: white;'></td>"); $('textarea[name=coords]').blur(function() { var valor = $('textarea[name=coords]').val(); $('div[name=nCoords]').html('Nº Alvos: ' + (valor ? valor.match(/[|]/g).length : 0)); }); $('textarea[name=coords]').change(function() { setParam('coordsRes', ''); }); $(".chkbox").change(function() { var qtcBoxChecked = $('.chkbox:checked').length; if (qtcBoxChecked) { $('.qtdCheckbox').html('Selecionados: ' + qtcBoxChecked); } else { $('.qtdCheckbox').html('Selecionados: 0'); } }); $('#spear').val(getParam('spear')); $('#sword').val(getParam('sword')); $('#axe').val(getParam('axe')); $('#archer').val(getParam('archer')); $('#spy').val(getParam('spy')); $('#light').val(getParam('light')); $('#heavy').val(getParam('heavy')); $('#marcher').val(getParam('marcher')); $('#ram').val(getParam('ram')); $('#catapult').val(getParam('catapult')); $('#knight').val(getParam('knight')); $('#snob').val(getParam('snob')); $("input[name='send']").click(function(e) { e.preventDefault(); if ($("input.chkbox:checked").length) { aldeias.splice(0, aldeias.length); $("input.chkbox:checked").each(function(k) { aldeias[k] = new Aldeia($(this).data("coord"), $(this).data('id')); }); } else { usefullVillages(); } sortCoords(); $('#combined_table tbody tr').remove(); $('#combined_table tbody').append('<tr id="listCommands"><td style="text-align:center;color: rgb(70, 39, 7);background-color: burlywood;font-size: x-large;">Aldeias Próprias</td><td style="text-align:center;color: rgb(70, 39, 7);background-color: burlywood;font-size: x-large;">Aldeias Alvos</td><td style="text-align:center;color: rgb(70, 39, 7);background-color: burlywood;font-size: x-large;">Duração</td><td style="text-align:center;color: rgb(70, 39, 7);background-color: burlywood;font-size: x-large;">Status</td></tr>'); firstRequest(); }); var lastChecked = null; var $chkboxes = $('.chkbox'); $chkboxes.click(function(e) { if (!lastChecked) { lastChecked = this; return; } if (e.shiftKey) { var start = $chkboxes.index(this); var end = $chkboxes.index(lastChecked); $chkboxes.slice(Math.min(start, end), Math.max(start, end) + 1).attr('checked', lastChecked.checked); } lastChecked = this; }); }; main(); } else { UI.ErrorMessage('Não autorizado!'); } })();]
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
  titulo.textContent = 'Tribuna Scripts - Versão 0.0.3';
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
