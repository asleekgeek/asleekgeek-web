import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASleekGeek - Beyond the Code. Building the Future.',
  description: 'Deep insights into software architecture, cutting-edge development practices, and technologies shaping tomorrow\'s digital landscape.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
