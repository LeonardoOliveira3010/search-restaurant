import React, { useState } from "react";
// import Slider from "react-slick";

import { Container, Search, Wrapper, CarouselTitle, Carousel } from "./style";

import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField'

import restaurante from '../../assets/restaurante-fake.jpg'
import { Card } from "../../components";

export const Home = () =>{
    const [text, setText] = useState('')

    // Carousel
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
      };

    const onchangeValue = (e) =>{
        setText(e.target.value)
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
                        value={text}
                        onChange={onchangeValue}
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
                        <Card photo={restaurante} />
                        <Card photo={restaurante} />
                        <Card photo={restaurante} />
                        <Card photo={restaurante} />
                        <Card photo={restaurante} />
                        <Card photo={restaurante} />
                    </Carousel>
                </Container>
            </Wrapper> 
        </>
    )
}
