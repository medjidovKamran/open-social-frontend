import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './UsersPage.scss';
import { connect } from 'react-redux';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { getUsersData } from '../../actions/users';
import User from './User';
import Loader from '../Loader/Loader';
import ReactPaginate from 'react-paginate';


class UsersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 4,
      currentPage: 0
    };
    this.handlePageClick = this
      .handlePageClick
      .bind(this);
  }
  receivedData() {
        const data = this.props.data;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
        const postData = slice.map((u) => <User key={u.id} user={u} />)

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
        })
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.receivedData()
    });

  };
  componentDidMount() {
    this.receivedData()
  }
  render(){
    const { error, isLoading } = this.props;
    return (
      <div>
        {isLoading && (<div>
          <Loader />
        </div>)}
        {error && (<p className="mb-0">{error}</p>)}
        <h3 className={s.heading}>Users</h3>
        {this.state.postData}
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={s.pagination}
          activeClassName={s.active}/>
      </div>
    );
  }
}
UsersPage.whyDidYouRender = true;
export default connect(
	({ users: { data, events, error, isLoading } }) => ({
		data,
		events,
		error,
		isLoading
	}),
	{ getUsersData }
)(withStyles(bootstrap, s)(React.memo(UsersPage)));
