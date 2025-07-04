import React, {useState} from "react";
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
import ApexCharts from "react-apexcharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer
} from 'recharts';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartMore from "highcharts/highcharts-more";
import Widget from "../../../components/Widget/Widget";
import s from "./BarCharts.module.scss";
import chartsData from "./mock";

HighchartMore(Highcharts);

export default function BarCharts() {

  const [activeTab, setActiveTab] = useState(1);
  const { apexCharts, recharts, highcharts } = chartsData;

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
                  <div className="headline-2 mb-2">Basic Bar Chart</div>
                  <ApexCharts
                    type="bar"
                    options={apexCharts.basicBar.options}
                    series={apexCharts.basicBar.series}
                  />

                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Stacked Bar</div>
                  <ApexCharts
                    type="bar"
                    options={apexCharts.stackedBar.options}
                    series={apexCharts.stackedBar.series}
                  />
                </Widget>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Bar with Negative Values</div>
                  <ApexCharts
                    type="bar"
                    options={apexCharts.negativeValuesBar.options}
                    series={apexCharts.negativeValuesBar.series}
                  />
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Bar with Markers</div>
                  <ApexCharts
                    type="bar"
                    options={apexCharts.groupedBar.options}
                    series={apexCharts.groupedBar.series}
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
                  <div className="headline-2 mb-2">Simple Bar Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        width={500}
                        height={350}
                        data={recharts.simpleBar.data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#4d53e0" />
                        <Bar dataKey="uv" fill="#6b859e" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Mix Bar Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        width={500}
                        height={350}
                        data={recharts.mixBarChart.data}
                        margin={{
                          top: 20,
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
                        <Bar dataKey="pv" stackId="a" fill="#2F33A7" />
                        <Bar dataKey="amt" stackId="a" fill="#FFC405" />
                        <Bar dataKey="uv" fill="#FF5668" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Stacked Bar Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        width={500}
                        height={350}
                        data={recharts.stackedChart.data}
                        margin={{
                          top: 20,
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
                        <Bar dataKey="pv" stackId="a" fill="#FF4B23" />
                        <Bar dataKey="uv" stackId="a" fill="#C7D0D9" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Positive and Negative Bar Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        width={500}
                        height={350}
                        data={recharts.positiveAndNegativeChart.data}
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
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="pv" fill="#FFA100" />
                        <Bar dataKey="uv" fill="#4d53e0" />
                      </BarChart>
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
                  <div className="headline-2 mb-2">Basic Bar Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.basicBar}
                    />
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Basic Column Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.basicColumn}
                    />
                  </div>
                </Widget>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Chart with Negative Stack</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.negativeStack}
                    />
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Column Range Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.rangeChart}
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
