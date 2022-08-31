
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>@noahlhote <span><strong/>all rights reserverd 2022©</span></p>
            <p className='icons'>
                <AiFillGithub/>
                <AiFillLinkedin/>
                <AiFillInstagram/>
            </p>
        </div>
    );
}

export default Footer;