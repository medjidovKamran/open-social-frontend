import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Chats.scss';
import ChatsDialogs from './chats-dialogs/chats-dialogs';
import ChatsNav from './chats-nav/chats-nav';
import MessageSearchPanel from './messages-search/messages-search';

const Chats = () => {
	return (
		<div className={s.container}>
			<div className={s.chatsHeader}>
				{/* <h1>Messages</h1> */}
				<MessageSearchPanel />
			</div>
			<div className={s.mainNav}>
				<ChatsNav />
			</div>
			<ChatsDialogs />
		</div>
	);
};

Chats.whyDidYouRender = true;
export default withStyles(s)(React.memo(Chats));
