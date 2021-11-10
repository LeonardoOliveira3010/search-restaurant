import React from "react"
import styled  from "styled-components"

const Card = styled.div`
display: flex;
justify-content: center;
width: 90px;
height: 90px;
border-radius: 5px;
background-image: url(${(props) => props.photo});
background-size: cover;
`

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: #fff;
    font-size: 12px;
    margin-top: 5px;
    padding-left: 5px;
`

const ImageCard = ({ photo }) => (
    <Card photo={photo}>
        <Title>Nome do restaurante</Title>
    </Card>
)


export default ImageCard;