import Card from "./components/Card/Card";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import ElementoFicha from "./components/ElementoFicha/ElementoFicha";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";

import foto1 from "./assets/ahsoka.jpg";
import foto2 from "./assets/anakin.jpg"
import foto3 from "./assets/batman.jpg"
import foto4 from "./assets/capAmerica.jpg"
import foto5 from "./assets/cell.jpg"
import foto6 from "./assets/hulkSmall.jpg"
import foto7 from "./assets/kyloRen.jpg"
import foto8 from "./assets/luke.jpg"
import foto9 from "./assets/obiWan.jpg"
import foto10 from "./assets/strange.jpg"
import foto11 from "./assets/superman.jpg"
import foto12 from "./assets/vegetta.jpg"
import foto13 from "./assets/yoda.jpg"

function App() {

  const arrayHeroes = [
    {
      name:"Ahsoka",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto1
    },
    {
      name:"Anakin",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto2
    },
    {
      name:"Batman",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto3
    },
    {
      name:"Capitan America",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto4
    },
    {
      name:"Cell",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto5
    },
    {
      name:"Hulk Small",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto6
    },
    {
      name:"Kylo Ren",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto7
    },
    {
      name:"Luke",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto8
    },
    {
      name:"Obi Wan",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto9
    },
    {
      name:"Strange",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto10
    },
    {
      name:"Superman",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto11
    },{
      name:"Vegetta",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto12
    },{
      name:"Yoda",
      description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, ut labore et dolore magnam aliquam quaerat voluptatem",
      photo:foto13
    },
  ]

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
