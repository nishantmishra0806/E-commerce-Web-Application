import React from "react";
import './Footer.css';
import instagram_icon from '../Assets/instagram_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    
   return (
    <div className="footer">
        <div className="footer-logo"> 
            <p>Shop-karo</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                
                    <img src={instagram_icon} alt="Instagram icon"  />
              
            </div>
            <div className="footer-icons-container">
                
                    <img src={whatsapp_icon} alt="WhatsApp icon" />
                
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright@2024 -All Rights Reserved</p>
        </div>
    </div>
   )
}

export default Footer;

