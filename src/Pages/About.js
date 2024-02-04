import Container from "../Components/Container";
import ImageContainer from "../Components/ImageContainer";
import classes from "./About.module.css";
import BobImage from "../media/66.jpeg";

function AboutPage(params) {
  return (
    <Container>
      <h1>
        Dobrodošli u svet stila i autentičnosti - dobrodošli u{" "}
        <span className="bob">Fashion World</span>.
      </h1>
      <p>
        <span className="bob">Fashion World</span> je više od modnog brenda. Mi smo priča
        o izražavanju individualnosti kroz modu. Ovdje u{" "}
        <span className="bob">Fashion World-u</span>, svaki komad garderobe nosi sa sobom
        priču, inspiraciju i inovaciju. Naša strast je stvaranje odeće koja nije
        samo trendi, već odražava duh onih koji je nose.
      </p>
      <ImageContainer
        description="Idemo u napad!"
        id="BOB"
        style={(classes.ImageContainer, { width: "322px", float: "left" })}
        src={BobImage}
      />
      <p>
        Naši komadi su kreirani s pažnjom, istraživanjem i brigom o detaljima.
        Svaka šav je smišljen s namerom, svaki materijal je odabran s ljubavlju
        prema kvalitetu. Od elegantnih komada za poslovne sastanke do udobnih,
        ali stilskih kombinacija za opuštena večernja druženja -{" "}
        <span className="bob">Fashion World</span> je tu da obogati vaš svakodnevni stil.
      </p>
      <p>
        Naša misija nije samo stvaranje odeće, već i podržavanje vaše
        jedinstvenosti. Mi verujemo da je moda način izražavanja vaše ličnosti,
        i zato vam nudimo kolekciju koja se prilagođava vašem stilu.
      </p>
      <p>
        Dobrodošli u <span className="bob">Fashion World</span> - mesto gde se moda
        susreće s karakterom, gde stil nije samo odevna kombinacija, već način
        života. Hajde da zajedno istražimo svet mogućnosti koje moda pruža i
        učinimo da vaš stil priča vašu jedinstvenu priču.
      </p>
      <p style={{ textAlign: "center", marginBottom: 0 }}>
        <span className="bob">Fashion World</span>, gde se modna inspiracija rađa iz
        svakodnevnog života.
      </p>
    </Container>
  );
}
export default AboutPage;
