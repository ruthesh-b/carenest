import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CareNest — Healthcare, closer to home',
  description: 'A clickable concept prototype for a Bangalore healthcare marketplace.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
