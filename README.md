# Claudius - Personal Toolkit

A collection of web-based tools and utilities built with Next.js.

## 🛠️ Tools

### AWS SAA-C03 Study Platform
Interactive learning platform for the AWS Certified Solutions Architect Associate (SAA-C03) exam.

**Features:**
- 112 interactive flashcards covering all major AWS services
- 90 scenario-based quiz questions
- Category filtering and shuffle mode
- Keyboard shortcuts for efficient navigation
- Anti-pattern cards teaching when NOT to use services

### S2 Wrapped 2025
Year-in-review analytics and statistics.

## 🚀 Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Static Export** for GitHub Pages hosting

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🌐 Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

Live site: [https://scottisloud.github.io/claudius/](https://scottisloud.github.io/claudius/)

## 📁 Project Structure

```
claudius/
├── app/                          # Next.js app router
│   ├── page.tsx                 # Landing page with tool cards
│   ├── aws-saa-study/           # AWS SAA study platform
│   └── s2-wrapped/              # S2 Wrapped analytics
├── components/                   # Reusable components
│   ├── landing/                 # Landing page components
│   └── aws-saa/                 # AWS SAA components
├── data/                        # Data files
│   └── aws-saa/                 # Flashcards and quizzes
└── public/                      # Static assets
```

## 📝 License

This is a personal project. AWS and the AWS logo are trademarks of Amazon.com, Inc. or its affiliates.
