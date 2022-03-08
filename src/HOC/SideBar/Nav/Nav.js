import styles from "./Nav.module.css";
import {Link} from 'react-router-dom'

export const Nav = () => (
  <div className={styles.NavbarCont}>
  
      <ul className={styles.NavMenu}>
      <div className={styles.SidebarList}>
        <Link to="/" style={{textDecoration:"none"}}className={styles.SidebarLink}>
        <li><i className="fas fa-headphones"></i></li>
          <span>Discover</span>
        </Link>
      </div>
      <div className={styles.SidebarList}>
      <Link to="/search" style={{textDecoration:"none"}} className={styles.SidebarLink}>
        <li><i className="fas fa-search"></i> </li>
          <span>Search</span>
        </Link>
      </div>
      <div className={styles.SidebarList}>
      <Link to="/favourites" style={{textDecoration:"none"}} className={styles.SidebarLink}>
        <li><i className="fas fa-heart"></i></li>
          <span>Favourites</span>
        </Link>
      </div>
      <div className={styles.SidebarList}>
      <Link to="/playlist" style={{textDecoration:"none"}} className={styles.SidebarLink}>
        <li><i className="far fa-play-circle"></i> </li>
          <span>PlayList</span>
        </Link>
      </div>
      <div className={styles.SidebarList}>
      <Link to="/chart" style={{textDecoration:"none"}} className={styles.SidebarLink}>
        <li><i className="far fa-chart-bar"></i></li>
          <span>Charts</span>
        </Link>
      </div>


      </ul>
    
  </div>
);
