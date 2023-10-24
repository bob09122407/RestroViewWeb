// import React, { useEffect, useState } from 'react';
// import Intro from '../../../component/DetailsRestro/Intro';
// import MenuItem from '../../../component/DetailsRestro/menuitem.jsx';
// import MenuCard from '../../../component/DetailsRestro/menucard.jsx';
// import Gallery from '../../../component/DetailsRestro/Gallery';
// import FindUs from '../../../component/DetailsRestro/FindUs';
// import Chef from '../../../component/DetailsRestro/Offer';
// import { useParams } from 'react-router-dom';
// import { getRestaurantById } from '../../../actions/restaurantAction';
// import { getcafeById } from '../../../actions/cafeAction';
// import { getvendorById } from '../../../actions/vendorAction';

// const Detailsrestro = () => {
//   const { id } = useParams();
//   const [type, setType] = useState('');
//   const [details, setDetails] = useState(null);

//   useEffect(() => {
//     let action = null;

//     if (window.location.pathname.includes('restaurant')) {
//       action = getRestaurantById;
//       setType('restaurant');
//     } else if (window.location.pathname.includes('vendors')) {
//       action = getvendorById;
//       setType('vendor');
//     } else if (window.location.pathname.includes('cafes')) {
//       action = getcafeById;
//       setType('cafe');
//     }

//     if (action) {
//       action(id)
//         .then(data => {
//           setDetails(data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
//   }, [id]);

//   return (
//     <div>
//       {details ? (
//         <>
//           <Intro
//             videoUrl={details.video.url}
//             name={details.name}
//             address={details.address}
//             latitude={details.address.latitude}
//             longitude={details.address.longitude}
//           />
//           <MenuItem />
//           <Chef />
//           <MenuCard />
//           <Gallery />
//           <FindUs />
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Detailsrestro;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Intro from '../../../component/DetailsRestro/Intro';
import MenuItem from '../../../component/DetailsRestro/menuitem.jsx';
import MenuCard from '../../../component/DetailsRestro/menucard.jsx';
import Gallery from '../../../component/DetailsRestro/Gallery';
import FindUs from '../../../component/DetailsRestro/FindUs';
import Chef from '../../../component/DetailsRestro/Offer';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../../../actions/restaurantAction';
import { getcafeById } from '../../../actions/cafeAction';
import { getvendorById } from '../../../actions/vendorAction';



const Detailscafe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const type = useSelector((state) => state.type); // Access the type from your Redux store
  const details = useSelector((state) => state.cafeReducer.cafe); // Access the details from your Redux store
console.log(id);
  // useEffect(() => {
  //   // let action = null;

  //   // if (window.location.pathname.includes('restaurant')) {
  //   //   action = getRestaurantById;
  //   // } else if (window.location.pathname.includes('vendors')) {
  //   //   action = getvendorById;
  //   // } else if (window.location.pathname.includes('cafes')) {
  //   //   action = getcafeById;
  //   // }

  //   // if (action) {
  //   //   dispatch(action(id));
  //   // }
  // }, [dispatch, id]);
  useEffect(() => {
    // When the component mounts, fetch restaurant data by dispatching the action
    dispatch(getcafeById(id));
  }, [dispatch, id]);


  console.log(details);

  return (
    <div>
      {details ? (
        <>
          <Intro
            videoUrl={details.video.url}
            name={details.name}
            address={
              `${details.address.street}, ${details.address.city}, ${details.address.state}, ${details.address.zipCode}`
            }
            latitude={details.address.latitude}
            longitude={details.address.longitude}
          />
          <MenuItem 
          special_daymenu={details.special_daymenu} />
          <Chef 
          name={details.offers.name}
          image={details.offers && details.offers.img ? details.offers.img.url : ''}
          description={details.offers.description}
          discount={details.offers.discount} />
          <MenuCard 
          menu={details.menu}/>
          <Gallery 
          images={details.gallery.images} />
          <FindUs 
           address={
            `${details.address.street}, ${details.address.city}, ${details.address.state}, ${details.address.zipCode}`
          }
          image={details.contact.img.url} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detailscafe;
