import styles from './headerLinks.module.css';

function HeaderLinks({ children }) {
  return <h4 className={styles['header-links']}> {children} </h4>;
}

export default HeaderLinks;
