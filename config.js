/* =====================================================================
   Casa Church — CONTEÚDO EDITÁVEL (o que o admin controla)
   Hoje fica aqui; na próxima etapa isso passa a vir do banco (Supabase)
   e o pastor edita por uma tela bonita, sem tocar em código.
   ===================================================================== */
window.CASA = {
  nome: "Casa Church",
  fraseAbertura: "Essa CASA é sua!",
  rodape: "© Casa Church",

  // NÃO aparece na página pública — fica guardado só pra área do admin
  suporteAdmin: "Idealizador do site: Bruno R. Machado · (17) 98203-1001 · qualquer dúvida, chamar.",

  instagram: { usuario: "casachurch_", url: "https://www.instagram.com/casachurch_/" },
  whatsapp: "5517900000000", // número da igreja (placeholder) — formato wa.me
  heroFoto: "", // foto/banner do topo (vazio = fundo padrão). Editável no painel.
  pix: { chave: "", nome: "" }, // dízimos/ofertas — editável no painel

  // Tipos de solicitação que a pessoa pode enviar na home (configurável no painel).
  // pedeEndereco:true mostra os campos de casa/empresa, endereço e telefone (ex.: visita).
  solicitacoes: [
    { id: "oracao", label: "Pedido de oração", ativo: true,  pedeEndereco: false },
    { id: "visita", label: "Pedido de visita", ativo: true,  pedeEndereco: true  }
  ],

  // Dias: 0=Dom 1=Seg 2=Ter 3=Qua 4=Qui 5=Sex 6=Sáb
  cultos: [
    { diaSemana: 0, dia: "Domingo", nome: "Celebração", hora: "09h30", h24: 9 },
    { diaSemana: 0, dia: "Domingo", nome: "Celebração", hora: "18h30", h24: 18 },
    { diaSemana: 3, dia: "Quarta",  nome: "Oração",     hora: "20h00", h24: 20 }
  ],

  eventoEspecial: {
    ativo: true,
    titulo: "Semana da Consagração",
    texto: "21 a 27 de julho · cultos todas as noites às 19h30"
  },

  // Cada ministério tem nome, uma explicação e fotos (tudo editável no painel).
  // As fotos abaixo são EXEMPLO (picsum) — o pastor troca pelas reais no admin.
  ministerios: [
    { nome:"Louvor", descricao:"Conduzimos a igreja na adoração a Deus por meio da música. Se você canta ou toca um instrumento, há lugar pra você servir com seu dom.", fotos:["https://picsum.photos/seed/louvor1/640/420","https://picsum.photos/seed/louvor2/640/420"] },
    { nome:"Kids", descricao:"Cuidamos das crianças com amor e ensino bíblico enquanto os pais participam do culto. Um espaço seguro, alegre e cheio de Jesus.", fotos:["https://picsum.photos/seed/kids1/640/420","https://picsum.photos/seed/kids2/640/420"] },
    { nome:"Recepção", descricao:"Somos o primeiro sorriso de quem chega. Acolhemos visitantes e membros para que todos se sintam em casa desde a porta.", fotos:["https://picsum.photos/seed/recepcao1/640/420"] },
    { nome:"Intercessão", descricao:"Sustentamos a igreja em oração. Nos reunimos para clamar, agradecer e interceder pelas vidas, famílias e pela cidade.", fotos:["https://picsum.photos/seed/oracao1/640/420"] },
    { nome:"Casais", descricao:"Fortalecemos os relacionamentos à luz da Palavra, com encontros, conversas e comunhão entre casais de todas as fases.", fotos:["https://picsum.photos/seed/casais1/640/420"] },
    { nome:"Diaconato", descricao:"Servimos na prática: organização, estrutura e apoio para que cada culto e evento aconteça com excelência e cuidado.", fotos:["https://picsum.photos/seed/diaconato1/640/420"] }
  ],

  // CARTÕES MONTÁVEIS — o pastor liga/desliga (ativo) e cria novos.
  cartoes: [
    { id:"cultos",      ativo:true,  tipo:"cultos",      icone:"ti-clock-hour-8",     titulo:"Cultos" },
    { id:"ministerios", ativo:true,  tipo:"ministerios", icone:"ti-users-group",      titulo:"Ministérios" },
    { id:"endereco",    ativo:true,  tipo:"endereco",    icone:"ti-map-pin",          titulo:"Endereço", texto:"Estrada do Mineiro, 575 — Penápolis-SP, 16303-330" },
    { id:"atendimento", ativo:true,  tipo:"texto",       icone:"ti-heart-handshake",  titulo:"Atendimento pastoral", texto:"Precisa de oração ou conversa? Fale com a gente.", botao:"Falar com o pastor" },
    { id:"dizimos",     ativo:false, tipo:"pix",         icone:"ti-gift",             titulo:"Dízimos e ofertas", texto:"Sua contribuição abençoa e sustenta a obra. 🤍 Use a chave PIX abaixo:" }
  ]
};
