import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

import Uitstap from './Uitstap/';

const Uitstappen = ({uitstappen}) => {

  if (uitstappen.length === 0) return (
    <div>no uitstappen yet</div>
  );

  return (
    <ul className='Uitstappen'>
      {
        uitstappen.map(
          t => (
            <Uitstap
              {...t}
              // timeAgo={t.timeAgo}
              key={t.id}
            />
          )
        )
      }
    </ul>
  );
};

Uitstappen.propTypes = {
  uitstappen: PropTypes.observableArray.isRequired
};

export default inject(
  ({store}) => {
    return {uitstappen: store.uitstappen};
  }
)(
  observer(Uitstappen)
);
