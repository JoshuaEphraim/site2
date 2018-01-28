export function Highchart(array,traffic,tDates,rou,yAxe) {
    $(function () {
        Highcharts.chart('chart-01', {
            chart: {
                type: 'bar',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                spacingLeft: 0,
                spacingRight: 0
            },
            title: {
                text: ''
            },
            xAxis: {
                lineWidth: 0,
                tickWidth: 0,
                gridLineWidth: 0,
                categories: ['Lorem ipsum<br />dolor sit amet', 'Lorem ipsum<br />dolor sit amet', 'Lorem ipsum<br />dolor sit amet', 'Lorem ipsum<br />dolor sit amet'],
                labels: {
                    style: {
                        color: '#a8a8a8',
                        fontSize: '10px',
                        lineHeight: '10px',
                        textTransform: 'uppercase'
                    }
                }
            },
            yAxis: {
                min: 0,
                max: 100,
                gridLineWidth: 0,
                title: {
                    enabled: false
                },
                labels: {
                    enabled: false
                }
            },
            legend: {
                enabled: false
            },
            series: [{
                name: ' ',
                pointWidth: 24,
                showInLegend: false,
                data: [
                    {y: 90, name: 'First', color: '#81d0d4'},
                    {y: 45, name: 'Second', color: '#817f91'},
                    {y: 80, name: 'Third', color: '#f4857f'},
                    {y: 35, name: 'Fourth', color: '#c9cacc'}
                ]
            }]
        });
    });
    $(function () {
        Highcharts.chart('chart-02', {
            chart: {
                type: 'bar',
                backgroundColor: 'rgba(249, 249, 249, 1)',
                spacingLeft: 0,
                spacingRight: 0
            },
            title: {
                text: ''
            },
            xAxis: {
                lineWidth: 0,
                tickWidth: 0,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },
            yAxis: {
                min: 0,
                max: 100,
                gridLineWidth: 0,
                title: {
                    enabled: false
                },
                labels: {
                    enabled: false
                }
            },
            series: [{
                name: ' ',
                pointWidth: 34,
                showInLegend: false,
                data: [
                    {y: 30, name: 'First', color: '#81d0d4'},
                    {y: 60, name: 'Second', color: '#817f91'},
                    {y: 50, name: 'Third', color: '#f4857f'},
                    {y: 70, name: 'Fourth', color: '#c9cacc'}
                ]
            }
            ]
        });
    });

    $(function () {
        Highcharts.chart('chart-03', {
            chart: {
                backgroundColor: 'rgba(255, 255, 255, 0)'
            },
            title: {
                text: 'Date'
            },
            xAxis: {
                lineColor: '#66647a',
                lineWidth: 2,
                tickColor: '#66647a',
                tickWidth: 2,
                labels: {
                    style: {'color': '#66647a'}
                },
                categories: [tDates[0].substr(5), tDates[1].substr(5), tDates[2].substr(5), tDates[3].substr(5), tDates[4].substr(5), tDates[5].substr(5)]
            },
            yAxis: {
                gridLineWidth: 0,
                lineColor: '#66647a',
                lineWidth: 2,
                tickColor: '#66647a',
                tickWidth: 2,
                title: {
                    text: yAxe,
                    style: {'color': '#ffd285'}
                },
                labels: {
                    style: {'color': '#66647a'},
                    formatter: function () {
                        var label = this.axis.defaultLabelFormatter.call(this);
                        label = label / rou;
                        return Math.round(label);
                    }
                },
                minTickInterval: rou,
                categories: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000]
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Line Number 1',
                color: '#ffd285',
                data: [traffic[0], traffic[1], traffic[2], traffic[3], traffic[4], traffic[5]]
            }]
        });
    });
    /*
     $(function () {
     Highcharts.chart('chart-03', {
     chart: {
     type: 'column',
     backgroundColor: 'rgba(255, 255, 255, 1)',
     spacingLeft: 0,
     spacingRight: 0
     },
     title: {
     text: ''
     },
     xAxis: {
     lineWidth: 0,
     tickWidth: 0,
     gridLineWidth: 0,
     labels: {
     enabled: false
     },
     categories: [ 'First', 'Second', 'Third', 'Fourth' ]
     },
     yAxis: {
     gridLineWidth: 2,
     gridLineDashStyle: 'dash',
     title: {
     enabled: false
     },
     labels: {
     enabled: false
     }
     },
     legend: {
     enabled: false
     },
     plotOptions: {
     column: {
     pointPadding: 0,
     borderWidth: 0
     },
     series: {
     groupPadding: 0.05
     }
     },
     series: [{
     pointWidth: 20,
     name: 'Lorem ipsum dolor sit amet',
     color: '#61c4c9',
     data: [40, 80, 60, 65]

     }, {
     pointWidth: 20,
     name: 'Lorem ipsum dolor sit amet',
     color: '#615f75',
     data: [75, 35, 56, 100]

     }, {
     pointWidth: 20,
     name: 'Lorem ipsum dolor sit amet',
     color: '#f3665f',
     data: [23, 45, 61, 78]

     }, {
     pointWidth: 20,
     name: 'Lorem ipsum dolor sit amet',
     color: '#bdbec0',
     data: [12, 44, 51, 96]

     }]
     });
     });

     $(function () {

     Highcharts.chart('chart-04', {
     chart: {
     plotBackgroundColor: null,
     plotBorderWidth: null,
     plotShadow: false,
     type: 'pie',
     backgroundColor: 'rgba(249, 249, 249, 1)',
     spacingLeft: 0,
     spacingRight: 0
     },
     title: {
     text: ''
     },
     tooltip: {
     formatter: function(){
     if (this.point.tooltipDisabled) {
     return false;
     } else {
     return this.series.name + ': <b>' + this.point.y + '</b>';
     }
     }
     },
     plotOptions: {
     pie: {
     allowPointSelect: false,
     cursor: 'default',
     dataLabels: {
     enabled: false
     },
     showInLegend: false
     },
     series: {
     states: {
     hover: {
     enabled: false
     }
     }
     }
     },
     series: [{
     name: 'First',
     data: [{
     name: 'Lorem ipsum dolor sit amet',
     y: 20,
     color: '#3bc9d7'
     }, {
     name: 'Other',
     y: 80,
     color: '#ebecee',
     tooltipDisabled: true
     }]
     }]
     });

     });
     */
    $(function () {

        Highcharts.chart('chart-05', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'rgba(249, 249, 249, 1)',
                spacingLeft: 0,
                spacingRight: 0
            },
            title: {
                text: ''
            },
            tooltip: {
                formatter: function () {
                    if (this.point.tooltipDisabled) {
                        return false;
                    } else {
                        return this.series.name + ': <b>' + this.point.y + '</b>';
                    }
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'default',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                },
                series: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            },
            series: [{
                name: 'Second',
                data: [{
                    name: 'Lorem ipsum dolor sit amet',
                    y: parseFloat(array[2].toFixed(1)),
                    color: '#66647a'
                }, {
                    name: 'Other',
                    y: 10 - parseFloat(array[2].toFixed(1)),
                    color: '#ebecee',
                    tooltipDisabled: true
                }]
            }]
        });

    });
    $(function () {

        Highcharts.chart('chart-06', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'rgba(249, 249, 249, 1)',
                spacingLeft: 0,
                spacingRight: 0
            },
            title: {
                text: ''
            },
            tooltip: {
                formatter: function () {
                    if (this.point.tooltipDisabled) {
                        return false;
                    } else {
                        return this.series.name + ': <b>' + this.point.y + '</b>';
                    }
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'default',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                },
                series: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            },
            series: [{
                name: 'Third',
                data: [{
                    name: 'Lorem ipsum dolor sit amet',
                    y: Math.round(array[0]),
                    color: '#f77963'
                }, {
                    name: 'Other',
                    y: 100 - Math.round(array[0]),
                    color: '#ebecee',
                    tooltipDisabled: true
                }]
            }]
        });

    });
    $(function () {

        Highcharts.chart('chart-07', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'rgba(249, 249, 249, 1)',
                spacingLeft: 0,
                spacingRight: 0
            },
            title: {
                text: ''
            },
            tooltip: {
                formatter: function () {
                    if (this.point.tooltipDisabled) {
                        return false;
                    } else {
                        return this.series.name + ': <b>' + this.point.y + '</b>';
                    }
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'default',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                },
                series: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            },
            series: [{
                name: 'Fourth',
                data: [{
                    name: 'Lorem ipsum dolor sit amet',
                    y: Math.round(array[1]),
                    color: '#a8a9ad'
                }, {
                    name: 'Other',
                    y: 100 - Math.round(array[1]),
                    color: '#ebecee',
                    tooltipDisabled: true
                }]
            }]
        });

    });
}
