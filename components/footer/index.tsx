import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>Swiss-High-Tech Services</span></h6>
            <p>Learn and improve your skills in devlopment ,business, technology, design and more.</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
               <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
           
            <ul>
              <li>Contact</li>
              <li><a href="#">RUE DE MOILEBEAU 55, GENEVE</a></li>
              <li><a href="#">swiss.h.t.s@gmail.com</a></li>
              <li><a href="#">Hotline: +33612701839</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY BANO - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer