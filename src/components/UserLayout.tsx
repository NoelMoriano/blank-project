import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

const UserLayout = ({ children }: { children: React.ReactNode }) => (
  <LayoutStyled>
      <Content>
      {children}
      </Content>
  </LayoutStyled>
);

export default UserLayout;

const LayoutStyled = styled(Layout)`
  background: ${({ theme }) => theme.colors.primary};
  justify-content: space-between;
  min-height: 100vh;
  height: auto;

  .item-layout {
    padding: 0;
    background: none;
  }

  .ant-layout-header {
    padding: 0;
  }
`;

const Content = styled.main`
  .content-wrapper {
    width: 100%;
  }
`;
