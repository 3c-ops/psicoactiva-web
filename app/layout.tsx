import type { Metadata } from 'next';
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400','500','600'] });
const source = Source_Sans_3({ subsets: ['latin'], variable: '--font-sans', weight: ['300','400','500','600'] });

export const metadata: Metadata = { title: 'PsicoActiva | Centro Boutique de Salud Mental', description: 'Atención clínica especializada en Paso Hondo, Quilpué.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="es" className={`${cormorant.variable} ${source.variable}`}><body>{children}</body></html>;
}
