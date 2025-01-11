# Agreemetrics 🚀

**AI-Powered Clarity for Your Agreements.**

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [Features](#features)
3. [How It Works](#how-it-works)
4. [Tech Stack](#tech-stack)
5. [Setup Instructions](#setup-instructions)
6. [Challenges I Overcame](#challenges-i-overcame)
7. [What’s Next?](#whats-next)
8. [Contributing](#contributing)
9. [License](#license)

---

## About the Project 📝

Contracts can be overwhelming, packed with legal jargon and hidden risks. Agreemetrics takes the stress out of it by transforming contracts into a visual, easy-to-understand dashboard. Connect your DocuSign account, and we’ll break down your agreements into key clauses, risks, and remedies—all with the power of AI.

**Why?**  
Because understanding contracts shouldn’t require a law degree.

---

## Features ✨

- **DocuSign Integration:** Connect your account and fetch your documents securely.
- **Risk Analysis:** Our AI identifies potential risks and obligations in your contracts.
- **Interactive Dashboard:** Get insights through graphs, charts, and detailed stats.
- **Secure Authentication:** Your data is safe with us.

---

## How It Works 🛠️

1. **Sign In:** Authenticate with your DocuSign account.
2. **Analyze:** Select a contract, and we’ll analyze it using Gemini AI.
3. **Explore:** View key stats, risks, and remedies in an interactive dashboard.

![How It Works](https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif)

---

## Tech Stack 💻

- **Frontend:** React, Recharts, Moment.js, Axios
- **Backend:** FastAPI, Httpx
- **AI Engine:** Google Gemini
- **Authentication:** DocuSign API
- **Styling:** CSS

---

## Setup Instructions 🛠️

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Python 3.8+](https://www.python.org/)
- DocuSign developer account

### Steps

1. Clone this repo:
   ```bash
   git clone https://github.com/yourusername/agreemetrics.git
   cd agreemetrics
   ```
2. Set up the backend:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # For Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ./start.sh
   ```
3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. Add your environment variables:

   - Backend: `.env` (Google Gemini & DocuSign API credentials)

5. Open your browser:
   - Backend runs on `http://localhost:10000`.
   - Frontend runs on `http://localhost:5173`.

---

## Challenges I Overcame 🚧

- **CORS Errors:** Debugging them was like chasing a ghost.
- **AI Integration:** Making Gemini understand contracts wasn’t easy, but i did it.
- **Designing the Dashboard:** Striking a balance between functionality and simplicity took time.

---

## What’s Next? 🔮

- **More Integrations:** Support for platforms like Google Drive and OneDrive.
- **Collaboration Tools:** Review contracts as a team.
- **Enhanced Risk Insights:** Deeper analysis and industry-specific suggestions.

---

## Contributing 🤝

Got ideas or want to fix a bug? I’d love your help!

1. Fork the repo.
2. Create your feature branch: `git checkout -b feature/awesome-feature`.
3. Commit your changes: `git commit -m 'Add some awesome feature'`.
4. Push to the branch: `git push origin feature/awesome-feature`.
5. Open a pull request.

---

## License 📜

This project is licensed under the MIT License.

---

Give it a try and let us know what you think! 😄  
**The Agreemetrics Team**
