import React, { useState } from 'react';
import {
  Col,
  Row,
  Table,
  Button,
} from "reactstrap";
import Dot from '../../../components/Dot/Dot.js';
import Widget from '../../../components/Widget/Widget.js';

import mock from './mock.js';
import s from './Colors.module.scss';

export default function Colors() {

  const [tableData] = useState(mock.tableData);

  return (
    <div>
      <Row>
        <Col>
          <Row className="mb-4">
            <Col>
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">States Colors</div>
                </div>
                <div className="widget-table-overflow">
                  <Table className="table-striped table-borderless" responsive>
                    <thead>
                      <tr>
                        <th>STATE</th>
                        <th>PREVIEW</th>
                        <th>USAGE EXAMPLE</th>
                        <th>HEX Value</th>
                      </tr>
                    </thead>
                    <tbody>
                    {tableData.map(item => (
                      <tr key={item.id}>
                        <td>{item.label}</td>
                        <td><Dot size="large" color={item.hexValue} style={{marginLeft: "24px"}}/></td>
                        <td><code>{item.classExample}</code></td>
                        <td className={item.classExample}>{item.hexValue}</td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">Typography Colors</div>
                </div>
                <Row className="widget-p-md pt-2">
                  <p className="px-3 mb-4 body-3 muted">Convey meaning through color with a handful of color utility classes.
                    Includes support for styling links with hover states, too. Use <code>text-*</code> class to fill text.</p>
                  <Col xs={12} sm={6} className="mb-3 mb-sm-0">
                    <div className="mb-3">
                      <p className="headline-1 mb-0 text-primary">Headline 1</p>
                    </div>
                    <div className="mb-3">
                      <p className="headline-2 mb-0 text-secondary-red">Headline 2</p>
                    </div>
                    <div>
                      <p className="headline-3 mb-0 text-success">Headline 2</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div className="mb-3">
                      <p className="body-1 mb-0 text-info">Body 1</p>
                    </div>
                    <div className="mb-3">
                      <p className="body-2 mb-0 text-warning">Body 2</p>
                    </div>
                    <div className="mb-3">
                      <p className="body-3 mb-0 text-secondary-cyan">Body 3</p>
                    </div>
                    <div>
                      <p className="label mb-0 text-danger">Label</p>
                    </div>
                  </Col>
                </Row>
              </Widget>
            </Col>
            <Col xs={12} lg={6}>
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">Buttons Example</div>
                </div>
                <Row className="widget-p-md pt-2">
                  <p className="px-3 mb-4 body-3 muted">Use any of the available button classes to quickly create a styled button. Semantically distinguishable beauty.</p>
                  <Col>
                    <div>
                      <Button className="mr-3 mb-4" color="secondary">Default</Button>
                      <Button className="mr-3 mb-4" color="primary">Primary</Button>
                      <Button className="mr-3 mb-4" color="secondary-red">Sec.Red</Button>
                      <Button className="mr-3 mb-4" color="secondary-yellow">Sec.Yellow</Button>
                      <Button className="mr-3 mb-4" color="secondary-cyan">Sec.Cyan</Button>
                      <Button className="mr-3 mb-4" color="success">Success</Button>
                      <Button className="mr-3 mb-4" color="info">Info</Button>
                      <Button className="mr-3 mb-4" color="warning">Warning</Button>
                      <Button className="mr-3 mb-4" color="danger">Danger</Button>
                    </div>
                  </Col>
                </Row>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
