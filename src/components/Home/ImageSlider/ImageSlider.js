// Carousel Imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Style Imports
import "./ImageSlider.scss";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider className="carousel" {...settings}>
      <div className="carousel__wrap">
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </div>
      <div className="carousel__wrap">
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </div>
      <div className="carousel__wrap">
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </div>
      <div className="carousel__wrap">
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </div>
    </Slider>
  );
};

export default ImageSlider;
