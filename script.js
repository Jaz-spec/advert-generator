const canvas = document.getElementById('advertCanvas');
const ctx = canvas.getContext('2d');

// Original dimensions
const originalWidth = 1080;
const originalHeight = 1350;
const aspectRatio = originalWidth / originalHeight;

// Calculate new dimensions (one-third of screen height)
const newHeight = window.innerHeight / 1.2;
const newWidth = newHeight * aspectRatio;

// Set canvas dimensions
canvas.width = newWidth;
canvas.height = newHeight;

// Calculate scaling factor
const scale = newWidth / originalWidth;

// Set background color
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Load the image
const img = new Image();
img.src = 'static/ABC_0183.JPG';
img.onload = () => {
    // Draw the image, scaled
    const imageOriginalWidth = img.width;
    const imageOriginalHeight = img.height;
    const imageAspectRatio = imageOriginalWidth / imageOriginalHeight;
    
    let drawWidth = canvas.width;
    let drawHeight = drawWidth / imageAspectRatio;

    ctx.drawImage(img, 0, 450 * scale, drawWidth, drawHeight);

    // Set text styles, scaled
    ctx.fillStyle = 'black';
    ctx.font = `${60 * scale}px sans-serif`;
    ctx.fillText('Co-working at Founders and Coders', 50 * scale, 300 * scale);

    ctx.fillStyle = '#007bff';
    ctx.font = `${40 * scale}px sans-serif`;
    ctx.fillText('For applicants', 50 * scale, 380 * scale);

    // Load and draw the logo
    const logo = new Image();
    logo.src = 'static/Screenshot 2025-07-09 at 12.50.32.png';
    logo.onload = () => {
        const logoWidth = 200 * scale;
        const logoHeight = logo.height * (logoWidth / logo.width);
        ctx.drawImage(logo, canvas.width - logoWidth - (50 * scale), canvas.height - logoHeight - (50 * scale), logoWidth, logoHeight);
    };
};