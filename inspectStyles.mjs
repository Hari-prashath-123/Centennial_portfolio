import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  const styles = await page.evaluate(() => {
    const getStyles = (el, props) => {
      if (!el) return 'NOT FOUND';
      const c = window.getComputedStyle(el);
      const r = {};
      props.forEach(p => r[p] = c[p]);
      return r;
    };

    const nav = document.querySelector('nav');
    const navInner = document.querySelector('.navbar-inner');
    const logo = document.querySelector('.navbar-logo-name');
    const logoSub = document.querySelector('.navbar-logo-sub');
    const navBtn = document.querySelector('.navbar-links button:not(.btn-go-premium)');
    const goPremium = document.querySelector('.btn-go-premium');
    const faqSection = document.querySelector('.faq-section');
    const faqItem = document.querySelector('.faq-item');
    const faqQuestion = document.querySelector('.faq-question');
    const faqChevron = document.querySelector('.faq-chevron');
    const faqList = document.querySelector('.faq-list');

    return {
      nav: getStyles(nav, ['backgroundColor','height','paddingTop','paddingBottom','paddingLeft','paddingRight','backdropFilter']),
      navInner: getStyles(navInner, ['maxWidth','paddingLeft','paddingRight','height','display','alignItems','justifyContent']),
      logo: getStyles(logo, ['fontSize','fontWeight','fontFamily','letterSpacing']),
      logoSub: getStyles(logoSub, ['fontSize','color','letterSpacing','textTransform','fontWeight']),
      navBtn: getStyles(navBtn, ['color','fontSize','fontWeight','fontFamily','paddingLeft','paddingRight','paddingTop','paddingBottom']),
      goPremium: getStyles(goPremium, ['backgroundImage','paddingTop','paddingBottom','paddingLeft','paddingRight','borderRadius','fontSize','fontWeight']),
      faqSection: getStyles(faqSection, ['backgroundColor','paddingTop','paddingBottom','paddingLeft','paddingRight']),
      faqList: getStyles(faqList, ['maxWidth','gap','margin']),
      faqItem: getStyles(faqItem, ['backgroundColor','borderRadius','borderTopColor','borderTopWidth','paddingTop','paddingBottom','paddingLeft','paddingRight','marginBottom','overflow']),
      faqQuestion: getStyles(faqQuestion, ['fontSize','fontWeight','color','paddingTop','paddingBottom','paddingLeft','paddingRight','fontFamily','lineHeight']),
      faqChevron: getStyles(faqChevron, ['color','width','height']),
    };
  });

  console.log(JSON.stringify(styles, null, 2));

  // Screenshot navbar
  const navEl = await page.$('nav');
  await navEl.screenshot({ path: 'C:/Users/hariv/.gemini/antigravity-ide/brain/121c3656-853d-41f5-bde3-1b84a8041b5a/navbar_screenshot.png' });

  // Scroll to FAQ and screenshot
  await page.evaluate(() => {
    const el = document.querySelector('.faq-section');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:/Users/hariv/.gemini/antigravity-ide/brain/121c3656-853d-41f5-bde3-1b84a8041b5a/faq_screenshot.png' });

  await browser.close();
})();
