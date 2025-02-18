import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/offcanvas-logo.png";

type OffcanvasProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const OffcanvasInfo = ({ isOpen, setIsOpen }: OffcanvasProps) => {
  return (
    <>
      <div
        className={"offcanvas-info" + (isOpen ? " offcanvas-info-active" : " ")}
      >
        <div className="offcanvas-info__inner">
          <div className="offcanvas-info__intro">
            <div className="offcanvas-info__logo">
              <Link href="/">
                <Image src={logo} alt="Image" priority />
              </Link>
            </div>
            <h4>Complex Solutions Made Simple</h4>
          </div>
          <div className="offcanvas-info__content">
            <h5>Contact Us</h5>
            <ul>
              <li>
                <Link href="mailto:contact@aigomatikglobal.com">contact@aigomatikglobal.com</Link>
              </li>
              <li>
                <Link href="tel:+91 99851 33383">+91 99851 33383</Link>
              </li>
              <li>
                <Link
                  href=""
                  target="_blank"
                >
                  Shyamnagar, South Dumdum, Kolkata, West Bengal, Pin: 700055
                </Link>
              </li>
            </ul>
          </div>
          <div className="offcanvas-info__form">
            <h5>Subscribe to newsletter</h5>
            <form action="#" method="post" autoComplete="off">
              <div className="subscribe-form">
                <input
                  type="email"
                  name="subscribe-newsletter"
                  id="subscribeNewsletter"
                  placeholder="Email"
                  required
                />
                <button
                  type="submit"
                  aria-label="subscribe newsletter"
                  title="subscribe newsletter"
                >
                  <i className="material-symbols-outlined">send</i>
                </button>
              </div>
            </form>
          </div>
          <div className="offcanvas-info__footer">
            <p className="tertiary-text">Follow Us :</p>
            <div className="social">
              <Link
                href="https://www.facebook.com/AigomatikglobalOfficial/"
                target="_blank"
                aria-label="share us on facebook"
                title="facebook"
              >
                <i className="bi bi-facebook"></i>
              </Link>
              <Link
                href="https://www.twitter.com/"
                target="_blank"
                aria-label="share us on twitter"
                title="twitter"
              >
                <i className="bi bi-twitter"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/company/aigomatikglobalofficial/"
                target="_blank"
                aria-label="share us on pinterest"
                title="linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blahttps://www.instagram.com/aigomatik_global?igsh=MTR4NXBzNXp0aXhuZQ==nk"
                aria-label="share us on instagram"
                title="instagram"
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link
                href="https://www.youtube.com/@aigomatikglobalofficial/"
                target="_blank"
                aria-label="share us on Youtube"
                title="youtube"
              >
                <i className="bi bi-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="close-offcanvas-info"
          aria-label="close offcanvas info"
          onClick={() => setIsOpen(false)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      <div
        className={
          "offcanvas-info-backdrop " +
          (isOpen ? " offcanvas-info-backdrop-active" : " ")
        }
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default OffcanvasInfo;
