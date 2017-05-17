import React from 'react';

import {observer} from 'mobx-react';
import {string} from 'prop-types';

const TimeAgo = ({timeAgo}) => (
  <span className='feedback-timeago'>{timeAgo} ago</span>
);

TimeAgo.propTypes = {
  timeAgo: string.isRequired
};

export default observer(TimeAgo);
