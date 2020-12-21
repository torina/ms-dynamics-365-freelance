import React from "react"
import { graphql } from "gatsby"
// import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import CookieConsent from 'react-cookie-consent';

export default ({ data }) => {
  const { unemployed, firstName, lastName, qualifications } = data.site.siteMetadata
  // const { dark } = useContext(ThemeContext)

  return (
    <PageLayout>
      <SEO title="Dynamics 365 Freelancer" />
      <Container className="text-center" fluid>
        <Image
          width="120"
          height="130"
          fluid
          src={`../../icons/anton.jpeg`}
          alt={"Dynamics 365 Freelancer Anton Bibikov"}
        />
        {unemployed && (
          <p className="mt-2" style={{ fontSize: "18px", fontWeight: "bold" }} >
            <span>{firstName}</span>&nbsp;
            <span>{lastName}</span>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "19px",
              color: "black"
            }}
          >
            <b>Microsoft Dynamics 365 Consultant, Technical Consultant, Architect</b>
          </h1>
          <p>
            <div className="titleblue">Services: </div>
            {qualifications.map((attr, i) => (
              <span key={attr} className="maintext ">
                &nbsp;<li>{attr}</li>&nbsp;
                {/* {i < qualifications.length - 1 && <></>} */}
              </span>
            ))}
            <div className="titleblue" style={{ paddingTop: "5px" }}>Location: </div>
            <div className="maintext" style={{ paddingTop: "13px" }}>Munich, Germany</div>
            <br></br>
          </p>


        </Container>



        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://www.linkedin.com/in/antonbkv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="mailto:anton@dynamics365freelance.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
        </div>
        {/* <CookieConsent
          location="bottom"
          buttonText="OK"
          // cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        ><span style={{color: "#000000" }}>
          Ich akzeptiere.{" "}</span>
        </CookieConsent> */}
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        qualifications
      }
    }
  }
`
