import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Banner.scss';
import title1 from '../../assets/images_banner/title3_01.jpg';
import title2 from '../../assets/images_banner/title3_02.jpg';
import title4 from '../../assets/images_banner/title3_04.jpg';
import title5 from '../../assets/images_banner/title3_05.jpg';
import visitus from '../../assets/images_banner/Visit-Us.jpg';

class Banner extends Component {
  render() {
    return (
      <div className={s.banner}>
        <table
          width="302"
          height="400"
          border="0"
          cellPadding="0"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <td colSpan="3">
                <img
                  className={s.top}
                  src={title1}
                  width="302"
                  height="17"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td rowSpan="2">
                <img src={title2} width="167" height="383" alt="" />
              </td>
              <td>
                <a
                  href="https://wearethefuture-org.github.io/visit-card.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={s.visit}
                    src={visitus}
                    width="107"
                    height="31"
                    border="0"
                    alt="Visit Us"
                  />
                </a>
              </td>
              <td rowSpan="2">
                <img
                  className={s.right}
                  src={title4}
                  width="28"
                  height="383"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className={s.middle}
                  src={title5}
                  width="107"
                  height="352"
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default withStyles(s)(React.memo(Banner));
