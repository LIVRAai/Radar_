import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#17202a', mist:'#f5f7f9', line:'#d9e1e8', slateblue:'#465a69' } } }, plugins: [] } satisfies Config;
