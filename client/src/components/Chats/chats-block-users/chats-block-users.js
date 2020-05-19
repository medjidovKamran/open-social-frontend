/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { getUsersChatData, resetChatState } from '../../../actions/chats';
import Loader from '../../Loader/Loader';
import avatar from '../../../assets/avatar2.png';
import style from './chats-block-users.module.scss';

class ChatsBlockUsers extends Component {
  state = {
    hasMore: true,
    limit: 5,
    offset: 0,
  };

  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        avatarId: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        lastName: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
      }),
    ).isRequired,
    error: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.resetChatState();
    console.log(this.props.resetChatState());
    const { limit, offset } = this.state;
    this.props.getUsersChatData(limit, offset);
    // this.setState({hasMore: false})
  }

  getChats = () => {
    let { limit, offset } = this.state;
    // console.log(limit,offset);
    // this.setState({ ofsset: offset + limit });
    // this.setState(prevState => ({
    //   ofsset: prevState.offset + prevState.limit
    // }));

    offset += limit;
    bnbnbvn;
    this.props.getUsersChatData(limit, offset).then(data => {
      this.setState({ hasMore: !!data.length, offset });
    });
  };

  render() {
    const { data, isLoading, error, getUsersChatData } = this.props;
    console.log('render data:', data);
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
        <InfiniteScroll
          dataLength={data.length}
          next={this.getChats}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <hr className={style.line} />
          <List dense className={style.root}>
            {data.map(value => {
              return (
                <div
                  className={style.LinkToDialogs}
                  key={`${value.id}`}
                  to="./dialogsUser1"
                >
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar src={avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={`${value.name}`} />
                  </ListItem>
                  <hr className={style.line} />
                </div>
              );
            })}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}
ChatsBlockUsers.whyDidYouRender = true;

const mapStateToProps = ({
  userChats: { data, events, error, isLoading },
}) => ({
  data,
  error,
  events,
  isLoading,
});

// const mapDispatchToProps = {
//   resetChatState,
//   getUsersChatData,
// };

export default connect(
  mapStateToProps,
  { getUsersChatData, resetChatState },
)(withStyles(style)(React.memo(ChatsBlockUsers)));
