# Spanish Name Generator

A beautiful and elegant web application that generates random Spanish names using Next.js, Tailwind CSS, and shadcn/ui components. The application features a responsive design, smooth animations, and a dark mode.

![ZZULU IT Logo](/public/zzuluIT.png)

## Features

- 🎲 Random Spanish name generation
- 🎨 Beautiful UI with gradient backgrounds
- 🌓 Dark mode support
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🚀 Built with modern technologies

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [Lucide React](https://lucide.dev/) - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zulhendryms/spanish-name-generator.git
cd spanish-name-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── random-name/    # API endpoint for name generation
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/
│   └── ui/                # shadcn/ui components
├── data/
│   └── spanish-names.ts   # Spanish names dataset
└── public/
    └── zzuluIT.png       # ZZULU IT logo
```

## Code Explanation

### API Route (`app/api/random-name/route.ts`)
The API endpoint generates random Spanish names by:
1. Importing the Spanish names dataset
2. Randomly selecting a first name and two surnames
3. Returning the generated name in JSON format

```typescript
export async function GET() {
  // ... generates and returns random Spanish names
}
```

### Main Page (`app/page.tsx`)
The main page features:
- A card component with the ZZULU IT logo
- An animated button to generate names
- A results section that displays the generated name
- Smooth animations for state changes
- Responsive design for all screen sizes

### Animations (`globals.css`)
Custom animations include:
- `fadeIn`: Smooth entrance animation for generated names
- `pulse`: Subtle pulsing effect for the logo
- `gradient`: Moving gradient background

## Customization

### Adding More Names
To add more Spanish names, modify the `data/spanish-names.ts` file:

```typescript
export const spanishNames = {
  firstNames: [
    // Add more first names here
  ],
  lastNames: [
    // Add more last names here
  ]
};
```

### Styling
The application uses Tailwind CSS for styling. Modify the theme in:
- `tailwind.config.ts` for theme configuration
- `globals.css` for global styles and animations

## License

© ZZULUIT, 2025. ALL RIGHTS RESERVED

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
