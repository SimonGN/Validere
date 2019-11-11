import Head from "next/head";

const Meta = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Validere, validación educativa"/>

        <title>Validere</title>
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: "Pressura;
          src: url(/static/fonts/GT-Pressura-Pro-Mono-Regular.ttf) format("truetype");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "Panama;
          src: url(/static/fonts/PanamaRegular.ttf) format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        body {
          margin: 0;
          padding: 0;
          max-width: 100%;
        }

        .* {
          box-sizing: border-box;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Meta;
