---
name: conecta-saude-mobile
description: >
  Skill para orientar o desenvolvimento mobile-first, responsivo, acessível,
  seguro e multiplataforma do projeto CONECTA-Saúde. Deve ser aplicada na
  criação, alteração, revisão ou correção de telas, componentes, formulários,
  dashboards, tabelas, menus e fluxos da aplicação.
version: 1.0.0
language: pt-BR
project: CONECTA-Saúde
---

# CONECTA-Saúde — Mobile First e Responsividade

## 1. Objetivo da Skill

Garantir que todas as telas, componentes e funcionalidades do **CONECTA-Saúde**
sejam desenvolvidos inicialmente para dispositivos móveis e se adaptem
progressivamente para tablets, notebooks, desktops e monitores de alta resolução.

A aplicação deve possuir uma única base de código responsiva, sem versões
separadas para mobile e desktop.

O resultado deve transmitir:

- tecnologia;
- saúde;
- segurança;
- confiança;
- acessibilidade;
- modernidade;
- facilidade de uso;
- inclusão digital;
- organização;
- profissionalismo.

## 2. Quando utilizar esta Skill

Aplicar esta Skill sempre que a tarefa envolver:

- criação de uma nova página;
- alteração de uma tela existente;
- criação ou revisão de componentes;
- implementação de formulários;
- criação de dashboards;
- criação de tabelas e listagens;
- implementação de menus e navegação;
- ajuste de layout para dispositivos móveis;
- correção de problemas de responsividade;
- revisão de acessibilidade;
- revisão de performance;
- implementação de PWA;
- revisão de segurança na interface;
- validação final de uma funcionalidade;
- correção de elementos sobrepostos, cortados ou com rolagem horizontal indevida.

## 3. Regra principal

Toda implementação deve seguir obrigatoriamente:

**Mobile First + Responsive Web Design**

O ambiente mobile é o padrão principal do projeto.

A versão desktop deve aproveitar o espaço adicional para aumentar a
produtividade e exibir mais informações quando necessário, sem parecer apenas
uma versão mobile ampliada.

Não desenvolver nenhuma tela pensando apenas em desktop.

Não considerar uma tela concluída porque ela funciona em apenas uma resolução.

## 4. Princípios obrigatórios

O agente deve:

1. iniciar toda tela pela estrutura mobile;
2. utilizar uma única interface responsiva;
3. manter equivalência funcional entre mobile, tablet e desktop;
4. evitar larguras e alturas fixas desnecessárias;
5. evitar posicionamento absoluto excessivo;
6. usar componentes reutilizáveis;
7. usar CSS Grid, Flexbox e containers fluidos;
8. priorizar unidades relativas;
9. validar acessibilidade, performance e segurança;
10. testar textos longos, dados vazios e falhas de conexão;
11. preservar dados preenchidos durante mudanças de orientação e layout;
12. garantir funcionamento com toque, mouse e teclado;
13. não esconder funcionalidades essenciais em telas menores;
14. não usar hover como única forma de acessar informações;
15. não permitir rolagem horizontal na página inteira.

## 5. Ambientes suportados

A aplicação deve funcionar corretamente em:

- smartphones Android;
- smartphones iOS;
- tablets Android;
- iPads;
- notebooks;
- computadores desktop;
- monitores widescreen;
- monitores de alta resolução;
- modo retrato;
- modo paisagem;
- instalação como PWA, quando aplicável.

Validar nas versões atuais dos principais navegadores:

- Google Chrome;
- Microsoft Edge;
- Mozilla Firefox;
- Safari;
- navegadores baseados em Chromium.

## 6. Equivalência funcional

A versão mobile deve disponibilizar todas as funcionalidades essenciais
existentes no desktop.

Quando uma função não couber diretamente na tela, reorganizar utilizando:

- drawer;
- bottom sheet;
- modal;
- menu contextual;
- menu recolhível;
- acordeão;
- abas;
- expansão de conteúdo;
- navegação em etapas;
- tela de detalhes;
- botão “Mais”.

Não remover funcionalidades por falta de espaço.

## 7. Breakpoints de referência

Centralizar os breakpoints no projeto e utilizá-los apenas quando houver
necessidade real de reorganização.

```css
/* Mobile pequeno */
@media (max-width: 374px) {
}

/* Mobile padrão */
@media (min-width: 375px) {
}

/* Mobile grande */
@media (min-width: 480px) {
}

/* Tablet */
@media (min-width: 768px) {
}

/* Notebook */
@media (min-width: 1024px) {
}

/* Desktop */
@media (min-width: 1280px) {
}

/* Desktop grande */
@media (min-width: 1440px) {
}

/* Monitores ultrawide */
@media (min-width: 1920px) {
}
```

Priorizar layouts fluidos em vez de criar regras específicas para cada aparelho.

## 8. Técnicas obrigatórias de responsividade

Utilizar, quando apropriado:

- CSS Grid;
- Flexbox;
- containers fluidos;
- `min-width`;
- `max-width`;
- `min-height`;
- `minmax()`;
- `auto-fit`;
- `auto-fill`;
- `clamp()`;
- container queries;
- imagens responsivas;
- tipografia fluida;
- espaçamento adaptável;
- componentes reutilizáveis.

Priorizar as unidades:

- `rem`;
- `em`;
- `%`;
- `vw`;
- `vh`;
- `dvh`;
- `svh`;
- `lvh`;
- `ch`;
- `fr`.

Pixels podem ser usados para:

- bordas;
- espessuras;
- ícones;
- limites específicos;
- áreas mínimas de toque;
- pequenos ajustes visuais.

## 9. Containers

O conteúdo principal deve ser fluido e possuir largura máxima.

```css
.page-container {
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: clamp(16px, 3vw, 40px);
}
```

Em monitores grandes:

- centralizar o conteúdo;
- limitar a largura;
- evitar linhas de texto excessivamente longas;
- manter colunas equilibradas;
- controlar espaços laterais.

## 10. Estrutura por dispositivo

### 10.1 Mobile

Utilizar preferencialmente:

- cabeçalho compacto;
- menu em formato drawer;
- navegação inferior quando adequada;
- cards em uma coluna;
- botões principais em largura total;
- formulários em uma coluna;
- filtros recolhíveis;
- ações secundárias agrupadas;
- modais em largura quase total;
- bottom sheets;
- rolagem vertical natural;
- áreas clicáveis confortáveis;
- navegação simples para uso com uma mão.

Priorizar:

- clareza;
- rapidez;
- leitura fácil;
- redução de excesso visual;
- botões de fácil alcance;
- feedback imediato.

### 10.2 Tablet

Permitir:

- uma ou duas colunas;
- formulários em duas colunas para campos relacionados;
- menus laterais quando houver espaço;
- cards e gráficos maiores;
- suporte completo ao toque;
- painéis laterais;
- uso em modo retrato e paisagem.

### 10.3 Desktop

Utilizar:

- sidebar fixa ou recolhível;
- cabeçalho superior completo;
- dashboards em múltiplas colunas;
- tabelas com mais informações;
- filtros avançados;
- ações rápidas;
- visualização simultânea de lista e detalhes, quando útil;
- conteúdo centralizado e com largura máxima;
- melhor aproveitamento horizontal.

## 11. Tipografia responsiva

Aplicar tipografia fluida.

```css
h1 {
  font-size: clamp(1.75rem, 4vw, 3rem);
}

h2 {
  font-size: clamp(1.375rem, 3vw, 2.25rem);
}

h3 {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
}

body {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
}
```

Garantir:

- tamanho confortável;
- altura de linha adequada;
- contraste;
- hierarquia visual;
- quebra de palavras;
- suporte a aumento de fonte;
- leitura em telas pequenas e grandes.

Para conteúdos longos:

```css
overflow-wrap: anywhere;
word-break: break-word;
```

Não truncar informações importantes.

## 12. Espaçamentos

Utilizar espaçamentos fluidos.

```css
.section {
  padding-block: clamp(16px, 4vw, 48px);
}

.component-gap {
  gap: clamp(12px, 2vw, 24px);
}
```

Evitar:

- espaços excessivos em telas pequenas;
- componentes muito próximos;
- margens rígidas;
- falta de respiro visual.

## 13. Botões e elementos interativos

Todos os elementos devem funcionar com:

- toque;
- mouse;
- teclado;
- leitores de tela.

Requisitos:

- área mínima próxima de 44 × 44 pixels;
- espaçamento adequado;
- estado de hover;
- estado de foco;
- estado ativo;
- estado desabilitado;
- feedback visual ao toque;
- carregamento;
- confirmação em ações importantes;
- texto objetivo;
- descrição para ícones quando necessário.

No mobile, destacar as ações principais e usar largura total quando apropriado.

## 14. Formulários

Os formulários devem ser planejados primeiro para smartphones.

Aplicar:

- uma coluna no mobile;
- duas ou mais colunas apenas quando houver espaço;
- labels sempre visíveis;
- mensagens próximas ao campo;
- tipos corretos de input;
- `inputmode`;
- `autocomplete`;
- máscaras de telefone, CPF, CNPJ, CEP, data e hora;
- campos com altura confortável;
- botões grandes;
- rolagem até o primeiro erro;
- validação no momento apropriado.

Não usar placeholder como substituto do label.

Preservar os dados preenchidos em caso de:

- erro de API;
- perda de conexão;
- mudança de orientação;
- redimensionamento;
- alteração de layout.

## 15. Teclado virtual

A abertura do teclado não pode esconder:

- campos;
- botões;
- mensagens;
- ações de confirmação;
- conteúdo importante.

Aplicar:

- `dvh`;
- containers roláveis;
- ajuste de elementos fixos;
- rolagem do campo ativo;
- espaçamento inferior dinâmico;
- modais sem altura rígida;
- redução de elementos fixos durante a digitação.

Testar em Android, iOS, Chrome Mobile e Safari Mobile.

## 16. Safe Areas

Considerar notch, barra inferior, gestos do sistema e bordas arredondadas.

```css
padding-top: env(safe-area-inset-top);
padding-right: env(safe-area-inset-right);
padding-bottom: env(safe-area-inset-bottom);
padding-left: env(safe-area-inset-left);
```

Aplicar principalmente em:

- cabeçalhos fixos;
- barras inferiores;
- menus;
- modais;
- bottom sheets;
- botões flutuantes;
- telas em modo aplicativo.

## 17. Navegação

### Mobile

Usar conforme a necessidade:

- drawer;
- navegação inferior;
- cabeçalho compacto;
- abas roláveis;
- botão “Mais”;
- menus recolhíveis.

A navegação inferior deve possuir preferencialmente até cinco opções principais.

### Desktop

Usar:

- sidebar fixa ou recolhível;
- indicação da página ativa;
- grupos organizados;
- tooltips na sidebar recolhida;
- identificação do usuário;
- breadcrumbs;
- atalhos para funções principais.

Preservar:

- rota atual;
- filtros;
- paginação;
- estado do menu;
- dados ainda não enviados, quando possível.

## 18. Cards

Utilizar grids fluidos.

```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 280px), 1fr)
  );
  gap: clamp(12px, 2vw, 24px);
}
```

No mobile, usar preferencialmente uma coluna.

Em telas maiores, usar duas, três ou quatro colunas conforme o conteúdo.

Não comprimir cards até prejudicar a leitura.

## 19. Tabelas e listagens

### Desktop

Permitir:

- tabela completa;
- ordenação;
- filtros;
- paginação;
- seleção de linhas;
- ações por registro;
- cabeçalho fixo quando necessário;
- mais colunas conforme o espaço.

### Mobile

Priorizar:

- colunas essenciais;
- registros em formato de cards;
- expansão de linha;
- tela de detalhes;
- menu contextual;
- títulos dos campos visíveis;
- rolagem horizontal apenas quando indispensável.

Não reduzir a fonte até torná-la ilegível.

Se a tabela não funcionar bem no mobile, transformar cada registro em um card.

Listagens devem possuir:

- busca;
- ordenação;
- filtros;
- paginação ou carregamento incremental;
- estado vazio;
- carregamento;
- erro;
- ações por item;
- indicadores de status.

Filtros avançados no mobile devem ser exibidos em drawer, modal, bottom sheet
ou área recolhível.

## 20. Dashboards e gráficos

### Mobile

- indicadores em uma coluna;
- gráficos em largura total;
- legendas reposicionadas;
- filtros compactos;
- informações essenciais em destaque;
- rolagem vertical natural.

### Desktop

- indicadores em múltiplas colunas;
- gráficos lado a lado;
- filtros no topo;
- painéis proporcionais à prioridade.

Redimensionar gráficos quando:

- a janela mudar;
- a orientação mudar;
- a sidebar abrir ou fechar;
- o container mudar;
- uma aba for ativada;
- um painel for expandido.

## 21. Imagens, ícones e logomarca

```css
img {
  max-width: 100%;
  height: auto;
}
```

Utilizar:

- SVG para logomarca e ícones;
- WebP ou AVIF para imagens;
- `srcset`;
- `sizes`;
- lazy loading;
- `object-fit`;
- textos alternativos.

Não distorcer a logomarca do **CONECTA-Saúde**.

## 22. Orientação do dispositivo

A aplicação deve funcionar em retrato e paisagem.

Ao mudar a orientação:

- reorganizar o layout;
- manter menus e modais acessíveis;
- recalcular gráficos;
- preservar dados de formulários;
- preservar filtros e estados;
- não exigir recarregamento.

## 23. Acessibilidade

Aplicar boas práticas alinhadas à WCAG.

Garantir:

- HTML semântico;
- contraste adequado;
- foco visível;
- navegação por teclado;
- labels;
- textos alternativos;
- compatibilidade com leitores de tela;
- mensagens de erro claras;
- hierarquia correta de títulos;
- ordem lógica de navegação;
- conteúdo acessível com zoom de até 200%;
- não depender apenas de cores;
- ARIA somente quando necessário.

Respeitar redução de movimento:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 24. Performance

O sistema deve ser otimizado para dispositivos móveis e conexões instáveis.

Aplicar:

- lazy loading;
- divisão de código;
- carregamento sob demanda;
- compressão de imagens;
- cache;
- minificação;
- skeleton loading;
- paginação;
- carregamento incremental;
- otimização de fontes;
- debounce;
- cancelamento de requisições obsoletas;
- virtualização de listas quando necessária;
- redução de bibliotecas desnecessárias.

Priorizar bons resultados nos Core Web Vitals.

## 25. Conectividade instável

Criar:

- indicador de conexão;
- aviso de modo offline;
- tentativa de reconexão;
- prevenção de envio duplicado;
- botão de nova tentativa;
- preservação temporária dos dados;
- feedback de sincronização;
- timeout;
- tratamento de falhas parciais;
- mensagens claras.

Nunca apagar dados digitados após falha de conexão.

Não reenviar operações sensíveis automaticamente sem controle.

## 26. PWA

Preparar a arquitetura para:

- manifest;
- ícones;
- tela de abertura;
- nome e descrição;
- cor de tema;
- service worker;
- cache controlado;
- instalação;
- modo tela cheia;
- atualização segura;
- aviso de nova versão;
- estratégia de atualização de cache.

Não armazenar dados pessoais ou clínicos de forma insegura no dispositivo.

## 27. Segurança e privacidade

Por se tratar de uma aplicação de saúde, implementar:

- controle de acesso por perfil;
- autenticação segura;
- sessões protegidas;
- expiração de sessão;
- bloqueio de rotas privadas;
- validação no frontend e backend;
- proteção contra injeção;
- proteção contra XSS;
- proteção contra CSRF, quando aplicável;
- armazenamento seguro;
- logs de auditoria;
- mascaramento de dados;
- HTTPS;
- controle de permissões;
- tratamento seguro de tokens;
- adequação à LGPD.

Não registrar dados pessoais ou clínicos em logs públicos.

Não ocultar informações não autorizadas apenas com CSS.

Elementos não autorizados não devem ser renderizados.

## 28. Componentização

Criar componentes reutilizáveis para:

- cabeçalho;
- sidebar;
- menu mobile;
- navegação inferior;
- rodapé;
- cards;
- modais;
- bottom sheets;
- alertas;
- botões;
- campos de formulário;
- seletores;
- tabelas;
- listagens;
- paginação;
- filtros;
- gráficos;
- estados vazios;
- skeletons;
- mensagens de erro;
- confirmações;
- notificações;
- status;
- upload de arquivos;
- visualização de documentos.

Cada componente deve possuir:

- estados padronizados;
- variações responsivas;
- comportamento acessível;
- tratamento de erros;
- propriedades reutilizáveis;
- documentação mínima.

## 29. Design System

Centralizar os padrões do **CONECTA-Saúde** em tokens.

```css
:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;

  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;

  --container-max-width: 1440px;
  --touch-target-min: 44px;

  --header-height-mobile: 56px;
  --header-height-desktop: 64px;

  --sidebar-width-expanded: 280px;
  --sidebar-width-collapsed: 72px;

  --z-base: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
}
```

O Design System deve definir:

- paleta de cores;
- tipografia;
- espaçamentos;
- bordas;
- raios;
- sombras;
- ícones;
- tamanhos;
- estados de interação;
- breakpoints;
- larguras máximas;
- camadas;
- formulários;
- feedbacks;
- navegação;
- tabelas;
- cards;
- modais.

## 30. Estados obrigatórios

Toda tela deve prever:

- normal;
- carregando;
- sem dados;
- erro;
- sem conexão;
- sem permissão;
- sessão expirada;
- sucesso;
- dados parcialmente carregados;
- manutenção;
- sincronização;
- envio em andamento.

Não apresentar telas vazias sem orientação.

## 31. Modais e diálogos

### Desktop

- centralizar;
- limitar largura;
- bloquear o fundo;
- permitir fechamento por botão;
- permitir Escape quando apropriado;
- controlar foco;
- retornar foco ao elemento original.

### Mobile

- largura quase total;
- bottom sheet quando apropriado;
- rolagem interna;
- altura baseada na área visível;
- respeito ao teclado virtual;
- respeito às safe areas;
- botões sempre acessíveis.

## 32. Elementos fixos

Cabeçalhos, sidebars, barras inferiores e botões flutuantes devem:

- respeitar safe areas;
- não cobrir conteúdo;
- não esconder campos;
- não bloquear mensagens;
- usar `z-index` padronizado;
- reagir ao teclado;
- funcionar no Safari iOS;
- funcionar no Chrome Android.

## 33. Responsividade baseada em conteúdo

Considerar:

- comprimento do texto;
- quantidade de campos;
- quantidade de ações;
- quantidade de colunas;
- tamanho das imagens;
- idioma;
- aumento de fonte;
- permissões;
- dados retornados pela API.

A responsividade não pode depender apenas da largura da tela.

## 34. Dados variáveis

Testar com:

- nomes longos;
- endereços extensos;
- e-mails longos;
- documentos;
- descrições grandes;
- mensagens de erro longas;
- valores elevados;
- datas e horários;
- textos sem espaços;
- dados ausentes.

Não permitir:

- sobreposição;
- quebra de layout;
- corte de botões;
- ocultação de informações;
- rolagem horizontal indevida.

## 35. Resoluções obrigatórias de teste

Testar:

- 320px;
- 360px;
- 375px;
- 390px;
- 412px;
- 480px;
- 768px;
- 820px;
- 1024px;
- 1280px;
- 1366px;
- 1440px;
- 1920px.

Também testar:

- zoom em 125%;
- zoom em 150%;
- zoom em 200%;
- teclado virtual aberto;
- modo retrato;
- modo paisagem;
- sidebar aberta;
- sidebar recolhida;
- conexão lenta;
- falha de API;
- escalas de fonte;
- navegação por teclado;
- leitor de tela;
- textos longos;
- dados vazios;
- muitos registros.

Sempre que possível, validar em dispositivos reais:

- Android de tela pequena;
- Android de tela grande;
- iPhone;
- tablet;
- notebook;
- monitor desktop.

## 36. Critérios de aceite

Uma tela só pode ser considerada concluída quando:

1. funcionar a partir de 320px;
2. não possuir rolagem horizontal indevida;
3. não apresentar sobreposição;
4. não cortar textos importantes;
5. não distorcer imagens;
6. funcionar com toque, mouse e teclado;
7. possuir contraste adequado;
8. manter hierarquia visual;
9. manter funções em mobile e desktop;
10. possuir estados de carregamento, erro e vazio;
11. adaptar menus, tabelas, cards e formulários;
12. manter boa performance;
13. funcionar em retrato e paisagem;
14. respeitar safe areas;
15. preservar dados durante mudanças de layout;
16. não exigir recarregamento após rotação;
17. cumprir acessibilidade;
18. funcionar nos principais navegadores;
19. preservar filtros e estados;
20. não ocultar funcionalidades essenciais.

## 37. Fluxo obrigatório de execução

Ao receber uma tarefa:

### Etapa 1 — Analisar

Identificar:

- objetivo da tela;
- perfil de usuário;
- dados exibidos;
- ações disponíveis;
- estados necessários;
- riscos de segurança;
- comportamento esperado em mobile, tablet e desktop.

### Etapa 2 — Planejar

Definir:

- componentes;
- hierarquia visual;
- fluxo de navegação;
- estrutura mobile;
- adaptação para tablet;
- adaptação para desktop;
- tratamento de erro;
- acessibilidade;
- testes.

### Etapa 3 — Implementar

Começar pela versão mobile.

Depois adaptar progressivamente para:

1. mobile grande;
2. tablet;
3. notebook;
4. desktop;
5. telas grandes.

### Etapa 4 — Validar

Executar o checklist desta Skill antes de concluir.

### Etapa 5 — Entregar

Apresentar:

1. nome e objetivo da tela;
2. componentes utilizados;
3. estrutura mobile;
4. estrutura tablet;
5. estrutura desktop;
6. regras de responsividade;
7. estados;
8. validações;
9. acessibilidade;
10. segurança;
11. tratamento de erros;
12. critérios de aceite;
13. código completo;
14. orientações de teste.

## 38. Qualidade do código

O código deve ser:

- organizado;
- modular;
- reutilizável;
- tipado quando aplicável;
- fácil de manter;
- preparado para expansão;
- sem duplicação;
- com nomes claros;
- com tratamento de erros;
- com estilos centralizados;
- com componentes desacoplados;
- com separação de responsabilidades.

Separar:

- interface;
- regras de negócio;
- serviços;
- APIs;
- validações;
- estado;
- autenticação;
- autorização;
- estilos;
- componentes.

Não usar soluções temporárias que prejudiquem outras resoluções.

## 39. Soluções proibidas

Não utilizar:

- layout exclusivo para desktop;
- layout exclusivo para um aparelho;
- largura rígida sem justificativa;
- altura rígida desnecessária;
- posicionamento absoluto excessivo;
- fontes ilegíveis;
- botões pequenos;
- tabelas comprimidas;
- rolagem horizontal na página inteira;
- funções essenciais ocultas;
- páginas duplicadas para mobile e desktop;
- ajustes improvisados por resolução;
- informações acessíveis apenas por hover;
- ocultação por CSS como mecanismo de autorização.

## 40. Checklist final obrigatório

Antes de concluir qualquer tarefa, confirmar:

- [ ] A implementação começou pelo mobile.
- [ ] A tela funciona a partir de 320px.
- [ ] Não existe rolagem horizontal indevida.
- [ ] Não existem elementos sobrepostos.
- [ ] Textos longos não quebram o layout.
- [ ] Botões são confortáveis para toque.
- [ ] A navegação funciona com teclado.
- [ ] O foco está visível.
- [ ] Labels e mensagens de erro estão corretos.
- [ ] O teclado virtual não cobre ações.
- [ ] Safe areas foram consideradas.
- [ ] A orientação retrato e paisagem funciona.
- [ ] Dados preenchidos são preservados.
- [ ] Tabelas funcionam no mobile.
- [ ] Gráficos redimensionam corretamente.
- [ ] Estados vazio, carregando e erro foram implementados.
- [ ] Falhas de conexão foram tratadas.
- [ ] Nenhum dado sensível é exposto.
- [ ] Funcionalidades essenciais existem no mobile.
- [ ] A versão desktop aproveita o espaço adicional.
- [ ] A tela foi testada nos breakpoints obrigatórios.
- [ ] O zoom de até 200% não quebra o layout.
- [ ] A implementação atende aos critérios de aceite.

## 41. Instrução final

O **CONECTA-Saúde deve ser mobile-first por definição**.

Toda tela deve oferecer uma experiência completa, segura, acessível,
profissional e responsiva em mobile, tablet e desktop.

Nenhuma implementação pode ser considerada concluída sem a validação integral
das regras e do checklist desta Skill.
