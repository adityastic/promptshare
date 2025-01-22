# PromptShare - AI Prompt Sharing Platform

PromptShare is a modern web application that enables users to discover, create, and share AI prompts. Built with Next.js 13, MongoDB, and NextAuth, it provides a platform for AI enthusiasts to collaborate and inspire each other through effective prompts.

![PromptShare Logo](logo.svg)

## ✨ Features

### Prompt Management
- Create and save your favorite AI prompts
- Edit your existing prompts
- Delete prompts you no longer need
- Tag prompts with relevant keywords for better organization

### Social Features
- Share prompts with the community
- Browse prompts created by other users
- Search for specific prompts by keywords or tags (coming soon)
- View user profiles and their shared prompts (coming soon)

### User Authentication
- Secure authentication using Google OAuth
- Personal profile management
- View and manage your created prompts
- Protected routes for authorized users

## 🚀 Getting Started

### Quick Setup with Dev Containers (Recommended)

If you’re using VS Code, you can quickly get started using [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers):

1. Clone the repository:
```bash
git clone https://github.com/yourusername/promptshare.git
```

2. Open the folder in VS Code with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) installed.

3. When prompted, reopen the project in the dev container. The setup will automatically:
- Setup a node.js development container
- Setup a MongoDB development container
- Install dependencies
- Set MONGODB_URI environment variable

4. Add the remaining environment variables to .env.local:
```env
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

4. Run the development server:
```bash
npm run dev
```

### Manual Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/promptshare.git
```

2. Install dependencies:
```bash
cd promptshare
npm install
```

3. Set up your environment variables in `.env.local`:
```env
MONGODB_URI=your_mongodb_uri
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

4. Run the development server:
```bash
npm run dev
```

## 🛠️ Built With

- **Frontend**: Next.js 13, React, TailwindCSS
- **Backend**: Next.js API Routes, MongoDB
- **Authentication**: NextAuth.js
- **Database**: MongoDB Atlas
- **Styling**: Tailwind CSS


## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👏 Acknowledgments

- The Next.js team for the amazing framework
- MongoDB for database services

## 📫 Contact

Project Link: [https://github.com/suhanichawla/promptshare](https://github.com/suhanichawla/promptshare)

---

Made with ❤️ by Suhani Chawla