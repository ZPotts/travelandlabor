import { Fragment } from "react";
import Head from './global/head';
import Header from './global/header';
import Footer from './global/footer';

function Layout(props){
    return(
        <Fragment>
            <Head />
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    )
}

export default Layout;