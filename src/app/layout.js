import NavBar from "@/components/navbar/NavBar";
import { ThemeProvider } from "@/context/ThemeContext";
import { inter, yeseva_One } from "@/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Eric Colday Noubissi - Développeur frontend Reactjs/React Native",
  description:
    "En tant que développeur front-end junior, je possède un arsenal impressionnant de compétences en HTML, CSS, JavaScript, React, Tailwind et SCSS. J'excelle dans la conception et la maintenance de sites Web réactifs qui offrent une expérience utilisateur fluide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider>
          <main className="container">
            <div className="header">
              <NavBar />
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
