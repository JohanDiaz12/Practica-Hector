// =====================================================================
// supabase-config.js — conexión del Portal con Supabase
// ---------------------------------------------------------------------
// Solo va aquí la clave "anon public" (pública, pensada para el sitio).
// NUNCA pongas la clave "service_role" en este archivo ni en el repo.
// Valores en: Supabase → Project Settings → API
// =====================================================================

const SUPABASE_URL = 'https://kxlnprryhutwjnevwvul.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_nTXUP9UAf-j-DbqRhPD6nw_QO9ZuSdX'; // clave publishable (pública)

// La librería (CDN) expone window.supabase con createClient.
// Lo reemplazamos por el cliente ya conectado, para usar `supabase.auth...` en index.html.
window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
