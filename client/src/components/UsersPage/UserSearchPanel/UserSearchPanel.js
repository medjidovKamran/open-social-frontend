import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './UsersSearchPanel.scss';
// import { apiURL } from '../constants';

class UserSearchPanel extends Component {
	static propTypes = {
		onChange: PropTypes.func.isRequired
	};
	
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		};

	handleOnInputChange = (event) => {
		const query = event.target.value;
		if (!query) {
			this.setState({ query, results: [] });
		} else {
			this.setState({ query, loading: true }, () => {
				this.fetchSearchResults(query);
			});
		}
	};

	fetchSearchResults = (query) => {
		const url = `http://localhost:4000/api/v1/users=${query}allow-cors', {mode:'cors'}`;
		const response = axios
			.get(url, {
				headers: authHeader,
				params: data
			})
			.then((response) => {
				this.setState({ results: response.data });
			});
	};

	render() {
		const results = this.state.results.map((result) => {
			return (
				<a key={result.id} href={result.previewURL}>
					<h6>{result.user}</h6>
					<div>
						<img src={result.previewURL} alt={result.user} />
					</div>
				</a>
			);
		});
		return (
			<div>
				<label>
					<input
						type="text"
						value={this.state.query}
						placeholder="Search..."
						onChange={this.handleOnInputChange}
					/>
				</label>
				{results}
			</div>
		);
	}
	
	const mapStateToProps = state => {
		return {
			results: state.data,
			loading: state.isLoading
		};
	};

	UserSearchPanel.whyDidYouRender = true;
	export default connect(mapStateToProps)(withStyles(s)(UserSearchPanel));


	// state = {
	// 	query: '',
	// 	results: [],
	// 	loading: false
	// };







	






//----------------------------------------------------------------------------------------
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			query: '',
// 			results: {},
// 			loading: false
// 		};
// 		this.cancel = '';
// 	}
// 	handleOnInputChange = (event) => {
// 		const query = event.target.value;
// 		if (!query) {
// 			this.setState({ query, results: {} });
// 		} else {
// 			this.setState({ query, loading: true }, () => {
// 				this.fetchSearchResults(query);
// 			});
// 		}
// 	};
// 	fetchSearchResults = (query) => {
// 		const searchUrl = `${apiURL}/api/v1/users=${query}allow-cors', {mode:'cors'}`;
// 		if (this.cancel) {
// 			this.cancel.cancel();
// 		}
// 		this.cancel = axios.CancelToken.source();
// 		axios.get(searchUrl, {
// 			cancelToken: this.cancel.token
// 		});
// 	};
// 	renderSearchResults = () => {
// 		const { results } = this.state;
// 		if (Object.keys(results).length && results.length) {
// 			return (
// 				<div className="results-container">
// 					{results.map((result) => {
// 						return (
// 							<a key={result.id} href={result.previewURL} className="result-items">
// 								<h6 className="username">{result.user}</h6>
// 								<div className="wrapper">
// 									<img className="user" src={result.previewURL} alt={result.user} />
// 								</div>
// 							</a>
// 						);
// 					})}
// 				</div>
// 			);
// 		}
// 	};

// 	render() {
// 		const { query } = this.state;
// 		return (
// 			<div className={s.searchPanel}>
// 				<label className={s.searchPanelDiv}>
// 					<input
// 						className={s.searchPanelInput}
// 						type="text"
// 						value={query}
// 						placeholder="Search..."
// 						onChange={this.handleOnInputChange}
// 					/>
// 				</label>
// 				{this.renderSearchResults()}
// 			</div>
// 		);
// 	}
// }

// UserSearchPanel.propTypes = {
// 	onChange: PropTypes.func.isRequired
// };

// UserSearchPanel.whyDidYouRender = true;
// export default withStyles(s)(UserSearchPanel);

//------------------------------------------------------------------------
// import React from 'react';
// import withStyles from 'isomorphic-style-loader/withStyles';
// import s from './UsersSearchPanel.scss';
// import SearchIcon from '@material-ui/icons/Search';

// const UserSearchPanel = () => {
// 	return (
// 		<div className={s.searchPanel}>
// 			<div className={s.searchPanelDiv}>
// 				<input className={s.searchPanelInput} />
// 				<button className={s.searchPanelIcon}>
// 					<SearchIcon style={{ color: 'white' }} />
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// UserSearchPanel.whyDidYouRender = true;
// export default withStyles(s)(React.memo(UserSearchPanel));

//FORMS -------------------------------------------------------------------
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/withStyles';
// import { Field, reduxForm } from 'redux-form';
// import s from './UsersSearchPanel.scss';
// import SearchIcon from '@material-ui/icons/Search';
// import FieldInput from '../InputField/FieldInput';
// class UserSearchPanel extends Component {
// 		state = {
// 			value: '',
// 			results: {},
// 			loading: false
// 		};
// 	inputChangeHandler = (event) => {
// 		const updated = this.state.value;
// 		updated.value = event.target.value;
// 		this.setState({state: updated});

// 	};
// 	submitHandler = (event) => {
// 		event.preventDefault();
// 		this.setState({ loading: true });
// 		const inputData = this.state.value;
// 	};

// 	render() {
// 		return (
// <div className={s.searchPanel}>
// 	<Form onSubmit={this.submitHandler} className={s.searchPanelDiv}>
//       <Form.Group>
//         <Form.Label></Form.Label>
//         <Field
// 		  className={s.searchPanelInput}
//           name=""
//           component={FieldInput}
//           type="text"
//           placeholder="Search friends"
//           validate={}
// 		 />
// 		</Form.Group>
// 		<Button className={s.searchPanelIcon} type="submit">
// 		<SearchIcon style={{ color: 'white' }} />
//         </Button>
//     </Form>
// </div>
// 		);
// };

// UserSearchPanel.whyDidYouRender = true;
// export default withStyles(s)(
// 	reduxForm({	form: 'user-search-panel' })(React.memo(UserSearchPanel)),
// );

// import React from 'react';
// import withStyles from 'isomorphic-style-loader/withStyles';
// import s from './UsersSearchPanel.scss';
// import SearchIcon from '@material-ui/icons/Search';
// import { Field, reduxForm } from 'redux-form';
// import FieldInput from '../InputField/FieldInput';
// import { BOUNDARY } from '../../utils/validators/ValidationRules';

//FORMS ---------------------------------------------------------------------------------
// const UserSearchPanel = ({ handleSubmit, submitText }) => {
// 	return (
// 		<div className={s.searchPanel}>
// 			<div className={s.searchPanelDiv}>
// 				<Form onSubmit={handleSubmit}>
// 					<Field name="user-search" component={FieldInput} validate={BOUNDARY.MIN_LENGTH} />
// 					<input className={s.searchPanelInput} />
// 					<button className={s.searchPanelIcon}>
// 						<SearchIcon style={{ color: 'white' }} />
// 					</button>
// 				</Form>
// 			</div>
// 		</div>
// 	);
// };

// UserSearchPanel.propTypes = {
// 	handleSubmit: PropTypes.func.isRequired,
// 	submitText: PropTypes.string.isRequired
// };

// UserSearchPanel.whyDidYouRender = true;
// export default withStyles(s)(
// 	reduxForm({
// 		form: 'user-search-panel'
// 	})(UserSearchPanel)
// );

//-----------------------------------------------------------------------------------------
// import React, { Component } from 'react';
// import axios from 'axios';
// import withStyles from 'isomorphic-style-loader/withStyles';
// import s from './UsersSearchPanel.scss';
// import SearchIcon from '@material-ui/icons/Search';
// // import Users from './Users';

// class UserSearchPanel extends Component {
//   state = {
//     users: null,
//     loading: false,
//     value: '',
//   };

//   search = async val => {
//     this.setState({ loading: true });
//     const res = await axios(`http://[::1]:4000/api/v1/users=${val}`);
//     const users = await res.data.results;

//     this.setState({ users, loading: false });
//   };

//   onChangeHandler = async e => {
//     this.search(e.target.value);
//     this.setState({ value: e.target.value });
//   };

//   get renderUsers() {
//     let users = <h1>There's no friends</h1>;
//     if (this.state.users) {
//       users = <Users list={this.state.users} />;
//     }
//     return users;
//   }

//   render() {
//     return (
//       <div className={s.searchPanel}>
//         <div className={s.searchPanelDiv}>
//           <input
//             className={s.searchPanelInput}
//             value={this.state.value}
//             onChange={e => this.onChangeHandler(e)}
//             placeholder="Search"
//           />
//           <button className={s.searchPanelIcon}>
//             <SearchIcon style={{ color: 'white' }} />
//           </button>
//         </div>
//         {this.renderUsers}
//       </div>
//     );
//   }
// }

// UserSearchPanel.whyDidYouRender = true;
// export default withStyles(s)(React.memo(UserSearchPanel));
