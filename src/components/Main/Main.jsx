import React from 'react';
import {Converter} from '../Converter';

export default function Main(props) {
  let date = null;
  if (props.mode == 'development') {
    date = new Date('01.09.2024');
  } else {
    date = new Date();
  }
  
  date = date.toLocaleString('en-EN', {timeZone: '+03:00'}).split(',')[0];

  return (
    <main className='main'>
      <section className='section intro'>
        <div className='container intro__container'>
          <h1 className='title intro__title'> Конвертер валют </h1>
          <Converter className='intro__converter' date={date}/>
        </div>
      </section>
    </main>
  );
}