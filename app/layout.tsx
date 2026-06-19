import './globals.css';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'Radar Ciudadano',
  description: 'Comparación programática ciudadana',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
