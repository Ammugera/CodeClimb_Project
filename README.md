# CodeClimb - Blueprint Wireframe MVP

A developer-focused gamified learning platform where users solve code challenges by identifying bugs, completing functions, or answering code comprehension questions.

## Design Philosophy

This implementation follows a **Technical Blueprint / Developer Schematic** aesthetic with:
- Strict monochrome palette (black, white, gray only)
- No rounded corners - all sharp 90-degree angles
- High whitespace ratios for clarity
- Text-only navigation (no icons)
- Boxy, grid-based layouts
- Minimal decorative elements

## Features Implemented

### 1. Landing/Login Screen
- Centered layout with large "CodeClimb" title
- Simple Google login button (simulated)
- Maximum whitespace design

### 2. Dashboard (Feed)
- Persistent navigation bar with Home, Create Challenge, and Profile links
- Vertical list of challenge cards
- Each card displays: title, language, difficulty, and "Solve Now" button
- 5 mock challenges included

### 3. Solver (Game View)
- Code display container with monospace font
- Input field for user solutions
- Submit Answer and Give Up buttons
- Feedback zone showing results
- Answer validation logic

### 4. Creator (Form View)
- Form fields for creating new challenges:
  - Challenge Title (text input)
  - Language selection (dropdown)
  - Difficulty selection (dropdown)
  - Code snippet (textarea with monospace)
  - Correct answer (text input)
- Publish Challenge button
- Form validation

### 5. Profile Screen
- User statistics display
- Challenges solved/created counters
- Member since date

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS (customized for monochrome blueprint aesthetic)
- **UI Components**: Custom components following blueprint design system

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Persistent navigation bar
│   ├── ChallengeCard.tsx    # Challenge list item component
│   └── ui/                  # ShadCN UI components (available but not used)
├── pages/
│   ├── Landing.tsx          # Login screen
│   ├── Dashboard.tsx        # Challenge feed
│   ├── Solver.tsx           # Challenge solving view
│   ├── Creator.tsx          # Challenge creation form
│   └── Profile.tsx          # User profile
├── data/
│   └── mockChallenges.ts    # Sample challenge data
├── types/
│   ├── challenge.ts         # Challenge type definitions
│   └── supabase.ts          # Supabase types (for future backend)
├── App.tsx                  # Main app with routing
└── index.css                # Global styles (monochrome theme)
```

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Constraints

Following the PRD specifications:
- **Colors**: Only `#FFFFFF` (white), `#000000` (black), and `#808080` (gray)
- **Typography**: Inter/Roboto for UI, Courier New for code
- **Borders**: 1-2px solid black strokes
- **Spacing**: 24-32px padding, 16-24px gaps
- **No rounded corners**: All elements use sharp angles
- **No icons**: Text labels only
- **No animations**: Static wireframe aesthetic

## Future Enhancements

- Backend integration (Supabase ready)
- User authentication (Google OAuth)
- Challenge persistence
- User progress tracking
- Leaderboards
- More challenge types
- Code syntax highlighting
