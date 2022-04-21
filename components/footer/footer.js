import styles from './footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center mb-9">
      Copyright © {year}, Cuppa Kappa and/or its affiliates. All rights reserved.
    </footer>
  );
}
