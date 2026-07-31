import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });

  const artifactDir = 'C:\\Users\\hariv\\.gemini\\antigravity-ide\\brain\\121c3656-853d-41f5-bde3-1b84a8041b5a';

  // Home
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: `${artifactDir}\\home_screenshot.png` });

  // Login
  await page.goto('http://localhost:5173/login', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: `${artifactDir}\\login_screenshot.png` });

  // Register
  await page.goto('http://localhost:5173/register', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: `${artifactDir}\\register_screenshot.png` });

  // Live Demo
  await page.goto('http://localhost:5173/demo', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: `${artifactDir}\\demo_screenshot.png` });

  await browser.close();
  console.log('Screenshots saved');
})();
