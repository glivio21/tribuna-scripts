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

  // Obtem tema salvo ou padrão 'dark'
  let currentTheme = localStorage.getItem('twBarraTheme') || 'dark';
  const theme = themes[currentTheme];

  // Ícones padrão
  const icons = {
    padrao: "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png",
    edificios: "https://icons.iconarchive.com/icons/icondigest/main-street/32/Cradle-of-learning-icon.png",
    tribo: "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png",
    ofensivo: "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png",
    defensivo: "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png",
    recurso: "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png",
    calc: "https://icons.iconarchive.com/icons/be-os/be-box/32/Clock-icon.png",
    outrosServicos: "https://i.ibb.co/2YmvSFmb/logo-ttw-2.png"
  };

const iconePadrao = "https://icons.iconarchive.com/icons/be-os/be-box/32/Be-IDE-icon.png";
const iconeEdificio = "https://icons.iconarchive.com/icons/icondigest/main-street/32/Cradle-of-learning-icon.png";
const iconeTribo = "https://icons.iconarchive.com/icons/iconfactory/sketchcons/32/smiley-icon.png";
const iconeOfensivo = "https://icons.iconarchive.com/icons/calle/smith-and-wesson/32/Target-icon.png";
const iconeDefensivo = "https://icons.iconarchive.com/icons/be-os/be-box/32/APPS-Stop-icon.png";
const iconeRecurso = "https://icons.iconarchive.com/icons/be-os/be-box/32/APP-Server-icon.png";
const iconeCalc = "https://icons.iconarchive.com/icons/be-os/be-box/32/Clock-icon.png";


 // ====== Categorias e scripts ======
  const categorias = [
    {
      titulo: '🏰 Edifícios',
      icone: iconeEdificio,
      scripts: [
        ["Bem Vindo", "https://icons.iconarchive.com/icons/be-os/be-box/32/Flash-Updater-icon.png", "{game}?screen=welcome&intro=1&oscreen=overview"],
["Edifício Principal", iconeEdificio, "{game}?screen=main"],
["Praça de Reunião", "https://icons.iconarchive.com/icons/icondigest/main-street/32/Pow-wow-icon.png", "{game}?screen=place"],
["Ferreiro", "https://icons.iconarchive.com/icons/icondigest/main-street/32/Three-Mile-Island-icon.png", "{game}?screen=smith"],
["Mercado", "https://icons.iconarchive.com/icons/calle/the-village/32/Joes-Bar-icon.png", "{game}?screen=market"],
["Academia", "https://icons.iconarchive.com/icons/calle/royal-red-system/32/3817-icon.png", "{game}?screen=snob"],
["Estátua", "https://icons.iconarchive.com/icons/iconfactory/copland-6/32/Statue-of-Liberty-icon.png", "{game}?screen=statue"],
["Recrutar Tropas", "https://icons.iconarchive.com/icons/calle/black-knight/32/Swords-icon.png", "{game}?screen=train"],
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
        
////* CÃ³digo do programa *////

var world = String(location.href).split(/[/:.]+/)[1]
var world_number = Number(world.substring(2))

function iT(nr, linha) {
    var html = '';
    if (settings[0]) html += '<span style="float: right;">';
    settings[1].forEach(function(nome, num) {
        html += '<button type="button" id="opt' + nr + '_' + num + '" class="btn" title="' + settings[0][num] + '" style="color: ' + getFon(num) + '; font-size: ' + getSize() + 'px !important; background: linear-gradient(to bottom, ' + getTop(num) + ' 30%, ' + getBot(num) + ' 10%)">' + nome + '</button>';
    })
    html += '</span>';
    $(linha).find('.quickedit-content').append(html);
    settings[0].forEach(function(nome, num) {
        if (nome.indexOf('|') == -1) {
            $('#opt' + nr + '_' + num).click(function() {
                $(linha).find('.rename-icon').click();
                $(linha).find('input[type=text]').val($(linha).find('input[type=text]').val().split(" ")[0] + ' ' + settings[0][num]);
                $(linha).find('input[type=button]').click();
                iT(nr, linha);
            });
        } else if (nome.indexOf('|')) {
            $('#opt' + nr + '_' + num).click(function() {
                $(linha).find('.rename-icon').click();
                $(linha).find('input[type=text]').val($(linha).find('input[type=text]').val() + settings[0][num]);
                $(linha).find('input[type=button]').click();
                iT(nr, linha);
            });
        }
    });
}

function getTop(num) {
    var index = colors[0].indexOf(settings[2][num])
    if (settings[2][num]) {
        return colors[1][index];
    } else {
        return '#b69471';
    }
}

function getBot(num) {
    var index = colors[0].indexOf(settings[2][num])
    if (settings[2][num]) return colors[2][index];
    else return '#6c4d2d';
}

function getFon(num) {
    var index = colors[0].indexOf(settings[3][num])
    if (settings[3][num]) return colors[1][index];
    else return '#ffffff';
}

function getSize() {
    if (tamanho_letra) return tamanho_letra;
    else return 12;
}

if (location.href.indexOf("screen=overview_villages") == -1 && location.href.indexOf("mode=incomings&subtype=attacks") == -1) {
    $('#commands_incomings .command-row').each(function(nr, linha) {
        if (!isSupport(linha)) iT(nr, linha, true);
    });
} else {
    setInterval(function() {
        $('#incomings_table tr.nowrap').each(function(nr, linha) {
            if (!isSupport(linha)) {
                var name = $.trim($(linha).find('.quickedit-label').text())
                var code = settings[0].indexOf(name.indexOf(" ") >= 0 ? name.substr(name.indexOf(" ") + 1) : name)
                var dual = check(name)
                var codes = []
                codes[0] = check(name, 1);
                codes[1] = check(name, 2);
                if (code != -1) {
                    var colorcode = settings[2][code]
                    var color = colors[1][colors[0].indexOf(colorcode)]
                    if (pagina_de_ataques === 'linha') {
                        $(linha).find('td').each(function(nr, td) {
                            $(td).attr('style', 'background: ' + color + ' !important;')
                        })
                    } else if (pagina_de_ataques === 'coluna') {
                        $(linha).find('td:eq(0)').attr('style', 'background: ' + color + ' !important;')
                        $(linha).find('a:eq(0)').attr('style', 'color: white !important; text-shadow:-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;')
                    }
                } else if (dual) {
                    console.log(codes, nr)
                    var colorcode1 = settings[2][codes[0]]
                    var colorcode2 = settings[2][codes[1]]
                    var color1 = colors[1][colors[0].indexOf(colorcode1)]
                    var color2 = colors[1][colors[0].indexOf(colorcode2)]
                    var textcolor = colors[1][colors[0].indexOf('white')]
                    var strokecolor = colors[1][colors[0].indexOf('black')]
                    if (pagina_de_ataques === 'linha') {
                        $(linha).find('td').each(function(nr, td) {
                            $(td).attr('style', 'background: repeating-linear-gradient(45deg, ' + color1 + ', ' + color1 + ' 10px, ' + color2 + ' 10px, ' + color2 + ' 20px) !important;')
                        })
                    } else if (pagina_de_ataques === 'coluna') {
                        $(linha).find('td:eq(0)').attr('style', 'background: repeating-linear-gradient(45deg, ' + color1 + ', ' + color1 + ' 10px, ' + color2 + ' 10px, ' + color2 + ' 20px) !important;')
                        $(linha).find('a:eq(0)').attr('style', 'color: ' + textcolor + ' !important; text-shadow:-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;')
                    }
                } else {
                    if (pagina_de_ataques === 'linha') {
                        $(linha).find('td').each(function(nr, td) {
                            $(td).attr('style', 'background: ' + colors[2][colors[0].indexOf('red')] + ' !important;')
                        })
                        $(linha).find('a').each(function(nr, td) {
                            $(td).attr('style', 'color: ' + colors[2][colors[0].indexOf('white')] + ' !important;')
                        })
                    } else if (pagina_de_ataques === 'coluna') {
                        $(linha).find('td:eq(0)').attr('style', 'background: ' + colors[2][colors[0].indexOf('red')] + ' !important;')
                        $(linha).find('a:eq(0)').attr('style', 'color: white !important; text-shadow:-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;')
                    }
                }
            } else {
                if (pagina_de_ataques === 'linha') {
                    $(linha).find('td').each(function(nr, td) {
                        $(td).attr('style', 'background: ' + colors[2][colors[0].indexOf('yellow')] + ' !important;')
                    })
                    $(linha).find('a').each(function(nr, td) {
                        $(td).attr('style', 'color: ' + colors[2][colors[0].indexOf('white')] + ' !important;')
                    })
                } else if (pagina_de_ataques === 'coluna') {
                    $(linha).find('td:eq(0)').attr('style', 'background: ' + colors[2][colors[0].indexOf('yellow')] + ' !important;')
                    $(linha).find('a:eq(0)').attr('style', 'color: white !important; text-shadow:-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;')
                }
            }
        })
    }, 250)
}

function check(name, nr) {
    var i, j;
    for (i = 0; i < settings[0].length; i++) {
        for (j = 0; j < settings[0].length; j++) {
            if (name.indexOf(settings[0][i] + settings[0][j]) != -1) {
                if (nr == 1) return i;
                else if (nr == 2) return j;
                else return true;
            }
        }
    }
    return false;
}

function isSupport(linha) {
    var scr = $(linha).find('img:eq(0)').attr('src')
    if (scr.indexOf('support') >= 0) return true;
    return false;
}
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
            let outH=h1-h2, outM=m1-m2, outS=s1-s2;
            if(outS<0){outM--; outS+=60;} if(outM<0){outH--; outM+=60;} if(outH<0){outH+=24;}
            outH=('0'+outH).slice(-2); outM=('0'+outM).slice(-2); outS=('0'+outS).slice(-2);
            $("#resultado").append("<br>Out: "+outH+":"+outM+":"+outS+" (Tempo até sair)");
          }
          if(!document.getElementById('btCalc')){
            $("body").append(`
              <div style="padding:10px; background:${theme.panelBg}; color:${theme.fg}; border:1px solid ${theme.panelBorder}; border-radius:4px; margin:10px;">
                <label>Hora Chegada: <input id="bt1" type="text" placeholder="HH:MM:SS"></label><br>
                <label>Tempo Viagem: <input id="bt2" type="text" placeholder="HH:MM:SS"></label><br>
                <button id="btCalc">Calcular</button><br>
                <div id="resultado" style="margin-top:10px;"></div>
              </div>`);
            $("#btCalc").click(calcular);
          }
        }]
      ],
    },
    {
  titulo: '📢 Outros Serviços',
  icone: 'https://i.ibb.co/2YmvSFmb/logo-ttw-2.png',
  scripts: [
    ["🎓 Acessar Curso", "https://icons.iconarchive.com/icons/bokehlicia/captiva/32/rocket-icon.png", "https://hotmart.com/pt-br/marketplace/produtos/curso-de-tribal-wars/U96903865S"],
    ["🧿 Obsidian Scripts", "https://icons.iconarchive.com/icons/simpleicons-team/simple/32/obsidian-icon.png", "https://www.obsidiantribal.com/"],
    ["📺 Canal Tribuna", "https://icons.iconarchive.com/icons/danleech/simple/32/youtube-icon.png", "https://www.youtube.com/@tribunatribalwars"],
    ["🛠️ Ver Serviços", "https://icons.iconarchive.com/icons/bokehlicia/captiva/32/steam-icon.png", "https://tribunatw.com/services"],
    ["💬 Entrar no Discord", "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/32/discord-icon.png", "https://discord.gg/kwTUFCyFRA"],
    ["📱 Grupo WhatsApp", "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/32/whatsapp-icon.png", "https://chat.whatsapp.com/LJf55XqXUC6CgURf1dPBkM"]
  ]
}
  ];

  // Cria e estiliza o container do menu
  const menu = document.createElement('div');
  menu.id = SCRIPT_ID;
  aplicarEstiloMenu();
  
  function aplicarEstiloMenu(){
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
  }

  // Renderiza cabeçalho com título e botão fechar
  function renderHeader(){
    const header = document.createElement('div');
    header.style = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;';
    
    const titulo = document.createElement('h2');
    titulo.textContent = 'Tribuna Scripts';
    titulo.style = `margin:0; color:${theme.fg};`;
    
    const btnClose = document.createElement('span');
    btnClose.textContent = '✖';
    btnClose.style = `cursor:pointer; font-weight:bold; font-size:18px; color:${theme.fg};`;
    btnClose.title = 'Fechar menu';
    btnClose.onclick = () => menu.remove();

    header.appendChild(titulo);
    header.appendChild(btnClose);
    menu.appendChild(header);
  }

  // Botão para alternar tema
  function renderThemeToggle(){
    const container = document.createElement('div');
    container.style = 'display:flex; gap:10px; margin-bottom:12px;';
    ['light', 'dark'].forEach(t => {
      const btn = document.createElement('button');
      btn.textContent = t === 'light' ? 'Modo Claro' : 'Modo Escuro';
      btn.style = `
        flex: 1; padding: 6px; border: 1px solid ${theme.panelBorder};
        cursor: pointer; background: ${currentTheme === t ? theme.fg : theme.panelBg};
        color: ${currentTheme === t ? theme.bg : theme.fg};
        border-radius: 5px;
        user-select: none;
      `;
      btn.onclick = () => {
        localStorage.setItem('twBarraTheme', t);
        location.reload();
      };
      container.appendChild(btn);
    });
    menu.appendChild(container);
  }

  // Renderiza lista de categorias (com ícones clicáveis)
  function renderCategorias(){
    limparMenu();
    renderHeader();
    renderThemeToggle();

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

  // Renderiza scripts da categoria com botão voltar
  function renderScripts(cat){
    limparMenu();
    renderHeader();
    renderThemeToggle();

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

      menu.appendChild(linha);
    });
  }

  // Limpa todo conteúdo do menu
  function limparMenu(){
    menu.innerHTML = '';
  }

  // Executa script, aceitando string (url), javascript embutido, ou função
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

  // Iniciar menu
  renderCategorias();
  document.body.appendChild(menu);

})();
