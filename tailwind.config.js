/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Navbar colors
        'navbar-bg': '#d9e2ef',
        'navbar-text': '#292524',
        'navbar-hover-text': '#94a3b8',
        'navbar-border': '#292524',
        'navbar-hover-border': '#94a3b8',
        // Intro colors
        'intro-bg': '#d9e2ef',
        // Project Card colors
        'projects-bg': '#e8edf5',
        'project-card-bg': '#d9e2ef',
        'project-title': '#374151',
        'project-description': '#4b5563',
        'project-feature': '#4b5563',
        'project-itchio-bg': '#FA5C5C',
        'project-itchio-hover': '#881337',
        'project-github-bg': '#1f2937',
        'project-github-hover': '#000000', // black
        'project-openprocessing-bg': '#475569',
        'project-openprocessing-hover': '#1e293b',
        'project-instagram-bg': '#FF0069',
        'project-instagram-hover': '#FF009C',
        'project-tag-bg': '#6b7280', // gray-500
        'project-tag-text': '#e5e7eb', // gray-200
        // Contact colors
        'contacts-bg': '#d9e2ef',
        'contacts-icon-github': '#36393f',
        'contacts-icon-linkedin': '#2563eb',
        'contacts-icon-itchio': '#fa5c5c',
        'contacts-icon-hover-github': '#212731',
        'contacts-icon-hover-linkedin': '#374151',
        'contacts-icon-hover-itchio': '#374151',
      },
    },
  },
  plugins: [],
}

