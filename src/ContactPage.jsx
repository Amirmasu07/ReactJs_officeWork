import React from 'react';

const ContactPage = () => {
    return (
        <>
            <section className="contact_section layout_padding">
                <div className="container">
                    <h2>Contact Page</h2>
                    <div className="heading_container">
                    </div>
                    <div className="row">
                        <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="form_container">
                                <form action="">
                                    <div>
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="btn_box">
                                        <button>
                                            SUBMIT
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInRight" data-wow-delay="0.1s">
                            <div className="map_container ">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249822.21961233!2d82.75252935!3d21.068622799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1687303226805!5m2!1sen!2sin"
                                 width="600" height="450" allowFullScreen="" loading="lazy" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;