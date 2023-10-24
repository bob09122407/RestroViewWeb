import React from 'react';
import "./card.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { followRestaurantOrCafe } from '../actions/nearmeAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ name, title, frontImage, rating, image, description, restaurantId }) => {
  const frontStyle = {
    backgroundImage: `url(${frontImage})`,
    opacity: 1,
  };

  // Inside your component...
  const userId = useSelector((state) => state.userLogin.userInfo?._id || state.userRegister.userInfo?._id);
  const follow=useSelector((state)=>state.followReducer);
  // Now, 'userId' will contain the _id of the user from either 'userLogin' or 'userRegister' if available.
  

  const dispatch = useDispatch();

  const handleFollow = async (restaurantOrCafeOrVendorId) => {
    try {
     dispatch(followRestaurantOrCafe(userId, restaurantOrCafeOrVendorId));
      // console.log(response);
      if (follow && follow.success) {
        toast.success(follow.data.message); // Show success message
      } else {
        toast.error(follow.error.message); // Show a generic error message
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        toast.error(error.response.data.message); // Show error message from the server
      } else {
        toast.error('Follow failed: Unknown error'); // Show a generic error message
      }
    }
  };
  
  return (
    <div className='containerc'>
      <div className='card1'>
        <div className='card-inner'>
          <div className='front' style={frontStyle}>
            <h3>{name}</h3>
            <p>{title}</p>
            <button>{rating}</button>
          </div>
          <div className='back'>
            <img src={image} alt={name} />
            <h2 className='specialh2'>{name}</h2>
            <p>{description}</p>
            <div className="row">
              <button onClick={() => handleFollow(restaurantId)}>Follow</button>
              <button><Link to={`/detailrestaurants/${restaurantId}`}>Details</Link></button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Card;
