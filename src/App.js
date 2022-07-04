import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Worked } from "./components/Worked";

export function App() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutMe />
      <Worked />
      <Footer />
    </>
  );
}
