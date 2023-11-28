import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import translate from "translate";
import microPhoneIcon from "./microphone.svg";
import "./App.css";

function App() {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("en-US");

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return <div className="microphone-container">Browser does not support Speech Recognition.</div>;
    }

    const handleDropdownChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const handleListening = () => {
        setIsListening(true);
        SpeechRecognition.startListening({
            continuous: true,
        });
    };

    const handleStop = () => {
        setIsListening(false);
        SpeechRecognition.stopListening();
        console.log("User Input: ", transcript);
        const languageCode = selectedLanguage.substring(0, 2);
        translate(transcript, { from: "en", to: languageCode })
            .then((text) => {
                console.log("Translated Text: ", text);
                const speech = new SpeechSynthesisUtterance();
                speech.lang = selectedLanguage;
                speech.text = text;
                window.speechSynthesis.speak(speech);
                resetTranscript();
            })
            .catch((err) => {
                console.log(err);
                resetTranscript();
            });
    };

    return (
        <div className="App">
            <div className="HeaderContainer">
                <h1 className="Header">Speech Assist</h1>
            </div>
            <div className="SelectorContainer">
                <select className="Selector" value={selectedLanguage} onChange={handleDropdownChange}>
                    <option value="en-US" selected>
                        Select the Language
                    </option>
                    <option value="es-ES" className="Options">
                        Spanish
                    </option>
                    <option value="fr-FR" className="Options">
                        French
                    </option>
                    <option value="de-DE" className="Options">
                        German
                    </option>
                    <option value="it-IT" className="Options">
                        Italian
                    </option>
                    <option value="hi-IN" className="Options">
                        Hindi
                    </option>
                </select>
            </div>
            <div className="MicrophoneContainer">
                <div className="MicrophoneIconContainer">
                    <button className="StartButton" onClick={handleListening}>
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
                        <button className="StopButton" onClick={handleStop}>
                            Stop
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
