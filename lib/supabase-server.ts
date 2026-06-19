import { createClient } from '@supabase/supabase-js';

const FALLBACK_SUPABASE_URL = 'https://placeholder.supabase.co';
const FALLBACK_SUPABASE_SERVICE_ROLE_KEY = 'placeholder-service-role-key';

export const supabaseAdmin = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY || FALLBACK_SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } }
  );
