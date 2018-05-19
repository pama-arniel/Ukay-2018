import React, { Component } from 'react';
import 'whatwg-fetch';

class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="landing-image">
                  <span>Affordable fashion <br/> at your fingertips</span>
                  <a href="#" className="myButton">SIGN UP FOR FREE</a>
                  <a href="#" className="myButton2">LOG IN</a>
                </div>

                <div id="content1">
                    <h1>What can you do with Ukay?</h1>

                    <h2>BUY CLOTHES</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>

                    <h2>SELL CLOTHES</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>

                    <h2>FOLLOW SELLERS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>
                </div>

                <div id="content2">
                    <div id="features" className="color-white">
                        <h1>Shopping and selling with Ukay is easy.</h1>

                        <h2>Browse</h2>
                        <p>Oh, say can you see by the dawn's early light?</p>

                        <h2>Post</h2>
                        <p>Tous le generateurs de Lorem Ipsum sur Internet tendent a reproduire le merne extrait sans fin, ce qui fait de lipsum.com le seul vrai generateur de Lorem Ipsum</p>

                        <h2>Chat</h2>
                        <p>Si vous voulez utiliser un passage du Lorem Ipsum, vous devez etre sur qu'il n'ya rien d'embarassment cache dans le texte.</p>
                    </div>
                </div>

                <div id="content3">
                    <div id="sign-up">
                        <h1>Join Ukay now</h1>
                        <form>
                            <h2>Fill in the form below</h2><br/>
                            <input type="text" name="username" placeholder="Username"/><br/>
                            <input type="text" name="password" placeholder="Password"/><br/>
                            <input type="text" name="reenter-password" placeholder="Reenter Password"/><br/>
                            <input type="text" name="location" placeholder="Location"/><br/>
                            <input type="submit" value="SIGN UP" className="myButton"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
