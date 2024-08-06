import { Anchor } from "antd";
import styles from  "./navbar.module.css"

export const Navbar: React.FC = () => {
  return (
    <nav className={styles['header-menu']}>
      <div className={styles['header-wrapper']}>
        <Anchor 
          className={styles['nav-content']}
          direction="horizontal"
          items={[
            {
              key: 'index',
              href: '/',
              title: <span className={styles['menu-item']}>Página inicial</span>,
            },
            {
              key: 'microfrontend1',
              href: '/microfrontend1',
              title: <span className={styles['menu-item']}>Microfrontend 1</span>,
            },
            {
              key: 'microfrontend2',
              href: '/microfrontend2',
              title: <span className={styles['menu-item']}>Microfrontend 2</span>,
            },
          ]}
          />
      </div>
    </nav>
  );
}