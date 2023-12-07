import React, { useState, useEffect } from "react";
import "../assets/styles/components/FollowButton.css";
import { initUser, isFollowedByUser } from "../APIcalls";

const FollowButton = ({ style, userToFollowId, isFollowed, followUser , currentUser}) => {
	const [isFollowing, setIsFollowing] = useState(false);
	const [user, setUser] = useState(null);
	
	const toggleFollow = async () => {
	
		try {
			// Call the followUser function passed as a prop
			await followUser(userToFollowId);

			// Toggle the local state
			setIsFollowing((prevIsFollowing) => !prevIsFollowing);
		} catch (error) {
			console.error("Failed to follow the user", error);
		}
	};
useEffect(() => {
	const checkIsFollowing = async () => {
		try {
			console.log("Checking isFollowing:", currentUser);
			const followInfo = await isFollowedByUser(
				currentUser.id,
				userToFollowId,
				currentUser.token
			);
			console.log("FollowInfo:", followInfo);
			setIsFollowing(followInfo ? followInfo.is_following : false);
		} catch (error) {
			console.error("Failed to check if the user is following", error);
		}
	};

	checkIsFollowing();
}, [currentUser.id, userToFollowId, currentUser.token]);




	


	return (
		<button
			style={style}
			className={`button ${isFollowing ? "following" : "follow"}`}
			onClick={toggleFollow}>
			{isFollowing ? "Following" : "Follow +"}
		</button>
	);
};

export default FollowButton;