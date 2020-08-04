import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { connect } from 'react-redux';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import s from './UsersPage.scss';
import { getUsersData } from '../../actions/users';
import User from './User/User';
import Loader from '../Loader/Loader';
import UserSearchPanel from './UserSearchPanel/UserSearchPanel';

class UsersPage extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }),
    ).isRequired,
    error: PropTypes.string.isRequired,
    getUsersData: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      offset: 0,
      perPage: 5,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  pageCount() {
    const { data } = this.props;
    const { perPage } = this.state;
    return Math.ceil(data.length / perPage);
  }

  receivedData() {
    const { data } = this.props;
    const { offset, perPage } = this.state;
    const slice = data.slice(offset, offset + perPage);
    return slice.map(u => <User key={u.id} user={u} />);
  }

  handlePageClick = e => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        offset,
        selectedPage,
      },
      () => {
        this.receivedData();
      },
    );
  };

	componentDidMount() {
		this.receivedData();
		this.pageCount();
	}

<<<<<<< HEAD
	render() {
		const { error, isLoading } = this.props;
		if (error) {
			return <p className="mb-0">{error}</p>;
		}
		if (isLoading) {
			return (
				<div>
					<Loader />
				</div>
			);
		}
		return (
			<div>
				<div className={s.heading}>
					<div>
						<h3>Users</h3>
					</div>
					<div>
						<UserSearchPanel />
					</div>
				</div>
				<hr className={s.line} />
				{this.receivedData()}
				<ReactPaginate
					previousLabel={'<'}
					nextLabel={'>'}
					breakLabel={'...'}
					pageCount={this.pageCount()}
					marginPagesDisplayed={2}
					pageRangeDisplayed={3}
					onPageChange={this.handlePageClick}
					containerClassName={s.pagination}
					activeClassName={s.active}
				/>
			</div>
		);
	}
=======
  render() {
    const { error, isLoading } = this.props;
    if (error) {
      return <p className="mb-0">{error}</p>;
    }
    if (isLoading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
      <div>
        <div className={s.heading}>
          <div>
            <h3>Users</h3>
          </div>
          <div>
            <UserSearchPanel />
          </div>
        </div>
        <hr className={s.line} />
        {this.receivedData()}
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          pageCount={this.pageCount()}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={s.pagination}
          activeClassName={s.active}
        />
      </div>
    );
  }
>>>>>>> dev
}

UsersPage.whyDidYouRender = true;
export default connect(
<<<<<<< HEAD
	({ users: { data, error, isLoading } }) => ({
		data,
		error,
		isLoading
	}),
	{ getUsersData }
=======
  ({ users: { data, error, isLoading } }) => ({
    data,
    error,
    isLoading,
  }),
  { getUsersData },
>>>>>>> dev
)(withStyles(bootstrap, s)(React.memo(UsersPage)));
