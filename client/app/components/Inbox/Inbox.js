import React, { Component } from 'react';

class Inbox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <aside id="contact-list">
                    <div class="container-inbox">

                        <div class="contact" >
                            <div class="contact-img">
                                <img src={require("../../../public/assets/img/adult-attractive-beautiful.jpg")} alt="Profile Picture"/>
                            </div>
                            <div class="contact-content">
                                <p class="contact-name"> Drew Yu Nodawe</p>
                                <p class="contact-msg"> You: Hey man are you sure to blah blah blah </p>
                            </div>
                        </div>
                        <div class="contact" >
                            <div class="contact-img">
                                <img src={require("../../../public/assets/img/adult-attractive-beautiful.jpg")} alt="Profile Picture"/>
                            </div>
                            <div class="contact-content">
                                <p class="contact-name"> Noah Dominic</p>
                                <p class="contact-msg"> Last price is P 900 lmao. If you you you are my treasure</p>
                            </div>
                        </div>


                    </div>
                </aside>

                <section id="inbox">
                    <div class="container-inbox">
                        <div class="msg-to">
                            <div class="contact-img">
                                <img src={require("../../../public/assets/img/adult-attractive-beautiful.jpg")} alt="Profile Picture"/>
                            </div>
                            <div class="msg-content">
                                <p>Hey I saw your listing for a henly shirt. How much does the grey long-sleeve cost?</p>
                            </div>
                        </div>



                        <div class="msg-from">
                            <div class="contact-img">
                                <img src={require("../../../public/assets/img/adult-attractive-beautiful.jpg")} alt="Profile Picture"/>
                            </div>
                            <div class="msg-content">
                                <p>Last price is P 300. Mahal kasi pagkabili nete. Original is around P 800.</p>
                            </div>
                        </div>
                        <div class="msg-to">
                            <div class="contact-img">
                                <img src={require("../../../public/assets/img/adult-attractive-beautiful.jpg")} alt="Profile Picture"/>
                            </div>
                            <div class="msg-content">
                                <p>Hey I saw your listing for a henly shirt. How much does the grey long-sleeve cost?</p>
                            </div>
                        </div>



                        <div class="msg-from">
                            <div class="contact-img">
                                <img src={require("../../../public/assets/img/adult-attractive-beautiful.jpg")} alt="Profile Picture"/>
                            </div>
                            <div class="msg-content">
                                <p>Last price is P 300. Mahal kasi pagkabili nete. Original is around P 800.</p>
                            </div>
                        </div>
                        <div class="msg-to">
                            <div class="contact-img">
                                <img src={require("../../../public/assets/img/adult-attractive-beautiful.jpg")}alt="Profile Picture"/>
                            </div>
                            <div class="msg-content">
                                <p>Hey I saw your listing for a henly shirt. How much does the grey long-sleeve cost?</p>
                            </div>
                        </div>



                        <div class="msg-from">
                            <div class="contact-img">
                                <img src={require("../../../public/assets/img/adult-attractive-beautiful.jpg")} alt="Profile Picture"/>
                            </div>
                            <div class="msg-content">
                                <p>Last price is P 300. Mahal kasi pagkabili nete. Original is around P 800.</p>
                            </div>
                        </div>
                        <div class="msg-to">
                            <div class="contact-img">
                                <img src={require("../../../public/assets/img/adult-attractive-beautiful.jpg")} alt="Profile Picture"/>
                            </div>
                            <div class="msg-content">
                                <p>Hey I saw your listing for a henly shirt. How much does the grey long-sleeve cost?</p>
                            </div>
                        </div>



                        <div class="msg-from">
                            <div class="contact-img">
                                <img src={require("../../../public/assets/img/adult-attractive-beautiful.jpg")} alt="Profile Picture"/>
                            </div>
                            <div class="msg-content">
                                <p>Last price is P 300. Mahal kasi pagkabili nete. Original is around P 800.</p>
                            </div>
                        </div>

                  </div>
                  <div>
                    <form>
                    <textarea>  Send Message ...</textarea>
                    <input type="reset" value="SEND" class="sendButton"/>
                    </form>
                  </div>


                </section>
            </div>
        );
    }
}

export default Inbox;
