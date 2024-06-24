# Phone catalog
This project involves creating a responsive online shop with a product catalog, incorporating various features such as product listings, product details, shopping cart, and favorites functionality according to the [design](https://www.figma.com/file/T5ttF21UnT6RRmCQQaZc6L/Phone-catalog-(V2)-Original).

[**Phone catalog link**](https://irynak-a.github.io/phone_catalog/)

## Key Features

- **Home Page:**
  - **Pictures Slider:** 
    - Images that navigate to a product pages;
  - **Products Slider for Hot Prices:** 
    - Displays products with discounts, sorted by the largest discount;
  - **Shop by Category Block:** 
    - Have links to a product pages;
  - **Brand New Block:** 
    - Displays non-discounted products;
- **Product Pages:**
  - Shows all products for the respective category;
  - Sort products by Newest, Alphabetically, and Cheapest;
  - Filter products by items per page (4, 8, 16, all);
  - Search Functionality:;
  - Product Cards with link to details page;
- **Product Details Page:**
  - Product images section;
  - Color and capacity selection;
  - "Add to cart" and " Add to favorites" buttons;
  - About section with description;
  - Tech specs display;
- **Favorites Page:**
  - List with favorite products;
  - Button to add/remove favorites;
  - Favorites count displayed in the header;
  - Saves favorites to localStorage and loads on page load;
- **Shopping Cart:**
  - List with product details, quantity, and total amount;
  - Increment and decrement buttons;
  - Cart count displayed in the header;
  - Saves cart to localStorage and loads on page load;
- **Not Found Page**
  - Displays "Page not found" for unknown URLs with a link to HomePage;

## Technologies Used
- **React:** A JavaScript library for building user interfaces, used to create the core structure and components of the application;
- **React DOM:** Provides DOM-specific methods that enable React to interact with the DOM;
- **React Router DOM:** For routing and navigation within the application;
- **React Redux:** Official React bindings for Redux, allowing React components to interact with the Redux store;
- **Redux Toolkit:** Provide tools and best practices for managing the application's state;
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript, used for type safety and enhancing code quality;
- **Material-UI (MUI):** A popular React UI framework for implementing Google's Material Design, used for building responsive and visually appealing components;
- **React Swipeable:** Used for handling swipe events in the application;
- **Lodash.debounce:** A utility library for debouncing functions, enhancing performance in search and other input-related features;
- **Sass:** Used for writing enhanced CSS with variables, nested rules, and mixins, enabling more efficient and manageable styling;

## Installation Instructions
1. **Fork** the repo: On the repository page, click the **Fork** button in the upper right corner of the page.
2. **Clone** the forked one:
- Click the Code button on your forked repository page;
- Copy the URL provided (either HTTPS, SSH, or GitHub CLI).
- Open your terminal and run `git clone` command to clone the repository to your local machine (The project link should have your name).
3. Run `npm install` (or just `npm i`).
4. Run `npm start`.
