# ♟️ Multiplayer Chess

A full-stack, real-time multiplayer chess platform built from the ground up with React, Node.js, Socket.io, and MongoDB. Players can create game rooms, compete in live chess matches, and view captured pieces — all within a dynamic, stateful UI.

## 🚀 Why This Project Matters

Multiplayer Chess isn't just another board game implementation — it's an exercise in handling real-time state synchronization, game logic validation, and responsive UI updates across clients. It showcases skills in:

- WebSocket integration for live communication
- Scalable game room architecture
- State management with Redux
- Modular client-server separation
- Secure environment configuration and deployment readiness

---

## 🧠 Features

- ✅ **Real-Time Gameplay**: Moves are synchronized instantly using Socket.io between two players.
- 🏠 **Game Room System**: Unique game sessions allow multiple games to run concurrently.
- 🎯 **Captured Piece Display**: Each player's captured pieces are displayed, providing a clearer strategic overview.
- ♟️ **Custom Game Engine**: Includes logic for legal chess moves and turn-based play.
- 🔒 **Secure Connection Handling**: Players cannot make moves when it's not their turn.

---

## ⚙️ Tech Stack

| Layer      | Tools                               |
| ---------- | ----------------------------------- |
| Frontend   | React, Redux, Webpack               |
| Backend    | Node.js, Express, Socket.io         |
| Database   | MongoDB                             |
| Deployment | Node/Express server-ready structure |

---

## 📂 Project Structure

```
Multiplayer-Chess/
├── client/             # React front-end
│   └── components/     # Board, pieces, UI components
├── server/             # Express server with Socket.io
│   └── socket/         # Game event handling (join, move, capture)
├── database/           # MongoDB connection & game session models
├── .env_example        # Environment variable setup
└── webpack.config.js   # Webpack configuration
```

---

## 🧰 Engineering Highlights

- ✅ Uses **Socket.io namespaces** for room isolation
- ⚛️ Centralized **Redux store** ensures synchronized UI state
- ♟️ Game board dynamically updates based on **server events**
- 🧩 **Modular server-side handlers** for easy scalability
- ♜ Custom **chess engine logic** handles rules (rook, bishop, knight, etc.)

---

## 🧑‍💻 Developer Takeaways

This project demonstrates my ability to:

- 🏗️ Design **scalable, real-time applications** with event-driven architecture
- 📦 Use modern web technologies with **clean, maintainable architecture**
- ♻️ Write **modular, reusable code** across both client and server
- 🛠️ Debug and manage stateful applications with tools like **Redux DevTools** and **WebSocket monitoring**
