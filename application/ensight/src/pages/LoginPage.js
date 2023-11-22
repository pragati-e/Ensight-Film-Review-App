import React, { useState } from 'react';
import '../assets/styles/components/Login.css';

const LoginPage = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="wrapper">
            <div className="card-switch">
                {/* this switches  */}
                <label className="switch">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(prevState => !prevState)}
                    />
                    <span className="login-slider"></span>
                    <span className="card-side"></span>
                    <div className="flip-card__inner">
                        <div className="flip-card__front">
                            <div className="title">Log in</div>
                            <form action="" className="flip-card__form">
                                <input type="email" placeholder="Email" name="email" className="flip-card__input" />
                                <input type="password" placeholder="Password" name="password" className="flip-card__input" />
                                <button className="flip-card__btn">Let's go!</button>
                            </form>
                        </div>
                        <div className="flip-card__back">
                            <div className="title">Sign up</div>
                            <form action="" className="flip-card__form">
                                <input type="text" placeholder="Name" className="flip-card__input" />
                                <input type="email" placeholder="Email" name="email" className="flip-card__input" />
                                <input type="password" placeholder="Password" name="password" className="flip-card__input" />
                                <button className="flip-card__btn">Confirm!</button>
                            </form>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default LoginPage;