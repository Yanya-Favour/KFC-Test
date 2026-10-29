const ugxFormatter = new Intl.NumberFormat("en-UG", {
  style: "currency",
  currency: "UGX",
  currencyDisplay: "code",
  maximumFractionDigits: 0,
});

export const formatUGX = (value) => {
  const amount = typeof value === "number"
    ? value
    : Number(String(value ?? "").replace(/[^0-9.-]/g, ""));

  return ugxFormatter.format(Number.isFinite(amount) ? amount : 0);
};