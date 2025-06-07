# React E-Commerce Store 🛍️

A modern, responsive e-commerce shopping platform built with React for the Noroff JavaScript Frameworks course assignment.

![React E-Commerce Store](./src/assets/store-preview.png)

## 🌟 Overview

This e-commerce application provides a complete shopping experience with product browsing, search functionality, shopping cart management, and a full checkout process. Built with React and modern web development practices, it demonstrates proficiency in component-based architecture, state management, and responsive design.

## 🔗 Live Demo
🚀 **[View Live Store](https://react-eshop-maria.netlify.app/)**

## 📋 Project Links
- 🔗 **Live Application**: https://react-eshop-maria.netlify.app/
- 📱 **GitHub Repository**: https://github.com/RosarioBA/react-ecom-store
- 📊 **Portfolio**: https://rosarioba.github.io/portfolio-2

## ✨ Features

### 🏠 Homepage
- **Product Grid Display**: Clean layout showcasing all available products
- **Look-ahead Search**: Real-time search filtering as you type
- **Responsive Design**: Optimized for all device sizes
- **Product Cards**: Attractive cards with images, titles, and pricing

### 📱 Individual Product Pages
- **Dynamic Routing**: Each product has its own URL using React Router
- **Complete Product Info**: Title, description, images, and reviews
- **Price Display**: Shows current price with discount calculations
- **Discount Indicators**: Automatic calculation and display of sale percentages
- **Add to Cart**: Seamless cart integration with quantity management

### 🛒 Shopping Cart System
- **Cart Icon**: Header display showing current item count
- **Cart Management**: Add, remove, and update product quantities
- **Price Calculations**: Real-time total updates including discounts
- **Persistent Cart**: Maintains cart contents across browser sessions
- **Responsive Cart Page**: Mobile-optimized cart viewing and editing

### ✅ Checkout Process
- **Cart Review**: Final review of items and totals
- **Checkout Success**: Confirmation page with order details
- **Cart Clearing**: Automatic cart reset after successful checkout
- **Return Navigation**: Easy return to shopping experience

### 📧 Contact Form
- **Comprehensive Validation**: All fields validated according to requirements
- **Real-time Feedback**: Instant validation with clear error messages
- **Form Fields**:
  - Full Name (minimum 3 characters, required)
  - Subject (minimum 3 characters, required)
  - Email (valid email format, required)
  - Message Body (minimum 3 characters, required)

## 🛠️ Built With

### Core Technologies
- **React 18** - Modern UI library with hooks and functional components
- **React Router 6** - Client-side routing and navigation
- **Create React App** - Project setup and build configuration
- **JavaScript ES6+** - Modern JavaScript features and syntax

### Styling & UI
- **Styled Components** - CSS-in-JS styling solution
- **Custom CSS** - Additional styling and animations
- **Responsive Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Modern layout techniques

### Development Tools
- **Git & GitHub** - Version control and collaboration
- **Netlify** - Automated deployment and hosting
- **VS Code** - Development environment
- **npm** - Package management

## 🏗️ Project Structure

```
src/
├── components/           # Reusable React components
│   ├── common/          # Shared components (Header, Footer)
│   ├── product/         # Product-related components
│   ├── cart/            # Shopping cart components
│   └── layout/          # Layout components
├── pages/               # Page components
│   ├── HomePage.js      # Product listing and search
│   ├── ProductPage.js   # Individual product details
│   ├── CartPage.js      # Shopping cart management
│   ├── CheckoutSuccess.js # Order confirmation
│   └── ContactPage.js   # Contact form
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── styles/              # Styled components and CSS
└── App.js               # Main application component
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RosarioBA/react-ecom-store.git
   cd react-ecom-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📋 Assignment Requirements Fulfilled

### ✅ Core Pages Implemented
- **Homepage** with product listing and search functionality
- **Individual Product Pages** with dynamic routing
- **Cart Page** with item management and totals
- **Checkout Success Page** with cart clearing
- **Contact Page** with comprehensive form validation

### ✅ React Architecture
- **Layout Component** containing header and footer
- **Header with Navigation** and cart icon component
- **Cart Icon** displaying current item count
- **React Router** implementation for all page navigation
- **Component-based Architecture** with reusable components

### ✅ E-Commerce Functionality
- **Product Search** with look-ahead filtering
- **Add to Cart** functionality with state management
- **Price Calculations** including discount display
- **Cart Management** with quantity updates
- **Responsive Design** across all components

### ✅ Form Validation
- **Full Name**: Minimum 3 characters, required
- **Subject**: Minimum 3 characters, required  
- **Email**: Valid email format validation, required
- **Message Body**: Minimum 3 characters, required
- **Console Logging**: Form data logged on successful validation

## 🔐 API Integration

The application integrates with the **Noroff Online Shop API**:
- **Base URL**: `https://v2.api.noroff.dev/online-shop`
- **Individual Products**: `https://v2.api.noroff.dev/online-shop/{product-id}`
- **RESTful API**: GET requests for product data
- **Error Handling**: Comprehensive error states and fallbacks

## 🎨 Design Features

### Responsive Layout
- **Mobile-First Design**: Optimized for mobile devices first
- **Breakpoint System**: Responsive across all screen sizes
- **Touch-Friendly**: Large buttons and easy navigation on mobile
- **Grid Layouts**: Flexible product grids that adapt to screen size

### User Experience
- **Loading States**: Skeleton screens and loading indicators
- **Error Handling**: User-friendly error messages and fallbacks
- **Smooth Transitions**: CSS animations for better interaction feedback
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🧪 Testing & Quality

### Manual Testing
- ✅ All user flows tested across different devices
- ✅ Form validation tested with various inputs
- ✅ Cart functionality verified in multiple scenarios
- ✅ Responsive design tested on mobile, tablet, and desktop
- ✅ Cross-browser compatibility verified

### Code Quality
- ✅ Clean, readable code structure
- ✅ Consistent naming conventions
- ✅ Component reusability and modularity
- ✅ Proper error handling and edge cases
- ✅ Performance optimizations implemented

## 🚀 Deployment

The application is deployed on **Netlify** with the following features:
- **Automatic Builds**: Triggered on GitHub commits
- **CDN Distribution**: Fast global content delivery
- **HTTPS**: Secure connection for all users
- **Custom Domain**: Clean, memorable URL

**Live URL**: https://react-eshop-maria.netlify.app/

## 🌟 Future Enhancements

### Planned Features
- 🔐 **User Authentication**: Login and user account management
- 💳 **Payment Integration**: Real payment processing with Stripe
- ⭐ **Product Reviews**: User-generated reviews and ratings
- 🔍 **Advanced Filtering**: Category and price range filters
- 📊 **Admin Dashboard**: Product management interface
- 📱 **PWA Features**: Offline functionality and push notifications

### Technical Improvements
- 🧪 **Unit Testing**: Jest and React Testing Library implementation
- 📈 **Performance**: Code splitting and lazy loading
- 🔄 **State Management**: Redux or Context API optimization
- 🛡️ **Security**: Input sanitization and XSS protection

## 🤝 Contributing

This is an educational project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of a school assignment and is for educational purposes only.

## 🙏 Acknowledgments

- **Noroff School of Technology** - For comprehensive course curriculum and API
- **React Community** - For excellent documentation and learning resources
- **Create React App** - For providing an excellent development setup
- **Netlify** - For seamless deployment and hosting services

## 📞 Contact

**Rosario Bustillo de Azevedo**
- 📧 Email: marbus22891@stud.noroff.no
- 🐙 GitHub: [@RosarioBA](https://github.com/RosarioBA)
- 💼 Portfolio: [rosarioba.github.io/portfolio-2](https://rosarioba.github.io/portfolio-2)

---

⭐ If you found this project helpful or interesting, please give it a star!

**Built with ❤️ for the Noroff JavaScript Frameworks Course**
