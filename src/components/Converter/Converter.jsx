import React from 'react';
import {API} from '../../api';

export default function Converter(props) {
    const datesList = props.dates.map((date, index) => {
        const clearDate = date.toLocaleString('ru-RU', {timeZone: '+03:00'}).split(',')[0];

        return (
            <li key={index}> {clearDate} </li>
        );
    });

    const valuesList = new Array(props.datesRange).fill('67.435').map((value, index) => {
        return (
            <li key={index}> {value} </li>
        );
    });

    return (
        <div className={['converter', props.className].join(' ')}>
            <div className="converter__window">
                <div className="converter__controls">
                    <ConverterControl />
                    <span> = </span>
                    <ConverterControl />
                </div>
                <div className="converter__stat">
                    <div className="converter__stat-visual">

                    </div>
                    <ul className="converter__stat-values">
                        {valuesList}
                    </ul>
                    <ul className="converter__stat-dates">
                        {datesList}
                    </ul>
                </div>
            </div>
            <div className="converter__bottom-text"> Данные предоставлены ЦБ РФ </div>
        </div>
    );
}

function ConverterControl(props) {
    return (
        <div className="converter__control">
            <div className="converter__control-head">
                <input className="converter__input" value="1"/>
                <div className="converter__select">
                    <div className="converter__select-flag"></div>
                    <div className="converter__select-currency"> USD </div>
                    <div className="converter__select-arrow"></div>
                </div>
                <div className="converter__options">
                    <ul className="converter__options-list">
                        <li className="converter__option">
                            <div className="converter__option-name"> Российский рубль </div>
                            <div className="converter__option-flag"></div>
                            <div className="converter__option-currency"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}