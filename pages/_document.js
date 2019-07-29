import Document, { Head, Main, NextScript } from 'next/document'

export default class Limkokwing extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/static/css/style.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}