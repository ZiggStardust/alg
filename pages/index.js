import { Component } from 'react';
import requests from '../api/requests';
import Head from '../components/head';
import Footer from '../components/footer';
import Nav from '../components/home/nav';


class Home extends Component {

	static async getInitialProps() {
		const data = await requests.getPageByRoutePath("/");
		return data.allPages && data.allPages.length ? {content: data.allPages[0]} : null;
	}

	componentDidMount() {
		$.fn.clientSide();
	}

	render() {
		const {content} = this.props;

		if (!content) {
			return (
				'404'
			)
		}

		return (
			<div>
				<Head content={content} />
				<p className='example'>Welcome to Next.js! sss</p>

				<div id="wrapper" className="clearfix">

					<Nav />

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
