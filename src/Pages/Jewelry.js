import Container from "../Components/Container";
import classes from "./Jewelry.module.css";
import ArticleWideContent from "../Components/ArticleWideContent";
import slika00 from "../media/auu.jpeg";
import slika01 from "../media/3434.jpeg";
import slika02 from "../media/1212.jpeg";
function JewelryPage(params) {
  return (
    <Container>
      {" "}
      <ArticleWideContent
        description=""
        id="Chrome narukvica"
        alt="Chrome narukvica"
        style={({}, {})}
        src={slika00}
      ></ArticleWideContent>{" "}
      <ArticleWideContent
        description=""
        id="Crystal minđuše"
        alt="Crystal minđuše"
        style={({}, {})}
        src={slika01}
      ></ArticleWideContent>{" "}
      <ArticleWideContent
        description=""
        id="Black heart minđuše"
        alt="Black heart minđuše"
        style={({}, {})}
        src={slika02}
      ></ArticleWideContent>
    </Container>
  );
}
export default JewelryPage;
