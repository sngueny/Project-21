# Project 21 Kenya

A responsive website for Project 21 Kenya, supporting refugees in the Kakuma refugee camp through education, vocational training, and basic needs assistance.

## 🚀 Deployment on Netlify

This site is ready for deployment on Netlify. Simply:

1. Connect your GitHub repository to Netlify
2. Deploy the `master` branch
3. The site will be live with no build process required

## 📁 Project Structure

- `index.html` - Main homepage
- `blog-detail.html` - Individual blog post pages
- `app.js` - Main JavaScript functionality
- `blog-detail.js` - Blog-specific JavaScript
- `styles.css` - Custom CSS styles
- `assets/` - Images and static assets
- `netlify.toml` - Netlify configuration
- `_redirects` - URL redirects

## ✨ Features

- Responsive design with Tailwind CSS
- Interactive blog system with likes, comments, and sharing
- Modal forms for volunteer and contact
- Smooth scrolling navigation
- Mobile-friendly interface
- AOS animations

## 🔧 Technologies Used

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+)
- Font Awesome icons
- Google Fonts
- AOS (Animate On Scroll)
- Swiper.js for carousel

## 📝 Forms

**Current Status:** The volunteer and contact forms currently use `localStorage` for demo purposes and show success alerts.

**For Production Deployment:** Consider integrating with one of these services:

### Netlify Forms (Recommended for Netlify)
1. Add `data-netlify="true"` to your form elements
2. Forms will automatically work with Netlify's form handling
3. Submissions will be stored in your Netlify dashboard

### Other Options
- **Formspree:** Replace `action="#"` with your Formspree endpoint
- **Google Forms:** Redirect to a Google Form
- **Custom Backend:** Connect to your own API endpoint

### Example Netlify Forms Integration:
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

## 📞 Contact

Project 21 Kenya
Email: info@project21kenya.org
Phone: +254 712 345 678