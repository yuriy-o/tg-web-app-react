import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';
import './Header.css';
import '../Button/Button.css';

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
        <div className={'header'}>
            <Button className={'button'} onClick={onClose}>
                Закрити
            </Button>
            <span className={'username'}>{user?.username}</span>
        </div>
    );
};

export default Header;
