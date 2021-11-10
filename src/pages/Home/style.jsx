import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`


export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.fontFamily};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

export const InputSearch = styled.input`
    width: 200px;
    height: 40px;
`

export const CarouselTitle = styled.h2`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin: 16px 0;
`
export const Carousel = styled(Slider)`
    .slick-slide{
        margin: 0 5px;
        
    }

    .slick-next{
        right: 0;
    }
`
