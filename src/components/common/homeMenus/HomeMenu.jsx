import "./HomeMenu.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomeMenu = (props) => {
  const [active, setactive] = useState(window.location.pathname);
  return (
    <>
      <div className="homemenulist">
        <div className="homemenulist-menu">
          <div className="homemenulist-menu-list">
            {props.menu.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setactive(item.path)}
                >
                  <div
                    className="homemenulist-menu-list-link align-item-center"
                    id={active == item.path ? "menu" : ""}
                  >
                    <div className="homemenulist-menu-list-link-icon align-item-center">
                      {item.icon}
                    </div>
                    <div className="homemenulist-menu-list-link-name align-item-center">
                      <p>{item.name}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMenu;
