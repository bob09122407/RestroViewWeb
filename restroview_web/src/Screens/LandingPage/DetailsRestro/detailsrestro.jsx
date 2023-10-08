import React from 'react'
import Intro from '../../../component/DetailsRestro/Intro'
import MenuItem from '../../../component/DetailsRestro/menuitem.jsx'
import MenuCard from "../../../component/DetailsRestro/menucard.jsx"
import Gallery from '../../../component/DetailsRestro/Gallery'
import FindUs from '../../../component/DetailsRestro/FindUs'
import Chef from '../../../component/DetailsRestro/Offer'
const detailsrestro = () => {
  return (
    <div>
       <Intro />
       <MenuItem/>
       <Chef/>
       <MenuCard/>
       <Gallery/>
       <FindUs/>
     
    </div>
  )
}

export default detailsrestro
