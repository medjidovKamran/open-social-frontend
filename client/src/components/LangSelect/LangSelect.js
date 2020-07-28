import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import withStyles from "isomorphic-style-loader/withStyles";
import classNames from "classnames";
import styles from "./LangSelect.scss";
import textData from "../../utils/lib/languages.json";

const LangSelect = () => {
  const currentLang = useSelector(store => store.menu.lang);
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const { langSelect } = textData;

  const toggler = () => {
    setIsShow(!isShow);
  };
  const setLang = lang => {
    dispatch({ lang, type: "SET_CURRENT_LANG" });
  };

  return (
    <button type="button" className={styles.langselect} onClick={toggler}>
      <p>{currentLang}</p>
      <div
        className={classNames(styles.langset, {
          [styles.displaynone]: !isShow,
          [styles.displayblock]: isShow,
        })}
      >
        {langSelect.map(string => {
          if (string === currentLang) {
            return null;
          }
          return (
            <button type="button" key={string} onClick={() => setLang(string)}>
              {string}
            </button>
          );
        })}
      </div>
    </button>
  );
};

export default withStyles(styles)(LangSelect);
