import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// —«»ÿ „‘—Ê⁄ﬂ «·√”«”Ì
const SUPABASE_URL = 'https://gkaakkdflupdwtrtaukn.supabase.co';

// «·„› «Õ «·⁄«„ (Publishable Key) «·–Ì ‰”Œ Â „‰ «·‘«‘… «·”«»ﬁ…
const SUPABASE_ANON_KEY = 'sb_publishable_u6pt7c6nNBzsrzYW8_KSyA_dtFNuC1r';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);