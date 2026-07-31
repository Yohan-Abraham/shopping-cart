# 🛒 React Shopping Cart Engine

An interactive, responsive e-commerce web application built with **React** and **React Router**. Designed with a focus on efficient global state management, deterministic data flow, component reusability, and clean UI/UX patterns.

🔗 **Live Demo:** [shopping-cart-steel-sigma.vercel.app](https://shopping-cart-steel-sigma.vercel.app/)

---

## ✨ Features

- **Product Catalog Browsing:** Client-side routing between home page, dynamic product directory, and cart overview.
- **Dynamic Cart State:** Incremental/decremental item mutation, real-time price subtotal calculation, and item removal.
- **Global Badge Syncing:** Real-time synchronized cart item counters across independent header and routing components.
- **Responsive Layout:** Adaptive layout built for mobile, tablet, and desktop viewports.

---

## 📐 Architecture & Technical Decisions

### 1. State Management & Unidirectional Data Flow

- **Lifting State Up:** Centralized core application state (`cart`, `totalItems`, `subtotal`) in the root component to maintain a single source of truth across disjointed child components (`Navbar`, `ProductCard`, `CartView`).
- **Immutable State Updates:** Enforced functional state updates (`setCart(prev => ...)`) to prevent side effects and ensure predictable re-renders.

### 2. Client-Side Routing

- Implemented **React Router** for seamless Single Page Application (SPA) navigation without full-page reloads, maintaining state across route transitions.

### 3. Component Architecture

- Applied **Container/Presenter Patterns**: Separated data fetching and logic components from purely presentational visual components to maximize code reuse and testability.

---

## 🛠️ Tech Stack

| Domain                 | Technology        | Purpose                                                     |
| :--------------------- | :---------------- | :---------------------------------------------------------- |
| **Frontend Framework** | React.js          | Component-driven UI development                             |
| **Routing**            | React Router      | Client-side navigation & route matching                     |
| **Build Tooling**      | Vite / Webpack    | Fast HMR (Hot Module Replacement) & bundle optimization     |
| **Styling**            | CSS / CSS Modules | Modular, scoped styling to avoid global namespace pollution |
| **Deployment**         | Vercel            | Continuous deployment & hosting                             |

---

## ⚙️ Local Development

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Yohan-Abraham/shopping-cart.git](https://github.com/Yohan-Abraham/shopping-cart.git)
   cd shopping-cart
   ```
