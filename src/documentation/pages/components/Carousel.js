import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CustomCarousel from "../../../components/CustomCarousel/CustomCarousel";
import mock from "../../../pages/uielements/carousel/mock";

class Buttons extends Component {
    render() {
        const { images1 } = mock;

        return (
            <Row>
                <Col md={10}>
                    <Breadcrumb>
                        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
                        <BreadcrumbItem>Documentation</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem active>Carousel</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col md={10} className="my-2">
                    <h2>Carousel</h2>
                    <p className="mb-lg">A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>
                    <SyntaxHighlighter language='javascript' style={tomorrow}>
                        {"import { UncontrolledCarousel} from 'reactstrap';"}
                    </SyntaxHighlighter>
                    <Col className="my-2">
                        <CustomCarousel
                            data={images1}
                            position="static"
                            variant="progress"
                        >
                        </CustomCarousel>
                    </Col>
                    <SyntaxHighlighter language='javascript' style={tomorrow}>{'const carouselItems = [\n' +
                    '  { src: firstSlide, caption: \'\' },\n' +
                    '  { src: secondSlide, caption: \'\' },\n' +
                    '  { src: thirdSlide, caption: \'\' }\n' +
                    '];\n' +
                    '\n' +
                    '<UncontrolledCarousel captionTex={null} items={carouselItems} />'}
                    </SyntaxHighlighter>
                    <p className="p-1">For more examples please refer to <a href="https://reactstrap.github.io/components/carousel/" target="_blank" rel="noopener noreferrer">Reactstrap Carousel</a></p>
                </Col>
            </Row>
        );
    }
}

export default Buttons;
