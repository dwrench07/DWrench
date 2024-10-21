import Container from 'react-bootstrap/Container'
import Header from '../Header'
import Footer from '../Footer'
import React, {ReactNode} from 'react'

interface AppLayoutProps {
    children: React.ReactNode | React.ReactNode[];
}

/** ***** Class names start ***** */
const app_layout_container = "app-layout-container p-0"; 
/** ===== Class names end ===== */

export default function AppLayout({children}: AppLayoutProps): JSX.Element {
    return (
        <Container fluid className={app_layout_container}>
            <Header />
            <Container fluid>
                { React.Children.map(children, (child, index) => (
                    <div key={index} className="child-wrapper">
                    {child}
                    </div>
                )) }
            </Container>
            <Footer />
        </Container>
    )
}