import Yelp from '../assets/yelp-icon.svg';
import Facebook from '../assets/facebook-icon.svg';
import Email from '../assets/email-icon.svg';

export default function Footer({phone, facebook, yelp, email}) {
    return (
        <div className="footer">
            <a rel="noreferrer" href="https://www.google.com/maps/place/Spina+Farms+Pumpkin+Patch/@37.2010264,-121.7386561,17z/data=!4m13!1m7!3m6!1s0x808e25ee0bc2bc05:0xcc4d205d951b10!2sSanta+Teresa+Blvd+%26+Bailey+Ave,+San+Jose,+CA+95037!3b1!8m2!3d37.2010264!4d-121.7364674!3m4!1s0x808e31c7df212347:0x26a33a4cb6e88db6!8m2!3d37.200652!4d-121.735634">
                8820 Santa Teresa Blvd, San Jose, CA 95141
            </a>
            <div className="phone">{phone}</div>
        <div className="social">
            <a href={facebook} aria-label="facebook"><Facebook className="facebook-icon sm-icon" /></a>
            <a href={yelp} aria-label="yelp"><Yelp className="yelp-icon sm-icon" /></a>
            <a href={`mailto:${email}`} aria-label="email"><Email className="email-icon sm-icon"/></a>
        </div>
        </div>
    );
};