import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from "components/common/Button/Button";

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('header-content')}>
                <div className={cx('brand')}>
                    <Link to="/">react blog</Link>
                </div>
                <div className={cx('right')}>
                    <Button theme="outline" to="/editor">새 포스트</Button>
                </div>
            </div>    
        </div>
    );
};

export default Header;