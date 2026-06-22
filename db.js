/* =====================================================================
   Casa Church — ligação com o banco de dados (Supabase)
   A chave abaixo é pública de propósito (é a "publishable key"); quem
   protege os dados são as regras de segurança (RLS) lá no banco:
   qualquer um pode se cadastrar, mas só o admin logado consegue ler.
   ===================================================================== */
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://uxyibhyggqcgpzypmusp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_NNvLZhRBMI-l9l9uWGWNlQ_BAiZ8eMl';

export const sb = createClient(SUPABASE_URL, SUPABASE_KEY);
window.sb = sb;

/* Conteúdo do site: junta os padrões (config.js) com o que o admin
   salvou no banco. Se o banco não responder, usa só os padrões. */
export async function getConfig() {
  const base = window.CASA || {};
  try {
    const { data } = await sb.from('casa_config').select('dados').eq('id', 1).maybeSingle();
    if (data && data.dados) return { ...base, ...data.dados };
  } catch (e) { console.error('getConfig', e); }
  return base;
}
window.getConfig = getConfig;

/* Admin salva o conteúdo do site (objeto inteiro). */
export async function salvarConfig(dados) {
  const { error } = await sb.from('casa_config').upsert({ id: 1, dados, atualizado_em: new Date().toISOString() });
  if (error) throw error;
}
window.salvarConfig = salvarConfig;

/* Salva um cadastro (visitante ou membro). */
window.salvarCadastro = async function (reg) {
  const tipo = reg.tipo, nome = reg.nome, whatsapp = reg.whatsapp;
  const dados = { ...reg };
  delete dados.tipo; delete dados.nome; delete dados.whatsapp;
  const { error } = await sb.from('casa_cadastros').insert({ tipo, nome, whatsapp, dados });
  if (error) throw error;
};
