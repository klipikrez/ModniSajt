import Container from "../Components/Container";
import classes from "./News.module.css";
import ArticleWide from "../Components/ArticleWide";
import slika00 from "../media/222.jpg";
import slika01 from "../media/333.jpg";
import slika02 from "../media/999.jpg";
function NewsPage(params) {
  return (
    <Container>
      <ArticleWide
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={slika00}
      >
        "Fashion World" s uzbuđenjem najavljuje otvaranje nove prodavnice u srcu Kragujevca! Ovaj modni raj donosi najnovije kolekcije i vrhunsko iskustvo šopinga direktno u vaš grad. 
        Dođite i istražite sofisticirani prostor, osetite eleganciju naših komada i prepustite se vrhunskom modnom doživljaju. Budite deo modne revolucije jer "Fashion World" dolazi pravo do vas u Kragujevcu.
      </ArticleWide>{" "}
      <ArticleWide
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={slika01}
      >
       "Fashion World" sa zadovoljstvom najavljuje svoje prisustvo u Subotici! U aprilu, naša nova prodavnica otvara vrata, donoseći najnovije trendove i sofisticiranu modu direktno u vaš grad.
        Pridružite nam se u ovoj modnoj avanturi, istražite pažljivo odabrane kolekcije u elegantnom prostoru, i doživite nezaboravno iskustvo šopinga. Subotice, spremi se za modnu revoluciju jer "Fashion World" stiže k tebi!
      </ArticleWide>{" "}
      <ArticleWide
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={slika02}
      >
       "Fashion World" uskoro otvara vrata na jednoj od najživopisnijih lokacija u Beogradu - Vračaru! U letnjim mesecima, naša nova prodavnica donosi vrhunsku modu i sofisticirano iskustvo šopinga direktno na ovo neodoljivo mesto. Očekujte ekskluzivnost, najnovije kolekcije i besprekoran prostor koji odražava duh leta.
      Ne propustite priliku da doživite vrhunski modni doživljaj jer "Fashion World" stiže na Vračar, unoseći svežinu i eleganciju u letnje dane Beograda.





      </ArticleWide>
    </Container>
  );
}
export default NewsPage;
