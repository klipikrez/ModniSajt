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
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={slika1}
      >
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem
        euismod, commodo nisi id, cursus diam. Fusce non ullamcorper risus. Sed
        nec ipsum vel nulla fermentum pretium. Proin fermentum felis nec velit
        ultricies, vitae consequat turpis pharetra. Vivamus ut tempor lorem.
        Integer sed leo eu lorem tempus consectetur. Ut nec justo sit amet odio
        sodales scelerisque vel non quam. Quisque vitae ante vitae ex dignissim
        condimentum.
        </p>
      </Article>
      <ArticleReversed
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={slika2}
      >
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem
        euismod, commodo nisi id, cursus diam. Fusce non ullamcorper risus. Sed
        nec ipsum vel nulla fermentum pretium. Proin fermentum felis nec velit
        ultricies, vitae consequat turpis pharetra. Vivamus ut tempor lorem.
        Integer sed leo eu lorem tempus consectetur. Ut nec justo sit amet odio
        sodales scelerisque vel non quam. Quisque vitae ante vitae ex dignissim
        condimentum.
        </p>
      </ArticleReversed>
      <Article
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={slika3}
      >
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem
        euismod, commodo nisi id, cursus diam. Fusce non ullamcorper risus. Sed
        nec ipsum vel nulla fermentum pretium. Proin fermentum felis nec velit
        ultricies, vitae consequat turpis pharetra. Vivamus ut tempor lorem.
        Integer sed leo eu lorem tempus consectetur. Ut nec justo sit amet odio
        sodales scelerisque vel non quam. Quisque vitae ante vitae ex dignissim
        condimentum.
        </p>
      </Article>
    </Container>
  );
}
export default ClothesFemalePage;
