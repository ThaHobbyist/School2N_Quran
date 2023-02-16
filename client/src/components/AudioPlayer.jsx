import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
	MdPauseCircleFilled,
	MdPlayCircleFilled,
	MdSkipNext,
	MdSkipPrevious,
} from "react-icons/md";

export default function AudioPlayer(props) {
	// state
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	// references
	const audioPlayer = useRef(); // reference our audio component
	const progressBar = useRef(); // reference our progress bar
	const animationRef = useRef(); // reference the animation

	useEffect(() => {
		// console.log(props)
		const seconds = Math.floor(audioPlayer.current.duration);
		setDuration(seconds);
		progressBar.current.max = seconds;
	}, [
		audioPlayer?.current?.loadedmetadata,
		audioPlayer?.current?.readyState,
	]);

	useEffect(() => {
		props.startPlay && togglePlayPause()
	}, [props.startPlay])

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returnedSeconds}`;
	};

	const togglePlayPause = () => {
		const prevValue = isPlaying;
		setIsPlaying(!prevValue);
		props.playAyah(props.ayah.number)
		if (!prevValue) {
			audioPlayer.current.play();
			animationRef.current = requestAnimationFrame(whilePlaying);
		} else {
			audioPlayer.current.pause();
			cancelAnimationFrame(animationRef.current);
		}
	};

	const whilePlaying = () => {
		progressBar.current.value = audioPlayer.current.currentTime;
		changePlayerCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current.value;
		changePlayerCurrentTime();
	};

	const changePlayerCurrentTime = () => {
		progressBar.current.style.setProperty(
			"--seek-before-width",
			`${(progressBar.current.value / duration) * 100}%`
		);
		setCurrentTime(progressBar.current.value);

		
	};

	const backThirty = () => {
		progressBar.current.value = Number(progressBar.current.value - 30);
		changeRange();
	};

	const forwardThirty = () => {
		progressBar.current.value = Number(progressBar.current.value + 30);
		changeRange();
	};

	return (
		<Player>
			<audio
				ref={audioPlayer}
				src={props.ayah['audio']}
				preload="metadata"
			></audio>

			<div className="header">
				<h5>{props.type} {props.surah['number']}</h5>
				<h5>|</h5>
				<h5>{props.surah['englishName']}</h5>
				<h5>|</h5>
				<h5>Ayah {props.ayah['number']}</h5>
			</div>

			<div className="buttons">
				<button className="forwardBackward" onClick={backThirty}>
					<MdSkipPrevious /> 
				</button>
				<button onClick={togglePlayPause} className="playPause">
					{isPlaying ? (
						<MdPauseCircleFilled className="icn" />
					) : (
						<MdPlayCircleFilled className="icn" />
					)}
				</button>
				<button className="forwardBackward" onClick={forwardThirty}>
					 <MdSkipNext />
				</button>
			</div>

			<div className="track">
				{/* current time */}
				<div className="currentTime">{calculateTime(currentTime)}</div>

				{/* progress bar */}
				<div className="bar">
					<input
						type="range"
						className="progressBar"
						defaultValue="0"
						ref={progressBar}
						onChange={changeRange}
					/>
				</div>

				{/* duration */}
				<div className="duration">
					{duration && !isNaN(duration) && calculateTime(duration)}
				</div>
			</div>
		</Player>
	);
}

const Player = styled.div`
	margin-top: 1.5rem;

	--primary: #f40082;
	--secondary: #ffd200;

	align-items: center;
	display: flex;
	flex-direction: column;
	width: 700px;

	background: #ffffff;
	border: 2px solid #000000;
	box-shadow: 3px 3px 0px #000000;
	border-radius: 20px;
    padding: 0.5rem;
    
    

	.buttons {
		display: flex;
		align-items: center;
	}

	.header {
		display: flex;
		align-items: center;

		h5 {
			font-family: "K2D";
			font-style: normal;
			font-weight: 400;
			font-size: 25px;

            margin: 0 0.2rem;
		}

        margin-bottom: 1rem;
	}

	.track {
		display: flex;
		align-items: center;
        justify-content: space-evenly;

        margin: 1rem 0 0 0;
        width: 100%;

		.bar {
			margin: 0.2rem;
            width: 80%;
		}
	}

	.forwardBackward {
		background: none;
		border: none;
		display: flex;
		align-items: center;
		font-family: monospace;
		font-size: 16px;
		cursor: pointer;
	}

	.forwardBackward:hover {
		color: var(--primary);
	}

	.playPause {
		background: #ffffff;
		border: none;
		border-radius: 50%;
		width: 2.8rem;
		height: 2.8rem;
		font-size: 80px;
        padding: 0;
		/* color: #fff; */
		display: flex;
		justify-content: center;
		align-items: center;
        cursor: pointer;
	}

    .pa

	.icn {
       padding: 0;
		/* left: 5px; */
	}

	.currentTime,
	.duration {
		font-family: monospace;
		font-size: 16px;
	}

	.progressBar {
		--bar-bg: #ffffff0;
		--seek-before-width: 2px;
		--seek-before-color: #000000;
		--knobby: #ffffff;
		--selectedKnobby: #000000;

		appearance: none;
		background: var(--bar-bg);
		border-radius: 10px;
		position: relative;
		width: 100%;
		height: 10px;
		outline: none;
	}

	/* progress bar - safari */
	.progressBar::-webkit-slider-runnable-track {
		background: var(--bar-bg);
		border-radius: 10px;
		position: relative;
		width: 100%;
		height: 11px;
		outline: none;
	}

	/* progress bar - firefox */
	.progressBar::-moz-range-track {
		background: var(--bar-bg);
		border-radius: 10px;
		position: relative;
		width: 100%;
		height: 11px;
		outline: none;
	}

	.progressBar::-moz-focus-outer {
		border: 0;
	}

	/* progress bar - chrome and safari */
	.progressBar::before {
		content: "";
		height: 2px;
		width: var(--seek-before-width);
		background-color: var(--seek-before-color);
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		cursor: pointer;
	}

	/* progress bar - firefox */
	.progressBar::-moz-range-progress {
		background-color: var(--seek-before-color);
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		height: 11px;
	}

	/* knobby - chrome and safari */
	.progressBar::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 10px;
		width: 10px;
		border-radius: 50%;
		border: none;
		background-color: var(--knobby);
		cursor: pointer;
		position: relative;
		border: 2px solid #000000;
		margin: -4px 0 0 0;
		z-index: 3;
		box-sizing: border-box;
	}

	/* knobby while dragging - chrome and safari */
	.progressBar:active::-webkit-slider-thumb {
		transform: scale(1.2);
		background: var(--selectedKnobby);
	}

	/* knobby - firefox */
	.progressBar::-moz-range-thumb {
		height: 15px;
		width: 15px;
		border-radius: 50%;
		border: transparent;
		background-color: var(--knobby);
		cursor: pointer;
		position: relative;
		z-index: 3;
		box-sizing: border-box;
	}

	/* knobby while dragging - firefox */
	.progressBar:active::-moz-range-thumb {
		transform: scale(1.2);
		background: var(--selectedKnobby);
	}
`;
