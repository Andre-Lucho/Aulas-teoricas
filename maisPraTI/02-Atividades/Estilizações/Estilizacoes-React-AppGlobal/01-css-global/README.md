# CSS Global Implementation

This implementation uses traditional global CSS with SCSS preprocessing.

## Key Features

- Uses global SCSS stylesheets
- Implements responsive design with media queries
- Dark mode support with CSS classes
- Component-based structure with reusable components
- Focus ring for accessibility
- Skeleton loading states to prevent layout shift

## Structure

- `src/styles/` - Contains all SCSS files
- `src/components/` - React components
- `src/assets/` - Image assets

## Styling Approach

- Global styles defined in `main.scss`
- Component-specific styles in separate SCSS files
- Variables defined in `variables.scss`
- Media queries in `media-querys.scss`

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