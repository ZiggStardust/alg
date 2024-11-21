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
		return (
			<div>
				<div id="wrapper" class="clearfix">
					<header id="header" class="clearfix static-sticky border-bottom-0 sticky-header">
						<div id="header-wrap" class="">
							<div class="container clearfix">
								<div id="primary-menu-trigger"><i class="icon-reorder"></i></div>
								<div id="logo" class="logo">
									<a href="http://abbeyleisuregroup.com/" class="standard-logo" data-sticky-logo="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576782405/abbey-leisure/logo-simple.png">
										<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576782405/abbey-leisure/logo-simple.png" alt="Canvas Logo" />
									</a>
									<a href="http://abbeyleisuregroup.com/" class="retina-logo" data-sticky-logo="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576782405/abbey-leisure/logo-simple.png">
										<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576782405/abbey-leisure/logo-simple.png" alt="Canvas Logo" />
									</a>
								</div>
								<nav id="primary-menu">
									<ul class="sf-js-enabled">
										<li><a href="#" data-scroll="about"><div>About Us</div></a></li>
										<li><a href="#" data-scroll="events"><div>Our Events</div></a></li>
										<li><a href="#" data-scroll="contact"><div>Contact Us</div></a></li>
										<li class="signup"><a href="#" data-scroll="signup"><div>Sign Up</div></a></li>
									</ul>
									<div id="top-account"><a href="#" class="d-none d-lg-block" data-scroll="signup"><span>SIGN UP</span></a></div>
								</nav>
							</div>
						</div>
					</header>
					<section id="content">
						<div class="content-wrap pt-0 pb-0">
							<div className="ohidden d-flex align-items-center home-hero"
								 data-bottom-top="background-position:0px 100px; background-position: 0 -160px;"
								 data-top-bottom="background-position:0px -200px;"
								 style={{
									 backgroundImage: "url('https://res.cloudinary.com/dszvbsfnt/image/upload/v1578666837/abbey-leisure/5e188b535c5802965aa2a9b9.jpg')",
									 height: "100vh",
									 minHeight: "400px",
									 backgroundPosition: "50% -160px"
								 }}>
								<div class="container">
									<div class="row hero-text">
										<div class="col-lg-8">
											<h1 class="text-white">More than just the ticket...</h1>
										</div>
									</div>
								</div>
								<i class="icon-angle-down header-down" id="scroll-down" data-scroll-down="true"></i>
							</div>
							<div class="bg-theme-light pt-5 pb-5" data-scroll-content="true">
								<div class="shadow-sm hero-features bgcolor dark shadow">
									<div class="row">
										<div class="col-md-4 mt-3 mt-md-0">
											<div class="feature-box fbox-plain fbox-small fbox-dark  mb-0">
												<div class="fbox-icon">
													<img src="/static/img/icon-ticket.svg" />
												</div>
												<h3 class="text-white">Exclusive Tickets</h3>
												<p class="text-white mb-0">Abbey owns a portfolio of tickets at all the main sporting stadiums and concert venues; always in the prime locations.</p>
											</div>
										</div>
										<div class="col-md-4 mt-3 mt-md-0">
											<div class="feature-box fbox-plain fbox-small fbox-dark mb-0">
												<div class="fbox-icon">
													<img src="/static/img/icon-champagne-bottle.svg" />
												</div>
												<h3 class="text-white">Hospitality Packages</h3>
												<p class="text-white mb-0">When the occasion demands ‘more than just the ticket‘, Abbey will provide the very best official hospitality.</p>
											</div>
										</div>
										<div class="col-md-4 mt-3 mt-md-0">
											<div class="feature-box fbox-plain fbox-small fbox-dark mb-0">
												<div class="fbox-icon">
													<img src="/static/img/icon-globe-earth.svg" />
												</div>
												<h3 class="text-white">Not Just London</h3>
												<p class="text-white mb-0">If London is not convenient for you, then get in touch as Abbey is also able to secure tickets for venues across the Country.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div class="section mt-0 pt-md-5 pt-0 mb-0" id="about">
						<div class="container clearfix">
							<div class="row mb-4">
								<div class="col-md-6 pr-5">
									<div class="heading-block mb-4 nobottomborder">
										<h3 class="nott t600 mb-4 uppercase">About Us</h3>
										<h3 class="nott t500">The best in client entertainment, with the hottest tickets and hospitality packages around.</h3>
									</div>
									<p class="text-muted t300 lead">Founded over 70 years ago, our extensive experience in the entertainment industry has earned Abbey Leisure Group an envied reputation for providing official tickets, with or without hospitality, for all major sporting events, concerts and theatre in London and across the UK. Here at Abbey we source the very best seats for hard to obtain events, always at competitive prices and never letting our clients down.</p>
								</div>
								<div class="col-md-6 col-sm-6">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1578666899/abbey-leisure/5e188b925c5802965aa2a9ba.jpg" alt="Featured image 1" class="card-img-rounded" />
								</div>
							</div>
						</div>
					</div>
					<div class="section mt-0 md-0 pt-5 mb-0 bg-theme-white home-events" id="events">
						<div class="container clearfix">
							<div class="heading-block mb-4 nobottomborder">
								<h3 class="nott t600 uppercase">Our Events</h3>
							</div>
							<div class="row events-list">
								<div class="col-md-3 col-sm-6">
									<div class="card shadow-sm border-light mt-4">
										<a href="https://abbeyboxoffice.londontheatredirect.com/" target="_blank"></a>
										<div>
											<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1578913123/abbey-leisure/5e1c4d625d656c1fd2aa9b49.jpg" alt="THEATRE" class="card-img-top" />
											<span>
												<p>Click here to buy Theatre tickets.</p>
											</span>
										</div>
										<div class="card-body">
											<h5 class="card-title mb-0 t600">THEATRE</h5>
										</div>
									</div>
									<div class="card shadow-sm border-light mt-4">
										<div>
											<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1580141916/abbey-leisure/5e2f0d5ca77ca66eb9ffe130.jpg" alt="CONCERTS" class="card-img-top" />
											<span>
												<p>The O2 Arena, Wembley Stadium, The Royal Albert Hall and many more.</p>
											</span>
										</div>
										<div class="card-body">
											<h5 class="card-title mb-0 t600">CONCERTS</h5>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-6">
									<div class="card shadow-sm border-light mt-4">
										<div>
											<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1578913144/abbey-leisure/5e1c4d775d656c1fd2aa9b4a.jpg" alt="FOOTBALL" class="card-img-top" />
											<span>
												<p>Premier League, FA Cup, Champions League and many more.</p>
											</span>
										</div>
										<div class="card-body">
											<h5 class="card-title mb-0 t600">FOOTBALL</h5>
										</div>
									</div>
									<div class="card shadow-sm border-light mt-4">
										<div>
											<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1578913491/abbey-leisure/5e1c4ed25d656c1fd2aa9b53.jpg" alt="CRICKET" class="card-img-top" />
											<span>
												<p>Various Cricket tournaments across Lords, The Oval and Egdbaston Cricket Grounds.</p>
											</span>
										</div>
										<div class="card-body">
											<h5 class="card-title mb-0 t600">CRICKET</h5>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-6">
									<div class="card shadow-sm border-light mt-4">
										<div>
											<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1578913144/abbey-leisure/5e1c4d775d656c1fd2aa9b4b.jpg" alt="TENNIS" class="card-img-top" />
											<span>
												<p>Wimbledon, Nitto ATP, Queens and many more. </p>
											</span>
										</div>
										<div class="card-body">
											<h5 class="card-title mb-0 t600">TENNIS</h5>
										</div>
									</div>
									<div class="card shadow-sm border-light mt-4">
										<div>
											<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1578913491/abbey-leisure/5e1c4ed25d656c1fd2aa9b54.jpg" alt="RUGBY" class="card-img-top" />
											<span>
												<p>Autumn Internationals, 6 Nations and many more. </p>
											</span>
										</div>
										<div class="card-body">
											<h5 class="card-title mb-0 t600">RUGBY</h5>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-6">
									<div class="card shadow-sm border-light mt-4">
										<div>
											<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1580141916/abbey-leisure/5e2f0d5ca77ca66eb9ffe12f.jpg" alt="HORSE RACING" class="card-img-top" />
											<span>
												<p>Ascot, Cheltenham, Aintree and many more.</p>
											</span>
										</div>
										<div class="card-body">
											<h5 class="card-title mb-0 t600">HORSE RACING</h5>
										</div>
									</div>
									<div class="card shadow-sm border-light mt-4">
										<div>
											<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1578913491/abbey-leisure/5e1c4ed25d656c1fd2aa9b55.jpg" alt="FLOWER SHOWS" class="card-img-top" />
											<span>
												<p>Chelsea Flower Show, Hampton Court Flower Show and many more.</p>
											</span>
										</div>
										<div class="card-body">
											<h5 class="card-title mb-0 t600">FLOWER SHOWS</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section mb-0 pt-md-5 pt-5 bg-theme-whit subscribe" id="signup">
						<div class="container clearfix">
							<h3>Subscribe</h3>
							<p class="blurb">Sign up to our mailing list to receive information on all our ticketing offers and upcoming events</p>
							<div id="mc_embed_signup">
								<form class="form-inline" action="https://abbeyboxoffice.us3.list-manage.com/subscribe/post?u=8991b220e340c3f9b2c94548f&amp;id=a3e4795f20" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate="novalidate">
									<div class="form-container">
										<div class="form-group col-md-4 mb-2">
											<input type="email" placeholder="Email Address" class="form-control fit-width" />
										</div>
										<button class="btn btn-primary mb-2">Submit</button>
									</div>
									<div class="form-container-error"></div>
								</form>
							</div>
						</div>
					</div>
					<div class="section mt-0 md-0 pt-5 mb-0 bg-theme-white home-events" id="events">
						<div class="container clearfix">
							<div class="heading-block mb-4 nobottomborder">
								<h3 class="nott t600 uppercase">Latest from Instagram</h3>
								<h4 class="nott t600">
									<a href="https://www.instagram.com/abbeyleisuregroup" target="_blank">@abbeyleisuregroup</a>
								</h4>
							</div>
							<div class="instagram-grid">
								<p>Check instagram here</p>
							</div>
						</div>
					</div>
					<div class="section pt-6 pb-6 mt-0 mb-0 testimonials clearfix">
						<div class="container">
							<div class="heading-block nobottomborder center">
								<h3 class="nott t600 uppercase">Testimonials</h3>
							</div>
							<div id="testimonials-carousel" class="owl-carousel carousel-widget testimonial testimonial-full nobgcolor noborder noshadow nopadding divcenter tleft clearfix owl-loaded owl-drag with-carousel-dots" data-animate-in="fadeIn" data-animate-out="fadeOut" data-margin="24" data-nav="false" data-pagi="true" data-items="1">
								<div class="owl-stage-outer">
									<div class="owl-stage">
										<div class="owl-item active">
											<div class="slide">
												<div class="testi-content">
													<div class="testi-stars mb-4">
														<i class="icon-star3"></i>
														<i class="icon-star3"></i>
														<i class="icon-star3"></i>
														<i class="icon-star3"></i>
														<i class="icon-star3"></i>
													</div>
													<p>Thank you Abbey for another wonderful day at Wimbledon . Our debenture seats were in a prime location on Centre Court and the hospitality was superb.</p>
													<div class="testi-meta mt-4">Matt Jenkins, Founder of MJM London</div>
												</div>
											</div>
										</div>
										<div class="owl-item">
											<div class="slide">
												<div class="testi-content">
													<div class="testi-stars mb-4">
														<i class="icon-star3"></i>
														<i class="icon-star3"></i>
														<i class="icon-star3"></i>
														<i class="icon-star3"></i>
														<i class="icon-star3"></i>
													</div>
													<p>I have used Abbey for over 10 years for all my ticketing requests quite simply because they offer  a first class service 7 days a weeks and always provide the very best available</p>
													<div class="testi-meta mt-4">David Ox, Director of Winged Boots</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="owl-nav disabled">
									<button type="button" role="presentation" class="owl-prev"><i class="icon-angle-left"></i></button>
									<button type="button" role="presentation" class="owl-next"><i class="icon-angle-right"></i></button>
								</div>
								<div class="owl-dots">
									<button role="button" class="owl-dot active"><span></span></button>
									<button role="button" class="owl-dot"><span></span></button>
								</div>
							</div>
						</div>
					</div>
					<div id="gotoTop" class="">
						<i class="icon-angle-up"></i>
					</div>
					<div id="contact">
						<footer id="footer" class="noborder bg-primary pb-4">
							<div id="copyrights" class="nobg dark pt-0">
								<div class="line mt-0"></div>
								<div class="container clearfix">
									<div class="row">
										<div class="col-xs-12 col-sm-2">
											<img src="/static/img/logo-white-footer.png" alt="Logo Footer" class="mb-4 footer-logo" />
											<div class="footer-socials">
												<a href="https://www.linkedin.com/company/abbey-leisure-group" class="social-icon si-small si-light si-linkedin" title="Linkedin" target="_blank">
													<i class="icon-linkedin"></i>
													<i class="icon-linkedin"></i>
												</a>
												<a href="https://twitter.com/abbeyleisuregrp" class="social-icon si-small si-light si-twitter" title="Twitter" target="_blank">
													<i class="icon-twitter"></i>
													<i class="icon-twitter"></i>
												</a>
												<a href="https://www.instagram.com/abbeyleisuregroup" class="social-icon si-small si-light si-instagram" title="instagram" target="_blank">
													<i class="icon-instagram"></i>
													<i class="icon-instagram"></i>
												</a>
											</div>
										</div>
										<div class="col-xs-12 col-sm-6 pb-2">
											<p class="mb-1 mt-5">23-24 Greek Street, London, W1D 4DZ</p>
											<div class="copyright-links">
												<a href="mailto:office@abbey-leisure.co.uk" class="text-white">office@abbey-leisure.co.uk</a> / 
												<a href="tel:+442077989200" class="text-white">020 7798 9200</a>
											</div>
											<br />
											<p class="text-white-50">Copyrights © 2019 All Rights Reserved by Abbey Leisure Group.</p>
											<p class="text-white-50">All bookings are subject to our Terms and conditions.</p>
										</div>
										<div class="col-xs-12 col-sm-4 align-content-end align-items-center text-white footer-map">
											<iframe src="https://snazzymaps.com/embed/207107" width="100%" height="200px" class="pull-right" data-ruffle-polyfilled=""></iframe>
										</div>
									</div>
								</div>
							</div>
						</footer>
						
					</div>
				</div>
				<script src="/static/jquery.js"></script>
				<script src="/static/plugins.js"></script>
				<script src="/static/functions.js"></script>
				<script type="text/javascript" src="http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
				<script type="text/javascript" src="/static/custom.js"></script>
				<script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-156919678-1"></script>
				<script type="javascript" src="/static/gtm.js"></script>
			</div>
			
		);
	}
}

export default Home;
