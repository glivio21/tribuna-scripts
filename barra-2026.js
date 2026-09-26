javascript:(() => {
    const ID = 'tw-barra-tribuna';
    const VERSION = '0.0.5';
    const THEME_KEY = 'twBarraTheme';
    const POS_KEY = 'twBarraPos';
    const FONT = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

    if ($(`#${ID}`).length) return $(`#${ID}, #${ID}-style`).remove();

    const IA = path => `https://icons.iconarchive.com/icons/${path}`;
    const IMG = {
        ide: IA('be-os/be-box/32/Be-IDE-icon.png'),
        updater: IA('be-os/be-box/32/Flash-Updater-icon.png'),
        target: IA('calle/smith-and-wesson/32/Target-icon.png'),
        stop: IA('be-os/be-box/32/APPS-Stop-icon.png'),
        server: IA('be-os/be-box/32/APP-Server-icon.png'),
        smiley: IA('iconfactory/sketchcons/32/smiley-icon.png'),
        logo: 'https://i.ibb.co/2YmvSFmb/logo-ttw-2.png',
    };

    const svg = d => `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
    const ICON = {
        close: svg('<path d="M18 6 6 18M6 6l12 12"/>'),
        back: svg('<path d="m15 18-6-6 6-6"/>'),
        search: svg('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'),
        sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
        moon: svg('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>'),
    };

    const CATEGORIES = [
        {
            title: 'Edifícios',
            icon: IA('icondigest/main-street/32/Cradle-of-learning-icon.png'),
            scripts: [
                ['Bem Vindo', '{game}?screen=welcome&intro=1&oscreen=overview', IMG.updater],
                ['Edifícios', 'https://twscripts.dev/scripts/redirector.js'],
                ['Recrutar Tropas', '{game}?screen=train', IA('calle/black-knight/32/Swords-icon.png')],
                ['Torre Simulator', 'https://twscripts.dev/scripts/watchtowerEvolved.js', IA('icondigest/main-street/32/In-days-of-yore-icon.png')],
                ['Treinar Paladinos', 'https://twdevtools.github.io/approved/scripts/training.js', IMG.updater],
            ],
        },
        {
            title: 'Configuração',
            icon: IMG.ide,
            scripts: [
                ['Mostrar Pontos dos Edifícios', 'https://almis90.github.io/tw-scripts/building-points.js'],
                ['Notas Manager', 'https://twscripts.dev/scripts/ownNotesManager.js'],
                ['ADD/DEL Grupos', 'https://toxicdonut.dev:8080/js/Toxic_Donut_s_Group_Placer.js'],
                ['Adicionar Amigos', 'https://twscripts.dev/scripts/friendRequest.js'],
                ['Renomeador de Aldeias', 'https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/TsalkaponeVillageRenamer.js'],
                ['Renomeador GOD de Aldeias', "javascript:(function(){if(!window.location.href.includes('mode=prod')){if(confirm('Você não está na tela certa. Ir agora para a Visualização de Produção?')){window.location.href='game.php?screen=overview_villages&mode=prod';}return;}if(document.getElementById('renameGui')){return;}let gui=document.createElement('div');gui.id='renameGui';gui.style.position='fixed';gui.style.top='100px';gui.style.left='50%';gui.style.transform='translateX(-50%)';gui.style.background='#222';gui.style.padding='10px';gui.style.border='2px solid #666';gui.style.borderRadius='10px';gui.style.zIndex=9999;gui.style.boxShadow='0px 0px 15px rgba(0,0,0,0.8)';gui.innerHTML=`<label style=\"color:#eee;\"><b>Nome da aldeia:</b></label><input id=\"villageBaseName\" type=\"text\" style=\"width:150px;margin:5px 0;background:#333;color:#eee;border:1px solid #555;\"><br><label style=\"color:#eee;\"><input type=\"checkbox\" id=\"seqCheck\"> Adicionar numeração sequencial</label><br><label style=\"color:#eee;\"><b>Velocidade:</b></label><br><select id=\"speedSelect\" style=\"margin-top:5px;background:#333;color:#eee;border:1px solid #555;\"><option value=\"300\">🐢 Devagar</option><option value=\"150\" selected>⚖️ Médio</option><option value=\"50\">⚡ Rápido</option></select><br><button id=\"startRename\" style=\"margin-top:10px;padding:5px 10px;background:#555;color:#eee;border:1px solid #777;\">▶️ START</button><button id=\"closeGui\" style=\"margin-left:10px;padding:5px 10px;background:#555;color:#eee;border:1px solid #777;\">❌ Fechar</button><div style=\"margin-top:10px;font-size:11px;color:#aaa;\">Tribuna Tribal Wars</div>`;document.body.appendChild(gui);document.getElementById('closeGui').onclick=function(){gui.remove();};document.getElementById('startRename').onclick=function(){let name=document.getElementById('villageBaseName').value.trim();let useSeq=document.getElementById('seqCheck').checked;let speed=parseInt(document.getElementById('speedSelect').value);if(!name||name.length<3){alert('Nome deve ter ao menos 3 letras.');return;}let delay=0;document.querySelectorAll('#production_table tr').forEach((row,i)=>{if(i===0)return;setTimeout(()=>{let icon=row.querySelector('.rename-icon');if(icon)icon.click();let input=row.querySelector('.quickedit-edit input[type=text]');let btn=row.querySelector('.quickedit-edit input[type=button]');if(input&&btn){input.value=name+(useSeq?(' '+String(i).padStart(2,'')):'');btn.click();}},delay+=speed);delay+=speed;});gui.remove();};})();"],
                ['Contador de Tropas 1', 'https://twscripts.dev/scripts/countHomeTroops.js'],
                ['Contador de Tropas 2', 'https://twscripts.dev/scripts/troopsCounterFixed.js'],
                ['Contador de Tropas 3', 'https://dl.dropboxusercontent.com/s/75jut7q397e03e5/troop_counter.js'],
                ['Contador de Grupos', 'https://dl.dropboxusercontent.com/s/ry6d9uu2m0mcxsb/group%20counts.js'],
                ['Histórico PPs', 'https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/PPPurchaseHistoryScript.js'],
                ['Coletor Coords Perfil', 'https://shinko-to-kuma.com/scripts/findNonAttackedVillages.js'],
                ['Coletor Coords Mapa', 'https://media.innogames.com/com_DS_NL/scripts/Multicollor-Coordgrab_207233_f7gcp9yt.js'],
                ['Coletor Coords Speed', () => {
                    if (!location.href.includes('screen=info_player')) return UI.ErrorMessage('Execute o script no perfil de algum jogador');
                    const all = [];
                    const byContinent = {};
                    $('td').filter((_, td) => /^\d+\|\d+$/.test(td.innerHTML)).each((_, td) => {
                        const xy = td.innerHTML;
                        const [x, y] = xy.split('|').map(Number);
                        const entry = `${$(td).parent().find('span.village_anchor.contexted').attr('data-id')}&${xy}`;
                        const k = Math.floor(x / 100) + Math.floor(y / 100) * 10;
                        all.push(entry);
                        (byContinent[k] = byContinent[k] || []).push(entry);
                    });
                    const area = list => `<textarea cols="80" rows="10">${list.join(',')}</textarea>`;
                    const sections = Object.keys(byContinent).sort((a, b) => a - b)
                        .map(k => `<br><br>Aldeias do Continente ${k}<br>${area(byContinent[k])}`).join('');
                    const popup = window.open('about:blank', 'twcc', 'width=720,height=480,scrollbars=1');
                    popup.document.open('text/html', 'replace');
                    popup.document.write(`<html><head><title>Coletor de Coordenadas</title><meta charset="UTF-8"></head><body><b>Coletor de Coordenadas</b><hr>Todas as Aldeias do Jogador:<br>${area(all)}${sections}</body></html>`);
                    popup.document.close();
                }],
                ['Filtrar Coordenadas', () => fetch('https://raw.githubusercontent.com/glivio21/Filtrar-Coordenadas/main/coord-filter.js')
                    .then(res => res.text())
                    .then(code => Function(code)())
                    .catch(err => UI.ErrorMessage(`Erro ao carregar script: ${err.message}`))],
                ['Filtrar Relatórios', 'https://twscripts.dev/scripts/advancedReportFilters.js'],
                ['Filtrar Aldeias Front', 'https://twscripts.dev/scripts/findFrontlineVillages.js'],
                ['Template de Tropas (GC)', 'https://twscripts.dev/scripts/troopTemplatesManager.js'],
            ],
        },
        {
            title: 'Ofensivos',
            icon: IMG.target,
            scripts: [
                ['Calculadora de Ataques nas Bárbaras', 'https://twscripts.dev/scripts/lastTimeAttacked.js'],
                ['Calculadora de MS (Confirmar Ataque)', () => {
                    if ($('#serverMs').length) return;
                    const stamp = () => {
                        const d = $('#serverDate').text().match(/(..)\/(..)\/(....)/);
                        return `${d[3]}-${d[2]}-${d[1]} ${$('#serverTime').text()}`;
                    };
                    const tick = base => setInterval(() => {
                        const ms = (1000 + new Date().getMilliseconds() - base) % 1000;
                        $('#serverMs').text(`:${`00${ms}`.slice(-3)}`);
                    }, 80);
                    $('#date_arrival').append('<span id="serverMs" style="color:black;font-weight:bold"></span>');
                    let last = stamp();
                    const sync = setInterval(() => {
                        const now = stamp();
                        if (now === last) return;
                        clearInterval(sync);
                        tick(new Date().getMilliseconds());
                    }, 20);
                }],
                ['Coletar de Coordenadas (Perfil Player)', 'https://tylercamp.me/tw/get-coords.js'],
                ['Todos os Ataques Enviados (Perfil Player)', 'https://twscripts.dev/scripts/getIncsForPlayer.js'],
                ['Planejador de Ataques Individual', 'https://twscripts.dev/scripts/singleVillagePlanner.js'],
                ['Planejador de Ataques em Massa', 'https://twscripts.dev/scripts/massCommandTimer.js'],
                ['Planejador de Ataques em Massa 2', 'https://twscripts.dev/scripts/massAttackPlanner.js'],
                ['Planejador de Ataques', 'https://twdevtools.github.io/approved/scripts/planner.js'],
                ['Fake NT (Confirmar Ataque)', 'https://twscripts.dev/scripts/evolvedFakeTrain.js'],
                ['Exibir Comandos (Confirmar Ataque)', 'https://media.innogames.com/com_DS_NL/scripts/ConfirmEnhancer_206293.js'],
                ['Temporizador (Confirmar Ataque)', 'https://twscripts.dev/scripts/obfsucated/commandTimer.min.js'],
                ['Quebrar Muralha', 'https://twscripts.dev/scripts/clearBarbarianWalls.js'],
                ['Barbs Finder', 'https://twscripts.dev/scripts/barbsFinder.js'],
                ['Bônus Finder', 'https://twscripts.dev/scripts/bonusFinderEvolved.js'],
            ],
        },
        {
            title: 'Defensivos',
            icon: IMG.stop,
            scripts: [
                ['Calculadora de Snip + Aflição', 'https://dl.dropboxusercontent.com/s/5f0ewzcwkh39pau/TESTE12.js'],
                ['Calculadora de Snip Individual', 'https://twscripts.dev/scripts/singleVillageSnipe.js'],
                ['Calculadora de Snip Coletivo', 'https://twscripts.dev/scripts/villagesInRange.js'],
                ['Remover Tropas de Apoio', 'https://twscripts.dev/scripts/supportCounterEvolved.js'],
                ['Apoio em Massa', () => {
                    window.heavyCav = 4;
                    $.getScript('https://dl.dropboxusercontent.com/s/idwa7mmpn6nxl3l/supportSender.js?dl=0');
                }],
                ['Simulador Defensor de Ataques', 'https://twscripts.dev/scripts/defenseHealthCheck.js'],
                ['Ver Todos os Ataques', 'https://dl.dropbox.com/s/flt8iokmg7pomow/IncomingOpSpotter.js'],
                ['Visão Geral de Ataques', () => {
                    window.NOBLE_GAP = 100;
                    window.FORMAT = '%unit% | %sent%';
                    $.getScript('https://twscripts.dev/scripts/incomingsOverview.js');
                }],
                ['Devil DEF', 'https://media.innogames.com/com_DS_NL/scripts/Devils-Def-Pack_206163.js'],
            ],
        },
        {
            title: 'Recursos',
            icon: IMG.server,
            scripts: [
                ['Coleta em Massa', () => {
                    window.premiumBtnEnabled = false;
                    $.getScript('https://shinko-to-kuma.com/scripts/massScavenge.js');
                }],
                ['Desbloqueador de Coleta', 'https://twscripts.dev/scripts/massUnlockScav.js'],
                ['Organizador de Recursos', () => {
                    $.ajaxSetup({ dataType: 'script' });
                    $.getScript('https://www.minecraft.as/tw_scripts/outstanding_organizer.js');
                }],
                ['Calcular Recursos para Nobre', 'https://twscripts.dev/scripts/nobleCalculator.js'],
                ['Enviar Recursos', 'https://shinko-to-kuma.com/scripts/res-senderV2.js'],
                ['Balanceador de Recursos Shinko', () => {
                    window.settings = { highFarm: 23000, lowPoints: 2000, builtOutPercentage: .25, needsMorePercentage: .85 };
                    $.getScript('https://media.innogamescdn.com/com_DS_BR/Scripts/Aprovados/WarehouseBalancer.js');
                }],
                ['Balanceador de Recursos GOD', () => {
                    window.settings = { highFarm: 23000, lowPoints: 2000, builtOutPercentage: .25, needsMorePercentage: .85 };
                    $.getScript('https://dl.dropboxusercontent.com/s/bytvle86lj6230c/resBalancer.js?dl=0');
                }],
                ['Eficiência do Farm (Relatórios)', 'https://twscripts.dev/scripts/farmingEfficiencyCalculator.js'],
                ['Mint Helper', 'https://twscripts.dev/scripts/mintHelper.js'],
                ['Farm A/B/C', () => {
                    window.cookieName = 'fakeypress';
                    $.getScript('https://media.innogamescdn.com/com_DS_FR/Scripts/Pillage/fakeypress_lau.js');
                }],
                ['Farm LA (Assistente de Saque)', 'https://scripts.ibragonza.nl/enhancer/enhancer.js'],
                ['Farm GOD', 'https://higamy.github.io/TW/Scripts/Approved/FarmGodCopy.js'],
            ],
        },
        {
            title: 'Tribo',
            icon: IMG.smiley,
            scripts: [
                ['Aristocracia', 'https://shinko-to-kuma.com/scripts/overwatch.js'],
                ['Ver ataques na tribo', 'https://dl.dropboxusercontent.com/s/ikunxd5d59059b4/scriptMostrarAtaquesACaminho.js'],
                ['Ataques (Tribo) - Membros', 'https://dl.dropboxusercontent.com/s/oy16zihcrmtul4k/tribeinc.js'],
                ['Evolução (Tribo) - Membros', 'https://shinko-to-kuma.com/scripts/tribeStats.js'],
                ['Calcular Tropas da Tribo', 'https://shinko-to-kuma.com/scripts/tribeMembersTroopCalculator.js'],
                ['Análise de Tribos', 'https://twscripts.dev/scripts/tribeStatsTool.js'],
                ['Convidar P/ Tribo em Massa', 'https://twscripts.dev/scripts/inviteToTribe.js'],
                ['Gerar lista (Membros)', 'https://media.innogamescdn.com/com_DS_PL/skrypty/lista_mail.js'],
            ],
        },
        {
            title: 'Serviços',
            icon: IMG.logo,
            scripts: [
                ['Tribuna', 'https://www.youtube.com/@tribunatribalwars', IA('danleech/simple/32/youtube-icon.png')],
                ['Tribal Shop', 'https://www.tribalshop.com.br/', IA('bokehlicia/captiva/32/steam-icon.png')],
                ['Discord', 'https://discord.gg/kwTUFCyFRA', IA('papirus-team/papirus-apps/32/discord-icon.png')],
                ['WhatsApp', 'https://chat.whatsapp.com/LJf55XqXUC6CgURf1dPBkM', IA('papirus-team/papirus-apps/32/whatsapp-icon.png')],                
            ],
        },
    ];

    $(`<style id="${ID}-style">
        #${ID} {
            --bg: #0d0e11; --surface: #15171c; --hover: #1c1f26; --line: #262930; --line-hi: #3a3e47;
            --text: #d4d7dd; --muted: #6f7580; --accent: #a33b3b; --shadow: rgba(0, 0, 0, .55);
            position: fixed; top: 100px; left: 100px; z-index: 99999; width: 380px; max-height: 85vh;
            display: flex; flex-direction: column;
            background: var(--bg); color: var(--text); border: 1px solid var(--line); border-radius: 10px;
            box-shadow: 0 18px 40px var(--shadow);
            font: 12px/1.4 ${FONT}; text-align: left;
        }
        #${ID}[data-theme=light] {
            --bg: #f7f7f8; --surface: #ffffff; --hover: #eef0f3; --line: #dcdfe4; --line-hi: #c3c8d0;
            --text: #1d2027; --muted: #6b7280; --shadow: rgba(0, 0, 0, .18);
        }
        #${ID} * { box-sizing: border-box; margin: 0; }
        #${ID} svg { display: block; flex: none; }
        #${ID} img { flex: none; object-fit: contain; }
        #${ID} button { font: inherit; color: inherit; }
        #${ID} .tb-head {
            display: flex; align-items: center; gap: 10px;
            padding: 10px 12px; border-bottom: 1px solid var(--line); cursor: move; user-select: none;
        }
        #${ID} .tb-logo { width: 28px; height: 28px; border-radius: 6px; }
        #${ID} .tb-heading { flex: 1; min-width: 0; }
        #${ID} .tb-title { font-size: 13px; font-weight: 600; letter-spacing: .02em; }
        #${ID} .tb-sub { color: var(--muted); font-size: 11px; }
        #${ID} .tb-icon {
            width: 26px; height: 26px; display: grid; place-items: center; flex: none;
            background: none; border: 0; border-radius: 5px; color: var(--muted); cursor: pointer;
        }
        #${ID} .tb-icon:hover { color: var(--text); background: var(--surface); }
        #${ID} .tb-search { position: relative; padding: 10px 12px 0; }
        #${ID} .tb-search svg { position: absolute; left: 22px; top: 50%; margin-top: 5px; transform: translateY(-50%); color: var(--muted); pointer-events: none; }
        #${ID} .tb-search input {
            width: 100%; height: 32px; padding: 0 10px 0 32px;
            background: var(--surface); color: var(--text); border: 1px solid var(--line); border-radius: 6px; outline: none;
            font: inherit;
        }
        #${ID} .tb-search input::placeholder { color: var(--muted); }
        #${ID} .tb-search input:focus { border-color: var(--accent); }
        #${ID} .tb-nav { display: flex; align-items: center; gap: 8px; padding: 10px 12px 0; }
        #${ID} .tb-nav-title { font-weight: 600; }
        #${ID} .tb-body { flex: 1; min-height: 0; overflow: auto; padding: 10px 12px 12px; }
        #${ID} .tb-body::-webkit-scrollbar { width: 8px; }
        #${ID} .tb-body::-webkit-scrollbar-thumb { background: var(--line-hi); border-radius: 4px; }
        #${ID} .tb-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        #${ID} .tb-card {
            display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 12px 6px 10px;
            background: var(--surface); border: 1px solid var(--line); border-radius: 8px; cursor: pointer;
        }
        #${ID} .tb-card:hover { border-color: var(--line-hi); background: var(--hover); }
        #${ID} .tb-card img { width: 32px; height: 32px; }
        #${ID} .tb-card-title { font-weight: 600; text-align: center; }
        #${ID} .tb-card-count { color: var(--muted); font-size: 11px; }
        #${ID} .tb-list { display: flex; flex-direction: column; gap: 4px; }
        #${ID} .tb-item {
            display: flex; align-items: center; gap: 10px; width: 100%; padding: 7px 10px;
            background: var(--surface); border: 1px solid var(--line); border-radius: 6px; cursor: pointer; text-align: left;
        }
        #${ID} .tb-item:hover { border-color: var(--line-hi); background: var(--hover); }
        #${ID} .tb-item img { width: 20px; height: 20px; }
        #${ID} .tb-item-name { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        #${ID} .tb-item-cat { color: var(--muted); font-size: 11px; white-space: nowrap; }
        #${ID} .tb-empty { padding: 24px 0; color: var(--muted); text-align: center; }
    </style>`).appendTo('head');

    const $menu = $(`<div id="${ID}">
        <div class="tb-head">
            <img class="tb-logo" src="${IMG.logo}" alt="">
            <div class="tb-heading">
                <div class="tb-title">Tribuna Scripts</div>
                <div class="tb-sub">Versão ${VERSION}</div>
            </div>
            <button class="tb-icon tb-theme"></button>
            <button class="tb-icon tb-close" title="Fechar">${ICON.close}</button>
        </div>
        <div class="tb-search">
            ${ICON.search}
            <input type="text" placeholder="Buscar script">
        </div>
        <div class="tb-nav">
            <button class="tb-icon tb-back" title="Voltar">${ICON.back}</button>
            <span class="tb-nav-title"></span>
        </div>
        <div class="tb-body"></div>
    </div>`).appendTo('body');

    const $body = $menu.find('.tb-body');
    const $nav = $menu.find('.tb-nav');
    const $search = $menu.find('.tb-search input');
    const $theme = $menu.find('.tb-theme');

    let current = null;

    const storage = (key, value) => {
        try {
            if (value === undefined) return localStorage.getItem(key);
            localStorage.setItem(key, value);
        } catch {
            return null;
        }
    };

    const setTheme = theme => {
        $menu.attr('data-theme', theme);
        $theme.html(theme === 'dark' ? ICON.sun : ICON.moon).attr('title', theme === 'dark' ? 'Tema claro' : 'Tema escuro');
        storage(THEME_KEY, theme);
    };

    const image = src => $('<img alt="">').attr('src', src).on('error', e => $(e.target).css('visibility', 'hidden'));

    const exec = action => {
        if (typeof action === 'function') return action();
        if (action.startsWith('javascript:')) return (0, eval)(action.slice(11));
        if (action.includes('{game}')) return location.href = action.replace('{game}', location.pathname);
        if (/\.js(\?|$)/.test(action)) return $.getScript(action).fail(() => UI.ErrorMessage('Erro ao carregar o script'));
        window.open(action, '_blank');
    };

    const run = action => {
        try {
            exec(action);
        } catch (err) {
            UI.ErrorMessage(`Erro ao executar o script: ${err.message}`);
        }
    };

    const item = (script, cat, showCat) => $('<button class="tb-item">')
        .append(image(script[2] || cat.icon), $('<span class="tb-item-name">').text(script[0]).attr('title', script[0]))
        .append(showCat ? $('<span class="tb-item-cat">').text(cat.title) : null)
        .on('click', () => run(script[1]));

    const list = (entries, showCat) => entries.length
        ? $('<div class="tb-list">').append(entries.map(([script, cat]) => item(script, cat, showCat)))
        : $('<div class="tb-empty">Nenhum script encontrado</div>');

    const grid = () => $('<div class="tb-grid">').append(CATEGORIES.map(cat => $('<div class="tb-card">')
        .append(image(cat.icon), $('<span class="tb-card-title">').text(cat.title), $('<span class="tb-card-count">').text(`${cat.scripts.length} scripts`))
        .on('click', () => open(cat))));

    const render = () => {
        const query = $.trim($search.val()).toLowerCase();
        $nav.toggle(!!current && !query);
        $body.scrollTop(0);
        if (query) return $body.html(list(CATEGORIES.flatMap(cat => cat.scripts
            .filter(script => script[0].toLowerCase().includes(query))
            .map(script => [script, cat])), true));
        if (current) return $body.html(list(current.scripts.map(script => [script, current])));
        $body.html(grid());
    };

    const open = cat => {
        current = cat;
        $nav.find('.tb-nav-title').text(cat ? cat.title : '');
        render();
    };

    const restore = () => {
        const pos = JSON.parse(storage(POS_KEY) || 'null');
        if (!pos) return;
        const left = Math.min(Math.max(parseInt(pos.left) || 0, 0), innerWidth - $menu.outerWidth());
        const top = Math.min(Math.max(parseInt(pos.top) || 0, 0), innerHeight - 60);
        $menu.css({ left, top });
    };

    $menu.on('click', '.tb-close', () => $(`#${ID}, #${ID}-style`).remove());
    $menu.on('click', '.tb-back', () => open(null));
    $theme.on('click', () => setTheme($menu.attr('data-theme') === 'dark' ? 'light' : 'dark'));
    $search.on('input', render);
    $search.on('keydown', e => {
        if (e.key !== 'Escape') return;
        $search.val('');
        render();
    });

    if ($.fn.draggable) $menu.draggable({
        handle: '.tb-head',
        cancel: 'button',
        containment: 'window',
        stop: (_, ui) => storage(POS_KEY, JSON.stringify({ left: `${ui.position.left}px`, top: `${ui.position.top}px` })),
    });

    try {
        restore();
    } catch {
        storage(POS_KEY, '');
    }

    setTheme(storage(THEME_KEY) === 'light' ? 'light' : 'dark');
    open(null);
})();
