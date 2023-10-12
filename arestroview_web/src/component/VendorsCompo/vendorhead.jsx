// import React, { useState } from 'react';
// import SubHeading from '../DetailsRestro/SubHeading.jsx';
// import { images } from '../../constants';
// import '../DetailsRestro/Chef.css';

// const Slideshow = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const handlePrevPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < slideshowData.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const slideshowData = [
//     {
//       title: "Page 1",
//       quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.",
//       chefName: "Kevin Luo",
//       chefRole: "Chef & Founder",
//       image: images.chef,
//       signImage: images.sign,
//     },
//     {
//       title: "Page 2",
//       quote: "Another set of details for the second page.",
//       chefName: "John Smith",
//       chefRole: "Head Chef",
//       image: images.chef,
//       signImage: images.sign,
//     },
//     // Add more pages as needed
//   ];

//   const page = slideshowData[currentPage];

//   return (
//     <div className="container-vendor">
 
//     <div className="app__bg app__wrapper section__padding">
//       <div className="app__wrapper_img app__wrapper_img-reverse">
//         <img src={page.image} alt="chef_image" />
//       </div>
//       <div className="app__wrapper_info">
//         <SubHeading title={page.title} />
//         <h1 className="headtext__cormorant">{page.title}</h1>

//         <div className="app__chef-content">
//           <div className="app__chef-content_quote">
//             <img src={images.quote} alt="quote_image" />
//             <p className="p__opensans">{page.quote}</p>
//           </div>
//           <p className="p__opensans">
//             More details specific to this page can go here.
//           </p>
//         </div>

//         <div className="app__chef-sign">
//           <p>{page.chefName}</p>
//           <p className="p__opensans">{page.chefRole}</p>
//           {/* <img src={page.signImage} alt="sign_image" /> */}
//         </div>
//       </div>

//       <div className="slideshow-controls" style={{zIndex:2}}>
//         <button onClick={handlePrevPage} disabled={currentPage === 0}>
//           Previous
//         </button>
//         <button onClick={handleNextPage} disabled={currentPage === slideshowData.length - 1}>
//           Next
//         </button>
//       </div>
//     </div>
           
//     </div>
//   );
// };

// export default Slideshow;


// import React, { useState, useEffect } from 'react';
// import SubHeading from '../DetailsRestro/SubHeading.jsx';
// import { images } from '../../constants';
// import '../DetailsRestro/Chef.css';

// const Slideshow = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const slideshowData = [
//     {
//       title: "Page 1",
//       quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.",
//       chefName: "Kevin Luo",
//       chefRole: "Chef & Founder",
//       image: images.chef,
//       signImage: images.sign,
//     },
//     {
//       title: "Page 2",
//       quote: "Another set of details for the second page.",
//       chefName: "John Smith",
//       chefRole: "Head Chef",
//       image: images.chef,
//       signImage: images.sign,
//     },
//     // Add more pages as needed
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextPage();
//     }, 5000); // Change the duration (in milliseconds) between slides

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentPage]);

//   const handlePrevPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < slideshowData.length - 1) {
//       setCurrentPage(currentPage + 1);
//     } else {
//       setCurrentPage(0); // Start over if reached the end
//     }
//   };

//   const page = slideshowData[currentPage];

//   return (
//     <div className="container-vendor">
//       <div className="app__bg app__wrapper section__padding">
//         <div className="app__wrapper_img app__wrapper_img-reverse">
//           <img src={page.image} alt="chef_image" />
//         </div>
//         <div className="app__wrapper_info">
//           <SubHeading title={page.title} />
//           <h1 className="headtext__cormorant">{page.title}</h1>

//           <div className="app__chef-content">
//             <div className="app__chef-content_quote">
//               <img src={images.quote} alt="quote_image" />
//               <p className="p__opensans">{page.quote}</p>
//             </div>
//             <p className="p__opensans">
//               More details specific to this page can go here.
//             </p>
//           </div>

//           <div className="app__chef-sign">
//             <p>{page.chefName}</p>
//             <p className="p__opensans">{page.chefRole}</p>
//           </div>
//         </div>
//       </div>

//       <div className="slideshow-controls">
//         <button onClick={handlePrevPage} disabled={currentPage === 0}>
//           Previous
//         </button>
//         <button onClick={handleNextPage} disabled={currentPage === slideshowData.length - 1}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slideshow;
import React, { useState, useEffect } from 'react';
import SubHeading from '../DetailsRestro/SubHeading.jsx';
import { images } from '../../constants';
import '../DetailsRestro/Chef.css';

const Slideshow = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const slideshowData = [
    {
      title: "Page 1",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.",
      chefName: "Kevin Luo",
      chefRole: "Chef & Founder",
      image: images.chef,
      signImage: images.sign,
    },
    {
      title: "Page 2",
      quote: "Another set of details for the second page.",
      chefName: "John Smith",
      chefRole: "Head Chef",
      image: images.chef,
      signImage: images.sign,
    },
    // Add more pages as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextPage();
    }, 5000); // Change the duration (in milliseconds) between slides

    return () => {
      clearInterval(interval);
    };
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < slideshowData.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0); // Start over if reached the end
    }
  };

  return (
    <div className="container-vendor">
      <div className="slideshow-container">
        <div className="slideshow-content">
          <div className="app__bg app__wrapper section__padding">
            <div className="app__wrapper_img app__wrapper_img-reverse">
              <img src={slideshowData[currentPage].image} alt="chef_image" />
            </div>
            <div className="app__wrapper_info">
              <SubHeading title={slideshowData[currentPage].title} />
              <h1 className="headtext__cormorant">
                {slideshowData[currentPage].title}
              </h1>

              <div className="app__chef-content">
                <div className="app__chef-content_quote">
                  <img src={images.quote} alt="quote_image" />
                  <p className="p__opensans">
                    {slideshowData[currentPage].quote}
                  </p>
                </div>
                <p className="p__opensans">
                  More details specific to this page can go here.
                </p>
              </div>

              <div className="app__chef-sign">
                <p>{slideshowData[currentPage].chefName}</p>
                <p className="p__opensans">
                  {slideshowData[currentPage].chefRole}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slideshow-controls">
          <button onClick={handlePrevPage} disabled={currentPage === 0}>
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === slideshowData.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;

