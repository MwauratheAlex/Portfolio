import { FaGithub, FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return (
      <nav className="flex justify-between py-4 font-medium text-xl">
        <div className="font-bold">mbugua dev</div>
        <div>
          <ul className="flex gap-8">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-8">
            <li><a href=""><FaGithub/></a></li>
            <li><a href=""><FaLinkedin/></a></li>
            <li><a href=""><FaXTwitter/></a></li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;