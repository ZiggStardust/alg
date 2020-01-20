import { Component } from 'react';
import requests from '../api/requests';
import Head from '../components/head';
import Footer from '../components/footer';
import Nav from '../components/home/nav';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InstaGrid from '../components/home/instagram';


class Home extends Component {

	static async getInitialProps() {
		const data = await requests.getPageByRoutePath("/");
		console.log(data);
		return data && data.allPages && data.allPages.length ? {content: data.allPages[0]} : {};
	}

	componentDidMount() {
		$.fn.clientSide();
	}

	render() {
		const {content} = this.props;
		console.log(content);

		if (!content) {
			return (
				'404'
			)
		}

		const {
			hero_image,
			hero_text,
			about_us_intro_text,
			about_us_text, about_us_image,
			event_1_text,
			event_1_image,
			event_1_hover_text,
			event_2_text,
			event_2_image,
			event_2_hover_text,
			event_3_text,
			event_3_image,
			event_3_hover_text,
			event_4_text,
			event_4_image,
			event_4_hover_text,
			event_5_text,
			event_5_image,
			event_5_hover_text,
			event_6_text,
			event_6_image,
			event_6_hover_text,
			event_7_text,
			event_7_image,
			event_7_hover_text,
			event_8_text,
			event_8_image,
			event_8_hover_text
		} = content;

		const CustomForm = ({ status, message, onValidated }) => {
			let email;
			const submit = () =>
				email &&
				email.value.indexOf("@") > -1 &&
				onValidated({
					EMAIL: email.value
				});

			return (
				<>
					<div className="form-container">
						<div className="form-group col-md-4 mb-2">
							<input ref={node => (email = node)} type="email" placeholder="Email Address" className="form-control fit-width" />
						</div>
						<button className="btn btn-primary mb-2" onClick={submit}>Submit</button>
					</div>
					<div className="form-container-error">
						{status === "sending" && <div style={{ color: "blue" }} className="col-12">sending...</div>}
						{status === "error" && (
							<div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />
						)}
						{status === "success" && (
							<div style={{ color: "green" }} dangerouslySetInnerHTML={{ __html: message }} />
						)}
					</div>
				</>
			);
		};

		return (
			<div>
				<div id="wrapper" className="clearfix">
					<Nav />
					<section id="content">
						<div className="content-wrap pt-0 pb-0">
							<div className="ohidden d-flex align-items-center home-hero"
									 data-bottom-top="background-position:0px 100px; background-position: 0 -160px;" data-top-bottom="background-position:0px -200px;" style={{backgroundImage: `url('${hero_image.publicUrl}')`, height: '100vh', minHeight: '400px', backgroundPosition: '50% -160px'}}>
								<div className="container">
									<div className="row hero-text">
										<div className="col-lg-6">
											<h1 className="text-white">{hero_text}</h1>
										</div>
									</div>
								</div>
								<i className="icon-angle-down header-down" id="scroll-down" data-scroll-down></i>
							</div>
							<div className="bg-theme-light pt-5 pb-5" data-scroll-content>
								<div className="shadow-sm hero-features bgcolor dark shadow">
									<div className="row">
										<div className="col-md-4 mt-3 mt-md-0">
											<div className="feature-box fbox-plain fbox-small fbox-dark  mb-0">
												<div className="fbox-icon">
													{/*<i className="icon-line-circle-check"></i>*/}
													<img src="static/img/icon-ticket.svg" />
												</div>
												<h3 className="text-white">Exclusive Tickets</h3>
												<p className="text-white mb-0">Abbey owns a portfolio of tickets at all the main sporting stadiums and concert venues; always in the prime locations.</p>
											</div>
										</div>
										<div className="col-md-4 mt-3 mt-md-0">
											<div className="feature-box fbox-plain fbox-small fbox-dark mb-0">
												<div className="fbox-icon">
													<img src="static/img/icon-champagne-bottle.svg" />
												</div>
												<h3 className="text-white">Hospitality Packages</h3>
												<p className="text-white mb-0">When the occasion demands ‘more than just the ticket‘, Abbey will provide the very best official hospitality.</p>
											</div>
										</div>
										<div className="col-md-4 mt-3 mt-md-0">
											<div className="feature-box fbox-plain fbox-small fbox-dark mb-0">
												<div className="fbox-icon">
													<img src="static/img/icon-globe-earth.svg" />
												</div>
												<h3 className="text-white">Not Just London</h3>
												<p className="text-white mb-0">If London is not convenient for you, then get in touch as Abbey is also able to secure tickets for venues across the Country.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div className="section mt-0 pt-md-5 pt-0 mb-0" id="about">
						<div className="container clearfix">
							<div className="row mb-4">
								<div className="col-md-6 pr-5">
									<div className="heading-block mb-4 nobottomborder">
										{/*<div className="before-heading">About Us</div>*/}
										<h3 className="nott t600 mb-4 uppercase">About Us</h3>
										<h3 className="nott t500">{about_us_intro_text}</h3>
									</div>
									<p className="text-muted t300 lead">{about_us_text}</p>
								</div>
								<div className="col-md-6 col-sm-6">
									<img src={about_us_image.publicUrl} alt="Featured image 1" className="card-img-rounded" />
							</div>
						</div>
					</div>
				</div>
				<div className="section mt-0 mb-0 pt-md-0 pt-0 bg-theme-whit subscribe" id="signup">
					<div className="container clearfix">
						<h3>Subscribe</h3>
						<p className="blurb">Sign up to our mailing list to receive information on all our ticketing offers and upcoming events</p>
						<div id="mc_embed_signup">
							<form className="form-inline" action="https://abbeyboxoffice.us3.list-manage.com/subscribe/post?u=8991b220e340c3f9b2c94548f&amp;id=a3e4795f20" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
								<MailchimpSubscribe
									url='https://abbeyboxoffice.us3.list-manage.com/subscribe/post?u=8991b220e340c3f9b2c94548f&amp;id=a3e4795f20'
									render={({ subscribe, status, message }) => (
										<CustomForm
											status={status}
											message={message}
											onValidated={formData => subscribe(formData)}
										/>
									)}
								/>
							</form>
						</div>
					</div>
				</div>
				<div className="section mt-0 md-0 pt-5 mb-0 bg-theme-white home-events" id="events">
					<div className="container clearfix">
						<div className="heading-block mb-4 nobottomborder">
							{/*<div className="before-heading">Get Involved</div>*/}
							<h3 className="nott t600 uppercase">Our Events</h3>
						</div>
						<div className="row events-list">
							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light mt-4">
									<div>
										<img src={event_1_image.publicUrl} alt={event_1_text} className="card-img-top" />
										<span>
											<p>
												{event_1_hover_text}
											</p>
										</span>
									</div>
									<div className="card-body">
										<h5 className="card-title mb-0 t600">{event_1_text}</h5>
									</div>
								</div>
								<div className="card shadow-sm border-light mt-4">
									<div>
										<img src={event_5_image.publicUrl} alt={event_5_text} className="card-img-top" />
										<span>
											<p>
												{event_5_hover_text}
											</p>
										</span>
									</div>
									<div className="card-body">
										<h5 className="card-title mb-0 t600">{event_5_text}</h5>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light mt-4">
									<div>
										<img src={event_2_image.publicUrl} alt={event_2_text} className="card-img-top" />
										<span>
											<p>
												{event_2_hover_text}
											</p>
										</span>
									</div>
									<div className="card-body">
										<h5 className="card-title mb-0 t600">{event_2_text}</h5>
									</div>
								</div>
								<div className="card shadow-sm border-light mt-4">
									<div>
										<img src={event_6_image.publicUrl} alt={event_6_text} className="card-img-top" />
										<span>
											<p>
												{event_6_hover_text}
											</p>
										</span>
									</div>
									<div className="card-body">
										<h5 className="card-title mb-0 t600">{event_6_text}</h5>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light mt-4">
									<div>
										<img src={event_3_image.publicUrl} alt={event_3_text} className="card-img-top" />
										<span>
											<p>
												{event_3_hover_text}
											</p>
										</span>
									</div>
									<div className="card-body">
										<h5 className="card-title mb-0 t600">{event_3_text}</h5>
									</div>
								</div>
								<div className="card shadow-sm border-light mt-4">
									<div>
										<img src={event_7_image.publicUrl} alt={event_7_text} className="card-img-top" />
										<span>
											<p>
												{event_7_hover_text}
											</p>
										</span>
									</div>
									<div className="card-body">
										<h5 className="card-title mb-0 t600">{event_7_text}</h5>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light mt-4">
									<div>
										<img src={event_4_image.publicUrl} alt={event_4_text} className="card-img-top" />
										<span>
											<p>
												{event_4_hover_text}
											</p>
										</span>
									</div>
									<div className="card-body">
										<h5 className="card-title mb-0 t600">{event_4_text}</h5>
									</div>
								</div>
								<div className="card shadow-sm border-light mt-4">
									<div>
										<img src={event_8_image.publicUrl} alt={event_8_text} className="card-img-top" />
										<span>
											<p>
												{event_8_hover_text}
											</p>
										</span>
									</div>
									<div className="card-body">
										<h5 className="card-title mb-0 t600">{event_8_text}</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section mt-0 md-0 pt-5 mb-0 bg-theme-white home-events" id="events">
					<div className="container clearfix">
						<div className="heading-block mb-4 nobottomborder">
							<h3 className="nott t600 uppercase">Latest from Instagram</h3>
							{/*<div className="before-heading">Latest from Instagram</div>*/}
							<h4 className="nott t600">
								<a href="https://www.instagram.com/abbeyleisuregroup" target="_blank">@abbeyleisuregroup</a>
							</h4>
						</div>
						<InstaGrid account="abbeyleisuregroup" numberOfMediaElements={4} />
					</div>
				</div>
			</div>
				<div className="section pt-6 pb-6 mt-0 mb-0 testimonials clearfix">
					<div className="container">
						<div className="heading-block nobottomborder center">
							{/*<div className="before-heading">What our Customers Say</div>*/}
							<h3 className="nott t600 uppercase">Testimonials</h3>
							{/*<p className="mb-0 mt-1">*/}
							{/*	<span className="t600">Excellent, 9.6</span> out of 10 based on <span*/}
							{/*	className="t600">2,118</span> reviews.*/}
							{/*</p>*/}
						</div>
						<div id="testimonials-carousel"
								 className="owl-carousel carousel-widget testimonial testimonial-full nobgcolor noborder noshadow nopadding divcenter tleft clearfix"
								 data-animate-in="fadeIn" data-animate-out="fadeOut" data-margin="24" data-nav="false"
								 data-pagi="true" data-items="1">
							<div className="slide">
								<div className="testi-content">
									<div className="testi-stars mb-4">
										<i className="icon-star3"></i>
										<i className="icon-star3"></i>
										<i className="icon-star3"></i>
										<i className="icon-star3"></i>
										<i className="icon-star3"></i>
									</div>
									<p>Thank you Abbey for another wonderful day at Wimbledon . Our debenture seats were in a prime location on Centre Court and the hospitality was superb.</p>
									<div className="testi-meta mt-4">
										Matt Jenkins, Founder of MJM London
									</div>
								</div>
							</div>
							<div className="slide">
								<div className="testi-content">
									<div className="testi-stars mb-4">
										<i className="icon-star3"></i>
										<i className="icon-star3"></i>
										<i className="icon-star3"></i>
										<i className="icon-star3"></i>
										<i className="icon-star3"></i>
									</div>
									<p>I have used Abbey for over 10 years for all my ticketing requests quite simply because they offer  a first class service 7 days a weeks and always provide the very best available</p>
									<div className="testi-meta mt-4">
										David Oz, Director of Winged Boots
									</div>
								</div>
							</div>
							{/*<div className="slide">*/}
							{/*	<div className="testi-content">*/}
							{/*		<div className="testi-stars mb-4">*/}
							{/*			<i className="icon-star3"></i>*/}
							{/*			<i className="icon-star3"></i>*/}
							{/*			<i className="icon-star3"></i>*/}
							{/*			<i className="icon-star3"></i>*/}
							{/*			<i className="icon-star3"></i>*/}
							{/*		</div>*/}
							{/*		<p>Compellingly engage multimedia based niche markets via value-added manufactured products.*/}
							{/*			Competently formulate goal-oriented content for installed base users. Uniquely leverage other's*/}
							{/*			granular ROI without 24/365 collaboration and idea-sharing.</p>*/}
							{/*		<div className="testi-meta mt-4">*/}
							{/*			By x.*/}
							{/*		</div>*/}
							{/*	</div>*/}
							{/*</div>*/}
						</div>
					</div>
				</div>
				<div id="gotoTop" className="">
					<i className="icon-angle-up"></i>
				</div>
			<Footer />
		</div>
		)
	}
}

export default Home
