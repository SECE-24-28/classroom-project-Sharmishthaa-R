# Mobile Recharge Website 📱

A modern, responsive mobile recharge website built with React, TypeScript, and Tailwind CSS. Features beautiful UI/UX with smooth animations and comprehensive functionality for mobile top-ups.

## 🚀 Features

### Core Functionality
- **User Authentication** - Login/Signup with form validation
- **Mobile Recharge** - Support for all major operators (Airtel, Jio, Vi, BSNL)
- **Plan Selection** - Browse and filter recharge plans
- **Transaction History** - View past recharges and status
- **Responsive Design** - Works perfectly on all devices

### UI/UX Highlights
- **Modern Design** - Clean, professional interface
- **Smooth Animations** - Framer Motion powered transitions
- **Interactive Elements** - Hover effects and micro-interactions
- **Beautiful Background** - Mobile-themed imagery and gradients
- **Intuitive Navigation** - Easy-to-use routing and navigation

### Technical Features
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Context API** for state management
- **Axios** for API integration
- **Responsive Design** with mobile-first approach

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone <repository-url>
cd mobile-recharge-website

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

## 📱 Pages & Components

### Pages
- **Landing Page** (`/`) - Hero section with features and CTA
- **Login Page** (`/login`) - User authentication
- **Sign Up Page** (`/signup`) - User registration
- **Home Page** (`/home`) - Dashboard with recharge form
- **Plans Page** (`/plans`) - Browse all available plans

### Components
- **Navbar** - Responsive navigation with auth state
- **Authentication Context** - User state management
- **API Services** - Centralized API calls
- **Form Validation** - Client-side validation

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3b82f6 to #1d4ed8)
- **Secondary**: Green accent (#22c55e to #15803d)
- **Background**: Mobile-themed imagery with overlays

### Typography
- **Headings**: Bold, modern font weights
- **Body**: Clean, readable text
- **Interactive**: Hover states and transitions

### Components
- **Cards**: Elevated with shadows and hover effects
- **Buttons**: Gradient backgrounds with animations
- **Forms**: Clean inputs with validation states
- **Navigation**: Sticky header with mobile menu

## 🔌 API Integration

### Authentication Endpoints
```typescript
POST /auth/login     - User login
POST /auth/register  - User registration
POST /auth/logout    - User logout
```

### Recharge Endpoints
```typescript
GET /operators       - Get all operators
GET /plans          - Get recharge plans
POST /recharge      - Initiate recharge
GET /transactions   - Transaction history
```

### Mock API
The project includes mock API responses for development:
- Simulated login/signup
- Sample recharge plans
- Mock transaction data

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Connect GitHub repo for auto-deployment
- **Vercel**: Import project for instant deployment
- **GitHub Pages**: Use gh-pages for static hosting

### Environment Variables
Create `.env` file:
```
REACT_APP_API_URL=https://your-api-url.com
REACT_APP_ENVIRONMENT=production
```

## 📱 Mobile Responsiveness

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### Features
- Touch-friendly interface
- Optimized images and assets
- Fast loading times
- Smooth scrolling and animations

## 🔒 Security Features

- **Form Validation** - Client and server-side validation
- **Authentication** - JWT token-based auth
- **Input Sanitization** - XSS protection
- **HTTPS Ready** - Secure communication

## 🎯 Performance Optimizations

- **Code Splitting** - Lazy loading of components
- **Image Optimization** - WebP format with fallbacks
- **Caching** - Browser and API response caching
- **Bundle Size** - Optimized build output

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📈 Future Enhancements

- **Payment Gateway** - Integrate Razorpay/Stripe
- **Push Notifications** - Recharge reminders
- **Wallet System** - Digital wallet integration
- **Offers & Coupons** - Promotional system
- **Multi-language** - Localization support

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Email: support@rechargehub.com
- Documentation: Check the code comments

## 🌟 Demo Credentials

For testing the application:
- **Email**: demo@rechargehub.com
- **Password**: demo123

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**