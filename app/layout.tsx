import "./globals.css";

export const metadata = {
  title: 'Figo Labs',
  description: 'Your Description',
  icons: {
    icon: 'https://res.cloudinary.com/cyclops-information-systems/image/upload/v1753451440/FigoAILabs/MailPilot/favicon_rsqig2.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
