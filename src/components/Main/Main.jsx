import React from 'react';
import {Converter} from '../Converter';

export default function Main(props) {
    const datesRange = 7;
    const dates = getDates(datesRange, props.devMode);

    return (
        <main className="main">
            <section className="section intro">
                <div className="container intro__container">
                    <h1 className="title intro__title"> Конвертер валют </h1>
                    <Converter 
                        className="intro__converter" 
                        dates={dates} 
                        datesRange={datesRange}
                    />
                </div>
            </section>
        </main>
    );
}

function getDates(datesRange, devMode = true) {
    let dates = new Array(datesRange).fill(null);

    return dates.map((date, index) => {
        date = devMode ? new Date('2024-09-01') : new Date();
        date.setDate(date.getDate() + index);
      
        return date;
    }).reverse();
}