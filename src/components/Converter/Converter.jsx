import React from 'react';
import {API} from '../../api';
import { ConverterControl } from './ConverterControl';

export default function Converter(props) {
  return (
    <div className={['converter', props.className].join(' ')}>
      <div className='converter__window'>
          <div className='converter__controls'>
            <ConverterControl />
            <span> = </span>
            <ConverterControl />
          </div>
          <div className='converter__stat'>
              <div className='converter__stat-visual'>

              </div>
              <ul class='converter__stat-values'>
                <li> 67.435 </li>
                <li> 67.435 </li>
                <li> 67.435 </li>
                <li> 67.435 </li>
                <li> 67.435 </li>
                <li> 67.435 </li>
                <li> 67.435 </li> 
              </ul>
              <ul className='converter__stat-dates'>
                <li> {props.date} </li>
                <li> 28.08.2024 </li>
                <li> 28.08.2024 </li>
                <li> 28.08.2024 </li>
                <li> 28.08.2024 </li>
                <li> 28.08.2024 </li>
                <li> 28.08.2024 </li>
              </ul>
          </div>
      </div>
      <div className='converter__bottom-text'> Данные предоставлены ЦБ РФ </div>
    </div>
  );
}