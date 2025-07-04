import Highcharts from "highcharts";

const generateData = (hours = 8, min = 0, max = 90) => {
  const result = []
  for (let i = 0; i < hours; i ++) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min
    result.push(num)
  }
  return result;
}

export default {
  apexCharts: {
    treemapChart: {
      series: [
        {
          data: [
            {
              x: 'New York',
              y: 218
            },
            {
              x: 'London',
              y: 149
            },
            {
              x: 'Minsk',
              y: 184
            },
            {
              x: 'Tel-Aviv',
              y: 55
            },
            {
              x: 'Paris',
              y: 84
            },
            {
              x: 'Beijing',
              y: 31
            },
            {
              x: 'Moscow',
              y: 70
            },
            {
              x: 'Bombay',
              y: 30
            },
            {
              x: 'Melbourne',
              y: 44
            },
            {
              x: 'Rome',
              y: 68
            },
            {
              x: 'Cairo',
              y: 28
            },
            {
              x: 'Budapest',
              y: 19
            },
            {
              x: 'Warsaw',
              y: 29
            }
          ]
        }
      ],
      options: {
        legend: {
          show: false,
        },
        chart: {
          height: 350,
          type: 'treemap',
          toolbar: {
            show: false
          },
        },
        colors: ['#2F33A7'],
      },
    },
    scatterChart: {
      series: [{
        name: "React",
        data: [
          [16, 5], [21, 2], [24, 3], [19, 2], [10, 1], [13, 3], [10, 7], [10, 15], [10, 8], [16, 18]]
      },{
        name: "Angular",
        data: [
          [36, 13], [1, 11], [5, 8], [9, 17], [12, 4], [3, 12], [15, 14], [17, 9], [1, 13], [2, 12]]
      },{
        name: "Vue",
        data: [
          [21, 3], [23, 3], [24, 3], [29, 3], [21, 20], [23, 2], [10, 3], [28, 4], [27, 16], [16, 4], [13, 0]]
      }],
      options: {
        chart: {
          height: 350,
          type: 'scatter',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true,
            type: 'xy'
          },
        },
        colors: ['#4d53e0', '#FF5668', '#43BC13'],
        markers: {
          size: 14,
        },
        xaxis: {
          tickAmount: 7,
        },
        yaxis: {
          tickAmount: 6,
        }
      },
    },
    heatmapChart: {
      series: [{
        name: 'Monday',
        data: generateData(),
      },
        {
          name: 'Tuesday',
          data: generateData(),
        },
        {
          name: 'Wednesday',
          data: generateData(),
        },
        {
          name: 'Thursday',
          data: generateData(),
        },
        {
          name: 'Friday',
          data: generateData(),
        },
        {
          name: 'Saturday',
          data: generateData(),
        },
        {
          name: 'Sunday',
          data: generateData(),
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
          toolbar: {
            show: false
          },
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: undefined,
          align: 'center'
        },
        colors: ['#FFA100'],
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8]
        }
      },
    },
    radarChart: {
      series: [{
        name: 'Tasks',
        data: [80, 50, 30, 40, 100, 20],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
          toolbar: {
            show: false
          },
        },
        colors: ["#FF4B23"],
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
      },
    },
  },
  recharts: {
    composedChart: {
      data: [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590,
        },
        {
          name: 'Page C',
          uv: 1397,
          pv: 1098,
          amt: 989,
          cnt: 350,
        },
        {
          name: 'Page D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
          cnt: 480,
        },
        {
          name: 'Page E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
          cnt: 460,
        },
        {
          name: 'Page F',
          uv: 1400,
          pv: 680,
          amt: 1700,
          cnt: 380,
        },
      ],
    },
    treemapChart: {
      data: [
        {
          name: 'axis',
          children: [
            { name: 'Axes', size: 1302 },
            { name: 'Axis', size: 24593 },
            { name: 'AxisGridLine', size: 652 },
            { name: 'AxisLabel', size: 636 },
            { name: 'CartesianAxes', size: 6703 },
          ],
        },
        {
          name: 'controls',
          children: [
            { name: 'AnchorControl', size: 2138 },
            { name: 'ClickControl', size: 3824 },
            { name: 'Control', size: 1353 },
            { name: 'ControlList', size: 4665 },
            { name: 'DragControl', size: 2649 },
            { name: 'ExpandControl', size: 2832 },
            { name: 'HoverControl', size: 4896 },
            { name: 'IControl', size: 763 },
            { name: 'PanZoomControl', size: 5222 },
            { name: 'SelectionControl', size: 7862 },
            { name: 'TooltipControl', size: 8435 },
          ],
        },
        {
          name: 'data',
          children: [
            { name: 'Data', size: 20544 },
            { name: 'DataList', size: 19788 },
            { name: 'DataSprite', size: 10349 },
            { name: 'EdgeSprite', size: 3301 },
            { name: 'NodeSprite', size: 19382 },
            {
              name: 'render',
              children: [
                { name: 'ArrowType', size: 698 },
                { name: 'EdgeRenderer', size: 5569 },
                { name: 'IRenderer', size: 353 },
                { name: 'ShapeRenderer', size: 2247 },
              ],
            },
            { name: 'ScaleBinding', size: 11275 },
            { name: 'Tree', size: 7147 },
            { name: 'TreeBuilder', size: 9930 },
          ],
        },
        {
          name: 'events',
          children: [
            { name: 'DataEvent', size: 7313 },
            { name: 'SelectionEvent', size: 6880 },
            { name: 'TooltipEvent', size: 3701 },
            { name: 'VisualizationEvent', size: 2117 },
          ],
        },
        {
          name: 'legend',
          children: [
            { name: 'Legend', size: 20859 },
            { name: 'LegendItem', size: 4614 },
            { name: 'LegendRange', size: 10530 },
          ],
        },
        {
          name: 'operator',
          children: [
            {
              name: 'distortion',
              children: [
                { name: 'BifocalDistortion', size: 4461 },
                { name: 'Distortion', size: 6314 },
                { name: 'FisheyeDistortion', size: 3444 },
              ],
            },
            {
              name: 'encoder',
              children: [
                { name: 'ColorEncoder', size: 3179 },
                { name: 'Encoder', size: 4060 },
                { name: 'PropertyEncoder', size: 4138 },
                { name: 'ShapeEncoder', size: 1690 },
                { name: 'SizeEncoder', size: 1830 },
              ],
            },
            {
              name: 'filter',
              children: [
                { name: 'FisheyeTreeFilter', size: 5219 },
                { name: 'GraphDistanceFilter', size: 3165 },
                { name: 'VisibilityFilter', size: 3509 },
              ],
            },
            { name: 'IOperator', size: 1286 },
            {
              name: 'label',
              children: [
                { name: 'Labeler', size: 9956 },
                { name: 'RadialLabeler', size: 3899 },
                { name: 'StackedAreaLabeler', size: 3202 },
              ],
            },
            {
              name: 'layout',
              children: [
                { name: 'AxisLayout', size: 6725 },
                { name: 'BundledEdgeRouter', size: 3727 },
                { name: 'CircleLayout', size: 9317 },
                { name: 'CirclePackingLayout', size: 12003 },
                { name: 'DendrogramLayout', size: 4853 },
                { name: 'ForceDirectedLayout', size: 8411 },
                { name: 'IcicleTreeLayout', size: 4864 },
                { name: 'IndentedTreeLayout', size: 3174 },
                { name: 'Layout', size: 7881 },
                { name: 'NodeLinkTreeLayout', size: 12870 },
                { name: 'PieLayout', size: 2728 },
                { name: 'RadialTreeLayout', size: 12348 },
                { name: 'RandomLayout', size: 870 },
                { name: 'StackedAreaLayout', size: 9121 },
                { name: 'TreeMapLayout', size: 9191 },
              ],
            },
            { name: 'Operator', size: 2490 },
            { name: 'OperatorList', size: 5248 },
            { name: 'OperatorSequence', size: 4190 },
            { name: 'OperatorSwitch', size: 2581 },
            { name: 'SortOperator', size: 2023 },
          ],
        },
      ],
    },
    radarChart: {
      data: [
        {
          subject: 'Math',
          A: 140,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Chinese',
          A: 130,
          B: 80,
          fullMark: 150,
        },
        {
          subject: 'English',
          A: 96,
          B: 120,
          fullMark: 150,
        },
        {
          subject: 'Geography',
          A: 70,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Physics',
          A: 85,
          B: 120,
          fullMark: 150,
        },
        {
          subject: 'History',
          A: 65,
          B: 115,
          fullMark: 150,
        },
      ],
    },
    scatterChart: {
      data1: [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
      ],
      data2: [
        { x: 300, y: 300, z: 200 },
        { x: 400, y: 500, z: 260 },
        { x: 200, y: 700, z: 400 },
        { x: 340, y: 350, z: 280 },
        { x: 560, y: 500, z: 500 },
        { x: 230, y: 780, z: 200 },
        { x: 500, y: 400, z: 200 },
        { x: 300, y: 500, z: 260 },
        { x: 240, y: 300, z: 400 },
        { x: 320, y: 550, z: 280 },
        { x: 500, y: 400, z: 500 },
        { x: 420, y: 280, z: 200 },
      ],
    },
  },
  highcharts: {
    packedBubble: {
      chart: {
        type: 'packedbubble',
        height: '70%'
      },
      title: {
        text: 'Carbon emissions around the world (2014)'
      },
      colors: ['#2F33A7', '#FF4B23', '#16365f', '#6b859e', '#FFA100', '#43BC13'],
      tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
      },
      plotOptions: {
        packedbubble: {
          minSize: '20%',
          maxSize: '100%',
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            gravitationalConstant: 0.05,
            splitSeries: true,
            seriesInteraction: false,
            dragBetweenSeries: true,
            parentNodeLimit: true
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            filter: {
              property: 'y',
              operator: '>',
              value: 250
            },
            style: {
              color: 'black',
              textOutline: 'none',
              fontWeight: 'normal',
            }
          }
        }
      },
      series: [{
        name: 'Europe',
        data: [{
          name: 'Germany',
          value: 767.1
        }, {
          name: 'Croatia',
          value: 20.7
        },
          {
            name: "Belgium",
            value: 97.2
          },
          {
            name: "Czech Republic",
            value: 111.7
          },
          {
            name: "Netherlands",
            value: 158.1
          },
          {
            name: "Spain",
            value: 241.6
          },
          {
            name: "Ukraine",
            value: 249.1
          },
          {
            name: "Poland",
            value: 298.1
          },
          {
            name: "France",
            value: 323.7
          },
          {
            name: "Romania",
            value: 78.3
          },
          {
            name: "United Kingdom",
            value: 415.4
          }, {
            name: "Turkey",
            value: 353.2
          }, {
            name: "Italy",
            value: 337.6
          },
          {
            name: "Greece",
            value: 71.1
          },
          {
            name: "Austria",
            value: 69.8
          },
          {
            name: "Belarus",
            value: 67.7
          },
          {
            name: "Serbia",
            value: 59.3
          },
          {
            name: "Finland",
            value: 54.8
          },
          {
            name: "Bulgaria",
            value: 51.2
          },
          {
            name: "Portugal",
            value: 48.3
          },
          {
            name: "Norway",
            value: 44.4
          },
          {
            name: "Sweden",
            value: 44.3
          },
          {
            name: "Hungary",
            value: 43.7
          },
          {
            name: "Switzerland",
            value: 40.2
          },
          {
            name: "Denmark",
            value: 40
          },
          {
            name: "Slovakia",
            value: 34.7
          },
          {
            name: "Ireland",
            value: 34.6
          },
          {
            name: "Croatia",
            value: 20.7
          },
          {
            name: "Estonia",
            value: 19.4
          },
          {
            name: "Slovenia",
            value: 16.7
          },
          {
            name: "Lithuania",
            value: 12.3
          },
          {
            name: "Luxembourg",
            value: 10.4
          },
          {
            name: "Macedonia",
            value: 9.5
          },
          {
            name: "Moldova",
            value: 7.8
          },
          {
            name: "Latvia",
            value: 7.5
          },
          {
            name: "Cyprus",
            value: 7.2
          }]
      },
        {name: 'Africa',
          data: [{
            name: "Senegal",
            value: 8.2
          },
            {
              name: "Cameroon",
              value: 9.2
            },
            {
              name: "Zimbabwe",
              value: 13.1
            },
            {
              name: "Ghana",
              value: 14.1
            },
            {
              name: "Kenya",
              value: 14.1
            },
            {
              name: "Sudan",
              value: 17.3
            },
            {
              name: "Tunisia",
              value: 24.3
            },
            {
              name: "Angola",
              value: 25
            },
            {
              name: "Libya",
              value: 50.6
            },
            {
              name: "Ivory Coast",
              value: 7.3
            },
            {
              name: "Morocco",
              value: 60.7
            },
            {
              name: "Ethiopia",
              value: 8.9
            },
            {
              name: "United Republic of Tanzania",
              value: 9.1
            },
            {
              name: "Nigeria",
              value: 93.9
            },
            {
              name: "South Africa",
              value: 392.7
            }, {
              name: "Egypt",
              value: 225.1
            }, {
              name: "Algeria",
              value: 141.5
            }]
        },
        {name: 'Oceania',
          data: [{
            name: "Australia",
            value: 409.4
          },
            {
              name: "New Zealand",
              value: 34.1
            },
            {
              name: "Papua New Guinea",
              value: 7.1
            }]
        },
        {name: 'North America',
          data: [{
            name: "Costa Rica",
            value: 7.6
          },
            {
              name: "Honduras",
              value: 8.4
            },
            {
              name: "Jamaica",
              value: 8.3
            },
            {
              name: "Panama",
              value: 10.2
            },
            {
              name: "Guatemala",
              value: 12
            },
            {
              name: "Dominican Republic",
              value: 23.4
            },
            {
              name: "Cuba",
              value: 30.2
            },
            {
              name: "USA",
              value: 5334.5
            }, {
              name: "Canada",
              value: 566
            }, {
              name: "Mexico",
              value: 456.3
            }]
        },
        {name: 'South America',
          data: [{
            name: "El Salvador",
            value: 7.2
          },
            {
              name: "Uruguay",
              value: 8.1
            },
            {
              name: "Bolivia",
              value: 17.8
            },
            {
              name: "Trinidad and Tobago",
              value: 34
            },
            {
              name: "Ecuador",
              value: 43
            },
            {
              name: "Chile",
              value: 78.6
            },
            {
              name: "Peru",
              value: 52
            },
            {
              name: "Colombia",
              value: 74.1
            },
            {
              name: "Brazil",
              value: 501.1
            }, {
              name: "Argentina",
              value: 199
            },
            {
              name: "Venezuela",
              value: 195.2
            }]
        },
        {name: 'Asia',
          data: [{
            name: "Nepal",
            value: 6.5
          },
            {
              name: "Georgia",
              value: 6.5
            },
            {
              name: "Brunei Darussalam",
              value: 7.4
            },
            {
              name: "Kyrgyzstan",
              value: 7.4
            },
            {
              name: "Afghanistan",
              value: 7.9
            },
            {
              name: "Myanmar",
              value: 9.1
            },
            {
              name: "Mongolia",
              value: 14.7
            },
            {
              name: "Sri Lanka",
              value: 16.6
            },
            {
              name: "Bahrain",
              value: 20.5
            },
            {
              name: "Yemen",
              value: 22.6
            },
            {
              name: "Jordan",
              value: 22.3
            },
            {
              name: "Lebanon",
              value: 21.1
            },
            {
              name: "Azerbaijan",
              value: 31.7
            },
            {
              name: "Singapore",
              value: 47.8
            },
            {
              name: "Hong Kong",
              value: 49.9
            },
            {
              name: "Syria",
              value: 52.7
            },
            {
              name: "DPR Korea",
              value: 59.9
            },
            {
              name: "Israel",
              value: 64.8
            },
            {
              name: "Turkmenistan",
              value: 70.6
            },
            {
              name: "Oman",
              value: 74.3
            },
            {
              name: "Qatar",
              value: 88.8
            },
            {
              name: "Philippines",
              value: 96.9
            },
            {
              name: "Kuwait",
              value: 98.6
            },
            {
              name: "Uzbekistan",
              value: 122.6
            },
            {
              name: "Iraq",
              value: 139.9
            },
            {
              name: "Pakistan",
              value: 158.1
            },
            {
              name: "Vietnam",
              value: 190.2
            },
            {
              name: "United Arab Emirates",
              value: 201.1
            },
            {
              name: "Malaysia",
              value: 227.5
            },
            {
              name: "Kazakhstan",
              value: 236.2
            },
            {
              name: "Thailand",
              value: 272
            },
            {
              name: "Taiwan",
              value: 276.7
            },
            {
              name: "Indonesia",
              value: 453
            },
            {
              name: "Saudi Arabia",
              value: 494.8
            },
            {
              name: "Japan",
              value: 1278.9
            },
            {
              name: "China",
              value: 10540.8
            },
            {
              name: "India",
              value: 2341.9
            },
            {
              name: "Russia",
              value: 1766.4
            },
            {
              name: "Iran",
              value: 618.2
            },
            {
              name: "Korea",
              value: 610.1
            }]
        }],
    },
    dumbbell: {
      chart: {
        type: 'dumbbell',
        inverted: true
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      subtitle: {
        text: '1960 vs 2018'
      },
      title: {
        text: 'Change in Life Expectancy'
      },
      colors: ['#4d53e0'],
      tooltip: {
        shared: true
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Life Expectancy (years)'
        }
      },
      series: [{
        name: 'Life expectancy change',
        data: [{
          name: 'Austria',
          low: 69,
          high: 82
        }, {
          name: 'Belgium',
          low: 70,
          high: 81
        }, {
          name: 'Bulgaria',
          low: 69,
          high: 75
        }, {
          name: 'Croatia',
          low: 65,
          high: 78
        }, {
          name: 'Cyprus',
          low: 70,
          high: 81
        }, {
          name: 'Czech Republic',
          low: 70,
          high: 79
        }, {
          name: 'Denmark',
          low: 72,
          high: 81
        }, {
          name: 'Estonia',
          low: 68,
          high: 78
        }, {
          name: 'Finland',
          low: 69,
          high: 81
        }, {
          name: 'France',
          low: 70,
          high: 83
        }, {
          name: 'Greece',
          low: 68,
          high: 81
        }, {
          name: 'Spain',
          low: 69,
          high: 83
        }, {
          name: 'Netherlands',
          low: 73,
          high: 82
        }, {
          name: 'Ireland',
          low: 70,
          high: 82
        }, {
          name: 'Lithuania',
          low: 70,
          high: 75
        }, {
          name: 'Luxembourg',
          low: 68,
          high: 83
        }, {
          name: 'Latvia',
          low: 70,
          high: 75
        }, {
          name: 'Malta',
          low: 69,
          high: 82
        }, {
          name: 'Germany',
          low: 69,
          high: 81
        }, {
          name: 'Poland',
          low: 68,
          high: 78
        }, {
          name: 'Portugal',
          low: 63,
          high: 81
        }, {
          name: 'Romania',
          low: 66,
          high: 75
        }, {
          name: 'Slovakia',
          low: 70,
          high: 77
        }, {
          name: 'Slovenia',
          low: 69,
          high: 81
        }, {
          name: 'Sweden',
          low: 73,
          high: 82
        }, {
          name: 'Hungary',
          low: 68,
          high: 76
        }, {
          name: 'Italy',
          low: 69,
          high: 83
        }, {
          name: 'UK',
          low: 71,
          high: 81
        }],
      }]
    },
    sankey: {
      title: {
        text: 'Highcharts Sankey Diagram'
      },
      credits: {
        enabled: false
      },
      accessibility: {
        point: {
          valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
        }
      },
      colors: ['#16365f', '#4d53e0', '#FFA100', '#FF4B23', '#FF5668', '#FFC405', '#00A5FF'],
      series: [{
        keys: ['from', 'to', 'weight'],
        data: [
          ['Brazil', 'Portugal', 5],
          ['Brazil', 'France', 1],
          ['Brazil', 'Spain', 1],
          ['Brazil', 'England', 1],
          ['Canada', 'Portugal', 1],
          ['Canada', 'France', 5],
          ['Canada', 'England', 1],
          ['Mexico', 'Portugal', 1],
          ['Mexico', 'France', 1],
          ['Mexico', 'Spain', 5],
          ['Mexico', 'England', 1],
          ['USA', 'Portugal', 1],
          ['USA', 'France', 1],
          ['USA', 'Spain', 1],
          ['USA', 'England', 5],
          ['Portugal', 'Angola', 2],
          ['Portugal', 'Senegal', 1],
          ['Portugal', 'Morocco', 1],
          ['Portugal', 'South Africa', 3],
          ['France', 'Angola', 1],
          ['France', 'Senegal', 3],
          ['France', 'Mali', 3],
          ['France', 'Morocco', 3],
          ['France', 'South Africa', 1],
          ['Spain', 'Senegal', 1],
          ['Spain', 'Morocco', 3],
          ['Spain', 'South Africa', 1],
          ['England', 'Angola', 1],
          ['England', 'Senegal', 1],
          ['England', 'Morocco', 2],
          ['England', 'South Africa', 7],
          ['South Africa', 'China', 5],
          ['South Africa', 'India', 1],
          ['South Africa', 'Japan', 3],
          ['Angola', 'China', 5],
          ['Angola', 'India', 1],
          ['Angola', 'Japan', 3],
          ['Senegal', 'China', 5],
          ['Senegal', 'India', 1],
          ['Senegal', 'Japan', 3],
          ['Mali', 'China', 5],
          ['Mali', 'India', 1],
          ['Mali', 'Japan', 3],
          ['Morocco', 'China', 5],
          ['Morocco', 'India', 1],
          ['Morocco', 'Japan', 3]
        ],
        type: 'sankey',
        name: 'Sankey demo series'
      }],
    },
    treemap: {
      colorAxis: {
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
      },
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [{
          name: 'A',
          value: 6,
          colorValue: 1
        }, {
          name: 'B',
          value: 6,
          colorValue: 2
        }, {
          name: 'C',
          value: 4,
          colorValue: 3
        }, {
          name: 'D',
          value: 3,
          colorValue: 4
        }, {
          name: 'E',
          value: 2,
          colorValue: 5
        }, {
          name: 'F',
          value: 2,
          colorValue: 6
        }, {
          name: 'G',
          value: 1,
          colorValue: 7
        }]
      }],
      title: {
        text: 'Highcharts Treemap'
      },
      credits: {
        enabled: false
      },
    },
  },
}
