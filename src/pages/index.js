import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, qualifications } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)

  return (
    <PageLayout>
      <SEO title="Dynamics 365 Freelancer" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          width="150"
          height="150"
          fluid
          src={`../../icons/anton.jpeg`}
          alt={"Dynamics 365 Freelancer Anton Bibikov"}
        />
        {unemployed && (
          <p className="mt-2">
            <b>Microsoft Dynamics 365 Consultant, Technical Consultant, Architect </b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "36px",
              color: "black",
            }}
          >
            <span >{firstName}</span>&nbsp;
            <span>{lastName}</span>
          </h1>
          <p>

            {qualifications.map((attr, i) => (
              <span key={attr}>
                &nbsp;<li style={{listStyle: "none"}}>{attr}</li>&nbsp;
                {/* {i < qualifications.length - 1 && <></>} */}
              </span>
            ))}
            {/* <i>
              {occupation} by day,&nbsp;
              {dark ? `Imperial enforcer by night` : `Rebel scum by night`}
            </i> */}
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
