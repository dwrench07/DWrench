import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/esm/Image';
import Stack from 'react-bootstrap/esm/Stack';

interface ImageAndDescriptionProps {
    hideTopic?: boolean;
    hideHeading?: boolean;
    hideDescription?: boolean;
    hideDetails?: boolean;
}

export default function ImageAndDescription(props: ImageAndDescriptionProps) {
    return(
        <Container>
            <Row>
                <Col xs={5} md={5} lg={12}>
                    <Image src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" thumbnail />
                </Col>
                <Col xs={7} md={7} lg={12} >
                    <Stack gap={3}>
                        { !props.hideTopic && (<Row>Topic</Row>) }
                        { !props.hideHeading && (<Row>Heading</Row>) }
                        { !props.hideDescription && (<Row>Short description</Row>) }
                        { !props.hideDetails && (<Row>By | date time</Row>) }
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}
