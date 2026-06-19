import { DIMENSIONS, Dimension } from './dimensions';
export type ScoreMap = Record<Dimension, number>;
export function normalizeScores(raw: ScoreMap): ScoreMap { const max=Math.max(1,...Object.values(raw)); return Object.fromEntries(DIMENSIONS.map(d=>[d, Math.round((raw[d]/max)*10*10)/10])) as ScoreMap; }
export function matchCitizenToCandidate(citizen: ScoreMap, candidate: ScoreMap){ const diffs=DIMENSIONS.map(d=>({dimension:d,diff:Math.abs((citizen[d]||0)-(candidate[d]||0))})); const avg=diffs.reduce((s,d)=>s+d.diff,0)/DIMENSIONS.length; const match=Math.max(0,Math.round(100-(avg*10))); return {match, similarities:[...diffs].sort((a,b)=>a.diff-b.diff).slice(0,3), differences:[...diffs].sort((a,b)=>b.diff-a.diff).slice(0,3)}; }
