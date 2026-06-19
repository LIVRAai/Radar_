import { supabaseAdmin } from '@/lib/supabase-server';
import { DIMENSION_LABELS, DIMENSIONS } from '@/lib/dimensions';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const s = supabaseAdmin();

  const { data, error } = await s
    .from('citizen_results')
    .select('*,municipalities(name)')
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) {
    return (
      <div className="card">
        <h1 className="text-2xl font-bold">Dashboard de resultados</h1>
        <p className="text-red-600">Error cargando resultados: {error.message}</p>
      </div>
    );
  }

  const results = data ?? [];
  const total = results.length;

  const avg = Object.fromEntries(
    DIMENSIONS.map((d) => [
      d,
      total
        ? Math.round(
            (results.reduce((a: number, r: any) => a + (r.scores?.[d] || 0), 0) / total) * 10
          ) / 10
        : 0,
    ])
  );

  return (
    <div className="grid gap-4">
      <div className="card">
        <h1 className="text-2xl font-bold">Dashboard de resultados</h1>
        <p>Total de encuestas completadas: {total}</p>
      </div>

      <div className="card">
        <h2 className="font-bold">Promedio por dimensión</h2>
        {DIMENSIONS.map((d) => (
          <p key={d}>
            {DIMENSION_LABELS[d]}: {avg[d]}
          </p>
        ))}
      </div>

      <div className="card overflow-x-auto">
        <h2 className="font-bold">Resultados recientes anónimos</h2>
        <pre className="text-xs">{JSON.stringify(results.slice(0, 10), null, 2)}</pre>
      </div>
    </div>
  );
}
