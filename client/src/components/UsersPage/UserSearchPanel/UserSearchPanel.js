import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersWithParams } from '../../../actions/users';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './UsersSearchPanel.scss';
import SearchIcon from '@material-ui/icons/Search';

class UserSearchPanel extends Component {
	static propTypes = {
		getUsersWithParams: PropTypes.func.isRequired
	};
	state = {
		search: ''
	};

	handleOnInputChange = (event) => {
		const search = event.target.value;
		this.setState({ search: search });
	};
	fetchData = () => {
		const search = this.state.search;
		this.props.getUsersWithParams({ search });
	};

	render() {
		// const results = this.props.data.map(result => {
		//   return (
		//     <a key={result.id} href={result.previewURL}>
		//       <h6>{result.user}</h6>
		//       <div>
		//         <img src={result.previewURL} alt={result.user} />
		//       </div>
		//     </a>
		//   );
		// });
		return (
			<div className={s.searchPanel}>
				<label className={s.searchPanelDiv}>
					<input
						className={s.searchPanelInput}
						type="text"
						value={this.state.query}
						placeholder="Search..."
						onChange={this.handleOnInputChange}
					/>
					<button className={s.searchPanelIcon} onClick={this.fetchData}>
						<SearchIcon style={{ color: 'white' }} />
					</button>
				</label>
				{/* {results} */}
			</div>
		);
	}
}

UserSearchPanel.whyDidYouRender = true;
export default connect(
	({ users: { data, error, isLoading } }) => ({
		data,
		error,
		isLoading
	}),
	{ getUsersWithParams }
)(withStyles(s)(React.memo(UserSearchPanel)));
