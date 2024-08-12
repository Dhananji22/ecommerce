import React from 'react';
import '../NewsLetter/NewsLetter.css';

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h2>Want More Tips?</h2>
            <p>Sign up and get the latest updates!</p>
            <form className="newsletter__form">
                <input type="email" placeholder="Your Email..." className="newsletter__input" />
                <button type="submit" className="newsletter__button">Yes, I Want!</button>
            </form>
        </div>
    );
};

export default Newsletter;
