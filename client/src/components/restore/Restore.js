import React from 'react';
import style from './Restore.scss';

const Restore = () => {
  return (
    <div className={style.restoreWrap}>
      <h2 className={style.header}>Reset password</h2>
      <form className={style.restoreForm}>
        <label htmlFor="email">
          write your e-mail
          <input className={style.input} id="email" name="email" />
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Restore;
