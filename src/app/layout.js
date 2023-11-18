import "./globals.css";
import Navbar from "@/components/Navbar";
import ReduxProvider from "@/provider/reduxProvider";

export const metadata = {
  title: "NextAuthPro",
  description: "NextAuthPro",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Navbar></Navbar>
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
