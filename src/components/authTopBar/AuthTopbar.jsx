import "./authTopbar.css";
import { BsGoogle, BsApple } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

const AuthTopbar = ({ text, link, linkTo, setClose, close, setAuthPage }) => {
  return (
    <div className="topbar">
      <div>
        <RiCloseFill  className="closeIcon" onClick={() => setClose(close)} size={30} />
      </div>
      <p className="details">
        Save searches, save your fav properties, and more.
      </p>
      <p className="authlink">
        {text}
        <span className="link-style" onClick={() => setAuthPage(linkTo)}>
          {link}
        </span>
      </p>
      <section className="thirdPartyAuth">
        <div>
          <BsGoogle size={17} />
          <span>SIGN IN WITH GOOGLE</span>
        </div>
        <div>
          <BsApple size={17} />
          <span>SIGN IN WITH APPLE</span>
        </div>
      </section>
      <p>We'll never post anything without your permission</p>
      <hr />
    </div>
  );
};

export default AuthTopbar;
