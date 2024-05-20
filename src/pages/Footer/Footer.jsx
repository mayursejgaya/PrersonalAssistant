import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>CustomerCare.com</li>
                        <li>Assistant.customercare@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">CopyRight 2024 	© Assistant.com  All Right Reversed</p>
        </div>
    )
};

export default Footer;