const CART_STORAGE_KEY = 'kfcCart';

export const getStoredCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    return Array.isArray(cart) ? cart : [];
  } catch {
    return [];
  }
};

export const saveStoredCart = (cart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return cart;
};

export const mergeStoredCart = (serverCart) => {
  const merged = new Map();
  [...serverCart, ...getStoredCart()].forEach((item) => {
    merged.set(item._id, item);
  });
  return [...merged.values()];
};

export const addStoredCartItem = (item) => {
  const cart = getStoredCart();
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.qty += item.qty || 1;
  } else {
    cart.push({ ...item, _id: `local-${Date.now()}-${Math.random().toString(36).slice(2)}` });
  }

  return saveStoredCart(cart);
};

export const updateStoredCartItem = (cartItemId, qty) => {
  const cart = getStoredCart()
    .filter((item) => item._id !== cartItemId || qty > 0)
    .map((item) => item._id === cartItemId ? { ...item, qty } : item);
  return saveStoredCart(cart);
};

export const removeStoredCartItem = (cartItemId) => {
  return saveStoredCart(getStoredCart().filter((item) => item._id !== cartItemId));
};