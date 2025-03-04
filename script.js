
document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('download-btn');
  const passwordModal = document.getElementById('password-modal');
  const copyBtn = document.getElementById('copy-btn');
  const passwordText = document.getElementById('password-text');
  const copyStatus = document.getElementById('copy-status');
  const currentDateElement = document.getElementById('current-date');
  
  // Set current date
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  currentDateElement.textContent = 'Updated: ' + now.toLocaleDateString('en-US', options);
  
  downloadBtn.addEventListener('click', function() {
    // Start the download
    const downloadLink = 'bitbucket.org/gemlauncher/gemlauncher/downloads/Luna.rar';
    const link = document.createElement('a');
    link.href = 'https://' + downloadLink;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show the password modal
    setTimeout(() => {
      passwordModal.style.display = 'flex';
    }, 1000);
  });
  
  // Close the modal when clicking outside of it
  passwordModal.addEventListener('click', function(event) {
    if (event.target === passwordModal) {
      passwordModal.style.display = 'none';
    }
  });
  
  // Copy password functionality
  copyBtn.addEventListener('click', function() {
    const password = passwordText.textContent;
    navigator.clipboard.writeText(password).then(function() {
      copyStatus.textContent = 'Password copied!';
      copyStatus.style.color = '#00d9ff';
      setTimeout(() => {
        copyStatus.textContent = '';
      }, 2000);
    }, function(err) {
      copyStatus.textContent = 'Could not copy password';
      copyStatus.style.color = '#ff4747';
    });
  });
  
  // Add some hover effects for interactive elements
  const hoverElements = document.querySelectorAll('.download-button, .info-item');
  hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.05)';
      element.style.transition = 'transform 0.2s ease';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
    });
  });
  
  // Add some glow effects to the header
  const header = document.querySelector('.card-header');
  let glowIntensity = 0;
  let increasing = true;
  
  setInterval(() => {
    if (increasing) {
      glowIntensity += 0.1;
      if (glowIntensity >= 1) increasing = false;
    } else {
      glowIntensity -= 0.1;
      if (glowIntensity <= 0) increasing = true;
    }
    
    const iconLarge = document.querySelector('.icon-large');
    iconLarge.style.textShadow = `0 0 ${10 * glowIntensity}px rgba(145, 71, 255, ${glowIntensity})`;
  }, 100);
});
