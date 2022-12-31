// import axios from "axios";
// export const RestaurantlistAction =()=> async()=>{
//    const result= await axios.get('/restaurants.json');
//    console.log(result.data.restaurants);
// }


import axios from "axios";
import {R_SUCESS,R_FAILURE} from '../constants/restaurantConstants'

export const RestaurantlistAction=()=> async(dispatch)=>{
 

  try{
   const result=  await axios.get("/restaurants.json");
   console.log(result.data.restaurants);
   dispatch({
      type:R_SUCESS,
      payload:result.data.restaurants
   })
  }
  catch(error){
         dispatch({
            type:R_FAILURE,
            error:error  
                })
  }
}