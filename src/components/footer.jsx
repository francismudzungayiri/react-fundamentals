const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer className="text-center text-gray-400">
      <p>Copyright &copy; {currentyear} TechCatalyzer</p>
    </footer>
  );
};

export default Footer;
