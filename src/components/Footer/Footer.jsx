import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__contact">
                <div>
                    <h4>Call Us 24/7</h4>
                    <p>+1 234 567 890</p>
                </div>
                <div>
                    <h4>Headquarters</h4>
                    <p>New York, NY, USA</p>
                </div>
                <div>
                    <h4>Email Us</h4>
                    <p>support@yourbrand.com</p>
                </div>
            </div>
            {/* <div className="footer__payments">
                <img src="/images/payments.png" alt="Payment methods" />
            </div> */}
        </footer>
    );
};

export default Footer;
