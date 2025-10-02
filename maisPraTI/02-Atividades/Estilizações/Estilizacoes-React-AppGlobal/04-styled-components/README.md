# Styled Components Implementation

This implementation uses styled-components for CSS-in-JS styling.

## Key Features

- Uses styled-components for component-scoped styles
- Implements responsive design with CSS media queries
- Dark mode support with CSS classes
- Component-based structure with reusable components
- Focus ring for accessibility
- Skeleton loading states to prevent layout shift

## Structure

- `src/styled-components/` - Contains all styled components and theme
- `src/components/` - React components
- `src/assets/` - Image assets

## Styling Approach

- CSS-in-JS with styled-components
- Theme provider for consistent design tokens
- Component-specific styled components
- Dynamic styling with props
- Global styles with createGlobalStyle

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