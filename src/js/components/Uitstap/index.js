/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

import {observer} from 'mobx-react';


const Uitstap = ({uitstap, naam, content, positive, negative}) => {

  return (

    <div className='comment'>
      <p className='comment_title'>Uitstap:</p>
      <p className='comment_item'>{uitstap}</p>
      <p className='comment_title'>Naam:</p>
      <p className='comment_item'>{naam}</p>
      <ul>
        <p className='comment_title'>Feedback:</p>
        <li className='comment_item comment_feedback'><span className='comment_plus'>+</span> {positive}</li>
        <li className='comment_item comment_feedback'><span className='comment_minus'>-</span> {negative}</li>
        {/* {positive.map(p => <li key={p}>+ {p}</li>)}
        {negative.map(n => <li key={n}>- {n}</li>)} */}
      </ul>
      <p className='comment_title'>Extra:</p>
      <p className='comment_item'>{content}</p>
    </div>

  );

};

Uitstap.propTypes = {
  content: PropTypes.string,
  uitstap: PropTypes.string.isRequired,
  positive: PropTypes.string.isRequired,
  negative: PropTypes.string.isRequired,
  naam: PropTypes.string
};

Uitstap.defaultProps = {
  naam: `Anoniem.`,
  content: `Geen commentaar.`
};


export default observer(Uitstap);
