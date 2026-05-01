export function isOpenNow(hours: string): boolean {
  if (!hours) return false;

  let clean = hours
    .replace("–", "-")
    .replace(/\s/g, "");

  // 🔥 Extract time range from string
  const match = clean.match(/(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/);

  if (!match) return false;

  const open = match[1];
  const close = match[2];

  const now = new Date();
  const current = now.getHours() * 60 + now.getMinutes();

  const [openH, openM] = open.split(":").map(Number);
  const [closeH, closeM] = close.split(":").map(Number);

  const openTime = openH * 60 + openM;
  const closeTime = closeH * 60 + closeM;

  return current >= openTime && current <= closeTime;
}