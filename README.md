<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/adityarajsahu/Speech-Assist">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Speech Assist</h3>

  <p align="center">
    Speak the world's language with ease – Your voice, translated to connect across borders effortlessly!
    <br />
    <a href="https://github.com/adityarajsahu/Speech-Assist"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://incredible-stardust-1155ac.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/adityarajsahu/Speech-Assist/issues">Report Bug</a>
    ·
    <a href="https://github.com/adityarajsahu/Speech-Assist/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#start-the-application">Start the Application</a></li>
      </ul>
    </li>
    <li><a href="#demonstration">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Speech Assist][product-screenshot]](https://incredible-stardust-1155ac.netlify.app/)

Introducing my revolutionary application that transcends language barriers with the power of your voice. Seamlessly communicate with people from diverse backgrounds as our app listens to your speech and translates it into your selected language. Here's why it's a game changer:

-   **Real-Time Translation:** Experience instant and accurate translations, enabling smooth conversations without delay.
-   **Global Connectivity:** Connect with people worldwide effortlessly, fostering understanding and collaboration across borders.
-   **User-Friendly Interface:** Intuitive and easy to use, our app ensures a hassle-free experience, making multilingual communication accessible to everyone. Unlock a world of possibilities with the simplicity of your speech.

The application currently supports English, Spanish, French, German, Italian and Hindi languages.

<p align="right"><a href="#readme-top">back to top</a></p>

### Built With

The Speech Assist application is meticulously crafted using a sophisticated array of cutting-edge frameworks and libraries, each meticulously chosen to enhance the user experience and functionality. Leveraging the power of modern technology, the application seamlessly integrates with a robust set of frameworks and libraries, to ensure optimal performance, real-time speech processing, and accurate langauge translation.

-   [![JavaScript][js]][js-url]
-   [![React][React.js]][React-url]
-   [![React Speech Recognition][react-speech-recognition]][react-speech-recognition-url]
-   [![Translate][translate]][translate-url]
-   [![CSS][css]][css-url]

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- GETTING STARTED -->

## Getting Started

Welcome to the Getting Started section, your gateway to unleashing the power of Speech Assist on your device! This step-by-step guide is designed to walk you though the basic installation process, ensuring a smooth setup that brings our innovative langauge translation application to life on your local device.

### Prerequisites

Below are the prerequisites needed to run the application on your device locally. Follow the provided instructions to install them seamlessly, ensuring a hassle-free setup process that paves the way for experiencing the full functionality of the application.

-   Download and install from this [link](https://nodejs.org/en/download) according to your operating system.

-   For MacOS and Linux, install Node Package Manager (npm) as a separate step
    ```
    npm install npm@latest -g
    ```
-   Check if Node.js as well as Node Package Manager are installed in your device

    ```
    node --version
    npm --version
    ```

### Installation

Below are the prerequisites needed to run the application on your device locally. Follow the provided instructions to install them seamlessly, ensuring a hassle-free setup process that paves the way for experiencing the full functionality of the application.

-   Clone the repository

    ```
    git clone https://github.com/adityarajsahu/Speech-Assist.git
    ```

-   Move into the Speech-Assist directory

    ```
    cd Speech-Assist
    ```

-   Install the NPM dependencies required for running the application

    ```
    npm install
    ```

### Start the Application

Follow these instruction to launch the application locally on device to experience real-time speech translation.

-   Command to start the application on privately on localhost

    ```
    npm start
    ```

-   In order the use the application on other device connected over a common public network, find the IPv4 address of your device and use this command
    ```
    npm start --host <IPv4_ADDRESS>
    ```

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- USAGE EXAMPLES -->

## Demonstration

Welcome to the Demonstration section, where I bring the magic of Speech Assist to life. Join me as I showcase the application's functionality, illustrating how it seamlessly transforms spoken words into global communication.

[![Video](https://img.youtube.com/vi/4VA3_0gw-bs/maxresdefault.jpg)](https://www.youtube.com/watch?v=4VA3_0gw-bs)

<!-- Embed Youtube Video -->

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- ROADMAP -->

## Roadmap

-   [x] Listen to Human Speech in English and manage it in a state as string
-   [x] Create a dropdown to select the language to which the string needs to be translated
-   [x] Translate the string to the selected language
-   [x] Convert the string to speech
-   [ ] Multi-Language Support
    -   [ ] Support multiple languages other than English as input speech
    -   [ ] Support multiple languages as output speech
-   [ ] Create wave animation around microphone button when device is listening to speech
-   [ ] Create cross-platform application using React Native Webview

See the [open issues](https://github.com/adityarajsahu/Speech-Assist/issues) for a full list of proposed features (and known issues).

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

-   Fork the Project
-   Create your Feature Branch

    ```
    git checkout -b feature
    ```

-   Commit your Changes

    ```
    git commit -m "Added a new feature"
    ```

-   Push to the Branch

    ```
    git push origin feature
    ```

-   Open a Pull Request

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- CONTACT -->

## Contact

<a href="https://instagram.com/aadityaraj_sahu" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="aadityaraj_sahu" height="30" width="40" /></a>
<a href="https://twitter.com/adityaraj_sahu" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="adityaraj_sahu" height="30" width="40" /></a>
<a href="https://linkedin.com/in/adityaraj-sahu" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="adityaraj-sahu" height="30" width="40" /></a>
<a href="mailto:adityaraj2019.sahu@gmail.com" target="blank"><img align="center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1q2cVhHdLksImX5hR7_8YYk6hCVqAkfCq-I7pyaVwmxIAWecbBnJ9vtHy6uRYU_32nYg&usqp=CAU" alt="adityaraj-sahu" height="30" width="40" /></a>

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/adityarajsahu/Speech-Assist.svg?style=for-the-badge
[contributors-url]: https://github.com/adityarajsahu/Speech-Assist/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/adityarajsahu/Speech-Assist.svg?style=for-the-badge
[forks-url]: https://github.com/adityarajsahu/Speech-Assist/network/members
[stars-shield]: https://img.shields.io/github/stars/adityarajsahu/Speech-Assist.svg?style=for-the-badge
[stars-url]: https://github.com/adityarajsahu/Speech-Assist/stargazers
[issues-shield]: https://img.shields.io/github/issues/adityarajsahu/Speech-Assist.svg?style=for-the-badge
[issues-url]: https://github.com/adityarajsahu/Speech-Assist/issues
[license-shield]: https://img.shields.io/github/license/adityarajsahu/Speech-Assist.svg?style=for-the-badge
[license-url]: https://github.com/adityarajsahu/Speech-Assist/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/adityaraj-sahu/
[product-screenshot]: images/screenshot.png
[js]: https://img.shields.io/badge/javascript-000000?style=for-the-badge&logo=javascript&logoColor=white
[js-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[react-speech-recognition]: https://img.shields.io/badge/react_speech_recognition-35495E?style=for-the-badge&logo=reactspeechrecognition&logoColor=4FC08D
[react-speech-recognition-url]: https://www.npmjs.com/package/react-speech-recognition
[translate]: https://img.shields.io/badge/translate-DD0031?style=for-the-badge&logo=translate&logoColor=white
[translate-url]: https://github.com/franciscop/translate
[css]: https://img.shields.io/badge/css-4A4A55?style=for-the-badge&logo=css&logoColor=FF3E00
[css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
