import React, { Component } from "react";

import './css/Home.scss';

export default class Home extends Component {
    componentWillUpdate() {
        document.getElementById('hero').style.backgroundPosition = '0px ' + -(window.scrollY*0.1)+'px';
    }

    openLink = (url) => {
        let win = window.open(url, '_blank');
        win.focus();
    }

    scroll = () => {
        window.scrollTo({
            top: document.getElementById('Home').getBoundingClientRect().bottom - document.getElementById('Home').getBoundingClientRect().top,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div className="Home" id='Home'>

                <div className="heroContainer">
                    <div className="hero" id='hero'></div>

                    <div className="centerContainer">

                        <div className="text">
                            <b>Ryan Lackie</b>
                            <br/>
                            <b>Software Engineer</b>
                        </div>

                        <div className="buttons">
                            <div className="button" onClick={this.openLink.bind(this, "https://drive.google.com/file/d/1hz9t3BVqnbvSW_NFakhPS9d6EeMF7OMC/view?usp=sharing")}>
                                Résumé
                            </div>
                            <div className="button" onClick={this.openLink.bind(this, "https://github.com/RyanLackie/ryanlackie-portfolio")}>
                                Code
                            </div>
                        </div>
                    </div>

                    <div className="see-more-button-container animated fadeInLeft">
                        <div className="button" onClick={this.scroll}>
                            See More
                        </div>
                    </div>

                    <div className="icons">
                        <div onClick={this.openLink.bind(this, "https://www.linkedin.com/in/ryanlackie/")}
                        className="fa fa-linkedin animated rollIn"></div>
                        <div onClick={this.openLink.bind(this, "https://github.com/RyanLackie")}
                        className="fa fa-github animated rollIn"></div>
                    </div>
                </div>

            </div>
        );
    }
}
