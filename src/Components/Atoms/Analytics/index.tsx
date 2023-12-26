import Script from 'next/script';

const Analytics = () => {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      />
      <Script strategy='lazyOnload' id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
   
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
    </>
  );
};

export default Analytics;
