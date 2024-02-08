import Article from "../Components/Article";
import ArticleReversed from "../Components/ArticleReversed";
import Container from "../Components/Container";
import slika1 from "../media/denim.jpeg";
import slika2 from "../media/slika2.jpeg";
import slika3 from "../media/slika3.jpeg";
import classes from "./ClothesFemale.module.css";

function ClothesFemalePage(params) {
  return (
    <Container>
      <Article
        description=""
        id="Jesen ss23"
        alt="Jesen ss23"
        style={({}, {})}
        src={slika1}
      >
        <p>
          Kombinacija dvobojnih farmerki, majice sa printom, crnog sakoa sa
          leopard šarom, kao i tankog šala sa komplementarnim dezenoom.
          <br></br> London Fashion Week (LFW) 2023
        </p>
      </Article>
      <ArticleReversed
        description=""
        id="Proleće ss24"
        alt="Proleće ss24"
        style={({}, {})}
        src={slika2}
      >
        <p>
          Moderna kombinacija sivog kardigana, sivo-maslinaste mini suknje,
          upotpunjena kožnim čizmama i malom crnom torbom.
          <br></br> Paris Fashion Week (PFW) 2024
        </p>
      </ArticleReversed>
      <Article
        description=""
        id="Leto ss24"
        alt="Leto ss24"
        style={({}, {})}
        src={slika3}
      >
        <p>
          Bela svilena suknja, ukombinovana sa majicom bez rukava sa zmijskim
          dezenom, sa braon torbom.
          <br></br> São Paulo Fashion Week (SPFW) 2024
        </p>
      </Article>
    </Container>
  );
}
export default ClothesFemalePage;
