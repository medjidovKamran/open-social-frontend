import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './User.scss';
import Link from '../Link';
import UsersAvatar from '../../assets/usersAvatar.png';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AddIcon from '@material-ui/icons/Add';

const User = ({user}) => {
  const {firstName, lastName} = user;

  return (
    <div className={s.userConatainer}>
			<span>
				<span>
					<Link to={'/' + user.id}>
						<img className={s.UsersAvatar} src={UsersAvatar}/>
					</Link>
				</span>
				<span>
					{firstName} {lastName}
				</span>
				<span className={s.buttonAdd}>
					<button className={s.buttonAdd}>
						Add <AddIcon/>
					</button>
				</span>
        	<span>
					<BorderColorIcon fontSize='large'/>
				</span>
			</span>
      <hr className={s.line}/>
    </div>
  );
};

User.whyDidYouRender = true;
export default withStyles(s)(React.memo(User));
