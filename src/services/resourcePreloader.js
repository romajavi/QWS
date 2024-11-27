export class ResourcePreloader {
    constructor() {
        this.preloadedResources = new Set();
        this.loading = new Map();
    }

    async preloadImage(src) {
        if (this.preloadedResources.has(src)) return;

        if (!this.loading.has(src)) {
            this.loading.set(src, new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    this.preloadedResources.add(src);
                    resolve(src);
                };
                img.onerror = reject;
                img.src = src;
            }));
        }

        return this.loading.get(src);
    }

    async preloadFont(fontFamily, options = {}) {
        if (this.preloadedResources.has(fontFamily)) return;

        const descriptors = {
            style: 'normal',
            weight: '400',
            ...options
        };

        try {
            await document.fonts.load(`${descriptors.weight} ${descriptors.style} 12px ${fontFamily}`);
            this.preloadedResources.add(fontFamily);
        } catch (error) {
            console.error(`Error preloading font ${fontFamily}:`, error);
        }
    }

    async preloadCriticalResources() {
        const criticalResources = [
            { type: 'font', family: 'Orbitron', options: { weight: '700' } },
            { type: 'image', src: '/images/logo.png' }
        ];

        const promises = criticalResources.map(resource => {
            if (resource.type === 'font') {
                return this.preloadFont(resource.family, resource.options);
            }
            if (resource.type === 'image') {
                return this.preloadImage(resource.src);
            }
        });

        return Promise.all(promises);
    }
}

export const resourcePreloader = new ResourcePreloader();