# wobb.ai_assignment

A modern, responsive web application for connecting influencers with brand campaigns. Built with React, TypeScript, and Tailwind CSS.

![Wobb Homepage](https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=400&fit=crop)

## Features

- 🎨 Modern, responsive design that works across all devices
- 🔍 Campaign search functionality
- 🏷️ Category-based filtering
- 📊 Visual progress tracking for campaign slots
- 💰 Multiple payout types (Fixed, Barter, Refund)
- 🎯 Clear campaign information display
- 📱 Mobile-first approach

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
cd wobb-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Main navigation header
│   ├── CampaignCard.tsx# Campaign display card
│   └── PayoutBadge.tsx # Payout type indicator
├── types/              # TypeScript type definitions
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Features in Detail

### Campaign Cards
- Brand logo and campaign image display
- Campaign title and description
- Payout type with visual indicators
- Hiring progress bar
- Responsive layout

### Header
- Responsive navigation
- Search functionality
- Mobile menu
- Profile and dashboard access

### Filtering
- Category-based filtering
- All campaigns view
- Responsive filter buttons

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses ESLint and TypeScript for code quality and type safety. Follow these guidelines:

- Use TypeScript for all new components
- Follow the existing component structure
- Use Tailwind CSS for styling
- Keep components modular and reusable

## Design Decisions

### Color Scheme
- Primary: Blue (#2563eb)
- Background: Light gray (#f9fafb)
- Text: Dark gray (#111827)
- Accent colors for payout types:
  - Fixed: Green
  - Barter: Purple
  - Refund: Blue

### Typography
- Modern, clean font stack
- Clear hierarchy with distinct heading styles
- Responsive font sizes

### Layout
- Grid-based campaign layout
- Responsive breakpoints for different screen sizes
- Consistent spacing and padding
- Mobile-first approach

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
