// Example `tailwind.config.js` file

module.exports = {
  theme: {
    extend: {
        colors: {
            primary: "#000",
            secondary: "#022c22"
        },
        container: {
            center: true,
            padding: {
                default: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        }
    }
  },
}