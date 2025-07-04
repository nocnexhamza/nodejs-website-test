import React, { useState } from "react";
import classnames from "classnames";
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import ApexCharts from "react-apexcharts";
import Widget from "../../../components/Widget/Widget";
import chartsData from "./mock";
import s from "./LineCharts.module.scss";

export default function LineCharts() {

  const [activeTab, setActiveTab] = useState(1);
  const {apexCharts, recharts, highcharts} = chartsData;

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  return (
    <Widget className="charts-tabs-widget" style={{overflow: "auto"}}>
      <Nav tabs className="mb-5">
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === 1})}
            onClick={() => toggleTab(1)}
          >
            <div className="headline-3">Apex Charts</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === 2})}
            onClick={() => toggleTab(2)}
          >
            <div className="headline-3">Recharts</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === 3})}
            onClick={() => toggleTab(3)}
          >
            <div className="headline-3">Highcharts</div>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} >
        <TabPane tabId={1}>
          <Col>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Basic Line Chart</div>
                  <ApexCharts
                    series={apexCharts.basicLine.series}
                    options={apexCharts.basicLine.options}
                  />
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Line Charts With Labels</div>
                  <ApexCharts
                    series={apexCharts.basicWithLabels.series}
                    options={apexCharts.basicWithLabels.options}
                  />
                </Widget>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Line Column Mixed Chart</div>
                  <ApexCharts
                    series={apexCharts.lineColumn.series}
                    options={apexCharts.lineColumn.options}
                    type="area"
                  />
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Line Area Mixed Chart</div>
                  <ApexCharts
                    series={apexCharts.lineArea.series}
                    options={apexCharts.lineArea.options}
                    type="area"
                  />
                </Widget>
              </Col>
            </Row>
          </Col>
        </TabPane>
        <TabPane tabId={2}>
          <Col>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Simple Line Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={recharts.simpleLineChart.data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#2F33A7" activeDot={{ r: 10 }} />
                        <Line type="monotone" dataKey="uv" stroke="#FF4B23" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Stacked Area Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        width={500}
                        height={400}
                        data={recharts.stackedAreaChart.data}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#FFC405" />
                        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#43BC13" />
                        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#4d53e0" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Dashed Line Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={recharts.dashedLineChart.data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line dataKey="pv" stroke="#FF5668" strokeDasharray="4 4" />
                        <Line dataKey="uv" stroke="#00A5FF" strokeDasharray="3 3" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Vertical Line Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        layout="vertical"
                        width={500}
                        height={300}
                        data={recharts.verticalLineChart.data}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Line dataKey="uv" stroke="#2F33A7" />
                        <Line dataKey="pv" stroke="#43BC13" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
            </Row>
          </Col>
        </TabPane>
        <TabPane tabId={3}>
          <Col>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Basic Line Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.basicLine}
                    />
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Basic Column Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.timeSeries}
                    />
                  </div>
                </Widget>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Irregular Intervals Line Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.timeData}
                    />
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Data Labels Line Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.dataLabels}
                    />
                  </div>
                </Widget>
              </Col>
            </Row>
          </Col>
        </TabPane>
      </TabContent>
    </Widget>
  )
}
