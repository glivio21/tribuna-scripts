javascript:(function(){
  const id = 'tw-scripts-unified-menu';
  if (document.getElementById(id)) return document.getElementById(id).remove();

  // ====== Tema ======
  let currentTheme = localStorage.getItem('twScriptsTheme') || 'light';
  const themes = {
    light: { bg:'#fff', fg:'#000', border:'#333', hover:'#eee', panelBg:'#fff', panelBorder:'#ccc' },
    dark:  { bg:'#000', fg:'#fff', border:'#000', hover:'#222', panelBg:'#000', panelBorder:'#444' }
  };
  const theme = themes[currentTheme];

  // ====== Cria menu ======
  const menu = document.createElement('div');
  menu.id = id;
  styleMenu();
  function styleMenu(){
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

  // ====== Dados das categorias ======
  const categorias = [
    { titulo:'🏰 Edifícios',           icone:iconeEdificio, scripts: [ /* ... seu array de scripts ... */ ] },
    { titulo:'⚙️ Configuração',        icone:iconePadrao,   scripts: [ /* ... */ ] },
    { titulo:'🤝 Tribo',               icone:iconeTribo,    scripts: [ /* ... */ ] },
    { titulo:'🎯 Ofensivos',           icone:iconeOfensivo, scripts: [ /* ... */ ] },
    { titulo:'🛑 Defensivos',          icone:iconeDefensivo,scripts: [ /* ... */ ] },
    { titulo:'⛏️ Recursos',            icone:iconeRecurso,  scripts: [ /* ... */ ] },
    { titulo:'🧮 Calculadora',         icone:iconeCalc,     scripts: [ /* ... */ ] }
  ];

  // ====== Execução ======
  function executarScript(s){
    const urlOrFunc = s[2];
    if (typeof urlOrFunc==='function') return urlOrFunc();
    if (urlOrFunc.startsWith('javascript:')) return eval(urlOrFunc.slice(11));
    if (urlOrFunc.includes('{game}')){
      const base=window.location.href.split('?')[0];
      return window.location.href=urlOrFunc.replace('{game}', base);
    }
    window.open(urlOrFunc,'_blank');
  }

  // ====== Renderização ======
  function clearMenu(){ menu.innerHTML=''; }
  function renderHeader(){
    const hdr = document.createElement('div');
    hdr.style='display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;';
    const title = document.createElement('h2');
    title.textContent='Tribuna Scripts';
    title.style=`margin:0;color:${theme.fg};`;
    const btnClose = document.createElement('span');
    btnClose.textContent='✖';
    btnClose.style=`cursor:pointer;font-size:18px;color:${theme.fg};`;
    btnClose.onclick=()=>menu.remove();
    hdr.appendChild(title);
    hdr.appendChild(btnClose);
    menu.appendChild(hdr);
  }
  function renderThemeToggle(){
    const ctr=document.createElement('div');
    ctr.style='display:flex;gap:6px;margin-bottom:8px;';
    ['light','dark'].forEach(t=>{
      const b=document.createElement('button');
      b.textContent=t==='light'?'Modo Claro':'Modo Escuro';
      b.style=`
        flex:1;
        padding:4px;
        background:${currentTheme===t?theme.fg:theme.panelBg};
        color:${currentTheme===t?theme.bg:theme.fg};
        border:1px solid ${theme.panelBorder};
        cursor:pointer;
      `;
      b.onclick=()=>{
        localStorage.setItem('twScriptsTheme',t);
        location.reload();
      };
      ctr.appendChild(b);
    });
    menu.appendChild(ctr);
  }
  function renderCategories(){
    clearMenu(); renderHeader(); renderThemeToggle();
    const grid=document.createElement('div');
    grid.style='display:flex;flex-wrap:wrap;gap:10px;';
    categorias.forEach(cat=>{
      const box=document.createElement('div');
      box.style=`
        display:flex;flex-direction:column;align-items:center;
        width:80px;padding:6px;border:1px solid ${theme.panelBorder};
        border-radius:6px;cursor:pointer;background:${theme.panelBg};
      `;
      box.onclick=()=>renderScripts(cat);
      const img=document.createElement('img');
      img.src=cat.icone; img.style='width:40px;height:40px;margin-bottom:4px;';
      const lbl=document.createElement('span');
      lbl.textContent=cat.titulo; lbl.style=`font-size:12px;color:${theme.fg};text-align:center;`;
      box.appendChild(img); box.appendChild(lbl);
      grid.appendChild(box);
    });
    menu.appendChild(grid);
  }
  function renderScripts(cat){
    clearMenu(); renderHeader(); renderThemeToggle();
    const backBtn=document.createElement('button');
    backBtn.textContent='← Voltar';
    backBtn.style='margin-bottom:8px;padding:4px;cursor:pointer;';
    backBtn.onclick=renderCategories;
    menu.appendChild(backBtn);
    const heading=document.createElement('h3');
    heading.textContent=cat.titulo;
    heading.style=`margin:4px 0 10px 0;color:${theme.fg};`;
    menu.appendChild(heading);
    cat.scripts.forEach(s=>{
      const row=document.createElement('div');
      row.style=`
        display:flex;align-items:center;padding:4px;margin-bottom:6px;
        border:1px solid ${theme.panelBorder};border-radius:4px;
        cursor:pointer;background:${theme.panelBg};
      `;
      row.onmouseenter=()=>row.style.background=theme.hover;
      row.onmouseleave=()=>row.style.background=theme.panelBg;
      row.onclick=()=>executarScript(s);
      const ico=document.createElement('img');
      ico.src=s[1]||iconePadrao; ico.style='width:24px;height:24px;margin-right:8px;';
      const txt=document.createElement('span');
      txt.textContent=s[0]; txt.style=`color:${theme.fg};`;
      row.appendChild(ico); row.appendChild(txt);
      menu.appendChild(row);
    });
  }

  // ====== Inicia ======
  renderCategories();
  document.body.appendChild(menu);
})();
