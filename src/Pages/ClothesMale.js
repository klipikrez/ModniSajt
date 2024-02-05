import Container from "../Components/Container";
import classes from "./ClothesMale.module.css";
import Article from "../Components/Article";
import ArticleReversed from "../Components/ArticleReversed";
import polka from "../media/88.jpeg";
import polka1 from "../media/99.jpeg";
import polka2 from "../media/00.jpeg";

function ClothesMalePage(params) {
  return (
    <Container>
      <ArticleReversed
        description=""
        id="Jesen ss23"
        style={(classes.ImageContainer, {})}
        src={polka}
      >
        <p>
          Jesenja kombinacija braon sakoa sa elegantnom trakom i pantalonama, ukombinovano sa svilenom rolkom. 
          <br></br>Paris Fashion Week (PFW) 2023
       
        </p>
      </ArticleReversed>
      <Article
        description=""
        id="Zima ss23"
        style={(classes.ImageContainer, {})}
        src={polka1}
      >
        <p>
        Klasičan komplet crnog sakoa i pantalona, i bele košulje sa crnom kravatom, upotpunjen modernim naočarama.
        <br></br>São Paulo Fashion Week (SPFW) 2023
        </p>
      </Article>
      <ArticleReversed
        description=""
        id="Proleće ss24"
        style={(classes.ImageContainer, {})}
        src={polka2}
      >
        <p>
          Aktuelna kombinacija svetlucavih kožnih braon pantalona, braon sakoa, i satenske otvorene košulje, omiljena od strane mnogih kritičara.
          <br></br>Milano Fashion Week (MFW) 2024
        </p>
      </ArticleReversed>
    </Container>
  );
}
export default ClothesMalePage;
