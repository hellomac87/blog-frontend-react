import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// 전달받은 className, onClick 등 값들이 rest 안에 들어 있습니다.

// JSX 에서 ... 을 사용하면 내부에 있는 값들을 props 로 넣어 줍니다.
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
    children, to, onClick, disabled, theme = 'default'
}) => {
    // to 값이 존재하면 Link 를 사용하고, 그렇지 않으면 div 를 사용합니다.
    // 비활성화 되어 있는 버튼일 떄도 div 를 사용합니다.
    const Element = (to && !disabled) ? Link : Div;

    // 비활성화 하면 onClick 은 실행되지 않습니다.
    // disabled 값이 true 가 되면 className 에 disabled 를 추가합니다.
    return (
        <Element
            to={to}
            className={cx('button', theme, {disabled})}
            onClick={disabled ? () => null : onClick}
        >
            {children}
        </Element>
    );
};

export default Button;