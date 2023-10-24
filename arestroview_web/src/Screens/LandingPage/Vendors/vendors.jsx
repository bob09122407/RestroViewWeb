import React from 'react'
import Slideshow from '../../../component/VendorsCompo/vendorhead'
import FoodSlide from '../../../component/VendorsCompo/foodslide'
import Vendors from '../../../component/NearByRestro/vendors'
import Famousrecommend from '../../../component/VendorsCompo/famousrecommend'
import "./vendor.css"
const vendors = () => {


  return (
    <div>
      <Slideshow/>
      <div className="food-show">
      <FoodSlide/>
      </div>
      
      <Vendors/>
      <Famousrecommend/>
    </div>
  )
}

export default vendors
