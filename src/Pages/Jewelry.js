import Container from "../Components/Container";
import classes from "./Jewelry.module.css";
import ArticleWideContent from "../Components/ArticleWideContent";
import polka11 from "../media/auu.jpeg";
import polka4 from "../media/3434.jpeg";
import polka5 from "../media/1212.jpeg";
function JewelryPage(params) {
  return (
    <Container>
      {" "}
      <ArticleWideContent
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={polka11}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem
        euismod, commodo nisi id, cursus diam. 
      </ArticleWideContent>{" "}
      <ArticleWideContent
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={polka4}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem
        euismod, commodo nisi id, cursus diam. 
      </ArticleWideContent>{" "}
      <ArticleWideContent
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={polka5}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem
        euismod, commodo nisi id, cursus diam. 
      </ArticleWideContent>
    </Container>
  );
}
export default JewelryPage;
