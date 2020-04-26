/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { style } from 'typestyle';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './ProfileButton.scss';

/** convert a style object to a CSS class name */
const profileButton = style({
  $nest: {
    '&:hover': {
      backgroundColor: '#0d3349 !important',
      color: 'white !important',
      transition: '0.3s !important',
    },
  },
  backgroundColor: 'lightgray !important',
  border: '1px solid lightgray !important',
  borderRadius: '2px !important',
  color: '#4e555b !important',
  height: '2.5em !important',
  margin: '0.5em 0 0 0.6em !important',
  width: '9.5em !important',
});

export const ProfileButton = ({ iconLeft, name, iconRight }) => {
  return (
    <button
      type="button"
      className={classNames(
        profileButton,
        s.ProfileButton,
        'btn btn-secondary btn-sm',
      )}
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
