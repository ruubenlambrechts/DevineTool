import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

import {
  Link
} from 'react-router-dom';

import Uitstap from './Uitstap/';

const Uitstappen = ({uitstappen}) => {

  if (uitstappen.length === 0) return (
    <section>
      <Link to='/add' className='button_link'>
        geef feedback
      </Link>
      <p>no uitstappen yet</p>
    </section>
  );

  return (
    <section>
      <Link to='/add' className='button_link'>
        geef feedback
      </Link>
      <div className='uitstappen'>
        {
          uitstappen.map(
            t => (
              <Uitstap
                {...t}
                // timeAgo={t.timeAgo}
                key={t._id}
              />
            )
          )
        }
      </div>
    </section>
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
