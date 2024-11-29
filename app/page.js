import ContactForm from "./components/ContactForm";
import ProfileOverview from "./components/ProfileOverview";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <ProfileOverview />
      <Skills />
      <ContactForm />
    </>
  );
}
