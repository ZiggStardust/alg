import { Component } from 'react';
import requests from '../api/requests';
import Head from '../components/head';
import Footer from '../components/footer';
import Nav from '../components/home/nav';


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

		return (
			<div>
				<div id="wrapper" className="clearfix">
					<Nav />
					<section id="content">
						<div className="content-wrap pt-0 pb-0">

							<div className="ohidden parallax d-flex align-items-center home-hero"
									 data-bottom-top="background-position:0px 200px;" data-top-bottom="background-position:0px -700px;" style={{backgroundImage: 'url("https://res.cloudinary.com/dszvbsfnt/image/upload/v1576435130/abbey-leisure/main-image.jpg")', height: '520px', minHeight: '400px'}}>
								<div className="container">
									<div className="row">
										<div className="col-lg-6">
											<h1 className="text-white">The Best in client entertainment, with the hottest tickets and hospitality packages around.</h1>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-theme-light">
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

					<div className="section mt-0 pt-md-5 pt-0 mb-0">
						<div className="container clearfix">
							<div className="row align-items-md-center mb-4">
								<div className="col-md-6 pr-5">
									<div className="heading-block mb-4 nobottomborder">
										<div className="before-heading">About Us</div>
										<h3 className="nott t500">Abbey Leisure Group is a London based company specialising in client entertainment and the supply of tickets and hospitality packages.</h3>
									</div>
									<p className="text-muted t300 lead">Founded over 70 years ago, our extensive experience in the entertainment industry has earned Abbey Leisure Group an envied reputation for providing official tickets, with or without hospitality, for all major sporting events, concerts and theatre in London and across the UK. Here at Abbey we source the very best seats for hard to obtain events, always at competitive prices and never letting our clients down.</p>
								</div>
								<div className="col-md-6 col-sm-6">
									<img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Featured image 1" className="card-img-rounded" />
							</div>
						</div>
					</div>
				</div>

				{/*<div className="section mt-0 mb-0 pt-md-0 pt-0 bg-theme-whit home-events">*/}
				{/*	<div className="container clearfix">*/}
				{/*		<form className="form-inline">*/}
				{/*			<div className="form-group mx-sm-3 mb-2">*/}
				{/*				<label htmlFor="inputPassword2" className="sr-only">E-Mail</label>*/}
				{/*				<input type="password" className="form-control" id="inputPassword2" placeholder="Password" />*/}
				{/*			</div>*/}
				{/*			<button type="submit" className="btn btn-primary mb-2">Subscribe</button>*/}
				{/*		</form>*/}
				{/*	</div>*/}
				{/*</div>*/}

				<div className="section mt-0 pt-md-0 pt-0 bg-theme-whit home-events">
					<div className="container clearfix">

						<div className="heading-block mb-4 nobottomborder">
							<div className="before-heading">Get Involved</div>
							<h3 className="nott t500">Our Events</h3>
						</div>

						<div className="row">
							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576424943/abbey-leisure/5df655ee4ca6fa3c3c0bb7a6.jpg" alt="Featured image 1" className="card-img-top" />
										<div className="card-body">
											<h5 className="card-title mb-0 t600">Horse Racing</h5>
										</div>
								</div>

								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576434968/abbey-leisure/football.jpg" alt="Featured image 1" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Football</h5>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576432888/abbey-leisure/tennis.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Tennis</h5>
									</div>
								</div>

								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576531430/abbey-leisure/theatre.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Theatre</h5>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576433357/abbey-leisure/cricket.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Cricket</h5>
									</div>
								</div>

								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576435017/abbey-leisure/concerts.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Concerts</h5>
									</div>
								</div>

							</div>

							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576433383/abbey-leisure/f1.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Formula 1</h5>
									</div>
								</div>

								<div className="card shadow-sm border-light mt-4">
									<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576440876/abbey-leisure/flower-show.jpg" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title mb-0 t600">Chelsea Flower Show</h5>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
				<div id="gotoTop" className="icon-angle-up">top</div>

				<Footer />
			</div>
		)
	}
}

export default Home
