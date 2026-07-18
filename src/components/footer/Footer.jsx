import "../../App.css";
import FooterFeatures from "./FooterFeatures/FooterFeatures";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterLinks from "./FooterLinks/FooterLinks";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="positionCenter">
          <FooterFeatures />
          <FooterContacts />
          <FooterLinks />
        </div>
      </footer>
    </>
  );
};

export default Footer;
