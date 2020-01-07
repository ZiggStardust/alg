import * as React from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';
import compose from 'recompose/compose';

const InstaGrid = ({ classes, media, account, status}) => {
	return (
		<div className="instagram-grid">
			{media &&
			status === 'completed' &&
			media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
				<div>
					<a href={postLink} target="_blank" title={accessibilityCaption || 'Instagram picture'}>
						<div>
							<div key={id || displayImage}>
								<img
									src={displayImage}
									alt={accessibilityCaption || 'Instagram picture'}
								/>
							</div>
						</div>
					</a>
				</div>
			))}
			{status === 'loading' && <p>loading...</p>}
			{status === 'failed' && <p>Check instagram here</p>}
		</div>
	);
};

InstaGrid.defaultProps = {
	media: undefined,
};

export default compose(
	withInstagramFeed,
)(InstaGrid);
