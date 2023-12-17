import Script from 'next/script';

const Analytics = () => {
  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-WXHKFERECJ' />
      <Script id='G-WXHKFERECJ'>
        {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
   
     gtag('config', 'G-WXHKFERECJ');
    `}
      </Script>
    </>
  );
};

export default Analytics;
