import { Component } from 'react';
import requests from '../api/requests';
import Head from '../components/head';
import Footer from '../components/footer';
import Nav from '../components/home/nav';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InstaGrid from '../components/home/instagram';


class Home extends Component {

	static async getInitialProps() {
		//const data = await requests.getPageByRoutePath("/");
		//console.log(data);
		return {content: {}};
		//return data && data.allPages && data.allPages.length ? {content: data.allPages[0]} : {};
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
									 data-bottom-top="background-position:0px 100px; background-position: 0 -160px;" data-top-bottom="background-position:0px -200px;" style={{backgroundImage: 'url("https://res.cloudinary.com/dszvbsfnt/image/upload/v1576768361/abbey-leisure/background.jpg")', height: '100vh', minHeight: '400px', backgroundPosition: '50% -160px'}}>
								<div className="container">
									<div className="row hero-text">
										<div className="col-lg-6">
											<h1 className="text-white">The best in client entertainment, with the hottest tickets and hospitality packages around.</h1>
											{/*<h1 className="text-white">More than just the ticket</h1>*/}
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
													<i className="icon-line-circle-check"></i>
												</div>
												<h3 className="text-white">Exclusive Tickets</h3>
												<p className="text-white mb-0">Abbey owns a portfolio of tickets at all the main sporting stadiums and concert venues; always in the prime locations.</p>
											</div>
										</div>
										<div className="col-md-4 mt-3 mt-md-0">
											<div className="feature-box fbox-plain fbox-small fbox-dark mb-0">
												<div className="fbox-icon">
													<i className="icon-line-circle-check"></i>
												</div>
												<h3 className="text-white">Hospitality Packages</h3>
												<p className="text-white mb-0">When the occasion demands ‘more than just the ticket‘, Abbey will provide the very best official hospitality.</p>
											</div>
										</div>
										<div className="col-md-4 mt-3 mt-md-0">
											<div className="feature-box fbox-plain fbox-small fbox-dark mb-0">
												<div className="fbox-icon">
													<i className="icon-line-circle-check"></i>
												</div>
												<h3 className="text-white">Not Just London.</h3>
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
							<div className="row align-items-md-center mb-4">
								<div className="col-md-6 pr-5">
									<div className="heading-block mb-4 nobottomborder">
										<div className="before-heading">About Us</div>
										<h3 className="nott t600">Abbey Leisure Group is a London based company specialising in client entertainment and the supply of tickets and hospitality packages.</h3>
									</div>
									<p className="text-muted t300 lead">Founded over 70 years ago, our extensive experience in the entertainment industry has earned Abbey Leisure Group an envied reputation for providing official tickets, with or without hospitality, for all major sporting events, concerts and theatre in London and across the UK. Here at Abbey we source the very best seats for hard to obtain events, always at competitive prices and never letting our clients down.</p>
								</div>
								<div className="col-md-6 col-sm-6">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1578415375/abbey-leisure/west-end.jpg" alt="Featured image 1" className="card-img-rounded" />
							</div>
						</div>
					</div>
				</div>

				<div className="section mt-0 mb-0 pt-md-0 pt-0 bg-theme-whit subscribe" id="signup">
					<div className="container clearfix">
						<h3>Subscribe to our mailing list</h3>

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
							<div className="before-heading">Get Involved</div>
							<h3 className="nott t600">Our Events</h3>
						</div>

						<div className="row">
							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576531430/abbey-leisure/theatre.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Theatre</h5>
									</div>
								</div>

								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576424943/abbey-leisure/5df655ee4ca6fa3c3c0bb7a6.jpg" alt="Featured image 1" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Horse Racing</h5>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576434968/abbey-leisure/football.jpg" alt="Featured image 1" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Football</h5>
									</div>
								</div>

								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576432888/abbey-leisure/tennis.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Tennis</h5>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-sm-6">

								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576435017/abbey-leisure/concerts.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Concerts</h5>
									</div>
								</div>

								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576433357/abbey-leisure/cricket.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Cricket</h5>
									</div>
								</div>



							</div>

							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1578411891/abbey-leisure/rugby.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Rugby</h5>
									</div>
								</div>

								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576440876/abbey-leisure/flower-show.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Flower Shows</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

					<div className="section pt-6 pb-6 mt-0 mb-0 testimonials clearfix">
						<div className="container">
							<div className="heading-block nobottomborder center">
								<div className="before-heading">What our Customers Say</div>
								<h2 className="nott t600">Testimonials</h2>
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
											By x.
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
											By x.
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

					<div className="section mt-0 md-0 pt-5 mb-0 bg-theme-white home-events" id="events">
						<div className="container clearfix">
							<div className="heading-block mb-4 nobottomborder">
								<div className="before-heading">Latest from Instagram</div>
								<h3 className="nott t600">@abbeyleisuregroup</h3>
							</div>
							<InstaGrid account="abbeyleisuregroup" numberOfMediaElements={4} />
						</div>
					</div>
				</div>

				<div id="gotoTop" className=""><i className="icon-angle-up"></i></div>

			<Footer />
			</div>
		)
	}
}

export default Home
