import Container from "../Components/Container";
import classes from "./Jewelry.module.css";
import ArticleWideContent from "../Components/ArticleWideContent";
import polka from "../media/auu.png";
function JewelryPage(params) {
  return (
    <Container>
      {" "}
      <ArticleWideContent
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={polka}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem
        euismod, commodo nisi id, cursus diam. Fusce non ullamcorper risus. Sed
        nec ipsum vel nulla fermentum pretium. Proin fermentum felis nec velit
        ultricies, vitae consequat turpis pharetra. Vivamus ut tempor lorem.
        Integer sed leo eu lorem tempus consectetur. Ut nec justo sit amet odio
        sodales scelerisque vel non quam. Quisque vitae ante vitae ex dignissim
        condimentum.
      </ArticleWideContent>{" "}
      <ArticleWideContent
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={polka}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem
        euismod, commodo nisi id, cursus diam. Fusce non ullamcorper risus. Sed
        nec ipsum vel nulla fermentum pretium. Proin fermentum felis nec velit
        ultricies, vitae consequat turpis pharetra. Vivamus ut tempor lorem.
        Integer sed leo eu lorem tempus consectetur. Ut nec justo sit amet odio
        sodales scelerisque vel non quam. Quisque vitae ante vitae ex dignissim
        condimentum.
      </ArticleWideContent>{" "}
      <ArticleWideContent
        description="Idemo u napad!"
        id="Ime proizvoda ovđe"
        style={(classes.ImageContainer, {})}
        src={polka}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem
        euismod, commodo nisi id, cursus diam. Fusce non ullamcorper risus. Sed
        nec ipsum vel nulla fermentum pretium. Proin fermentum felis nec velit
        ultricies, vitae consequat turpis pharetra. Vivamus ut tempor lorem.
        Integer sed leo eu lorem tempus consectetur. Ut nec justo sit amet odio
        sodales scelerisque vel non quam. Quisque vitae ante vitae ex dignissim
        condimentum.
      </ArticleWideContent>
    </Container>
  );
}
export default JewelryPage;
