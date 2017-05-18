/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

import {
  Link
} from 'react-router-dom';

const Add = ({store}) => {

  let $textarea;
  let $uitstapSelect;
  // let $datumField;
  let $naamField;
  let $positiveArray;
  let $negativeArray;

  const {
    content, resetUitstap, add, chars, setUitstap, setContent, setNaam, setPositive, setNegative, naam, uitstap, positive, negative
  } = store;

  const handleChange = () => {

    setNaam($naamField.value);
    setUitstap($uitstapSelect.value);
    setPositive($positiveArray.value);
    setNegative($negativeArray.value);
    // setDatum($datumField.value);
    setContent($textarea.value);
    // console.log(`verander`);
  };

  const handleSubmit = e => {

    e.preventDefault();
    add(content, naam, uitstap, positive, negative);
    resetUitstap();
  };

  return (

    <form onSubmit={handleSubmit}>

      <section className='add'>
        <div className='form_item'>
          <label htmlFor='naam'>Naam</label>
          <input
            ref={$naam => $naamField = $naam}
            type='text'
            id='naam'
            value={naam}
            onChange={handleChange}
          />
        </div>

        <div className='form_item'>
          <label htmlFor='uitstap'>Uitstap*</label>
          <select name='uitstap' value={uitstap} ref={$uitstap => $uitstapSelect = $uitstap} onChange={handleChange}>
            <option value='Berlijn 2017'>Berlijn 2017</option>
            <option value='Gent 2017'>Gent 2017</option>
            <option value='Rotterdam 2016'>Rotterdam 2017</option>
          </select>
        </div>

        <div className='form_item'>
          <label htmlFor='positive'>Positive*</label>
          <input
            ref={$positive => $positiveArray = $positive}
            type='text'
            id='positive'
            value={positive}
            onChange={handleChange}
          />
        </div>

        <div className='form_item'>
          <label htmlFor='negative'>Negative*</label>
          <input
            ref={$negative => $negativeArray = $negative}
            type='text'
            id='positive'
            value={negative}
            onChange={handleChange}
          />
        </div>

        <div className='form_item'>
          <label htmlFor='content'>Commentaar</label>
          <textarea
            ref={$content => $textarea = $content}
            cols='60' rows='4'
            value={content}
            className='add-textarea'
            onChange={handleChange}
            id='content'
          />
        </div>
      </section>

      <div className='form_links'>
        <div>
          <Link to='/' className='button_link button_back'>Ga Terug</Link>
        </div>

        <input
          type='submit'
          value='Add'
          className='button_submit'
          disabled={chars === false ? `disabled` : ``}
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
