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
git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker
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
