import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './About.scss';

class About extends PureComponent {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>About Page</div>
      </div>
    );
  }
}
About.whyDidYouRender = true;
export default withStyles(s)(React.memo(About));
