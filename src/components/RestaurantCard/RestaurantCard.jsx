import React from "react"
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./style"
import restaurante from '../../assets/restaurante-fake.jpg'

const RestaurantCard = ({ restaurant, onClick }) =>(
    
    <Restaurant onClick={onclick}> 
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars count={5} isHalf edit={false} value={restaurant.rating} activeColor="#e7711c" />
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPhoto 
            src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
            alt="Foto do restaurante"
        />
    </Restaurant>
)

export default RestaurantCard;