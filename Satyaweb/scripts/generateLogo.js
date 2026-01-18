// This script uses the html-to-image library to export the DeepOmap logo as a PNG file
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function exportLogo() {
  try {
    // Create a simple HTML file with the logo component
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DeepOmap Logo Export</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: transparent;
          }
          /* Import animation styles */
          @keyframes data-sphere {
            0%, 100% {
              d: path("M50,10 C65,10 75,15 82,25 C89,35 92,45 90,60 C88,75 80,85 65,90 C50,95 35,90 25,80 C15,70 10,55 15,40 C20,25 35,10 50,10");
            }
            50% {
              d: path("M48,12 C62,12 72,18 78,26 C85,34 88,46 86,62 C84,78 78,82 62,88 C48,92 34,88 26,78 C18,68 14,52 18,38 C22,24 34,12 48,12");
            }
          }
          .data-sphere { animation: data-sphere 12s ease-in-out infinite; }
          
          @keyframes sphere-overlay {
            0%, 100% { opacity: 0.4; transform: rotate(0deg); }
            50% { opacity: 0.6; transform: rotate(180deg); }
          }
          .sphere-overlay { 
            animation: sphere-overlay 15s linear infinite; 
            transform-origin: center;
          }
          
          @keyframes network-boundary-rotation {
            0% { transform: rotate(0deg); stroke-dasharray: 2, 4; }
            50% { stroke-dasharray: 3, 3; }
            100% { transform: rotate(360deg); stroke-dasharray: 2, 4; }
          }
          .network-boundary {
            animation: network-boundary-rotation 30s linear infinite;
            transform-origin: center;
          }
          
          @keyframes node-motion {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(1.5px, 1px); }
            50% { transform: translate(0, 2px); }
            75% { transform: translate(-1.5px, 1px); }
          }
          .primary-node-1 { animation: node-motion 6s ease-in-out infinite; }
          .primary-node-2 { animation: node-motion 6s ease-in-out infinite 1s; }
          .primary-node-3 { animation: node-motion 6s ease-in-out infinite 2s; }
          .primary-node-4 { animation: node-motion 6s ease-in-out infinite 1.5s; }
          .primary-node-5 { animation: node-motion 6s ease-in-out infinite 3s; }
          .primary-node-6 { animation: node-motion 6s ease-in-out infinite 2.5s; }
          .primary-node-7 { animation: node-motion 6s ease-in-out infinite 3.5s; }
          
          @keyframes spark-pulse {
            0%, 100% { opacity: 0.5; r: 1.2; }
            50% { opacity: 1; r: 1.6; }
          }
          .spark-1 { animation: spark-pulse 3s ease-in-out infinite; }
          .spark-2 { animation: spark-pulse 3s ease-in-out infinite 0.8s; }
          .spark-3 { animation: spark-pulse 3s ease-in-out infinite 1.6s; }
          .spark-4 { animation: spark-pulse 3s ease-in-out infinite 2.4s; }
          
          @keyframes path-motion {
            0%, 100% { stroke-dashoffset: 0; }
            50% { stroke-dashoffset: 8; }
          }
          .path-motion-1 { animation: path-motion 10s linear infinite; }
          .path-motion-2 { animation: path-motion 10s linear infinite reverse; }
          .path-motion-3 { animation: path-motion 10s linear infinite 3s; }
          
          @keyframes main-edge-pulse {
            0%, 100% { opacity: 0.5; stroke-width: 1.2; }
            50% { opacity: 0.8; stroke-width: 1.5; }
          }
          .main-edge { animation: main-edge-pulse 5s ease-in-out infinite; }
          
          @keyframes core-pulse {
            0%, 100% { transform: scale(1); filter: brightness(1); }
            50% { transform: scale(1.1); filter: brightness(1.3); }
          }
          .core-node {
            animation: core-pulse 6s ease-in-out infinite;
            transform-origin: center;
          }
          
          @keyframes edge-pulse-1 { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
          @keyframes edge-pulse-2 { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
          @keyframes edge-pulse-3 { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.9; } }
          
          .edge-pulse-1 { animation: edge-pulse-1 4s ease-in-out infinite; }
          .edge-pulse-2 { animation: edge-pulse-1 4s ease-in-out infinite 1s; }
          .edge-pulse-3 { animation: edge-pulse-1 4s ease-in-out infinite 2s; }
          
          @keyframes flow-marker-fade { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.6; } }
          .flow-marker-1 { animation: flow-marker-fade 4s ease-in-out infinite; }
          .flow-marker-2 { animation: flow-marker-fade 4s ease-in-out infinite 1s; }
          .flow-marker-3 { animation: flow-marker-fade 4s ease-in-out infinite 2s; }
          .flow-marker-4 { animation: flow-marker-fade 4s ease-in-out infinite 3s; }
          
          .logo-container {
            width: 500px;
            height: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        </style>
      </head>
      <body>
        <div class="logo-container">
          <svg 
            width="500" 
            height="500" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            class="logo-high-quality"
            style="filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2)); transform: scale(1.05)"
            shapeRendering="geometricPrecision"
          >
            <!-- Spherical data network structure - main outline -->
            <path 
              d="M50,10
              C65,10 75,15 82,25
              C89,35 92,45 90,60
              C88,75 80,85 65,90
              C50,95 35,90 25,80
              C15,70 10,55 15,40
              C20,25 35,10 50,10"
              fill="url(#sphereGradient)" 
              class="data-sphere"
              opacity="0.9"
            />
            
            <!-- Secondary semi-transparent overlay for depth -->
            <path 
              d="M48,15
              C62,15 70,20 77,28
              C84,36 87,45 85,58
              C83,71 75,80 62,85
              C49,90 35,85 26,77
              C17,69 13,56 17,43
              C21,30 34,15 48,15"
              fill="url(#overlayGradient)" 
              opacity="0.4"
              class="sphere-overlay"
            />
            
            <!-- Data network nodes structure -->
            <g class="data-nodes">
              <!-- Central hub -->
              <circle cx="50" cy="50" r="9" fill="url(#coreGradient)" class="core-node" filter="url(#glowFilter)" />
              
              <!-- Primary nodes - larger and more prominent -->
              <circle cx="35" cy="32" r="5" fill="url(#primaryNodeGradient)" opacity="0.9" class="primary-node-1" filter="url(#glowFilter)" />
              <circle cx="70" cy="38" r="5.5" fill="url(#primaryNodeGradient)" opacity="0.9" class="primary-node-2" filter="url(#glowFilter)" />
              <circle cx="62" cy="72" r="5" fill="url(#primaryNodeGradient)" opacity="0.9" class="primary-node-3" filter="url(#glowFilter)" />
              <circle cx="28" cy="65" r="4.5" fill="url(#primaryNodeGradient)" opacity="0.9" class="primary-node-4" filter="url(#glowFilter)" />
              <circle cx="44" cy="80" r="4" fill="url(#primaryNodeGradient)" opacity="0.8" class="primary-node-5" filter="url(#glowFilter)" />
              <circle cx="32" cy="20" r="3.5" fill="url(#primaryNodeGradient)" opacity="0.8" class="primary-node-6" filter="url(#glowFilter)" />
              <circle cx="76" cy="55" r="4" fill="url(#primaryNodeGradient)" opacity="0.8" class="primary-node-7" filter="url(#glowFilter)" />
              
              <!-- Secondary nodes - smaller with varied opacity -->
              <circle cx="58" cy="25" r="2.5" fill="white" opacity="0.7" class="secondary-node-1" />
              <circle cx="25" cy="45" r="2.2" fill="white" opacity="0.8" class="secondary-node-2" />
              <circle cx="42" cy="65" r="2.8" fill="white" opacity="0.75" class="secondary-node-3" />
              <circle cx="62" cy="53" r="2" fill="white" opacity="0.7" class="secondary-node-4" />
              <circle cx="80" cy="32" r="1.8" fill="white" opacity="0.65" class="secondary-node-5" />
              <circle cx="15" cy="55" r="1.5" fill="white" opacity="0.6" class="secondary-node-6" />
              <circle cx="55" cy="85" r="2" fill="white" opacity="0.55" class="secondary-node-7" />
              <circle cx="80" cy="70" r="1.7" fill="white" opacity="0.5" class="secondary-node-8" />
              <circle cx="20" cy="30" r="1.9" fill="white" opacity="0.65" class="secondary-node-9" />
            </g>
            
            <!-- Data network connections -->
            <g class="network-edges">
              <!-- Main connections from core hub -->
              <line x1="50" y1="50" x2="35" y2="32" stroke="white" stroke-width="1.2" opacity="0.7" class="main-edge edge-pulse-1" />
              <line x1="50" y1="50" x2="70" y2="38" stroke="white" stroke-width="1.2" opacity="0.7" class="main-edge edge-pulse-2" />
              <line x1="50" y1="50" x2="62" y2="72" stroke="white" stroke-width="1.2" opacity="0.7" class="main-edge edge-pulse-3" />
              <line x1="50" y1="50" x2="28" y2="65" stroke="white" stroke-width="1.2" opacity="0.7" class="main-edge edge-pulse-1" />
              <line x1="50" y1="50" x2="44" y2="80" stroke="white" stroke-width="1.2" opacity="0.7" class="main-edge edge-pulse-2" />
              <line x1="50" y1="50" x2="32" y2="20" stroke="white" stroke-width="1.2" opacity="0.6" class="main-edge edge-pulse-3" />
              <line x1="50" y1="50" x2="76" y2="55" stroke="white" stroke-width="1.2" opacity="0.7" class="main-edge edge-pulse-1" />
              
              <!-- Secondary network connections between nodes -->
              <line x1="35" y1="32" x2="58" y2="25" stroke="white" stroke-width="0.9" opacity="0.5" class="secondary-edge edge-pulse-2" />
              <line x1="58" y1="25" x2="70" y2="38" stroke="white" stroke-width="0.9" opacity="0.5" class="secondary-edge edge-pulse-3" />
              <line x1="70" y1="38" x2="62" y2="53" stroke="white" stroke-width="0.9" opacity="0.5" class="secondary-edge edge-pulse-1" />
              <line x1="62" y1="53" x2="62" y2="72" stroke="white" stroke-width="0.9" opacity="0.5" class="secondary-edge edge-pulse-2" />
              <line x1="62" y1="72" x2="42" y2="65" stroke="white" stroke-width="0.9" opacity="0.5" class="secondary-edge edge-pulse-3" />
              <line x1="42" y1="65" x2="44" y2="80" stroke="white" stroke-width="0.9" opacity="0.5" class="secondary-edge edge-pulse-1" />
              <line x1="44" y1="80" x2="28" y2="65" stroke="white" stroke-width="0.9" opacity="0.5" class="secondary-edge edge-pulse-2" />
              <line x1="28" y1="65" x2="25" y2="45" stroke="white" stroke-width="0.9" opacity="0.5" class="secondary-edge edge-pulse-3" />
              <line x1="25" y1="45" x2="35" y2="32" stroke="white" stroke-width="0.9" opacity="0.5" class="secondary-edge edge-pulse-1" />
              <line x1="32" y1="20" x2="20" y2="30" stroke="white" stroke-width="0.8" opacity="0.4" class="secondary-edge edge-pulse-2" />
              <line x1="80" y1="32" x2="76" y2="55" stroke="white" stroke-width="0.8" opacity="0.4" class="secondary-edge edge-pulse-3" />
              <line x1="76" y1="55" x2="80" y2="70" stroke="white" stroke-width="0.8" opacity="0.4" class="secondary-edge edge-pulse-1" />
              
              <!-- Data flow paths -->
              <path 
                d="M35 32 Q 42 28, 58 25" 
                stroke="rgba(255,255,255,0.4)" 
                stroke-width="0.8" 
                stroke-dasharray="1,2"
                fill="none"
                class="flow-path path-motion-1"
              />
              <path 
                d="M70 38 Q 75 45, 76 55" 
                stroke="rgba(255,255,255,0.4)" 
                stroke-width="0.8" 
                stroke-dasharray="1,2"
                fill="none"
                class="flow-path path-motion-2"
              />
              <path 
                d="M62 72 Q 55 78, 44 80" 
                stroke="rgba(255,255,255,0.4)" 
                stroke-width="0.8" 
                stroke-dasharray="1,2"
                fill="none"
                class="flow-path path-motion-3"
              />
            </g>
            
            <!-- Data flow direction indicators -->
            <g class="data-flow-indicators">
              <path 
                d="M52 22 L49 18 L55 18 Z" 
                fill="white" 
                opacity="0.5" 
                class="flow-marker flow-marker-1"
              />
              <path 
                d="M78 50 L82 47 L82 53 Z" 
                fill="white" 
                opacity="0.5" 
                class="flow-marker flow-marker-2"
              />
              <path 
                d="M50 82 L53 86 L47 86 Z" 
                fill="white" 
                opacity="0.5" 
                class="flow-marker flow-marker-3"
              />
              <path 
                d="M22 50 L18 53 L18 47 Z" 
                fill="white" 
                opacity="0.5" 
                class="flow-marker flow-marker-4"
              />
            </g>
            
            <!-- Network boundary - rotating outer ring -->
            <path 
              d="M50,15
              C60,15 70,20 77,30
              C84,40 88,52 85,65
              C82,78 70,85 58,85
              C45,85 35,80 28,70
              C21,60 18,45 25,35
              C32,25 40,15 50,15" 
              stroke="url(#outerRingGradient)" 
              stroke-width="1" 
              stroke-dasharray="2,4" 
              fill="none" 
              opacity="0.6" 
              class="network-boundary"
              filter="url(#glowFilter)"
            />
            
            <!-- Spark effects at key data points -->
            <circle cx="58" cy="25" r="1.2" fill="white" opacity="0.9" class="spark-effect spark-1" filter="url(#sparkGlow)" />
            <circle cx="76" cy="55" r="1.3" fill="white" opacity="0.9" class="spark-effect spark-2" filter="url(#sparkGlow)" />
            <circle cx="44" cy="80" r="1.1" fill="white" opacity="0.9" class="spark-effect spark-3" filter="url(#sparkGlow)" />
            <circle cx="25" cy="45" r="1.2" fill="white" opacity="0.9" class="spark-effect spark-4" filter="url(#sparkGlow)" />
            
            <!-- Enhanced gradient definitions -->
            <defs>
              <!-- Main sphere gradient - smooth blue transitions -->
              <linearGradient id="sphereGradient" x1="20%" y1="15%" x2="80%" y2="85%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="25%" stop-color="#2563EB" />
                <stop offset="50%" stop-color="#1D4ED8" />
                <stop offset="75%" stop-color="#1E40AF" />
                <stop offset="100%" stop-color="#1E3A8A" />
              </linearGradient>
              
              <!-- Overlay gradient for sphere depth -->
              <linearGradient id="overlayGradient" x1="30%" y1="10%" x2="70%" y2="90%">
                <stop offset="0%" stop-color="#60A5FA" stop-opacity="0.5" />
                <stop offset="50%" stop-color="#3B82F6" stop-opacity="0.3" />
                <stop offset="100%" stop-color="#2563EB" stop-opacity="0.4" />
              </linearGradient>
              
              <!-- Core node gradient -->
              <radialGradient id="coreGradient" cx="40%" cy="40%" r="70%" fx="30%" fy="30%">
                <stop offset="0%" stop-color="#BFDBFE" />
                <stop offset="40%" stop-color="#60A5FA" />
                <stop offset="70%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#2563EB" />
              </radialGradient>
              
              <!-- Primary nodes gradient -->
              <radialGradient id="primaryNodeGradient" cx="45%" cy="45%" r="65%" fx="35%" fy="35%">
                <stop offset="0%" stop-color="#93C5FD" />
                <stop offset="50%" stop-color="#60A5FA" />
                <stop offset="100%" stop-color="#3B82F6" />
              </radialGradient>
              
              <!-- Outer ring gradient -->
              <linearGradient id="outerRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#BFDBFE" />
                <stop offset="50%" stop-color="#60A5FA" />
                <stop offset="100%" stop-color="#2563EB" />
              </linearGradient>
              
              <!-- Enhanced glow filter -->
              <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              <!-- Spark glow effect -->
              <filter id="sparkGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              <!-- Texture pattern -->
              <pattern id="networkTexture" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.5" fill="white" opacity="0.1" />
              </pattern>
            </defs>
          </svg>
        </div>
      </body>
      </html>
    `;

    // Write the HTML file
    const htmlPath = path.join(__dirname, 'logo-export.html');
    fs.writeFileSync(htmlPath, htmlContent);

    // Launch a headless browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Set viewport to match logo size
    await page.setViewport({
      width: 500,
      height: 500,
      deviceScaleFactor: 2, // Higher resolution
    });
    
    // Load the HTML file
    await page.goto(`file:${htmlPath}`);
    
    // Wait for animations to initialize
    await page.waitForTimeout(500);
    
    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, '..', 'public', 'logo');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Screenshot the logo
    const logoPath = path.join(outputDir, 'DeepOmapLogo-Network.png');
    await page.screenshot({
      path: logoPath,
      omitBackground: true,
      clip: {
        x: 0,
        y: 0,
        width: 500,
        height: 500
      }
    });
    
    // Also save a version without transparency
    const logoPathWithBg = path.join(outputDir, 'DeepOmapLogo-Network-with-bg.png');
    await page.evaluate(() => {
      document.body.style.background = 'white';
    });
    await page.screenshot({
      path: logoPathWithBg,
      omitBackground: true,
      clip: {
        x: 0,
        y: 0,
        width: 500,
        height: 500
      }
    });
    
    // Clean up
    await browser.close();
    fs.unlinkSync(htmlPath);
    
    console.log(`Logo exported successfully to ${logoPath}`);
    console.log(`Logo with background exported to ${logoPathWithBg}`);
    
    return { logoPath, logoPathWithBg };
  } catch (error) {
    console.error('Error exporting logo:', error);
    throw error;
  }
}

// Run the export function
exportLogo();
