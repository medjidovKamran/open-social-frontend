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
    data: [],
    hasMore: true,
    limit: 5,
    offset: 0,
  };

  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        lastName: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
      }),
    ).isRequired,
    dispatchGetUsersChatData: PropTypes.func.isRequired,
    dispatchresetChatState: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  componentWillUnmount() {
    const { dispatchresetChatState } = this.props;
    dispatchresetChatState();
  }

  componentDidMount() {
    //this.props.resetChatState();
    const { dispatchGetUsersChatData } = this.props;
    // console.log(this.props.resetChatState());
    const { limit, offset } = this.state;
    dispatchGetUsersChatData({ limit, offset });
    //this.props.getUsersChatData(limit, offset);
    // this.setState({hasMore: false})
  }

  getChats = () => {
    let { limit, offset } = this.state;
    const { dispatchGetUsersChatData } = this.props;
    let { data } = this.props;
    // console.log(limit,offset);
    // this.setState({ ofsset: offset + limit });
    // this.setState(prevState => ({
    //   ofsset: prevState.offset + prevState.limit
    // }));
    offset += limit;
    // eslint-disable-next-line promise/catch-or-return
    dispatchGetUsersChatData({ limit, offset }).then(chats => {
      data.concat(chats);
      this.setState({ hasMore: !!chats.length, offset });
    });
  };

  render() {
    const { data, isLoading, error } = this.props;
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
            <p style={{ textAlign: center }}>
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
                  key={value.id}
                  to="./dialogsUser1"
                >
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar src={avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={value.name} />
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
export default connect(
  ({ userChats: { data, events, error, isLoading } }) => ({
    data,
    error,
    events,
    isLoading,
  }),
  {
    dispatchGetUsersChatData: getUsersChatData,
    dispatchresetChatState: resetChatState,
  },
)(withStyles(style)(React.memo(ChatsBlockUsers)));
