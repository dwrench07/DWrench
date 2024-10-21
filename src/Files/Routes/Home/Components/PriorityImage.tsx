import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/esm/Image';
import Stack from 'react-bootstrap/esm/Stack';

export default function PriorityImage(){
    return(
        <Container>
            <Row>
                <Col xs={12} lg={5}>
                    <Image src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" thumbnail />
                </Col>
                <Col xs={12} lg={7} >
                    <Stack gap={3}>
                        <Row>Topic</Row>
                        <Row>Heading</Row>
                        <Row>Short description</Row>
                        <Row>By | date time</Row>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}
