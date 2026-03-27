import type { Metadata } from 'next';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Vaqueria',
  description: 'Plataforma de gestión de vaqueria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
