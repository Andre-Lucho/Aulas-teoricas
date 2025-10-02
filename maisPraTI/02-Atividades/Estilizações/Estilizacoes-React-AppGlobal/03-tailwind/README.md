# Tailwind CSS Implementation

This implementation uses Tailwind CSS utility classes for styling.

## Key Features

- Uses Tailwind CSS utility classes
- Implements responsive design with Tailwind's responsive prefixes
- Dark mode support with CSS classes
- Component-based structure with reusable components
- Focus ring for accessibility
- Skeleton loading states to prevent layout shift

## Structure

- `src/components/` - React components with Tailwind classes
- `src/assets/` - Image assets
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

## Styling Approach

- Utility-first CSS with Tailwind classes
- Responsive design using Tailwind's breakpoints (sm, md, lg)
- Custom theme configuration in `tailwind.config.js`
- Component classes composed using Tailwind utilities

## Components

- Navbar with theme toggle
- ProductGrid with responsive columns
- ProductCard with image, title, price, rating, and tag
- Button with solid, outline, and ghost variants
- Skeleton loading components

## Running the Application

```bash
npm install
npm start
```