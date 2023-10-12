import React from 'react'
import Slideshow from '../../../component/VendorsCompo/vendorhead'
import FoodSlide from '../../../component/VendorsCompo/foodslide'
import Vendors from '../../../component/NearByRestro/vendors'
import Famousrecommend from '../../../component/VendorsCompo/famousrecommend'
const vendors = () => {
  return (
    <div>
      <Slideshow/>
      <FoodSlide/>
      <Vendors/>
      <Famousrecommend/>
    </div>
  )
}

export default vendors
