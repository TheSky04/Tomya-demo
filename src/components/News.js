import classes from "../classes/News.module.css";
import Resume from "./Resume";

const News = (props) => {
  return (
    <>
      <h6>{props.title}</h6>
      <img src={props.image} alt="news" className={classes.img} />
      <Resume resume={props.resume} />
    </>
  );
};

export default News;
