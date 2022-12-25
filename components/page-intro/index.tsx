import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
    <Swiper navigation effect="fade" className="swiper-wrapper">
      <SwiperSlide>
        <div className="page-intro__slide" style={{ backgroundImage: "url('/images/11.webp')" }}>
          <div className="container">
            <div className="page-intro__slide__content">
              <h2>Swiss-High-Tech Services Limited,Leader In Software Developement Services
</h2>
              <a href="#" className="btn-shop"><i className="icon-right"></i>The best digital marketplace    </a>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="page-intro__slide" style={{ backgroundImage: "url('/images/3223.webp')" }}>  
          <div className="container">
            <div className="page-intro__slide__content">
              <h2>All the best business and domestic software services</h2>
              <a href="#" className="btn-shop"><i className="icon-right"></i>The best digital marketplace  </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
          <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% Satisfied Customers</h4>
                <p>Our clients' opinions speak for themselves</p>
              </div>
            </li>
            
            
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Best Services</h4>
                <p>We have the best services of software services </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro