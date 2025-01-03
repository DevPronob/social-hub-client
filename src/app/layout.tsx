import Provider from '@/lib/Providers';
import './globals.css'; // Import global styles
import { Roboto } from 'next/font/google'; // Updated import statement

const roboto = Roboto({
  subsets: ['latin'], // Specify Latin subset
  weight: ['400', '700'], // Specify font weights (optional)
});

export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js app with Latin fonts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}> {/* Apply the Roboto font */}
        <Provider>
        {children}
        </Provider>
        
      </body>
    </html>
  );
}
