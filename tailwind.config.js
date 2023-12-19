/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'intro_and_email_sign_up': 'hsl(217, 28%, 15%)',
      'main_background': 'hsl(218, 28%, 13%)',
      'footer_background': 'hsl(216, 53%, 9%)',
      'testimonials_background': 'hsl(219, 30%, 18%)',
      'White': 'hsl(0, 0%, 100%)',
      'Light_Red': '#ffc82c', /* error */
      'Cyan': 'hsl(176, 68%, 64%)', /* (inside call-to-action gradient) */
      'Blue': 'hsl(198, 60%, 50%)', /* (inside call-to-action gradient) */
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'bg-desktop': "url('./src/images/bg-curvy-desktop.svg')",
        'bg-mobile': "url('./src/images/bg-curvy-mobile.svg')",
      }
    },
  },
  plugins: [],
}