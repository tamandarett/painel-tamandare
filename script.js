// ==========================================
// DADOS DO PAINEL ORIGINAL
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
    "Cadastro de Clientes":{ description:"Como cadastrar clientes corretamente, aplicar bloqueios e consultar informações.", link:"https://tamandarett.github.io/painel-tamandare/treinamentos/cadastrodeclientes.html" },
    "Registro de Lacres":{ description:"Sistema digital para registrar a numeração dos lacres dos malotes.", link:"https://tamandarett.github.io/painel-tamandare/treinamentos/lacres.html" },
    "GNRE":{ description:"Orientações para emissão da GNRE apenas quando necessária.", link:"https://tamandarett.github.io/painel-tamandare/treinamentos/gnre.html" },
    "Procedimento de Devolução e Recusa de Mercadorias": { description: "Diferenças entre recusa e devolução e regras de cada uma.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/devolucao.html" },
    "Despesa de Viagem": { description: "Regras para pagamento e baixas de despesas de viagem.", link: "https://tamandarett.github.io/painel-tamandare/treinamentos/despesasdeviagem.html" },
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
// FUNÇÕES DO PAINEL ORIGINAL
// ==========================================
function copyToClipboard(elementId, buttonElement) {
    let textToCopy = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = buttonElement.innerText;
        buttonElement.innerText = 'Copiado!';
        buttonElement.classList.add('copied');
        setTimeout(() => {
            buttonElement.innerText = originalText;
            buttonElement.classList.remove('copied');
        }, 2000);
    }).catch(err => { console.error('Erro ao copiar texto: ', err); });
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
                <span id="${emailId}" style="color:var(--link-color); font-weight:500;">${contact.email}</span>
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
    let html = `<b style="font-size: 15px; display:block; margin-bottom:5px;">${selectedTraining}</b>
                <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 15px;">${training.description}</p>`;
                
    if (training.modules) {
        html += `<div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">`;
        training.modules.forEach(mod => {
            html += `<a href="${mod.link}" target="_blank" class="btn-secondary" style="text-align: left;">${mod.title}</a>`;
        });
        html += `</div>`;
    } else if (training.link) {
        html += `<a href="${training.link}" target="_blank" class="btn-primary" style="width: 100%;">Acessar Treinamento</a>`;
    }
    displayDiv.innerHTML = html;
    displayDiv.style.display = 'flex';
}

function filterTreinamentosAndDisplayFirstMatch() {
    const searchInput = document.getElementById('treinamento-search').value.toLowerCase().trim();
    const select = document.getElementById('treinamento-select');
    const noResults = document.getElementById('no-results-treinamento');
    const options = Array.from(select.options).slice(1);
    let matches = [];
    
    options.forEach(opt => {
        const key = opt.value;
        const desc = TRAINING_DETAILS[key]?.description.toLowerCase() || '';
        if (opt.text.toLowerCase().includes(searchInput) || desc.includes(searchInput) || searchInput === '') {
            opt.style.display = '';
            if (searchInput !== '') matches.push(key);
        } else {
            opt.style.display = 'none';
        }
    });
    
    if (matches.length === 0 && searchInput !== '') {
        noResults.style.display = 'block'; select.style.display = 'none';
        document.getElementById('treinamento-details-display').style.display = 'none';
    } else {
        noResults.style.display = 'none'; select.style.display = 'block';
        select.value = matches.length > 0 ? matches[0] : '';
        updateTreinamentoDetails();
    }
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
        <div class="data-text">
            <span class="store-title-in-box">${s.title}</span>
            Endereço: ${s.address}<br>Fone: ${s.phones.join(' / ')}<br>E-mail: ${s.email}<br>WhatsApp: ${s.whatsapp}
        </div>
        <button class="btn-primary" onclick="copyToClipboard('${dataId}', this)">Copiar Dados</button>
    `;
    displayDiv.style.display = 'flex';
}

// ==========================================
// TIRA-DÚVIDAS (MOTOR DE BUSCA E TELEMETRIA)
// ==========================================
const API_URL = "https://script.google.com/macros/s/AKfycbzgVw2IXifIBFgHGzlKqQ3kmHBQxuVHDuta2h5neJzwvPQsb3eaLADS0kJ6GrPBxKs/exec";
const TELEMETRIA_URL = "https://script.google.com/macros/s/AKfycbwo9KkfICH6kuhrv0pLzqbSTfVpZzx5NGw5y9Uy3IIFrpCwGFAx_oZhQzcFQnvYAD2F/exec";

let baseConhecimento = [];
let motorBusca = null;
let baseCarregada = false;
let resultadoAberto = null;
let feedbackContexto = null;

function normalizar(texto) { return String(texto || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }

function mostrarAviso(mensagem) {
    const antigo = document.getElementById('toast-aviso'); if (antigo) antigo.remove();
    const toast = document.createElement('div');
    toast.id = 'toast-aviso'; toast.className = 'toast-notificacao'; toast.innerText = mensagem;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
}

async function dispararTelemetria(tipo, pergunta, resultadosMostrados, comentario = "") {
    const loja = document.getElementById("loja-busca")?.value || "Não informada";
    try {
        await fetch(TELEMETRIA_URL, {
            method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({ loja, pergunta, tipo, resultados: resultadosMostrados, comentario })
        });
    } catch (e) { console.error("Erro na telemetria:", e); }
}

function abrirModalFeedback(pergunta, resultados) {
    feedbackContexto = { pergunta, resultados };
    document.getElementById('modal-feedback').classList.add('show');
}

function fecharModalFeedback() {
    document.getElementById('modal-feedback').classList.remove('show');
    document.getElementById('txt-comentario').value = '';
    feedbackContexto = null;
}

function confirmarFeedback() {
    if (!feedbackContexto) return;
    const txt = document.getElementById('txt-comentario');
    const btn = document.getElementById('btn-enviar-feedback');
    if (btn) { btn.innerText = "Enviando..."; btn.disabled = true; }

    dispararTelemetria("Resposta Ruim", feedbackContexto.pergunta, feedbackContexto.resultados, txt.value.trim()).then(() => {
        fecharModalFeedback(); mostrarAviso("✅ Avaliação registrada. Obrigado!");
        if (btn) { btn.innerText = "Enviar Avaliação"; btn.disabled = false; }
    });
}

async function carregarBase() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Falha API: ${res.status}`);
        baseConhecimento = await res.json();
        motorBusca = new Fuse(baseConhecimento, {
            useExtendedSearch: true, keys: [{name:'titulo',weight:0.6}, {name:'palavras_chave',weight:0.3}, {name:'resumo',weight:0.1}, {name:'passos',weight:0.1}],
            threshold: 0.3, ignoreLocation: true, ignoreFieldNorm: true,
            getFn: (obj, path) => {
                const valor = obj[path[0]];
                return Array.isArray(valor) ? valor.map(v => normalizar(v)) : normalizar(valor);
            }
        });
        baseCarregada = true;
    } catch (error) { console.error("Erro ao carregar base:", error); baseCarregada = false; }
}

function limparBusca() {
    document.getElementById("pergunta").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("btnLimpar").style.display = "none";
    resultadoAberto = null;
}

function buscar() {
    if (!baseCarregada) return mostrarAviso("⏳ A base de conhecimento está carregando.");
    const loja = document.getElementById("loja-busca").value;
    const pergunta = document.getElementById("pergunta").value.trim();
    const btn = document.getElementById("btnBuscar");
    const btnLimpar = document.getElementById("btnLimpar");
    const divRes = document.getElementById("resultado");

    if (!loja) return mostrarAviso("⚠️ Selecione sua unidade.");
    if (!pergunta) return mostrarAviso("⚠️ Digite a dúvida.");

    btn.innerText = "Buscando..."; btn.disabled = true;
    divRes.innerHTML = ""; divRes.style.display = "none";
    resultadoAberto = null;

    setTimeout(() => {
        let limpo = normalizar(pergunta).replace(/[?.,!]/g, "");
        let brutos = motorBusca.search(limpo);
        if (brutos.length === 0) {
            let terms = limpo.split(/\s+/).filter(p => !["como","eu","faco","para","um","uma","o","a","os","as","de","do","da","em","no","na","que","qual","quais","por","onde"].includes(p)).join(" | ");
            brutos = motorBusca.search(terms.trim() !== "" ? terms : limpo);
        }

        const top = brutos.slice(0, 3).map(r => r.item);
        divRes.style.display = "flex";
        btnLimpar.style.display = "inline-block"; // Mostra o botão de limpar

        if (top.length > 0) {
            const titles = top.map(i => i.titulo).join(" | ");
            let html = `<div class="feedback-topo"><span class="feedback-texto">Não encontrou a resposta exata?</span><button class="btn-feedback-min" onclick="abrirModalFeedback('${pergunta.replace(/'/g, "\\'")}', '${titles.replace(/'/g, "\\'")}')">👎 Reportar Falha</button></div>`;
            
            html += top.map((item, i) => {
                let btnMan = item.manual_url ? `<a href="${item.manual_url}" target="_blank" class="btn-primary" style="margin-top:10px; font-size:13px; padding: 10px 16px;">📘 Abrir Manual PDF</a>` : "";
                let passos = Array.isArray(item.passos) ? item.passos : (item.passos ? item.passos.split('\n') : []);
                return `
                    <div class="card-resultado">
                        <div class="resultado-header" onclick="toggleResultado(${i})">
                            <div><h3>${item.titulo}</h3><span class="area-tag" data-area="${item.area}">${item.area}</span></div>
                            <i class="fa-solid fa-chevron-down seta-result" id="seta-${i}"></i>
                        </div>
                        <div class="resultado-body" id="resultado-${i}">
                            <p><strong>Resumo:</strong> ${item.resumo}</p>
                            <h4>Passos:</h4><ul>${passos.map(p => `<li>${p}</li>`).join("")}</ul>${btnMan}
                        </div>
                    </div>`;
            }).join("");
            divRes.innerHTML = html;
        } else {
            dispararTelemetria("Não Encontrado", pergunta, "Nenhum resultado");
            divRes.innerHTML = `<div class="card-resultado" style="padding:25px;text-align:center;box-shadow:none;"><h3 style="color:#C53030;margin-bottom:10px;margin-top:0;">Informação não encontrada</h3><p style="color:var(--text-muted);margin:0;">Sua pesquisa foi registrada para inclusão futura no sistema.</p></div>`;
        }
        btn.innerText = "Pesquisar"; btn.disabled = false;
    }, 300);
}

function toggleResultado(index) {
    const corpo = document.getElementById(`resultado-${index}`);
    const seta = document.getElementById(`seta-${index}`);
    if (resultadoAberto !== null && resultadoAberto !== index) {
        document.getElementById(`resultado-${resultadoAberto}`)?.classList.remove("ativo");
        document.getElementById(`seta-${resultadoAberto}`)?.classList.remove("rotacionar");
    }
    corpo.classList.toggle("ativo"); seta.classList.toggle("rotacionar");
    resultadoAberto = corpo.classList.contains("ativo") ? index : null;
}

// ==========================================
// INICIALIZAÇÃO E COMPORTAMENTO "ACORDEÃO"
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    carregarBase();
    document.getElementById("pergunta")?.addEventListener("keypress", e => { if (e.key === "Enter") buscar(); });
    
    // COMPORTAMENTO "ACORDEÃO" (Abre uma, fecha as outras)
    const collapsibleCards = document.querySelectorAll('.collapsible-card');
    collapsibleCards.forEach(card => {
        card.querySelector('.collapsible-header').addEventListener('click', () => {
            const jaEstavaAberto = card.classList.contains('active');
            
            // 1. Fecha todas as abas
            collapsibleCards.forEach(c => c.classList.remove('active'));
            
            // 2. Abre a aba clicada (apenas se ela não estava aberta)
            if (!jaEstavaAberto) {
                card.classList.add('active');
            }
        });
    });

    const selTreino = document.getElementById('treinamento-select');
    if(selTreino) selTreino.addEventListener('change', updateTreinamentoDetails);
    document.getElementById('treinamento-search')?.addEventListener('input', filterTreinamentosAndDisplayFirstMatch);
    
    const selCont = document.getElementById('contato-select');
    if(selCont) selCont.addEventListener('change', updateContactDetails);
    
    const selLoja = document.getElementById('loja-select');
    if(selLoja) selLoja.addEventListener('change', updateLojaDetails);
});
