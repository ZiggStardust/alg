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
		//return data.allPages && data.allPages.length ? {content: data.allPages[0]} : null;
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
						<div className="content-wrap pt-3 pb-0">

							<div className="ohidden parallax d-flex align-items-center home-hero"
									 data-bottom-top="background-position:0px 200px;" data-top-bottom="background-position:0px -700px;" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1536439381735-db641cb9ed49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")', height: '500px'}}>
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
							<div className="row align-items-md-center mb-5">
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

				<div className="section mt-0 pt-md-5 pt-0 bg-theme-whit">
					<div className="container clearfix">

						<div className="heading-block mb-4 nobottomborder">
							<div className="before-heading">Get Involved</div>
							<h3 className="nott t500">Our Events</h3>
						</div>

						<div className="row">
							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light">
									<img src="https://mail.google.com/mail/u/2?ui=2&ik=5f865d9150&attid=0.2&permmsgid=msg-f:1651275593282833836&th=16ea82673be54dac&view=fimg&disp=thd&attbid=ANGjdJ9b78R2BK5tycQ_q3L_9qU1TH8JCBcV-kGUB4PhR59HF8bKxbQHKPC_FtAx4fxkd_QMHDB4I9f_1gkOCNFXqtuwanY9qwgtPkh75QQtQO0hsKwU0nY-5C7q3kE&ats=2524608000000&sz=w2880-h1436" alt="Featured image 1" className="card-img-top" />
										<div className="card-body">
											<h5 className="card-title t600 color">Horse Racing</h5>
										</div>
								</div>
							</div>

							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light">
									<img src="https://mail.google.com/mail/u/2?ui=2&ik=5f865d9150&attid=0.6&permmsgid=msg-f:1651275593282833836&th=16ea82673be54dac&view=fimg&disp=thd&attbid=ANGjdJ_h8PTx2R4pr5lIt-b4YdGpnD5lCDJUOGodfwG_5y5E2SeYSW6d1BpcUSzXuV2u9ixhKEq-LNvFLR4_aunxCrcT3SN5rRu7omSGGHlgT_sxINhRvD4BOgkSzMc&ats=2524608000000&sz=w2880-h1436" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title t600 color">Music</h5>
									</div>
								</div>

							</div>

							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light">
									<img src="https://mail.google.com/mail/u/2?ui=2&ik=5f865d9150&attid=0.7&permmsgid=msg-f:1651275593282833836&th=16ea82673be54dac&view=fimg&disp=thd&attbid=ANGjdJ-6JfaXD1vE7VAhxsU0bWvNCMwKz7AOWZVmwYKJ01TYu6cJD3TKtDXjIeZx0PQSVEawdoF2mnFa7px_0Q-u6IQ1vzJtQsaY25vqrs2YejFAjweIfhLPGMwmAWk&ats=2524608000000&sz=w2880-h1436" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title t600 color">Rugby</h5>
									</div>
								</div>

							</div>

							<div className="col-md-3 col-sm-6">
								<div className="card shadow-sm border-light">
									<img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Featured image 2" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title t600 color"></h5>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>


				<div>
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				</div>

				<div id="gotoTop" className="icon-angle-up">top</div>

				<Footer />
			</div>
		)
	}
}

export default Home
