# Indian Elucid Biology (IEB) Website

A production-grade static website for Indian Elucid Biology, a pre-revenue bioinformatics analysis company offering free services in exchange for co-authorship.

## 🚀 Features

- **Modern Design**: Clean, responsive design with Bootstrap 5
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Elements**: Lottie animations, smooth scrolling, form validation
- **Comprehensive Content**: 18+ pages covering all services and information
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Mobile First**: Responsive design that works on all devices

## 📁 Project Structure

```
/
├── index.html                 # Homepage
├── services.html              # Services overview
├── service-variant-detection.html  # Detailed service page
├── protocols.html             # Standard operating procedures
├── manuscript-assistant.html  # AI manuscript writing tool
├── authorship-model.html      # Co-authorship policy
├── pipeline.html              # Bioinformatics workflow
├── platform.html              # Technology stack
├── security.html              # Data security information
├── industries.html            # Industry solutions
├── resources.html             # Educational resources
├── partners.html              # Technology partners
├── sustainability.html        # Environmental commitment
├── innovation.html            # R&D initiatives
├── about.html                 # Company information
├── careers.html               # Job opportunities
├── contact.html               # Contact form and map
├── privacy.html               # Privacy policy
├── terms.html                 # Terms of service
├── css/
│   └── styles.css             # Custom styles and dark mode
├── js/
│   └── main.js                # Interactive functionality
├── images/                    # Website assets
│   ├── hero.jpg               # Hero background image
│   ├── logo.png               # Company logo
│   └── dna-lottie.json        # Lottie animation file
└── README.md                  # This file
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with CSS variables
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Bootstrap 5**: UI framework and components
- **Font Awesome 6**: Icons
- **Google Fonts**: Inter and JetBrains Mono
- **Lottie Web**: Animations
- **EmailJS**: Contact form functionality

## 🚀 Quick Start

### Local Development

1. **Clone or download** this repository
2. **Open** `index.html` in your browser
3. **That's it!** No build step required

### Using a Local Server (Recommended)

For the best development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📦 Required Assets

### Images to Download

Create an `images/` folder and add these images:

- `hero.jpg` - Hero section background (1920x1080px recommended)
- `logo.png` - Company logo (200x60px recommended)
- `dna-lottie.json` - Lottie animation file (optional)

### Placeholder Images

If you don't have the images yet, the site will work with placeholder content. You can:

1. Use placeholder services like [Placeholder.com](https://placeholder.com)
2. Create simple colored divs as placeholders
3. Use Font Awesome icons as temporary graphics

## 🌐 Deployment

### GitHub Pages

1. **Create a new repository** on GitHub
2. **Upload all files** to the repository
3. **Go to Settings** → **Pages**
4. **Select source**: Deploy from a branch
5. **Choose branch**: `main` or `master`
6. **Select folder**: `/ (root)`
7. **Save** and wait for deployment

Your site will be available at: `https://yourusername.github.io/repository-name/`

### Netlify

1. **Drag and drop** the entire folder to [Netlify](https://netlify.com)
2. **Or connect** your GitHub repository
3. **Deploy** automatically

### Vercel

1. **Install Vercel CLI**: `npm i -g vercel`
2. **Navigate** to project directory
3. **Run**: `vercel`
4. **Follow** the prompts

### Traditional Web Hosting

1. **Upload all files** to your web server
2. **Ensure** `index.html` is in the root directory
3. **Test** all links and functionality

## ⚙️ Configuration

### EmailJS Setup (Contact Form)

1. **Sign up** at [EmailJS](https://emailjs.com)
2. **Create** an email service
3. **Create** an email template
4. **Update** the configuration in `js/main.js`:

```javascript
// Replace with your actual EmailJS configuration
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
```

### Google Maps

Update the iframe src in `contact.html` with your actual location coordinates.

### Analytics (Optional)

Uncomment and configure Plausible Analytics in the HTML files:

```html
<!-- Plausible Analytics -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🎨 Customization

### Colors

Update CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #0d6efd;
    --ieb-blue: #1e40af;
    --ieb-green: #059669;
    --ieb-purple: #7c3aed;
}
```

### Content

- **Update text** in HTML files
- **Replace images** in the `images/` folder
- **Modify services** in `services.html`
- **Update contact information** in `contact.html`

### Styling

- **Bootstrap classes** for layout and components
- **Custom CSS** in `css/styles.css` for branding
- **Dark mode** automatically handled by CSS variables

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist
2. **Contact form not working**: Verify EmailJS configuration
3. **Dark mode not working**: Check JavaScript console for errors
4. **Mobile layout issues**: Test with different screen sizes

### Performance Tips

1. **Optimize images** before uploading
2. **Minify CSS/JS** for production
3. **Enable compression** on your web server
4. **Use a CDN** for external libraries

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

## 📞 Support

For questions or support:

- **Email**: contact@indianelucidbiology.com
- **Website**: [indianelucidbiology.com](https://indianelucidbiology.com)

## 🚀 Future Enhancements

- [ ] Blog section for research updates
- [ ] Interactive data visualization tools
- [ ] User dashboard for project tracking
- [ ] API documentation
- [ ] Multi-language support
- [ ] Advanced search functionality

---

**Built with ❤️ for the bioinformatics community** 