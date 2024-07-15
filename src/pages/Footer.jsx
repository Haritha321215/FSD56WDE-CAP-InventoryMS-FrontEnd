const Footer = () => {
  const styles = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    backgroundColor: "gray",
    padding: "20px 0",
    textAlign: "center",
    color: "white",
  };
  return (
    <div className="footer mt-auto py-2" style={styles}>
      <center>
        <p>&copy; 2024 Inventory Management System. All rights reserved.</p>
      </center>
    </div>
  );
};
export default Footer;
