import React from "react";
import PropTypes from "prop-types";
import Flickity from 'react-flickity-component';
import "flickity/css/flickity.css";


export const Carousel = (props) => {
    const flickityOptions = {
        initialIndex: 0,
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        cellAlign: 'left'
    }

    return (
        <Flickity
            flickityRef={props.flickityRef}
            className={`carousel ${props.className}`}
            elementType="div"
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
        >
            {props.children}
        </Flickity>
    )
}

Carousel.propTypes = {
    className: PropTypes.string
}

Carousel.defaultProps = {
    className: ''
}