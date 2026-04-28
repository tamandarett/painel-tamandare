// DADOS
const TEAM_CONTACTS = { "Alexandre":{ email:"suporte@tamandaretintas.com.br", phone:"(19) 99328-5132", desc:"Suporte." }, "Ana Claudia":{ email:"anaclaudia@tamandaretintas.com.br", phone:"(19) 97131-7520", desc:"RH." }, "Carla":{ email:"carla@tamandaretintas.com.br", phone:null, desc:"Fiscal." }, "Daniel":{ email:"daniel@tamandaretintas.com.br", phone:null, desc:"Pagar." }, "Eduardo":{ email:"marketing@tamandaretintas.com.br", phone:null, desc:"Marketing." }, "Filipe":{ email:"filipe@tamandaretintas.com.br", phone:null, desc:"Comercial." }, "Junior":{ email:"junior@tamandaretintas.com.br", phone:null, desc:"Caixa/Receber." }, "Lançamento de Notas":{ email:"admloja3@tamandaretintas.com.br", phone:null, desc:"Estoque." } };
const TRAINING_DETAILS = { "Jornada Essencial Tamandaré Tintas": { description: "Cultura e atendimento.", modules: [ { title: "Módulo 1", link: "..." }, { title: "Módulo 2", link: "..." } ] }, "Abastecimento de Veículos": { description: "Ticketlog.", link: "..." }, "Cadastro de Clientes":{ description:"Regras.", link:"..." }, "Registro de Lacres":{ description:"Malotes.", link:"..." }, "GNRE":{ description:"Emissão.", link:"..." }, "Devolução e Recusa de Mercadorias": { description: "Fiscal.", link: "..." }, "Despesa de Viagem": { description: "Acertos.", link: "..." }, "Carta de Correção": { description: "Emissão.", link: "..." }, "Vendas e Transferência entre lojas": { description: "Movimentação.", link: "..." }, "Análise de Crédito": { description: "ACIAI.", link: "..." } };
const STORE_DETAILS = { "loja-morada":{ title:"02 - Morada", address:"Av. Ário Barnabé, 655", phones:["(19) 3935-9141"], whatsapp:"(19) 99328-6800" }, "loja-visconde":{ title:"05 - Visconde", address:"Av. Visconde de Indaiatuba, 441", phones:["(19) 3894-6112"], whatsapp:"19 99329-4193" }, "loja-vinhedo":{ title:"09 - Vinhedo", address:"Av. Saudade, 366", phones:["(19) 3030-3483"], whatsapp:"19 98610-8999" }, "loja-conceicao":{ title:"10 - Conceição", address:"Av. Conceição, 1178", phones:["(19) 3392-6690"], whatsapp:"(19) 99329-0533" }, "loja-elias":{ title:"12 - Elias Fausto", address:"R. XV de Novembro, 181", phones:["(19) 3821-2508"], whatsapp:"(19) 99329-7193" }, "loja-maria":{ title:"13 - Maria José", address:"Av. Fábio Ferraz Bicudo, 1329", phones:["(19) 3312-1933"], whatsapp:"(19) 99699 4383" }, "loja-paula":{ title:"14 - Paula Leite", address:"Av. Francisco de Paula Leite, 334", phones:["(19) 3825-1100"], whatsapp:"(19) 99711-7509" }, "loja-salto":{ title:"15 - Salto", address:"R. Nove de Julho, 1426", phones:["(11) 4029-1401"], whatsapp:"11 94289-3594" }, "loja-itu":{ title:"16 - Itu", address:"R. Arquiteto Márcio João de Arruda, 107", phones:["(11) 2222-3912"], whatsapp:"11 98830-4274" } };

// UTILITARIOS
const normalizar = (t) => String(t||"").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const toast = (m) => { const e = document.querySelector('.toast-notificacao'); e.innerText = m; e.classList.add('show'); setTimeout(() => e.classList.remove('show'), 3000); };
const copy = (t, b) => { navigator.clipboard.writeText(t).then(() => { const o = b.innerText; b.innerText = "Copiado!"; setTimeout(() => b.innerText = o, 2000); }); };

// ATUALIZADORES
function updateContactDetails() { const n = document.getElementById('contato-select').value; const d = document.getElementById('contato-details-display'); const c = TEAM_CONTACTS[n]; d.innerHTML = `<b>${n}</b><br>${c.email}<br><small>${c.desc}</small><br><button class="btn-primary" style="margin-top:8px; font-size:10px;" onclick="copy('${c.email}', this)">Copiar Email</button>`; d.style.display = 'block'; }
function updateTreinamentoDetails() { const k = document.getElementById('treinamento-select').value; const d = document.getElementById('treinamento-details-display'); const t = TRAINING_DETAILS[k]; let h = `<p>${t.description}</p>`; if(t.modules) t.modules.forEach(m => h += `<a href="${m.link}" target="_blank" class="btn-secondary" style="display:block; margin-top:5px; font-size:11px; width:100%;">${m.title}</a>`); else h += `<a href="${t.link}" target="_blank" class="btn-primary" style="display:block; margin-top:8px;">Ver Manual</a>`; d.innerHTML = h; d.style.display = 'block'; }
function updateLojaDetails() { const i = document.getElementById('loja-select').value; const d = document.getElementById('loja-details-display'); const s = STORE_DETAILS[i]; const r = `${s.title}\n${s.address}\nFone: ${s.phones[0]}`; d.innerHTML = `<b>${s.title}</b><br><small>${s.address}</small><br>Fone: ${s.phones[0]}<br><button class="btn-primary" style="margin-top:8px; font-size:10px;" onclick="copy(\`${r}\`, this)">Copiar Dados</button>`; d.style.display = 'block'; }

// BUSCA
let motor = null;
async function carregarBase() { try { const r = await fetch("https://script.google.com/macros/s/AKfycbzgVw2IXifIBFgHGzlKqQ3kmHBQxuVHDuta2h5neJzwvPQsb3eaLADS0kJ6GrPBxKs/exec"); const data = await r.json(); motor = new Fuse(data, { keys: ['titulo', 'palavras_chave'], threshold: 0.3, getFn: (o, p) => normalizar(o[p[0]]) }); } catch(e){} }
function buscar() { const p = document.getElementById("pergunta").value; if(!p) return; const res = motor.search(normalizar(p)).slice(0, 5); const div = document.getElementById("resultado"); div.innerHTML = res.map(r => `<div class="card-resultado"><span class="area-tag">${r.item.area}</span><h3>${r.item.titulo}</h3><p style="font-size:11px;">${r.item.resumo}</p>${r.item.manual_url ? `<a href="${r.item.manual_url}" target="_blank" class="btn-primary" style="margin-top:5px; font-size:10px;">PDF</a>`:''}</div>`).join(''); div.style.display = 'block'; document.getElementById("btnLimpar").style.display = 'block'; }
function limparBusca() { document.getElementById("pergunta").value = ""; document.getElementById("resultado").style.display = 'none'; document.getElementById("btnLimpar").style.display = 'none'; }

// DATA, HORA E CLIMA
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString('pt-BR');
    document.getElementById('date').innerText = now.toLocaleDateString('pt-BR', {day:'2-digit', month:'2-digit'});
}

async function getWeather() {
    navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
            const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const d = await r.json();
            document.getElementById('temp').innerText = `${Math.round(d.current_weather.temperature)}°C`;
        } catch(e) { document.getElementById('temp').innerText = "Indisponível"; }
    });
}

// TAREFAS
let tarefas = JSON.parse(localStorage.getItem('tt_tasks')) || [];
function renderTarefas() { const l = document.getElementById('todo-list'); l.innerHTML = ''; tarefas.sort((a,b)=>a.done-b.done).forEach((t,i)=>{ const li = document.createElement('li'); li.className = `todo-item ${t.done?'done':''}`; li.innerHTML = `<input type="checkbox" ${t.done?'checked':''} onclick="toggleT(${i})"><span onclick="toggleT(${i})">${t.texto}</span><i class="fa-solid fa-trash-can" onclick="removeT(${i})"></i>`; l.appendChild(li); }); localStorage.setItem('tt_tasks', JSON.stringify(tarefas)); }
function addTarefa() { const i = document.getElementById('todo-input'); if(!i.value) return; tarefas.push({texto:i.value, done:false}); i.value=''; renderTarefas(); }
function toggleT(i) { tarefas[i].done = !tarefas[i].done; renderTarefas(); }
function removeT(i) { tarefas.splice(i, 1); renderTarefas(); }
function limparConcluidas() { tarefas = tarefas.filter(t=>!t.done); renderTarefas(); }

// INIT
document.addEventListener('DOMContentLoaded', () => {
    carregarBase(); renderTarefas(); updateClock(); getWeather();
    setInterval(updateClock, 1000);
});
