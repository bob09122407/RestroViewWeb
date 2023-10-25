// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchFollowing } from '../../actions/nearmeAction'; // Update the path to match your file structure
// import Card from '../../cardUI/card';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import waving from "../../assests/Gotham-Font/Gotham-Font/images/waving-hand.png";

// const Profile = () => {
//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.userLogin.userInfo?._id || state.userRegister.userInfo?._id);
//   const followingList = useSelector((state) => state.followingReducer.followingList);

//   useEffect(() => {
//     if (!userId) {
//       // Show an error toast if userId is not available
//       toast.error('User ID not found. Please log in or register.');
//     } else {
//       // Fetch the list of followed places when the component mounts
//       dispatch(fetchFollowing(userId));
//     }
//   }, [dispatch, userId]);

//   return (
//     <div>
//       <h1>Your Followed Places</h1>
//       {followingList.map((place) => (
//         <Card
//           key={place._id} // Use a unique key for each Card component
//           name={place.name}
//           title={place.title}
//           frontImage={place.main_image.url}
//           rating={place.ratings.average}
//           image={waving}
//           description={place.description}
//           restaurantId={place._id}
//         //   category={place.category}
//         />
//       ))}

//       <ToastContainer />
//     </div>
//   );
// };

// export default Profile;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../actions/userAction'; // Update the path to match your file structure
import { fetchFollowing } from '../../actions/nearmeAction'; // Update the path to match your file structure
import Card from '../../cardUI/card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import waving from "../../assests/Gotham-Font/Gotham-Font/images/waving-hand.png";
import './profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userLogin.userInfo?._id || state.userRegister.userInfo?._id);
  const followingList = useSelector((state) => state.followingReducer.followingList);
  const userDetails = useSelector((state) => state.userDetails.user);

  useEffect(() => {
    if (!userId) {
      // Show an error toast if userId is not available
      toast.error('User ID not found. Please log in or register.');
    } else {
      // Fetch the list of followed places when the component mounts
      dispatch(fetchFollowing(userId));
      // Fetch user details
      dispatch(getUserDetails(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className='detail-main'>
      <div className='details-profile'>
        <h1>Your Profile</h1>
        {userDetails && (
          <div className='details-profile'>
            <span>Name: {userDetails.name}</span>
            <span>Email: {userDetails.email}</span>
          </div>
        )}
      </div>

      <h1 className='followed'>Your Followed Places</h1>
      <div className="card-following">
      {followingList.map((place) => (
        <Card
          key={place._id} // Use a unique key for each Card component
          name={place.name}
          title={place.title}
          frontImage={place.main_image.url}
          rating={place.ratings.average}
          image={waving}
          description={place.description}
          restaurantId={place._id}
        />
        
      ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
