import { Fragment } from "react";
import Header from './global/header';
import Footer from './global/footer';

function Layout(props){
    return(
        <Fragment>
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    )
}

export default Layout;