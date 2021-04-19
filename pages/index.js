import Head from 'next/head';
import React from 'react';
import FooterComponent from '../components/commonComponents/FooterComponent';
import StartPageComponent from '../components/startpageComponent/StartPageComponent';
import StartPageSection from '../components/startpageComponent/StartPageSection';
import StartPageSection2 from '../components/startpageComponent/StartPageSection2';
import StartPageSection3 from '../components/startpageComponent/StartPageSection3';

export default function Index() {
  return (
    <main>
      <StartPageComponent />
      <StartPageSection />
      <StartPageSection2 />
      <StartPageSection3 />
      <FooterComponent />
    </main>
  );
}
