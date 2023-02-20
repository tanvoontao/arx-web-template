import Head from 'next/head';

export default function Metatags({
    author = 'ARx Media',
    title = 'ARx Official Website',
    description = 'ARx specializing in building web and mobile applications, integrated business solutions, and the Internet of Things (IoT) to help businesses increasing the efficiency of operations and ultimately optimizing cost.',
    image = 'https://arxmedia.co/wp-content/uploads/2021/05/arx-logo-2-10.png',
    keywords = 'ARx Media, AR, VR, web, mobile, apps, IoT, business solutions, cutting-edge'
}) {
    return (
        <Head>
            <title>{title}</title>

            {/* <meta charset="UTF-8" /> */}

            <meta name="keyword" content={keywords} />
            <meta name="author" content={author} />
            <meta name="description" content={description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <meta property="og:locale" content="en_US" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />

        </Head>
    );
}



