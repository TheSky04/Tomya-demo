import classes from "../classes/Resume.module.css";

const Resume = (props) => {
  return (
    <a href={props.resume} target="_blank" className={classes.link}>
      Haberin Devamı
    </a>
  );
};

export default Resume;
