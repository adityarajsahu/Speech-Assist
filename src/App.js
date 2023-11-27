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

    const handleListing = () => {
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
    };

    const handleReset = () => {
        stopHandle();
        resetTranscript();
    };

    return (
        <div className="microphone-wrapper">
            <div className="mircophone-container">
                <div className="microphone-icon-container" ref={microphoneRef} onClick={handleListing}>
                    <img src={microPhoneIcon} className="microphone-icon" alt="Microphone" />
                </div>
                <div className="microphone-status">
                    {isListening ? "Listening........." : "Click to start Listening"}
                </div>
                {isListening && (
                    <button className="microphone-stop btn" onClick={stopHandle}>
                        Stop
                    </button>
                )}
            </div>
            {transcript && (
                <div className="microphone-result-container">
                    <div className="microphone-result-text">{transcript}</div>
                    <button className="microphone-reset btn" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
