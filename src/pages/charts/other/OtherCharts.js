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
  ComposedChart,
  ScatterChart,
  Scatter,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Treemap,
  Bar,
  Area,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartMore from "highcharts/highcharts-more";
import treemap from "highcharts/modules/treemap";
import heatmap from "highcharts/modules/heatmap";
import dumbbell from "highcharts/modules/dumbbell";
import sankey from "highcharts/modules/sankey";
import exporting from "highcharts/modules/exporting";
import eData from "highcharts/modules/export-data";
import ApexCharts from "react-apexcharts";
import Widget from "../../../components/Widget/Widget";
import s from "./OtherCharts.module.scss";
import chartsData from "./mock";

dumbbell(Highcharts);
highchartMore(Highcharts);
sankey(Highcharts);
exporting(Highcharts);
eData(Highcharts);
treemap(Highcharts);
heatmap(Highcharts);

export default function OtherCharts() {

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
                  <div className="headline-2 mb-2">Treemap Chart</div>
                  <ApexCharts
                    type="treemap"
                    series={apexCharts.treemapChart.series}
                    options={apexCharts.treemapChart.options}
                  />
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Heatmap Chart</div>
                  <ApexCharts
                    type="heatmap"
                    series={apexCharts.heatmapChart.series}
                    options={apexCharts.heatmapChart.options}
                  />
                </Widget>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Radar Chart</div>
                  <ApexCharts
                    type="radar"
                    series={apexCharts.radarChart.series}
                    options={apexCharts.radarChart.options}
                  />
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-2">Scatter Chart</div>
                  <ApexCharts
                    type="scatter"
                    series={apexCharts.scatterChart.series}
                    options={apexCharts.scatterChart.options}
                  />
                </Widget>
              </Col>
            </Row>
          </Col>
        </TabPane>
        <TabPane tabId={2}>
          <Col>
            <Row className="mb-5">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Line Bar Area Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart
                        width={500}
                        height={400}
                        data={recharts.composedChart.data}
                        margin={{
                          top: 20,
                          right: 20,
                          bottom: 20,
                          left: 20,
                        }}
                      >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#C7D0D9" stroke="#6b859e" />
                        <Bar dataKey="pv" barSize={30} fill="#4d53e0" />
                        <Line type="monotone" dataKey="uv" stroke="#FFA100" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Radar Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={recharts.radarChart.data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name="John" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
                        <Radar name="Lily" dataKey="B" stroke="#FF5668" fill="#FF5668" fillOpacity={0.5} />
                        <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Scatter Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart
                        width={500}
                        height={400}
                        margin={{
                          top: 20,
                          right: 20,
                          bottom: 20,
                          left: 20,
                        }}
                      >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                        <YAxis yAxisId="left" type="number" dataKey="y" name="weight" unit="kg" stroke="#8884d8" />
                        <YAxis
                          yAxisId="right"
                          type="number"
                          dataKey="y"
                          name="weight"
                          unit="kg"
                          orientation="right"
                          stroke="#FFC405"
                        />
                        <Tooltip cursor={{ strokeDasharray: '6 3' }} />
                        <Scatter yAxisId="left" name="A school" data={recharts.scatterChart.data1} fill="#4d53e0" />
                        <Scatter yAxisId="right" name="A school" data={recharts.scatterChart.data2} fill="#FFA100" />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Treemap Chart</div>
                  <div className={s.rechartsBlock}>
                    <ResponsiveContainer width="100%" height="100%">
                      <Treemap width={400} height={200} data={recharts.treemapChart.data} dataKey="size" ratio={4 / 3} stroke="#fff" fill="#4d53e0" />
                    </ResponsiveContainer>
                  </div>
                </Widget>
              </Col>
            </Row>
          </Col>
        </TabPane>
        <TabPane tabId={3}>
          <Col>
            <Row className="mb-5">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Packed Bubble Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.packedBubble}
                    />
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Dumbbell Series Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.dumbbell}
                    />
                  </div>
                </Widget>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Sankey Diagram Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.sankey}
                    />
                  </div>
                </Widget>
              </Col>
              <Col xs={12} lg={6}>
                <Widget>
                  <div className="headline-2 mb-4">Treemap Chart</div>
                  <div className={s.rechartsBlock}>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={highcharts.treemap}
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


