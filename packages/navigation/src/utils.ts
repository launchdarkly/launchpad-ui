const titlecase = (str: string) => {
  return str
    .toString()
    .toLowerCase()
    .replace(/\b([a-z])/g, (ch) => ch.toUpperCase());
};

export { titlecase };
