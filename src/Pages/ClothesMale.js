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
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={polka}
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
        src={polka1}
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
        src={polka2}
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
    </Container>
  );
}
export default ClothesMalePage;
