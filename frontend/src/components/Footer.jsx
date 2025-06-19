const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 py-4 text-center text-sm text-card-foreground">
      <div>© {new Date().getFullYear()} Quizzard</div>
    </footer>
  );
};

export default Footer;
