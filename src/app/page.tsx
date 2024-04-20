import Form from "./components/Form";
import Header from "./components/Header";
import Info from "./components/Info";
import Section from "./ui/Section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Info />
        </Section>
        <Section className="bg-form">
          <Form />
        </Section>
      </main>
    </>
  );
}
