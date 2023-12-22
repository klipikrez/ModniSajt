import classes from "./Article.module.css";
import classes2 from "./ArticleReversed.module.css";
import ImageContainer from "./ImageContainer";

function ArticleReversed(params) {
  return (
    <div
      className={`${classes.article} ${classes2.article} ${params.className}`}
    >
      <ImageContainer
        description=""
        id="BOB"
        style={(classes.ImageContainer, {})}
        src={params.src}
      />
      <div className={classes.textContainer}>
        <div className={classes.text}>{params.children}</div>

        <div className={classes.button}>
          <button>{params.id}</button>
        </div>
      </div>
    </div>
  );
}

export default ArticleReversed;
