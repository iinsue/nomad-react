import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.btn}></button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
