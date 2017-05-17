/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

const Add = ({store}) => {

  let $textarea;

  const {
    uitstap, resetUitstap, add, chars, setUitstap
  } = store;

  const handleChange = () => {
    setUitstap($textarea.value);
    // console.log(`verander`);
  };

  const handleSubmit = e => {

    e.preventDefault();

    add(uitstap);
    resetUitstap();
    $textarea.focus();

  };

  return (

    <form className='add' onSubmit={handleSubmit}>

      <label htmlFor='naam'>Naam (optioneel)</label>
      <input
        type='text'
        id='naam'
      />

      <label htmlFor='datum'>Datum</label>
      <input
        type='text'
        id='datum'
      />

      <label htmlFor='uitstap'>Uitstap</label>
      <select name='uitstap'>
        <option value='Berlijn'>Berlijn</option>
        <option value='Rotterdam'>Rotterdam</option>
        <option value='Gent'>Gent</option>
      </select>

      <label htmlFor='description'>Description</label>
      <textarea
        ref={$el => $textarea = $el}
        cols='60' rows='4'
        value={uitstap}
        className='add-textarea'
        onChange={handleChange}
        id='description'
      />

      <div className='col'>

        <input
          type='submit'
          value='Add'
          className='add-submit'
          disabled={chars === 0 ? `disabled` : ``}
        />

      </div>

    </form>

  );

};

Add.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Add)
);
