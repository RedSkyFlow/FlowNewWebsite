export class PerformanceOptimizer {
  private static rafId: number | null = null
  private static callbacks: (() => void)[] = []

  // Batch DOM updates in a single RAF
  static batchUpdates(callback: () => void) {
    this.callbacks.push(callback)
    
    if (!this.rafId) {
      this.rafId = requestAnimationFrame(() => {
        this.callbacks.forEach(cb => cb())
        this.callbacks = []
        this.rafId = null
      })
    }
  }

  // Debounced resize handler
  static debounceResize(callback: () => void, delay = 100) {
    let timeoutId: NodeJS.Timeout
    
    return () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(callback, delay)
    }
  }

  // Intersection observer for lazy loading
  static createLazyLoader(callback: (entries: IntersectionObserverEntry[]) => void) {
    return new IntersectionObserver(callback, {
      rootMargin: '50px',
      threshold: 0.1
    })
  }

  // Preload critical images
  static preloadImages(urls: string[]) {
    urls.forEach(url => {
      const img = new Image()
      img.src = url
    })
  }
}
