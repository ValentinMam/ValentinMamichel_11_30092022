import "../styles/Header.css";
import logo from "../assets/logo.svg";

function Header() {
  const title = "Kasa";
  return (
    <div className="header">
      <img src={logo} alt="logo kasa" className="kasa-logo" />
      <h1 className="kasa-title">{title}</h1>;
    </div>
  );
}
export default Header;
