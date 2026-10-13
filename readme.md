# STEM4Girls Website

A modern, responsive multi-page website for the STEM4Sustainability competition, redesigned with contemporary UI/UX best practices.

## 📁 Project Structure

```
piki-site/
├── index.html              # Homepage with team video
├── about.html              # About Us page
├── competition.html        # Competition details
├── resources.html          # Project ideas and resources
├── register.html           # Registration form
├── contact.html            # Contact page
├── privacy.html            # Privacy policy
├── team.html               # Team members page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── script.js          # Interactive JavaScript
├── images/                # Team photos and logo
│   ├── logo-inverse.png
│   ├── nixon.png
│   ├── raina.png
│   ├── raibin.png
│   ├── finosh-latest.png
│   ├── preethi
│   ├── alosyus.png
│   └── mspreethi.jpg
└── videos/                # Team introduction video
    └── main_video.mp4
```

## ✨ Features

### Design & UX
- **Modern, Clean Interface** - Contemporary design with smooth animations
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Accessible** - WCAG compliant with keyboard navigation support
- **Fast Loading** - Optimized CSS and JavaScript
- **Video Introduction** - Professional team intro video on homepage

### Key Components
- Sticky navigation with mobile hamburger menu
- Hero section with gradient backgrounds
- Interactive cards and hover effects
- Professional video player with custom controls
- Timeline visualizations
- Multi-step form layouts
- Smooth scroll animations
- Scroll-to-top button
- Form validation
- Team photo gallery

### Pages Included
1. **Home** - Hero section, key dates, features, categories, benefits
2. **About** - Mission, STEM explanation, values, partnership info
3. **Competition** - Full details, timeline, requirements, prizes, FAQ
4. **Resources** - Project examples across all STEM categories with tips
5. **Register** - Improved registration form with validation
6. **Contact** - Multiple contact methods with contact form
7. **Privacy** - Complete privacy policy

## 🚀 How to Use

### Local Testing
1. Open `index.html` in any modern web browser
2. All pages are linked and fully functional
3. Test on different screen sizes using browser dev tools

### Customization
- **Colors**: Edit CSS variables in `:root` section of `styles.css`
- **Content**: Update HTML files with your own text
- **Images**: Add images to the `images/` folder and reference them in HTML
- **Fonts**: Currently uses Google Fonts (Poppins & Inter)

## 🌐 Deploying to GoDaddy

### Option 1: Using GoDaddy File Manager
1. Log into your GoDaddy account
2. Go to "My Products" > "Web Hosting"
3. Click "Manage" next to your hosting plan
4. Open "File Manager"
5. Navigate to `public_html` folder
6. Upload all files maintaining the folder structure:
   - Upload HTML files to root
   - Upload `css` folder with styles.css
   - Upload `js` folder with script.js
   - Upload `images` folder (empty, for future use)

### Option 2: Using FTP Client (Recommended)
1. Download an FTP client (FileZilla, Cyberduck, etc.)
2. Get your FTP credentials from GoDaddy:
   - Go to Web Hosting > Manage > FTP
   - Note hostname, username, and password
3. Connect via FTP
4. Upload all files to `public_html` directory
5. Set file permissions to 644 for files, 755 for folders

### Option 3: Using GoDaddy Website Builder
1. If using GoDaddy Website Builder, you'll need to manually recreate pages
2. Copy content from HTML files into the builder
3. Apply similar styling using the builder's tools

## 🔧 Post-Deployment Setup

### Update Form Action URLs
The forms currently point to placeholder URLs. Update these:

**register.html** (line ~109):
```html
<form action="https://submit.stem4girls.org/register" method="POST">
```

**contact.html** (line ~96):
```html
<form action="https://submit.stem4girls.org/contact" method="POST">
```

Replace with your actual form processing endpoints or use:
- **FormSpree**: https://formspree.io/ (easy, free for limited forms)
- **Google Forms**: Create forms and embed them
- **Custom Backend**: PHP, Node.js, or other server-side solution

### Add Google Analytics (Optional)
Add before closing `</head>` tag in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### SEO Optimization
1. **Verify meta descriptions** in each HTML file
2. **Add favicon**: Create and add `favicon.ico` to root directory
3. **Add Open Graph tags** for social media sharing
4. **Submit sitemap** to Google Search Console

### SSL Certificate
- GoDaddy offers free SSL certificates
- Go to My Products > SSL Certificates > Set Up
- This makes your site `https://` instead of `http://`

## 📱 Testing Checklist

Before going live:
- [ ] Test all navigation links
- [ ] Test forms (especially validation)
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all external links work
- [ ] Check page load speeds
- [ ] Test contact form submissions
- [ ] Verify all content is accurate

## 🎨 Color Scheme

Logo-Inspired Colors (Pink Primary):
- Primary: `#ff6b9d` (Vibrant Pink)
- Primary Dark: `#e91e63` (Deep Pink)
- Secondary: `#4dd0e1` (Cyan)
- Accent: `#9c27b0` (Purple)
- Accent Secondary: `#26c6da` (Teal)

Gradients:
- Primary: Pink → Purple
- Secondary: Teal → Cyan
- Accent: Pink → Cyan

Neutrals:
- Dark: `#1e293b`
- Gray: `#64748b`
- Light: `#fff0f5`

## 📞 Support

For technical issues or questions:
- Email: stem@stem4girls.org
- Phone: 503-583-2255

## 📝 License

© 2026 STEM4Girls. All Rights Reserved.

---

**Built with ❤️ for STEM education and sustainability**
