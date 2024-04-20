import Form from "./components/Form";
import Header from "./components/Header";
import Info from "./components/Info";
import Services from "./components/Services";
import Section from "./ui/Section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Info />
        </Section>
        <Section className="bg-form mmt-16 lg:h-[600px]">
          <Form />
        </Section>
        <Section>
          <Services />
        </Section>
      </main>
    </>
  );
}
