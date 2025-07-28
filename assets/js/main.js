// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 添加页面加载动画
  addPageLoadAnimation();
  
  // 添加滚动效果
  addScrollEffects();
  
  // 添加卡片悬停效果
  addCardHoverEffects();
});

// 页面加载动画
function addPageLoadAnimation() {
  const elements = document.querySelectorAll('.card, .btn, .navbar-brand');
  elements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      element.style.transition = 'all 0.5s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// 滚动效果
function addScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  // 观察所有卡片和按钮
  document.querySelectorAll('.card, .btn').forEach(el => {
    observer.observe(el);
  });
}

// 卡片悬停效果
function addCardHoverEffects() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// 平滑滚动
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// 添加导航链接的平滑滚动
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      smoothScrollTo(target);
    });
  });
});

// 添加返回顶部按钮
function addBackToTopButton() {
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTop.className = 'btn btn-primary position-fixed';
  backToTop.style.cssText = `
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  
  document.body.appendChild(backToTop);
  
  // 显示/隐藏按钮
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.style.opacity = '1';
    } else {
      backToTop.style.opacity = '0';
    }
  });
  
  // 点击返回顶部
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 初始化返回顶部按钮
document.addEventListener('DOMContentLoaded', addBackToTopButton); 