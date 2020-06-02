import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './User.scss';
import Link from '../Link';
import Button from '@material-ui/core/Button';
import avatar from '../../assets/avatar1.png';

const User = ({ user }) => {
	const { firstName, lastName, status } = user;
	return (
		<div className={s.userConatainer}>
			<span>
				<div>
					<Link to={'/' + user.id}>
						<img className={s.UsersAvatar} src={avatar} />
					</Link>
				</div>
				<div>
					{firstName} {lastName}
				</div>
				<div>{status}</div>
				<div>
					<Button variant="contained" color="primary">
						Follow
					</Button>
				</div>
			</span>
		</div>
	);
};

User.whyDidYouRender = true;
export default withStyles(s)(React.memo(User));
