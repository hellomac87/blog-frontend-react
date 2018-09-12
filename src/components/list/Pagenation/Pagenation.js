import React from 'react';
import styles from './Pagenation.scss';
import classNames from 'classnames/bind';
import Button from "components/common/Button/Button";

const cx = classNames.bind(styles);

const Pagenation = () => {
    return (
        <div className={cx('pagenation')}>
            <Button disabled>
                이전 페이지
            </Button>
            <div className={cx('number')}>
                페이지 1
            </div>
            <Button>
                다음 페이지
            </Button>
        </div>
    );
};

export default Pagenation;