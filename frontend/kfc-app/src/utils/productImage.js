import menu1 from '../assets/png/menu1.png';
import menu2 from '../assets/png/menu2.png';
import menu3 from '../assets/png/menu3.png';
import menu4 from '../assets/png/menu4.png';

const localImages = {
  'menu1.png': menu1,
  'menu2.png': menu2,
  'menu3.png': menu3,
  'menu4.png': menu4,
};

const getLocalFallbackImage = (title = '') => {
  const name = String(title ?? '').toLowerCase();

  if (name.includes('burger') || name.includes('zinger')) return menu1;
  if (name.includes('fries') || name.includes('fry')) return menu3;
  if (name.includes('roll') || name.includes('wrap')) return menu4;
  return menu2;
};

const onlineFallbacks = {
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
  vegetarianBurger: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80',
  roll: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80',
  biryani: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80',
  chicken: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=80',
};

const getOnlineFallback = (title = '') => {
  const name = String(title ?? '').toLowerCase();

  if (name.includes('popcorn')) return '/images/image6.png';
  if (name.includes('pepsi')) return '/images/image8.png';
  if (name.includes('beverage') || name.includes('drink')) return '/images/image7.png';
  if (name.includes('biryani') || name.includes('rice')) return '/images/image9.png';
  if (name.includes('strip') || name.includes('nashville')) return '/images/image10.png';
  if (name.includes('family feast') || name.includes('feast')) return '/images/image11.png';
  if (name.includes('roll') || name.includes('wrap')) return onlineFallbacks.roll;
  if (name.includes('fries') || name.includes('fry')) return onlineFallbacks.fries;
  if (name.includes('mixed zinger')) return '/images/image13.png';
  if (name.includes('veg') && (name.includes('burger') || name.includes('krispy') || name.includes('krispers') || name.includes('zinger'))) {
    return onlineFallbacks.vegetarianBurger;
  }
  if (name.includes('bucket meal') || name.includes('bucket for two')) return '/images/image5.png';
  if (name.includes('box')) return '/images/image12.png';
  if (name.includes('zinger')) return '/images/image12.png';
  if (name.includes('bucket') || name.includes('chicken')) return '/images/menu1.png';
  if (name.includes('meal')) return '/images/image5.png';
  if (name.includes('burger')) return onlineFallbacks.burger;
  return onlineFallbacks.chicken;
};

export const getProductImage = (image, title) => {
  if (typeof image !== 'string' || !image.trim()) {
    return getOnlineFallback(title);
  }

  const source = image.trim();
  const filename = source.split(/[?#]/, 1)[0].split('/').pop()?.toLowerCase();
  if (filename && /^menu[1-4]\.png$/.test(filename)) return getOnlineFallback(title);
  if (source.startsWith('/images/')) return source;
  if (filename && /^image\d+\.png$/.test(filename) && !source.includes('/')) {
    return `/images/${filename}`;
  }
  if (filename && localImages[filename]) return getOnlineFallback(title);

  return source;
};

export const handleProductImageError = (event, title) => {
  const image = event.currentTarget;
  const onlineFallback = getOnlineFallback(title);
  const localFallback = getLocalFallbackImage(title);

  if (!image.dataset.onlineFallback && image.src !== onlineFallback) {
    image.dataset.onlineFallback = 'true';
    image.src = onlineFallback;
  } else if (image.src !== localFallback) {
    image.src = localFallback;
  }
};
