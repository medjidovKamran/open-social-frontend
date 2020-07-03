import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersData } from '../../../actions/users';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './UsersSearchPanel.scss';
import SearchIcon from '@material-ui/icons/Search';

class UserSearchPanel extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleOnInputChange = event => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query });
    } else {
      this.setState({ query: event.target.value }),
        () => {
          this.props.getUsersData(this.state.query).then(response => {
            this.props.data = response.data;
          });
        };
    }
  };

  render() {
    const results = this.props.data.map(result => {
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
      <div className={s.searchPanel}>
        <label className={s.searchPanelDiv}>
          <input
            className={s.searchPanelInput}
            type="text"
            value={this.state.query}
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
          <button
            className={s.searchPanelIcon}
            // onClick={() => this.props.getUsersData(this.state.query)}
          >
            <SearchIcon style={{ color: 'white' }} />
          </button>
        </label>
        {results}
      </div>
    );
  }
}

UserSearchPanel.whyDidYouRender = true;
export default connect(
  ({ users: { data, error, isLoading } }) => ({
    data,
    error,
    isLoading,
  }),
  { getUsersData },
)(withStyles(s)(React.memo(UserSearchPanel)));
