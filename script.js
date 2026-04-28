// ==========================================
// DADOS DO PAINEL
// ==========================================
const TEAM_CONTACTS = {
    "Alexandre":{ email:"suporte@tamandaretintas.com.br", phone:"(19) 99328-5132", desc:"Suporte Técnico, problemas com equipamentos, sistemas ou infraestrutura de rede." },
    "Ana Claudia":{ email:"anaclaudia@tamandaretintas.com.br", phone:"(19) 97131-7520", desc:"Departamento Pessoal (RH): Dúvidas sobre folha de pagamento, benefícios e regras trabalhistas." },
    "Carla":{ email:"carla@tamandaretintas.com.br", phone:null, desc:"Setor Financeiro / Fiscal: Assuntos relacionados a bancos, contabilidade e impostos." },
    "Daniel":{ email:"daniel@tamandaretintas.com.br", phone:null, desc:"Contas a Pagar, assistência técnica de produtos, e devolução de mercadorias para fornecedores." },
    "Eduardo":{ email:"marketing@tamandaretintas.com.br", phone:null, desc:"Marketing: Promoções, campanhas publicitárias e materiais de divulgação." },
    "Filipe":{ email:"filipe@tamandaretintas.com.br", phone:null, desc:"Questões, negociações ou propostas comerciais e assuntos gerais." },
    "Junior":{ email:"junior@tamandaretintas.com.br", phone:null, desc:"Operações relacionadas caixa, Contas a receber, problemas financeiros urgentes relacionados ao cliente." },
    "Lançamento de Notas":{ email:"admloja3@tamandaretintas.com.br", phone:null, desc:"Lançamentos / Estoque: Dúvidas sobre estoque lançado, notas lançadas e pagamentos a fornecedores." }
};

const TRAINING_DETAILS = {
    "Jornada Essencial Tamandaré Tintas": {
        description: "Estruturada para guiar você através dos pilares da Tamandaré Tintas: propósito, cultura, técnicas de comunicação e atendimento.",
        modules: [
            { title: "Módulo 1: Missão, Visão e Valores", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/compreendendo.html" },
            { title: "Módulo 2: Pilares do Atendimento", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/princ%C3%ADpiosdeumbomatendimento.html" },
            { title: "Módulo 3: Comunicação Eficaz", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/t%C3%A9cnicasdecomunica%C3%A7%C3%A3oeficaz.html" },
            { title: "Módulo 4: Comunicação Digital", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/comunicameiodigital.html" }
        ]
    },
    "Abastecimento de Veículos": { description: "Manual de procedimentos para abastecimento de veículos da frota via Ticketlog, incluindo regras de senha, KM e compra de óleo.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/abastecimento.html" },
    "Cadastro de Clientes":{ description:"Como cadastrar clientes corretamente, aplicar bloqueios e consultar informações.", link:"https://tamandarett.github.io/painel-tamandare/treinamentos/cadastrodeclientes.html" },
    "Registro de Lacres":{ description:"Sistema digital para registrar a numeração dos lacres dos malotes.", link:"https://tamandarett.github.io/painel-tamandare/treinamentos/lacres.html" },
    "GNRE":{ description:"Orientações para emissão da GNRE apenas quando necessária.", link:"https://tamandarett.github.io/painel-tamandare/treinamentos/gnre.html" },
    "Devolução e Recusa de Mercadorias": { description: "Diferenças entre recusa e devolução e regras de cada uma.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/devolucao.html" },
    "Despesa de Viagem": { description: "Regras para pagamento e baixas de despesas de viagem.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/despesasdeviagem.html" },
    "Carta de Correção": { description: "Manual de como emitir uma carta de correção.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/cce.html" },
    "Vendas e Transferência entre lojas": { description: "Regras para vendas e transferências entre lojas do grupo.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/vendasentrelojas.html" },
    "Análise de Crédito": { description: "Interprete os dados da ACIAI para análise de crédito segura.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/analisedecredito.html" }
};

const STORE_DETAILS = {
    "loja-morada":{ title:"Indaiatuba - Morada do Sol", address:"Av. Ário Barnabé, 655 - Morada do Sol", phones:["(19) 3935-9141","(19) 3935-9144"], email:"loja2@tamandaretintas.com.br", whatsapp:"(19) 99328-6800" },
    "loja-visconde":{ title:"Indaiatuba - Visconde", address:"Av. Visconde de Indaiatuba, 441 - Jd América", phones:["(19) 3894-6112","(19) 3885-4818"], email:"loja3@tamandaretintas.com.br", whatsapp:"19 99329-4193" },
    "loja-vinhedo":{ title:"Vinhedo", address:"Av. Saudade, N 366 - Jardim Alba", phones:["(19) 3030-3483"], email:"lojavinhedo@tamandaretintas.com.br", whatsapp:"19 98610-8999" },
    "loja-conceicao":{ title:"Indaiatuba - Conceição", address:"Av. Conceição, 1178 - Vila Maria Helena", phones:["(19) 3392-6690"], email:"loja10@tamandaretintas.com.br", whatsapp:"(19) 99329-0533" },
    "loja-elias":{ title:"Elias Fausto", address:"R. XV de Novembro, 181 – Centro", phones:["(19) 3821-2508"], email:"loja5@tamandaretintas.com.br", whatsapp:"(19) 99329-7193" },
    "loja-maria":{ title:"Indaiatuba - Maria José", address:"Av. Fábio Ferraz Bicudo, 1329", phones:["(19) 3312-1933"], email:"loja13@tamandaretintas.com.br", whatsapp:"(19) 99699 4383" },
    "loja-paula":{ title:"Indaiatuba - Paula Leite", address:"Av. Francisco de Paula Leite, 334", phones:["(19) 3825-1100","(19) 3834-1180"], email:"loja1@tamandaretintas.com.br", whatsapp:"(19) 99711-7509" },
    "loja-salto":{ title:"Salto", address:"R. Nove de Julho, 1426 - Vila Nova", phones:["(11) 4029-1401"], email:"loja8@tamandaretintas.com.br", whatsapp:"11 94289-3594" },
    "loja-itu":{ title:"Itu", address:"R. Arquiteto Márcio João de Arruda, 107", phones:["(11) 2222-3912"], email:"loja11@tamandaretintas.com.br", whatsapp:"11 98830-4274" }
};

// ==========================================
// FUNÇÕES AUXILIARES
// ==========================================
function normalizar(texto) { return String(texto || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }

function mostrarAviso(mensagem) {
    const toast = document.querySelector('.toast-notificacao');
    toast.innerText = mensagem; toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function copyToClipboard(elementId, buttonElement) {
    let textToCopy = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = buttonElement.innerText;
        buttonElement.innerText = 'Copiado!';
        setTimeout(() => { buttonElement.innerText = originalText; }, 2000);
    });
}

function updateContactDetails() {
    const select = document.getElementById('contato-select');
    const displayDiv = document.getElementById('contato-details-display');
    const selectedName = select.value;
    if (!selectedName) { displayDiv.style.display = 'none'; return; }
    
    const contact = TEAM_CONTACTS[selectedName];
    const emailId = `email-${selectedName.replace(/[^a-zA-Z0-9]/g, '-')}`;
    const phoneHTML = contact.phone ? `<p style="margin: 5px 0;">Telefone: <a href="tel:${contact.phone.replace(/[^0-9]/g, '')}" style="color:var(--primary-color); font-weight:700; text-decoration:none;">${contact.phone}</a></p>` : '';
        
    displayDiv.innerHTML = `
        <div style="width: 100%;">
            <b style="font-size: 15px;">${selectedName}</b>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px;">
                <span id="${emailId}" style="color:var(--primary-color); font-weight:500;">${contact.email}</span>
                <button class="btn-primary" onclick="copyToClipboard('${emailId}', this)" style="padding: 6px 12px; font-size:12px;">Copiar Email</button>
            </div>
            ${phoneHTML}
            <p style="color: var(--text-muted); font-size: 14px; margin-top: 10px;">${contact.desc}</p>
        </div>
    `;
    displayDiv.style.display = 'flex';
}

function updateTreinamentoDetails() {
    const select = document.getElementById('treinamento-select');
    const displayDiv = document.getElementById('treinamento-details-display');
    const selectedTraining = select.value;
    if (!selectedTraining) { displayDiv.style.display = 'none'; return; }
    
    const training = TRAINING_DETAILS[selectedTraining];
    let html = `<p style="color: var(--text-muted); font-size: 14px; margin-bottom: 15px;">${training.description}</p>`;
                
    if (training.modules) {
        html += `<div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">`;
        training.modules.forEach(mod => { html += `<a href="${mod.link}" target="_blank" class="btn-secondary" style="text-align: left;">${mod.title}</a>`; });
        html += `</div>`;
    } else if (training.link) {
        html += `<a href="${training.link}" target="_blank" class="btn-primary" style="width: 100%;">Acessar Treinamento</a>`;
    }
    displayDiv.innerHTML = html;
    displayDiv.style.display = 'flex';
}

function updateLojaDetails() {
    const select = document.getElementById('loja-select');
    const displayDiv = document.getElementById('loja-details-display');
    const id = select.value;
    if (!id) { displayDiv.style.display = 'none'; return; }
    
    const s = STORE_DETAILS[id];
    const dataId = `dados-${id}`;
    const txt = `${s.title}\nEndereço: ${s.address}\nFone: ${s.phones.join(' / ')}\nE-mail: ${s.email}\nWhatsApp: ${s.whatsapp}`;
    
    displayDiv.innerHTML = `
        <span id="${dataId}" style="display:none;">${txt}</span>
        <div class="data-text" style="width:100%;">
            <span style="font-size: 16px; font-weight: 700; display: block; margin-bottom: 5px;">${s.title}</span>
            Endereço: ${s.address}<br>Fone: ${s.phones.join(' / ')}<br>E-mail: ${s.email}<br>WhatsApp: ${s.whatsapp}
        </div>
        <button class="btn-primary" style="margin-top:10px;" onclick="copyToClipboard('${dataId}', this)">Copiar Dados</button>
    `;
    displayDiv.style.display = 'flex';
}

function filterTreinamentosAndDisplayFirstMatch() {
    const searchInput = normalizar(document.getElementById('treinamento-search').value.trim());
    const select = document.getElementById('treinamento-select');
    const noResults = document.getElementById('no-results-treinamento');
    const displayDiv = document.getElementById('treinamento-details-display');
    const options = Array.from(select.options).slice(1);
    let matches = [];
    
    options.forEach(opt => {
        const key = opt.value;
        const desc = normalizar(TRAINING_DETAILS[key]?.description || '');
        if (normalizar(opt.text).includes(searchInput) || desc.includes(searchInput) || searchInput === '') {
            opt.style.display = '';
            if (searchInput !== '') matches.push(key);
        } else { opt.style.display = 'none'; }
    });
    
    if (matches.length === 0 && searchInput !== '') {
        noResults.style.display = 'block'; select.style.display = 'none'; displayDiv.style.display = 'none';
    } else {
        noResults.style.display = 'none'; select.style.display = 'block';
        select.value = matches.length > 0 ? matches[0] : '';
        updateTreinamentoDetails();
    }
}

// ==========================================
// TIRA-DÚVIDAS (MOTOR DE BUSCA)
// ==========================================
let baseConhecimento = [];
let motorBusca = null;

async function carregarBase() {
    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbzgVw2IXifIBFgHGzlKqQ3kmHBQxuVHDuta2h5neJzwvPQsb3eaLADS0kJ6GrPBxKs/exec");
        baseConhecimento = await res.json();
        motorBusca = new Fuse(baseConhecimento, { 
            useExtendedSearch: true, 
            keys: [{name:'titulo',weight:0.6}, {name:'palavras_chave',weight:0.3}, {name:'resumo',weight:0.1}, {name:'passos',weight:0.1}],
            threshold: 0.3, ignoreLocation: true, ignoreFieldNorm: true,
            getFn: (obj, path) => {
                const valor = obj[path[0]];
                return Array.isArray(valor) ? valor.map(v => normalizar(v)) : normalizar(valor);
            }
        });
    } catch (e) { console.error("Erro ao carregar base"); }
}

function buscar() {
    const pergunta = document.getElementById("pergunta").value.trim();
    if (!pergunta) return mostrarAviso("⚠️ Digite a dúvida.");
    if (!motorBusca) return mostrarAviso("⏳ Base de conhecimento carregando...");

    const divRes = document.getElementById("resultado");
    const btnLimpar = document.getElementById("btnLimpar");
    
    let limpo = normalizar(pergunta).replace(/[?.,!]/g, "");
    let brutos = motorBusca.search(limpo);
    
    if (brutos.length === 0) {
        let terms = limpo.split(/\s+/).filter(p => !["como","eu","faco","para","um","uma","o","a","os","as","de","do","da","em","no","na","que","qual","quais","por","onde"].includes(p)).join(" | ");
        brutos = motorBusca.search(terms.trim() !== "" ? terms : limpo);
    }

    const top = brutos.slice(0, 3).map(r => r.item);
    
    if (top.length > 0) {
        let html = top.map((item, i) => {
            let btnMan = item.manual_url ? `<a href="${item.manual_url}" target="_blank" class="btn-primary" style="margin-top:10px; font-size:12px; padding: 10px 16px; display:inline-block;">📘 Abrir Manual PDF</a>` : "";
            let passos = Array.isArray(item.passos) ? item.passos : (item.passos ? item.passos.split('\n') : []);
            
            return `
                <div class="card-resultado" style="margin-bottom: 15px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                        <h3 style="margin:0; font-size:15px;">${item.titulo}</h3>
                        <span class="area-tag">${item.area}</span>
                    </div>
                    <div>
                        <p style="font-size:13px; margin-bottom:10px;"><strong>Resumo:</strong> ${item.resumo}</p>
                        ${passos.length > 0 ? `<h4 style="font-size:12px; color:var(--text-muted); margin-bottom:5px; text-transform:uppercase;">Passos:</h4><ul style="font-size:13px; padding-left:20px; margin-bottom:10px;">${passos.map(p => `<li>${p}</li>`).join("")}</ul>` : ""}
                        ${btnMan}
                    </div>
                </div>`;
        }).join("");
        
        divRes.innerHTML = html;
    } else {
        divRes.innerHTML = `<p style="padding:15px; font-size:13px; color:var(--text-muted);">Informação não encontrada.</p>`;
    }
    
    divRes.style.display = 'block';
    btnLimpar.style.display = 'inline-block';
}

function limparBusca() {
    document.getElementById("pergunta").value = "";
    document.getElementById("resultado").style.display = 'none';
    document.getElementById("btnLimpar").style.display = 'none';
}

// ==========================================
// DATA, HORA E CLIMA
// ==========================================
function updateClock() {
    const now = new Date();
    document.getElementById('date').innerText = now.toLocaleDateString('pt-BR');
    document.getElementById('clock').innerText = now.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'});
}

async function getWeather() {
    navigator.geolocation.getCurrentPosition(async (pos) => {
        try {
            const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`);
            const d = await r.json(); 
            document.getElementById('temp').innerText = `${Math.round(d.current_weather.temperature)}°C`;
        } catch(e) { document.getElementById('temp').innerText = "N/D"; }
    }, () => { document.getElementById('temp').innerText = "Bloqueado"; });
}

// ==========================================
// GESTÃO DE LINKS PERSONALIZADOS (INLINE) - PAINEL RÁPIDO (3 SLOTS)
// ==========================================
let customLinks = [null, null, null];
try {
    let saved = JSON.parse(localStorage.getItem('tt_custom_links_rapido'));
    if (Array.isArray(saved)) {
        let valid = saved.filter(s => s !== null && s.title);
        for (let i = 0; i < 3 && i < valid.length; i++) { customLinks[i] = valid[i]; }
    }
} catch(e) {}

let currentEditSlot = -1;

function renderCustomLinks() {
    const container = document.getElementById('main-links-container');
    container.querySelectorAll('.custom-slot').forEach(el => el.remove());

    customLinks.forEach((link, index) => {
        const li = document.createElement('li');
        li.className = 'custom-slot';

        if (currentEditSlot === index) {
            li.innerHTML = `
                <div class="inline-edit-box">
                    <input type="text" id="inline-title" placeholder="Nome (Ex: Drive)" value="${link ? link.title : ''}" autocomplete="off">
                    <input type="text" id="inline-url" placeholder="Link (https://...)" value="${link ? link.url : ''}" autocomplete="off">
                    <select id="inline-icon">
                        <option value="fa-globe" ${link?.icon=='fa-globe'?'selected':''}>Globo</option>
                        <option value="fa-star" ${link?.icon=='fa-star'?'selected':''}>Estrela</option>
                        <option value="fa-folder" ${link?.icon=='fa-folder'?'selected':''}>Pasta</option>
                        <option value="fa-file-lines" ${link?.icon=='fa-file-lines'?'selected':''}>Documento</option>
                        <option value="fa-envelope" ${link?.icon=='fa-envelope'?'selected':''}>Email</option>
                        <option value="fa-chart-line" ${link?.icon=='fa-chart-line'?'selected':''}>Gráfico</option>
                    </select>
                    <div class="inline-edit-actions">
                        <button class="inline-btn-cancel" onclick="cancelarEdicao()">Cancelar</button>
                        ${link ? `<button class="inline-btn-del" onclick="removerSlot(${index})" title="Excluir"><i class="fa-solid fa-trash"></i></button>` : ''}
                        <button class="inline-btn-save" onclick="salvarSlot(${index})">Salvar</button>
                    </div>
                </div>
            `;
        } else if (link) {
            li.innerHTML = `
                <div class="custom-link-wrapper">
                    <a href="${link.url}" target="_blank">
                        <div class="link-icon" style="background:#F4F7F6;"><i class="fa-solid ${link.icon}"></i></div>
                        <div class="link-text-wrapper"><span class="link-title">${link.title}</span></div>
                    </a>
                    <button class="btn-edit-link" onclick="editarSlot(${index})" title="Editar"><i class="fa-solid fa-pen" style="font-size:11px;"></i></button>
                </div>
            `;
        } else {
            li.innerHTML = `
                <div class="custom-slot-empty" onclick="editarSlot(${index})">
                    <i class="fa-solid fa-plus" style="margin-right: 8px;"></i> Personalizar
                </div>
            `;
        }
        container.appendChild(li);
    });
}

function editarSlot(index) {
    currentEditSlot = index;
    renderCustomLinks();
    setTimeout(() => document.getElementById('inline-title').focus(), 50);
}

function cancelarEdicao() {
    currentEditSlot = -1;
    renderCustomLinks();
}

function salvarSlot(index) {
    const title = document.getElementById('inline-title').value.trim();
    let url = document.getElementById('inline-url').value.trim();
    const icon = document.getElementById('inline-icon').value;
    
    if(!title || !url) {
        mostrarAviso("⚠️ Preencha o Nome e o Link.");
        return;
    }

    if(!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    customLinks[index] = { title, url, icon };
    localStorage.setItem('tt_custom_links_rapido', JSON.stringify(customLinks));
    
    currentEditSlot = -1;
    renderCustomLinks();
    mostrarAviso("✅ Atalho salvo com sucesso.");
}

function removerSlot(index) {
    customLinks[index] = null;
    customLinks.sort((a, b) => (a === null) - (b === null));
    localStorage.setItem('tt_custom_links_rapido', JSON.stringify(customLinks));
    
    currentEditSlot = -1;
    renderCustomLinks();
    mostrarAviso("🗑️ Atalho removido.");
}

// ==========================================
// TAREFAS
// ==========================================
let tarefas = JSON.parse(localStorage.getItem('tt_tasks')) || [];
function renderTarefas() { const l = document.getElementById('todo-list'); if(!l) return; l.innerHTML = ''; tarefas.sort((a,b)=>a.done-b.done).forEach((t,i)=>{ const li = document.createElement('li'); li.className = `todo-item ${t.done?'done':''}`; li.innerHTML = `<input type="checkbox" ${t.done?'checked':''} onclick="toggleT(${i})"><span onclick="toggleT(${i})">${t.texto}</span><i class="fa-solid fa-trash-can" onclick="removeT(${i})"></i>`; l.appendChild(li); }); localStorage.setItem('tt_tasks', JSON.stringify(tarefas)); }
function addTarefa() { const i = document.getElementById('todo-input'); if(!i.value.trim()) return; tarefas.push({texto:i.value.trim(), done:false}); i.value=''; renderTarefas(); }
function toggleT(i) { tarefas[i].done = !tarefas[i].done; renderTarefas(); }
function removeT(i) { tarefas.splice(i, 1); renderTarefas(); }
function limparConcluidas() { tarefas = tarefas.filter(t=>!t.done); renderTarefas(); }

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    carregarBase(); renderTarefas(); renderCustomLinks(); updateClock(); getWeather();
    setInterval(updateClock, 60000);
    
    document.getElementById('contato-select').addEventListener('change', updateContactDetails);
    document.getElementById('loja-select').addEventListener('change', updateLojaDetails);
    document.getElementById('pergunta').addEventListener('keypress', e => { if(e.key === 'Enter') buscar(); });
});
