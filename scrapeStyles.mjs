import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://portfolio.centennialinfotech.com/', { waitUntil: 'networkidle2' });
  
  // Wait for the app to render
  await new Promise(r => setTimeout(r, 3000));
  
  const styles = await page.evaluate(() => {
    const getStyle = (el, props) => {
      if (!el) return null;
      const comp = window.getComputedStyle(el);
      const result = {};
      props.forEach(p => { result[p] = comp[p]; });
      return result;
    };

    const data = {};

    const findText = (str) => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
      let node;
      while (node = walker.nextNode()) {
        if (node.nodeValue.includes(str) && node.parentElement) {
          return node.parentElement;
        }
      }
      return null;
    };

    const nav = document.querySelector('nav');
    data.header = getStyle(nav, ['backgroundColor', 'height', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'backdropFilter', 'borderBottomColor', 'borderBottomWidth', 'position', 'top']);

    const centennialEl = findText('Centennial');
    if (centennialEl) {
      data.logoCentennial = getStyle(centennialEl, ['color', 'fontSize', 'fontWeight', 'fontFamily', 'letterSpacing']);
    }

    const portfolioEl = findText('Portfolio');
    if (portfolioEl) {
      data.logoPortfolio = getStyle(portfolioEl, ['color', 'fontSize', 'fontWeight']);
    }

    const buildIdentity = findText('BUILD YOUR DIGITAL IDENTITY');
    if (buildIdentity) {
      data.logoSub = getStyle(buildIdentity, ['color', 'fontSize', 'fontWeight', 'letterSpacing', 'backgroundImage', 'backgroundClip', 'webkitTextFillColor']);
    }

    const getStarted = findText('Get Started');
    if (getStarted) {
      data.navLinks = getStyle(getStarted, ['color', 'fontSize', 'fontWeight', 'fontFamily']);
    }

    const goPremium = findText('Go Premium');
    if (goPremium) {
      data.goPremiumBtn = getStyle(goPremium.closest('button') || goPremium, ['backgroundColor', 'backgroundImage', 'color', 'fontSize', 'fontWeight', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'borderRadius']);
    }
    
    const getYour = findText('Get Your');
    if (getYour) {
      data.getYour = getStyle(getYour, ['color', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing']);
      const heroSec = getYour.closest('section') || getYour.closest('main > div');
      if (heroSec) {
          data.heroSection = getStyle(heroSec, ['backgroundColor', 'paddingTop', 'paddingBottom']);
      }
    }

    const dream = findText('Dream');
    if (dream) {
      data.dream = getStyle(dream, ['color', 'backgroundImage', 'backgroundClip', 'webkitTextFillColor', 'fontSize', 'fontWeight', 'webkitBackgroundClip']);
    }

    const starting = findText('Starting Less Than a Burger');
    if (starting) {
      data.subtitle = getStyle(starting, ['color', 'fontSize', 'fontWeight', 'marginTop', 'marginBottom']);
    }

    const createBtn = findText('Create My Portfolio');
    if (createBtn) {
      data.createMyPortfolioBtn = getStyle(createBtn.closest('button') || createBtn, ['backgroundColor', 'backgroundImage', 'color', 'fontSize', 'fontWeight', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'borderRadius']);
    }

    return data;
  });

  console.log(JSON.stringify(styles, null, 2));
  await browser.close();
})();
