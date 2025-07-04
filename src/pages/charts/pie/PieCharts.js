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
import {
  RadialBar,
  RadialBarChart,
  Legend,
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import ApexCharts from "react-apexcharts";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartMore from "highcharts/highcharts-more";
import VariablePie from "highcharts/modules/variable-pie";
import Widget from "../../../components/Widget/Widget";
import chartsData from "./mock";
import s from "./PieCharts.module.scss";

HighchartMore(Highcharts);
VariablePie(Highcharts);

export default function BarCharts() {

  const [activeTab, setActiveTab] = useState(1);
  const { apexCharts, recharts, highcharts } = chartsData;

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  const radialChartStyle = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

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
                  <div className="headline-2 mb-2">Simple Pie Chart</div>
                  <ApexCharts
                    type="pie"
                    series={apexCharts.simplePie.series}
                    options={apexCharts.simplePie.options}
                  />

                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Simple Donut</div>
                  <ApexCharts
                    type="donut"
                    series={apexCharts.simpleDonut.series}
                    options={apexCharts.simpleDonut.options}
                  />
                </Widget>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Monochrome Pie</div>
                  <ApexCharts
                    type="pie"
                    series={apexCharts.monochromePie.series}
                    options={apexCharts.monochromePie.options}
                  />
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Gradient Donut</div>
                  <ApexCharts
                    type="donut"
                    series={apexCharts.gradientDonut.series}
                    options={apexCharts.gradientDonut.options}
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
                  <div className="headline-2 mb-2">Simple Pie</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart width={400} height={400}>
                        <Pie
                          dataKey="value"
                          isAnimationActive={false}
                          data={recharts.simplePie.data1}
                          cx="50%"
                          cy="50%"
                          outerRadius={140}
                          fill="#4d53e0"
                          label
                        />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Two Level Pie Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart width={400} height={400}>
                        <Pie data={recharts.twoLevelPie.data1} dataKey="value" cx="50%" cy="50%" outerRadius={110} fill="#2F33A7" />
                        <Pie data={recharts.twoLevelPie.data2} dataKey="value" cx="50%" cy="50%" innerRadius={120} outerRadius={140} fill="#41D5E2" label />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Radial Bar Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={20} data={recharts.radialBar.data}>
                        <RadialBar
                          minAngle={15}
                          label={{ position: 'insideStart', fill: '#fff' }}
                          background
                          clockWise
                          dataKey="uv"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={radialChartStyle} />
                      </RadialBarChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Half Circle Pie Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart width={400} height={400}>
                        <Pie
                          dataKey="value"
                          startAngle={180}
                          endAngle={0}
                          data={recharts.halfCircle.data}
                          cx="50%"
                          cy="50%"
                          outerRadius={160}
                          fill="#FFA100"
                          label
                        />
                      </PieChart>
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
                  <div className="headline-2 mb-2">Simple Pie Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.simplePie}
                    />
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Pie Chart with Legend</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.pieWithLegend}
                    />
                  </div>
                </Widget>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Monochrome Pie Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.monochromePie}
                    />
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Half Circle Pie Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.variableRadiusPie}
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

