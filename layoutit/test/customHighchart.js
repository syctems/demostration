function CustomHighchart()
{
    this.name= "chart";
};

CustomHighchart.prototype.getLineChart = function(name,option)
{
    var init = {
            chart: {
                type: 'line',
            },
            title: {
                text: 'Solar Employment Growth by Sector, 2010-2016'
            },

            subtitle: {
                text: 'Source: thesolarfoundation.com'
            },

            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },

            series: [{
                name: 'Installation',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }, {
                name: 'Manufacturing',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, {
                name: 'Sales & Distribution',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }, {
                name: 'Project Development',
                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            }, {
                name: 'Other',
                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
    }
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
};

CustomHighchart.prototype.getColumnChart = function(name,option){
    var init = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
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
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }, {
                name: 'New York',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

            }, {
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
};

CustomHighchart.prototype.getPieChart = function(name,option){
        var init = {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Browser market shares in January, 2018'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
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
                        name: 'Sogou Explorer',
                        y: 1.64
                    }, {
                        name: 'Opera',
                        y: 1.6
                    }, {
                        name: 'QQ',
                        y: 1.2
                    }, {
                        name: 'Other',
                        y: 2.61
                    }]
                }]
        };
        var data = Object.assign(init,option);
        Highcharts.chart(name, data);
}

CustomHighchart.prototype.getSplineChart = function(name,option){
    var init = {
          chart: {
                type: 'spline',
                inverted: true
            },
            title: {
                text: 'Atmosphere Temperature by Altitude'
            },
            subtitle: {
                text: 'According to the Standard Atmosphere Model'
            },
            xAxis: {
                reversed: false,
                title: {
                    enabled: true,
                    text: 'Altitude'
                },
                labels: {
                    format: '{value} km'
                },
                maxPadding: 0.05,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    format: '{value}°'
                },
                lineWidth: 2
            },
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br/>',
                pointFormat: '{point.x} km: {point.y}°C'
            },
            plotOptions: {
                spline: {
                    marker: {
                        enable: false
                    }
                }
            },
            series: [{
                name: 'Temperature',
                data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
                    [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getAreaChart = function(name,option){
    var init = {
        chart: {
            type: 'area'
        },
        title: {
            text: 'US and USSR nuclear stockpiles'
        },
        subtitle: {
            text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
                'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
                'armscontrol.org</a>'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: 'Nuclear weapon states'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'USA',
            data: [
                null, null, null, null, null, 6, 11, 32, 110, 235,
                369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
                20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
                26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
                21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
                10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
                5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
            ]
        }, {
            name: 'USSR/Russia',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
                1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
                11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
                30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
                37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
                12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
            ]
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getTemperatureChart = function(name,option){
    var init = {          
            title: {
                text: 'July temperatures'
            },

            xAxis: {
                type: 'datetime'
            },

            yAxis: {
                title: {
                    text: null
                }
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '°C'
            },

            legend: {
            },

            series: [{
                name: 'Temperature',
                data: [
                        [1246406400000, 21.5],
                        [1246492800000, 22.1],
                        [1246579200000, 23],
                        [1246665600000, 23.8],
                        [1246752000000, 21.4],
                        [1246838400000, 21.3],
                        [1246924800000, 18.3],
                        [1247011200000, 15.4],
                        [1247097600000, 16.4],
                        [1247184000000, 17.7],
                        [1247270400000, 17.5],
                        [1247356800000, 17.6],
                        [1247443200000, 17.7],
                        [1247529600000, 16.8],
                        [1247616000000, 17.7],
                        [1247702400000, 16.3],
                        [1247788800000, 17.8],
                        [1247875200000, 18.1],
                        [1247961600000, 17.2],
                        [1248048000000, 14.4],
                        [1248134400000, 13.7],
                        [1248220800000, 15.7],
                        [1248307200000, 14.6],
                        [1248393600000, 15.3],
                        [1248480000000, 15.3],
                        [1248566400000, 15.8],
                        [1248652800000, 15.2],
                        [1248739200000, 14.8],
                        [1248825600000, 14.4],
                        [1248912000000, 15],
                        [1248998400000, 13.6]
                    ],
                zIndex: 1,
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[0]
                }
            }, {
                name: 'Range',
                data: [
                        [1246406400000, 14.3, 27.7],
                        [1246492800000, 14.5, 27.8],
                        [1246579200000, 15.5, 29.6],
                        [1246665600000, 16.7, 30.7],
                        [1246752000000, 16.5, 25.0],
                        [1246838400000, 17.8, 25.7],
                        [1246924800000, 13.5, 24.8],
                        [1247011200000, 10.5, 21.4],
                        [1247097600000, 9.2, 23.8],
                        [1247184000000, 11.6, 21.8],
                        [1247270400000, 10.7, 23.7],
                        [1247356800000, 11.0, 23.3],
                        [1247443200000, 11.6, 23.7],
                        [1247529600000, 11.8, 20.7],
                        [1247616000000, 12.6, 22.4],
                        [1247702400000, 13.6, 19.6],
                        [1247788800000, 11.4, 22.6],
                        [1247875200000, 13.2, 25.0],
                        [1247961600000, 14.2, 21.6],
                        [1248048000000, 13.1, 17.1],
                        [1248134400000, 12.2, 15.5],
                        [1248220800000, 12.0, 20.8],
                        [1248307200000, 12.0, 17.1],
                        [1248393600000, 12.7, 18.3],
                        [1248480000000, 12.4, 19.4],
                        [1248566400000, 12.6, 19.9],
                        [1248652800000, 11.9, 20.2],
                        [1248739200000, 11.0, 19.3],
                        [1248825600000, 10.8, 17.8],
                        [1248912000000, 11.8, 18.5],
                        [1248998400000, 10.8, 16.1]
                    ],
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                color: Highcharts.getOptions().colors[0],
                fillOpacity: 0.3,
                zIndex: 0,
                marker: {
                    enabled: false
                }
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}


CustomHighchart.prototype.getAreaStackedChart = function(name,option){
    var init = {          
           chart: {
                type: 'area'
            },
            title: {
                text: 'Historic and Estimated Worldwide Population Distribution by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Percent'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                split: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    }
                }
            },
            series: [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getAreaInvertedChart = function(name,option)
{
        var init = {  
                chart: {
                    type: 'area',
                    inverted: true
                },
                title: {
                    text: 'Average fruit consumption during one week'
                },
                subtitle: {
                    style: {
                        position: 'absolute',
                        right: '0px',
                        bottom: '10px'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -150,
                    y: 100,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                },
                xAxis: {
                    categories: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday'
                    ]
                },
                yAxis: {
                    title: {
                        text: 'Number of units'
                    },
                    allowDecimals: false,
                    min: 0
                },
                plotOptions: {
                    area: {
                        fillOpacity: 0.5
                    }
                },
                series: [{
                    name: 'John',
                    data: [3, 4, 3, 5, 4, 10, 12]
                }, {
                    name: 'Jane',
                    data: [1, 3, 4, 3, 3, 5, 4]
                }]
        };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getAreaMissingChart = function(name,option)
{
        var init = {  
                chart: {
                    type: 'area',
                    spacingBottom: 30
                },
                title: {
                    text: 'Fruit consumption *'
                },
                subtitle: {
                    text: '* Jane\'s banana consumption is unknown',
                    floating: true,
                    align: 'right',
                    verticalAlign: 'bottom',
                    y: 15
                },
                legend: {
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'top',
                    x: 100,
                    y: 70,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                },
                xAxis: {
                    categories: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Grapes', 'Plums', 'Strawberries', 'Raspberries']
                },
                yAxis: {
                    title: {
                        text: 'Y-Axis'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            this.x + ': ' + this.y;
                    }
                },
                plotOptions: {
                    area: {
                        fillOpacity: 0.5
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'John',
                    data: [0, 1, 4, 4, 5, 2, 3, 7]
                }, {
                    name: 'Jane',
                    data: [1, 0, 3, null, 3, 1, 2, 1]
                }]
        };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getBarChart = function(name,option)
{
        var init = {  
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Historic World Population by Region'
                },
                subtitle: {
                    text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
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
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
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
                    name: 'Year 2016',
                    data: [1216, 1001, 4436, 738, 40]
                }]
        };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getBarNegativeStackChart = function(name,option)
{
    var categories = [
        '0-4', '5-9', '10-14', '15-19',
        '20-24', '25-29', '30-34', '35-39', '40-44',
        '45-49', '50-54', '55-59', '60-64', '65-69',
        '70-74', '75-79', '80-84', '85-89', '90-94',
        '95-99', '100 + '
    ];
    var init = {  
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Population pyramid for Germany, 2018'
            },
            subtitle: {
                text: 'Source: <a href="http://populationpyramid.net/germany/2018/">Population Pyramids of the World from 1950 to 2100</a>'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
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
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
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
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getBarStackChart = function(name,option)
{
    var init = {  
          chart: {
                type: 'bar'
            },
            title: {
                text: 'Stacked bar chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5]
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getBellcurveChart = function(name,option)
{
    var init = {  
            title: {
                text: 'Bell curve'
            },

            xAxis: [{
                title: {
                    text: 'Data'
                },
                alignTicks: false
            }, {
                title: {
                    text: 'Bell curve'
                },
                alignTicks: false,
                opposite: true
            }],

            yAxis: [{
                title: { text: 'Data' }
            }, {
                title: { text: 'Bell curve' },
                opposite: true
            }],

            series: [{
                name: 'Bell curve',
                type: 'bellcurve',
                xAxis: 1,
                yAxis: 1,
                baseSeries: 1,
                zIndex: -1
            }, {
                name: 'Data',
                type: 'scatter',
                data: [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
            4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
            3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3,
            3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3,
            2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3,
            2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3,
            2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6,
            3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2,
            2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7,
            3.2, 3.3, 3, 2.5, 3, 3.4, 3],
                marker: {
                    radius: 1.5
                }
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getBoxplotChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'boxplot'
            },

            title: {
                text: 'Highcharts Box Plot Example'
            },

            legend: {
                enabled: false
            },

            xAxis: {
                categories: ['1', '2', '3', '4', '5'],
                title: {
                    text: 'Experiment No.'
                }
            },

            yAxis: {
                title: {
                    text: 'Observations'
                },
                plotLines: [{
                    value: 932,
                    color: 'red',
                    width: 1,
                    label: {
                        text: 'Theoretical mean: 932',
                        align: 'center',
                        style: {
                            color: 'gray'
                        }
                    }
                }]
            },

            series: [{
                name: 'Observations',
                data: [
                    [760, 801, 848, 895, 965],
                    [733, 853, 939, 980, 1080],
                    [714, 762, 817, 870, 918],
                    [724, 802, 806, 871, 950],
                    [834, 836, 864, 882, 910]
                ],
                tooltip: {
                    headerFormat: '<em>Experiment No {point.key}</em><br/>'
                }
            }, {
                name: 'Outlier',
                color: Highcharts.getOptions().colors[0],
                type: 'scatter',
                data: [ // x, y positions where 0 is the first category
                    [0, 644],
                    [4, 718],
                    [4, 951],
                    [4, 969]
                ],
                marker: {
                    fillColor: 'white',
                    lineWidth: 1,
                    lineColor: Highcharts.getOptions().colors[0]
                },
                tooltip: {
                    pointFormat: 'Observation: {point.y}'
                }
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getBubbleChart = function(name,option)
{
    var init = {  
            chart: {
                    type: 'bubble',
                    plotBorderWidth: 1,
                    zoomType: 'xy'
                },

                legend: {
                    enabled: false
                },

                title: {
                    text: 'Sugar and fat intake per country'
                },

                subtitle: {
                    text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
                },

                xAxis: {
                    gridLineWidth: 1,
                    title: {
                        text: 'Daily fat intake'
                    },
                    labels: {
                        format: '{value} gr'
                    },
                    plotLines: [{
                        color: 'black',
                        dashStyle: 'dot',
                        width: 2,
                        value: 65,
                        label: {
                            rotation: 0,
                            y: 15,
                            style: {
                                fontStyle: 'italic'
                            },
                            text: 'Safe fat intake 65g/day'
                        },
                        zIndex: 3
                    }]
                },

                yAxis: {
                    startOnTick: false,
                    endOnTick: false,
                    title: {
                        text: 'Daily sugar intake'
                    },
                    labels: {
                        format: '{value} gr'
                    },
                    maxPadding: 0.2,
                    plotLines: [{
                        color: 'black',
                        dashStyle: 'dot',
                        width: 2,
                        value: 50,
                        label: {
                            align: 'right',
                            style: {
                                fontStyle: 'italic'
                            },
                            text: 'Safe sugar intake 50g/day',
                            x: -10
                        },
                        zIndex: 3
                    }]
                },

                tooltip: {
                    useHTML: true,
                    headerFormat: '<table>',
                    pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                        '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
                        '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
                        '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
                    footerFormat: '</table>',
                    followPointer: true
                },

                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                },

                series: [{
                    data: [
                        { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
                        { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
                        { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
                        { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
                        { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
                        { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
                        { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
                        { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
                        { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
                        { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
                        { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
                        { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
                        { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
                        { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
                        { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
                    ]
                }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getDrilldownColumnChart = function(name,option)
{
    var init = {  
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Browser market shares. January, 2018'
                },
                subtitle: {
                    text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Total percent market share'
                    }

                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },

                series: [
                    {
                        "name": "Browsers",
                        "colorByPoint": true,
                        "data": [
                            {
                                "name": "Chrome",
                                "y": 62.74,
                                "drilldown": "Chrome"
                            },
                            {
                                "name": "Firefox",
                                "y": 10.57,
                                "drilldown": "Firefox"
                            },
                            {
                                "name": "Internet Explorer",
                                "y": 7.23,
                                "drilldown": "Internet Explorer"
                            },
                            {
                                "name": "Safari",
                                "y": 5.58,
                                "drilldown": "Safari"
                            },
                            {
                                "name": "Edge",
                                "y": 4.02,
                                "drilldown": "Edge"
                            },
                            {
                                "name": "Opera",
                                "y": 1.92,
                                "drilldown": "Opera"
                            },
                            {
                                "name": "Other",
                                "y": 7.62,
                                "drilldown": null
                            }
                        ]
                    }
                ],
                drilldown: {
                    "series": [
                        {
                            "name": "Chrome",
                            "id": "Chrome",
                            "data": [
                                [
                                    "v65.0",
                                    0.1
                                ],
                                [
                                    "v64.0",
                                    1.3
                                ],
                                [
                                    "v63.0",
                                    53.02
                                ],
                                [
                                    "v62.0",
                                    1.4
                                ],
                                [
                                    "v61.0",
                                    0.88
                                ],
                                [
                                    "v60.0",
                                    0.56
                                ],
                                [
                                    "v59.0",
                                    0.45
                                ],
                                [
                                    "v58.0",
                                    0.49
                                ],
                                [
                                    "v57.0",
                                    0.32
                                ],
                                [
                                    "v56.0",
                                    0.29
                                ],
                                [
                                    "v55.0",
                                    0.79
                                ],
                                [
                                    "v54.0",
                                    0.18
                                ],
                                [
                                    "v51.0",
                                    0.13
                                ],
                                [
                                    "v49.0",
                                    2.16
                                ],
                                [
                                    "v48.0",
                                    0.13
                                ],
                                [
                                    "v47.0",
                                    0.11
                                ],
                                [
                                    "v43.0",
                                    0.17
                                ],
                                [
                                    "v29.0",
                                    0.26
                                ]
                            ]
                        },
                        {
                            "name": "Firefox",
                            "id": "Firefox",
                            "data": [
                                [
                                    "v58.0",
                                    1.02
                                ],
                                [
                                    "v57.0",
                                    7.36
                                ],
                                [
                                    "v56.0",
                                    0.35
                                ],
                                [
                                    "v55.0",
                                    0.11
                                ],
                                [
                                    "v54.0",
                                    0.1
                                ],
                                [
                                    "v52.0",
                                    0.95
                                ],
                                [
                                    "v51.0",
                                    0.15
                                ],
                                [
                                    "v50.0",
                                    0.1
                                ],
                                [
                                    "v48.0",
                                    0.31
                                ],
                                [
                                    "v47.0",
                                    0.12
                                ]
                            ]
                        },
                        {
                            "name": "Internet Explorer",
                            "id": "Internet Explorer",
                            "data": [
                                [
                                    "v11.0",
                                    6.2
                                ],
                                [
                                    "v10.0",
                                    0.29
                                ],
                                [
                                    "v9.0",
                                    0.27
                                ],
                                [
                                    "v8.0",
                                    0.47
                                ]
                            ]
                        },
                        {
                            "name": "Safari",
                            "id": "Safari",
                            "data": [
                                [
                                    "v11.0",
                                    3.39
                                ],
                                [
                                    "v10.1",
                                    0.96
                                ],
                                [
                                    "v10.0",
                                    0.36
                                ],
                                [
                                    "v9.1",
                                    0.54
                                ],
                                [
                                    "v9.0",
                                    0.13
                                ],
                                [
                                    "v5.1",
                                    0.2
                                ]
                            ]
                        },
                        {
                            "name": "Edge",
                            "id": "Edge",
                            "data": [
                                [
                                    "v16",
                                    2.6
                                ],
                                [
                                    "v15",
                                    0.92
                                ],
                                [
                                    "v14",
                                    0.4
                                ],
                                [
                                    "v13",
                                    0.1
                                ]
                            ]
                        },
                        {
                            "name": "Opera",
                            "id": "Opera",
                            "data": [
                                [
                                    "v50.0",
                                    0.96
                                ],
                                [
                                    "v49.0",
                                    0.82
                                ],
                                [
                                    "v12.1",
                                    0.14
                                ]
                            ]
                        }
                    ]
                }
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getNegativeColumnChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'column'
            },
            title: {
                text: 'Column chart with negative values'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, -2, -3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, -2, 5]
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getPlacementColumnChart = function(name,option)
{
    var init = {  
        chart: {
            type: 'column'
        },
        title: {
            text: 'Efficiency Optimization by Branch'
        },
        xAxis: {
            categories: [
                'Seattle HQ',
                'San Francisco',
                'Tokyo'
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Employees'
            }
        }, {
            title: {
                text: 'Profit (millions)'
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: '雇员',
            color: 'rgba(165,170,217,1)',
            data: [150, 73, 20],
            pointPadding: 0.3, // 通过 pointPadding 和 pointPlacement 控制柱子位置
            pointPlacement: -0.2
        }, {
            name: '优化的员工',
            color: 'rgba(126,86,134,.9)',
            data: [140, 90, 40],
            pointPadding: 0.4,
            pointPlacement: -0.2
        }, {
            name: '利润',
            color: 'rgba(248,161,63,1)',
            data: [183.6, 178.8, 198.5],
            tooltip: {  // 为当前数据列指定特定的 tooltip 选项
                valuePrefix: '$',
                valueSuffix: ' M'
            },
            pointPadding: 0.3,
            pointPlacement: 0.2,
            yAxis: 1  // 指定数据列所在的 yAxis
        }, {
            name: '优化的利润',
            color: 'rgba(186,60,61,.9)',
            data: [203.6, 198.8, 208.5],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' M'
            },
            pointPadding: 0.4,
            pointPlacement: 0.2,
            yAxis: 1
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getRangeColumnChart = function(name,option)
{
    var init = {  
        chart: {
            type: 'columnrange',
            inverted: true
        },

        title: {
            text: 'Temperature variation by month'
        },

        subtitle: {
            text: 'Observed in Vik i Sogn, Norway, 2017'
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
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}


