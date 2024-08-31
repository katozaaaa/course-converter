import React from 'react';

export default function ConverterControl(props) {
  return (
    <div className='converter__control'>
        <div className='converter__control-head'>
          <input className='converter__input' value='1'/>
          <div className='converter__select'>
              <div className='converter__select-flag'></div>
              <div className='converter__select-currency'> USD </div>
              <div className='converter__select-arrow'></div>
          </div>
          <div className='converter__options'>
            <ul className='converter__options-list'>
                <li className='converter__option'>
                  <div className='converter__option-name'> Российский рубль </div>
                  <div className='converter__option-flag'></div>
                  <div className='converter__option-currency'></div>
                </li>
            </ul>
          </div>
        </div>
    </div>
  );
}