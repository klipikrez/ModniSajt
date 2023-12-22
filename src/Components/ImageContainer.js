import classes from "./ImageContent.module.css";

function ImageContainer(params) {
  return (
    <div className={classes.ImageContainer} style={params.style}>
      <div>
        <img src={params.src} alt="xo" />
      </div>
      <span>
        {params.children}
        {params.description}
      </span>
    </div>
  );
}

export default ImageContainer;
