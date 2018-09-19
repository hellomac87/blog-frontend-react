import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from "components/common/Button/Button";

const cx = classNames.bind(styles);

const Header = ({postId, onRemove}) => {
    return (
        <div className={cx('header')}>
            <div className={cx('header-content')}>
                <div className={cx('brand')}>
                    <Link to="/">react blog</Link>
                </div>
                <div className={cx('right')}>
                    {
                        // flex 를 유지하기 위해 배열 형태로 렌더링한다.
                        postId && [
                            <Button key="edit" theme="outline" to={`/editor?id=${postId}`}>수정</Button>,
                            <Button key="remove" theme="outline" onClick={onRemove}>삭제</Button>
                        ]        
                    }
                    <Button theme="outline" to="/editor">새 포스트</Button>
                </div>
            </div>    
        </div>
    );
};

export default Header;