module.exports = {
    content: [
      './index.html', // Include your HTML file
      './src/**/*.{js,ts,jsx,tsx}', // Include your JavaScript/TypeScript files
    ],
    darkMode:"class",
    theme: {

      extend: {
        colors: {
          // Define your custom colors here
          primary: '#fea928', 
          secondary: '#ed8900', 
          danger: '#e3342f', // Example danger color
          success: '#38c172', // Example success color
        },
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '2rem',
        
        },
      },
    },
    plugins: [],
  };