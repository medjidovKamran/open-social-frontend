/* eslint-disable promise/prefer-await-to-then */
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
import { getUsersChatData, resetChatState, setChatData, setMessagesData } from '../../../actions/chats';
import Loader from '../../Loader/Loader';
import avatar from '../../../assets/avatar2.png';
import style from './chats-block-users.module.scss';

class ChatsBlockUsers extends Component {
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

  state = {
    hasMore: true,
    take: 5,
    skip: 0,
  };

  componentDidMount() {
    const { dispatchGetUsersChatData } = this.props;
    const { take, skip } = this.state;
    dispatchGetUsersChatData({ take, skip })
  }

  componentWillUnmount() {
    const { dispatchresetChatState } = this.props;
    dispatchresetChatState();
  }

  render() {
    const { data, isLoading, error } = this.props;
    const { hasMore } = this.state;

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
      <div className={style.scrollMax}>
        <InfiniteScroll
          dataLength={data.length}
          next={this.getChats}
          hasMore={hasMore}
          className={style.scrollMax}
          loader={<h4 className={style.center}>Loading...</h4>}
          endMessage={
            <p className={style.center}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <hr className={style.line} />
          <List dense className={style.root}>
            {data.map((value, index) => {
              return (
                <div
                  className={style.LinkToDialogs}
                  key={index}
                  to="./dialogsUser1"
                >
                  <ListItem button onClick={() => this.selectChat(value)}>
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

  getChats = () => {
    // eslint-disable-next-line prefer-const
    let { take, skip, hasMore } = this.state;
    const { dispatchGetUsersChatData } = this.props;
    const { data } = this.props;
    skip += take;
    // eslint-disable-next-line promise/catch-or-return
    dispatchGetUsersChatData({ take, skip }).then(chats => {
      data.concat(chats);
      this.setState({ hasMore: !!chats.length, skip });
    });
  };

  selectChat = (data) => {
    const { dispatchSetChatData, dispatchSetMessagesData} = this.props;
    dispatchSetChatData(data);
    dispatchSetMessagesData(data.id);
  }
}


ChatsBlockUsers.whyDidYouRender = true;
export default connect(
  ({ userChats: { data, events, error, isLoading, chatOption } }) => ({
    data,
    error,
    events,
    isLoading,
    chatOption,
  }),
  {
    dispatchGetUsersChatData: getUsersChatData,
    dispatchresetChatState: resetChatState,
    dispatchSetChatData: setChatData,
    dispatchSetMessagesData: setMessagesData,
  },
)(withStyles(style)(React.memo(ChatsBlockUsers)));
