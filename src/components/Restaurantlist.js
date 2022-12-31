import { useEffect, useState } from 'react'
import React from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantlistAction } from '../Actions/RestaurantlistAction';
import { useDispatch, useSelector } from 'react-redux'
function Restaurantlist() {
  // to hold values
  const [allRestaurants, setRestaurants] = useState([])
  // function to call api to get all restaurent  items from restaurent.json

  // const getRestaurants = async () => {
  //   await fetch('/restaurants.json')
  //     .then((data) => {
  //       data.json()
  //         .then((result) => {
  //           setRestaurants(result.restaurants);// to converrt array of object array
  //           // console.log(result);
  //         })

  //     })
  // }
  // console.log(allRestaurants);

  const dispatch = useDispatch();
  const result=useSelector(state=>state.restaurantReducer)
  console.log(result);
  const {restaurantList}=result
  useEffect(() => {
    // getRestaurants()
    dispatch(RestaurantlistAction());
  }, [])
  return (
    <Row>{
      restaurantList.map(item => (
        // <h1>{item.name}</h1>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Restaurantcards restaurant={item} />
        </Col>

      ))
    }
    </Row>
  )
}

export default Restaurantlist