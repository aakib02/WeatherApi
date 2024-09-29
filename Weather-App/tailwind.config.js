/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'rightpanel': "url('https://images.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        // 'leftpanel': "url('https://images.pexels.com/photos/325117/pexels-photo-325117.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }
    },
  },
  plugins: [],
}

