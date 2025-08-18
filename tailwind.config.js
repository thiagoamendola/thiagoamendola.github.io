/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {   
        'navbar-bg': '#292524', // stone-800
        'navbar-text': '#ffffff', // white
        'navbar-hover-text': '#94a3b8', // slate-300
        'navbar-border': '#ffffff', // white
        'navbar-hover-border': '#94a3b8', // slate-300
        'intro-bg': '#d3dded',
        'projects-bg': '#d3dded',
        'contacts-bg': '#819cc7',
        'contacts-icon': '#ffffff', // white
        'contacts-icon-hover-github': '#36393f',
        'contacts-icon-hover-linkedin': '#2563eb', // blue-600
        'contacts-icon-hover-itchio': '#fa5c5c',
      },
    },
  },
  plugins: [],
}

