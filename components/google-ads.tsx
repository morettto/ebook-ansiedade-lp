import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleAdsPixel = () => (
  <Helmet>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11478302251"></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11478302251');
      `}
    </script>
  </Helmet>
);

export default GoogleAdsPixel;