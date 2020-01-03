
export default content => {
	return (

			<header id="header" className="clearfix static-sticky border-bottom-0">

				<div id="header-wrap">

					<div className="container clearfix">

						<div id="primary-menu-trigger">
							<i className="icon-reorder"></i>
						</div>


						<div id="logo">
							<a href="index.html" className="standard-logo" data-sticky-logo="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576782405/abbey-leisure/logo-simple.png">
								<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576782405/abbey-leisure/logo-simple.png" alt="Canvas Logo" /></a>
							<a href="index.html" className="retina-logo" data-sticky-logo="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576782405/abbey-leisure/logo-simple.png">
								<img src="https://res.cloudinary.com/dszvbsfnt/image/upload/v1576782405/abbey-leisure/logo-simple.png" alt="Canvas Logo" /></a>
						</div>

						<nav id="primary-menu">
							<ul>
								<li>
									<a href="#" data-scroll="about">
										<div>About Us</div>
									</a>
								</li>
								<li>
									<a href="#" data-scroll="events">
										<div>Our Events</div>
									</a>
								</li>
								<li>
									<a href="#" data-scroll="contact">
										<div>Contact Us</div>
									</a>
								</li>
							</ul>
							<div id="top-account">
								<a href="#" className="d-none d-lg-block" data-scroll="signup">
									<span>SIGN UP</span>
								</a>
							</div>
						</nav>
					</div>

				</div>

			</header>
	)
}
