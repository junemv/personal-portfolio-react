import React from 'react';
import "./Carousel.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = ({ slides }) => {

    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={3}
				infinite={true}
				isPlaying={true}
				interval={5000}
      >
					<Slider className="slider">
						{slides.map((slide, i) => (
							<Slide index={i}>
								{ slide }
							</Slide>
						))}
					</Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
}

export default Carousel;