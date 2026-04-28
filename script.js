// ==========================================
// DADOS DO PAINEL
// ==========================================
const TEAM_CONTACTS = {
    "Alexandre":{ email:"suporte@tamandaretintas.com.br", phone:"(19) 99328-5132", desc:"Suporte Técnico e Infraestrutura." },
    "Ana Claudia":{ email:"anaclaudia@tamandaretintas.com.br", phone:"(19) 97131-7520", desc:"RH e Regras Trabalhistas." },
    "Carla":{ email:"carla@tamandaretintas.com.br", phone:null, desc:"Financeiro e Fiscal." },
    "Daniel":{ email:"daniel@tamandaretintas.com.br", phone:null, desc:"Contas a Pagar e Devoluções." },
    "Eduardo":{ email:"marketing@tamandaretintas.com.br", phone:null, desc:"Marketing e Campanhas." },
    "Filipe":{ email:"filipe@tamandaretintas.com.br", phone:null, desc:"Negociações e Comercial." },
    "Junior":{ email:"junior@tamandaretintas.com.br", phone:null, desc:"Caixa e Recebíveis." },
    "Lançamento de Notas":{ email:"admloja3@tamandaretintas.com.br", phone:null, desc:"Estoque e Notas de Fornecedores." }
};

const TRAINING_DETAILS = {
    "Jornada Essencial Tamandaré Tintas": {
        description: "Pilares da empresa, cultura e atendimento.",
        modules: [
            { title: "Módulo 1: Missão e Valores", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/compreendendo.html" },
            { title: "Módulo 2: Atendimento", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/princ%C3%ADpiosdeumbomatendimento.html" }
        ]
    },
    "Abastecimento de Veículos": { description: "Procedimentos Ticketlog.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/abastecimento.html" },
    "Cadastro de Clientes":{ description:"Regras de cadastro e bloqueio.", link:"https://tamandarett.github.io/painel-tamandare/treinamentos/cadastrodeclientes.html" },
    "Registro de Lacres":{ description:"Numeração de lacres malotes.", link:"https://tamandarett.github.io/painel-tamandare/treinamentos/lacres.html" },
    "GNRE":{ description:"Emissão de guias estaduais.", link:"https://tamandarett.github.io/painel-tamandare/treinamentos/gnre.html" },
    "Devolução e Recusa de Mercadorias": { description: "Regras fiscais de devolução.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/devolucao.html" },
    "Despesa de Viagem": { description: "Reembolsos e acertos.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/despesasdeviagem.html" },
    "Carta de Correção": { description: "Como emitir CC-e.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/cce.html" },
    "Vendas e Transferência entre lojas": { description: "Movimentação interna.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/vendasentrelojas.html" },
    "Análise de Crédito": { description: "Interpretação ACIAI.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/analisedecredito.html" }
};

const STORE_DETAILS = {
    "loja-morada":{ title:"02 - Morada do Sol", address:"Av. Ário Barnabé, 655", phones:["(19) 3935-9141"], email:"loja2@tamandaretintas.com.br", whatsapp:"(19) 99328-6800" },
    "loja-visconde":{ title:"05 - Visconde", address:"Av. Visconde de Indaiatuba, 441", phones:["(19) 3894-6112"], email:"loja3@tamandaretintas.com.br", whatsapp:"19 99329-4193" },
    "loja-vinhedo":{ title:"09 - Vinhedo", address:"Av. Saudade, 366", phones:["(19) 3030-3483"], email:"lojavinhedo@tamandaretintas.com.br", whatsapp:"19 98610-8999" },
    "loja-conceicao":{ title:"10 - Conceição", address:"Av. Conceição, 1178", phones:["(19) 3392-6690"], email:"loja10@tamandaretintas.com.br", whatsapp:"(19) 99329-0533" },
    "loja-elias":{ title:"12 - Elias Fausto", address:"R. XV de Novembro, 181", phones:["(19) 3821-2508"], email:"loja5@tamandaretintas.com.br", whatsapp:"(19) 99329-7193" },
    "loja-maria":{ title:"13 - Maria José", address:"Av. Fábio Ferraz Bicudo, 1329", phones:["(19) 3312-1933"], email:"loja13@tamandaretintas.com.br", whatsapp:"(19) 99699 4383" },
    "loja-paula":{ title:"14 - Paula Leite", address:"Av. Francisco de Paula Leite, 334", phones:["(19) 3825-1100"], email:"loja1@tamandaretintas.com.br", whatsapp:"(19) 99711-7509" },
    "loja-salto":{ title:"15 - Salto", address:"R. Nove de Julho, 1426", phones:["(11) 4029-1401"], email:"loja8@tamandaretintas.com.br", whatsapp:"11 94289-3594" },
    "loja-itu":{ title:"16 - Itu", address:"R. Arquiteto Márcio João de Arruda, 107", phones:["(11) 2222-3912"], email:"loja11@tamandaretintas.com.br", whatsapp:"11 98830-4274" }
};

// ==========================================
// UTILITÁRIOS
// ==========================================
function normalizar(texto) { return String(texto || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }

function mostrarAviso(mensagem) {
    const toast = document.querySelector('.toast-notificacao');
    toast.innerText = mensagem;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const oldText = btn.innerText;
        btn.innerText = "Copiado!";
        btn.classList.add('copied');
        setTimeout(() => { btn.innerText = oldText; btn.classList.remove('copied'); }, 2000);
    });
}

function updateContactDetails() {
    const name = document.getElementById('contato-select').value;
    const div = document.getElementById('contato-details-display');
    const c = TEAM_CONTACTS[name];
    div.innerHTML = `<b>${name}</b><br>${c.email}<br>${c.phone || ''}<br><small style="color:var(--text-muted)">${c.desc}</small>
                     <button class="btn-primary" style="margin-top:10px; padding:6px 12px; font-size:11px;" onclick="copyToClipboard('${c.email}', this)">Copiar Email</button>`;
    div.style.display = 'flex';
}

function updateTreinamentoDetails() {
    const key = document.getElementById('treinamento-select').value;
    const div = document.getElementById('treinamento-details-display');
    const t = TRAINING_DETAILS[key];
    let h = `<p style="margin-bottom:10px;">${t.description}</p>`;
    if(t.modules) {
        t.modules.forEach(m => h += `<a href="${m.link}" target="_blank" class="btn-secondary" style="display:block; margin-top:5px; font-size:12px; width:100%; text-align:left;">${m.title}</a>`);
    } else {
        h += `<a href="${t.link}" target="_blank" class="btn-primary" style="margin-top:5px;">Ver Manual Completo</a>`;
    }
    div.innerHTML = h; div.style.display = 'flex';
}

function updateLojaDetails() {
    const id = document.getElementById('loja-select').value;
    const div = document.getElementById('loja-details-display');
    const s = STORE_DETAILS[id];
    const resumo = `${s.title}\n${s.address}\nFone: ${s.phones[0]}\nWhats: ${s.whatsapp}`;
    div.innerHTML = `<b>${s.title}</b><br>${s.address}<br>Fone: ${s.phones[0]}<br>Whats: ${s.whatsapp}
                     <button class="btn-primary" style="margin-top:10px; padding:6px 12px; font-size:11px;" onclick="copyToClipboard(\`${resumo}\`, this)">Copiar Dados</button>`;
    div.style.display = 'flex';
}

// ==========================================
// BUSCA (TIRA-DÚVIDAS)
// ==========================================
let baseConhecimento = [];
let motorBusca = null;

async function carregarBase() {
    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbzgVw2IXifIBFgHGzlKqQ3kmHBQxuVHDuta2h5neJzwvPQsb3eaLADS0kJ6GrPBxKs/exec");
        baseConhecimento = await res.json();
        motorBusca = new Fuse(baseConhecimento, { 
            keys: ['titulo', 'palavras_chave', 'resumo'], 
            threshold: 0.3,
            ignoreLocation: true,
            getFn: (obj, path) => normalizar(obj[path[0]]) 
        });
        console.log("Base carregada.");
    } catch (e) { console.error("Erro ao carregar base"); }
}

function buscar() {
    const p = document.getElementById("pergunta").value.trim();
    if (!p) return mostrarAviso("⚠️ Digite o que deseja buscar.");
    if (!motorBusca) return mostrarAviso("⏳ Base ainda carregando...");

    const resDiv = document.getElementById("resultado");
    const results = motorBusca.search(normalizar(p)).slice(0, 3);

    if (results.length > 0) {
        resDiv.innerHTML = results.map(r => `
            <div class="card-resultado">
                <span class="area-tag">${r.item.area}</span>
                <h3 style="margin-top:5px;">${r.item.titulo}</h3>
                <p style="font-size:12px; color:var(--text-muted); margin-bottom:10px;">${r.item.resumo}</p>
                ${r.item.manual_url ? `<a href="${r.item.manual_url}" target="_blank" class="btn-primary" style="font-size:11px; padding:5px 10px;">Abrir PDF</a>` : ''}
            </div>`).join('');
    } else {
        resDiv.innerHTML = `<p style="padding:15px; font-size:13px; color:var(--text-muted);">Nenhum procedimento encontrado.</p>`;
    }
    
    resDiv.style.display = 'block';
    document.getElementById("btnLimpar").style.display = 'inline-block';
}

function limparBusca() {
    document.getElementById("pergunta").value = "";
    document.getElementById("resultado").style.display = 'none';
    document.getElementById("btnLimpar").style.display = 'none';
}

// ==========================================
// TAREFAS (LOCAL STORAGE)
// ==========================================
let tarefas = JSON.parse(localStorage.getItem('tt_tasks')) || [];

function renderTarefas() {
    const lista = document.getElementById('todo-list');
    if(!lista) return;
    lista.innerHTML = '';
    tarefas.sort((a,b) => a.done - b.done).forEach((t, i) => {
        const li = document.createElement('li');
        li.className = `todo-item ${t.done ? 'done' : ''}`;
        li.innerHTML = `<input type="checkbox" ${t.done ? 'checked' : ''} onclick="toggleT(${i})">
                        <span onclick="toggleT(${i})">${t.texto}</span>
                        <i class="fa-solid fa-trash-can" onclick="removeT(${i})"></i>`;
        lista.appendChild(li);
    });
    localStorage.setItem('tt_tasks', JSON.stringify(tarefas));
}
function addTarefa() { 
    const input = document.getElementById('todo-input');
    if(!input.value.trim()) return;
    tarefas.push({texto: input.value.trim(), done: false});
    input.value = ''; renderTarefas();
}
function toggleT(i) { tarefas[i].done = !tarefas[i].done; renderTarefas(); }
function removeT(i) { tarefas.splice(i, 1); renderTarefas(); }
function limparConcluidas() { tarefas = tarefas.filter(t => !t.done); renderTarefas(); }

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    carregarBase();
    renderTarefas();
    document.getElementById('contato-select').addEventListener('change', updateContactDetails);
    document.getElementById('treinamento-select').addEventListener('change', updateTreinamentoDetails);
    document.getElementById('loja-select').addEventListener('change', updateLojaDetails);
    document.getElementById('pergunta').addEventListener('keypress', e => { if(e.key === 'Enter') buscar(); });
});
