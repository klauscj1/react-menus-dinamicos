import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/submenu.module.css";
import * as RiIcons from "react-icons/ri";
export const SubMenu = ({ item, showSidebar }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const cerrarSesion = () => {
    //TODO: Cerrar sesion
  };

  return (
    <>
      <Link
        className={styles.side_bar_link}
        to={item.prg_url_panel}
        onClick={
          item.cerrar ? cerrarSesion : item.hijos ? showSubnav : showSidebar
        }
      >
        <div>
          {item.icon}
          <span className={styles.side_bar_label}>{item.dme_texto}</span>
        </div>
        <div>
          {item.hijos && subnav ? (
            <RiIcons.RiArrowUpSFill />
          ) : item.hijos ? (
            <RiIcons.RiArrowDownSFill />
          ) : null}
        </div>
      </Link>
      {subnav &&
        item.hijos.map((hijo, index) => {
          return (
            <Link
              className={styles.drop_down_link}
              to={hijo.prg_url_panel}
              key={index}
              onClick={showSidebar}
            >
              {hijo.icon}
              <span className={styles.side_bar_label}>{hijo.dme_texto}</span>
            </Link>
          );
        })}
    </>
  );
};
