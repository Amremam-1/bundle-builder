Home Security System Builder

A responsive, data-driven home security system builder built with React, TypeScript, Vite, Tailwind CSS, and Redux Toolkit.

The application allows customers to build a personalized security system by selecting cameras, plans, sensors, and additional protection products. The review panel updates automatically whenever the user changes a product quantity or color variant.

Project Overview

This project recreates a multi-step shopping experience for building a home security system.

The user can:

Select different security cameras.

Choose a color variant for supported products.

Increase or decrease the quantity of each product.

Select more than one color of the same camera.

Review all selected products in a live order summary.

See the original price, discounted price, total savings, and final total.

Continue through the builder using four accordion steps.

Use the application on desktop, tablet, and mobile screens.

Technologies Used

React

TypeScript

Vite

Tailwind CSS v4

Redux Toolkit

React Redux

Lucide React / React Icons

Local mock data

Main Features

1. Multi-Step System Builder

The builder contains four main steps:

Choose your cameras

Choose your plan

Choose your sensors

Add extra protection

Only one step is expanded at a time. Each step can be opened or closed, and the user can continue to the next step using the action button.

The expanded and collapsed states are animated using CSS Grid.

2. Data-Driven Product Cards

All products are rendered from mock data instead of being written manually in JSX.

Each product can contain:

Product name

Description

Image

Price

Discount percentage

Available color variants

Learn more URL

This makes the application easier to maintain and prepares it for future API integration.

3. Product Variant Selection

Products such as cameras can have multiple colors.

quantities: {
white: 1,
grey: 0,
black: 0,
}

Each color has its own quantity. This means the user can select two white cameras and one black camera from the same product.

4. Redux State Management

Redux Toolkit is used to manage the builder configuration.

interface BuilderState {
selections: Record<string, SelectedProduct>;
}

Each selected product contains:

interface SelectedProduct {
productId: string;
selectedVariantId: string;
quantities: Record<string, number>;
}

Example:

"cam-v4": {
productId: "cam-v4",
selectedVariantId: "white",
quantities: {
white: 1,
grey: 0,
black: 0,
},
}

This structure keeps product data separate from the customer selection state.

5. Redux Actions

The builder slice contains actions for selecting variants and changing quantities.

selectVariant({ productId, variantId });
incrementQuantity({ productId, variantId });
decrementQuantity({ productId, variantId });

The variantId allows the review panel to update the correct color even when multiple variants of the same product are selected.

6. Redux Selectors

Selectors are used to read data from Redux without repeating state access logic inside components.

The project includes selectors for:

All builder selections

A single product selection

The currently selected variant

The current variant quantity

Selected cameras only

export const selectBuilderSelections = (state: RootState) =>
state.builder.selections;

7. Reusable Quantity Control

The plus and minus buttons were extracted into a reusable QuantityControl component.

interface QuantityControlProps {
quantity: number;
onIncrement: () => void;
onDecrement: () => void;
size?: "sm" | "md";
}

It is used in both product cards and the order summary. Because both areas use the same Redux state, changing the quantity in one place updates the other automatically.

8. Live Review Summary

The summary displays:

Selected cameras

Camera color

Camera quantity

Sensors

Accessories

Subscription plan

Shipping

Original price

Final price

Total savings

Checkout button

Save system link

Each selected camera color is displayed as a separate summary item.

9. Dynamic Price Calculation

The prices in the review panel are calculated from Redux. No final total is hard-coded.

const originalTotal = product.price \* quantity;

When the product has a discount:

const discountedPrice =
product.price -
(product.price \* product.discountPercentage) / 100;

The order summary combines camera totals and extra product totals:

const originalTotal =
cameraTotals.original + extraProductsTotals.original;

const finalTotal =
cameraTotals.final + extraProductsTotals.final;

const savings = originalTotal - finalTotal;

Because these calculations depend on Redux, every total updates immediately when the user presses the plus or minus button.

10. Responsive Design

The interface is responsive across desktop, tablet, and mobile screens.

On tablet:

Font sizes are reduced.

Product images are smaller.

Quantity controls use the small size.

The summary layout becomes more compact.

The guarantee image, monthly payment, and final total are arranged to fit the narrow column.

Component Structure

src/
├── components/
│ ├── QuantityControl/
│ └── system-builder/
│ ├── ProductCard/
│ ├── ProductCards/
│ ├── Step/
│ ├── SystemSteps/
│ └── SystemSummary/
│ ├── SummaryLeft/
│ ├── SummaryRight/
│ └── SummaryItem/
├── constants/
│ └── mockData/
│ ├── cameras.ts
│ └── extraData.ts
├── store/
│ ├── builderSelectors.ts
│ ├── builderSlice.ts
│ ├── hook.ts
│ └── index.ts
├── types/
└── pages/
└── SystemBuilderPage/

The exact folder names may differ slightly depending on the current project structure.

Implementation Steps

Step 1: Project Setup

The project was created using Vite with React and TypeScript.

npm create vite@latest
npm install
npm install @reduxjs/toolkit react-redux

Step 2: Tailwind Theme

Tailwind CSS was configured with custom design tokens for primary colors, backgrounds, borders, text, success states, and typography. The Manrope font is used across the application.

Step 3: Mock Product Data

Camera and extra-product data were created in separate mock-data files. This keeps the UI data-driven and avoids repeated product markup.

Step 4: Builder UI

The multi-step accordion layout was created. The first step is opened by default, and selecting another step closes the previous one.

Step 5: Product Cards

Reusable product cards were created to display product information, discount badges, images, color selectors, quantity controls, and pricing.

Step 6: Redux Integration

The selection state was moved to Redux Toolkit. Reducers were added for selecting variants and changing quantities.

Step 7: Live Summary

The order summary reads Redux selections and matches them with the original product data. It displays only products with a quantity greater than zero.

Step 8: Dynamic Totals

The application calculates original total, final total, savings, and the monthly payment display from the current selections.

Step 9: Responsive Layout

Responsive Tailwind classes were added to match the supplied desktop and tablet designs.

Installation

git clone <https://github.com/Amremam-1/bundle-builder.git>
cd <bundle-builder>
npm install
npm run dev

Create a production build:

npm run build

Preview the production build:

npm run preview

Current Progress

Completed:

Multi-step builder interface

Responsive product cards

Camera variant selection

Independent quantity for each variant

Redux Toolkit integration

Typed Redux selectors and hooks

Reusable quantity controls

Live review summary

Dynamic price calculations

Dynamic savings calculation

Responsive tablet summary layout

Still to complete or verify:

Save the full system configuration to localStorage

Restore the configuration after page reload

Complete the remaining builder-step content

Add final checkout behavior

Verify the real monthly payment calculation rule

Add accessibility and keyboard testing

Add unit or integration tests

Perform final pixel-level comparison with the supplied design

Local Storage Plan

The “Save my system for later” action should save the Redux selections:

localStorage.setItem(
"security-system-builder",
JSON.stringify(selections),
);

When the application starts, the saved configuration can be read and used as the initial builder state.

Important Design Decisions

Product data and selection data are separated

Product details such as names, images, and prices remain in mock data. Redux stores only the customer configuration.

Quantities are stored by variant

The state stores one quantity per color variant, which supports selecting multiple colors of the same camera.

Components remain reusable

Quantity controls and summary items are separated into reusable components to reduce repeated JSX.

Totals are never hard-coded

All totals are calculated from the current products and Redux selections, ensuring that the review panel always matches the customer configuration.

Future Improvements

Replace mock data with an API

Add authentication

Save systems to a customer account

Add checkout and payment integration

Add loading and error states

Add inventory validation

Add automated tests

Add step-transition animations

Improve accessibility

Author

Amr Emam

Frontend Developer working with React, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and Node.js.
