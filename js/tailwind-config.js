tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#c29b6d",
                "on-primary": "#131313",
                secondary: "#e9bf8e",
                background: "#0a0a0a",
                surface: "#131313",
                "surface-variant": "#1c1b1b",
                outline: "#4f453b",
                "on-surface": "#e5e2e1",
                "on-surface-variant": "#9b8f82"
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.5rem",
                "xl": "1rem",
                "full": "9999px"
            },
            fontFamily: {
                sans: ["Manrope", "sans-serif"],
                body: ["Manrope", "sans-serif"],
                headline: ["Manrope", "sans-serif"]
            }
        }
    }
};
