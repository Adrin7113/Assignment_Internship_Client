# OG Image Generator Client

This project is an Open Graph (OG) image generation website built with React.js and styled using Tailwind CSS. 
It allows users to create custom OG images through a form interface, preview the image, and upload it to Google Cloud Storage.

## Features

- User-friendly form for OG image data input
- Real-time meta tag generation using React Helmet
- Dynamic HTML to PNG conversion for OG image creation
- Integration with Google Cloud Storage for image hosting
- Direct link and preview of the generated OG image

## Tech Stack

- React.js
- Tailwind CSS
- TypeScript
- React Helmet
- HTML-to-Image library

## Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn

## Installation

1. Clone the repository:

git clone https://github.com/yourusername/og-image-generator-frontend.git
cd og-image-generator-frontend

2. Install dependencies:

npm install

3. Start the dev server

npm run dev

The application will be available at `http://localhost:3000`.

## Workflow

1. User inputs OG image data in the form
2. React Helmet updates meta tags in real-time
3. HTML is generated based on user input
4. HTML is converted to PNG
5. PNG is uploaded to Google Cloud Storage
6. User is presented with a preview and direct link to the OG image

