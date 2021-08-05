import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-relative-parent-imports
// import Sidebar from '../components/Sidebar';
// eslint-disable-next-line import/no-relative-parent-imports
import Header from './Header';
import Sidebar from './Sidebar';

export const MainContentWrap = styled.div`
  // margin-left: 260px;
  // width: calc(100% - 260px);
  vertical-align: top;
  flex: 1 1 auto;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
    padding-top: 80px;
  }
`;

const Layout = ({ children }: { children: any }) => (
  <div id='main-wrapper'>
    <MainContentWrap>
      <Header />
      <Sidebar />
      {children}
    </MainContentWrap>
  </div>
);

export default Layout;
