# 🔮 Andrzejki 2.0 - Digital Fortune Telling

A modern, interactive web application created to bring traditional Polish St. Andrew's Day (_Andrzejki_) games into the digital world. This project was born as a solution to the "wax mess" problem and the lack of analog props at a house party.

Designed with a **Mobile-First** approach, it is intended to be used with QR codes distributed around the party venue.

## 🚀 Features

The application offers three classic fortune-telling games in a digital format:

### 1. 🕯️ Virtual Wax Pouring

A simulation of pouring wax through a keyhole.

- Users "pour" wax by clicking a key icon1.
- The algorithm randomly selects a shape from a predefined list of SVG paths.
- Displays the resulting shape and its interpretation (e.g., Cat, House, Money, Cloud, Heart).

### 2. ❤️ Heart Piercing

A digital version of the game where you find your future partner's name.

- **Preferences:** Users can choose to search for a boyfriend, girlfriend, or let fate decide.
- **Interaction:** Users tap a rotating heart "target".
- **Database:** Includes over 250 male and female Polish names.
- **Visuals:** Pin animation upon impact and name reveal.

### 3. 🥠 Fortune Cookie

Draw a random prophecy for the upcoming year.

- "Cracking" animation before revealing the text.
- A diverse database of fortunes categorized into: _funny, romantic,_ and _serious_.

## 🛠️ Tech Stack

The project is built using a modern stack to ensure performance and smooth animations:

- **Framework:** [React](https://react.dev/) (with React Compiler enabled).
- **Language:** [TypeScript](https://www.typescriptlang.org/).
- **Build Tool:** [Vite](https://vitejs.dev/).
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using the new `@tailwindcss/vite` plugin).
- **Routing:** Custom lightweight routing based on URL Search Params (no external router library).
- **Animations:**
  - CSS Keyframes (Tailwind) for UI elements.
  - HTML5 Canvas for the background `MagicParticles` effect.

## 📦 Installation & Setup

To run the project locally:

1. **Clone the repository:**

   Bash

   ```
   git clone https://github.com/your-username/andrzejki-app.git
   cd andrzejki-app
   ```

2. **Install dependencies:**

   Bash

   ```
   bun install
   ```

3. **Run the development server:**

   Bash

   ```
   bun dev
   ```

4. Open your browser at `http://localhost:5173`.

## 📱 Party Usage (QR Codes)

To let guests use the app on their phones:

1. Deploy the app (e.g., Vercel, Netlify, GitHub Pages).
2. Generate QR codes pointing to specific game views:

   - **Main Menu:** `https://andrzejki.gabrielkaszewski.dev/`
   - **Fortune Cookie:** `https://andrzejki.gabrielkaszewski.dev/?game=cookie`
   - **Wax Pouring:** `https://andrzejki.gabrielkaszewski.dev/?game=wax`
   - **Heart Game:** `https://andrzejki.gabrielkaszewski.dev/?game=heart`

3. Print the codes and hang them on the walls!

## 📂 Project Structure

Plaintext

```
src/
├── components/      # UI Components (Layout, MenuButton, MagicParticles)
├── features/        # Game logic and views
│   ├── fortune-cookie/
│   ├── heart-game/
│   └── wax-pouring/
├── hooks/           # Custom hooks (Game business logic)
├── types/           # TypeScript definitions
├── App.tsx          # Main component and routing logic
└── main.tsx         # Entry point
```

## 📄 License

Created for educational and entertainment purposes. Do whatever you want, I don't care.

---

_Made with a bit of laziness and a large dose of code._ 😉
