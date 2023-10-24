import React, { useEffect } from 'react';
import SubHeading from '../DetailsRestro/SubHeading.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getAdvertisementsByCity } from '../../actions/vendorAction.js';
import { useCity } from '../../CityContext.js';
const AdvertisementDetails = () => {
  const selectedCityContext = useCity(); // Assuming you have a way to get the selected city
  
  const dispatch = useDispatch();
  const advertisement = useSelector((state) => state.advertisementReducer.advertisements);
  useEffect(() => {
    
      // Dispatch action to fetch advertisements when the component mounts
      dispatch(getAdvertisementsByCity(selectedCityContext.selectedCity));
    
  }, [selectedCityContext, dispatch]);

  
  // const advertisement = advertisements[0]; // Assuming you only want the first advertisement

  return (
    <div className="container-vendor">
      <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={advertisement[0].image} alt="chef_image" />
        </div>
        <div className="app__wrapper_info">
          <SubHeading title={advertisement[0].title} />
          <h1 className="headtext__cormorant">{advertisement.title}</h1>

          <div className="app__chef-content">
            <div className="app__chef-content_quote">
              <p className="p__opensans">{advertisement[0].quote}</p>
            </div>
            <p className="p__opensans">More details specific to this page can go here.</p>
          </div>

          <div className="app__chef-sign">
            <p>{advertisement[0].famousFoodName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementDetails;


