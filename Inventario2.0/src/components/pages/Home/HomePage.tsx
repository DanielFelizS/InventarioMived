import Navigation from "../../molecules/Navbar";
import Pasantes from "../../Pasantes";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <h1>Acerda de</h1>

      <div id="contenedor" class="container">
        <Pasantes
          nombre="Daniel J. Felipe"
          apellido="Féliz Santana"
          IconName="Daniel"
          personaImg="../img/DanielFS.jpeg"
          number="+1 (849) 446-9260"
        />
      </div>
    </>
  );
}
