import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'








function Footer() {
   return (
      < >
         <div className='bg-primary text-white d-flex p-4 row w-100'>
            <div className="col-md-1"></div>
            <div className='col-md-10'>
               <div className='row'>
                  <div className="col-md-4 px-4">
                     <h3><FontAwesomeIcon icon={faCartShopping} /> E-CART</h3>
                     <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et beatae nihil minus. Nam accusantium incidunt, possimus ab velit provident doloribus, tempora ducimus </p>
                  </div>
                  <div className="col-md-2 px-4 ">
                     <h3>Links</h3>
                     <Link to={'./'}><p className='text-white'>Home Page</p></Link>
                     <Link to={'./wishlist'}><p className='text-white'>Wishlist</p></Link>
                    <Link to={'./cart'}> <p className='text-white'>Cart</p></Link>
                  </div>
                  <div className="col-md-2 px-4">
                     <h3>Guides</h3>
                     <p>React</p>
                     <p>React Bootsrap</p>
                     <p>Bootswatch</p>
                  </div>
                  <div className="col-md-4 px-4">
                     <h3>Contact Us</h3>
                     <div className='d-flex'>
                        <input type="text" placeholder='Enter your email ID' className='form-control' />
                        <button className='btn btn-warning ms-2 rounded'>Subscribe</button>
                     </div>
                     <div className='d-flex mt-2 justify-content-evenly'>
                        <FontAwesomeIcon icon={faInstagram} size='2xl' className='me-4' />
                        <FontAwesomeIcon icon={faTwitter} size='2xl' className='me-4' />
                        <FontAwesomeIcon icon={faLinkedin} size='2xl' className='me-4' />
                        <FontAwesomeIcon icon={faFacebook} size='2xl' className='me-4' />
                     </div>
                  </div>
               </div>
            </div>
            <div className='col-md-1'></div>
            <div className="row w-100  mt-3"><p className='text-center'>Copyright © 2024 E-cart.Built with React</p></div>

         </div>

      </>
   )
}

export default Footer