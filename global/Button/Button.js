import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <a target="_blank" href="#" className={styles.button} rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

export default Button;
