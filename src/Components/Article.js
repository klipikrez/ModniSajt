import classes from "./Article.module.css";
import ImageContainer from "./ImageContainer";

function Article(params) {
  return (
    <div
      className={`${classes.article} ${params.className}`}
      style={params.style}
    >
      <ImageContainer
        description=""
        alt={params.alt}
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

export default Article;
