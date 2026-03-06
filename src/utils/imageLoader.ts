export function preloadImages(urls: string[], delayBetween: number = 500) {
  urls.forEach((url, index) => {
    setTimeout(() => {
      const img = new Image();
      img.src = url;
    }, index * delayBetween);
  });
}

export function preloadImageOnVisible(
  selector: string,
  imageAttribute: string = 'data-src'
) {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLImageElement;
        const imageSrc = element.getAttribute(imageAttribute);
        if (imageSrc && !element.src) {
          element.src = imageSrc;
          element.removeAttribute(imageAttribute);
          observer.unobserve(element);
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '50px' });

  document.querySelectorAll(selector).forEach((img) => {
    observer.observe(img);
  });
}
