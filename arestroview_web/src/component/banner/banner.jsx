import React from 'react'
import "./banner.css"
import Image from "../../assests/Gotham-Font/Gotham-Font/images/rest.jpg"
import Waving from "../../assests/Gotham-Font/Gotham-Font/images/waving-hand.png"
const banner = () => {
  return (

      
<div class="banner-container">

<div class="banner">
    <div class="shoe">
        <img src={Image} alt=""/>
    </div>
    <div class="content">
        <span>upto</span>
        <h3>50% 0ff</h3>
        <p>offer ends after 5 days</p>
        <a href="#" class="btn">veiw offer</a>
    </div>
    <div class="women">
        <img src={Waving} alt=""/>
    </div>
</div>

</div>
   
  )
}

export default banner
