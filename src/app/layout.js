import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuoteProvider from "../components/QuoteProvider";

export const metadata = {
  title: "Rameshwar Enterprises | Premium Biodiesel Production Plants",
  description: "Leading manufacturer of automated biodiesel production plants. Sustainable energy solutions engineering.",
  icons: {
    icon: '/logo.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900 relative">
        <QuoteProvider>
          <Navbar />
          {children}
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}