export default function Footer() {
  const currentDate = new Date();
  return <footer>Copyright {currentDate.getFullYear()}</footer>;
}
