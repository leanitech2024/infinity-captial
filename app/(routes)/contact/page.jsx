import Layout from '@/components/layout/Layout';
import Newsteller1 from '@/components/sections/Newsteller1';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Layout breadcrumbTitle="Contact">
        <div>
          <section className="contact-section">
            {/*===============spacing==============*/}
            <div className="pd_top_90" />
            {/*===============spacing==============*/}
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                  <div className="contact_form_box_all type_one">
                    <div className="contact_form_box_inner">
                      <div className="contact_form_shortcode">
                        <form id="contact-form">
                          <div className="messages" />
                          <div className="controls">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label>
                                    {' '}
                                    Your Name
                                    <br />
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name *"
                                    required="required"
                                    data-error="Enter Your Name"
                                  />
                                  <div className="help-block with-errors" />
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label>
                                    {' '}
                                    Your Email
                                    <br />
                                  </label>
                                  <input
                                    type="text"
                                    name="email"
                                    required="required"
                                    placeholder="Email *"
                                    data-error="Enter Your Email Id"
                                  />
                                  <div className="help-block with-errors" />
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label>
                                    {' '}
                                    Your Subject
                                    <br />
                                  </label>
                                  <input
                                    type="text"
                                    name="subject"
                                    required="required"
                                    placeholder=" Subject  (Optional)"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label>
                                    {' '}
                                    Your Message
                                    <br />
                                  </label>
                                  <textarea
                                    name="message"
                                    placeholder="Additional Information... (Optional) "
                                    rows={3}
                                    required="required"
                                    data-error="Please, leave us a message."
                                    defaultValue={''}
                                  />
                                  <div className="help-block with-errors" />
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group mg_top apbtn">
                                  <button className="theme_btn" type="submit">
                                    Appointment
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 pd_left_30">
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections left">
                      <div className="before_title">Contact Info to</div>
                      <h2>Reach Our Expert Team</h2>
                      <p>
                        Send a message through given form, If your enquiry is
                        time sensitive please use below contact details.
                      </p>
                    </div>
                  </div>
                  <div className="contact_box_content style_one">
                    <div className="contact_box_inner icon_yes">
                      <div className="icon_bx">
                        <span className=" icon-placeholder" />
                      </div>
                      <div className="contnet">
                        <h3> Post Address </h3>
                        <p>
                          Innov8 Hotel Pride Plaza Aerocity, New Delhi-110037
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_15" />
                  {/*===============spacing==============*/}
                  <div className="contact_box_content style_one">
                    <div className="contact_box_inner icon_yes">
                      <div className="icon_bx">
                        <span className="icon-phone-call" />
                      </div>
                      <div className="contnet">
                        <h3> General Enquires </h3>
                        <p>Email: Info@infinitycapitol.com</p>
                        <p>Phone: +91 9810844046 &amp; +91 9560340000</p>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_15" />
                  {/*===============spacing==============*/}
                  <div className="contact_box_content style_one">
                    <div className="contact_box_inner icon_yes">
                      <div className="icon_bx">
                        <span className="fa fa-clock-o" />
                      </div>
                      <div className="contnet">
                        <h3> Operation Hours </h3>
                        <p>Mon-Satday: 09.00 to 07.00 (Sunday: Closed)</p>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_40" />
                  {/*===============spacing==============*/}
                  <div className="social_media_v_one style_two">
                    <ul>
                      <li>
                        <Link href="#">
                          {' '}
                          <span className="fa fa-facebook" />
                          <small>facebook</small>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          {' '}
                          <span className="fa fa-twitter" />
                          <small>twitter</small>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          {' '}
                          <span className="fa fa-skype" />
                          <small>skype</small>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          {' '}
                          <span className="fa fa-instagram" />
                          <small>instagram</small>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_top_70" />
            {/*===============spacing==============*/}
          </section>
          <section className="contact-map-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <section className="map-section">
                    {/*Map Outer*/}
                    <div className="map-outer">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8391833528!2d77.06889933644449!3d28.52758200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d1f7be6a29b%3A0xb72df7d6a70e8df5!2sInnov8%20Coworking%20%7C%20Pride%20Plaza%20Hotel%2C%20Aerocity%2C%20Delhi!5e0!3m2!1sen!2sin!4v1719300388654!5m2!1sen!2sin"
                        height={570}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </section>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_top_90" />
            {/*===============spacing==============*/}
          </section>
          {/*-newsteller-*/}
          <Newsteller1 />
        </div>
      </Layout>
    </>
  );
}
