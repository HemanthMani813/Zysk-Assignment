import React from 'react'
import "./index.css"
import Content from "../../Assests/Content.png"
import FictionalCompanylogo from "../../Assests/Fictional company logo.png"
import Fictional from "../../Assests/Fictional company logo (1).png"
import Fictional2 from "../../Assests/Fictional company logo (2).png"
import Fictional3 from "../../Assests/Fictional company logo (3).png"
import Fictional4 from "../../Assests/Fictional company logo (4).png"
import Fictional5 from "../../Assests/Fictional company logo (5).png"
import Featuredicon_inbox from "../../Assests/Featured icon.png"
import Featuredicon_instant from "../../Assests/Featured icon (1).png"
import Featuredicon_reports from "../../Assests/Featured icon (2).png"
import Featuredicon_customers from "../../Assests/Featured icon (3).png"
import Featuredicon_connect from "../../Assests/Featured icon (4).png"
import Featuredicon_people from "../../Assests/Featured icon (5).png"
import tesimonialcompanylogo from "../../Assests/testimonial Fictional company logo.png"
import avatar from "../../Assests/Avatar.png"
import featurecontent from "../../Assests/features content img.png"
import avatarGroup from "../../Assests/Avatar group.png"
import blogpostimg from "../../Assests/Image.png"
import blogpostimg2 from "../../Assests/Image (2).png"
import blogpostimg3 from "../../Assests/Image (1).png"
import arrowimg from "../../Assests/Icon wrap.png"
import blogavatar1 from "../../Assests/blog avatar 1.png"
import blogavatar2 from "../../Assests/blog avatar 2.png"
import blogavatar3 from "../../Assests/blog avatar 3.png"





function Home() {
  return (
    <div className='home_page'>
        <section className='hp_hero_section'>
            {/* <div class="hp_hero_section__feature-banner">
                <span class="new-feature">New feature</span>
                <span  class="hp_hero_section_new_feature_team-dashboard">
                    Check out the team dashboard
                    <span class="arrow">→</span>
                </span>
            </div> */}
            <h2>Beautiful analytics to grow smarter</h2>
            <p>Powerful, self-serve product and growth analytics to help you convert, engage,<br/> and retain more users. Trusted by over 4,000 startups.</p>
            <div>
                <button className='btn btn-outline'><i class="fa-solid fa-play"></i>DEMO</button>
                <button className='btn btn-primary'>Sign Up</button>
            </div>
        </section>
        <section>
            <img src={Content} alt='hero_img' />
        </section>
        <section className='hp_fictionalLogo_section'>
            <p>Join 4,000+ companies already growing</p>
            <div className='hp_fictional_logo_container'>
                <div>
                    <img src={FictionalCompanylogo} alt='fictional Company Logo' />
                </div>
                <div>
                    <img src={Fictional} alt='fictional Company Logo' />
                </div>
                <div>
                    <img src={Fictional2} alt='fictional Company Logo' />
                </div>
                <div>
                    <img src={Fictional3} alt='fictional Company Logo' />
                </div>
                <div>
                    <img src={Fictional4} alt='fictional Company Logo' />
                </div>
                <div>
                    <img src={Fictional5} alt='fictional Company Logo' />
                </div>
            </div>
            <hr/>
        </section>
        {/* Feature section */}
        <section>
            <div className='feactures_section_features_head'>
                <h3>Features</h3>
                <div className='feactures_section_subhead_container'>
                    <h2>Analytics that feels like it’s from the future</h2>
                    <p>Powerful, self-serve product and growth analytics to help you convert, engage,<br/> and retain more users. Trusted by over 4,000 startups.</p>
                </div>
            </div>
            <div className='feactures_section_features_container'>
                <div className='feactures_section_features_container_feature_card'>
                    <img src={Featuredicon_inbox} alt='Featured Icon' />
                    <h4>Share team inboxes</h4>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>
                <div className='feactures_section_features_container_feature_card'>
                    <img src={Featuredicon_instant} alt='Featured Icon' />
                    <h4>Deliver instant answers</h4>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>
                <div className='feactures_section_features_container_feature_card'>
                    <img src={Featuredicon_reports} alt='Featured Icon' />
                    <h4>Manage your team with reports</h4>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>
                <div className='feactures_section_features_container_feature_card'>
                    <img src={Featuredicon_customers} alt='Featured Icon' />
                    <h4>Connect with customers</h4>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>
                <div className='feactures_section_features_container_feature_card'>
                    <img src={Featuredicon_connect} alt='Featured Icon' />
                    <h4>Connect the tools you already use</h4>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>
                <div className='feactures_section_features_container_feature_card'>
                    <img src={Featuredicon_people} alt='Featured Icon' />
                    <h4>Our people make the difference</h4>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>
            </div>
        </section>
        {/* testimonial section */}
        <section className='hp_testimonial_section'>
            <div className='hp_testimonial_container_componay_logo'>
                <img src={tesimonialcompanylogo} alt='company logo' />
            </div>
            <div className='hp_testimonial_container_head'>
                <h2>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h2>
            </div>
            <div className='hp_testimonial_container_profile'>
                <img src={avatar} alt='testimonial profile img'/>
                <div className='hp_testimonial_container_profile_details'>
                    <h4>Candice Wu</h4>
                    <p>Product Manager, Sisyphus</p>
                </div>
            </div>
        </section>
        
        {/* Features section */}
        <section className='hp_2features_section'>
            <div className='hp_2features_section_head_container'>
                <h2>Cutting-edge features for advanced analytics</h2>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage,<br/> and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className='sec_features_section_content_container'>
                <img src={featurecontent} alt='imageof feature content' />
                <div className='sec_features_section_content__features_container'>
                    <div className='feactures_section_features_container_feature_card'>
                        <img src={Featuredicon_inbox} alt='Featured Icon' />
                        <h4>Share team inboxes</h4>
                        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                        <span>Learn More <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div className='feactures_section_features_container_feature_card'>
                        <img src={Featuredicon_instant} alt='Featured Icon' />
                        <h4>Deliver instant answers</h4>
                        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                        <span>Learn More <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div className='feactures_section_features_container_feature_card'>
                        <img src={Featuredicon_reports} alt='Featured Icon' />
                        <h4>Manage your team with reports</h4>
                        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                        <span>Learn More <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
            <hr/>
        </section>

        {/* FAQ Section */}
        <section className='hp_faq_section'>
            <div className='FAQ_section_head_container'>
                <h3>Frequently asked questions</h3>
                <p>Everything you need to know about the product and billing.</p>
            </div>
            <div className='faq_section_container'>
                <div className="collapse collapse-plus  m-3">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Is there a free trial available?</div>
                    <div className="collapse-content">
                        <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>
                    <hr/>
                </div>
                
                <div className="collapse collapse-plus  m-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Can I change my plan later?</div>
                    <div className="collapse-content">
                    <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>
                    <hr/>
                </div>
                <div className="collapse collapse-plus  m-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">What is your cancellation policy?</div>
                    <div className="collapse-content">
                    <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>
                    <hr/>
                </div>
                <div className="collapse collapse-plus m-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Can other info be added to an invoice?</div>
                    <div className="collapse-content">
                    <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>
                    <hr/>
                </div>
                <div className="collapse collapse-plus  m-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How does billing work?</div>
                    <div className="collapse-content">
                    <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>
                    <hr/>
                </div>
                <div className="collapse collapse-plus  m-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How do I change my account email?</div>
                    <div className="collapse-content">
                    <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className='FAQ_section_get_in_touch_conatiner'>
                <img src={avatarGroup} alt='avatar group' />
                <h4>Still have questions?</h4>
                <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <button className='btn btn-primary'>Get in touch</button>
            </div>
        </section>

        {/* Blog Section */}
        <section className='hp_blog_section'>
            <div className='blog_section_head_container'>
                <div className='blog_section_details_container'>
                    <span>Our blog</span>
                    <h4>Lastest blog posts</h4>
                    <p>Tool and strategies modern teams need to help their companies grow.</p>
                </div>
                <button className='btn btn-primary blog_btn'>View all posts</button>
            </div>
            <div className='blog_section_posts_list_container'>
                <div className='blog_section_post_container'>
                    <img src={blogpostimg} alt='blog_post img' />
                    <div className='blog_section_post_details_container'>
                        <span>Design</span>
                        <div className='bolg_section_post_detailed_head_con'>
                            <h4>UX review presentations</h4>
                            <img src={arrowimg} alt='arrow-image'/>
                        </div>
                        <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                        <div className='bolg_section_post_profile_container'>
                            <img src={blogavatar1} alt='avatar'/>
                            <div>
                                <h5>Olivia Rhye</h5>
                                <p>20 Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blog_section_post_container'>
                    <img src={blogpostimg2} alt='blog_post img' />
                    <div className='blog_section_post_details_container'>
                        <span>Product</span>
                        <div className='bolg_section_post_detailed_head_con'>
                            <h4>Migrating to Linear 101</h4>
                            <img src={arrowimg} alt='arrow-image'/>
                        </div>
                        <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
                        <div className='bolg_section_post_profile_container'>
                            <img src={blogavatar2} alt='avatar'/>
                            <div>
                                <h5>Phoenix Baker</h5>
                                <p>19 Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blog_section_post_container'>
                    <img src={blogpostimg3} alt='blog_post img' />
                    <div className='blog_section_post_details_container'>
                        <span>Software Engineering</span>
                        <div className='bolg_section_post_detailed_head_con'>
                            <h4>Building your API stack</h4>
                            <img src={arrowimg} alt='arrow-image'/>
                        </div>
                        <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
                        <div className='bolg_section_post_profile_container'>
                            <img src={blogavatar3} alt='avatar'/>
                            <div>
                                <h5>Lana Steiner</h5>
                                <p>18 Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className='CTA_secton'>
            <div className='cta_container'>
                <h3>Start your free trial</h3>
                <p>Join over 4,000+ startups already growing with Untitled.</p>
                <div>
                    <button className='btn btn-outline'>Learn More</button>
                    <button className='btn btn-primary'>Get started</button>
                </div>
            </div>
        </section>
        

    </div>
  )
}

export default Home