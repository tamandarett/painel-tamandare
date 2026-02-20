// Service Worker básico para ativar a instalação do App (PWA)
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Instalado com sucesso.');
  self.skipWaiting(); // Força a atualização imediata
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Ativado.');
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // O Google exige o evento 'fetch' para instalar o PWA, mas vamos deixá-lo 
  // vazio propositadamente. Isso garante que o painel puxe sempre os manuais
  // e as atualizações mais recentes do servidor, sem cache antigo a atrapalhar.
});
