import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('page-template')}>

        </div>
    );
};

export default Header;