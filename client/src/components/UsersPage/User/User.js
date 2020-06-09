import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './User.scss';
import Link from '../../Link';
import UsersAvatar from '../../../assets/usersAvatar.png';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AddIcon from '@material-ui/icons/Add';

const User = ({user}) => {
  const {firstName, lastName} = user;

  return (
    <>
    <div className={s.userConatainer}>
      <div>
        <Link to={'/' + user.id}>
          <img className={s.UsersAvatar} src={UsersAvatar} alt={UsersAvatar}/>
        </Link>
        <span>
					{firstName} {lastName}
				</span>
      </div>
      <div className={s.buttonAddWrite}>
        <div>
        <button className={s.buttonAdd}>
          Add <AddIcon className={s.buttonAddPlus} />
        </button>
        </div>
        <div>
        <Link to ='#'>
					<BorderColorIcon className={s.buttonMessage}  fontSize='large'/>
				</Link>
        </div>
      </div>
    </div>
      <hr className={s.line}/>
      </>
  );
};

User.whyDidYouRender = true;
export default withStyles(s)(React.memo(User));
