import './globals.css';

export const metadata = {
  title: 'Your App Name',
  description: 'A description of your app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}