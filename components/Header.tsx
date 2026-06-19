import Link from 'next/link';
export function Header(){return <header className="border-b border-line bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"><Link href="/" className="text-xl font-bold">Radar Ciudadano</Link><nav className="flex gap-4 text-sm"><Link href="/admin" className="link">Admin</Link></nav></div></header>}
