import Head from 'next/head'
export default function Header(props) {
    return (
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="renderer" content="webkit" />
            <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="Author" content="ninamoka" />
            <meta name="keywords" content="ninamoka" />
            <meta name="description" content="ninamoka" />
            {props.children}
        </Head>
    )
}