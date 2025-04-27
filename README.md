# Voice Calculator

A modern web application that allows users to perform calculations using voice commands. The calculator supports basic arithmetic operations and provides both visual and audio feedback.

## Features

- Voice input for mathematical expressions
- Real-time display of expressions and results
- Text-to-speech output of results
- Calculation history with timestamps
- Error handling for invalid inputs
- Clear/Reset functionality
- Modern, responsive UI using Material-UI

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A modern web browser with speech recognition support (Chrome recommended)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd voice-calculator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will open in your default browser at `http://localhost:3000`.

## Usage

1. Click the microphone button to start voice input
2. Speak your mathematical expression (e.g., "five plus three" or "ten times four")
3. The result will be displayed and spoken back to you
4. Use the clear button to reset the calculator
5. View your calculation history in the panel below

## Supported Voice Commands

- Numbers: "zero" through "nine"
- Operations:
  - Addition: "plus"
  - Subtraction: "minus"
  - Multiplication: "times" or "multiplied by"
  - Division: "divided by"
  - Equals: "equals"

## Browser Support

This application uses the Web Speech API, which is best supported in Chrome and Chrome-based browsers. Some features may not work in other browsers.

## License

MIT 