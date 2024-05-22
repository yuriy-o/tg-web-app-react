import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const { tg } = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject,
        };

        tg.sendData(JSON.stringify(data));
    }, [country, street, subject, tg]);

    useEffect(() => {
        tg.onEvent('backButtonClicked', onSendData);

        return () => {
            tg.offEvent('backButtonClicked', onSendData);
        };
    }, [onSendData, tg]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Відправити дані',
        });
    }, [tg.MainButton]);

    useEffect(() => {
        if (!country || !street) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street, tg.MainButton]);

    const onChangeCountry = e => {
        setCountry(e.target.value);
    };
    const onChangeStreet = e => {
        setStreet(e.target.value);
    };
    const onChangeSubject = e => {
        setSubject(e.target.value);
    };

    return (
        <div className={'form'}>
            <h3>Введіть ваші дані</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Країна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Вулиця'}
                value={street}
                onChange={onChangeStreet}
            />

            <select
                className={'select'}
                value={subject}
                onChange={onChangeSubject}
            >
                <option value={'physical'}>ФОП</option>
                <option value={'legal'}>Юр. лице</option>
            </select>
        </div>
    );
};

export default Form;
