import styles from './headerLinks.module.css';

function HeaderLinks({ children }) {
  return <div className={styles['header-links']}> {children} </div>;
}

export default HeaderLinks;
