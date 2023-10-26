import React from 'react';
import "./incard.css";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { followRestaurantOrCafe} from '../actions/nearmeAction';
import { fetchFollowing } from '../actions/nearmeAction'; 
const InCard = (props) => {
  const { name, jobTitle, followers, open, post, imageSrc,Id, selectedCategory } = props;

  
  const userId = useSelector((state) => state.userLogin.userInfo?._id || state.userRegister.userInfo?._id);
  const follow=useSelector((state)=>state.followReducer);
  const dispatch = useDispatch();
  const followingList = useSelector((state) => state.followingReducer.followingList);

  // Determine if the user is already following this restaurant
  const isFollowing = followingList.some(item => item._id === Id);

console.log(isFollowing);

  const handleFollow = async (restaurantOrCafeOrVendorId) => {
    try {
      dispatch(followRestaurantOrCafe(userId, restaurantOrCafeOrVendorId,selectedCategory));
      dispatch(fetchFollowing(userId));
      // console.log(response);
      if (follow && follow.success) {
        toast.success(follow.data.message); // Show success message
      }
    } catch (error) {
      
    }
  };

  return (
    <div className="cardin" style={{ margin: '25px' }}>
      <div className="imgBxin">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="contentin">
        <div className="detailsin">
          <span>
            {name}<br></br><span>{jobTitle}</span>
          </span>
          <div className="data">
            <span>{followers}<br></br><span>Followers</span></span>
            <span><br></br><span>Open</span></span>
            {/* <span>{post}<br></br><span>Post</span></span> */}
          </div>
          <div className="actionbtn">
          <button onClick={() => handleFollow(Id)}>
                {isFollowing ? "Following" : "Follow"}
              </button>
            <button><Link className='dets' to={`/detailrestaurants/${selectedCategory}/${Id}`}>Details</Link></button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default InCard;

