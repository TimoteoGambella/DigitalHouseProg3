import Card from "./components/Card/Card";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import ElementoFicha from "./components/ElementoFicha/ElementoFicha";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";

import foto1 from "./ahsoka.jpg";
import foto2 from "./anakin.jpg"
import foto3 from "./batman.jpg"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Title title="My FIRST App in React"/>

      <main>
        <section className="top-data">
          <ElementoFicha logo={"fas fa-clipboard-list fa-2x text-gray-300"}/>
          <ElementoFicha logo={"fas fa-dollar-sign fa-2x text-gray-300"}/>
          <ElementoFicha logo={"fas fa-user fa-2x text-gray-300"}/>
        </section>

        <h2>Categories in databases</h2>
        <section className="general-data">
          <CategoryCard categoryName="category 1"/>
          <CategoryCard categoryName="category 2"/>
          <CategoryCard categoryName="category 3"/>
          <CategoryCard categoryName="category 4"/>
          <CategoryCard categoryName="category 5"/>
          <CategoryCard categoryName="category 6"/>
        </section>

        <h2>Personajes de peliculas</h2>
        <section className="personajes-contenedor">
          <Card logo={foto1} name="Ahsoka" description="ojdfkbv dfhvbkjdf vdfkjv dfvjlkjdfbv dsfljvkbdf"/>
          <Card logo={foto2} name="Anakin" description="ojdfkbv dfhvbkjdf vdfkjv dfvjlkjdfbv dsfljvkbdf"/>
          <Card logo={foto3} name="Batman" description="ojdfkbv dfhvbkjdf vdfkjv dfvjlkjdfbv dsfljvkbdf"/>
        </section>
      </main>
    </div>
  );
}

export default App;
