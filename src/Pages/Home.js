import { render } from "@testing-library/react";
import Container from "../Components/Container";
import ImageContainer from "../Components/ImageContainer";
import classes from "./Home.module.css";
import slika from "../media/22.jpeg";
import slika4 from "../media/asd.jpeg"
import slika5 from "../media/123123.jpeg"
import slika6 from "../media/55.jpeg"
import slika7 from "../media/11.jpeg"
import slika8 from "../media/77.jpeg"
import slika9 from "../media/33.jpeg"

function HomePage(params) {
  return (
    <Container className={classes.body}>
      <div className={classes.horizontal}>
        <ImageContainer
          description="Jesen ss19"
          id="BOB"
          style={(classes.ImageContainer, { position: "relative" })}
          src={slika}
        />

        <div className={classes.imageRack}>
          <ImageContainer
            description=""
            id="BOB"
            style={(classes.ImageContainer, {})}
            src={slika4}
          />
          <ImageContainer
            description=""
            id="BOB"
            style={(classes.ImageContainer, {})}
            src={slika5}
          />
          <ImageContainer
            description=""
            id="BOB"
            style={(classes.ImageContainer, {})}
            src={slika6}
          />
        </div>
      </div>
      <div className={classes.imageTower}>
        <ImageContainer
          description="Leto ss21"
          id="BOB"
          style={(classes.ImageContainer, {})}
          src={slika7}
        />
        <ImageContainer
          description="Leto ss22"
          id="BOB"
          style={(classes.ImageContainer, {})}
          src={slika8}
        />
        <ImageContainer
          description="Jesen ss22"
          id="BOB"
          style={(classes.ImageContainer, {})}
          src={slika9}
        />
      </div>
    </Container>
  );
}

export default HomePage;
