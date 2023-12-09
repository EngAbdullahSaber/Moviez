import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "./style.scss";

const Privacy = () => {
  return (
    <div>
      <ContentWrapper>
        <section class="about-us">
          <div class="container">
            <h3 className="title">Privacy Policy </h3>
            <p class="infoText">
              Your privacy is very important to us This Policy (together with
              our Terms of Use) forms the basis on which we process any data we
              collect from you or that you provide to us.
            </p>
            <h3 className="title">Information we may collect from you</h3>
            <p class="infoText">
              <span> Information you provide to us.</span> You may provide us
              with information about you by filling out forms on our Service, by
              using the Service, or by contacting us on relevant social media
              pages.
            </p>
            <p class="infoText">
              <span> The information we collect about you.</span> Each time you
              visit our website and use the Service, we may automatically
              collect the following information or the following statistical
              data:
              <br />
            </p>
            <p class="infoText">
              <span>Technical information :</span> including the Internet
              Protocol address used to establish the connection between your
              computer/mobile phone and the Internet, which identifies your
              device/mobile phone, and your login information
            </p>
            <p class="infoText">
              <span>Information about your visit :</span> including the complete
              click-through path of a website page address (URI) to, through and
              from the Service (including date and time); page response time,
              loading errors, and visit time for specific pages
            </p>
          </div>
        </section>
      </ContentWrapper>
    </div>
  );
};

export default Privacy;
