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
  suporteAdmin: "Suporte: Bruno R. Machado · (17) 9••••-••••",

  instagram: { usuario: "casachurch_", url: "https://www.instagram.com/casachurch_/" },
  whatsapp: "5517900000000", // número da igreja (placeholder) — formato wa.me

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

  ministerios: ["Louvor", "Kids", "Recepção", "Intercessão", "Casais", "Diaconato"],

  // CARTÕES MONTÁVEIS — o pastor liga/desliga (ativo) e cria novos.
  cartoes: [
    { id:"cultos",      ativo:true,  tipo:"cultos",      icone:"ti-clock-hour-8",     titulo:"Cultos" },
    { id:"ministerios", ativo:true,  tipo:"ministerios", icone:"ti-users-group",      titulo:"Ministérios" },
    { id:"endereco",    ativo:true,  tipo:"endereco",    icone:"ti-map-pin",          titulo:"Endereço", texto:"Estrada do Mineiro, 575 — Penápolis-SP, 16303-330" },
    { id:"atendimento", ativo:true,  tipo:"texto",       icone:"ti-heart-handshake",  titulo:"Atendimento pastoral", texto:"Precisa de oração ou conversa? Fale com a gente.", botao:"Falar com o pastor" },
    { id:"dizimos",     ativo:false, tipo:"texto",       icone:"ti-gift",             titulo:"Dízimos e ofertas", texto:"Contribua com a obra. Chave PIX e dados aqui.", botao:"Ver como contribuir" }
  ]
};
