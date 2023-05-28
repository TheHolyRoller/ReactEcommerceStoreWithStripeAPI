    
    
    import {useState, useEffect, useContext, useRef, useCallback, useReducer} from 'react'

    // Import the stylesheet here 
    import PL from '../Styles/Player.module.css'; 


    import '@fortawesome/fontawesome-svg-core'; 
    import '@fortawesome/free-regular-svg-icons'; 
    import '@fortawesome/react-fontawesome'; 
    import '@fortawesome/fontawesome-svg-core'
    // import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core'; 

    // import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'; 
    import { faCoffee, faPause } from '@fortawesome/free-solid-svg-icons'; 
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

    import { faPlay } from '@fortawesome/free-solid-svg-icons';
    import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
    import { faForwardFast } from '@fortawesome/free-solid-svg-icons';
    import { faFastForward } from '@fortawesome/free-solid-svg-icons';
    import { faForward } from '@fortawesome/free-solid-svg-icons';

    import { faBackward } from '@fortawesome/free-solid-svg-icons';
    import { faBackwardFast } from '@fortawesome/free-solid-svg-icons';
    import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';
    import { faBackspace } from '@fortawesome/free-solid-svg-icons';


    import { faPlus } from '@fortawesome/free-solid-svg-icons';
    import { faMinus } from '@fortawesome/free-solid-svg-icons';
    
    
    import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
    import { faVolumeLow } from '@fortawesome/free-solid-svg-icons';
    import { faVolumeDown } from '@fortawesome/free-solid-svg-icons'; 
    import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
    import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';
    
    
    
    import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
    import { faInfinity } from '@fortawesome/free-solid-svg-icons';

    import { fa1 } from '@fortawesome/free-solid-svg-icons';
    
    
    // Import the audio files here '
    import audios from '../assets/Tornado_Siren_II-Delilah-747233690.mp3';
    import plane from '../assets/airplane-landing_daniel_simion.mp3'; 
    
    
    // Import the image Files here 
    
    import cathedral from '../assets/Cathedral.jpg'; 
    import Harbour from '../assets/Harbour.jpg'; 


    const audioFiles = [
      
      {
      title: "first song", 
      label: "music",
      image: "https://images.unsplash.com/photo-1680082286331-4473a0801b0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
      file: audios

        
      },
      
      {
        title: "second song", 
        label: "music", 
        image: "https://images.unsplash.com/photo-1680004661457-772c03735a30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        file: plane
        
        
      }
      
    ];


    // Add in the progress bar reference here 
    function Player({audios, plane}) {

      const progressBarRef = useRef(); 
            
      const playAnimationRef = useRef();
      
      const audioRef = useRef();
      
      const [index, setIndex] = useState(0);
      
      const [audio, setAudio] = useState(new Audio(audioFiles[index].file));
      
      // Add in the time state variables here 
      
      const [time, setTime] = useState(0); 
      
      const [duration, setDuration] = useState(0); 
      
      
      
      const [timeProgress, setTimeProgress] = useState(0); 
      
      const [playing, setPlaying] = useState(false); 
      
      const [isLooped, setisLooped] = useState(false); 
      
      
      const [percentage, setPercentage] = useState(0);
      
      const [metadata, setMetadata] = useState({});
      
      const [volume, setVolume] = useState(60); 
      
      
      const [muteVolume, setMuteVolume] = useState(false);
        
        // ----BING references-------  
        const volumeSliderRef = useRef();


      
      // This does not appear to be working of firing 
      const updateTime = () => {
          
          // Find out what currentTime is and what to use instead 
          setTimeProgress((audio.currentTime / audio.duration) * 100);
          
          console.log(audioRef.currentTime); 
          console.log("Is this firing?")
      }
      
      
      // Add in the volume functions here 
      const increaseVolume = () => {
        
        // Add in the functionality to increase the volume here 
        console.log("increase Volume "); 
        
        audioRef.current.volume += 1; 
        const increasedVolume = audioRef.current.volume; 
        
        setVolume(increasedVolume);
        
      }
      
      
      const decreaseVolume = () => {
        
        console.log("decrease volume ");
        audioRef.current.volume -= 1; 
        const decreasedVolume = audioRef.current.volume; 
        
        setVolume(decreasedVolume);
        
        // console.log(volume); 
        
        
        
      }
      
      // ----BING Volume Functions -----------
      
      // BING SCROLLING FUNCTION 
      const handleClick = (event) => {
        // Get the audio element from the prop
        const audio = audioRef.current;
    
        // Get the progress bar element from the ref
        const progressBar = progressBarRef.current;
    
        // Get the bounding rectangle of the progress bar
        const rect = progressBar.getBoundingClientRect();
    
        // Get the x coordinate of the click relative to the progress bar
        const x = event.clientX - rect.left;
    
        // Get the width of the progress bar
        const width = progressBar.offsetWidth;
    
        // Calculate the percentage of the click position
        const percentage = (x / width) * 100;
    
        // Get the duration of the audio element
        const duration = audio.duration;
    
        // Calculate the new current time based on the percentage and duration
        const newTime = (percentage / 100) * duration;
    
        // Set the current time of the audio element to the new time
        audio.currentTime = newTime;
        
        // setAudio(audio); 
        
        // Experimental 
        setTime(audio); 
        
        
      };
      
      
      
      // BING AUDIO FUNCTIONS 
      
      // Put this in a useEffect hook here 
      useEffect(() => {
        // Get the audio element from the prop
        const audio = audioRef.current;
    
        // Define a function to handle the volumechange event
        const handleVolumeChange = () => {
          // Get the volume from the audio element
          const volume = audio.volume;
    
          // Set the volume state with the value
          setVolume(volume);
        };
    
        // Add an event listener for the volumechange event
        audio.addEventListener('volumechange', handleVolumeChange);
    
        // Remove the event listener on cleanup
        return () => {
          audio.removeEventListener('volumechange', handleVolumeChange);
        };
      }, [audioRef]);
      
 
      
      
      // This animates the progress bar 
      const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
        
        // Replace this with another variable that dictates the width of the progress bar 
          '--range-progress',
          `${(progressBarRef.current.value / duration) * 100}%`
        );
    
        playAnimationRef.current = requestAnimationFrame(repeat);
      }, [audioRef, duration, progressBarRef, setTimeProgress]);
    
    
    // For animation of Progress Bar 
      useEffect(() => {
        if (playing) {
          audioRef.current.play();
          playAnimationRef.current = requestAnimationFrame(repeat);
        } else {
          audioRef.current.pause();
          cancelAnimationFrame(playAnimationRef.current);
        }
      }, [playing, audioRef, repeat]);
      
      
      useEffect(() => {

        // Add the event listener in here 
        audio.addEventListener("timeupdate", updateTime); 
        audio.addEventListener("loadedmetadata", onLoadedMetadata);
        
        
        return () =>{
          
          audio.removeEventListener('timeupdate', updateTime); 
        }
    // This is not being changed 
    }, [time]);
    
      // This loads in the length in seconds of a song 
    const onLoadedMetadata = () => {
      
      const seconds = audioRef.current.duration;
      progressBarRef.current.max = seconds;
      console.log(audioRef.current.duration);
      
      setDuration(seconds);
    };
      
      // This is supposed to update the width of the progress bar 
      const handleProgressChange = (e) => {
        
          // Log the current value of the Progress bar reference here 
          console.log(progressBarRef.current.value); 
          audioRef.current.currentTime = progressBarRef.current.value;
      }
      
      const togglePlayPause = () => {
        // Check if the audio is playing or not
        // const isPlaying = !audioRef.current.paused;
        
        console.log("Toggle Play")
        
        // If it is playing, pause it
        
        // if (isPlaying) {
          // audioRef.current.pause();
        } else {
          // If it is not playing, play it
          // audioRef.current.play();
        }
        setPlaying(!playing); 
        
      };
      
      // Add in the time formatter here 
      const formatTime = (time) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
      };
      
      
      
      
      // Add in the function here to unpause the song 
      const unPause = () => {
        
        console.log("unpause"); 
        // audioRef.current.play(); 
        togglePlayPause();
        togglePlayPause(); 
        
        
      }
      
      // This is for the auto play functionality. Is not needed anymore 
    useEffect(() => {
      
      // This is used to autoplay the songs 
        // audioRef.current.play(); 
      
      
      // This used to have audio in it audio 
    }, [])
      
      
      
      const nextAudio = () => {
        
        
        console.log("Why is there no autoplay");
          
          if(!isLooped){
            const newIndex = (index + 1) % audioFiles.length;
        
        // Update the index state
          setIndex(newIndex);
        
        const newAudio = new Audio(audioFiles[index].file); 
        setAudio(newAudio);
            
          }
          else{
            
            const newIndex = (index + 2) % audioFiles.length;
        
        // Update the index state
        setIndex(newIndex);
        
        const newAudio = new Audio(audioFiles[index].file); 
        setAudio(newAudio);
        
        audio.loop = true; 
        // timeReset(); 
        togglePlayPause(); 
        
          }
        
        
      }
      
       
      
      const timeReset = () => {
        
        console.log("is this working"); 
        
        
        audioRef.current.currentTime -= 15000; 
        
        
        
        
      }
      
      
      
      
      const previousAudio = () => {
        
        audioRef.current.pause(); 
        
        const newIndex = (index - 1 + audioFiles.length) % audioFiles.length; 
            
        setIndex(newIndex); 
        
        const newAudio = new Audio(audioFiles[index].file); 
        setAudio(newAudio);
        
      }
      
      
      const skipForward = () => {
        audioRef.current.currentTime += 15;
      };
      
      const skipBackward = () => {
        audioRef.current.currentTime -= 15;
      };
      
      
      const loopToggle = () => {
        
          
          if(isLooped){
            // Add in the code here to start the same track on end 
            
            
          }
          
          
          else{

            
            
          }
          
          setisLooped(!isLooped); 
        
      }
      

      return (
        <div className={PL.mainContainer}>
          
        <div className={PL.componentContainer}>
        
        {/* Add in the track image container here  */}
        
        <div className={PL.trackImageContainer}>
          
          <img id={PL.trackImage}  src={audioFiles[index].image} alt="Sorry no image"/> 
          
        </div>
        

        <div className={PL.titleContainer}>
        
        <div className={PL.title}>
          <h3>
           {audio.title}
           {audioFiles[index].title}

          </h3>
        </div>
        </div>
        
        <div className={PL.trackContainer}>
       
          {/* Add in the onClick event handler here to scrub through the Audio file  */}
          <input style={{width: "30" + "vw"}} className={PL.trackProgress}  type="range" ref={progressBarRef} defaultValue="0" onClick={handleClick}  onChange={event => { { handleProgressChange; } }} />
          
          <span className={PL.timeCurrent}> {formatTime(timeProgress)} </span>
          <span className={PL.time}> {formatTime(duration)} </span>
          
        </div>
        <div className={PL.controlsContainer}>
        
        <div onClick={previousAudio} className={PL.skipBackContainer}>
          
          <FontAwesomeIcon icon={faBackward} >
          </FontAwesomeIcon>
        </div>
        
        {/* Add in the roll backwards container here  */}
        <div onClick={skipBackward}  className={PL.rollbackContianer}>
          
          <FontAwesomeIcon icon={faBackwardFast} >
          </FontAwesomeIcon>
          
        </div>
        
        <div onClick={togglePlayPause} className={PL.playButtonContainer}>
        
        <audio onEnded={nextAudio} ref={audioRef} src={audioFiles[index].file} onLoadedMetadata={onLoadedMetadata}  />
        {  !playing ?  <FontAwesomeIcon  icon={faPlay}/> : <FontAwesomeIcon icon={faPause}/> }
        
        </div>
        
        
        <div onClick={skipForward} className={PL.rollforwardContainer}>

          <FontAwesomeIcon icon={faFastForward}>
        
        </FontAwesomeIcon>
          
          
        </div>
        
        {/* Add in the skip forward button here  */}
        <div onClick={nextAudio}   className={PL.skipForwardContainer}>
        
        {/* Add in the Skip forward icon here  */}
        <FontAwesomeIcon icon={faForward}>
        
        </FontAwesomeIcon>
        </div>
        
        {/* Add in the Loop button container here  */}
        
        <div onClick={loopToggle}  className={PL.loopButtonContainer}>
          
          <FontAwesomeIcon icon={faInfinity}></FontAwesomeIcon>
          {isLooped ? <FontAwesomeIcon icon={fa1}></FontAwesomeIcon> : <div></div>}
        </div>
        
        
        
          <div className={PL.volumeControlsContainer}>
                  
                  Volume Controls 
          {/* Add in the volume controls here  */}
          <div className={PL.volumeControls} >
          
          {/* Add in the increase volume container here  */}
          <div className={PL.increaseVolumeContainer} onClick={increaseVolume}  >
            
            {/* Add in the plus Icon here  */}
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            
          </div>
          
          
          <div className={PL.decreaseVolumeContainer} onClick={decreaseVolume} >

            <FontAwesomeIcon icon={faMinus}>

            </FontAwesomeIcon>
            
            
          </div>
          
          
          </div>
          
        </div>
        
        
        </div>
        
        </div>

          Player
        </div>
      );
      
      }

    export default Player;
    
