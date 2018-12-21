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


CustomHighchart.prototype.getColumnStackedChart = function(name,option)
{
    var init = {  
           chart: {
                type: 'column'
            },
            title: {
                text: 'Stacked column chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
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

CustomHighchart.prototype.getColumnStackGroupedChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'column'
            },

            title: {
                text: 'Total fruit consumtion, grouped by gender'
            },

            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                stack: 'male'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                stack: 'male'
            }, {
                name: 'Jane',
                data: [2, 5, 6, 2, 1],
                stack: 'female'
            }, {
                name: 'Janet',
                data: [3, 0, 4, 4, 3],
                stack: 'female'
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getColumnStackGroupedChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'column'
            },

            title: {
                text: 'Total fruit consumtion, grouped by gender'
            },

            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                stack: 'male'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                stack: 'male'
            }, {
                name: 'Jane',
                data: [2, 5, 6, 2, 1],
                stack: 'female'
            }, {
                name: 'Janet',
                data: [3, 0, 4, 4, 3],
                stack: 'female'
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getColumnStackedPercentChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'column'
            },
            title: {
                text: 'Stacked column chart'
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
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'percent'
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

CustomHighchart.prototype.getComboChart = function(name,option)
{
    var init = {  
        title: {
            text: 'Combination chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
        },
        labels: {
            items: [{
                html: 'Total fruit consumption',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Jane',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'John',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Joe',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getComboDualAxesChart = function(name,option)
{
    var init = {  
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Average Monthly Temperature and Rainfall in Tokyo'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}°C',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Rainfall',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} mm',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
            },
            series: [{
                name: 'Rainfall',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    valueSuffix: ' mm'
                }

            }, {
                name: 'Temperature',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: '°C'
                }
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getComboMultiAxesChart = function(name,option)
{
    var init = {  
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Average Monthly Weather Data for Tokyo'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}°C',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Rainfall',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} mm',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }

            }, { // Tertiary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Sea-Level Pressure',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} mb',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 55,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
            },
            series: [{
                name: 'Rainfall',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    valueSuffix: ' mm'
                }

            }, {
                name: 'Sea-Level Pressure',
                type: 'spline',
                yAxis: 2,
                data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' mb'
                }

            }, {
                name: 'Temperature',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: ' °C'
                }
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getComboRegressionChart = function(name,option)
{
    var init = {  
            xAxis: {
                min: -0.5,
                max: 5.5
            },
            yAxis: {
                min: 0
            },
            title: {
                text: 'Scatter plot with regression line'
            },
            series: [{
                type: 'line',
                name: 'Regression Line',
                data: [[0, 1.11], [5, 4.51]],
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false
            }, {
                type: 'scatter',
                name: 'Observations',
                data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
                marker: {
                    radius: 4
                }
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getFunnelChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'funnel'
            },
            title: {
                text: 'Sales funnel'
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b> ({point.y:,.0f})',
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                        softConnector: true
                    },
                    center: ['40%', '50%'],
                    neckWidth: '30%',
                    neckHeight: '25%',
                    width: '80%'
                }
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Unique users',
                data: [
                    ['Website visits', 15654],
                    ['Downloads', 4064],
                    ['Requested price list', 1987],
                    ['Invoice sent', 976],
                    ['Finalized', 846]
                ]
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getHeatmapChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'heatmap',
                marginTop: 40,
                marginBottom: 80,
                plotBorderWidth: 1
            },


            title: {
                text: 'Sales per employee per weekday'
            },

            xAxis: {
                categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
            },

            yAxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                title: null
            },

            colorAxis: {
                min: 0,
                minColor: '#FFFFFF',
                maxColor: Highcharts.getOptions().colors[0]
            },

            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 280
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
                        this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
                }
            },

            series: [{
                name: 'Sales per employee',
                borderWidth: 1,
                data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
                dataLabels: {
                    enabled: true,
                    color: '#000000'
                }
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getHistogramChart = function(name,option)
{
    var init = {  
            title: {
                text: 'Highcharts Histogram'
            },
            xAxis: [{
                title: { text: 'Data' },
                alignTicks: false
            }, {
                title: { text: 'Histogram' },
                alignTicks: false,
                opposite: true
            }],

            yAxis: [{
                title: { text: 'Data' }
            }, {
                title: { text: 'Histogram' },
                opposite: true
            }],

            series: [{
                name: 'Histogram',
                type: 'histogram',
                xAxis: 1,
                yAxis: 1,
                baseSeries: 's1',
                zIndex: -1
            }, {
                name: 'Data',
                type: 'scatter',
                data: [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3],
                id: 's1',
                marker: {
                    radius: 1.5
                }
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getLineBoostChart = function(name,option)
{
    var init = {  
          chart: {
                zoomType: 'x'
            },

            title: {
                text: 'Highcharts drawing ' + 5000 + ' points'
            },

            subtitle: {
                text: 'Using the Boost module'
            },

            tooltip: {
                valueDecimals: 2
            },

            xAxis: {
                type: 'datetime'
            },

            series: [{
                data: this.getBoostDataChart(5000),
                lineWidth: 0.5,
                name: 'Hourly data points'
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getBoostDataChart = function(n)
{
        var arr = [],
        i,
        x,
        a,
        b,
        c,
        spike;
    for (
        i = 0, x = Date.UTC(new Date().getUTCFullYear(), 0, 1) - n * 36e5;
        i < n;
        i = i + 1, x = x + 36e5
    ) {
        if (i % 100 === 0) {
            a = 2 * Math.random();
        }
        if (i % 1000 === 0) {
            b = 2 * Math.random();
        }
        if (i % 10000 === 0) {
            c = 2 * Math.random();
        }
        if (i % 50000 === 0) {
            spike = 10;
        } else {
            spike = 0;
        }
        arr.push([
            x,
            2 * Math.sin(i / 100) + a + b + c + spike + Math.random()
        ]);
    }
    return arr;
}


CustomHighchart.prototype.getLineLabelChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'line'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getParenToChart = function(name,option)
{
    var init = {  
        chart: {
            renderTo: 'container',
            type: 'column'
        },
        title: {
            text: 'Restaurants Complaints'
        },
        tooltip: {
            shared: true
        },
        xAxis: {
            categories: [
                'Overpriced',
                'Small portions',
                'Wait time',
                'Food is tasteless',
                'No atmosphere',
                'Not clean',
                'Too noisy',
                'Unfriendly staff'
            ],
            crosshair: true
        },
        yAxis: [{
            title: {
                text: ''
            }
        }, {
            title: {
                text: ''
            },
            minPadding: 0,
            maxPadding: 0,
            max: 100,
            min: 0,
            opposite: true,
            labels: {
                format: "{value}%"
            }
        }],
        series: [{
            type: 'pareto',
            name: 'Pareto',
            yAxis: 1,
            zIndex: 10,
            baseSeries: 1
        }, {
            name: 'Complaints',
            type: 'column',
            zIndex: 2,
            data: [755, 222, 151, 86, 72, 51, 36, 10]
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getDonutPieChart = function(name,option)
{
    var donutPieData = this.getDonutData();
    var init = {  
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browser market share, January, 2018'
        },
        subtitle: {
            text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Browsers',
            data: donutPieData[0],
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -30
            }
        }, {
            name: 'Versions',
            data: donutPieData[1],
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                        this.y + '%' : null;
                }
            },
            id: 'versions'
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    series: [{
                        id: 'versions',
                        dataLabels: {
                            enabled: false
                        }
                    }]
                }
            }]
        }
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getDonutData = function()
{
        var colors = Highcharts.getOptions().colors,
        categories = [
            "Chrome",
            "Firefox",
            "Internet Explorer",
            "Safari",
            "Edge",
            "Opera",
            "Other"
        ],
        data = [
            {
                "y": 62.74,
                "color": colors[2],
                "drilldown": {
                    "name": "Chrome",
                    "categories": [
                        "Chrome v65.0",
                        "Chrome v64.0",
                        "Chrome v63.0",
                        "Chrome v62.0",
                        "Chrome v61.0",
                        "Chrome v60.0",
                        "Chrome v59.0",
                        "Chrome v58.0",
                        "Chrome v57.0",
                        "Chrome v56.0",
                        "Chrome v55.0",
                        "Chrome v54.0",
                        "Chrome v51.0",
                        "Chrome v49.0",
                        "Chrome v48.0",
                        "Chrome v47.0",
                        "Chrome v43.0",
                        "Chrome v29.0"
                    ],
                    "data": [
                        0.1,
                        1.3,
                        53.02,
                        1.4,
                        0.88,
                        0.56,
                        0.45,
                        0.49,
                        0.32,
                        0.29,
                        0.79,
                        0.18,
                        0.13,
                        2.16,
                        0.13,
                        0.11,
                        0.17,
                        0.26
                    ]
                }
            },
            {
                "y": 10.57,
                "color": colors[1],
                "drilldown": {
                    "name": "Firefox",
                    "categories": [
                        "Firefox v58.0",
                        "Firefox v57.0",
                        "Firefox v56.0",
                        "Firefox v55.0",
                        "Firefox v54.0",
                        "Firefox v52.0",
                        "Firefox v51.0",
                        "Firefox v50.0",
                        "Firefox v48.0",
                        "Firefox v47.0"
                    ],
                    "data": [
                        1.02,
                        7.36,
                        0.35,
                        0.11,
                        0.1,
                        0.95,
                        0.15,
                        0.1,
                        0.31,
                        0.12
                    ]
                }
            },
            {
                "y": 7.23,
                "color": colors[0],
                "drilldown": {
                    "name": "Internet Explorer",
                    "categories": [
                        "Internet Explorer v11.0",
                        "Internet Explorer v10.0",
                        "Internet Explorer v9.0",
                        "Internet Explorer v8.0"
                    ],
                    "data": [
                        6.2,
                        0.29,
                        0.27,
                        0.47
                    ]
                }
            },
            {
                "y": 5.58,
                "color": colors[3],
                "drilldown": {
                    "name": "Safari",
                    "categories": [
                        "Safari v11.0",
                        "Safari v10.1",
                        "Safari v10.0",
                        "Safari v9.1",
                        "Safari v9.0",
                        "Safari v5.1"
                    ],
                    "data": [
                        3.39,
                        0.96,
                        0.36,
                        0.54,
                        0.13,
                        0.2
                    ]
                }
            },
            {
                "y": 4.02,
                "color": colors[5],
                "drilldown": {
                    "name": "Edge",
                    "categories": [
                        "Edge v16",
                        "Edge v15",
                        "Edge v14",
                        "Edge v13"
                    ],
                    "data": [
                        2.6,
                        0.92,
                        0.4,
                        0.1
                    ]
                }
            },
            {
                "y": 1.92,
                "color": colors[4],
                "drilldown": {
                    "name": "Opera",
                    "categories": [
                        "Opera v50.0",
                        "Opera v49.0",
                        "Opera v12.1"
                    ],
                    "data": [
                        0.96,
                        0.82,
                        0.14
                    ]
                }
            },
            {
                "y": 7.62,
                "color": colors[6],
                "drilldown": {
                    "name": 'Other',
                    "categories": [
                        'Other'
                    ],
                    "data": [
                        7.62
                    ]
                }
            }
        ],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    return [browserData,versionsData];
}

CustomHighchart.prototype.getDrillDownChart = function(name,option)
{
    var init = {  
          chart: {
                type: 'pie'
            },
            title: {
                text: 'Browser market shares. January, 2018'
            },
            subtitle: {
                text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}: {point.y:.1f}%'
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


CustomHighchart.prototype.getMonochromePieChart = function(name,option)
{
    var pieColors = (function () {
        var colors = [],
            base = Highcharts.getOptions().colors[0],
            i;

        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());
    var init = {  
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares at a specific website, 2014'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: pieColors,
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
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getSemiCirclePieChart = function(name,option)
{
    var init = {  
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Browser<br>shares<br>2017',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Chrome', 58.9],
                ['Firefox', 13.29],
                ['Internet Explorer', 13],
                ['Edge', 3.78],
                ['Safari', 3.42],
                {
                    name: 'Other',
                    y: 7.61,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getPolarChart = function(name,option)
{
    var init = {  
        chart: {
            polar: true
        },

        title: {
            text: 'Highcharts Polar Chart'
        },

        pane: {
            startAngle: 0,
            endAngle: 360
        },

        xAxis: {
            tickInterval: 45,
            min: 0,
            max: 360,
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            }
        },

        yAxis: {
            min: 0
        },

        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 45
            },
            column: {
                pointPadding: 0,
                groupPadding: 0
            }
        },

        series: [{
            type: 'column',
            name: 'Column',
            data: [8, 7, 6, 5, 4, 3, 2, 1],
            pointPlacement: 'between'
        }, {
            type: 'line',
            name: 'Line',
            data: [1, 2, 3, 4, 5, 6, 7, 8]
        }, {
            type: 'area',
            name: 'Area',
            data: [1, 8, 2, 7, 3, 6, 4, 5]
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getPolarSpiderChart = function(name,option)
{
    var init = {  
        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Budget vs spending',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                'Information Technology', 'Administration'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: 'Allocated Budget',
            data: [43000, 19000, 60000, 35000, 17000, 10000],
            pointPlacement: 'on'
        }, {
            name: 'Actual Spending',
            data: [50000, 39000, 42000, 31000, 26000, 14000],
            pointPlacement: 'on'
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}


CustomHighchart.prototype.getPolygonChart = function(name,option)
{
    var init = {  
        title: {
            text: 'Height vs Weight'
        },
        subtitle: {
            text: 'Polygon series in Highcharts'
        },
        xAxis: {
            gridLineWidth: 1,
            title: {
                enabled: true,
                text: 'Height (cm)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Weight (kg)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        series: [{
            name: 'Target',
            type: 'polygon',
            data: [[153, 42], [149, 46], [149, 55], [152, 60], [159, 70], [170, 77], [180, 70],
                [180, 60], [173, 52], [166, 45]],
            color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
            enableMouseTracking: false

        }, {
            name: 'Observations',
            type: 'scatter',
            color: Highcharts.getOptions().colors[1],
            data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]

        }],
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} cm, {point.y} kg'
        }
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getPyramidChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'pyramid'
            },
            title: {
                text: 'Sales pyramid',
                x: -50
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b> ({point.y:,.0f})',
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                        softConnector: true
                    },
                    center: ['40%', '50%'],
                    width: '80%'
                }
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Unique users',
                data: [
                    ['Website visits',      15654],
                    ['Downloads',            4064],
                    ['Requested price list', 1987],
                    ['Invoice sent',          976],
                    ['Finalized',             846]
                ]
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}


CustomHighchart.prototype.getSankeyDiagramChart = function(name,option)
{
    var init = {  
        title: {
            text: 'Highcharts Sankey Diagram'
        },

        series: [{
            keys: ['from', 'to', 'weight'],
            data: [
                ['Brazil', 'Portugal', 5 ],
                ['Brazil', 'France', 1 ],
                ['Brazil', 'Spain', 1 ],
                ['Brazil', 'England', 1 ],
                ['Canada', 'Portugal', 1 ],
                ['Canada', 'France', 5 ],
                ['Canada', 'England', 1 ],
                ['Mexico', 'Portugal', 1 ],
                ['Mexico', 'France', 1 ],
                ['Mexico', 'Spain', 5 ],
                ['Mexico', 'England', 1 ],
                ['USA', 'Portugal', 1 ],
                ['USA', 'France', 1 ],
                ['USA', 'Spain', 1 ],
                ['USA', 'England', 5 ],
                ['Portugal', 'Angola', 2 ],
                ['Portugal', 'Senegal', 1 ],
                ['Portugal', 'Morocco', 1 ],
                ['Portugal', 'South Africa', 3 ],
                ['France', 'Angola', 1 ],
                ['France', 'Senegal', 3 ],
                ['France', 'Mali', 3 ],
                ['France', 'Morocco', 3 ],
                ['France', 'South Africa', 1 ],
                ['Spain', 'Senegal', 1 ],
                ['Spain', 'Morocco', 3 ],
                ['Spain', 'South Africa', 1 ],
                ['England', 'Angola', 1 ],
                ['England', 'Senegal', 1 ],
                ['England', 'Morocco', 2 ],
                ['England', 'South Africa', 7 ],
                ['South Africa', 'China', 5 ],
                ['South Africa', 'India', 1 ],
                ['South Africa', 'Japan', 3 ],
                ['Angola', 'China', 5 ],
                ['Angola', 'India', 1 ],
                ['Angola', 'Japan', 3 ],
                ['Senegal', 'China', 5 ],
                ['Senegal', 'India', 1 ],
                ['Senegal', 'Japan', 3 ],
                ['Mali', 'China', 5 ],
                ['Mali', 'India', 1 ],
                ['Mali', 'Japan', 3 ],
                ['Morocco', 'China', 5 ],
                ['Morocco', 'India', 1 ],
                ['Morocco', 'Japan', 3 ]
            ],
            type: 'sankey',
            name: 'Sankey demo series'
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getScatterChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Height Versus Weight of 507 Individuals by Gender'
            },
            subtitle: {
                text: 'Source: Heinz  2003'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Height (cm)'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Weight (kg)'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x} cm, {point.y} kg'
                    }
                }
            },
            series: [{
                name: 'Female',
                color: 'rgba(223, 83, 83, .5)',
                data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                    [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                    [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                    [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                    [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                    [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                    [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                    [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                    [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                    [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                    [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                    [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                    [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                    [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                    [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                    [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                    [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                    [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                    [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                    [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                    [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                    [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                    [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                    [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                    [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                    [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                    [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                    [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                    [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                    [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                    [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                    [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                    [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                    [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                    [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                    [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                    [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                    [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                    [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                    [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                    [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                    [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                    [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                    [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                    [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                    [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                    [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                    [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                    [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                    [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                    [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                    [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]

            }, {
                name: 'Male',
                color: 'rgba(119, 152, 191, .5)',
                data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                    [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                    [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                    [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
                    [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
                    [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
                    [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
                    [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
                    [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
                    [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
                    [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
                    [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
                    [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
                    [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
                    [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
                    [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
                    [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
                    [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
                    [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
                    [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
                    [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
                    [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
                    [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
                    [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
                    [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
                    [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
                    [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
                    [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
                    [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
                    [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                    [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
                    [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
                    [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
                    [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                    [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                    [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                    [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
                    [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
                    [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
                    [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
                    [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
                    [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
                    [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
                    [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
                    [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
                    [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
                    [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
                    [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
                    [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                    [180.3, 83.2], [180.3, 83.2]]
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}


CustomHighchart.prototype.getScatterBoostChart = function(name,option)
{
    var data = [],
    n = 1000000,
    i;
    for (i = 0; i < n; i += 1) {
        data.push([
            Math.pow(Math.random(), 2) * 100,
            Math.pow(Math.random(), 2) * 100
        ]);
    }

    if (!Highcharts.Series.prototype.renderCanvas) {
        throw 'Module not loaded';
    }
    var init = {  
           chart: {
                zoomType: 'xy',
                height: '100%'
            },

            boost: {
                useGPUTranslations: true,
                usePreAllocated: true
            },

            xAxis: {
                min: 0,
                max: 100,
                gridLineWidth: 1
            },

            yAxis: {
                // Renders faster when we don't have to compute min and max
                min: 0,
                max: 100,
                minPadding: 0,
                maxPadding: 0,
                title: {
                    text: null
                }
            },

            title: {
                text: 'Scatter chart with 500 points'
            },

            legend: {
                enabled: false
            },

            series: [{
                type: 'scatter',
                color: 'rgba(152,0,67,0.1)',
                data: data,
                marker: {
                    radius: 0.1
                },
                tooltip: {
                    followPointer: false,
                    pointFormat: '[{point.x:.1f}, {point.y:.1f}]'
                }
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getSplineIrregularTimeChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Snow depth at Vikjafjellet, Norway'
            },
            subtitle: {
                text: 'Irregular time data in Highcharts JS'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'Snow depth (m)'
                },
                min: 0
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
            },

            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },

            colors: ['#6CF', '#39F', '#06C', '#036', '#000'],

            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            series: [{
                name: "Winter 2014-2015",
                data: [
                    [Date.UTC(1970, 10, 25), 0],
                    [Date.UTC(1970, 11,  6), 0.25],
                    [Date.UTC(1970, 11, 20), 1.41],
                    [Date.UTC(1970, 11, 25), 1.64],
                    [Date.UTC(1971, 0,  4), 1.6],
                    [Date.UTC(1971, 0, 17), 2.55],
                    [Date.UTC(1971, 0, 24), 2.62],
                    [Date.UTC(1971, 1,  4), 2.5],
                    [Date.UTC(1971, 1, 14), 2.42],
                    [Date.UTC(1971, 2,  6), 2.74],
                    [Date.UTC(1971, 2, 14), 2.62],
                    [Date.UTC(1971, 2, 24), 2.6],
                    [Date.UTC(1971, 3,  1), 2.81],
                    [Date.UTC(1971, 3, 11), 2.63],
                    [Date.UTC(1971, 3, 27), 2.77],
                    [Date.UTC(1971, 4,  4), 2.68],
                    [Date.UTC(1971, 4,  9), 2.56],
                    [Date.UTC(1971, 4, 14), 2.39],
                    [Date.UTC(1971, 4, 19), 2.3],
                    [Date.UTC(1971, 5,  4), 2],
                    [Date.UTC(1971, 5,  9), 1.85],
                    [Date.UTC(1971, 5, 14), 1.49],
                    [Date.UTC(1971, 5, 19), 1.27],
                    [Date.UTC(1971, 5, 24), 0.99],
                    [Date.UTC(1971, 5, 29), 0.67],
                    [Date.UTC(1971, 6,  3), 0.18],
                    [Date.UTC(1971, 6,  4), 0]
                ]
            }, {
                name: "Winter 2015-2016",
                data: [
                    [Date.UTC(1970, 10,  9), 0],
                    [Date.UTC(1970, 10, 15), 0.23],
                    [Date.UTC(1970, 10, 20), 0.25],
                    [Date.UTC(1970, 10, 25), 0.23],
                    [Date.UTC(1970, 10, 30), 0.39],
                    [Date.UTC(1970, 11,  5), 0.41],
                    [Date.UTC(1970, 11, 10), 0.59],
                    [Date.UTC(1970, 11, 15), 0.73],
                    [Date.UTC(1970, 11, 20), 0.41],
                    [Date.UTC(1970, 11, 25), 1.07],
                    [Date.UTC(1970, 11, 30), 0.88],
                    [Date.UTC(1971, 0,  5), 0.85],
                    [Date.UTC(1971, 0, 11), 0.89],
                    [Date.UTC(1971, 0, 17), 1.04],
                    [Date.UTC(1971, 0, 20), 1.02],
                    [Date.UTC(1971, 0, 25), 1.03],
                    [Date.UTC(1971, 0, 30), 1.39],
                    [Date.UTC(1971, 1,  5), 1.77],
                    [Date.UTC(1971, 1, 26), 2.12],
                    [Date.UTC(1971, 3, 19), 2.1],
                    [Date.UTC(1971, 4,  9), 1.7],
                    [Date.UTC(1971, 4, 29), 0.85],
                    [Date.UTC(1971, 5,  7), 0]
                ]
            }, {
                name: "Winter 2016-2017",
                data: [
                    [Date.UTC(1970, 9, 15), 0],
                    [Date.UTC(1970, 9, 31), 0.09],
                    [Date.UTC(1970, 10,  7), 0.17],
                    [Date.UTC(1970, 10, 10), 0.1],
                    [Date.UTC(1970, 11, 10), 0.1],
                    [Date.UTC(1970, 11, 13), 0.1],
                    [Date.UTC(1970, 11, 16), 0.11],
                    [Date.UTC(1970, 11, 19), 0.11],
                    [Date.UTC(1970, 11, 22), 0.08],
                    [Date.UTC(1970, 11, 25), 0.23],
                    [Date.UTC(1970, 11, 28), 0.37],
                    [Date.UTC(1971, 0, 16), 0.68],
                    [Date.UTC(1971, 0, 19), 0.55],
                    [Date.UTC(1971, 0, 22), 0.4],
                    [Date.UTC(1971, 0, 25), 0.4],
                    [Date.UTC(1971, 0, 28), 0.37],
                    [Date.UTC(1971, 0, 31), 0.43],
                    [Date.UTC(1971, 1,  4), 0.42],
                    [Date.UTC(1971, 1,  7), 0.39],
                    [Date.UTC(1971, 1, 10), 0.39],
                    [Date.UTC(1971, 1, 13), 0.39],
                    [Date.UTC(1971, 1, 16), 0.39],
                    [Date.UTC(1971, 1, 19), 0.35],
                    [Date.UTC(1971, 1, 22), 0.45],
                    [Date.UTC(1971, 1, 25), 0.62],
                    [Date.UTC(1971, 1, 28), 0.68],
                    [Date.UTC(1971, 2,  4), 0.68],
                    [Date.UTC(1971, 2,  7), 0.65],
                    [Date.UTC(1971, 2, 10), 0.65],
                    [Date.UTC(1971, 2, 13), 0.75],
                    [Date.UTC(1971, 2, 16), 0.86],
                    [Date.UTC(1971, 2, 19), 1.14],
                    [Date.UTC(1971, 2, 22), 1.2],
                    [Date.UTC(1971, 2, 25), 1.27],
                    [Date.UTC(1971, 2, 27), 1.12],
                    [Date.UTC(1971, 2, 30), 0.98],
                    [Date.UTC(1971, 3,  3), 0.85],
                    [Date.UTC(1971, 3,  6), 1.04],
                    [Date.UTC(1971, 3,  9), 0.92],
                    [Date.UTC(1971, 3, 12), 0.96],
                    [Date.UTC(1971, 3, 15), 0.94],
                    [Date.UTC(1971, 3, 18), 0.99],
                    [Date.UTC(1971, 3, 21), 0.96],
                    [Date.UTC(1971, 3, 24), 1.15],
                    [Date.UTC(1971, 3, 27), 1.18],
                    [Date.UTC(1971, 3, 30), 1.12],
                    [Date.UTC(1971, 4,  3), 1.06],
                    [Date.UTC(1971, 4,  6), 0.96],
                    [Date.UTC(1971, 4,  9), 0.87],
                    [Date.UTC(1971, 4, 12), 0.88],
                    [Date.UTC(1971, 4, 15), 0.79],
                    [Date.UTC(1971, 4, 18), 0.54],
                    [Date.UTC(1971, 4, 21), 0.34],
                    [Date.UTC(1971, 4, 25), 0]
                ]
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}


CustomHighchart.prototype.getSplinePlotBandsChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'spline',
                scrollablePlotArea: {
                    minWidth: 600,
                    scrollPositionX: 1
                }
            },
            title: {
                text: 'Wind speed during two days'
            },
            subtitle: {
                text: '13th & 14th of February, 2018 at two locations in Vik i Sogn, Norway'
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    overflow: 'justify'
                }
            },
            yAxis: {
                title: {
                    text: 'Wind speed (m/s)'
                },
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                plotBands: [{ // Light air
                    from: 0.3,
                    to: 1.5,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        text: 'Light air',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Light breeze
                    from: 1.5,
                    to: 3.3,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        text: 'Light breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Gentle breeze
                    from: 3.3,
                    to: 5.5,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        text: 'Gentle breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Moderate breeze
                    from: 5.5,
                    to: 8,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        text: 'Moderate breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Fresh breeze
                    from: 8,
                    to: 11,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        text: 'Fresh breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Strong breeze
                    from: 11,
                    to: 14,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        text: 'Strong breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // High wind
                    from: 14,
                    to: 15,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        text: 'High wind',
                        style: {
                            color: '#606060'
                        }
                    }
                }]
            },
            tooltip: {
                valueSuffix: ' m/s'
            },
            plotOptions: {
                spline: {
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    },
                    pointInterval: 3600000, // one hour
                    pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
                }
            },
            series: [{
                name: 'Hestavollane',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]

            }, {
                name: 'Vik',
                data: [
                    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
                    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
                    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
                    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
                    1.5
                ]
            }],
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getSplineSymbolsChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Tokyo',
                marker: {
                    symbol: 'square'
                },
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                    y: 26.5,
                    marker: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    }
                }, 23.3, 18.3, 13.9, 9.6]

            }, {
                name: 'London',
                marker: {
                    symbol: 'diamond'
                },
                data: [{
                    y: 3.9,
                    marker: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
                    }
                }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getStreamgraphChart = function(name,option)
{
    var colors = Highcharts.getOptions().colors;
    var init = {  
           chart: {
                type: 'streamgraph',
                marginBottom: 30,
                zoomType: 'x'
            },

            // Make sure connected countries have similar colors
            colors: [
                colors[0],
                colors[1],
                colors[2],
                colors[3],
                colors[4],
                // East Germany, West Germany and Germany
                Highcharts.color(colors[5]).brighten(0.2).get(),
                Highcharts.color(colors[5]).brighten(0.1).get(),

                colors[5],
                colors[6],
                colors[7],
                colors[8],
                colors[9],
                colors[0],
                colors[1],
                colors[3],
                // Soviet Union, Russia
                Highcharts.color(colors[2]).brighten(-0.1).get(),
                Highcharts.color(colors[2]).brighten(-0.2).get(),
                Highcharts.color(colors[2]).brighten(-0.3).get()
            ],

            title: {
                floating: true,
                align: 'left',
                text: 'Winter Olympic Medal Wins'
            },
            subtitle: {
                floating: true,
                align: 'left',
                y: 30,
                text: 'Source: <a href="https://www.sports-reference.com/olympics/winter/1924/">sports-reference.com</a>'
            },

            xAxis: {
                maxPadding: 0,
                type: 'category',
                crosshair: true,
                categories: [
                    '',
                    '1924 Chamonix',
                    '1928 St. Moritz',
                    '1932 Lake Placid',
                    '1936 Garmisch-Partenkirchen',
                    '1940 <i>Cancelled (Sapporo)</i>',
                    '1944 <i>Cancelled (Cortina d\'Ampezzo)</i>',
                    '1948 St. Moritz',
                    '1952 Oslo',
                    '1956 Cortina d\'Ampezzo',
                    '1960 Squaw Valley',
                    '1964 Innsbruck',
                    '1968 Grenoble',
                    '1972 Sapporo',
                    '1976 Innsbruck',
                    '1980 Lake Placid',
                    '1984 Sarajevo',
                    '1988 Calgary',
                    '1992 Albertville',
                    '1994 Lillehammer',
                    '1998 Nagano',
                    '2002 Salt Lake City',
                    '2006 Turin',
                    '2010 Vancouver',
                    '2014 Sochi'
                ],
                labels: {
                    align: 'left',
                    reserveSpace: false,
                    rotation: 270
                },
                lineWidth: 0,
                margin: 20,
                tickWidth: 0
            },

            yAxis: {
                visible: false,
                startOnTick: false,
                endOnTick: false
            },

            legend: {
                enabled: false
            },

            annotations: [{
                labels: [{
                    point: {
                        x: 5.5,
                        xAxis: 0,
                        y: 30,
                        yAxis: 0
                    },
                    text: 'Cancelled<br>during<br>World War II'
                }, {
                    point: {
                        x: 18,
                        xAxis: 0,
                        y: 90,
                        yAxis: 0
                    },
                    text: 'Soviet Union fell,<br>Germany united'
                }],
                labelOptions: {
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    borderColor: 'silver'
                }
            }],

            plotOptions: {
                series: {
                    label: {
                        minFontSize: 5,
                        maxFontSize: 15,
                        style: {
                            color: 'rgba(255,255,255,0.75)'
                        }
                    }
                }
            },

            // Data parsed with olympic-medals.node.js
            series: [{
                "name": "Finland",
                "data": [
                    0, 11, 4, 3, 6, 0, 0, 6, 9, 7, 8, 10, 5, 5, 7, 9, 13, 7, 7, 6, 12, 7, 9, 5, 5
                ]
            }, {
                "name": "Austria",
                "data": [
                    0, 3, 4, 2, 4, 0, 0, 8, 8, 11, 6, 12, 11, 5, 6, 7, 1, 10, 21, 9, 17, 17, 23, 16, 17
                ]
            }, {
                "name": "Sweden",
                "data": [
                    0, 2, 5, 3, 7, 0, 0, 10, 4, 10, 7, 7, 8, 4, 2, 4, 8, 6, 4, 3, 3, 7, 14, 11, 15
                ]
            }, {
                "name": "Norway",
                "data": [
                    0, 17, 15, 10, 15, 0, 0, 10, 16, 4, 6, 15, 14, 12, 7, 10, 9, 5, 20, 26, 25, 25, 19, 23, 26
                ]
            }, {
                "name": "U.S.",
                "data": [
                    0, 4, 6, 12, 4, 0, 0, 9, 11, 7, 10, 7, 7, 8, 10, 12, 8, 6, 11, 13, 13, 34, 25, 37, 28
                ]
            }, {
                "name": "East Germany",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 14, 19, 23, 24, 25, 0, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "West Germany",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 5, 10, 5, 4, 8, 0, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "Germany",
                "data": [
                    0, 0, 1, 2, 6, 0, 0, 0, 7, 2, 8, 9, 0, 0, 0, 0, 0, 0, 26, 24, 29, 36, 29, 30, 19
                ]
            }, {
                "name": "Netherlands",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 2, 9, 9, 6, 4, 0, 7, 4, 4, 11, 8, 9, 8, 24
                ]
            }, {
                "name": "Italy",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 1, 4, 4, 5, 4, 2, 2, 5, 14, 20, 10, 13, 11, 5, 8
                ]
            }, {
                "name": "Canada",
                "data": [
                    0, 1, 1, 7, 1, 0, 0, 3, 2, 3, 4, 3, 3, 1, 3, 2, 4, 5, 7, 13, 15, 17, 24, 26, 25
                ]
            }, {
                "name": "Switzerland",
                "data": [
                    0, 3, 1, 1, 3, 0, 0, 10, 2, 6, 2, 0, 6, 10, 5, 5, 5, 15, 3, 9, 7, 11, 14, 9, 11
                ]
            }, {
                "name": "Great Britain",
                "data": [
                    0, 4, 1, 0, 3, 0, 0, 2, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 2, 1, 2, 1, 1, 4
                ]
            }, {
                "name": "France",
                "data": [
                    0, 3, 1, 1, 1, 0, 0, 5, 1, 0, 3, 7, 9, 3, 1, 1, 3, 2, 9, 5, 8, 11, 9, 11, 15
                ]
            }, {
                "name": "Hungary",
                "data": [
                    0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "Unified Team",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "Soviet Union",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 21, 25, 13, 16, 27, 22, 25, 29, 0, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "Russia",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 18, 13, 22, 15, 33
                ]
            }, {
                "name": "Japan",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 1, 1, 1, 7, 5, 10, 2, 1, 5, 8
                ]
            }, {
                "name": "Czechoslovakia",
                "data": [
                    0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 4, 3, 1, 1, 6, 3, 3, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "Poland",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 6, 6
                ]
            }, {
                "name": "Spain",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "China",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 8, 8, 11, 11, 9
                ]
            }, {
                "name": "South Korea",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6, 6, 4, 11, 14, 8
                ]
            }, {
                "name": "Czech Republic",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 6, 8
                ]
            }, {
                "name": "Belarus",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 3, 6
                ]
            }, {
                "name": "Kazakhstan",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 1, 1
                ]
            }, {
                "name": "Bulgaria",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 3, 1, 0, 0
                ]
            }, {
                "name": "Denmark",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0
                ]
            }, {
                "name": "Ukraine",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 0, 2
                ]
            }, {
                "name": "Australia",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3
                ]
            }, {
                "name": "Belgium",
                "data": [
                    0, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0
                ]
            }, {
                "name": "Romania",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "Liechtenstein",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "Yugoslavia",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "Luxembourg",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "New Zealand",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "North Korea",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0
                ]
            }, {
                "name": "Slovakia",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1
                ]
            }, {
                "name": "Croatia",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 3, 1
                ]
            }, {
                "name": "Slovenia",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 8
                ]
            }, {
                "name": "Latvia",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4
                ]
            }, {
                "name": "Estonia",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 0
                ]
            }, {
                "name": "Uzbekistan",
                "data": [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0
                ]
            }],

            exporting: {
                sourceWidth: 800,
                sourceHeight: 600
            }

    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getTreemapChart = function(name,option)
{
    var init = {  
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
        }
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}


CustomHighchart.prototype.getTreemapLevelChart = function(name,option)
{
    var init = {  
            series: [{
                type: "treemap",
                layoutAlgorithm: 'stripes',
                alternateStartingDirection: true,
                levels: [{
                    level: 1,
                    layoutAlgorithm: 'sliceAndDice',
                    dataLabels: {
                        enabled: true,
                        align: 'left',
                        verticalAlign: 'top',
                        style: {
                            fontSize: '15px',
                            fontWeight: 'bold'
                        }
                    }
                }],
                data: [{
                    id: 'A',
                    name: 'Apples',
                    color: "#EC2500"
                }, {
                    id: 'B',
                    name: 'Bananas',
                    color: "#ECE100"
                }, {
                    id: 'O',
                    name: 'Oranges',
                    color: '#EC9800'
                }, {
                    name: 'Anne',
                    parent: 'A',
                    value: 5
                }, {
                    name: 'Rick',
                    parent: 'A',
                    value: 3
                }, {
                    name: 'Peter',
                    parent: 'A',
                    value: 4
                }, {
                    name: 'Anne',
                    parent: 'B',
                    value: 4
                }, {
                    name: 'Rick',
                    parent: 'B',
                    value: 10
                }, {
                    name: 'Peter',
                    parent: 'B',
                    value: 1
                }, {
                    name: 'Anne',
                    parent: 'O',
                    value: 1
                }, {
                    name: 'Rick',
                    parent: 'O',
                    value: 3
                }, {
                    name: 'Peter',
                    parent: 'O',
                    value: 3
                }, {
                    name: 'Susanne',
                    parent: 'Kiwi',
                    value: 2,
                    color: '#9EDE00'
                }]
            }],
            title: {
                text: 'Fruit consumption'
            }
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}


CustomHighchart.prototype.getVariablePieChart = function(name,option)
{
    var init = {  
        chart: {
            type: 'variablepie'
        },
        title: {
            text: 'Countries compared by population density and total area.'
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                'Area (square km): <b>{point.y}</b><br/>' +
                'Population density (people per square km): <b>{point.z}</b><br/>'
        },
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
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getVariwideChart = function(name,option)
{
    var init = {  
        chart: {
            type: 'variwide'
        },

        title: {
            text: 'Labor Costs in Europe, 2016'
        },

        subtitle: {
            text: 'Source: <a href="http://ec.europa.eu/eurostat/web/' +
                'labour-market/labour-costs/main-tables">eurostat</a>'
        },

        xAxis: {
            type: 'category',
            title: {
                text: 'Column widths are proportional to GDP'
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Labor Costs',
            data: [
                ['Norway', 50.2, 335504],
                ['Denmark', 42, 277339],
                ['Belgium', 39.2, 421611],
                ['Sweden', 38, 462057],
                ['France', 35.6, 2228857],
                ['Netherlands', 34.3, 702641],
                ['Finland', 33.2, 215615],
                ['Germany', 33.0, 3144050],
                ['Austria', 32.7, 349344],
                ['Ireland', 30.4, 275567],
                ['Italy', 27.8, 1672438],
                ['United Kingdom', 26.7, 2366911],
                ['Spain', 21.3, 1113851],
                ['Greece', 14.2, 175887],
                ['Portugal', 13.7, 184933],
                ['Czech Republic', 10.2, 176564],
                ['Poland', 8.6, 424269],
                ['Romania', 5.5, 169578]

            ],
            dataLabels: {
                enabled: true,
                format: '€{point.y:.0f}'
            },
            tooltip: {
                pointFormat: 'Labor Costs: <b>€ {point.y}/h</b><br>' +
                    'GDP: <b>€ {point.z} million</b><br>'
            },
            colorByPoint: true
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getVectorChart = function(name,option)
{
    var init = {  
            title: {
                text: 'Highcharts Vector plot'
            },
            xAxis: {
                min: 0,
                max: 100,
                gridLineWidth: 1
            },
            yAxis: {
                min: 0,
                max: 100
            },
            series: [{
                type: 'vector',
                name: 'Sample vector field',
                color: Highcharts.getOptions().colors[1],
                data: [
                    [5, 5, 190, 18],
                    [5, 10, 185, 27],
                    [5, 15, 180, 36],
                    [5, 20, 175, 45],
                    [5, 25, 170, 54],
                    [5, 30, 165, 63],
                    [5, 35, 160, 72],
                    [5, 40, 155, 81],
                    [5, 45, 150, 90],
                    [5, 50, 145, 99],
                    [5, 55, 140, 108],
                    [5, 60, 135, 117],
                    [5, 65, 130, 126],
                    [5, 70, 125, 135],
                    [5, 75, 120, 144],
                    [5, 80, 115, 153],
                    [5, 85, 110, 162],
                    [5, 90, 105, 171],
                    [5, 95, 100, 180],
                    [10, 5, 185, 27],
                    [10, 10, 180, 36],
                    [10, 15, 175, 45],
                    [10, 20, 170, 54],
                    [10, 25, 165, 63],
                    [10, 30, 160, 72],
                    [10, 35, 155, 81],
                    [10, 40, 150, 90],
                    [10, 45, 145, 99],
                    [10, 50, 140, 108],
                    [10, 55, 135, 117],
                    [10, 60, 130, 126],
                    [10, 65, 125, 135],
                    [10, 70, 120, 144],
                    [10, 75, 115, 153],
                    [10, 80, 110, 162],
                    [10, 85, 105, 171],
                    [10, 90, 100, 180],
                    [10, 95, 95, 189],
                    [15, 5, 180, 36],
                    [15, 10, 175, 45],
                    [15, 15, 170, 54],
                    [15, 20, 165, 63],
                    [15, 25, 160, 72],
                    [15, 30, 155, 81],
                    [15, 35, 150, 90],
                    [15, 40, 145, 99],
                    [15, 45, 140, 108],
                    [15, 50, 135, 117],
                    [15, 55, 130, 126],
                    [15, 60, 125, 135],
                    [15, 65, 120, 144],
                    [15, 70, 115, 153],
                    [15, 75, 110, 162],
                    [15, 80, 105, 171],
                    [15, 85, 100, 180],
                    [15, 90, 95, 189],
                    [15, 95, 90, 198],
                    [20, 5, 175, 45],
                    [20, 10, 170, 54],
                    [20, 15, 165, 63],
                    [20, 20, 160, 72],
                    [20, 25, 155, 81],
                    [20, 30, 150, 90],
                    [20, 35, 145, 99],
                    [20, 40, 140, 108],
                    [20, 45, 135, 117],
                    [20, 50, 130, 126],
                    [20, 55, 125, 135],
                    [20, 60, 120, 144],
                    [20, 65, 115, 153],
                    [20, 70, 110, 162],
                    [20, 75, 105, 171],
                    [20, 80, 100, 180],
                    [20, 85, 95, 189],
                    [20, 90, 90, 198],
                    [20, 95, 85, 207],
                    [25, 5, 170, 54],
                    [25, 10, 165, 63],
                    [25, 15, 160, 72],
                    [25, 20, 155, 81],
                    [25, 25, 150, 90],
                    [25, 30, 145, 99],
                    [25, 35, 140, 108],
                    [25, 40, 135, 117],
                    [25, 45, 130, 126],
                    [25, 50, 125, 135],
                    [25, 55, 120, 144],
                    [25, 60, 115, 153],
                    [25, 65, 110, 162],
                    [25, 70, 105, 171],
                    [25, 75, 100, 180],
                    [25, 80, 95, 189],
                    [25, 85, 90, 198],
                    [25, 90, 85, 207],
                    [25, 95, 80, 216],
                    [30, 5, 165, 63],
                    [30, 10, 160, 72],
                    [30, 15, 155, 81],
                    [30, 20, 150, 90],
                    [30, 25, 145, 99],
                    [30, 30, 140, 108],
                    [30, 35, 135, 117],
                    [30, 40, 130, 126],
                    [30, 45, 125, 135],
                    [30, 50, 120, 144],
                    [30, 55, 115, 153],
                    [30, 60, 110, 162],
                    [30, 65, 105, 171],
                    [30, 70, 100, 180],
                    [30, 75, 95, 189],
                    [30, 80, 90, 198],
                    [30, 85, 85, 207],
                    [30, 90, 80, 216],
                    [30, 95, 75, 225],
                    [35, 5, 160, 72],
                    [35, 10, 155, 81],
                    [35, 15, 150, 90],
                    [35, 20, 145, 99],
                    [35, 25, 140, 108],
                    [35, 30, 135, 117],
                    [35, 35, 130, 126],
                    [35, 40, 125, 135],
                    [35, 45, 120, 144],
                    [35, 50, 115, 153],
                    [35, 55, 110, 162],
                    [35, 60, 105, 171],
                    [35, 65, 100, 180],
                    [35, 70, 95, 189],
                    [35, 75, 90, 198],
                    [35, 80, 85, 207],
                    [35, 85, 80, 216],
                    [35, 90, 75, 225],
                    [35, 95, 70, 234],
                    [40, 5, 155, 81],
                    [40, 10, 150, 90],
                    [40, 15, 145, 99],
                    [40, 20, 140, 108],
                    [40, 25, 135, 117],
                    [40, 30, 130, 126],
                    [40, 35, 125, 135],
                    [40, 40, 120, 144],
                    [40, 45, 115, 153],
                    [40, 50, 110, 162],
                    [40, 55, 105, 171],
                    [40, 60, 100, 180],
                    [40, 65, 95, 189],
                    [40, 70, 90, 198],
                    [40, 75, 85, 207],
                    [40, 80, 80, 216],
                    [40, 85, 75, 225],
                    [40, 90, 70, 234],
                    [40, 95, 65, 243],
                    [45, 5, 150, 90],
                    [45, 10, 145, 99],
                    [45, 15, 140, 108],
                    [45, 20, 135, 117],
                    [45, 25, 130, 126],
                    [45, 30, 125, 135],
                    [45, 35, 120, 144],
                    [45, 40, 115, 153],
                    [45, 45, 110, 162],
                    [45, 50, 105, 171],
                    [45, 55, 100, 180],
                    [45, 60, 95, 189],
                    [45, 65, 90, 198],
                    [45, 70, 85, 207],
                    [45, 75, 80, 216],
                    [45, 80, 75, 225],
                    [45, 85, 70, 234],
                    [45, 90, 65, 243],
                    [45, 95, 60, 252],
                    [50, 5, 145, 99],
                    [50, 10, 140, 108],
                    [50, 15, 135, 117],
                    [50, 20, 130, 126],
                    [50, 25, 125, 135],
                    [50, 30, 120, 144],
                    [50, 35, 115, 153],
                    [50, 40, 110, 162],
                    [50, 45, 105, 171],
                    [50, 50, 100, 180],
                    [50, 55, 95, 189],
                    [50, 60, 90, 198],
                    [50, 65, 85, 207],
                    [50, 70, 80, 216],
                    [50, 75, 75, 225],
                    [50, 80, 70, 234],
                    [50, 85, 65, 243],
                    [50, 90, 60, 252],
                    [50, 95, 55, 261],
                    [55, 5, 140, 108],
                    [55, 10, 135, 117],
                    [55, 15, 130, 126],
                    [55, 20, 125, 135],
                    [55, 25, 120, 144],
                    [55, 30, 115, 153],
                    [55, 35, 110, 162],
                    [55, 40, 105, 171],
                    [55, 45, 100, 180],
                    [55, 50, 95, 189],
                    [55, 55, 90, 198],
                    [55, 60, 85, 207],
                    [55, 65, 80, 216],
                    [55, 70, 75, 225],
                    [55, 75, 70, 234],
                    [55, 80, 65, 243],
                    [55, 85, 60, 252],
                    [55, 90, 55, 261],
                    [55, 95, 50, 270],
                    [60, 5, 135, 117],
                    [60, 10, 130, 126],
                    [60, 15, 125, 135],
                    [60, 20, 120, 144],
                    [60, 25, 115, 153],
                    [60, 30, 110, 162],
                    [60, 35, 105, 171],
                    [60, 40, 100, 180],
                    [60, 45, 95, 189],
                    [60, 50, 90, 198],
                    [60, 55, 85, 207],
                    [60, 60, 80, 216],
                    [60, 65, 75, 225],
                    [60, 70, 70, 234],
                    [60, 75, 65, 243],
                    [60, 80, 60, 252],
                    [60, 85, 55, 261],
                    [60, 90, 50, 270],
                    [60, 95, 45, 279],
                    [65, 5, 130, 126],
                    [65, 10, 125, 135],
                    [65, 15, 120, 144],
                    [65, 20, 115, 153],
                    [65, 25, 110, 162],
                    [65, 30, 105, 171],
                    [65, 35, 100, 180],
                    [65, 40, 95, 189],
                    [65, 45, 90, 198],
                    [65, 50, 85, 207],
                    [65, 55, 80, 216],
                    [65, 60, 75, 225],
                    [65, 65, 70, 234],
                    [65, 70, 65, 243],
                    [65, 75, 60, 252],
                    [65, 80, 55, 261],
                    [65, 85, 50, 270],
                    [65, 90, 45, 279],
                    [65, 95, 40, 288],
                    [70, 5, 125, 135],
                    [70, 10, 120, 144],
                    [70, 15, 115, 153],
                    [70, 20, 110, 162],
                    [70, 25, 105, 171],
                    [70, 30, 100, 180],
                    [70, 35, 95, 189],
                    [70, 40, 90, 198],
                    [70, 45, 85, 207],
                    [70, 50, 80, 216],
                    [70, 55, 75, 225],
                    [70, 60, 70, 234],
                    [70, 65, 65, 243],
                    [70, 70, 60, 252],
                    [70, 75, 55, 261],
                    [70, 80, 50, 270],
                    [70, 85, 45, 279],
                    [70, 90, 40, 288],
                    [70, 95, 35, 297],
                    [75, 5, 120, 144],
                    [75, 10, 115, 153],
                    [75, 15, 110, 162],
                    [75, 20, 105, 171],
                    [75, 25, 100, 180],
                    [75, 30, 95, 189],
                    [75, 35, 90, 198],
                    [75, 40, 85, 207],
                    [75, 45, 80, 216],
                    [75, 50, 75, 225],
                    [75, 55, 70, 234],
                    [75, 60, 65, 243],
                    [75, 65, 60, 252],
                    [75, 70, 55, 261],
                    [75, 75, 50, 270],
                    [75, 80, 45, 279],
                    [75, 85, 40, 288],
                    [75, 90, 35, 297],
                    [75, 95, 30, 306],
                    [80, 5, 115, 153],
                    [80, 10, 110, 162],
                    [80, 15, 105, 171],
                    [80, 20, 100, 180],
                    [80, 25, 95, 189],
                    [80, 30, 90, 198],
                    [80, 35, 85, 207],
                    [80, 40, 80, 216],
                    [80, 45, 75, 225],
                    [80, 50, 70, 234],
                    [80, 55, 65, 243],
                    [80, 60, 60, 252],
                    [80, 65, 55, 261],
                    [80, 70, 50, 270],
                    [80, 75, 45, 279],
                    [80, 80, 40, 288],
                    [80, 85, 35, 297],
                    [80, 90, 30, 306],
                    [80, 95, 25, 315],
                    [85, 5, 110, 162],
                    [85, 10, 105, 171],
                    [85, 15, 100, 180],
                    [85, 20, 95, 189],
                    [85, 25, 90, 198],
                    [85, 30, 85, 207],
                    [85, 35, 80, 216],
                    [85, 40, 75, 225],
                    [85, 45, 70, 234],
                    [85, 50, 65, 243],
                    [85, 55, 60, 252],
                    [85, 60, 55, 261],
                    [85, 65, 50, 270],
                    [85, 70, 45, 279],
                    [85, 75, 40, 288],
                    [85, 80, 35, 297],
                    [85, 85, 30, 306],
                    [85, 90, 25, 315],
                    [85, 95, 20, 324],
                    [90, 5, 105, 171],
                    [90, 10, 100, 180],
                    [90, 15, 95, 189],
                    [90, 20, 90, 198],
                    [90, 25, 85, 207],
                    [90, 30, 80, 216],
                    [90, 35, 75, 225],
                    [90, 40, 70, 234],
                    [90, 45, 65, 243],
                    [90, 50, 60, 252],
                    [90, 55, 55, 261],
                    [90, 60, 50, 270],
                    [90, 65, 45, 279],
                    [90, 70, 40, 288],
                    [90, 75, 35, 297],
                    [90, 80, 30, 306],
                    [90, 85, 25, 315],
                    [90, 90, 20, 324],
                    [90, 95, 15, 333],
                    [95, 5, 100, 180],
                    [95, 10, 95, 189],
                    [95, 15, 90, 198],
                    [95, 20, 85, 207],
                    [95, 25, 80, 216],
                    [95, 30, 75, 225],
                    [95, 35, 70, 234],
                    [95, 40, 65, 243],
                    [95, 45, 60, 252],
                    [95, 50, 55, 261],
                    [95, 55, 50, 270],
                    [95, 60, 45, 279],
                    [95, 65, 40, 288],
                    [95, 70, 35, 297],
                    [95, 75, 30, 306],
                    [95, 80, 25, 315],
                    [95, 85, 20, 324],
                    [95, 90, 15, 333],
                    [95, 95, 10, 342]
                ]
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getWaterFallChart = function(name,option)
{
    var init = {  
        chart: {
                type: 'waterfall'
            },

            title: {
                text: 'Highcharts Waterfall'
            },

            xAxis: {
                type: 'category'
            },

            yAxis: {
                title: {
                    text: 'USD'
                }
            },

            legend: {
                enabled: false
            },

            tooltip: {
                pointFormat: '<b>${point.y:,.2f}</b> USD'
            },

            series: [{
                upColor: Highcharts.getOptions().colors[2],
                color: Highcharts.getOptions().colors[3],
                data: [{
                    name: 'Start',
                    y: 120000
                }, {
                    name: 'Product Revenue',
                    y: 569000
                }, {
                    name: 'Service Revenue',
                    y: 231000
                }, {
                    name: 'Positive Balance',
                    isIntermediateSum: true,
                    color: Highcharts.getOptions().colors[1]
                }, {
                    name: 'Fixed Costs',
                    y: -342000
                }, {
                    name: 'Variable Costs',
                    y: -233000
                }, {
                    name: 'Balance',
                    isSum: true,
                    color: Highcharts.getOptions().colors[1]
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                    },
                    style: {
                        fontWeight: 'bold'
                    }
                },
                pointPadding: 0
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getWindbarbChart = function(name,option)
{
    var init = {  
        title: {
            text: 'Highcharts Wind Barbs'
        },

        xAxis: {
            type: 'datetime',
            offset: 40
        },

        plotOptions: {
            series: {
                pointStart: Date.UTC(2017, 0, 29),
                pointInterval: 36e5
            }
        },

        series: [{
            type: 'windbarb',
            data: [
                [9.8, 177.9],
                [10.1, 177.2],
                [11.3, 179.7],
                [10.9, 175.5],
                [9.3, 159.9],
                [8.8, 159.6],
                [7.8, 162.6],
                [5.6, 186.2],
                [6.8, 146.0],
                [6.4, 139.9],
                [3.1, 180.2],
                [4.3, 177.6],
                [5.3, 191.8],
                [6.3, 173.1],
                [7.7, 140.2],
                [8.5, 136.1],
                [9.4, 142.9],
                [10.0, 140.4],
                [5.3, 142.1],
                [3.8, 141.0],
                [3.3, 116.5],
                [1.5, 327.5],
                [0.1, 1.1],
                [1.2, 11.1]
            ],
            name: 'Wind',
            color: Highcharts.getOptions().colors[1],
            showInLegend: false,
            tooltip: {
                valueSuffix: ' m/s'
            }
        }, {
            type: 'area',
            keys: ['y', 'rotation'], // rotation is not used here
            data: [
                [9.8, 177.9],
                [10.1, 177.2],
                [11.3, 179.7],
                [10.9, 175.5],
                [9.3, 159.9],
                [8.8, 159.6],
                [7.8, 162.6],
                [5.6, 186.2],
                [6.8, 146.0],
                [6.4, 139.9],
                [3.1, 180.2],
                [4.3, 177.6],
                [5.3, 191.8],
                [6.3, 173.1],
                [7.7, 140.2],
                [8.5, 136.1],
                [9.4, 142.9],
                [10.0, 140.4],
                [5.3, 142.1],
                [3.8, 141.0],
                [3.3, 116.5],
                [1.5, 327.5],
                [0.1, 1.1],
                [1.2, 11.1]
            ],
            color: Highcharts.getOptions().colors[0],
            fillColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [
                        1,
                        Highcharts.color(Highcharts.getOptions().colors[0])
                            .setOpacity(0.25).get()
                    ]
                ]
            },
            name: 'Wind speed',
            tooltip: {
                valueSuffix: ' m/s'
            }
        }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

CustomHighchart.prototype.getRangeChart = function(name,option)
{
    var init = {  
            chart: {
                type: 'xrange'
            },
            title: {
                text: 'Highcharts X-range'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: ''
                },
                categories: ['Prototyping', 'Development', 'Testing'],
                reversed: true
            },
            series: [{
                name: 'Project 1',
                // pointPadding: 0,
                // groupPadding: 0,
                borderColor: 'gray',
                pointWidth: 20,
                data: [{
                    x: Date.UTC(2014, 10, 21),
                    x2: Date.UTC(2014, 11, 2),
                    y: 0,
                    partialFill: 0.25
                }, {
                    x: Date.UTC(2014, 11, 2),
                    x2: Date.UTC(2014, 11, 5),
                    y: 1
                }, {
                    x: Date.UTC(2014, 11, 8),
                    x2: Date.UTC(2014, 11, 9),
                    y: 2
                }, {
                    x: Date.UTC(2014, 11, 9),
                    x2: Date.UTC(2014, 11, 19),
                    y: 1
                }, {
                    x: Date.UTC(2014, 11, 10),
                    x2: Date.UTC(2014, 11, 23),
                    y: 2
                }],
                dataLabels: {
                    enabled: true
                }
            }]
    };
    var data = Object.assign(init,option);
    Highcharts.chart(name, data);
}

//tree js
$(function(){
    　　$('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    　　$('.tree li.parent_li > span').on('click', function (e) {
       　　 var children = $(this).parent('li.parent_li').find(' > ul > li');
        　　if (children.is(":visible")) {
            　　children.hide('fast');
            　　$(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        　　} else {
            　　children.show('fast');
            　　$(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        　　}
        　　e.stopPropagation();
    　　});
});