import React, { Component } from "react";

import { connect } from "react-redux";

// connect this with export default at bottom
import {
  getPostsByUserId,
  getUserProfile,
  unfollowUser,
  followUser,
  refreshUserProfile
} from "../../actions/profileActions/profileActions";

import NavBar from "../NavBar";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Post from "../posts/Post";

import LoadingPosts from "../posts/LoadingPosts";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    this.props.getPostsByUserId(this.props.match.params.userId);
    this.props.getUserProfile(this.props.match.params.userId);
  }


  // do this for signup and login if you can.
  componentDidUpdate(prevProps) {
    if (this.props.auth.isAuthenticated) {
      // if we changed the following prop,
      if (
        prevProps.user &&
        prevProps.user.following !== this.props.user.following
      ) {
        // refresh the page
        this.props.refreshUserProfile(this.props.match.params.userId);
      }
    }
  }

  handleFollow() {
    this.props.followUser(this.props.match.params.userId);
  }

  handleUnfollow() {
    this.props.unfollowUser(this.props.match.params.userId);
  }

  render() {
    const {
      classes,
      loadingPosts,
      loadingProfile,
      list,
      auth,
      user,
      profile
    } = this.props;

    const items = list && list.map(el => <Post key={el._id} post={el} />);

    let profileInfo;

    let newprofileinfo;

    let followButtons;

    // if if authenticated, 
    if (auth.isAuthenticated) {

      // if user exist, user has a following array
      if (
        user &&
        user.following &&
        // if you aren't following this person, show follow, else show unfollow
        user.following.indexOf(this.props.match.params.userId) === -1
        ) {

        followButtons = (
          ///////// CSS /////////
          <div>
            <Button onClick={this.handleFollow}>Follow</Button>

          </div>
        );
      } else {
        followButtons = (
          ///////// CSS /////////
          <div>
            <Button onClick={this.handleUnfollow}>Unfollow</Button>
          </div>
        );
      }
    }
    ///////// CSS /////////
    if (profile && items) {
      profileInfo = (
        <Card className={classes} className="card-body container">
          <h1> {profile.fullname} </h1>
          <div> {profile.email} </div>
          <div>
            <div>
              {items.length}
              <span> posts </span>
            </div>
            <div>
              {profile.followers.length}
              <span> followers </span>
            </div>
            <div>
              {profile.following.length}
              <span> following </span>
            </div>

            {followButtons}
          </div>
        </Card>
      );
    }

    return (
      ///////// CSS /////////
      <div>

        {loadingProfile ? <div>Loading</div> : profileInfo}
        {loadingPosts ? <LoadingPosts /> : items}

        <NavBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loadingPosts: state.post.loading,
  list: state.post.list,
  profile: state.profile.user,
  loadingProfile: state.profile.loading,
  auth: state.auth,
  user: state.auth.user
});

//everything from actions
export default connect(mapStateToProps, {
  getPostsByUserId,
  getUserProfile,
  unfollowUser,
  followUser,
  refreshUserProfile
})(Profile);