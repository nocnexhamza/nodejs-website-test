
export default {
  apexCharts: {
    simplePie: {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 280,
          type: 'pie',
        },
        dataLabels: {
          style: {
            colors: ['#fff']
          },
          dropShadow: {
            enabled: false,
          }
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#4d53e0', '#00A5FF', '#43BC13', '#FFC405', '#FF5668'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    },
    simpleDonut: {
      series: [44, 55, 41, 67, 61, 49, 58],
      options: {
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        colors: ['#4d53e0', '#00A5FF', '#43BC13', '#FFC405', '#FF5668', '#6b859e', '#2F33A7'],
        dataLabels: {
          style: {
            colors: ['#fff']
          },
          dropShadow: {
            enabled: false,
          }
        },
      },
    },
    monochromePie: {
      series: [25, 15, 44, 55, 41, 17],
      options: {
        chart: {
          width: '100%',
          type: 'pie',
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", ],
        theme: {
          monochrome: {
            enabled: true,
            color: '#4d53e0',
          }
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5
            }
          }
        },
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
          },
          dropShadow: {
            enabled: false,
          },
        },
        legend: {
          show: false
        }
      },
    },
    gradientDonut: {
      series: [20, 30, 40, 50, 60],
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 0.35,
            inverseColors: false,
          },
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#4d53e0', '#00A5FF', '#43BC13', '#FFC405', '#FF5668'],
        legend: {
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    }
  },
  recharts: {
    simplePie: {
      data1: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ],
    },
    twoLevelPie: {
      data1: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ],
      data2: [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ],
    },
    halfCircle: {
      data: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ],
    },
    radialBar: {
      data: [
        {
          name: '18-24',
          uv: 31.47,
          pv: 2400,
          fill: '#2F33A7',
        },
        {
          name: '25-29',
          uv: 18.69,
          pv: 4567,
          fill: '#4d53e0',
        },
        {
          name: '30-34',
          uv: 20.69,
          pv: 1398,
          fill: '#00A5FF',
        },
        {
          name: '35-39',
          uv: 22.22,
          pv: 9800,
          fill: '#43BC13',
        },
        {
          name: '40-49',
          uv: 24.63,
          pv: 3908,
          fill: '#FF5668',
        },
        {
          name: '50+',
          uv: 26.63,
          pv: 4800,
          fill: '#FFA100',
        },
        {
          name: 'unknown',
          uv: 28.67,
          pv: 4800,
          fill: '#FFC405',
        },
      ],
    }
  },
  highcharts: {
    simplePie: {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in January, 2018'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      colors: ['#4d53e0', '#FF4B23', '#00A5FF', '#6b859e', '#FFA100', '#FF5668', '#2F33A7'],
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'Other',
          y: 2.61
        }]
      }],
    },
    pieWithLegend: {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in January, 2018'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      colors: ['#41D5E2', '#C7D0D9', '#6b859e', '#FFA100', '#FF5668', '#2F33A7'],
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Market share',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Other',
          y: 7.05
        }]
      }],
    },
    monochromePie: {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares at a specific website, 2017'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          colors: ['#16365f', '#16365f90', '#16365f70', '#16365f50', '#16365f30', '#16365f10'],
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            }
          }
        }
      },
      series: [{
        name: 'Share',
        data: [
          { name: 'Chrome', y: 61.41 },
          { name: 'Internet Explorer', y: 11.84 },
          { name: 'Firefox', y: 10.85 },
          { name: 'Edge', y: 4.67 },
          { name: 'Safari', y: 4.18 },
          { name: 'Other', y: 7.05 }
        ]
      }],
    },
    variableRadiusPie: {
      chart: {
        type: 'variablepie'
      },
      title: {
        text: 'Countries compared by population density and total area.',
      },
      credits: {
        enabled: false
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Area (square km): <b>{point.y}</b><br/>' +
          'Population density (people per square km): <b>{point.z}</b><br/>'
      },
      colors: ['#16365f', '#41D5E2', '#FFC405', '#43BC13', '#FF5668', '#C7D0D9', '#00A5FF'],
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        data: [{
          name: 'Spain',
          y: 505370,
          z: 92.9
        }, {
          name: 'France',
          y: 551500,
          z: 118.7
        }, {
          name: 'Poland',
          y: 312685,
          z: 124.6
        }, {
          name: 'Czech Republic',
          y: 78867,
          z: 137.5
        }, {
          name: 'Italy',
          y: 301340,
          z: 201.8
        }, {
          name: 'Switzerland',
          y: 41277,
          z: 214.5
        }, {
          name: 'Germany',
          y: 357022,
          z: 235.6
        }]
      }],
    }
  },
}
