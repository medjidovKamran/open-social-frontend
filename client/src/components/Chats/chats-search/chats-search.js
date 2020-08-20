import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersChatData } from '../../../actions/chats';
import PropTypes from 'prop-types';
import _ from 'lodash';
import withStyles from 'isomorphic-style-loader/withStyles';
import SearchIcon from '@material-ui/icons/Search';
import s from './chats-search.module.scss';

class ChatSearchPanel extends Component {
	static propTypes = {
		getUsersChatData: PropTypes.func.isRequired
	};
	state = {
		search: ''
	};

	handleOnInputChange = _.debounce((search) => {
		this.setState({ search: search });
		this.props.getUsersChatData({ search });
	}, 700);

	render() {
		return (
			<div className={s.SearchDialogs}>
				<input
					className={s.SearchInputDialog}
					type="text"
					value={this.state.query}
					placeholder="Search..."
					onChange={(e) => this.handleOnInputChange(e.target.value)}
				/>
				<SearchIcon />
			</div>
		);
	}
}

ChatSearchPanel.whyDidYouRender = true;
export default connect(
	({ userChats: { data, error, isLoading } }) => ({
		data,
		error,
		isLoading
	}),
	{ getUsersChatData }
)(withStyles(s)(React.memo(ChatSearchPanel)));
