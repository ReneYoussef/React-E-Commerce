# React + Vite


This project is my personal practice app to get hands-on experience with important React concepts. It helps me understand and apply:

useState to manage changing data inside components, like product lists and UI states.

useEffect to fetch data from real APIs and handle side effects properly.

useRef to access DOM elements directly and keep track of values without causing extra renders.

Lifting State Up so I can share state between components by moving it to their nearest common parent.

I’m building this e-commerce app to practice fetching real data (products and categories), showing it dynamically, and creating interactive UI parts like dropdown menus and product grids.

This project is a playground for me to try React hooks and patterns, understand component communication, and improve my ability to build clean, reusable components.



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
