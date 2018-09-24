import React from "react";
import styles from "./Footer.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Footer = ({onLoginClick}) => {
  return (
      <footer className={cx("footer")}>
        <Link to="/">
            <div className={cx("brand")}>
            react blog
            </div>
        </Link>
        <div onClick={onLoginClick} className={cx("admin-login")}>
            관리자 로그인
        </div>
      </footer>
  );
};

export default Footer;
