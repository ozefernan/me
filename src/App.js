import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";

export function App() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutMe />
      <Footer />
    </>
  );
}
