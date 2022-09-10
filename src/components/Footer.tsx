import React, { memo } from "react";
import { CdsLogo2, CdsLogo3 } from "../images";
import styled from "styled-components";
import { portalUrl } from "../config";
import Image from "next/image";

interface Props {
  visibleDivisions?: boolean;
  navigateToExternalPage: (url: string) => void;
}

interface SitemapLink {
  url: string;
  label: string;
}

const Footer = ({
  visibleDivisions = false,
  navigateToExternalPage,
}: Props): JSX.Element => {
  const sitemapLinks: SitemapLink[] = [
    {
      url: `${portalUrl}/promociones/destinos`,
      label: "Beneficios",
    },
    {
      url: `${portalUrl}/destinos`,
      label: "Destinos",
    },

  ];

  return (
    <Container>
      {visibleDivisions && (
        <Divisions data-testid="footer-division-test">
          <div className="footer-divisions-content">
            <Division>
              <Image
                loading="lazy"
                src={CdsLogo3}
                alt="Cruz del sur"
                width={200}
                height={40}
                onClick={() =>
                  navigateToExternalPage(
                    "http://transportepersonal.cruzdelsur.com.pe/"
                  )
                }
              />
            </Division>
            <Division>
              <Image
                loading="lazy"
                src={CdsLogo2}
                alt="Cruz del sur - cargo"
                className="img-cargo"
                width={150}
                height={61}
                onClick={() =>
                  navigateToExternalPage("https://www.cruzdelsurcargo.com.pe/")
                }
              />
            </Division>
          </div>
        </Divisions>
      )}
      <Sitemap>
        <ul>
          {sitemapLinks.map((sitemapLink, index) => (
            <li key={index}>
              <a href={sitemapLink.url} target="_blank" rel="noreferrer">
                {sitemapLink.label}
              </a>
            </li>
          ))}
        </ul>
      </Sitemap>
    </Container>
  );
};

export default memo(Footer);

const Container = styled.footer`
  flex: 0 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};

  @media print {
    display: none;
  }
`;

const Divisions = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  .footer-divisions-content {
    width: 100%;
    margin: auto;
    display: grid;
    justify-items: center;
    grid-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const Division = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 200px;

  img {
    height: auto;
  }

  .img-cargo {
    margin: auto;
  }
`;

const Sitemap = styled.div`
  width: 100%;
  padding: 1.2em;

  ul {
    display: flex;
    padding: 0;
    margin: 0;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;
      line-height: 15px;

  

      text-align: center;
      margin: 0;
      padding: 0 1rem;
      border-left: none;
      border-right: 1px solid ${({ theme }) => theme.colors.primary};

      &:last-child {
        border-right: none;
      }

      a {
        text-decoration: none;
        line-height: 1.1428571428571428;
        letter-spacing: normal;
        text-transform: none;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 0.9rem;

      }
    }
  }
`;
