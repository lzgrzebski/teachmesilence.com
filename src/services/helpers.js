export default function calculatePadding(width, height) {
  const ratio = width / height;
  return (100 / ratio).toFixed(2);
}
