
export default content => {
	return (
		<div>
			<header id="header" className="clearfix static-sticky border-bottom-0">
				<div id="header-wrap">
					<div className="container clearfix">
						<div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

						<div id="logo">
							<a href="index.html" className="standard-logo"
								 data-sticky-logo="demos/coworking/images/logo-sticky.png"><img
								src="demos/coworking/images/logo.png" alt="Canvas Logo" /></a>
							<a href="index.html" className="retina-logo"
								 data-sticky-logo="demos/coworking/images/logo-sticky@2x.png"><img
								src="demos/coworking/images/logo@2x.png" alt="Canvas Logo" /></a>
						</div>

						<nav id="primary-menu">
							<ul>
								<li className="current"><a href="#">
									<div>Home</div>
								</a></li>
								<li><a href="#">
									<div>About Us</div>
								</a></li>
								<li><a href="#">
									<div>Rates</div>
								</a></li>
								<li><a href="#">
									<div>Contact Us</div>
								</a></li>
							</ul>

							<div id="top-account">
								<a href="tel:+618-234-532-45"><i className="icon-call"></i> <span>+(61)8-234-532-45</span></a>
							</div>
						</nav>
					</div>
				</div>
			</header>
		</div>
	)
}
