/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string, number, object} from 'prop-types';

import {observer} from 'mobx-react';

// import TimeAgo from './TimeAgo';

const Uitstap = ({uitstap, datum, naam, content, positive, negative
  // timeAgo
}) => {

  return (

    <li>
      <p>
        {uitstap} {datum}
      </p>
      <p>
        {naam}
      </p>
      <ul>
        {positive.forEach(p => `${p}`)}
        {negative.forEach(n => console.log(n))}
      </ul>
      <p>{content}</p>
      <div >
        {/* <TimeAgo timeAgo={timeAgo} /> */}
      </div>
    </li>

  );

};

Uitstap.propTypes = {
  content: string.isRequired,
  // timeAgo: string.isRequired,
  uitstap: string.isRequired,
  positive: object.isRequired,
  negative: object.isRequired,
  datum: number.isRequired,
  naam: string.isRequired
};

export default observer(Uitstap);
