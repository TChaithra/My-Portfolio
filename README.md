# Technical Portfolio Website

A modern, professional portfolio website designed for hardware engineers and technical professionals. Features a clean, responsive design with smooth animations and interactive elements.

## 🚀 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Distinctive design with smooth animations and micro-interactions
- **Problem-Solution-Impact Framework**: Showcase projects with clear technical narratives
- **Interactive Elements**: 
  - Smooth scroll navigation
  - Back to top button
  - Contact form
  - Resume download
  - Social media integration
- **Performance Optimized**: Fast loading times and smooth animations
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation support

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling
├── script.js           # Interactive functionality
├── README.md           # This file
└── assets/             # (Create this folder)
    ├── images/         # Your photos and project images
    └── resume.pdf      # Your resume PDF
```

## 🛠️ Setup Instructions

### 1. Customize Content

#### Update Personal Information
Open `index.html` and replace the following:

- **Line 7**: Update the title tag with your name
- **Line 29**: Replace "YN" with your initials in the logo
- **Lines 51-53**: Add your full name, title, and tagline
- **Lines 74-99**: Write your professional bio and philosophy
- **Line 119**: Update your email address
- **Lines 121-129**: Add your LinkedIn and GitHub URLs
- **Lines 169-330**: Customize skills based on your expertise

#### Update Projects (Lines 350-550)
For each project, update:
- Project title and description
- Technologies used (tags)
- Problem-Solution-Impact narrative
- Project image URLs
- GitHub/demo links

#### Update Experience (Lines 580-660)
Add your work history:
- Job titles and companies
- Dates and locations
- Key responsibilities and achievements
- Education details

#### Update Certifications (Lines 680-730)
Add your certifications with:
- Certification names
- Issuing organizations
- Dates and credential IDs

### 2. Add Images

Create an `assets/images/` folder and add:

1. **Professional Headshot**
   - Recommended size: 400x400px
   - Format: JPG or PNG
   - Update path in line 118

2. **Project Images**
   - Recommended size: 800x500px (16:10 ratio)
   - Format: JPG or WebP
   - Update paths in lines 358, 427, 496

### 3. Add Your Resume

1. Create an `assets/` folder
2. Add your resume as `assets/resume.pdf`
3. Update the resume download function in `script.js` (lines 99-110):

```javascript
resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';  // Update this path
    link.download = 'YourName_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
```

### 4. Setup Contact Form

Choose one of these methods:

#### Option A: FormSubmit (Easiest - No Backend)
1. Visit [formsubmit.co](https://formsubmit.co)
2. Update `script.js` line 135:
```javascript
const response = await fetch('https://formsubmit.co/your@email.com', {
    method: 'POST',
    body: formData
});
```

#### Option B: Formspree
1. Create account at [formspree.io](https://formspree.io)
2. Get your form ID
3. Update `script.js` line 142:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
});
```

#### Option C: Netlify Forms
1. Add `netlify` attribute to form in `index.html`:
```html
<form id="contactForm" class="contact-form" netlify>
```

### 5. Deploy Your Website

#### Option 1: Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Deploy automatically
4. Add custom domain (optional)

#### Option 2: GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select main branch
4. Access at `yourusername.github.io/repository-name`

#### Option 3: Vercel
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

#### Option 4: Cloudflare Pages
1. Push code to GitHub
2. Connect repository to [Cloudflare Pages](https://pages.cloudflare.com)
3. Deploy

## 🎨 Customization

### Color Scheme
Edit CSS variables in `styles.css` (lines 5-23):

```css
:root {
    --primary-color: #d4a574;      /* Change main accent color */
    --secondary-color: #1a1a1a;    /* Change dark color */
    --accent-color: #7a9eb8;       /* Change secondary accent */
}
```

### Typography
Update fonts in `index.html` (line 12):

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update in `styles.css`:
```css
--font-display: 'Your Display Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus indicators on all interactive elements
- Screen reader compatible

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📊 Performance

Target metrics:
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 90+

## 🐛 Troubleshooting

### Images not loading
- Check file paths are correct
- Ensure images are in the correct folder
- Verify image file extensions match the HTML

### Contact form not working
- Verify you've set up one of the form handling services
- Check browser console for errors
- Ensure all required fields are filled

### Animations not smooth
- Check browser hardware acceleration is enabled
- Reduce animation complexity for older devices
- Test on different devices

## 📝 SEO Optimization

1. Update meta tags in `index.html` (lines 6-8)
2. Add Open Graph tags for social sharing:
```html
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="link-to-your-image.jpg">
```

3. Create `sitemap.xml` and `robots.txt` files
4. Submit to Google Search Console

## 📧 Support

For questions or issues:
- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

## 📄 License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs

---

**Happy coding! 🚀**

Last updated: February 2024
