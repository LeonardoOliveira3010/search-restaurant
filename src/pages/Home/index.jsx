import React, { useState } from "react";
import {useSelector} from 'react-redux'
// import Slider from "react-slick";

import { Container, Search, Wrapper, CarouselTitle, Carousel } from "./style";

import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField'

import restaurante from '../../assets/restaurante-fake.jpg'
import { Card, RestaurantCard, Modal, Map } from "../../components";


export const Home = () =>{
    const [inputValue, setInputValue] = useState('')
    const [query, setQuery] = useState(null)
    const [placeId, setPlaceId] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const {restaurants, restaurantSelected} = useSelector((state) => state.restaurants)

    // Carousel
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
      };

    const handleKeyPress = (e) =>{
        if(e.key === 'Enter') {
            setQuery(inputValue)
        }
    }

    function handleOpenModal(placeId){
        setPlaceId(placeId)
        setModalOpen(true)
    }

    const onchangeValue = (e) =>{
        setInputValue(e.target.value)
    }
    // console.log(onchangeValue)

    return (
        <>
            <Wrapper>
                <Container>
                    <Search>               
                        <TextField
                        sx={{ m: 1, width: '250px',}}
                        id="outlined-basic" label="Search" variant="outlined"
                        value={inputValue}
                        onChange={onchangeValue} onKeyPress={handleKeyPress}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                            ),
                        }}               
                        />
                
                    </Search>

                    <CarouselTitle>Na sua área</CarouselTitle>
                    <Carousel {...settings}>
                        {restaurants.map((restaurant) => <Card key={restaurant.place_id} photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} />)}
                    </Carousel>
                    {restaurants.map((restaurant) => (
                        <RestaurantCard onClick={() => handleOpenModal(restaurant.place_id)} restaurant={restaurant} />
                    ))}
                </Container>
                <Map query={query} placeId={placeId} />
                <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)}> 
                    <p>{restaurantSelected?.name}</p>
                    <p>{restaurantSelected?.formatted_phone_number}</p>
                    <p>{restaurantSelected?.formatted_address}</p>
                </Modal>
            </Wrapper> 
        </>
    )
}
