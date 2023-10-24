
import React, { useEffect, useState } from "react";
import "./slideshow.css";
import { useDispatch, useSelector } from "react-redux";
import { useCity } from '../../CityContext';
import { getRestaurantAdvertisements } from '../../actions/advertisementAction';

const Carousel = () => {

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
  const dispatch = useDispatch();
  const { selectedCity } = useCity();
  const { advertisements, loading, error } = useSelector((state) => state.restaurantAdvertisementReducer);

  useEffect(() => {
    dispatch(getRestaurantAdvertisements(selectedCity));

    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 500);
  }, [dispatch, selectedCity]);

  const slideRight = () => {
    setCurrent(current === (advertisements?.length - 1) ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? (advertisements?.length - 1) : current - 1);
  };

  if (error) {
    // Handle error state (e.g., show an error message)
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {advertisements?.map((advertisement, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={advertisement.image.url} alt="" /> {/* Use image URL from advertisement model */}
              <div className="card_overlay">
                <h2 className="card_title">{advertisement.restaurantName}</h2> {/* Use restaurantName from advertisement model */}
              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {advertisements?.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
