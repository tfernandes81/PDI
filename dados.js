/* ==========================================================
   DADOS DO PDI: este é o único arquivo que você precisa editar.

   Como mexer:
   - ADICIONAR um item: copie uma linha/bloco { ... }, cole logo
     abaixo e troque os textos.
   - REMOVER um item: apague o bloco inteiro { ... }, incluindo
     a vírgula no final.
   - Mantenha as aspas "" e as vírgulas entre os itens.
   - Para usar aspas dentro de um texto, escreva \" (barra + aspas).
   ========================================================== */

window.PDI = {

  /* ---------- CAPA ---------- */
  perfil: {
    nome: "Tiago Fernandes",
    ano: 2026,
    foto: "imagens/tiago.jpg",
    fotoAlt: "Foto de Tiago Fernandes",
    tituloLinha1: "Meu plano",
    tituloLinha2: "de evolução.",
    apresentacao: "Tiago Fernandes · Cargo atual. Aqui está onde estou hoje, onde quero chegar até dezembro e o que vou fazer a cada trimestre para chegar lá.",
    periodo: "Jan a Dez 2026",
    proximoCargo: "Pessoa Desenvolvedora Sênior",
    revisao: "A cada 3 meses"
  },

  /* ---------- ONDE ESTOU (notas de 0 a 100) ---------- */
  competencias: {
    titulo: "Onde estou e onde quero chegar",
    descricao: "Autoavaliação de 0 a 100 em cada competência. A barra azul é o nível atual, a listrada é a meta do ano e o traço marca o ponto de chegada.",
    itens: [
      { nome: "Arquitetura de software", atual: 45, meta: 75 },
      { nome: "Liderança técnica",       atual: 35, meta: 70 },
      { nome: "Comunicação",             atual: 60, meta: 85 },
      { nome: "Inglês profissional",     atual: 50, meta: 80 },
      { nome: "Cloud e DevOps",          atual: 30, meta: 60 }
    ]
  },

  /* ---------- METAS ----------
     situacao: "andamento" (amarelo) | "concluida" (azul) | "planejada" (cinza)
     aberta: true  → o bloco já aparece expandido (use em um só) */
  metas: {
    titulo: "Três metas para o ano",
    descricao: "Cada meta tem um resultado que dá para medir. Clique para ver o plano completo.",
    itens: [
      {
        titulo: "Liderar o design de um serviço do zero",
        status: "Em andamento",
        situacao: "andamento",
        aberta: true,
        acao: "Propor, documentar e conduzir a arquitetura do novo serviço de pagamentos.",
        resultado: "Serviço em produção com ADRs publicados e revisados pelo time.",
        prazo: "30 de setembro de 2026"
      },
      {
        titulo: "Chegar ao inglês fluente em reuniões",
        status: "Em andamento",
        situacao: "planejada",
        acao: "Aulas semanais de conversação e uma apresentação técnica por trimestre em inglês.",
        resultado: "Conduzir uma reunião inteira com o time global sem apoio.",
        prazo: "30 de novembro de 2026"
      },
      {
        titulo: "Mentorar duas pessoas júnior",
        status: "Concluída no 1º tri",
        situacao: "concluida",
        acao: "Encontros quinzenais com plano de estudos individual para cada pessoa.",
        resultado: "Ambas entregando tarefas de média complexidade com autonomia.",
        prazo: "31 de março de 2026"
      }
    ]
  },

  /* ---------- CRONOGRAMA ----------
     fase: "feito" (preenchido) | "atual" (amarelo) | "proximo" (vazio) */
  cronograma: {
    titulo: "O caminho, trimestre a trimestre",
    descricao: "Cada etapa termina com uma conversa de revisão e um ajuste de rota.",
    itens: [
      { periodo: "Jan a Mar", titulo: "Base",         fase: "feito",   texto: "Diagnóstico de competências e início da mentoria." },
      { periodo: "Abr a Jun", titulo: "Prática",      fase: "atual",   texto: "Desenho do novo serviço e curso de arquitetura." },
      { periodo: "Jul a Set", titulo: "Entrega",      fase: "proximo", texto: "Colocar o serviço em produção e apresentar em inglês." },
      { periodo: "Out a Dez", titulo: "Consolidação", fase: "proximo", texto: "Avaliação final e proposta de promoção." }
    ]
  },

  /* ---------- ESTUDOS ----------
     Cada grupo é um bloco. Os itens são só textos. */
  estudos: {
    titulo: "O que vou estudar",
    descricao: "Recursos escolhidos para fechar as lacunas das competências acima.",
    grupos: [
      { titulo: "Livros", itens: [
        "Designing Data-Intensive Applications",
        "The Staff Engineer's Path",
        "Team Topologies"
      ]},
      { titulo: "Cursos", itens: [
        "Arquitetura de software (trilha da empresa)",
        "AWS Solutions Architect",
        "Inglês para negócios"
      ]},
      { titulo: "Prática", itens: [
        "Escrever um ADR por mês",
        "Palestra interna a cada trimestre",
        "Contribuir com um projeto open source"
      ]}
    ]
  },

  /* ---------- RODAPÉ ---------- */
  rodape: {
    titulo: "Vamos conversar?",
    texto: "Quer dar feedback ou trocar ideias sobre o plano? Fale comigo:",
    links: [
      { nome: "GitHub",   url: "https://github.com/tfernandes81" },
      { nome: "LinkedIn", url: "https://linkedin.com/in/seu-usuario" }
    ]
  }
};
