import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




function Header() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const cartArray = useSelector((state)=>state.cartReducer)
  return (
    <>
      <div className='row bg-primary p-4 w-100'style={{top:'0px',position:'fixed',zIndex:'1'}}>
        <div className="col-md-1"></div>
        <div className="col-md-10 ">
          <div className='d-flex justify-content-between '>
            <div className='d-flex'>
            <Link to={'./'}>
            <FontAwesomeIcon icon={faCartShopping} bounce size='xl' color='white'/>
            </Link>
            <h3 className='text-white ms-2 brand'>E-cart</h3>
            </div>
            <div className='d-flex '>
             <Link to={'./wishlist'}>
                <button className='btn btn-outline-light rounded me-4 navBtn'><FontAwesomeIcon icon={faHeart} style={{color: "#f60404",}} className='me-2' />Wishlist<Badge  className='rounded ms-2' bg="secondary">{wishlistArray.length}</Badge>
                </button>
             </Link>

             <Link to={'./cart'}>
                <button className='btn navBtn btn-outline-light rounded'><FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B",}} className='me-2'/>Cart  <Badge className='rounded' bg="secondary">{cartArray.length}</Badge>
                </button>
             </Link>
            </div>
            
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default Header