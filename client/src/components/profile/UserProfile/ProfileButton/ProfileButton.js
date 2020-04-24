import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './ProfileButton.scss';

export const ProfileButton = ({ iconLeft, name, iconRight }) => {
  return (
    <button
      type="button"
      className={cn(s.ProfileButton, 'btn btn-secondary btn-sm')}
      // onClick={props.onClick}
    >
      {iconLeft} {name} {iconRight}
    </button>
  );
};

ProfileButton.propTypes = {
  iconLeft: PropTypes.any,
  iconRight: PropTypes.any,
  name: PropTypes.string.isRequired,
};

ProfileButton.whyDidYouRender = true;

export default withStyles(s)(React.memo(ProfileButton));
