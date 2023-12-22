import classes from "./ArticleWideContent.module.css";
import ImageContainer from "./ImageContainer";

function ArticleWideContent(params) {
  return (
    <div
      className={`${classes.article} ${params.className}`}
      style={params.style}
    >
      <div className={classes.imageContainer}>
        <ImageContainer description="" id="BOB" style={{}} src={params.src} />
        <div className={classes.textOverImage}>
          {" "}
          <button className={classes.button}>{params.id}</button>
          <br />
          {params.children}
        </div>
      </div>
    </div>
  );
}

export default ArticleWideContent;
