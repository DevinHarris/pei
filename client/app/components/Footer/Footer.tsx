import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__container">
                <img className="footer__logo"  src="/images/logo.png" alt="logo" />
                <div className="footer__locations">
                    <div className="footer__location">
                        <h3 className="font-medium">Atlanta</h3>
                        <span className="footer__location-address">3150 Holcomb Bridge Rd<br></br> Norcross, GA 30071</span>
                        <span className="footer__location-phone">404-330-9798</span>
                    </div>
                    <div className="footer__location">
                        <h3 className="font-medium">Knoxville</h3>
                        <span className="footer__location-address">4110 Sutherland Avenue<br></br>Knoxville, TN 37919</span>
                        <span className="footer__location-phone">865-409-5755</span>
                    </div>
                    <div className="footer__location">
                        <h3 className="font-medium">Denver</h3>
                        <span className="footer__location-address">4704 Harlan Suite 620<br></br>Denver, CO 80212</span>
                        <span className="footer__location-phone">720-779-3556</span>
                    </div>
                    <div className="footer__location">
                        <h3 className="font-medium">Dallas</h3>
                        <span className="footer__location-address">1701 N. Collins Blvd Suite 200<br></br>Richardson, TX 75080</span>
                        <span className="footer__location-phone">972-777-6078</span>
                    </div>
                </div>
                <div className="footer-socials-container">
                    <ul className="footer-socials">
                        <li>
                            <a href="https://www.facebook.com/ProficientEngineers" target='_blank'>
                                <FaFacebook />
                            </a>
                           
                        </li>
                        <li>
                            <a href="https://www.instagram.com/proficient_engineering/" target='_blank'>
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/proficient-engineering-inc-/" target='_blank'>
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/proficienteng" target='_blank'>
                                <FaXTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}