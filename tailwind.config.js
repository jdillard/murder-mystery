/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./source/layouts/**/*.html",
    "./source/public/**/*.html",
    "./source/**/*.md"
  ],
  theme: {
    extend: {
      fontFamily: {
        'garamond': ['EB Garamond', 'serif'],
        'cinzel': ['Cinzel Decorative', 'cursive'],
        'deco': ['DecoNeue', 'sans-serif']
      },
      colors: {
        'vintage-cream': '#f6efe6',
        'text-dark': '#333'
      },
      width: {
        'a4': '210mm',
        'content': '170mm',
        'fan': '180mm',
        'fan-sm': '67mm'
      },
      height: {
        'a4': '297mm',
        'fan': '80mm',
        'fan-sm': '60mm'
      },
      fontSize: {
        '68pt': '68pt',
        '36pt': '36pt',
        '26pt': '26pt',
        '24pt': '24pt',
        '17pt': '17pt',
        '14pt': '14pt',
        '12pt': '12pt',
        '11pt': '11pt',
        '10pt': '10pt',
        '9pt': '9pt'
      },
      lineHeight: {
        '70pt': '70pt',
        '38pt': '38pt',
        '30pt': '30pt',
        '27pt': '27pt',
        '22pt': '22pt',
        '20pt': '20pt'
      },
      spacing: {
        '1cm': '1cm',
        '2cm': '2cm',
        '0.5cm': '0.5cm',
        '0.4cm': '0.4cm',
        '0.25cm': '0.25cm',
        '0.2rem': '0.2rem',
        '0.1rem': '0.1rem',
        '2.2rem': '2.2rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}