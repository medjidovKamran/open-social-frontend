/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import Button from 'react-bootstrap/Button';
import withStyles from 'isomorphic-style-loader/withStyles';
// import { style } from 'typestyle';
import PropTypes from 'prop-types';
import styles from '../ProfileButton.scss';

/** convert a style object to a CSS class name */
// const profileButton = style({
//   $nest: {
//     '&:hover': {
//       backgroundColor: '#0d3349 !important',
//       color: 'white !important',
//       transition: '0.3s !important',
//     },
//   },
//   backgroundColor: 'lightgray !important',
//   border: '1px solid lightgray !important',
//   borderRadius: '2px !important',
//   color: '#4e555b !important',
//   height: '2.5em !important',
//   margin: '0.5em 0 0 0.6em !important',
//   width: '8.3em !important',
// });

export const ProfileButton = ({ iconLeft, name, iconRight }) => {
  return (
    <Button variant="secondary" className={styles.ProfileButton}>
      {iconLeft} {name} {iconRight}
    </Button>
  );
};

ProfileButton.propTypes = {
  iconLeft: PropTypes.any,
  iconRight: PropTypes.any,
  name: PropTypes.string.isRequired,
};

ProfileButton.whyDidYouRender = true;

export default withStyles(styles)(React.memo(ProfileButton));
