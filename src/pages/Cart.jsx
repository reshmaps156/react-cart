import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeItemCart } from '../redux/slice/cartSlice';
import { Link, useNavigate } from 'react-router-dom';





function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()
  // console.log(cartArray);
  const dispatch = useDispatch()
  const getTotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  const handleCart=()=>{
    alert('Your order placed successfully')
    dispatch(emptyCart())
    navigate('/')
  }
  useEffect(()=>{
    getTotal()
  },[cartArray])
  return (
    <>
    {cartArray?.length>0? 
    <div className="row w-100 mb-5" style={{marginTop:'100px'}}>
      <h2 className='text-center text-primary'>Cart</h2>
      <div className="col-md-6 p-5">
      <Table bordered  className='shadow text-center '>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Image</th>
          <th>Price</th>  
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartArray?.map((item,index)=>(<tr>
            <td >{index+1}</td>
            <td>{item.title}</td>
            <td><img className='w-25 ' src={item.image} alt="" /></td>
            <td>${item.price}</td>
            <td><button className='btn btn-outline-danger rounded ' onClick={()=>dispatch(removeItemCart(item.id))}><FontAwesomeIcon icon={faTrash} /></button></td>
          </tr>)) 
        }
      </tbody>
    </Table>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <div className='border shadow  p-5'>
          <p className='text-primary fs-3'>Cart summary</p>
          <p className='fs-3'>Total number of products : <span className='text-warning'>{cartArray.length}</span></p>
          <p className='fs-3'>Total price : <span className='text-warning'> {total}</span></p>
          <button className='btn btn-success rounded w-100 border' onClick={handleCart}>Check out</button>
        </div>
      </div>
    </div>
   : 

   <div className='row w-100'>
    <div className="col-md-2"></div>
      <div className='col-md-8' style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="empty yellow shopping bag" />
       <Link to={'/'}> <button className='btn btn-outline-warning p-3 mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2'/>Back to home</button></Link>
      </div>
      <div className="col-md-2"></div>
   </div>
}
    </>
  )
}

export default Cart