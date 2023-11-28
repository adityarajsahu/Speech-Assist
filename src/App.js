import React, { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import microPhoneIcon from "./microphone.svg";
import "./App.css";

function App() {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef(null);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return <div className="microphone-container">Browser does not support Speech Recognition.</div>;
    }

    const handleListening = () => {
        setIsListening(true);
        microphoneRef.current.classList.add("listening");
        SpeechRecognition.startListening({
            continuous: true,
        });
    };

    const stopHandle = () => {
        setIsListening(false);
        microphoneRef.current.classList.remove("listening");
        SpeechRecognition.stopListening();
        console.log(transcript);
        resetTranscript();
    };

    const handleReset = () => {
        stopHandle();
        resetTranscript();
    };

    return (
        <div className="App">
            <div className="HeaderContainer">
                <h1 className="Header">Speech Assist</h1>
            </div>
            <div className="MicrophoneContainer">
                <div className="MicrophoneIconContainer">
                    <button className="StartButton" ref={microphoneRef} onClick={handleListening}>
                        <img src={microPhoneIcon} className="MicrophoneIcon" alt="Microphone" />
                    </button>
                </div>
                <div className="MicrophoneStatus">
                    {isListening ? (
                        <h2 className="MicrophoneStatusText">Listening...</h2>
                    ) : (
                        <h2 className="MicrophoneStatusText">Click and Start Speaking</h2>
                    )}
                </div>
                <div className="StopButtonContainer">
                    {isListening && (
                        <button className="StopButton" onClick={stopHandle}>
                            Stop
                        </button>
                    )}
                </div>
            </div>
        </div>
        //     <div className="microphone-wrapper">
        //         <div className="mircophone-container">
        //             <div className="microphone-icon-container" ref={microphoneRef} onClick={handleListing}>
        //                 <img src={microPhoneIcon} className="microphone-icon" alt="Microphone" />
        //             </div>
        //             <div className="microphone-status">
        //                 {isListening ? "Listening........." : "Click to start Listening"}
        //             </div>
        //             {isListening && (
        //                 <button className="microphone-stop btn" onClick={stopHandle}>
        //                     Stop
        //                 </button>
        //             )}
        //         </div>
        //         {transcript && (
        //             <div className="microphone-result-container">
        //                 <div className="microphone-result-text">{transcript}</div>
        //                 <button className="microphone-reset btn" onClick={handleReset}>
        //                     Reset
        //                 </button>
        //             </div>
        //         )}
        //     </div>
    );
}

export default App;
