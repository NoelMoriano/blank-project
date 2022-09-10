import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { CdsLogo } from "../images";
import SectionWrapper from "./SectionWrapper";
import { mediaQuery } from "../styles";
import { Layout } from "antd";
import { LanguageCode, UserAuth } from "../openapi";

interface Props {
  cartId?: string;
  user: UserAuth | null;
  onLogout: () => void;
  translate: Translate;
  isMobile: boolean;
  navigateTo: (url: string) => void;
  navigateToExternalPage: (url: string) => void;
  currentLanguageCode: LanguageCode;
  onSelectLanguage: (languageCode: LanguageCode) => void;
  transparentBackground?: boolean;
  onCancelReservation: () => void;
}

export const Header = ({
  cartId,
  user,
  onLogout,
  translate,
  isMobile,
  navigateTo,
  navigateToExternalPage,
  currentLanguageCode,
  onSelectLanguage,
  transparentBackground = false,
  onCancelReservation,
}: Props): JSX.Element | null => {
  return (
    <LayoutHeaderContainer
      id="wb-header"
      transparentbackground={transparentBackground.toString()}
    >
      <div className="content-header">
        <SectionWrapper padding="0">
          <ContentMenu>
            <div className="item-temp" />
            <div className="wrapper-logo">
              <Logo onClick={() => onCancelReservation()}>
                <CdsLogo />
              </Logo>
            </div>
            <div className="item-menu">
              <Menu
                user={user}
                onLogout={onLogout}
                translate={translate}
                currentLanguageCode={currentLanguageCode}
                isMobile={isMobile}
                onSelectLanguage={onSelectLanguage}
                navigateTo={navigateTo}
                navigateToHelp={navigateToExternalPage}
                cartId={cartId}
              />
            </div>
          </ContentMenu>
        </SectionWrapper>
      </div>
    </LayoutHeaderContainer>
  );
};

interface LayoutHeaderContainerStyled {
  transparentbackground: string;
}

const LayoutHeaderContainer = styled(
  Layout.Header
)<LayoutHeaderContainerStyled>`
  padding: 0;
  height: 4em;
  background: ${({ theme, transparentbackground }) =>
    transparentbackground === "true" ? "transparent" : theme.colors.primary};

  @media print {
    display: none;
  }

  ${mediaQuery.minDesktop} {
    height: 6em;
  }

  .content-header {
    width: 100%;
    height: 100%;

    section {
      height: 100%;
    }
  }
`;

const ContentMenu = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 15% 1fr 15%;

  ${mediaQuery.minDesktop} {
    grid-template-columns: auto 1fr;
  }

  .wrapper-logo {
    display: flex;
    justify-content: center;
  }

  ${mediaQuery.minDesktop} {
    .item-temp {
      display: none;
    }

    .wrapper-logo {
      justify-content: flex-start;
    }

    .item-menu {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 250px;
    height: auto;
    object-fit: contain;
    @media (max-width: 400px) {
      width: 98%;
    }

    ${mediaQuery.minDesktop} {
      width: 240px;
    }
  }
`;
