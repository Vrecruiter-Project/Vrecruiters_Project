import React from 'react'
import PageComponent from '../../../../../components/pageComponent/PageComponent';
import WebFrontPage from './Components/WebFrontPage';
import WebDevServices from './Components/WebDevServices';
import GetInTouchService from '../../../../../components/pageComponent/GetInTouchService';
import CompanyCarousel from '../../recruitment/companies/Components/CompanyCarousel';

const WebDevelopment = () => {
  return (
    <>
    <PageComponent>
      <WebFrontPage/>
      <WebDevServices/>
      <CompanyCarousel/>
    <GetInTouchService/>
    </PageComponent>
    </>
  );
};

export default WebDevelopment;
