import { createClient } from '@supabase/supabase-js';

// Support both Vite (VITE_) and Next.js (NEXT_PUBLIC_) environment variable naming conventions.
// The optional chaining on import.meta.env / process.env prevents crashes in environments
// where either global is not defined (e.g., SSR, edge runtimes, or strict static pipelines).
const supabaseUrl =
  import.meta.env?.VITE_SUPABASE_URL ||
  (typeof process !== 'undefined' ? process.env?.NEXT_PUBLIC_SUPABASE_URL : '') ||
  '';

const supabaseAnonKey =
  import.meta.env?.VITE_SUPABASE_ANON_KEY ||
  (typeof process !== 'undefined' ? process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY : '') ||
  '';

// Failsafe: if either credential is missing (e.g. during a strict static CI build where
// secrets are absent), do NOT call createClient() — Supabase will throw a URL parse error
// that crashes the entire React tree and causes a blank screen. Instead, export null and
// let each consuming component degrade gracefully.
let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    '[BluePatch] Supabase credentials are not set. ' +
    'Form submissions will be disabled until VITE_SUPABASE_URL and ' +
    'VITE_SUPABASE_ANON_KEY (or their NEXT_PUBLIC_ equivalents) are configured.'
  );
}

export { supabase };
