import Container from "react-bootstrap/esm/Container";
import {AppLayout} from "../../Common/CommonComponents";
import PriorityImage from "./Components/PriorityImage";
import ImageAndDescription from "./Components/ImageAndDescription";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Stack from "react-bootstrap/esm/Stack";

export default function Home() {
    return (
        <AppLayout>
            <Stack gap={3}>
                <Row>
                    <PriorityImage />
                </Row>
                <Row>
                    <Stack gap={3}>
                        <Row>
                            <Col xs={12} md={6} lg={3}>
                                <ImageAndDescription />
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <ImageAndDescription />
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <ImageAndDescription />
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <ImageAndDescription />
                            </Col>
                        </Row>
                    </Stack>
                </Row>
            </Stack>
        </AppLayout>
    )
}