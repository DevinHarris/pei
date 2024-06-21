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
                        <span className="footer__location-address">5335 W. 48th Avenue Suite 103<br></br>Frisco, TX 75033</span>
                        <span className="footer__location-phone">720-779-3556</span>
                    </div>
                    <div className="footer__location">
                        <h3 className="font-medium">Dallas</h3>
                        <span className="footer__location-address">2770 Main St, Suite 123<br></br>Knoxville, TN 37919</span>
                        <span className="footer__location-phone">972-777-6078</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}