# Crypto Price Tracker - XivTech Internship Assignment

<div align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</div>

## Overview

A cryptocurrency tracking dashboard built with React + Redux Toolkit that simulates real-time market data updates, developed for XivTech internship selection process.

## Features

**Core Requirements**

- Real-time price simulation (mock WebSocket)
- Interactive crypto data table with sorting
- Color-coded percentage changes (green/red)
- Redux state management
- Responsive design

**Bonus Features**

- Light/dark mode toggle
- Advanced filtering capabilities
- TypeScript implementation
- Optimized Redux selectors

## Quick Start

1. Clone repository:

```bash
git clone https://github.com/meetsuthar27/Crypto-Price-Tracker-Assignment.git
cd cryptoapp-assignment
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open in browser:

```bash
http://localhost:5173
```

## Project Structure

```
src/
├── app/
│   └── store.tsx         # Redux store config
├── assets/               # Crypto logos
├── components/
│   └── CryptoTable.tsx   # Main table component
├── features/
│   └── crypto/
│       ├── cryptoSlice.tsx  # Redux logic
│       └── mockUpdater.tsx  # WebSocket simulation
├── utils/
│   └── mathHelpers.tsx   # Data generators
└── mockData.tsx          # Initial dataset
```

## Data Simulation

- Updates every 1.5 seconds via `setInterval`
- Randomly modifies:
  - Prices (±5% range)
  - 24h trading volume
  - 1h/24h/7d percentage changes
- All updates through Redux actions

## UI Components

**Data Table:**

- Cryptocurrency logos
- Sortable columns
- Responsive layout
- Tooltips with explanations

**Theme System:**

- Light/dark mode toggle
- Persistent preference (localStorage)

## UI Screenshots

**Light Mode**
<img width="900" alt="image" src="https://github.com/user-attachments/assets/9c05c6e0-5ac2-4f47-add0-c968978edc53" />

**Dark Mode**
<img width="900" alt="image" src="https://github.com/user-attachments/assets/baccc4d3-9ab7-4bd6-94c4-05c064a25cbb" />

**Sort and Filter function**
<img width="435" alt="image" src="https://github.com/user-attachments/assets/5520687b-9fe3-48db-8df7-49031e164d6c" />

**Tooltip for new terms**
<img width="611" alt="image" src="https://github.com/user-attachments/assets/ec6d5bd6-5785-4650-9534-1c7077124be9" />
<img width="396" alt="image" src="https://github.com/user-attachments/assets/f7f2b16d-aebc-4926-b784-3684435cf324" />


## Technical Details

**Redux Implementation:**

- Single source of truth
- Immer for immutable updates
- Type-safe actions/reducers
- Optimized selectors

**Tech Stack:**

- React 18 + TypeScript
- Redux Toolkit
- Vite
- CSS Modules
- React Icons

## Future Improvements

This project was developed as part of an internship assignment, but there's plenty of room for future enhancements. Some ideas include:

- Integrating real-time data from public crypto APIs (e.g., CoinGecko, CoinMarketCap)
- Adding pagination and infinite scroll for large datasets
- Creating detailed coin pages with historical charts and analytics
- Implementing user preferences and watchlists
- Deploying the app for live usage

Thank you for checking out the project! Feedback and suggestions are always welcome.
