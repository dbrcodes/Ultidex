# ULTIDEX - A Fullstack Pokédex Project

ULTIDEX is a small personal project designed to help me learn fullstack development using core technologies — HTML, CSS, JavaScript, Python, and SQL — without relying on heavy frameworks.

---

## 🚀 Features

- Browse Pokémon by region (Kanto, Johto, etc.)
- Search Pokémon by name or ID
- View detailed Pokémon stats and types
- Powered by SQLite and Python backend
- Simple, responsive web interface

---

## 🧰 Tech Stack

- **Frontend:** HTML, CSS, JavaScript(Vanilla), Chart.JS
- **Backend:** Python (Flask)
- **Database:** SQLite

---

## 📁 Project Structure

```text
ULTIDEX/
├── db/             # Region and metadata .sql files
├── frontend/            # HTML, CSS, JS files
├── backend/        # Python server and DB logic
├── README.md
└── requirements.txt
```

---

## ⚙️ Setup Instructions

1. **Clone the repo**
2. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask server**

   ```bash
   python Backend/app.py
   ```

4. **Open `Web/index.html` in your browser**

---

## 🧪 TODO / Roadmap

- [ ] Create and populate database(SQLite at the moment, may upgrade)
- [ ] Create backend linking the app to the database
- [ ] Create frontend that links to backend
- [ ] Host the project online

Once successfully online, features will be added/updated/upgraded such as:

- [ ] Update filter by type or stat
- [ ] Add favourites (localStorage or DB)
- [ ] Add Movedex
- [ ] Add Itemdex
- [ ] Add Teambuilder
- [ ] Counters(for things like shiny hunting, though, its quite easy in the newer games)

---

## 📚 Learning Goals

- Practice frontend/backend separation
- Learn SQLite queries and schema design
- Understand how frontend fetches and displays backend data
- Build a basic REST API without frameworks

---

## 🔗 Acknowledgments

- Icons and sprites by Game Freak / Nintendo

---
