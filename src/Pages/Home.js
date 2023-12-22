import { render } from "@testing-library/react";
import Container from "../Components/Container";
import ImageContainer from "../Components/ImageContainer";
import classes from "./Home.module.css";
import polka from "../media/auu.png";

function HomePage(params) {
  return (
    <Container className={classes.body}>
      <div className={classes.horizontal}>
        <ImageContainer
          description="Idemo u napad!"
          id="BOB"
          style={(classes.ImageContainer, { position: "relative" })}
          src={polka}
        />

        <div className={classes.imageRack}>
          <ImageContainer
            description="Idemo u napad!"
            id="BOB"
            style={(classes.ImageContainer, {})}
            src={polka}
          />
          <ImageContainer
            description="Idemo u napad!"
            id="BOB"
            style={(classes.ImageContainer, {})}
            src={polka}
          />
          <ImageContainer
            description="Idemo u napad!"
            id="BOB"
            style={(classes.ImageContainer, {})}
            src={polka}
          />
        </div>
      </div>
      <div className={classes.imageTower}>
        <ImageContainer
          description="Idemo u napad!"
          id="BOB"
          style={(classes.ImageContainer, {})}
          src={polka}
        />
        <ImageContainer
          description="Idemo u napad!"
          id="BOB"
          style={(classes.ImageContainer, {})}
          src={polka}
        />
        <ImageContainer
          description="Idemo u napad!"
          id="BOB"
          style={(classes.ImageContainer, {})}
          src={polka}
        />
      </div>
    </Container>
  );
}

export default HomePage;
