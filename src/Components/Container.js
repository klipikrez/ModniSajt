import classes from "./Container.module.css";

function Container(params) {
  return (
    <div className={`${classes.container} ${params.className}`}>
      <main>{params.children}</main>
      <div className={classes.overlay}></div>
    </div>
  );
}

export default Container;
