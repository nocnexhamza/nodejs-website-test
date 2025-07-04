import Highcharts from "highcharts";

let categories = [
  '0-4', '5-9', '10-14', '15-19',
  '20-24', '25-29', '30-34', '35-39', '40-44',
  '45-49', '50-54', '55-59', '60-64', '65-69',
  '70-74', '75-79', '80-84', '85-89', '90-94',
  '95-99', '100 + '
];

export default {
  apexCharts: {
    basicBar: {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false
          },
        },
        title: {
          text: 'Licenses Sold by Country',
          align: 'center'
        },
        colors: ['#4d53e0'],
        plotOptions: {
          bar: {
            borderRadius: 8,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        }
      },
    },
    stackedBar: {
      series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
      }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: 'Fiction Books Sales',
          align: 'center',
        },
        colors: ['#00A5FF', '#43BC13', '#FFC405', '#FF5668', '#4d53e0'],
        xaxis: {
          categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
          labels: {
            formatter: function (val) {
              return val + "K"
            },
            style: {
              colors: "#6B859E",
            },
          }
        },
        yaxis: {
          title: {
            text: undefined,
            align: 'center',
          },
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      },
    },
    negativeValuesBar: {
      series: [
        {
          name: 'Males',
          data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
            3.9, 3.5, 3
          ]
        },
        {
          name: 'Females',
          data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
            -4.1, -4, -4.1, -3.4, -3.1, -2.8
          ]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 440,
          stacked: true,
          toolbar: {
            show: false
          },
        },
        colors: ['#00A5FF', '#FF5668'],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },

        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          min: -5,
          max: 5,
          title: {
            // text: 'Age',
          },
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val
            }
          },
          y: {
            formatter: function (val) {
              return Math.abs(val) + "%"
            }
          }
        },
        title: {
          text: 'Mauritius population pyramid 2020',
          align: 'center',
        },
        xaxis: {
          categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
            '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
            '0-4'
          ],
          labels: {
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "%"
            },
            style: {
              colors: "#6B859E",
            },
          }
        },
      },
    },
    groupedBar: {
      series: [{
        name: 'Apps',
        data: [34, 52, 41, 44, 32, 47, 51]
      }, {
        name: 'Licenses',
        data: [32, 44, 33, 32, 53, 33, 52,]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 430,
          toolbar: {
            show: false
          },
        },
        colors: ['#6b859e', '#FFA100'],
        title: {
          text: 'Company Solds by Year',
          align: 'center',
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 2,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#6B859E",
            },
          },
        }
      },
    },
  },
  recharts: {
    simpleBar: {
      data: [
        {
          name: 'Page A',
          uv: 40,
          pv: 24,
          amt: 24,
        },
        {
          name: 'Page B',
          uv: 30,
          pv: 13,
          amt: 22,
        },
        {
          name: 'Page C',
          uv: 20,
          pv: 98,
          amt: 22,
        },
        {
          name: 'Page D',
          uv: 27,
          pv: 39,
          amt: 20,
        },
        {
          name: 'Page E',
          uv: 18,
          pv: 48,
          amt: 21,
        },
        {
          name: 'Page F',
          uv: 23,
          pv: 38,
          amt: 25,
        },
        {
          name: 'Page G',
          uv: 34,
          pv: 43,
          amt: 21,
        },
      ],
    },
    mixBarChart: {
      data: [
        {
          name: 'Page A',
          uv: 40,
          pv: 24,
          amt: 24,
        },
        {
          name: 'Page B',
          uv: 30,
          pv: 13,
          amt: 22,
        },
        {
          name: 'Page C',
          uv: 20,
          pv: 98,
          amt: 22,
        },
        {
          name: 'Page D',
          uv: 27,
          pv: 39,
          amt: 20,
        },
        {
          name: 'Page E',
          uv: 18,
          pv: 48,
          amt: 21,
        },
        {
          name: 'Page F',
          uv: 23,
          pv: 38,
          amt: 25,
        },
        {
          name: 'Page G',
          uv: 34,
          pv: 43,
          amt: 21,
        },
      ],
    },
    stackedChart: {
      data: [
        {
          name: 'Page A',
          uv: 40,
          pv: 24,
          amt: 24,
        },
        {
          name: 'Page B',
          uv: 30,
          pv: 13,
          amt: 22,
        },
        {
          name: 'Page C',
          uv: 20,
          pv: 98,
          amt: 22,
        },
        {
          name: 'Page D',
          uv: 27,
          pv: 39,
          amt: 20,
        },
        {
          name: 'Page E',
          uv: 18,
          pv: 48,
          amt: 21,
        },
        {
          name: 'Page F',
          uv: 23,
          pv: 38,
          amt: 25,
        },
        {
          name: 'Page G',
          uv: 34,
          pv: 43,
          amt: 21,
        },
      ],
    },
    positiveAndNegativeChart: {
      data: [
        {
          name: 'Page A',
          uv: 40,
          pv: 24,
          amt: 24,
        },
        {
          name: 'Page B',
          uv: -30,
          pv: 13,
          amt: 22,
        },
        {
          name: 'Page C',
          uv: -20,
          pv: -98,
          amt: 22,
        },
        {
          name: 'Page D',
          uv: 27,
          pv: 39,
          amt: 20,
        },
        {
          name: 'Page E',
          uv: -18,
          pv: 48,
          amt: 21,
        },
        {
          name: 'Page F',
          uv: 23,
          pv: -38,
          amt: 25,
        },
        {
          name: 'Page G',
          uv: 34,
          pv: 43,
          amt: 21,
        },
      ],
    },
  },
  highcharts: {
    basicBar: {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Historic World Population by Region'
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      colors: ['#4d53e0', '#00A5FF', '#43BC13', '#FF5668'],
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
      }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
      }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
      }, {
        name: 'Year 2019',
        data: [1216, 1001, 4436, 738, 40]
      }]
    },
    basicColumn: {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Monthly Average Rainfall'
      },
      colors: ['#4d53e0', '#00A5FF', '#43BC13', '#FF5668'],
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Rainfall (mm)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'London',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

      }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

      }, {
        name: 'Minsk',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

      }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

      }]
    },
    negativeStack: {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Population pyramid for Germany, 2019'
      },
      credits: {
        enabled: false
      },
      accessibility: {
        point: {
          valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.'
        }
      },
      colors: ['#00A5FF', '#FF5668'],
      xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
          step: 1
        },
        accessibility: {
          description: 'Age (male)'
        }
      }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
          step: 1
        },
        accessibility: {
          description: 'Age (female)'
        }
      }],
      yAxis: {
        title: {
          text: null
        },
        labels: {
          formatter: function () {
            return Math.abs(this.value) + '%';
          }
        },
        accessibility: {
          description: 'Percentage population',
          rangeDescription: 'Range: 0 to 5%'
        }
      },

      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },

      tooltip: {
        formatter: function () {
          return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
            'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
        }
      },

      series: [{
        name: 'Male',
        data: [
          -2.2, -2.1, -2.2, -2.4,
          -2.7, -3.0, -3.3, -3.2,
          -2.9, -3.5, -4.4, -4.1,
          -3.4, -2.7, -2.3, -2.2,
          -1.6, -0.6, -0.3, -0.0,
          -0.0
        ]
      }, {
        name: 'Female',
        data: [
          2.1, 2.0, 2.1, 2.3, 2.6,
          2.9, 3.2, 3.1, 2.9, 3.4,
          4.3, 4.0, 3.5, 2.9, 2.5,
          2.7, 2.2, 1.1, 0.6, 0.2,
          0.0
        ]
      }],
    },
    rangeChart: {
      chart: {
        type: 'columnrange',
        inverted: true
      },
      title: {
        text: 'Temperature variation by month in Norway, 2019'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Temperature ( °C )'
        }
      },
      tooltip: {
        valueSuffix: '°C'
      },
      plotOptions: {
        columnrange: {
          dataLabels: {
            enabled: true,
            format: '{y}°C'
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Temperatures',
        data: [
          [-9.9, 10.3],
          [-8.6, 8.5],
          [-10.2, 11.8],
          [-1.7, 12.2],
          [-0.6, 23.1],
          [3.7, 25.4],
          [6.0, 26.2],
          [6.7, 21.4],
          [3.5, 19.5],
          [-1.3, 16.0],
          [-8.7, 9.4],
          [-9.0, 8.6]
        ]
      }],
    },
  },
}
