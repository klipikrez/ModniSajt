import classes from "./ArticleWide.module.css";
import ImageContainer from "./ImageContainer";

function ArticleWide(params) {
  return (
    <div
      className={`${classes.article} ${params.className}`}
      style={params.style}
    >
      <div className={classes.imageContainer}>
        <ImageContainer description="" id="BOB" style={{}} src={params.src} />
        <div className={classes.textOverImage}>{params.children}</div>
      </div>
    </div>
  );
}

export default ArticleWide;
