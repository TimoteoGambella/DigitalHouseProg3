import React from "react";

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

  const arrayCategories = ["category 1","category 2","category 3","category 4","category 5","category 6"]

  const arrayNavbar = ["menu5","menu6","menu7","menu8"]

  const arrayTarjetas = ["fas fa-clipboard-list fa-2x text-gray-300","fas fa-dollar-sign fa-2x text-gray-300","fas fa-user fa-2x text-gray-300"]

  return (
    <div className="App">
      <Navbar arrayNavbar={arrayNavbar}/>
      <Title title="My FIRST App in React"/>

      <main>
        <section className="top-data">
          {arrayTarjetas.map((tarjeta,idx)=><ElementoFicha key={idx} logo={tarjeta}/>)}
        </section>

        <h2>Categories in databases</h2>
        <section className="general-data">
          {arrayCategories.map((category,idx) =><CategoryCard key={category+idx} categoryName={category}/>)}
        </section>

        <h2>Personajes de peliculas</h2>
        <section className="personajes-contenedor">
          {arrayHeroes.map((heroe,i) => <Card key={i} name={heroe.name} description={heroe.description} photo={heroe.photo}/>)}
        </section>
      </main>
    </div>
  );
}

export default App;
