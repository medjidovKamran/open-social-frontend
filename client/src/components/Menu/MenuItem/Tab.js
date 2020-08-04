import React, { useState, useRef, useEffect } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../../Link/Link';
import s from './tab.scss';

const Tab = ({ item: { path, text, icon, type, items }, onClick }) => {
  const [isShow, setIsShow] = useState(false);
  const blockReference = useRef();
  const itemsReference = useRef();

  // const handleClickOutside = (event) => {
  //   if (
  //     event.current !== blockReference &&
  //     event.current !== itemsReference &&
  //     isShow
  //   )
  //     setIsShow(false);
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // });
  if (type === 'select') {
    return (
      <div
        className={s.wrapper}
        onClick={() => setIsShow(!isShow)}
        ref={blockReference}
      >
        <div className={s.content}>
          {text && <p>{text}</p>}
          {/* {icon && <img src={icon} alt="menu-item" />} */}
        </div>
        <div
          className={classNames(s.listItems, {
            [s.displaynone]: !isShow,
            [s.displayblock]: isShow,
          })}
        >
          {items.map(object => {
            if (object.text === text) return;
            if (object.path) {
              return (
                <Link
                  to={object.path}
                  onClick={() => onClick(object.type, object.text)}
                  ref={itemsReference}
                >
                  <p>{object.text}</p>
                </Link>
              );
            }
            return (
              <p
                onClick={() => {
                  onClick(object.type, object.text);
                  null;
                }}
                ref={blockReference}
              >
                {object.text}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <Link to={path} className={s.wrapper}>
      <div className={s.content}>
        {text && <p>{text}</p>}
        {/* {icon && <img src={icon} alt="menu-item" />} */}
      </div>
    </Link>
  );
};

Tab.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    items: PropTypes.arrayOf(PropTypes.object),
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(s)(Tab);
