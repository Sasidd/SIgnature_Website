import { useState } from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { settings } from "../../../assests";

import { MdArrowBackIosNew } from "react-icons/md";

const SideMenuBar = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setactive] = useState(window.location.pathname);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="sidebar">
        <motion.div
          animate={{
            width: isOpen ? "33.3rem" : "12rem",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
        >
          <div className="sidebar-container">
            <div className="sidebar-container-name align-item-center">
              <div className="sidebar-container-name-icon align-item-center">
                <MdArrowBackIosNew
                  onClick={toggle}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="sidebar-container-name-user align-item-center">
                {isOpen ? <h6>settings</h6> : ""}
              </div>
            </div>
            <div className="sidebar-container-menu">
              <div className="sidebar-container-menu-list">
                {props.routes.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => setactive(item.path)}
                    >
                      <div
                        className="sidebar-container-menu-list-link align-item-center"
                        id={active == item.path ? "active" : ""}
                      >
                        <div className="sidebar-container-menu-list-link-icon align-item-center">
                          {item.icon}
                        </div>
                        <div className="sidebar-container-menu-list-link-name align-item-center">
                          {isOpen ? <p>{item.name}</p> : ""}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <>
                <div className="settings-icon">
                  <img src={settings} alt="settings" onClick={toggle} />
                </div>
              </>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SideMenuBar;
