

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-neutral text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="NavlinkNavLink-hover">Branding</a>
                    <a className="NavlinkNavLink-hover">Design</a>
                    <a className="NavlinkNavLink-hover">Marketing</a>
                    <a className="NavlinkNavLink-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="NavlinkNavLink-hover">About us</a>
                    <a className="NavlinkNavLink-hover">Contact</a>
                    <a className="NavlinkNavLink-hover">Jobs</a>
                    <a className="NavlinkNavLink-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="NavlinkNavLink-hover">Terms of use</a>
                    <a className="NavlinkNavLink-hover">Privacy policy</a>
                    <a className="NavlinkNavLink-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;