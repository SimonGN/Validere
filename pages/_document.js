import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import { lngFromReq } from "next-i18next/dist/commonjs/utils";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const lng = lngFromReq(ctx.req);
    const additionalProps = {
      lng
    };

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(<App {...props} lang={lng} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        ...additionalProps,
        styles: (
          <html>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </html>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
