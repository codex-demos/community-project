import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Community Project',
  description: 'Search for new products, buy, sale, trade. Local Community',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
