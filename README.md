# Home Security System Builder

A responsive, data-driven Home Security System Builder built with **React, TypeScript, Vite, Tailwind CSS, and Redux Toolkit**.

The application allows users to build a personalized security system by selecting cameras, sensors, plans, and additional products while viewing a live order summary that updates instantly.

## Live Demo

- **GitHub:** https://github.com/Amremam-1/bundle-builder
- **Live Demo:** https://bundle-builder-psi-seven.vercel.app/

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Redux Toolkit
- React Redux

## Features

- Multi-step bundle builder
- Responsive design (Desktop, Tablet & Mobile)
- Data-driven product rendering
- Camera color variant selection
- Independent quantity per color variant
- Live order summary
- Dynamic price & savings calculation
- Reusable components
- Typed Redux selectors & hooks

## My Approach

Besides implementing the required functionality, I focused on writing clean, reusable, and maintainable code.

I also made a few small UI improvements to enhance the user experience while keeping the original design and requirements intact.

## Project Structure

```text
src/
├── components/
│   ├── QuantityControl/
│   └── system-builder/
│       ├── ProductCard/
│       ├── ProductCards/
│       ├── Step/
│       ├── SystemSteps/
│       └── SystemSummary/
├── constants/
│   └── mockData/
├── pages/
├── store/
├── types/
└── App.tsx
```
