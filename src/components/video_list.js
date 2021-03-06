import React from 'react';
import VideoListItem from './video_list_item';

 
const VideoList = (props) => {
	const videoItems = props.videos.map((data) => {
		return (
			<VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={data.etag} 
			video={data} />	
		);
	});

	return (
		<ul className="col-md-4 group-list">
			{videoItems}
		</ul>
	);
}

export default VideoList;