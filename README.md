# Radar Ciudadano

MVP web para municipios de Colombia que compara prioridades ciudadanas con planes de gobierno cargados, sin recomendar voto.

## Stack
Next.js App Router, TypeScript, Tailwind CSS, Supabase Auth/Database/Storage y OpenAI API. Compatible con Vercel.

## Instalación local
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Supabase
1. Cree un proyecto en Supabase.
2. Abra SQL Editor y ejecute `supabase/schema.sql`.
3. Cree un usuario administrador en Authentication > Users.
4. Verifique el bucket `government-plans`; el SQL lo crea como público.
5. Copie URL, anon key y service role key a `.env.local`.

## OpenAI
1. Cree una API key.
2. Configure `OPENAI_API_KEY` en `.env.local` y en Vercel.
3. Opcional: cambie `OPENAI_MODEL`.

## Uso
- `/` muestra la landing pública.
- `/evaluacion` permite seleccionar municipio, responder encuesta anónima y ver coincidencias programáticas.
- `/admin/login` inicia sesión con Supabase Auth.
- `/admin` enlaza gestión de municipios, candidatos, preguntas y resultados.
- `POST /api/analyze-plan` recibe `{ "candidate_id": "..." }`, extrae el PDF del candidato, llama OpenAI y guarda resumen/puntajes.

## Despliegue en Vercel
1. Importe el repositorio.
2. Configure variables de entorno de `.env.example`.
3. Despliegue.

## Neutralidad
Radar Ciudadano no pregunta intención de voto y no recomienda candidatos. Solo muestra coincidencia programática calculada con diferencias absolutas promedio entre dimensiones.
