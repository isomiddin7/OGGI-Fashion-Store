import "./Navbar.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { home, pages, shop, blog, portfolio } from "./LinkData";
import LinkComponent from "./LinkComponent";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openBar, setOpenBar] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (openBar || open) {
      body.classList.add("lock-scroll");
    } else {
      body.classList.remove("lock-scroll");
    }
  }, [openBar, open]);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="app__navbar">
        <div className="forHeight">
          <nav
            className={`gap-both app__navbar-wrapper ${fixed ? "fixed" : "static"
              }`}
            style={{
              backgroundColor: "#fff",
            }}
          >
            <ul className="app__navbar-links">
              <li>
                <Link to="" className="links-wrapp">
                  Home
                </Link>
                <LinkComponent links={home} />
              </li>
              <li>
                <Link to="" className="links-wrapp">
                  Pages
                </Link>
                <LinkComponent links={pages} />
              </li>
              <li>
                <Link to="" className="links-wrapp">
                  Shop
                </Link>
                <LinkComponent links={shop} />
              </li>
              <li>
                <Link to="" className="links-wrapp">
                  Blog
                </Link>
                <LinkComponent links={blog} />
              </li>
              <li>
                <Link to="" className="links-wrapp">
                  Portfolio
                </Link>
                <LinkComponent links={portfolio} />
              </li>
              <li>
                <Link to="" className="links-wrapp">
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/">
            <img  className="rasm" src="https://oggi.rainbow-themes.net/wp-content/uploads/2019/10/logo_black_new.png" alt="logo" width={100}/>
          </Link>
          <div className="app__navbar-icons">
            <FaSearch className="icon" size={30}/>
            <AiOutlineShoppingCart className="icon" size={30}/>
          </div>
        </div>
      </div>

      <>
        {open && (
          <span className="items-bg" onClick={() => setOpen(false)}></span>
        )}
        <section className={`app__menu-wrapper ${open ? "open__menu" : ""}`}>
          <div className="close__btn-wrapper">
            <div className="close-btn" onClick={() => setOpen(false)}>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <motion.ul
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <li className="collapse-header">
              </li>
            </motion.ul>
          </div>
        </section>
      </>
    </>
  );
};

export default Navbar;