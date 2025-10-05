# Deployment Guide - P1.express Landing Page

## 📋 Pre-Deployment Checklist

### Required Steps

- [x] Landing page HTML created
- [x] CSS styles implemented (4 files)
- [x] JavaScript functionality complete
- [x] App download included (27kB .zip)
- [x] Logo copied from main app
- [x] Screenshot added 
- [x] Formspree registered
- [x] Domain purchased
- [ ] **Analytics setup** (optional)

### Optional but Recommended

- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Validate HTML/CSS
- [ ] Optimize images
- [ ] Create social media preview images

---

## 📸 STEP 1: Add Screenshot

**Before deploying, add an app screenshot:**

### Option A: Take Screenshot Manually

1. Open `dist/index.html` in your browser
2. Set theme to Grey (default)
3. Add some sample tasks across different statuses
4. Take screenshot at 1200px width
5. Save as `assets/screenshot-board.png`

### Option B: Use Screenshot from App

If you already have a good screenshot, copy it:
```bash
cp /path/to/screenshot.png landing-page/assets/screenshot-board.png
```

### Optimize Screenshot

Use online tools:
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- Or ImageOptim for Mac

Target: < 500KB for fast loading

---

## ✉️ STEP 2: Setup Formspree (Contact Form)

### Register

1. Go to: https://formspree.io/
2. Click "Get Started" (Free plan)
3. Sign up with: `achirinos@gmail.com`
4. Verify your email

### Create Form

1. Click "New Form"
2. Name: "P1.express Landing Contact"
3. Copy the endpoint URL (format: `https://formspree.io/f/XXXXXXXX`)

### Update Landing Page

1. Open `landing-page/index.html`
2. Find line ~460: `action="YOUR_FORMSPREE_ENDPOINT"`
3. Replace with your actual endpoint
4. Save file

Example:
```html
<form class="contact-form" action="https://formspree.io/f/abcd1234" method="POST">
```

---

## 🌐 STEP 3: Deploy to GitHub Pages

### Create Public Repository

1. Go to GitHub: https://github.com/new
2. Repository name: `p1express-landing`
3. Description: "Landing page for P1.express task management app"
4. **Make it PUBLIC** (required for free GitHub Pages)
5. Don't initialize with README (we have one)
6. Create repository

### Push Landing Page

```bash
# Navigate to landing page directory
cd /Users/achirinos/Projects/P1\ Express/warp/landing-page

# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial landing page implementation

- Complete responsive design
- Theme system (Grey, Dark, Light)
- FAQ accordion
- Contact form (Formspree)
- Download functionality
- Mobile-friendly navigation"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/p1express-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Enable GitHub Pages

1. Go to repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** → **/ (root)**
   - Click **Save**
5. Wait 1-2 minutes for deployment

### Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/p1express-landing/
```

---

## 🌍 STEP 4: Custom Domain (Optional but Recommended)

### Purchase Domain

Recommended registrars:
- **Namecheap** (affordable, good UI)
- **Google Domains** (simple, reliable)
- **Cloudflare** (includes DNS management)

Suggested domains:
- `p1express.app` (~$15/year)
- `p1express.io` (~$40/year)
- `getp1.express` (if .express available)

### Add CNAME File

In your landing page repo:

```bash
# Create CNAME file with your domain
echo "yourdomain.com" > CNAME

# Commit and push
git add CNAME
git commit -m "Add custom domain"
git push
```

### Configure DNS

**At your domain registrar**, add these DNS records:

#### For Apex Domain (yourdomain.com)

```
Type: A
Host: @
Value: 185.199.108.153
TTL: 3600

Type: A
Host: @
Value: 185.199.109.153
TTL: 3600

Type: A
Host: @
Value: 185.199.110.153
TTL: 3600

Type: A
Host: @
Value: 185.199.111.153
TTL: 3600
```

#### For WWW Subdomain

```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
TTL: 3600
```

### Enable HTTPS

1. Go to GitHub repo Settings → Pages
2. Check "Enforce HTTPS"
3. Wait for certificate provisioning (can take up to 24 hours)

### Verify

After DNS propagation (1-48 hours):
```
https://yourdomain.com
https://www.yourdomain.com
```

Both should work!

---

## 📊 STEP 5: Analytics (Optional)

### GoatCounter Setup

1. Go to: https://www.goatcounter.com/
2. Sign up (free)
3. Site code: `p1express` (or your choice)
4. Copy tracking script

### Add to Landing Page

Open `index.html`, add before `</body>`:

```html
<!-- GoatCounter Analytics (Privacy-friendly) -->
<script data-goatcounter="https://p1express.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
```

### Deploy Update

```bash
git add index.html
git commit -m "Add GoatCounter analytics"
git push
```

---

## 🔄 STEP 6: Future Updates

### Update App Download

When you release new app version:

```bash
# Build latest app
cd /Users/achirinos/Projects/P1\ Express/warp
npm run build

# Copy to landing page
cp dist/index.html landing-page/downloads/p1express-app.html

# Create new zip
cd landing-page/downloads
zip -9 p1express-app.zip p1express-app.html

# Update landing page repo
cd ..  # back to landing-page root
git add downloads/
git commit -m "Update app to v1.0.X"
git push

# GitHub Pages will auto-deploy in 1-2 minutes
```

### Update Content

1. Edit `index.html`, CSS, or JS files
2. Test locally: `python3 -m http.server 8000`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

---

## ✅ Testing Checklist

Before announcing your landing page, test:

### Functionality
- [ ] Theme toggle cycles through Grey → Dark → Light
- [ ] All navigation links work (smooth scroll)
- [ ] Mobile menu opens/closes
- [ ] FAQ accordion expands/collapses
- [ ] Download button downloads app file
- [ ] Contact form validates input
- [ ] All external links open in new tab
- [ ] Social media links are correct
- [ ] Donation links work

### Responsive Design
- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px+)
- [ ] Large desktop (1200px+)

### Cross-Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Performance
- [ ] Page loads in < 3 seconds
- [ ] Images optimized
- [ ] No console errors
- [ ] Lighthouse score > 90

---

## 🎯 Post-Deployment Tasks

### Share Your Landing Page

1. **Update social media bios** with link
2. **Create announcement post** on X/Threads
3. **Update LinkedIn profile** with project
4. **Submit to directories**:
   - Product Hunt
   - Indie Hackers
   - Hacker News (Show HN)

### Monitor

1. **Check analytics** weekly (if enabled)
2. **Monitor contact form** submissions
3. **Track download stats**
4. **Collect feedback** and iterate

---

## 🐛 Troubleshooting

### GitHub Pages not updating?
- Check Actions tab for build status
- Try force refresh: Ctrl+Shift+R
- Clear browser cache
- Wait 5 minutes and try again

### Custom domain not working?
- Verify DNS propagation: https://dnschecker.org/
- Check CNAME file in repo root
- Ensure "Enforce HTTPS" is checked
- DNS can take 24-48 hours

### Contact form not working?
- Verify Formspree endpoint is correct
- Check form `method="POST"`
- Ensure email is verified in Formspree
- Check browser console for errors

### Images not loading?
- Verify file paths are correct
- Check file names match exactly (case-sensitive)
- Ensure files are committed to repo
- Try hard refresh

---

## 📞 Support

If you encounter issues:

1. Check this guide thoroughly
2. Search GitHub Pages documentation
3. Check Formspree documentation
4. Review browser console for errors

---

**Good luck with your launch! 🚀**

Built by [@achirinos](https://x.com/achirinos)
