export function setItemWithExpiry(key, value, ttl) {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
}

export function getItemWithExpiry(key) {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  try {
    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    return itemStr;
  }
}
