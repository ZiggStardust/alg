import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document';


export default class CustomDocument extends Document {
	render () {
		return (
			<html lang='en-US'>
			<Head>
				<title>Abbey Leisure Group</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta name="description" content="The best in client entertainment, with the hottest tickets and hospitality packages around."></meta>

				<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" rel="stylesheet" />
				<link href="http://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700|Crete+Round:400italic" rel="stylesheet" type="text/css" />
				<link rel="stylesheet" href="static/css/bootstrap.css" type="text/css" />
				<link rel="stylesheet" href="static/css/style.css" type="text/css" />
				<link rel="stylesheet" href="static/css/dark.css" type="text/css" />
				<link rel="stylesheet" href="static/css/dark-rtl.css" type="text/css" />
				<link rel="stylesheet" href="static/css/font-icons.css" type="text/css" />
				<link rel="stylesheet" href="static/css/font-icons-rtl.css" type="text/css" />
				<link rel="stylesheet" href="static/css/animate.css" type="text/css" />
				<link rel="stylesheet" href="static/css/magnific-popup.css" type="text/css" />
				<link rel="stylesheet" href="static/css/responsive.css" type="text/css" />
				<link rel="stylesheet" href="static/css/coworking.css" type="text/css" />
				<link rel="stylesheet" href="static/css/colors.css" type="text/css" />
				<link rel="stylesheet" href="static/css/custom.css" type="text/css" />

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				
			</Head>
			<body className={'stretched'}>
			<Main />
			<NextScript />
			</body>
		</html>
		)
	}
}
