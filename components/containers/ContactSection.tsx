'use client'
import Image from "next/image";
import Link from "next/link";
import thumb from "@/public/images/contact/thumb.png";
import mail from "@/public/images/contact/mail.png";
import phone from "@/public/images/contact/phone.png";
import location from "@/public/images/contact/location.png";
// import {FormEvent, useState} from "react";

const ContactSection = () => {

//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [phonenumber, setPhoneNumber] = useState<string>('');
//   const [query, setQuery] = useState<string>('');
//   const [isLoading, setIsLoading] = useState<boolean>(false)

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true)
//     try{
//       let form = {
//           name,
//           email,
//           phonenumber,
//           query
//       }

//       const rawResponse = await fetch('/api/contact', {
//           method: 'POST',
//           body: JSON.stringify(form),
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//           },
          
//       });

//       if (rawResponse.ok) {
//         const data = await rawResponse.json();
//         // Reset the form fields
//         setQuery('')
//         setPhoneNumber('')
//         setName('')
//         setEmail('')
//       } 
//       else {
//         console.error('Message Sending Failed.', rawResponse.statusText);
//       }
//   } 
//   catch (error) {
//     console.error('Error:', error);
//   } 
//   finally {
//     setIsLoading(false)
//   }

    
// }

  return (
    <section className="section m-contact fade-wrapper">
      <div className="container">
        <div className="row gaper section pt-0">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="m-contact__single fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" priority />
              </div>
              <div className="content">
                <h3>Email</h3>
                <p>
                  <Link href="mailto:contact@aigomatikglobal.com">
                  contact@aigomatikglobal.com
                  </Link>
                </p>
                <p>
                  <Link href="mailto:admin@aigomatikglobal.com">
                  admin@aigomatikglobal.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="m-contact__single fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" priority />
              </div>
              <div className="content">
                <h3>Phone</h3>
                <p>
                  <Link href="tel:+91 99851 33383">+91 99851 33383</Link>
                </p>
                {/* <p>
                  <Link href="tel:219-555-0114">(219) 555-0114</Link>
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="m-contact__single fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" priority />
              </div>
              <div className="content">
                <h3>Location</h3>
                <p>
                  <Link href="https://maps.app.goo.gl/azVsUyEPxtiycRsm6" target="_blank">
                  Shyamnagar Road, Satgachi, South DumDum, Kolkata, India, West Bengal, Pin: 700055
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="m-contact__form">
              <h3 className="title-animation fw-7 text-white text-uppercase mt-12">
                Get In Touch With AIGOMATIK GLOBAL
              </h3>
              {/* <form onSubmit={handleSubmit}> */}
              <form >
                <div className="input-single">
                  <input
                    type="text"
                    name="c-Name"
                    // value={name}
                    // onChange={e => setName(e.target.value)}
                    id="cName"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="input-single">
                  <input
                    type="email"
                    name="c-Email"
                    // value={email} 
                    // onChange={e => setEmail(e.target.value)}
                    id="cEmail"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="input-single">
                  <input
                    type="text"
                    name="c-PhoneNumber"
                    // value={phonenumber} 
                    // onChange={e => setPhoneNumber(e.target.value)}
                    id="cnumber"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="input-single">
                  <textarea
                    name="c-Query"
                    id="cQuery"
                    // value={query} 
                    // onChange={e => setQuery(e.target.value)}
                    cols={30}
                    rows={10}
                    placeholder="Type A Message"
                  ></textarea>
                </div>
                <div className="section__content-cta text-center">
                  {/* <button type="submit" className="btn btn--primary" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit Now'}
                  </button> */}
                   <button type="submit" className="btn btn--primary">
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div className="m-contact__thumb reveal-img parallax-img">
              <Image src={thumb} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
