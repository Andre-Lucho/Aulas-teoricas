# CSS Modules Implementation

This implementation uses CSS Modules for scoped styling.

## Key Features

- Uses CSS Modules for component-scoped styles
- Implements responsive design with media queries
- Dark mode support with CSS classes
- Component-based structure with reusable components
- Focus ring for accessibility
- Skeleton loading states to prevent layout shift

## Structure

- `src/styles/` - Contains all CSS Module files (.module.css)
- `src/components/` - React components
- `src/assets/` - Image assets

## Styling Approach

- CSS Modules provide scoped styling to prevent conflicts
- Global styles defined in `main.css`
- Component-specific styles in separate CSS Module files
- CSS custom properties for theming

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