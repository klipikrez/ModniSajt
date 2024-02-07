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
        description=""
        id="Chrome narukvica"
        style={(classes.ImageContainer, {})}
        src={polka11}
      >
        
      </ArticleWideContent>{" "}
      <ArticleWideContent
        description=""
        id="Crystal minđuše"
        style={(classes.ImageContainer, {})}
        src={polka4}
      >
      
      </ArticleWideContent>{" "}
      <ArticleWideContent
        description=""
        id="Black heart minđuše"
        style={(classes.ImageContainer, {})}
        src={polka5}
      >
       
      </ArticleWideContent>
    </Container>
  );
}
export default JewelryPage;
