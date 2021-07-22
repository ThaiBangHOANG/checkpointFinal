import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../Components/AboutContactTitle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Contact"} span={"Contact"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="mapLocation"
            src="https://maps.google.com/maps?q=mons%20en%20baroeul&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"Fixed: 03.76.05.84.87"}
            text2={"Mobil: 06.36.16.83.67"}
            title={"Phone"}
          />
          <a href="mailto: thaibang1983hn@gmail.com" className="gmail">
            <ContactItem
              icon={email}
              text1={"thaibang1983hn@gmail.com"}
              text2={""}
              title={"Email"}
            />
          </a>
          <ContactItem
            icon={location}
            text1={"59370, Mons en Baroeul,"}
            text2={"Hauts de France"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
