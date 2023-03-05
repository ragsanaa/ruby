import React from 'react';
import '../styles/footer.css';
import GooglePlay from '../assest/google_play.png';
import AppStore from '../assest/app_store.png';

const Footer = () => {
  return (
    <div>
        {/* <!-- Footer --> */}
      <div className="main-footer">
        <div className="footer-items">
          <div className="footer-item">
            <h4><strong>Xidmətlər</strong></h4>
            <a href="/">Sifariş et</a>
            <a href="/">Online Kuryer Sifarişi</a>
            <a href="/">Online Poçt sifarişi</a>
            <a href="/">Operativ müştəri xidmətləri</a>
          </div>
          <div className="footer-item">
            <h4><strong>Bizi sosial mediada izləyin</strong></h4>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Linkedin</a>
            <a href="/">Youtube</a>
          </div>
          <div className="footer-item">
            <h4><strong>Mobil tətbiqi yükləyin</strong></h4>
            <a href="/"><img src={GooglePlay} alt=""/></a>
            <a href="/"><img src={AppStore} alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
