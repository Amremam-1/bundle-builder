# Security System Builder

A responsive multi-step Security System Builder built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

The goal of this project is to recreate the provided Figma design while building a clean, reusable, and production-oriented React application.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- React Icons

---

## Features Implemented

- Responsive layout (Mobile, Tablet, Desktop)
- Accordion-based builder
- Product cards generated from mock data
- Reusable ProductCard component
- Reusable Step component
- Dynamic "Next" navigation between steps
- Dynamic step rendering from JSON/Mock data
- Product variants (UI)
- Quantity controls (UI)
- Clean project structure

---

## Architecture Decisions

Instead of creating a separate UI for every step, the application is built around reusable components.

- `SystemSteps`
- `Step`
- `ProductCards`
- `ProductCard`
- `SystemSummary`

Each step receives its data from a single source, making it easy to extend or replace the data later.

---

## Design Notes

While implementing the UI, I made a small usability adjustment.

In the original prototype, the first expanded section displays a button labeled:

```
Next: Choose your sensors
```

However, the next accordion section is actually **Choose your plan**.

To keep the navigation consistent with the actual order of the builder, I changed this button to:

```
Next: Choose your plan
```

Additionally, the button text is generated dynamically from the next step instead of being hardcoded. This keeps the UI synchronized automatically if the step order changes in the future.

---

## Current Progress

### Completed

- Responsive layout
- Accordion UI
- Product Cards
- Dynamic step rendering
- Dynamic "Next" navigation
- Mock data structure

### In Progress

- Variant selection logic
- Quantity synchronization
- Live summary panel
- Price calculations
- LocalStorage persistence

---

## Run Locally

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Build

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## Notes

This project is still under active development. The current focus has been building a scalable and reusable UI architecture before implementing the remaining business logic required by the assignment.
