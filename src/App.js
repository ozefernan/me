import { AboutMe } from "./components/AboutMe";
import { Building } from "./components/Building";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { PreLoader } from "./components/PreLoader";
import { Worked } from "./components/Worked";

export function App() {
  return (
    <>
      <PreLoader />
      <Header />
      <HomePage />
      <AboutMe />
      <Worked />
      <Building />
      <Contact />
      <Footer />
    </>
  );
}
