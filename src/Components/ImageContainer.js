import classes from "./ImageContent.module.css";

function ImageContainer(params) {
  return (
    <div className={classes.ImageContainer} style={params.style}>
      <div>
        {params.children}
        <img src={params.src} alt={params.alt}></img>
      </div>
      <span>{params.description}</span>
    </div>
  );
}

export default ImageContainer;
