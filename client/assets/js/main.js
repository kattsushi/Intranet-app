'use strict';
angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'easypiechart', 'mgo-angular-wizard', 'textAngular', 'ui.tree', 'ngMap', 'ngTagsInput', 'app.ui.ctrls', 'app.ui.directives', 'app.ui.services', 'app.controllers', 'app.directives', 'app.form.validation', 'app.ui.form.ctrls', 'app.ui.form.directives', 'app.tables', 'app.map', 'app.task', 'app.localization', 'app.chart.ctrls', 'app.chart.directives', 'app.page.ctrls']).config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      redirectTo: '/inicio'
    }).when('/inicio', {
      templateUrl: 'views/inicio.html'
    }).when('/dashboard1', {
      templateUrl: 'views/dashboard1.html'
    }).when('/ui/typography', {
      templateUrl: 'views/ui/typography.html'
    }).when('/ui/buttons', {
      templateUrl: 'views/ui/buttons.html'
    }).when('/ui/icons', {
      templateUrl: 'views/ui/icons.html'
    }).when('/ui/grids', {
      templateUrl: 'views/ui/grids.html'
    }).when('/ui/widgets', {
      templateUrl: 'views/ui/widgets.html'
    }).when('/ui/components', {
      templateUrl: 'views/ui/components.html'
    }).when('/ui/timeline', {
      templateUrl: 'views/ui/timeline.html'
    }).when('/ui/nested-lists', {
      templateUrl: 'views/ui/nested-lists.html'
    }).when('/ui/pricing-tables', {
      templateUrl: 'views/ui/pricing-tables.html'
    }).when('/forms/elements', {
      templateUrl: 'views/forms/elements.html'
    }).when('/forms/layouts', {
      templateUrl: 'views/forms/layouts.html'
    }).when('/forms/validation', {
      templateUrl: 'views/forms/validation.html'
    }).when('/forms/wizard', {
      templateUrl: 'views/forms/wizard.html'
    }).when('/maps/gmap', {
      templateUrl: 'views/maps/gmap.html'
    }).when('/maps/jqvmap', {
      templateUrl: 'views/maps/jqvmap.html'
    }).when('/tables/static', {
      templateUrl: 'views/tables/static.html'
    }).when('/tables/responsive', {
      templateUrl: 'views/tables/responsive.html'
    }).when('/tables/dynamic', {
      templateUrl: 'views/tables/dynamic.html'
    }).when('/charts/others', {
      templateUrl: 'views/charts/charts.html'
    }).when('/charts/morris', {
      templateUrl: 'views/charts/morris.html'
    }).when('/charts/flot', {
      templateUrl: 'views/charts/flot.html'
    }).when('/mail/inbox', {
      templateUrl: 'views/mail/inbox.html'
    }).when('/mail/compose', {
      templateUrl: 'views/mail/compose.html'
    }).when('/mail/single', {
      templateUrl: 'views/mail/single.html'
    }).when('/pages/features', {
      templateUrl: 'views/pages/features.html'
    }).when('/pages/signin', {
      templateUrl: 'views/pages/signin.html'
    }).when('/pages/signup', {
      templateUrl: 'views/pages/signup.html'
    }).when('/pages/forgot', {
      templateUrl: 'views/pages/forgot-password.html'
    }).when('/pages/lock-screen', {
      templateUrl: 'views/pages/lock-screen.html'
    }).when('/pages/profile', {
      templateUrl: 'views/pages/profile.html'
    }).when('/404', {
      templateUrl: 'views/pages/404.html'
    }).when('/pages/500', {
      templateUrl: 'views/pages/500.html'
    }).when('/pages/blank', {
      templateUrl: 'views/pages/blank.html'
    }).when('/pages/invoice', {
      templateUrl: 'views/pages/invoice.html'
    }).when('/pages/services', {
      templateUrl: 'views/pages/services.html'
    }).when('/pages/about', {
      templateUrl: 'views/pages/about.html'
    }).when('/pages/contact', {
      templateUrl: 'views/pages/contact.html'
    }).when('/tasks', {
      templateUrl: 'views/tasks/tasks.html'
    }).otherwise({
      redirectTo: '/404'
    });
  }
]);

'use strict';
angular.module('app.chart.ctrls', []).controller('chartCtrl', [
  '$scope', function($scope) {
    $scope.easypiechart = {
      percent: 65,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: '#31C0BE',
        lineCap: 'round',
        size: 180,
        lineWidth: 5
      }
    };
    $scope.easypiechart2 = {
      percent: 35,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: '#66B5D7',
        lineCap: 'round',
        size: 180,
        lineWidth: 10
      }
    };
    $scope.easypiechart3 = {
      percent: 68,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: '#60CD9B',
        lineCap: 'square',
        size: 180,
        lineWidth: 20,
        scaleLength: 0
      }
    };
    $scope.gaugeChart1 = {
      data: {
        maxValue: 3000,
        animationSpeed: 40,
        val: 1375
      },
      options: {
        lines: 12,
        angle: 0,
        lineWidth: 0.47,
        pointer: {
          length: 0.6,
          strokeWidth: 0.03,
          color: '#000000'
        },
        limitMax: 'false',
        colorStart: '#A3C86D',
        colorStop: '#A3C86D',
        strokeColor: '#E0E0E0',
        generateGradient: true,
        percentColors: [[0.0, '#60CD9B'], [1.0, '#60CD9B']]
      }
    };
    $scope.gaugeChart2 = {
      data: {
        maxValue: 3000,
        animationSpeed: 45,
        val: 1200
      },
      options: {
        lines: 12,
        angle: 0,
        lineWidth: 0.47,
        pointer: {
          length: 0.6,
          strokeWidth: 0.03,
          color: '#464646'
        },
        limitMax: 'true',
        colorStart: '#7ACBEE',
        colorStop: '#7ACBEE',
        strokeColor: '#F1F1F1',
        generateGradient: true,
        percentColors: [[0.0, '#66B5D7'], [1.0, '#66B5D7']]
      }
    };
    return $scope.gaugeChart3 = {
      data: {
        maxValue: 3000,
        animationSpeed: 50,
        val: 1100
      },
      options: {
        lines: 12,
        angle: 0,
        lineWidth: 0.47,
        pointer: {
          length: 0.6,
          strokeWidth: 0.03,
          color: '#464646'
        },
        limitMax: 'true',
        colorStart: '#FF7857',
        colorStop: '#FF7857',
        strokeColor: '#F1F1F1',
        generateGradient: true,
        percentColors: [[0.0, '#E87352'], [1.0, '#E87352']]
      }
    };
  }
]).controller('morrisChartCtrl', [
  '$scope', function($scope) {
    $scope.mainData = [
      {
        month: '2013-01',
        xbox: 294000,
        will: 136000,
        playstation: 244000
      }, {
        month: '2013-02',
        xbox: 228000,
        will: 335000,
        playstation: 127000
      }, {
        month: '2013-03',
        xbox: 199000,
        will: 159000,
        playstation: 130000
      }, {
        month: '2013-04',
        xbox: 174000,
        will: 160000,
        playstation: 82000
      }, {
        month: '2013-05',
        xbox: 255000,
        will: 318000,
        playstation: 82000
      }, {
        month: '2013-06',
        xbox: 298400,
        will: 401800,
        playstation: 98600
      }, {
        month: '2013-07',
        xbox: 370000,
        will: 225000,
        playstation: 159000
      }, {
        month: '2013-08',
        xbox: 376700,
        will: 303600,
        playstation: 130000
      }, {
        month: '2013-09',
        xbox: 527800,
        will: 301000,
        playstation: 119400
      }
    ];
    $scope.simpleData = [
      {
        year: '2008',
        value: 20
      }, {
        year: '2009',
        value: 10
      }, {
        year: '2010',
        value: 5
      }, {
        year: '2011',
        value: 5
      }, {
        year: '2012',
        value: 20
      }, {
        year: '2013',
        value: 19
      }
    ];
    $scope.comboData = [
      {
        year: '2008',
        a: 20,
        b: 16,
        c: 12
      }, {
        year: '2009',
        a: 10,
        b: 22,
        c: 30
      }, {
        year: '2010',
        a: 5,
        b: 14,
        c: 20
      }, {
        year: '2011',
        a: 5,
        b: 12,
        c: 19
      }, {
        year: '2012',
        a: 20,
        b: 19,
        c: 13
      }, {
        year: '2013',
        a: 28,
        b: 22,
        c: 20
      }
    ];
    return $scope.donutData = [
      {
        label: "Download Sales",
        value: 12
      }, {
        label: "In-Store Sales",
        value: 30
      }, {
        label: "Mail-Order Sales",
        value: 20
      }, {
        label: "Online Sales",
        value: 19
      }
    ];
  }
]).controller('flotChartCtrl', [
  '$scope', function($scope) {
    var areaChart, barChart, lineChart1;
    lineChart1 = {};
    lineChart1.data1 = [[1, 15], [2, 20], [3, 14], [4, 10], [5, 10], [6, 20], [7, 28], [8, 26], [9, 22], [10, 23], [11, 24]];
    lineChart1.data2 = [[1, 9], [2, 15], [3, 17], [4, 21], [5, 16], [6, 15], [7, 13], [8, 15], [9, 29], [10, 21], [11, 29]];
    $scope.line1 = {};
    $scope.line1.data = [
      {
        data: lineChart1.data1,
        label: 'Product A'
      }, {
        data: lineChart1.data2,
        label: 'Product B',
        lines: {
          fill: false
        }
      }
    ];
    $scope.line1.options = {
      series: {
        lines: {
          show: true,
          fill: true,
          fillColor: {
            colors: [
              {
                opacity: 0
              }, {
                opacity: 0.3
              }
            ]
          }
        },
        points: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        }
      },
      colors: ["#31C0BE", "#8170CA", "#E87352"],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#f9f9f9",
        borderWidth: 1,
        borderColor: "#eeeeee"
      },
      xaxis: {
        ticks: [[1, 'Jan.'], [2, 'Feb.'], [3, 'Mar.'], [4, 'Apr.'], [5, 'May'], [6, 'June'], [7, 'July'], [8, 'Aug.'], [9, 'Sept.'], [10, 'Oct.'], [11, 'Nov.'], [12, 'Dec.']]
      }
    };
    areaChart = {};
    areaChart.data1 = [[2007, 15], [2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]];
    areaChart.data2 = [[2007, 15], [2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]];
    $scope.area = {};
    $scope.area.data = [
      {
        data: areaChart.data1,
        label: "Value A",
        lines: {
          fill: true
        }
      }, {
        data: areaChart.data2,
        label: "Value B",
        points: {
          show: true
        },
        yaxis: 2
      }
    ];
    $scope.area.options = {
      series: {
        lines: {
          show: true,
          fill: false
        },
        points: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        },
        shadowSize: 0
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#f9f9f9",
        borderWidth: 1,
        borderColor: "#eeeeee"
      },
      colors: ["#60CD9B", "#8170CA"],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      xaxis: {
        mode: "time"
      },
      yaxes: [
        {}, {
          position: "right"
        }
      ]
    };
    barChart = {};
    barChart.data1 = [[2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]];
    barChart.data2 = [[2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]];
    barChart.data3 = [[2008, 12], [2009, 30], [2010, 20], [2011, 19], [2012, 13], [2013, 20]];
    $scope.barChart = {};
    $scope.barChart.data = [
      {
        label: "Value A",
        data: barChart.data1
      }, {
        label: "Value B",
        data: barChart.data2
      }, {
        label: "Value C",
        data: barChart.data3
      }
    ];
    $scope.barChart.options = {
      series: {
        stack: true,
        bars: {
          show: true,
          fill: 1,
          barWidth: 0.3,
          align: "center",
          horizontal: false,
          order: 1
        }
      },
      grid: {
        hoverable: true,
        borderWidth: 1,
        borderColor: "#eeeeee"
      },
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      colors: ["#60CD9B", "#66B5D7", "#EEC95A", "#E87352"]
    };
    $scope.pieChart = {};
    $scope.pieChart.data = [
      {
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }
    ];
    $scope.pieChart.options = {
      series: {
        pie: {
          show: true
        }
      },
      legend: {
        show: true
      },
      grid: {
        hoverable: true,
        clickable: true
      },
      colors: ["#60CD9B", "#66B5D7", "#EEC95A", "#E87352"],
      tooltip: true,
      tooltipOpts: {
        content: "%p.0%, %s",
        defaultTheme: false
      }
    };
    $scope.donutChart = {};
    $scope.donutChart.data = [
      {
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }
    ];
    $scope.donutChart.options = {
      series: {
        pie: {
          show: true,
          innerRadius: 0.5
        }
      },
      legend: {
        show: true
      },
      grid: {
        hoverable: true,
        clickable: true
      },
      colors: ["#60CD9B", "#66B5D7", "#EEC95A", "#E87352"],
      tooltip: true,
      tooltipOpts: {
        content: "%p.0%, %s",
        defaultTheme: false
      }
    };
    $scope.donutChart2 = {};
    $scope.donutChart2.data = [
      {
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }, {
        label: "Direct Sales",
        data: 15
      }
    ];
    return $scope.donutChart2.options = {
      series: {
        pie: {
          show: true,
          innerRadius: 0.5
        }
      },
      legend: {
        show: false
      },
      grid: {
        hoverable: true,
        clickable: true
      },
      colors: ["#1BB7A0", "#39B5B9", "#52A3BB", "#619CC4", "#6D90C5"],
      tooltip: true,
      tooltipOpts: {
        content: "%p.0%, %s",
        defaultTheme: false
      }
    };
  }
]).controller('flotChartCtrl.realtime', ['$scope', function($scope) {}]).controller('sparklineCtrl', [
  '$scope', function($scope) {
    $scope.demoData1 = {
      data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
      options: {
        type: 'line',
        lineColor: '#fff',
        highlightLineColor: '#fff',
        fillColor: '#60CD9B',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        width: '100%',
        height: '150px'
      }
    };
    $scope.simpleChart1 = {
      data: [3, 1, 2, 3, 5, 3, 4, 2],
      options: {
        type: 'line',
        lineColor: '#31C0BE',
        fillColor: '#bce0df',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false
      }
    };
    $scope.simpleChart2 = {
      data: [3, 1, 2, 3, 5, 3, 4, 2],
      options: {
        type: 'bar',
        barColor: '#31C0BE'
      }
    };
    $scope.simpleChart3 = {
      data: [3, 1, 2, 3, 5, 3, 4, 2],
      options: {
        type: 'pie',
        sliceColors: ['#31C0BE', '#60CD9B', '#E87352', '#8170CA', '#EEC95A', '#60CD9B']
      }
    };
    $scope.tristateChart1 = {
      data: [1, 2, -3, -5, 3, 1, -4, 2],
      options: {
        type: 'tristate',
        posBarColor: '#95b75d',
        negBarColor: '#fa8564'
      }
    };
    $scope.largeChart1 = {
      data: [3, 1, 2, 3, 5, 3, 4, 2],
      options: {
        type: 'line',
        lineColor: '#674E9E',
        highlightLineColor: '#7ACBEE',
        fillColor: '#927ED1',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        width: '100%',
        height: '150px'
      }
    };
    $scope.largeChart2 = {
      data: [3, 1, 2, 3, 5, 3, 4, 2],
      options: {
        type: 'bar',
        barColor: '#31C0BE',
        barWidth: 10,
        width: '100%',
        height: '150px'
      }
    };
    return $scope.largeChart3 = {
      data: [3, 1, 2, 3, 5],
      options: {
        type: 'pie',
        sliceColors: ['#31C0BE', '#60CD9B', '#E87352', '#8170CA', '#EEC95A', '#60CD9B'],
        width: '150px',
        height: '150px'
      }
    };
  }
]);

'use strict';
angular.module('app.chart.directives', []).directive('gaugeChart', [
  function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link: function(scope, ele, attrs) {
        var data, gauge, options;
        data = scope.data;
        options = scope.options;
        gauge = new Gauge(ele[0]).setOptions(options);
        gauge.maxValue = data.maxValue;
        gauge.animationSpeed = data.animationSpeed;
        return gauge.set(data.val);
      }
    };
  }
]).directive('flotChart', [
  function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link: function(scope, ele, attrs) {
        var data, options, plot;
        data = scope.data;
        options = scope.options;
        return plot = $.plot(ele[0], data, options);
      }
    };
  }
]).directive('flotChartRealtime', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        var data, getRandomData, plot, totalPoints, update, updateInterval;
        data = [];
        totalPoints = 300;
        getRandomData = function() {
          var i, prev, res, y;
          if (data.length > 0) {
            data = data.slice(1);
          }
          while (data.length < totalPoints) {
            prev = (data.length > 0 ? data[data.length - 1] : 50);
            y = prev + Math.random() * 10 - 5;
            if (y < 0) {
              y = 0;
            } else {
              if (y > 100) {
                y = 100;
              }
            }
            data.push(y);
          }
          res = [];
          i = 0;
          while (i < data.length) {
            res.push([i, data[i]]);
            ++i;
          }
          return res;
        };
        update = function() {
          plot.setData([getRandomData()]);
          plot.draw();
          setTimeout(update, updateInterval);
        };
        data = [];
        totalPoints = 300;
        updateInterval = 200;
        plot = $.plot(ele[0], [getRandomData()], {
          series: {
            lines: {
              show: true,
              fill: true
            },
            shadowSize: 0
          },
          yaxis: {
            min: 0,
            max: 100
          },
          xaxis: {
            show: false
          },
          grid: {
            hoverable: true,
            borderWidth: 1,
            borderColor: '#eeeeee'
          },
          colors: ["#5BDDDC"]
        });
        return update();
      }
    };
  }
]).directive('sparkline', [
  function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link: function(scope, ele, attrs) {
        var data, options, sparkResize, sparklineDraw;
        data = scope.data;
        options = scope.options;
        sparkResize = void 0;
        sparklineDraw = function() {
          return ele.sparkline(data, options);
        };
        $(window).resize(function(e) {
          clearTimeout(sparkResize);
          return sparkResize = setTimeout(sparklineDraw, 200);
        });
        return sparklineDraw();
      }
    };
  }
]).directive('morrisChart', [
  function() {
    return {
      restrict: 'A',
      scope: {
        data: '='
      },
      link: function(scope, ele, attrs) {
        var colors, data, func, options;
        data = scope.data;
        switch (attrs.type) {
          case 'line':
            if (attrs.lineColors === void 0 || attrs.lineColors === '') {
              colors = null;
            } else {
              colors = JSON.parse(attrs.lineColors);
            }
            options = {
              element: ele[0],
              data: data,
              xkey: attrs.xkey,
              ykeys: JSON.parse(attrs.ykeys),
              labels: JSON.parse(attrs.labels),
              lineWidth: attrs.lineWidth || 2,
              lineColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
            };
            return new Morris.Line(options);
          case 'area':
            if (attrs.lineColors === void 0 || attrs.lineColors === '') {
              colors = null;
            } else {
              colors = JSON.parse(attrs.lineColors);
            }
            options = {
              element: ele[0],
              data: data,
              xkey: attrs.xkey,
              ykeys: JSON.parse(attrs.ykeys),
              labels: JSON.parse(attrs.labels),
              lineWidth: attrs.lineWidth || 2,
              lineColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
              behaveLikeLine: attrs.behaveLikeLine || false,
              fillOpacity: attrs.fillOpacity || 'auto',
              pointSize: attrs.pointSize || 4
            };
            return new Morris.Area(options);
          case 'bar':
            if (attrs.barColors === void 0 || attrs.barColors === '') {
              colors = null;
            } else {
              colors = JSON.parse(attrs.barColors);
            }
            options = {
              element: ele[0],
              data: data,
              xkey: attrs.xkey,
              ykeys: JSON.parse(attrs.ykeys),
              labels: JSON.parse(attrs.labels),
              barColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
              stacked: attrs.stacked || null
            };
            return new Morris.Bar(options);
          case 'donut':
            if (attrs.colors === void 0 || attrs.colors === '') {
              colors = null;
            } else {
              colors = JSON.parse(attrs.colors);
            }
            options = {
              element: ele[0],
              data: data,
              colors: colors || ['#0B62A4', '#3980B5', '#679DC6', '#95BBD7', '#B0CCE1', '#095791', '#095085', '#083E67', '#052C48', '#042135']
            };
            if (attrs.formatter) {
              func = new Function('y', 'data', attrs.formatter);
              options.formatter = func;
            }
            return new Morris.Donut(options);
        }
      }
    };
  }
]);

'use strict';
angular.module('app.ui.form.ctrls', []).controller('TagsDemoCtrl', [
  '$scope', function($scope) {
    return $scope.tags = ['foo', 'bar'];
  }
]).controller('DatepickerDemoCtrl', [
  '$scope', function($scope) {
    $scope.today = function() {
      return $scope.dt = new Date();
    };
    $scope.today();
    $scope.showWeeks = true;
    $scope.toggleWeeks = function() {
      return $scope.showWeeks = !$scope.showWeeks;
    };
    $scope.clear = function() {
      return $scope.dt = null;
    };
    $scope.disabled = function(date, mode) {
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    };
    $scope.toggleMin = function() {
      var ref;
      return $scope.minDate = (ref = $scope.minDate) != null ? ref : {
        "null": new Date()
      };
    };
    $scope.toggleMin();
    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      return $scope.opened = true;
    };
    $scope.dateOptions = {
      'year-format': "'yy'",
      'starting-day': 1
    };
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    return $scope.format = $scope.formats[0];
  }
]).controller('TimepickerDemoCtrl', [
  '$scope', function($scope) {
    $scope.mytime = new Date();
    $scope.hstep = 1;
    $scope.mstep = 15;
    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };
    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      return $scope.ismeridian = !$scope.ismeridian;
    };
    $scope.update = function() {
      var d;
      d = new Date();
      d.setHours(14);
      d.setMinutes(0);
      return $scope.mytime = d;
    };
    $scope.changed = function() {
      return console.log('Time changed to: ' + $scope.mytime);
    };
    return $scope.clear = function() {
      return $scope.mytime = null;
    };
  }
]).controller('TypeaheadCtrl', [
  '$scope', function($scope) {
    $scope.selected = void 0;
    return $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  }
]).controller('RatingDemoCtrl', [
  '$scope', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;
    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      return $scope.percent = 100 * (value / $scope.max);
    };
    return $scope.ratingStates = [
      {
        stateOn: 'glyphicon-ok-sign',
        stateOff: 'glyphicon-ok-circle'
      }, {
        stateOn: 'glyphicon-star',
        stateOff: 'glyphicon-star-empty'
      }, {
        stateOn: 'glyphicon-heart',
        stateOff: 'glyphicon-ban-circle'
      }, {
        stateOn: 'glyphicon-heart'
      }, {
        stateOff: 'glyphicon-off'
      }
    ];
  }
]);

angular.module('app.ui.form.directives', []).directive('uiRangeSlider', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        return ele.slider();
      }
    };
  }
]).directive('uiFileUpload', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        return ele.bootstrapFileInput();
      }
    };
  }
]).directive('uiSpinner', [
  function() {
    return {
      restrict: 'A',
      compile: function(ele, attrs) {
        ele.addClass('ui-spinner');
        return {
          post: function() {
            return ele.spinner();
          }
        };
      }
    };
  }
]).directive('uiWizardForm', [
  function() {
    return {
      link: function(scope, ele) {
        return ele.steps();
      }
    };
  }
]);

'use strict';
angular.module('app.form.validation', []).controller('wizardFormCtrl', [
  '$scope', function($scope) {
    $scope.wizard = {
      firstName: 'some name',
      lastName: '',
      email: '',
      password: '',
      age: '',
      address: ''
    };
    $scope.isValidateStep1 = function() {
      console.log($scope.wizard_step1);
      console.log($scope.wizard.firstName !== '');
      console.log($scope.wizard.lastName === '');
      return console.log($scope.wizard.firstName !== '' && $scope.wizard.lastName !== '');
    };
    return $scope.finishedWizard = function() {
      return console.log('yoo');
    };
  }
]).controller('formConstraintsCtrl', [
  '$scope', function($scope) {
    var original;
    $scope.form = {
      required: '',
      minlength: '',
      maxlength: '',
      length_rage: '',
      type_something: '',
      confirm_type: '',
      foo: '',
      email: '',
      url: '',
      num: '',
      minVal: '',
      maxVal: '',
      valRange: '',
      pattern: ''
    };
    original = angular.copy($scope.form);
    $scope.revert = function() {
      $scope.form = angular.copy(original);
      return $scope.form_constraints.$setPristine();
    };
    $scope.canRevert = function() {
      return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
    };
    return $scope.canSubmit = function() {
      return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
    };
  }
]).controller('signinCtrl', [
  '$scope', function($scope) {
    var original;
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.showInfoOnSubmit = false;
    original = angular.copy($scope.user);
    $scope.revert = function() {
      $scope.user = angular.copy(original);
      return $scope.form_signin.$setPristine();
    };
    $scope.canRevert = function() {
      return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
    };
    $scope.canSubmit = function() {
      return $scope.form_signin.$valid && !angular.equals($scope.user, original);
    };
    return $scope.submitForm = function() {
      $scope.showInfoOnSubmit = true;
      return $scope.revert();
    };
  }
]).controller('signupCtrl', [
  '$scope', function($scope) {
    var original;
    $scope.user = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: ''
    };
    $scope.showInfoOnSubmit = false;
    original = angular.copy($scope.user);
    $scope.revert = function() {
      $scope.user = angular.copy(original);
      $scope.form_signup.$setPristine();
      return $scope.form_signup.confirmPassword.$setPristine();
    };
    $scope.canRevert = function() {
      return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
    };
    $scope.canSubmit = function() {
      return $scope.form_signup.$valid && !angular.equals($scope.user, original);
    };
    return $scope.submitForm = function() {
      $scope.showInfoOnSubmit = true;
      return $scope.revert();
    };
  }
]).directive('validateEquals', [
  function() {
    return {
      require: 'ngModel',
      link: function(scope, ele, attrs, ngModelCtrl) {
        var validateEqual;
        validateEqual = function(value) {
          var valid;
          valid = value === scope.$eval(attrs.validateEquals);
          ngModelCtrl.$setValidity('equal', valid);
          return typeof valid === "function" ? valid({
            value: void 0
          }) : void 0;
        };
        ngModelCtrl.$parsers.push(validateEqual);
        ngModelCtrl.$formatters.push(validateEqual);
        return scope.$watch(attrs.validateEquals, function(newValue, oldValue) {
          if (newValue !== oldValue) {
            return ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue);
          }
        });
      }
    };
  }
]);

'use strict';
angular.module('app.map', []).directive('uiJqvmap', [
  function() {
    return {
      restrict: 'A',
      scope: {
        options: '='
      },
      link: function(scope, ele, attrs) {
        var options;
        options = scope.options;
        return ele.vectorMap(options);
      }
    };
  }
]).controller('jqvmapCtrl', [
  '$scope', function($scope) {
    var sample_data;
    sample_data = {
      "af": "16.63",
      "al": "11.58",
      "dz": "158.97",
      "ao": "85.81",
      "ag": "1.1",
      "ar": "351.02",
      "am": "8.83",
      "au": "1219.72",
      "at": "366.26",
      "az": "52.17",
      "bs": "7.54",
      "bh": "21.73",
      "bd": "105.4",
      "bb": "3.96",
      "by": "52.89",
      "be": "461.33",
      "bz": "1.43",
      "bj": "6.49",
      "bt": "1.4",
      "bo": "19.18",
      "ba": "16.2",
      "bw": "12.5",
      "br": "2023.53",
      "bn": "11.96",
      "bg": "44.84",
      "bf": "8.67",
      "bi": "1.47",
      "kh": "11.36",
      "cm": "21.88",
      "ca": "1563.66",
      "cv": "1.57",
      "cf": "2.11",
      "td": "7.59",
      "cl": "199.18",
      "cn": "5745.13",
      "co": "283.11",
      "km": "0.56",
      "cd": "12.6",
      "cg": "11.88",
      "cr": "35.02",
      "ci": "22.38",
      "hr": "59.92",
      "cy": "22.75",
      "cz": "195.23",
      "dk": "304.56",
      "dj": "1.14",
      "dm": "0.38",
      "do": "50.87",
      "ec": "61.49",
      "eg": "216.83",
      "sv": "21.8",
      "gq": "14.55",
      "er": "2.25",
      "ee": "19.22",
      "et": "30.94",
      "fj": "3.15",
      "fi": "231.98",
      "fr": "2555.44",
      "ga": "12.56",
      "gm": "1.04",
      "ge": "11.23",
      "de": "3305.9",
      "gh": "18.06",
      "gr": "305.01",
      "gd": "0.65",
      "gt": "40.77",
      "gn": "4.34",
      "gw": "0.83",
      "gy": "2.2",
      "ht": "6.5",
      "hn": "15.34",
      "hk": "226.49",
      "hu": "132.28",
      "is": "12.77",
      "in": "1430.02",
      "id": "695.06",
      "ir": "337.9",
      "iq": "84.14",
      "ie": "204.14",
      "il": "201.25",
      "it": "2036.69",
      "jm": "13.74",
      "jp": "5390.9",
      "jo": "27.13",
      "kz": "129.76",
      "ke": "32.42",
      "ki": "0.15",
      "kr": "986.26",
      "undefined": "5.73",
      "kw": "117.32",
      "kg": "4.44",
      "la": "6.34",
      "lv": "23.39",
      "lb": "39.15",
      "ls": "1.8",
      "lr": "0.98",
      "ly": "77.91",
      "lt": "35.73",
      "lu": "52.43",
      "mk": "9.58",
      "mg": "8.33",
      "mw": "5.04",
      "my": "218.95",
      "mv": "1.43",
      "ml": "9.08",
      "mt": "7.8",
      "mr": "3.49",
      "mu": "9.43",
      "mx": "1004.04",
      "md": "5.36",
      "mn": "5.81",
      "me": "3.88",
      "ma": "91.7",
      "mz": "10.21",
      "mm": "35.65",
      "na": "11.45",
      "np": "15.11",
      "nl": "770.31",
      "nz": "138",
      "ni": "6.38",
      "ne": "5.6",
      "ng": "206.66",
      "no": "413.51",
      "om": "53.78",
      "pk": "174.79",
      "pa": "27.2",
      "pg": "8.81",
      "py": "17.17",
      "pe": "153.55",
      "ph": "189.06",
      "pl": "438.88",
      "pt": "223.7",
      "qa": "126.52",
      "ro": "158.39",
      "ru": "1476.91",
      "rw": "5.69",
      "ws": "0.55",
      "st": "0.19",
      "sa": "434.44",
      "sn": "12.66",
      "rs": "38.92",
      "sc": "0.92",
      "sl": "1.9",
      "sg": "217.38",
      "sk": "86.26",
      "si": "46.44",
      "sb": "0.67",
      "za": "354.41",
      "es": "1374.78",
      "lk": "48.24",
      "kn": "0.56",
      "lc": "1",
      "vc": "0.58",
      "sd": "65.93",
      "sr": "3.3",
      "sz": "3.17",
      "se": "444.59",
      "ch": "522.44",
      "sy": "59.63",
      "tw": "426.98",
      "tj": "5.58",
      "tz": "22.43",
      "th": "312.61",
      "tl": "0.62",
      "tg": "3.07",
      "to": "0.3",
      "tt": "21.2",
      "tn": "43.86",
      "tr": "729.05",
      "tm": 0,
      "ug": "17.12",
      "ua": "136.56",
      "ae": "239.65",
      "gb": "2258.57",
      "us": "14624.18",
      "uy": "40.71",
      "uz": "37.72",
      "vu": "0.72",
      "ve": "285.21",
      "vn": "101.99",
      "ye": "30.02",
      "zm": "15.69",
      "zw": "5.57"
    };
    $scope.worldMap = {
      map: 'world_en',
      backgroundColor: null,
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#C4FFFF', '#07C0BB'],
      normalizeFunction: 'polynomial'
    };
    $scope.venezuelaMap = {
      map: 'venezuela_en',
      backgroundColor: null,
      color: '#000063',
      hoverColor: '#B6AB0F',
      selectedColor: '#f4e30a',
      enableZoom: true,
      showTooltip: true,
      selectedRegion: 'ZU'
    };
    return $scope.europeMap = {
      map: 'europe_en',
      backgroundColor: null,
      color: '#ffffff',
      hoverOpacity: 0.7,
      hoverColor: '#999999',
      enableZoom: false,
      showTooltip: false,
      values: sample_data,
      scaleColors: ['#C4FFFF', '#07C0BB'],
      normalizeFunction: 'polynomial'
    };
  }
]);

'use strict';
angular.module('app.page.ctrls', []).controller('invoiceCtrl', [
  '$scope', '$window', function($scope, $window) {
    return $scope.printInvoice = function() {
      var originalContents, popupWin, printContents;
      printContents = document.getElementById('invoice').innerHTML;
      originalContents = document.body.innerHTML;
      popupWin = window.open();
      popupWin.document.open();
      popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + '</html>');
      return popupWin.document.close();
    };
  }
]);

'use strict';
angular.module('app.tables', []).controller('tableCtrl', [
  '$scope', '$filter', function($scope, $filter) {
    var init;
    $scope.stores = [
      {
        name: 'Nijiya Market',
        price: '$$',
        sales: 292,
        rating: 4.0
      }, {
        name: 'Eat On Monday Truck',
        price: '$',
        sales: 119,
        rating: 4.3
      }, {
        name: 'Tea Era',
        price: '$',
        sales: 874,
        rating: 4.0
      }, {
        name: 'Rogers Deli',
        price: '$',
        sales: 347,
        rating: 4.2
      }, {
        name: 'MoBowl',
        price: '$$$',
        sales: 24,
        rating: 4.6
      }, {
        name: 'The Milk Pail Market',
        price: '$',
        sales: 543,
        rating: 4.5
      }, {
        name: 'Nob Hill Foods',
        price: '$$',
        sales: 874,
        rating: 4.0
      }, {
        name: 'Scratch',
        price: '$$$',
        sales: 643,
        rating: 3.6
      }, {
        name: 'Gochi Japanese Fusion Tapas',
        price: '$$$',
        sales: 56,
        rating: 4.1
      }, {
        name: 'Cost Plus World Market',
        price: '$$',
        sales: 79,
        rating: 4.0
      }, {
        name: 'Bumble Bee Health Foods',
        price: '$$',
        sales: 43,
        rating: 4.3
      }, {
        name: 'Costco',
        price: '$$',
        sales: 219,
        rating: 3.6
      }, {
        name: 'Red Rock Coffee Co',
        price: '$',
        sales: 765,
        rating: 4.1
      }, {
        name: '99 Ranch Market',
        price: '$',
        sales: 181,
        rating: 3.4
      }, {
        name: 'Mi Pueblo Food Center',
        price: '$',
        sales: 78,
        rating: 4.0
      }, {
        name: 'Cucina Venti',
        price: '$$',
        sales: 163,
        rating: 3.3
      }, {
        name: 'Sufi Coffee Shop',
        price: '$',
        sales: 113,
        rating: 3.3
      }, {
        name: 'Dana Street Roasting',
        price: '$',
        sales: 316,
        rating: 4.1
      }, {
        name: 'Pearl Cafe',
        price: '$',
        sales: 173,
        rating: 3.4
      }, {
        name: 'Posh Bagel',
        price: '$',
        sales: 140,
        rating: 4.0
      }, {
        name: 'Artisan Wine Depot',
        price: '$$',
        sales: 26,
        rating: 4.1
      }, {
        name: 'Hong Kong Chinese Bakery',
        price: '$',
        sales: 182,
        rating: 3.4
      }, {
        name: 'Starbucks',
        price: '$$',
        sales: 97,
        rating: 3.7
      }, {
        name: 'Tapioca Express',
        price: '$',
        sales: 301,
        rating: 3.0
      }, {
        name: 'House of Bagels',
        price: '$',
        sales: 82,
        rating: 4.4
      }
    ];
    $scope.searchKeywords = '';
    $scope.filteredStores = [];
    $scope.row = '';
    $scope.select = function(page) {
      var end, start;
      start = (page - 1) * $scope.numPerPage;
      end = start + $scope.numPerPage;
      return $scope.currentPageStores = $scope.filteredStores.slice(start, end);
    };
    $scope.onFilterChange = function() {
      $scope.select(1);
      $scope.currentPage = 1;
      return $scope.row = '';
    };
    $scope.onNumPerPageChange = function() {
      $scope.select(1);
      return $scope.currentPage = 1;
    };
    $scope.onOrderChange = function() {
      $scope.select(1);
      return $scope.currentPage = 1;
    };
    $scope.search = function() {
      $scope.filteredStores = $filter('filter')($scope.stores, $scope.searchKeywords);
      return $scope.onFilterChange();
    };
    $scope.order = function(rowName) {
      if ($scope.row === rowName) {
        return;
      }
      $scope.row = rowName;
      $scope.filteredStores = $filter('orderBy')($scope.stores, rowName);
      return $scope.onOrderChange();
    };
    $scope.numPerPageOpt = [3, 5, 10, 20];
    $scope.numPerPage = $scope.numPerPageOpt[2];
    $scope.currentPage = 1;
    $scope.currentPageStores = [];
    init = function() {
      $scope.search();
      return $scope.select($scope.currentPage);
    };
    return init();
  }
]);

'use strict';
angular.module('app.ui.ctrls', []).controller('NotifyCtrl', [
  '$scope', 'logger', function($scope, logger) {
    return $scope.notify = function(type) {
      switch (type) {
        case 'info':
          return logger.log("Heads up! This alert needs your attention, but it's not super important.");
        case 'success':
          return logger.logSuccess("Well done! You successfully read this important alert message.");
        case 'warning':
          return logger.logWarning("Warning! Best check yo self, you're not looking too good.");
        case 'error':
          return logger.logError("Oh snap! Change a few things up and try submitting again.");
      }
    };
  }
]).controller('AlertDemoCtrl', [
  '$scope', function($scope) {
    $scope.alerts = [
      {
        type: 'success',
        msg: 'Well done! You successfully read this important alert message.'
      }, {
        type: 'info',
        msg: 'Heads up! This alert needs your attention, but it is not super important.'
      }, {
        type: 'warning',
        msg: "Warning! Best check yo self, you're not looking too good."
      }, {
        type: 'danger',
        msg: 'Oh snap! Change a few things up and try submitting again.'
      }
    ];
    $scope.addAlert = function() {
      var num, type;
      num = Math.ceil(Math.random() * 4);
      type = void 0;
      switch (num) {
        case 0:
          type = 'info';
          break;
        case 1:
          type = 'success';
          break;
        case 2:
          type = 'info';
          break;
        case 3:
          type = 'warning';
          break;
        case 4:
          type = 'danger';
      }
      return $scope.alerts.push({
        type: type,
        msg: "Another alert!"
      });
    };
    return $scope.closeAlert = function(index) {
      return $scope.alerts.splice(index, 1);
    };
  }
]).controller('ProgressDemoCtrl', [
  '$scope', function($scope) {
    $scope.max = 200;
    $scope.random = function() {
      var type, value;
      value = Math.floor((Math.random() * 100) + 10);
      type = void 0;
      if (value < 25) {
        type = "success";
      } else if (value < 50) {
        type = "info";
      } else if (value < 75) {
        type = "warning";
      } else {
        type = "danger";
      }
      $scope.showWarning = type === "danger" || type === "warning";
      $scope.dynamic = value;
      $scope.type = type;
    };
    return $scope.random();
  }
]).controller('AccordionDemoCtrl', [
  '$scope', function($scope) {
    $scope.oneAtATime = true;
    $scope.groups = [
      {
        title: "Dynamic Group Header - 1",
        content: "Dynamic Group Body - 1"
      }, {
        title: "Dynamic Group Header - 2",
        content: "Dynamic Group Body - 2"
      }, {
        title: "Dynamic Group Header - 3",
        content: "Dynamic Group Body - 3"
      }
    ];
    $scope.items = ["Item 1", "Item 2", "Item 3"];
    $scope.status = {
      isFirstOpen: true,
      isFirstOpen1: true,
      isFirstOpen2: true,
      isFirstOpen3: true,
      isFirstOpen4: true,
      isFirstOpen5: true,
      isFirstOpen6: true
    };
    $scope.addItem = function() {
      var newItemNo;
      newItemNo = $scope.items.length + 1;
      $scope.items.push("Item " + newItemNo);
    };
  }
]).controller('CollapseDemoCtrl', [
  '$scope', function($scope) {
    return $scope.isCollapsed = false;
  }
]).controller('ModalDemoCtrl', [
  '$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.items = ["item1", "item2", "item3"];
    $scope.open = function() {
      var modalInstance;
      modalInstance = $modal.open({
        templateUrl: "myModalContent.html",
        controller: 'ModalInstanceCtrl',
        resolve: {
          items: function() {
            return $scope.items;
          }
        }
      });
      modalInstance.result.then((function(selectedItem) {
        $scope.selected = selectedItem;
      }), function() {
        $log.info("Modal dismissed at: " + new Date());
      });
    };
  }
]).controller('ModalInstanceCtrl', [
  '$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };
    $scope.ok = function() {
      $modalInstance.close($scope.selected.item);
    };
    $scope.cancel = function() {
      $modalInstance.dismiss("cancel");
    };
  }
]).controller('PaginationDemoCtrl', [
  '$scope', function($scope) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;
    $scope.maxSize = 5;
    $scope.setPage = function(pageNo) {
      return $scope.currentPage = pageNo;
    };
    $scope.bigTotalItems = 175;
    return $scope.bigCurrentPage = 1;
  }
]).controller('TabsDemoCtrl', [
  '$scope', function($scope) {
    $scope.tabs = [
      {
        title: "Dynamic Title 1",
        content: "Dynamic content 1.  Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
      }, {
        title: "Disabled",
        content: "Dynamic content 2.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
        disabled: true
      }
    ];
    return $scope.navType = "pills";
  }
]).controller('TreeDemoCtrl', [
  '$scope', function($scope) {
    $scope.list = [
      {
        id: 1,
        title: "Item 1",
        items: []
      }, {
        id: 2,
        title: "Item 2",
        items: [
          {
            id: 21,
            title: "Item 2.1",
            items: [
              {
                id: 211,
                title: "Item 2.1.1",
                items: []
              }, {
                id: 212,
                title: "Item 2.1.2",
                items: []
              }
            ]
          }, {
            id: 22,
            title: "Item 2.2",
            items: [
              {
                id: 221,
                title: "Item 2.2.1",
                items: []
              }, {
                id: 222,
                title: "Item 2.2.2",
                items: []
              }
            ]
          }
        ]
      }, {
        id: 3,
        title: "Item 3",
        items: []
      }, {
        id: 4,
        title: "Item 4",
        items: [
          {
            id: 41,
            title: "Item 4.1",
            items: []
          }
        ]
      }, {
        id: 5,
        title: "Item 5",
        items: []
      }, {
        id: 6,
        title: "Item 6",
        items: []
      }, {
        id: 7,
        title: "Item 7",
        items: []
      }
    ];
    $scope.selectedItem = {};
    $scope.options = {};
    $scope.remove = function(scope) {
      scope.remove();
    };
    $scope.toggle = function(scope) {
      scope.toggle();
    };
    return $scope.newSubItem = function(scope) {
      var nodeData;
      nodeData = scope.$modelValue;
      nodeData.items.push({
        id: nodeData.id * 10 + nodeData.items.length,
        title: nodeData.title + "." + (nodeData.items.length + 1),
        items: []
      });
    };
  }
]).controller('MapDemoCtrl', [
  '$scope', '$http', '$interval', function($scope, $http, $interval) {
    var i, markers;
    markers = [];
    i = 0;
    while (i < 8) {
      markers[i] = new google.maps.Marker({
        title: "Marker: " + i
      });
      i++;
    }
    $scope.GenerateMapMarkers = function() {
      var d, lat, lng, loc, numMarkers;
      d = new Date();
      $scope.date = d.toLocaleString();
      numMarkers = Math.floor(Math.random() * 4) + 4;
      i = 0;
      while (i < numMarkers) {
        lat = 43.6600000 + (Math.random() / 100);
        lng = -79.4103000 + (Math.random() / 100);
        loc = new google.maps.LatLng(lat, lng);
        markers[i].setPosition(loc);
        markers[i].setMap($scope.map);
        i++;
      }
    };
    $interval($scope.GenerateMapMarkers, 2000);
  }
]);

'use strict';
angular.module('app.ui.directives', []).directive('uiTime', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        var checkTime, startTime;
        startTime = function() {
          var h, m, s, t, time, today;
          today = new Date();
          h = today.getHours();
          m = today.getMinutes();
          s = today.getSeconds();
          m = checkTime(m);
          s = checkTime(s);
          time = h + ":" + m + ":" + s;
          ele.html(time);
          return t = setTimeout(startTime, 500);
        };
        checkTime = function(i) {
          if (i < 10) {
            i = "0" + i;
          }
          return i;
        };
        return startTime();
      }
    };
  }
]).directive('uiWeather', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        var color, icon, skycons;
        color = attrs.color;
        icon = Skycons[attrs.icon];
        skycons = new Skycons({
          "color": color,
          "resizeClear": true
        });
        skycons.add(ele[0], icon);
        return skycons.play();
      }
    };
  }
]);

'use strict';
angular.module('app.ui.services', []).factory('logger', [
  function() {
    var logIt;
    toastr.options = {
      "closeButton": true,
      "positionClass": "toast-bottom-right",
      "timeOut": "3000"
    };
    logIt = function(message, type) {
      return toastr[type](message);
    };
    return {
      log: function(message) {
        logIt(message, 'info');
      },
      logWarning: function(message) {
        logIt(message, 'warning');
      },
      logSuccess: function(message) {
        logIt(message, 'success');
      },
      logError: function(message) {
        logIt(message, 'error');
      }
    };
  }
]);

'use strict';
angular.module('app.task', []).factory('taskStorage', function() {
  var DEMO_TASKS, STORAGE_ID;
  STORAGE_ID = 'tasks';
  DEMO_TASKS = '[ {"title": "Finish homework", "completed": true}, {"title": "Make a call", "completed": true}, {"title": "Build a snowman!", "completed": false}, {"title": "Tango! Tango! Tango!", "completed": false}, {"title": "Play games with friends", "completed": false}, {"title": "Shopping", "completed": false}, {"title": "One more dance", "completed": false}, {"title": "Try Google glass", "completed": false} ]';
  return {
    get: function() {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS);
    },
    put: function(tasks) {
      return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks));
    }
  };
}).directive('taskFocus', [
  '$timeout', function($timeout) {
    return {
      link: function(scope, ele, attrs) {
        return scope.$watch(attrs.taskFocus, function(newVal) {
          if (newVal) {
            return $timeout(function() {
              return ele[0].focus();
            }, 0, false);
          }
        });
      }
    };
  }
]).controller('taskCtrl', [
  '$scope', 'taskStorage', 'filterFilter', '$rootScope', 'logger', function($scope, taskStorage, filterFilter, $rootScope, logger) {
    var tasks;
    tasks = $scope.tasks = taskStorage.get();
    $scope.newTask = '';
    $scope.remainingCount = filterFilter(tasks, {
      completed: false
    }).length;
    $scope.editedTask = null;
    $scope.statusFilter = {
      completed: false
    };
    $scope.filter = function(filter) {
      switch (filter) {
        case 'all':
          return $scope.statusFilter = '';
        case 'active':
          return $scope.statusFilter = {
            completed: false
          };
        case 'completed':
          return $scope.statusFilter = {
            completed: true
          };
      }
    };
    $scope.add = function() {
      var newTask;
      newTask = $scope.newTask.trim();
      if (newTask.length === 0) {
        return;
      }
      tasks.push({
        title: newTask,
        completed: false
      });
      logger.logSuccess('New task: "' + newTask + '" added');
      taskStorage.put(tasks);
      $scope.newTask = '';
      return $scope.remainingCount++;
    };
    $scope.edit = function(task) {
      return $scope.editedTask = task;
    };
    $scope.doneEditing = function(task) {
      $scope.editedTask = null;
      task.title = task.title.trim();
      if (!task.title) {
        $scope.remove(task);
      } else {
        logger.log('Task updated');
      }
      return taskStorage.put(tasks);
    };
    $scope.remove = function(task) {
      var index;
      $scope.remainingCount -= task.completed ? 0 : 1;
      index = $scope.tasks.indexOf(task);
      $scope.tasks.splice(index, 1);
      taskStorage.put(tasks);
      return logger.logError('Task removed');
    };
    $scope.completed = function(task) {
      $scope.remainingCount += task.completed ? -1 : 1;
      taskStorage.put(tasks);
      if (task.completed) {
        if ($scope.remainingCount > 0) {
          if ($scope.remainingCount === 1) {
            return logger.log('Almost there! Only ' + $scope.remainingCount + ' task left');
          } else {
            return logger.log('Good job! Only ' + $scope.remainingCount + ' tasks left');
          }
        } else {
          return logger.logSuccess('Congrats! All done :)');
        }
      }
    };
    $scope.clearCompleted = function() {
      $scope.tasks = tasks = tasks.filter(function(val) {
        return !val.completed;
      });
      return taskStorage.put(tasks);
    };
    $scope.markAll = function(completed) {
      tasks.forEach(function(task) {
        return task.completed = completed;
      });
      $scope.remainingCount = completed ? 0 : tasks.length;
      taskStorage.put(tasks);
      if (completed) {
        return logger.logSuccess('Congrats! All done :)');
      }
    };
    $scope.$watch('remainingCount == 0', function(val) {
      return $scope.allChecked = val;
    });
    return $scope.$watch('remainingCount', function(newVal, oldVal) {
      return $rootScope.$broadcast('taskRemaining:changed', newVal);
    });
  }
]);

angular.module('app.directives', []).directive('imgHolder', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        return Holder.run({
          images: ele[0]
        });
      }
    };
  }
]).directive('customBackground', function() {
  return {
    restrict: "A",
    controller: [
      '$scope', '$element', '$location', function($scope, $element, $location) {
        var addBg, path;
        path = function() {
          return $location.path();
        };
        addBg = function(path) {
          $element.removeClass('body-home body-special body-tasks body-lock');
          switch (path) {
            case '/':
              return $element.addClass('body-home');
            case '/404':
            case '/pages/500':
            case '/pages/signin':
            case '/pages/signup':
            case '/pages/forgot':
              return $element.addClass('body-special');
            case '/pages/lock-screen':
              return $element.addClass('body-special body-lock');
            case '/tasks':
              return $element.addClass('body-tasks');
          }
        };
        addBg($location.path());
        return $scope.$watch(path, function(newVal, oldVal) {
          if (newVal === oldVal) {
            return;
          }
          return addBg($location.path());
        });
      }
    ]
  };
}).directive('uiColorSwitch', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        return ele.find('.color-option').on('click', function(event) {
          var $this, hrefUrl, style;
          $this = $(this);
          hrefUrl = void 0;
          style = $this.data('style');
          if (style === 'loulou') {
            hrefUrl = 'styles/main.css';
            $('link[href^="styles/main"]').attr('href', hrefUrl);
          } else if (style) {
            style = '-' + style;
            hrefUrl = 'styles/main' + style + '.css';
            $('link[href^="styles/main"]').attr('href', hrefUrl);
          } else {
            return false;
          }
          return event.preventDefault();
        });
      }
    };
  }
]).directive('toggleMinNav', [
  '$rootScope', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        var $content, $nav, $window, Timer, app, updateClass;
        app = $('#app');
        $window = $(window);
        $nav = $('#nav-container');
        $content = $('#content');
        ele.on('click', function(e) {
          if (app.hasClass('nav-min')) {
            app.removeClass('nav-min');
          } else {
            app.addClass('nav-min');
            $rootScope.$broadcast('minNav:enabled');
          }
          return e.preventDefault();
        });
        Timer = void 0;
        updateClass = function() {
          var width;
          width = $window.width();
          if (width < 768) {
            return app.removeClass('nav-min');
          }
        };
        return $window.resize(function() {
          var t;
          clearTimeout(t);
          return t = setTimeout(updateClass, 300);
        });
      }
    };
  }
]).directive('collapseNav', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        var $a, $aRest, $lists, $listsRest, app;
        $lists = ele.find('ul').parent('li');
        $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>');
        $a = $lists.children('a');
        $listsRest = ele.children('li').not($lists);
        $aRest = $listsRest.children('a');
        app = $('#app');
        $a.on('click', function(event) {
          var $parent, $this;
          if (app.hasClass('nav-min')) {
            return false;
          }
          $this = $(this);
          $parent = $this.parent('li');
          $lists.not($parent).removeClass('open').find('ul').slideUp();
          $parent.toggleClass('open').find('ul').stop().slideToggle();
          return event.preventDefault();
        });
        $aRest.on('click', function(event) {
          return $lists.removeClass('open').find('ul').slideUp();
        });
        return scope.$on('minNav:enabled', function(event) {
          return $lists.removeClass('open').find('ul').slideUp();
        });
      }
    };
  }
]).directive('highlightActive', [
  function() {
    return {
      restrict: "A",
      controller: [
        '$scope', '$element', '$attrs', '$location', function($scope, $element, $attrs, $location) {
          var highlightActive, links, path;
          links = $element.find('a');
          path = function() {
            return $location.path();
          };
          highlightActive = function(links, path) {
            path = '#' + path;
            return angular.forEach(links, function(link) {
              var $li, $link, href;
              $link = angular.element(link);
              $li = $link.parent('li');
              href = $link.attr('href');
              if ($li.hasClass('active')) {
                $li.removeClass('active');
              }
              if (path.indexOf(href) === 0) {
                return $li.addClass('active');
              }
            });
          };
          highlightActive(links, $location.path());
          return $scope.$watch(path, function(newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            return highlightActive(links, $location.path());
          });
        }
      ]
    };
  }
]).directive('toggleOffCanvas', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        return ele.on('click', function() {
          return $('#app').toggleClass('on-canvas');
        });
      }
    };
  }
]).directive('slimScroll', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        return ele.slimScroll({
          height: attrs.scrollHeight || '100%'
        });
      }
    };
  }
]).directive('goBack', [
  function() {
    return {
      restrict: "A",
      controller: [
        '$scope', '$element', '$window', function($scope, $element, $window) {
          return $element.on('click', function() {
            return $window.history.back();
          });
        }
      ]
    };
  }
]);

'use strict';
angular.module('app.localization', []).factory('localize', [
  '$http', '$rootScope', '$window', function($http, $rootScope, $window) {
    var localize;
    localize = {
      language: '',
      url: void 0,
      resourceFileLoaded: false,
      successCallback: function(data) {
        localize.dictionary = data;
        localize.resourceFileLoaded = true;
        return $rootScope.$broadcast('localizeResourcesUpdated');
      },
      setLanguage: function(value) {
        localize.language = value.toLowerCase().split("-")[0];
        return localize.initLocalizedResources();
      },
      setUrl: function(value) {
        localize.url = value;
        return localize.initLocalizedResources();
      },
      buildUrl: function() {
        if (!localize.language) {
          localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase();
          localize.language = localize.language.split("-")[0];
        }
        return 'i18n/resources-locale_' + localize.language + '.js';
      },
      initLocalizedResources: function() {
        var url;
        url = localize.url || localize.buildUrl();
        return $http({
          method: "GET",
          url: url,
          cache: false
        }).success(localize.successCallback).error(function() {
          return $rootScope.$broadcast('localizeResourcesUpdated');
        });
      },
      getLocalizedString: function(value) {
        var result, valueLowerCase;
        result = void 0;
        if (localize.dictionary && value) {
          valueLowerCase = value.toLowerCase();
          if (localize.dictionary[valueLowerCase] === '') {
            result = value;
          } else {
            result = localize.dictionary[valueLowerCase];
          }
        } else {
          result = value;
        }
        return result;
      }
    };
    return localize;
  }
]).directive('i18n', [
  'localize', function(localize) {
    var i18nDirective;
    i18nDirective = {
      restrict: "EA",
      updateText: function(ele, input, placeholder) {
        var result;
        result = void 0;
        if (input === 'i18n-placeholder') {
          result = localize.getLocalizedString(placeholder);
          return ele.attr('placeholder', result);
        } else if (input.length >= 1) {
          result = localize.getLocalizedString(input);
          return ele.text(result);
        }
      },
      link: function(scope, ele, attrs) {
        scope.$on('localizeResourcesUpdated', function() {
          return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder);
        });
        return attrs.$observe('i18n', function(value) {
          return i18nDirective.updateText(ele, value, attrs.placeholder);
        });
      }
    };
    return i18nDirective;
  }
]).controller('LangCtrl', [
  '$scope', 'localize', function($scope, localize) {
    $scope.lang = 'English';
    $scope.setLang = function(lang) {
      switch (lang) {
        case 'English':
          localize.setLanguage('EN-US');
          break;
        case 'Español':
          localize.setLanguage('ES-ES');
          break;
        case '日本語':
          localize.setLanguage('JA-JP');
          break;
        case '中文':
          localize.setLanguage('ZH-TW');
          break;
        case 'Deutsch':
          localize.setLanguage('DE-DE');
          break;
        case 'français':
          localize.setLanguage('FR-FR');
          break;
        case 'Italiano':
          localize.setLanguage('IT-IT');
          break;
        case 'Portugal':
          localize.setLanguage('PT-BR');
          break;
        case 'Русский язык':
          localize.setLanguage('RU-RU');
          break;
        case '한국어':
          localize.setLanguage('KO-KR');
      }
      return $scope.lang = lang;
    };
    return $scope.getFlag = function() {
      var lang;
      lang = $scope.lang;
      switch (lang) {
        case 'English':
          return 'flags-american';
        case 'Español':
          return 'flags-spain';
        case '日本語':
          return 'flags-japan';
        case '中文':
          return 'flags-china';
        case 'Deutsch':
          return 'flags-germany';
        case 'français':
          return 'flags-france';
        case 'Italiano':
          return 'flags-italy';
        case 'Portugal':
          return 'flags-portugal';
        case 'Русский язык':
          return 'flags-russia';
        case '한국어':
          return 'flags-korea';
      }
    };
  }
]);

'use strict';
angular.module('app.controllers', []).controller('AppCtrl', [
  '$scope', '$location', function($scope, $location) {
    $scope.isSpecificPage = function() {
      var path;
      path = $location.path();
      return _.contains(['/404', '/pages/500', '/pages/login', '/pages/signin', '/pages/signin1', '/pages/signin2', '/pages/signup', '/pages/signup1', '/pages/signup2', '/pages/forgot', '/pages/lock-screen'], path);
    };
    return $scope.main = {
      brand: 'Intranet',
      name: 'Andres David Jimenez',
      logo: 'img/logo.png'
    };
  }
]).controller('NavCtrl', [
  '$scope', 'taskStorage', 'filterFilter', function($scope, taskStorage, filterFilter) {
    var tasks;
    tasks = $scope.tasks = taskStorage.get();
    $scope.taskRemainingCount = filterFilter(tasks, {
      completed: false
    }).length;
    return $scope.$on('taskRemaining:changed', function(event, count) {
      return $scope.taskRemainingCount = count;
    });
  }
]).controller('DashboardCtrl', ['$scope', function($scope) {}]).controller('ModalAgendaCtrl', [
  '$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.items = ["item1", "item2", "item3"];
    $scope.contacts = [];
    $scope.saveContact = function() {
      var i;
      if ($scope.newcontact.id === null) {
        $scope.newcontact.id = uid++;
        $scope.contacts.push($scope.newcontact);
      } else {
        for (i in $scope.contacts) {
          if ($scope.contacts[i].id === $scope.newcontact.id) {
            $scope.contacts[i] = $scope.newcontact;
          }
        }
      }
      $scope.newcontact = {};
    };
    $scope["delete"] = function(id) {
      var i;
      for (i in $scope.contacts) {
        if ($scope.contacts[i].id === id) {
          $scope.contacts.splice(i, 1);
          $scope.newcontact = {};
        }
      }
    };
    $scope.edit = function(id) {
      var i;
      for (i in $scope.contacts) {
        if ($scope.contacts[i].id === id) {
          $scope.newcontact = angular.copy($scope.contacts[i]);
        }
      }
    };
    $scope.open = function() {
      var modalInstance;
      modalInstance = $modal.open({
        templateUrl: "myModalContent.html",
        controller: 'ModalInstanceCtrl',
        resolve: {
          items: function() {
            return $scope.items;
          }
        }
      });
      modalInstance.result.then((function(selectedItem) {
        $scope.selected = selectedItem;
      }), function() {
        $log.info("Modal dismissed at: " + new Date());
      });
    };
  }
]);

/* jQuery Flot Animator version 1.0.

Flot Animator is a free jQuery Plugin that will add fluid animations to Flot charts.

Copyright (c) 2012-2013 Chtiwi Malek
http://www.codicode.com/art/jquery_flot_animator.aspx

Licensed under Creative Commons Attribution 3.0 Unported License.
*/

eval(function(p,a,c,k,e,d){while(c--)if(k[c])p=p.replace(new RegExp('\\b'+c.toString(a)+'\\b','g'),k[c]);return p;}('$.1m({1w:b(e,t,n){b h(){3 e=o[0][0];3 t=o[o.8-1][0];3 n=(t-e)/a;3 r=[];r.6(o[0]);3 i=1;7=o[0];4=o[i];q(3 s=e+n;s<t+n;s+=n){9(s>t){s=t}$("#18").19(s);1a(s>4[0]){7=4;4=o[i++]}9(s==4[0]){r.6([s,4[1]]);7=4;4=o[i++]}11{3 u=(4[1]-7[1])/(4[0]-7[0]);16=u*s+(7[1]-u*7[0]);r.6([s,16])}}j r}b v(){3 n=[];p++;1b(c){14"1c":n=d.w(-1*p);y;14"1h":n=d.w(d.8/2-p/2,d.8/2+p/2);y;1d:n=d.w(0,p);y}9(!u){13=n[0][0];12=n[n.8-1][0];n=[];q(3 i=0;i<o.8;i++){9(o[i][0]>=13&&o[i][0]<=12){n.6(o[i])}}}t[r].x=p<a?n:o;g.1j(t);g.1i();9(p<a){15(v,f/a)}11{e.1g("1f")}}b m(i){3 s=[];s.6([i[0][0],k.1e.10(k,i.z(b(e){j e[1]}))]);s.6([i[0][0],17]);s.6([i[0][0],k.1k.10(k,i.z(b(e){j e[1]}))]);q(3 o=0;o<i.8;o++){s.6([i[o][0],17])}t[r].x=s;j $.1l(e,t,n)}3 r=0;q(3 i=0;i<t.8;i++){9(t[i].5){r=i}}3 s=t[r];3 o=s.x;3 u=t[r].1v?1x:1t;3 a=t[r].5&&t[r].5.1r||1q;3 f=t[r].5&&t[r].5.1p||1o;3 l=t[r].5&&t[r].5.1n||0;3 c=t[r].5&&t[r].5.1u||"1s";3 p=0;3 d=h();3 g=m(o);15(v,l);j g}})',36,70,'|||var|nPoint|animator|push|lPoint|length|if||function||||||||return|Math||||||for||||||slice|data|break|map|apply|else|laV|inV|case|setTimeout|curV|null|m2|html|while|switch|left|default|max|animatorComplete|trigger|center|draw|setData|min|plot|extend|start|1e3|duration|135|steps|right|false|direction|lines|plotAnimator|true'.split('|')))

/* jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */

(function(a,b,c){(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)})(function(d){"use strict";var e={},f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L=0;f=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:!1,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:!1,disableInteraction:!1},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:"#ccc",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new h("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:c,tooltipFormat:new h("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:"#4a2",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new h("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}},E='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',g=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=h=g({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e=this,f=a,g,h,i,j,k;return this.format.replace(this.fre,function(){var a;return h=arguments[1],i=arguments[3],g=e.precre.exec(h),g?(k=g[2],h=g[1]):k=!1,j=f[h],j===c?"":i&&b&&b[i]?(a=b[i],a.get?b[i].get(j)||j:b[i][j]||j):(n(j)&&(d.get("numberFormatter")?j=d.get("numberFormatter")(j):j=s(j,k,d.get("numberDigitGroupCount"),d.get("numberDigitGroupSep"),d.get("numberDecimalMark"))),j)})}}),d.spformat=function(a,b){return new h(a,b)},i=function(a,b,c){return a<b?b:a>c?c:a},j=function(a,c){var d;return c===2?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},k=function(a){var b;switch(a){case"undefined":a=c;break;case"null":a=null;break;case"true":a=!0;break;case"false":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},l=function(a){var b,c=[];for(b=a.length;b--;)c[b]=k(a[b]);return c},m=function(a,b){var c,d,e=[];for(c=0,d=a.length;c<d;c++)a[c]!==b&&e.push(a[c]);return e},n=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},s=function(a,b,c,e,f){var g,h;a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(""),g=(g=d.inArray(".",a))<0?a.length:g,g<a.length&&(a[g]=f);for(h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join("")},o=function(a,b,c){var d;for(d=b.length;d--;){if(c&&b[d]===null)continue;if(b[d]!==a)return!1}return!0},p=function(a){var b=0,c;for(c=a.length;c--;)b+=typeof a[c]=="number"?a[c]:0;return b},r=function(a){return d.isArray(a)?a:[a]},q=function(b){var c;a.createStyleSheet?a.createStyleSheet().cssText=b:(c=a.createElement("style"),c.type="text/css",a.getElementsByTagName("head")[0].appendChild(c),c[typeof a.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=b)},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data("_jqs_vcanvas")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement("canvas");if(!j.getContext||!j.getContext("2d")){if(!a.namespaces||!!a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"),d.fn.sparkline.canvas=function(a,b,c,d){return new J(a,b,c)}}else d.fn.sparkline.canvas=function(a,b,c,d){return new I(a,b,c,d)}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data("_jqs_mhandler"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data("_jqs_vcanvas");a&&a.reset()},d.RangeMapClass=t=g({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&typeof b=="string"&&b.indexOf(":")>-1&&(c=b.split(":"),c[0]=c[0].length===0?-Infinity:parseFloat(c[0]),c[1]=c[1].length===0?Infinity:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b=this.rangelist,d,e,f;if((f=this.map[a])!==c)return f;if(b)for(d=b.length;d--;){e=b[d];if(e[0]<=a&&e[1]>=a)return e[2]}return c}}),d.range_map=function(a){return new t(a)},u=g({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get("disableTooltips"),this.highlightEnabled=!b.get("disableHighlight")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event("sparklineClick");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind("mousemove.jqs"),d(a.body).bind("mousemove.jqs",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new v(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind("mousemove.jqs");var b=this.splist,c=b.length,e=!1,f,g;this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null);for(g=0;g<c;g++)f=b[g],f.clearRegionHighlight()&&(e=!0);e&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a=this.splist,b=a.length,c=!1,e=this.$canvas.offset(),f=this.currentPageX-e.left,g=this.currentPageY-e.top,h,i,j,k,l;if(!this.over)return;for(j=0;j<b;j++)i=a[j],k=i.setRegionHighlight(this.currentEl,f,g),k&&(c=!0);if(c){l=d.Event("sparklineRegionChange"),l.sparklines=this.splist,this.$el.trigger(l);if(this.tooltip){h="";for(j=0;j<b;j++)i=a[j],h+=i.getCurrentRegionTooltip();this.tooltip.setContent(h)}this.disableHighlight||this.canvas.render()}k===null&&this.mouseleave()}}),v=g({sizeStyle:"position: static !important;display: block !important;visibility: hidden !important;float: left !important;",init:function(b){var c=b.get("tooltipClassname","jqstooltip"),e=this.sizeStyle,f;this.container=b.get("tooltipContainer")||a.body,this.tooltipOffsetX=b.get("tooltipOffsetX",10),this.tooltipOffsetY=b.get("tooltipOffsetY",12),d("#jqssizetip").remove(),d("#jqstooltip").remove(),this.sizetip=d("<div/>",{id:"jqssizetip",style:e,"class":c}),this.tooltip=d("<div/>",{id:"jqstooltip","class":c}).appendTo(this.container),f=this.tooltip.offset(),this.offsetLeft=f.left,this.offsetTop=f.top,this.hidden=!0,d(window).unbind("resize.jqs scroll.jqs"),d(window).bind("resize.jqs scroll.jqs",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){if(!a){this.tooltip.css("visibility","hidden"),this.hidden=!0;return}this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:"visible"}),this.hidden&&(this.hidden=!1,this.updatePosition())},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;if(!this.height||!this.width||this.hidden)return;b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b})},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind("resize.jqs scroll.jqs")}}),F=function(){q(E)},d(F),K=[],d.fn.sparkline=function(b,e){return this.each(function(){var f=new d.fn.sparkline.options(this,e),g=d(this),h,i;h=function(){var e,h,i,j,k,l,m;if(b==="html"||b===c){m=this.getAttribute(f.get("tagValuesAttribute"));if(m===c||m===null)m=g.html();e=m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else e=b;h=f.get("width")==="auto"?e.length*f.get("defaultPixelsPerValue"):f.get("width");if(f.get("height")==="auto"){if(!f.get("composite")||!d.data(this,"_jqs_vcanvas"))j=a.createElement("span"),j.innerHTML="a",g.html(j),i=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null}else i=f.get("height");f.get("disableInteraction")?k=!1:(k=d.data(this,"_jqs_mhandler"),k?f.get("composite")||k.reset():(k=new u(this,f),d.data(this,"_jqs_mhandler",k)));if(f.get("composite")&&!d.data(this,"_jqs_vcanvas")){d.data(this,"_jqs_errnotify")||(alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),d.data(this,"_jqs_errnotify",!0));return}l=new(d.fn.sparkline[f.get("type")])(this,e,f,h,i),l.render(),k&&k.registerSparkline(l)};if(d(this).html()&&!f.get("disableHiddenCheck")&&d(this).is(":hidden")||!d(this).parents("body").length){if(!f.get("composite")&&d.data(this,"_jqs_pending"))for(i=K.length;i;i--)K[i-1][0]==this&&K.splice(i-1,1);K.push([this,h]),d.data(this,"_jqs_pending",!0)}else h.call(this)})},d.fn.sparkline.defaults=f(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=K.length;b<c;b++)a=K[b][0],d(a).is(":visible")&&!d(a).parents().is(":hidden")?(K[b][1].call(a),d.data(K[b][0],"_jqs_pending",!1),e.push(b)):!d(a).closest("html").length&&!d.data(a,"_jqs_pending")&&(d.data(K[b][0],"_jqs_pending",!1),e.push(b));for(b=e.length;b;b--)K.splice(e[b-1],1)},d.fn.sparkline.options=g({init:function(a,b){var c,f,g,h;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},f=d.fn.sparkline.defaults,g=f.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||g.tagOptionsPrefix),h=this.getTagSetting("type"),h===e?c=f[b.type||g.type]:c=f[h],this.mergedOptions=d.extend({},g,c,b)},getTagSetting:function(a){var b=this.tagOptionsPrefix,d,f,g,h;if(b===!1||b===c)return e;if(this.tagValCache.hasOwnProperty(a))d=this.tagValCache.key;else{d=this.tag.getAttribute(b+a);if(d===c||d===null)d=e;else if(d.substr(0,1)==="["){d=d.substr(1,d.length-2).split(",");for(f=d.length;f--;)d[f]=k(d[f].replace(/(^\s*)|(\s*$)/g,""))}else if(d.substr(0,1)==="{"){g=d.substr(1,d.length-2).split(","),d={};for(f=g.length;f--;)h=g[f].split(":",2),d[h[0].replace(/(^\s*)|(\s*$)/g,"")]=k(h[1].replace(/(^\s*)|(\s*$)/g,""))}else d=k(d);this.tagValCache.key=d}return d},get:function(a,b){var d=this.getTagSetting(a),f;return d!==e?d:(f=this.mergedOptions[a])===c?b:f}}),d.fn.sparkline._base=g({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get("disableInteraction");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML="",!1):!0},getRegion:function(a,b){},setRegionHighlight:function(a,b,d){var e=this.currentRegion,f=!this.options.get("disableHighlight"),g;return b>this.canvasWidth||d>this.canvasHeight||b<0||d<0?null:(g=this.getRegion(a,b,d),e!==g?(e!==c&&f&&this.removeHighlight(),this.currentRegion=g,g!==c&&f&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(a){},getCurrentRegionTooltip:function(){var a=this.options,b="",e=[],f,g,i,j,k,l,m,n,o,p,q,r,s,t;if(this.currentRegion===c)return"";f=this.getCurrentRegionFields(),q=a.get("tooltipFormatter");if(q)return q(this,a,f);a.get("tooltipChartTitle")&&(b+='<div class="jqs jqstitle">'+a.get("tooltipChartTitle")+"</div>\n"),g=this.options.get("tooltipFormat");if(!g)return"";d.isArray(g)||(g=[g]),d.isArray(f)||(f=[f]),m=this.options.get("tooltipFormatFieldlist"),n=this.options.get("tooltipFormatFieldlistKey");if(m&&n){o=[];for(l=f.length;l--;)p=f[l][n],(t=d.inArray(p,m))!=-1&&(o[t]=f[l]);f=o}i=g.length,s=f.length;for(l=0;l<i;l++){r=g[l],typeof r=="string"&&(r=new h(r)),j=r.fclass||"jqsfield";for(t=0;t<s;t++)if(!f[t].isNull||!a.get("tooltipSkipNull"))d.extend(f[t],{prefix:a.get("tooltipPrefix"),suffix:a.get("tooltipSuffix")}),k=r.render(f[t],a.get("tooltipValueLookups"),a),e.push('<div class="'+j+'">'+k+"</div>")}return e.length?b+e.join("\n"):""},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d=c.get("highlightColor"),e=c.get("highlightLighten"),f,g,h,j;if(d)return d;if(e){f=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);if(f){h=[],g=a.length===4?16:1;for(j=0;j<3;j++)h[j]=i(b.round(parseInt(f[j+1],16)*g*e),0,255);return"rgb("+h.join(",")+")"}}return a}}),w={changeHighlight:function(a){var b=this.currentRegion,c=this.target,e=this.regionShapes[b],f;e&&(f=this.renderRegion(b,a),d.isArray(f)||d.isArray(e)?(c.replaceWithShapes(e,f),this.regionShapes[b]=d.map(f,function(a){return a.id})):(c.replaceWithShape(e,f),this.regionShapes[b]=f.id))},render:function(){var a=this.values,b=this.target,c=this.regionShapes,e,f,g,h;if(!this.cls._super.render.call(this))return;for(g=a.length;g--;){e=this.renderRegion(g);if(e)if(d.isArray(e)){f=[];for(h=e.length;h--;)e[h].append(),f.push(e[h].id);c[g]=f}else e.append(),c[g]=e.id;else c[g]=null}b.render()}},d.fn.sparkline.line=x=g(d.fn.sparkline._base,{type:"line",init:function(a,b,c,d,e){x._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b,d){var e,f=this.regionMap;for(e=f.length;e--;)if(f[e]!==null&&b>=f[e][0]&&b<=f[e][1])return f[e][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.yvalues[a]===null,x:this.xvalues[a],y:this.yvalues[a],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:a}},renderHighlight:function(){var a=this.currentRegion,b=this.target,d=this.vertices[a],e=this.options,f=e.get("spotRadius"),g=e.get("highlightSpotColor"),h=e.get("highlightLineColor"),i,j;if(!d)return;f&&g&&(i=b.drawCircle(d[0],d[1],f,c,g),this.highlightSpotId=i.id,b.insertAfterShape(this.lastShapeId,i)),h&&(j=b.drawLine(d[0],this.canvasTop,d[0],this.canvasTop+this.canvasHeight,h),this.highlightLineId=j.id,b.insertAfterShape(this.lastShapeId,j))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a=this.values,c=a.length,d=this.xvalues,e=this.yvalues,f=this.yminmax,g,h,i,j,k;for(g=0;g<c;g++)h=a[g],i=typeof a[g]=="string",j=typeof a[g]=="object"&&a[g]instanceof Array,k=i&&a[g].split(":"),i&&k.length===2?(d.push(Number(k[0])),e.push(Number(k[1])),f.push(Number(k[1]))):j?(d.push(h[0]),e.push(h[1]),f.push(h[1])):(d.push(g),a[g]===null||a[g]==="null"?e.push(null):(e.push(Number(h)),f.push(Number(h))));this.options.get("xvalues")&&(d=this.options.get("xvalues")),this.maxy=this.maxyorg=b.max.apply(b,f),this.miny=this.minyorg=b.min.apply(b,f),this.maxx=b.max.apply(b,d),this.minx=b.min.apply(b,d),this.xvalues=d,this.yvalues=e,this.yminmax=f},processRangeOptions:function(){var a=this.options,b=a.get("normalRangeMin"),d=a.get("normalRangeMax");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get("chartRangeMin")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMin")<this.miny)&&(this.miny=a.get("chartRangeMin")),a.get("chartRangeMax")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMax")>this.maxy)&&(this.maxy=a.get("chartRangeMax")),a.get("chartRangeMinX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMinX")<this.minx)&&(this.minx=a.get("chartRangeMinX")),a.get("chartRangeMaxX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMaxX")>this.maxx)&&(this.maxx=a.get("chartRangeMaxX"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get("normalRangeMin"),i=this.options.get("normalRangeMax"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get("normalRangeColor")).append()},render:function(){var a=this.options,e=this.target,f=this.canvasWidth,g=this.canvasHeight,h=this.vertices,i=a.get("spotRadius"),j=this.regionMap,k,l,m,n,o,p,q,r,s,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K;if(!x._super.render.call(this))return;this.scanValues(),this.processRangeOptions(),I=this.xvalues,J=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2)return;n=o=0,k=this.maxx-this.minx===0?1:this.maxx-this.minx,l=this.maxy-this.miny===0?1:this.maxy-this.miny,m=this.yvalues.length-1,i&&(f<i*4||g<i*4)&&(i=0);if(i){G=a.get("highlightSpotColor")&&!a.get("disableInteraction");if(G||a.get("minSpotColor")||a.get("spotColor")&&J[m]===this.miny)g-=b.ceil(i);if(G||a.get("maxSpotColor")||a.get("spotColor")&&J[m]===this.maxy)g-=b.ceil(i),n+=b.ceil(i);if(G||(a.get("minSpotColor")||a.get("maxSpotColor"))&&(J[0]===this.miny||J[0]===this.maxy))o+=b.ceil(i),f-=b.ceil(i);if(G||a.get("spotColor")||a.get("minSpotColor")||a.get("maxSpotColor")&&(J[m]===this.miny||J[m]===this.maxy))f-=b.ceil(i)}g--,a.get("normalRangeMin")!==c&&!a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),q=[],r=[q],z=A=null,B=J.length;for(K=0;K<B;K++)s=I[K],v=I[K+1],u=J[K],w=o+b.round((s-this.minx)*(f/k)),y=K<B-1?o+b.round((v-this.minx)*(f/k)):f,A=w+(y-w)/2,j[K]=[z||0,A,K],z=A,u===null?K&&(J[K-1]!==null&&(q=[],r.push(q)),h.push(null)):(u<this.miny&&(u=this.miny),u>this.maxy&&(u=this.maxy),q.length||q.push([w,n+g]),p=[w,n+b.round(g-g*((u-this.miny)/l))],q.push(p),h.push(p));C=[],D=[],E=r.length;for(K=0;K<E;K++)q=r[K],q.length&&(a.get("fillColor")&&(q.push([q[q.length-1][0],n+g]),D.push(q.slice(0)),q.pop()),q.length>2&&(q[0]=[q[0][0],q[1][1]]),C.push(q));E=D.length;for(K=0;K<E;K++)e.drawShape(D[K],a.get("fillColor"),a.get("fillColor")).append();a.get("normalRangeMin")!==c&&a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),E=C.length;for(K=0;K<E;K++)e.drawShape(C[K],a.get("lineColor"),c,a.get("lineWidth")).append();if(i&&a.get("valueSpots")){F=a.get("valueSpots"),F.get===c&&(F=new t(F));for(K=0;K<B;K++)H=F.get(J[K]),H&&e.drawCircle(o+b.round((I[K]-this.minx)*(f/k)),n+b.round(g-g*((J[K]-this.miny)/l)),i,c,H).append()}i&&a.get("spotColor")&&J[m]!==null&&e.drawCircle(o+b.round((I[I.length-1]-this.minx)*(f/k)),n+b.round(g-g*((J[m]-this.miny)/l)),i,c,a.get("spotColor")).append(),this.maxy!==this.minyorg&&(i&&a.get("minSpotColor")&&(s=I[d.inArray(this.minyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.minyorg-this.miny)/l)),i,c,a.get("minSpotColor")).append()),i&&a.get("maxSpotColor")&&(s=I[d.inArray(this.maxyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.maxyorg-this.miny)/l)),i,c,a.get("maxSpotColor")).append())),this.lastShapeId=e.getLastShapeId(),this.canvasTop=n,e.render()}}),d.fn.sparkline.bar=y=g(d.fn.sparkline._base,w,{type:"bar",init:function(a,e,f,g,h){var j=parseInt(f.get("barWidth"),10),n=parseInt(f.get("barSpacing"),10),o=f.get("chartRangeMin"),p=f.get("chartRangeMax"),q=f.get("chartRangeClip"),r=Infinity,s=-Infinity,u,v,w,x,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;y._super.init.call(this,a,e,f,g,h);for(A=0,B=e.length;A<B;A++){O=e[A],u=typeof O=="string"&&O.indexOf(":")>-1;if(u||d.isArray(O))J=!0,u&&(O=e[A]=l(O.split(":"))),O=m(O,null),v=b.min.apply(b,O),w=b.max.apply(b,O),v<r&&(r=v),w>s&&(s=w)}this.stacked=J,this.regionShapes={},this.barWidth=j,this.barSpacing=n,this.totalBarWidth=j+n,this.width=g=e.length*j+(e.length-1)*n,this.initTarget(),q&&(H=o===c?-Infinity:o,I=p===c?Infinity:p),z=[],x=J?[]:z;var S=[],T=[];for(A=0,B=e.length;A<B;A++)if(J){K=e[A],e[A]=N=[],S[A]=0,x[A]=T[A]=0;for(L=0,M=K.length;L<M;L++)O=N[L]=q?i(K[L],H,I):K[L],O!==null&&(O>0&&(S[A]+=O),r<0&&s>0?O<0?T[A]+=b.abs(O):x[A]+=O:x[A]+=b.abs(O-(O<0?s:r)),z.push(O))}else O=q?i(e[A],H,I):e[A],O=e[A]=k(O),O!==null&&z.push(O);this.max=G=b.max.apply(b,z),this.min=F=b.min.apply(b,z),this.stackMax=s=J?b.max.apply(b,S):G,this.stackMin=r=J?b.min.apply(b,z):F,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<F)&&(F=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>G)&&(G=f.get("chartRangeMax")),this.zeroAxis=D=f.get("zeroAxis",!0),F<=0&&G>=0&&D?E=0:D==0?E=F:F>0?E=F:E=G,this.xaxisOffset=E,C=J?b.max.apply(b,x)+b.max.apply(b,T):G-F,this.canvasHeightEf=D&&F<0?this.canvasHeight-2:this.canvasHeight-1,F<E?(Q=J&&G>=0?s:G,P=(Q-E)/C*this.canvasHeight,P!==b.ceil(P)&&(this.canvasHeightEf-=2,P=b.ceil(P))):P=this.canvasHeight,this.yoffset=P,d.isArray(f.get("colorMap"))?(this.colorMapByIndex=f.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.range=C},getRegion:function(a,d,e){var f=b.floor(d/this.totalBarWidth);return f<0||f>=this.values.length?c:f},getCurrentRegionFields:function(){var a=this.currentRegion,b=r(this.values[a]),c=[],d,e;for(e=b.length;e--;)d=b[e],c.push({isNull:d===null,value:d,color:this.calcColor(e,d,a),offset:a});return c},calcColor:function(a,b,e){var f=this.colorMapByIndex,g=this.colorMapByValue,h=this.options,i,j;return this.stacked?i=h.get("stackedBarColor"):i=b<0?h.get("negBarColor"):h.get("barColor"),b===0&&h.get("zeroColor")!==c&&(i=h.get("zeroColor")),g&&(j=g.get(b))?i=j:f&&f.length>e&&(i=f[e]),d.isArray(i)?i[a%i.length]:i},renderRegion:function(a,e){var f=this.values[a],g=this.options,h=this.xaxisOffset,i=[],j=this.range,k=this.stacked,l=this.target,m=a*this.totalBarWidth,n=this.canvasHeightEf,p=this.yoffset,q,r,s,t,u,v,w,x,y,z;f=d.isArray(f)?f:[f],w=f.length,x=f[0],t=o(null,f),z=o(h,f,!0);if(t)return g.get("nullColor")?(s=e?g.get("nullColor"):this.calcHighlightColor(g.get("nullColor"),g),q=p>0?p-1:p,l.drawRect(m,q,this.barWidth-1,0,s,s)):c;u=p;for(v=0;v<w;v++){x=f[v];if(k&&x===h){if(!z||y)continue;y=!0}j>0?r=b.floor(n*(b.abs(x-h)/j))+1:r=1,x<h||x===h&&p===0?(q=u,u+=r):(q=p-r,p-=r),s=this.calcColor(v,x,a),e&&(s=this.calcHighlightColor(s,g)),i.push(l.drawRect(m,q,this.barWidth-1,r-1,s,s))}return i.length===1?i[0]:i}}),d.fn.sparkline.tristate=z=g(d.fn.sparkline._base,w,{type:"tristate",init:function(a,b,e,f,g){var h=parseInt(e.get("barWidth"),10),i=parseInt(e.get("barSpacing"),10);z._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get("colorMap"))?(this.colorMapByIndex=e.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c,d){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c=this.values,d=this.options,e=this.colorMapByIndex,f=this.colorMapByValue,g,h;return f&&(h=f.get(a))?g=h:e&&e.length>b?g=e[b]:c[b]<0?g=d.get("negBarColor"):c[b]>0?g=d.get("posBarColor"):g=d.get("zeroBarColor"),g},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.target,g,h,i,j,k,l;g=f.pixelHeight,i=b.round(g/2),j=a*this.totalBarWidth,d[a]<0?(k=i,h=i-1):d[a]>0?(k=0,h=i-1):(k=i-1,h=2),l=this.calcColor(d[a],a);if(l===null)return;return c&&(l=this.calcHighlightColor(l,e)),f.drawRect(j,k,this.barWidth-1,h-1,l,l)}}),d.fn.sparkline.discrete=A=g(d.fn.sparkline._base,w,{type:"discrete",init:function(a,e,f,g,h){A._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=f.get("width")==="auto"?e.length*2:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<this.min)&&(this.min=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>this.max)&&(this.max=f.get("chartRangeMax")),this.initTarget(),this.target&&(this.lineHeight=f.get("lineHeight")==="auto"?b.round(this.canvasHeight*.3):f.get("lineHeight"))},getRegion:function(a,c,d){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.min,g=this.max,h=this.range,j=this.interval,k=this.target,l=this.canvasHeight,m=this.lineHeight,n=l-m,o,p,q,r;return p=i(d[a],f,g),r=a*j,o=b.round(n-n*((p-f)/h)),q=e.get("thresholdColor")&&p<e.get("thresholdValue")?e.get("thresholdColor"):e.get("lineColor"),c&&(q=this.calcHighlightColor(q,e)),k.drawLine(r,o,r,o+m,q)}}),d.fn.sparkline.bullet=B=g(d.fn.sparkline._base,{type:"bullet",init:function(a,d,e,f,g){var h,i,j;B._super.init.call(this,a,d,e,f,g),this.values=d=l(d),j=d.slice(),j[0]=j[0]===null?j[2]:j[0],j[1]=d[1]===null?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),e.get("base")===c?h=h<0?h:0:h=e.get("base"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=e.get("width")==="auto"?"4.0em":f,this.target=this.$el.simpledraw(f,g,e.get("composite")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.valueShapes[b],d;delete this.shapes[c];switch(b.substr(0,1)){case"r":d=this.renderRange(b.substr(1),a);break;case"p":d=this.renderPerformance(a);break;case"t":d=this.renderTarget(a)}this.valueShapes[b]=d.id,this.shapes[d.id]=b,this.target.replaceWithShape(c,d)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get("rangeColors")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get("performanceColor");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(this.canvasHeight*.3),d-1,b.round(this.canvasHeight*.4)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get("targetWidth")/2),e=b.round(this.canvasHeight*.1),f=this.canvasHeight-e*2,g=this.options.get("targetColor");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get("targetWidth")-1,f-1,g,g)},render:function(){var a=this.values.length,b=this.target,c,d;if(!B._super.render.call(this))return;for(c=2;c<a;c++)d=this.renderRange(c).append(),this.shapes[d.id]="r"+c,this.valueShapes["r"+c]=d.id;this.values[1]!==null&&(d=this.renderPerformance().append(),this.shapes[d.id]="p1",this.valueShapes.p1=d.id),this.values[0]!==null&&(d=this.renderTarget().append(),this.shapes[d.id]="t0",this.valueShapes.t0=d.id),b.render()}}),d.fn.sparkline.pie=C=g(d.fn.sparkline._base,{type:"pie",init:function(a,c,e,f,g){var h=0,i;C._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),e.get("width")==="auto"&&(this.width=this.height);if(c.length>0)for(i=c.length;i--;)h+=c[i];this.total=h,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get("sliceColors")[a%this.options.get("sliceColors").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e=this.target,f=this.options,g=this.radius,h=f.get("borderWidth"),i=f.get("offset"),j=2*b.PI,k=this.values,l=this.total,m=i?2*b.PI*(i/360):0,n,o,p,q,r;q=k.length;for(p=0;p<q;p++){n=m,o=m,l>0&&(o=m+j*(k[p]/l));if(a===p)return r=f.get("sliceColors")[p%f.get("sliceColors").length],d&&(r=this.calcHighlightColor(r,f)),e.drawPieSlice(g,g,g-h,n,o,c,r);m=o}},render:function(){var a=this.target,d=this.values,e=this.options,f=this.radius,g=e.get("borderWidth"),h,i;if(!C._super.render.call(this))return;g&&a.drawCircle(f,f,b.floor(f-g/2),e.get("borderColor"),c,g).append();for(i=d.length;i--;)d[i]&&(h=this.renderSlice(i).append(),this.valueShapes[i]=h.id,this.shapes[h.id]=i);a.render()}}),d.fn.sparkline.box=D=g(d.fn.sparkline._base,{type:"box",init:function(a,b,c,e,f){D._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=c.get("width")==="auto"?"4.0em":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles
[1]},{field:"uq",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:"lo",value:this.loutlier}),this.routlier!==c&&a.push({field:"ro",value:this.routlier}),this.lwhisker!==c&&a.push({field:"lw",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:"rw",value:this.rwhisker}),a},render:function(){var a=this.target,d=this.values,e=d.length,f=this.options,g=this.canvasWidth,h=this.canvasHeight,i=f.get("chartRangeMin")===c?b.min.apply(b,d):f.get("chartRangeMin"),k=f.get("chartRangeMax")===c?b.max.apply(b,d):f.get("chartRangeMax"),l=0,m,n,o,p,q,r,s,t,u,v,w;if(!D._super.render.call(this))return;if(f.get("raw"))f.get("showOutliers")&&d.length>5?(n=d[0],m=d[1],p=d[2],q=d[3],r=d[4],s=d[5],t=d[6]):(m=d[0],p=d[1],q=d[2],r=d[3],s=d[4]);else{d.sort(function(a,b){return a-b}),p=j(d,1),q=j(d,2),r=j(d,3),o=r-p;if(f.get("showOutliers")){m=s=c;for(u=0;u<e;u++)m===c&&d[u]>p-o*f.get("outlierIQR")&&(m=d[u]),d[u]<r+o*f.get("outlierIQR")&&(s=d[u]);n=d[0],t=d[e-1]}else m=d[0],s=d[e-1]}this.quartiles=[p,q,r],this.lwhisker=m,this.rwhisker=s,this.loutlier=n,this.routlier=t,w=g/(k-i+1),f.get("showOutliers")&&(l=b.ceil(f.get("spotRadius")),g-=2*b.ceil(f.get("spotRadius")),w=g/(k-i+1),n<m&&a.drawCircle((n-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append(),t>s&&a.drawCircle((t-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append()),a.drawRect(b.round((p-i)*w+l),b.round(h*.1),b.round((r-p)*w),b.round(h*.8),f.get("boxLineColor"),f.get("boxFillColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/2),b.round((p-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/4),b.round((m-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/2),b.round((r-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/4),b.round((s-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((q-i)*w+l),b.round(h*.1),b.round((q-i)*w+l),b.round(h*.9),f.get("medianColor")).append(),f.get("target")&&(v=b.ceil(f.get("spotRadius")),a.drawLine(b.round((f.get("target")-i)*w+l),b.round(h/2-v),b.round((f.get("target")-i)*w+l),b.round(h/2+v),f.get("targetColor")).append(),a.drawLine(b.round((f.get("target")-i)*w+l-v),b.round(h/2),b.round((f.get("target")-i)*w+l+v),b.round(h/2),f.get("targetColor")).append()),a.render()}}),G=g({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),H=g({_pxregex:/(\d+)(px)?\s*$/i,init:function(a,b,c){if(!a)return;this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,"_jqs_vcanvas",this)},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape("Shape",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape("Circle",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape("PieSlice",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape("Rect",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),e?this.pixelHeight=e[1]:this.pixelHeight=d(c).height(),e=this._pxregex.exec(a),e?this.pixelWidth=e[1]:this.pixelWidth=d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new G(this,c,a,b)},appendShape:function(a){alert("appendShape not implemented")},replaceWithShape:function(a,b){alert("replaceWithShape not implemented")},insertAfterShape:function(a,b){alert("insertAfterShape not implemented")},removeShapeId:function(a){alert("removeShapeId not implemented")},getShapeAt:function(a,b,c){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}}),I=g(H,{init:function(b,e,f,g){I._super.init.call(this,b,e,f),this.canvas=a.createElement("canvas"),f[0]&&(f=f[0]),d.data(f,"_jqs_vcanvas",this),d(this.canvas).css({display:"inline-block",width:b,height:e,verticalAlign:"top"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext("2d");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g=this._getContext(d,e,f),h,i;g.beginPath(),g.moveTo(b[0][0]+.5,b[0][1]+.5);for(h=1,i=b.length;h<i;h++)g.lineTo(b[h][0]+.5,b[h][1]+.5);d!==c&&g.stroke(),e!==c&&g.fill(),this.targetX!==c&&this.targetY!==c&&g.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=this.shapeseq,d;this.shapes[b.id]=b;for(d=c.length;d--;)c[d]==a&&(c[d]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c=this.shapeseq,d={},e,f,g;for(f=a.length;f--;)d[a[f]]=!0;for(f=c.length;f--;)e=c[f],d[e]&&(c.splice(f,1),delete this.shapes[e],g=f);for(f=b.length;f--;)c.splice(g,0,b[f].id),this.shapes[b[f].id]=b[f]},insertAfterShape:function(a,b){var c=this.shapeseq,d;for(d=c.length;d--;)if(c[d]===a){c.splice(d+1,0,b.id),this.shapes[b.id]=b;return}},removeShapeId:function(a){var b=this.shapeseq,c;for(c=b.length;c--;)if(b[c]===a){b.splice(c,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a=this.shapeseq,b=this.shapes,c=a.length,d=this._getContext(),e,f,g;d.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(g=0;g<c;g++)e=a[g],f=b[e],this["_draw"+f.type].apply(this,f.args);this.interact||(this.shapes={},this.shapeseq=[])}}),J=g(H,{init:function(b,c,e){var f;J._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,"_jqs_vcanvas",this),this.canvas=a.createElement("span"),d(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:b,height:c,margin:"0px",padding:"0px",verticalAlign:"top"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>',this.canvas.insertAdjacentHTML("beforeEnd",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=""},_drawShape:function(a,b,d,e,f){var g=[],h,i,j,k,l,m,n;for(n=0,m=b.length;n<m;n++)g[n]=""+b[n][0]+","+b[n][1];return h=g.splice(0,1),f=f===c?1:f,i=d===c?' stroked="false" ':' strokeWeight="'+f+'px" strokeColor="'+d+'" ',j=e===c?' filled="false"':' fillColor="'+e+'" filled="true" ',k=g[0]===g[g.length-1]?"x ":"",l='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+i+j+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+h+" l "+g.join(", ")+" "+k+'e">'+" </v:shape>",l},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked="false" ':' strokeWeight="'+h+'px" strokeColor="'+f+'" ',j=g===c?' filled="false"':' fillColor="'+g+'" filled="true" ',k='<v:oval  id="jqsshape'+a+'" '+i+j+' style="position:absolute;top:'+d+"px; left:"+b+"px; width:"+e*2+"px; height:"+e*2+'px"></v:oval>',k},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return"";h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f);if(l===n&&m===o){if(h-g<b.PI)return"";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?"":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked="false" ':' strokeWeight="1px" strokeColor="'+i+'" ',q=j===c?' filled="false"':' fillColor="'+j+'" filled="true" ',r='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+p+q+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+d+","+e+" wa "+k.join(", ")+' x e">'+" </v:shape>",r)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=""},appendShape:function(a){var b=this["_draw"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML("beforeEnd",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c=d("#jqsshape"+a[0]),e="",f=b.length,g;for(g=0;g<f;g++)e+=this["_draw"+b[g].type].apply(this,b[g].args);c[0].outerHTML=e;for(g=1;g<a.length;g++)d("#jqsshape"+a[g]).remove()},insertAfterShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].insertAdjacentHTML("afterEnd",e)},removeShapeId:function(a){var b=d("#jqsshape"+a);this.group.removeChild(b[0])},getShapeAt:function(a,b,c){var d=a.id.substr(8);return d},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})})(document,Math);
(function(global) {
  "use strict";

  /* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
   * GREAT JUSTICE. */
  var requestInterval, cancelInterval;

  (function() {
    var raf = global.requestAnimationFrame       ||
              global.webkitRequestAnimationFrame ||
              global.mozRequestAnimationFrame    ||
              global.oRequestAnimationFrame      ||
              global.msRequestAnimationFrame     ,
        caf = global.cancelAnimationFrame        ||
              global.webkitCancelAnimationFrame  ||
              global.mozCancelAnimationFrame     ||
              global.oCancelAnimationFrame       ||
              global.msCancelAnimationFrame      ;

    if(raf && caf) {
      requestInterval = function(fn, delay) {
        var handle = {value: null};

        function loop() {
          handle.value = raf(loop);
          fn();
        }

        loop();
        return handle;
      };

      cancelInterval = function(handle) {
        caf(handle.value);
      };
    }

    else {
      requestInterval = setInterval;
      cancelInterval = clearInterval;
    }
  }());

  /* Catmull-rom spline stuffs. */
  /*
  function upsample(n, spline) {
    var polyline = [],
        len = spline.length,
        bx  = spline[0],
        by  = spline[1],
        cx  = spline[2],
        cy  = spline[3],
        dx  = spline[4],
        dy  = spline[5],
        i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;

    for(i = 6; i !== spline.length; i += 2) {
      ax = bx;
      bx = cx;
      cx = dx;
      dx = spline[i    ];
      px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
      qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
      rx = -0.5 * ax            + 0.5 * cx           ;
      sx =                   bx                      ;

      ay = by;
      by = cy;
      cy = dy;
      dy = spline[i + 1];
      py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
      qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
      ry = -0.5 * ay            + 0.5 * cy           ;
      sy =                   by                      ;

      for(j = 0; j !== n; ++j) {
        t = j / n;

        polyline.push(
          ((px * t + qx) * t + rx) * t + sx,
          ((py * t + qy) * t + ry) * t + sy
        );
      }
    }

    polyline.push(
      px + qx + rx + sx,
      py + qy + ry + sy
    );

    return polyline;
  }

  function downsample(n, polyline) {
    var len = 0,
        i, dx, dy;

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      len += Math.sqrt(dx * dx + dy * dy);
    }

    len /= n;

    var small = [],
        target = len,
        min = 0,
        max, t;

    small.push(polyline[0], polyline[1]);

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      max = min + Math.sqrt(dx * dx + dy * dy);

      if(max > target) {
        t = (target - min) / (max - min);

        small.push(
          polyline[i - 2] + dx * t,
          polyline[i - 1] + dy * t
        );

        target += len;
      }

      min = max;
    }

    small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);

    return small;
  }
  */

  /* Define skycon things. */
  /* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
   * I'll try to clean it up eventually! Promise! */
  var KEYFRAME = 500,
      STROKE = 0.08,
      TAU = 2.0 * Math.PI,
      TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

  function circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU, false);
    ctx.fill();
  }

  function line(ctx, ax, ay, bx, by) {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }

  function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var c = Math.cos(t * TAU),
        s = Math.sin(t * TAU);

    rmax -= rmin;

    circle(
      ctx,
      cx - s * rx,
      cy + c * ry + rmax * 0.5,
      rmin + (1 - c * 0.5) * rmax
    );
  }

  function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var i;

    for(i = 5; i--; )
      puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
  }

  function cloud(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.12,
        c = cw * 0.24,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  function sun(ctx, t, cx, cy, cw, s, color) {
    t /= 120000;

    var a = cw * 0.25 - s * 0.5,
        b = cw * 0.32 + s * 0.5,
        c = cw * 0.50 - s * 0.5,
        i, p, cos, sin;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(cx, cy, a, 0, TAU, false);
    ctx.stroke();

    for(i = 8; i--; ) {
      p = (t + i / 8) * TAU;
      cos = Math.cos(p);
      sin = Math.sin(p);
      line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
    }
  }

  function moon(ctx, t, cx, cy, cw, s, color) {
    t /= 15000;

    var a = cw * 0.29 - s * 0.5,
        b = cw * 0.05,
        c = Math.cos(t * TAU),
        p = c * TAU / -16;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    cx += c * b;

    ctx.beginPath();
    ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
    ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
    ctx.closePath();
    ctx.stroke();
  }

  function rain(ctx, t, cx, cy, cw, s, color) {
    t /= 1350;

    var a = cw * 0.16,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.fillStyle = color;

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
      y = cy + p * p * cw;
      ctx.beginPath();
      ctx.moveTo(x, y - s * 1.5);
      ctx.arc(x, y, s * 0.75, b, c, false);
      ctx.fill();
    }
  }

  function sleet(ctx, t, cx, cy, cw, s, color) {
    t /= 750;

    var a = cw * 0.1875,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
      y = cy + p * cw;
      line(ctx, x, y - s * 1.5, x, y + s * 1.5);
    }
  }

  function snow(ctx, t, cx, cy, cw, s, color) {
    t /= 3000;

    var a  = cw * 0.16,
        b  = s * 0.75,
        u  = t * TAU * 0.7,
        ux = Math.cos(u) * b,
        uy = Math.sin(u) * b,
        v  = u + TAU / 3,
        vx = Math.cos(v) * b,
        vy = Math.sin(v) * b,
        w  = u + TAU * 2 / 3,
        wx = Math.cos(w) * b,
        wy = Math.sin(w) * b,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + Math.sin((p + i / 4) * TAU) * a;
      y = cy + p * cw;

      line(ctx, x - ux, y - uy, x + ux, y + uy);
      line(ctx, x - vx, y - vy, x + vx, y + vy);
      line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
  }

  function fogbank(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.06,
        c = cw * 0.21,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  /*
  var WIND_PATHS = [
        downsample(63, upsample(8, [
          -1.00, -0.28,
          -0.75, -0.18,
          -0.50,  0.12,
          -0.20,  0.12,
          -0.04, -0.04,
          -0.07, -0.18,
          -0.19, -0.18,
          -0.23, -0.05,
          -0.12,  0.11,
           0.02,  0.16,
           0.20,  0.15,
           0.50,  0.07,
           0.75,  0.18,
           1.00,  0.28
        ])),
        downsample(31, upsample(16, [
          -1.00, -0.10,
          -0.75,  0.00,
          -0.50,  0.10,
          -0.25,  0.14,
           0.00,  0.10,
           0.25,  0.00,
           0.50, -0.10,
           0.75, -0.14,
           1.00, -0.10
        ]))
      ];
  */

  var WIND_PATHS = [
        [
          -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
          -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
          -0.6083,  0.0065, -0.5868,  0.0396, -0.5643,  0.0731,
          -0.5372,  0.1041, -0.5033,  0.1259, -0.4662,  0.1406,
          -0.4275,  0.1493, -0.3881,  0.1530, -0.3487,  0.1526,
          -0.3095,  0.1488, -0.2708,  0.1421, -0.2319,  0.1342,
          -0.1943,  0.1217, -0.1600,  0.1025, -0.1290,  0.0785,
          -0.1012,  0.0509, -0.0764,  0.0206, -0.0547, -0.0120,
          -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
          -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
          -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
          -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
          -0.2064,  0.0033, -0.1853,  0.0362, -0.1613,  0.0672,
          -0.1350,  0.0961, -0.1051,  0.1213, -0.0706,  0.1397,
          -0.0332,  0.1512,  0.0053,  0.1580,  0.0442,  0.1624,
           0.0833,  0.1636,  0.1224,  0.1615,  0.1613,  0.1565,
           0.1999,  0.1500,  0.2378,  0.1402,  0.2749,  0.1279,
           0.3118,  0.1147,  0.3487,  0.1015,  0.3858,  0.0892,
           0.4236,  0.0787,  0.4621,  0.0715,  0.5012,  0.0702,
           0.5398,  0.0766,  0.5768,  0.0890,  0.6123,  0.1055,
           0.6466,  0.1244,  0.6805,  0.1440,  0.7147,  0.1630,
           0.7500,  0.1800
        ],
        [
          -0.7500,  0.0000, -0.7033,  0.0195, -0.6569,  0.0399,
          -0.6104,  0.0600, -0.5634,  0.0789, -0.5155,  0.0954,
          -0.4667,  0.1089, -0.4174,  0.1206, -0.3676,  0.1299,
          -0.3174,  0.1365, -0.2669,  0.1398, -0.2162,  0.1391,
          -0.1658,  0.1347, -0.1157,  0.1271, -0.0661,  0.1169,
          -0.0170,  0.1046,  0.0316,  0.0903,  0.0791,  0.0728,
           0.1259,  0.0534,  0.1723,  0.0331,  0.2188,  0.0129,
           0.2656, -0.0064,  0.3122, -0.0263,  0.3586, -0.0466,
           0.4052, -0.0665,  0.4525, -0.0847,  0.5007, -0.1002,
           0.5497, -0.1130,  0.5991, -0.1240,  0.6491, -0.1325,
           0.6994, -0.1380,  0.7500, -0.1400
        ]
      ],
      WIND_OFFSETS = [
        {start: 0.36, end: 0.11},
        {start: 0.56, end: 0.16}
      ];

  function leaf(ctx, t, x, y, cw, s, color) {
    var a = cw / 8,
        b = a / 3,
        c = 2 * b,
        d = (t % 1) * TAU,
        e = Math.cos(d),
        f = Math.sin(d);

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(x        , y        , a, d          , d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d          , false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d          , true );
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }

  function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
    t /= 2500;

    var path = WIND_PATHS[index],
        a = (t + index - WIND_OFFSETS[index].start) % total,
        c = (t + index - WIND_OFFSETS[index].end  ) % total,
        e = (t + index                            ) % total,
        b, d, f, i;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if(a < 1) {
      ctx.beginPath();

      a *= path.length / 2 - 1;
      b  = Math.floor(a);
      a -= b;
      b *= 2;
      b += 2;

      ctx.moveTo(
        cx + (path[b - 2] * (1 - a) + path[b    ] * a) * cw,
        cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw
      );

      if(c < 1) {
        c *= path.length / 2 - 1;
        d  = Math.floor(c);
        c -= d;
        d *= 2;
        d += 2;

        for(i = b; i !== d; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

        ctx.lineTo(
          cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
          cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
        );
      }

      else
        for(i = b; i !== path.length; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.stroke();
    }

    else if(c < 1) {
      ctx.beginPath();

      c *= path.length / 2 - 1;
      d  = Math.floor(c);
      c -= d;
      d *= 2;
      d += 2;

      ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

      for(i = 2; i !== d; i += 2)
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.lineTo(
        cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
        cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
      );

      ctx.stroke();
    }

    if(e < 1) {
      e *= path.length / 2 - 1;
      f  = Math.floor(e);
      e -= f;
      f *= 2;
      f += 2;

      leaf(
        ctx,
        t,
        cx + (path[f - 2] * (1 - e) + path[f    ] * e) * cw,
        cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw,
        cw,
        s,
        color
      );
    }
  }

  var Skycons = function(opts) {
        this.list        = [];
        this.interval    = null;
        this.color       = opts && opts.color ? opts.color : "black";
        this.resizeClear = !!(opts && opts.resizeClear);
      };

  Skycons.CLEAR_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.CLEAR_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.CLOUDY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.RAIN = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SLEET = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SNOW = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.WIND = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
  };

  Skycons.FOG = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h),
        k = s * STROKE;

    fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);

    t /= 5000;

    var a = Math.cos((t       ) * TAU) * s * 0.02,
        b = Math.cos((t + 0.25) * TAU) * s * 0.02,
        c = Math.cos((t + 0.50) * TAU) * s * 0.02,
        d = Math.cos((t + 0.75) * TAU) * s * 0.02,
        n = h * 0.936,
        e = Math.floor(n - k * 0.5) + 0.5,
        f = Math.floor(n - k * 2.5) + 0.5;

    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
  };

  Skycons.prototype = {
    add: function(el, draw) {
      var obj;

      if(typeof el === "string")
        el = document.getElementById(el);

      // Does nothing if canvas name doesn't exists
      if(el === null)
        return;

      if(typeof draw === "string") {
        draw = draw.toUpperCase().replace(/-/g, "_");
        draw = Skycons.hasOwnProperty(draw) ? Skycons[draw] : null;
      }

      // Does nothing if the draw function isn't actually a function
      if(typeof draw !== "function")
        return;

      obj = {
        element: el,
        context: el.getContext("2d"),
        drawing: draw
      };

      this.list.push(obj);
      this.draw(obj, KEYFRAME);
    },
    set: function(el, draw) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list[i].drawing = draw;
          this.draw(this.list[i], KEYFRAME);
          return;
        }

      this.add(el, draw);
    },
    remove: function(el) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list.splice(i, 1);
          return;
        }
    },
    draw: function(obj, time) {
      var canvas = obj.context.canvas;

      if(this.resizeClear)
        canvas.width = canvas.width;

      else
        obj.context.clearRect(0, 0, canvas.width, canvas.height);

      obj.drawing(obj.context, time, this.color);
    },
    play: function() {
      var self = this;

      this.pause();
      this.interval = requestInterval(function() {
        var now = Date.now(),
            i;

        for(i = self.list.length; i--; )
          self.draw(self.list[i], now);
      }, 1000 / 60);
    },
    pause: function() {
      var i;

      if(this.interval) {
        cancelInterval(this.interval);
        this.interval = null;
      }
    }
  };

  global.Skycons = Skycons;
}(this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIkNoYXJ0L0NoYXJ0Q3RybC5qcyIsIkNoYXJ0L0NoYXJ0RGlyZWN0aXZlLmpzIiwiRm9ybS9Gb3JtQ3RybC5qcyIsIkZvcm0vRm9ybURpcmVjdGl2ZS5qcyIsIkZvcm0vRm9ybVZhbGlkYXRpb24uanMiLCJNYXAvTWFwLmpzIiwiUGFnZS9QYWdlQ3RybC5qcyIsIlRhYmxlL1RhYmxlQ3RybC5qcyIsIlVJL1VJQ3RybC5qcyIsIlVJL1VJRGlyZWN0aXZlLmpzIiwiVUkvVUlTZXJ2aWNlLmpzIiwiVGFzay9UYXNrLmpzIiwic2hhcmVkL2RpcmVjdGl2ZXMuanMiLCJzaGFyZWQvbG9jYWxpemUuanMiLCJzaGFyZWQvbWFpbi5qcyIsInZlbmRvcnMvanF1ZXJ5LmZsb3QuYW5pbWF0b3IubWluLmpzIiwidmVuZG9ycy9qcXVlcnkuc3BhcmtsaW5lLm1pbi5qcyIsInZlbmRvcnMvc2t5Y29ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMza0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZScsICduZ0FuaW1hdGUnLCAndWkuYm9vdHN0cmFwJywgJ2Vhc3lwaWVjaGFydCcsICdtZ28tYW5ndWxhci13aXphcmQnLCAndGV4dEFuZ3VsYXInLCAndWkudHJlZScsICduZ01hcCcsICduZ1RhZ3NJbnB1dCcsICdhcHAudWkuY3RybHMnLCAnYXBwLnVpLmRpcmVjdGl2ZXMnLCAnYXBwLnVpLnNlcnZpY2VzJywgJ2FwcC5jb250cm9sbGVycycsICdhcHAuZGlyZWN0aXZlcycsICdhcHAuZm9ybS52YWxpZGF0aW9uJywgJ2FwcC51aS5mb3JtLmN0cmxzJywgJ2FwcC51aS5mb3JtLmRpcmVjdGl2ZXMnLCAnYXBwLnRhYmxlcycsICdhcHAubWFwJywgJ2FwcC50YXNrJywgJ2FwcC5sb2NhbGl6YXRpb24nLCAnYXBwLmNoYXJ0LmN0cmxzJywgJ2FwcC5jaGFydC5kaXJlY3RpdmVzJywgJ2FwcC5wYWdlLmN0cmxzJ10pLmNvbmZpZyhbXG4gICckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgcmV0dXJuICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XG4gICAgICByZWRpcmVjdFRvOiAnL2luaWNpbydcbiAgICB9KS53aGVuKCcvaW5pY2lvJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9pbmljaW8uaHRtbCdcbiAgICB9KS53aGVuKCcvZGFzaGJvYXJkMScsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZGFzaGJvYXJkMS5odG1sJ1xuICAgIH0pLndoZW4oJy91aS90eXBvZ3JhcGh5Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS90eXBvZ3JhcGh5Lmh0bWwnXG4gICAgfSkud2hlbignL3VpL2J1dHRvbnMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL2J1dHRvbnMuaHRtbCdcbiAgICB9KS53aGVuKCcvdWkvaWNvbnMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL2ljb25zLmh0bWwnXG4gICAgfSkud2hlbignL3VpL2dyaWRzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS9ncmlkcy5odG1sJ1xuICAgIH0pLndoZW4oJy91aS93aWRnZXRzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS93aWRnZXRzLmh0bWwnXG4gICAgfSkud2hlbignL3VpL2NvbXBvbmVudHMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL2NvbXBvbmVudHMuaHRtbCdcbiAgICB9KS53aGVuKCcvdWkvdGltZWxpbmUnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL3RpbWVsaW5lLmh0bWwnXG4gICAgfSkud2hlbignL3VpL25lc3RlZC1saXN0cycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdWkvbmVzdGVkLWxpc3RzLmh0bWwnXG4gICAgfSkud2hlbignL3VpL3ByaWNpbmctdGFibGVzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS9wcmljaW5nLXRhYmxlcy5odG1sJ1xuICAgIH0pLndoZW4oJy9mb3Jtcy9lbGVtZW50cycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZm9ybXMvZWxlbWVudHMuaHRtbCdcbiAgICB9KS53aGVuKCcvZm9ybXMvbGF5b3V0cycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZm9ybXMvbGF5b3V0cy5odG1sJ1xuICAgIH0pLndoZW4oJy9mb3Jtcy92YWxpZGF0aW9uJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9mb3Jtcy92YWxpZGF0aW9uLmh0bWwnXG4gICAgfSkud2hlbignL2Zvcm1zL3dpemFyZCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZm9ybXMvd2l6YXJkLmh0bWwnXG4gICAgfSkud2hlbignL21hcHMvZ21hcCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFwcy9nbWFwLmh0bWwnXG4gICAgfSkud2hlbignL21hcHMvanF2bWFwJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tYXBzL2pxdm1hcC5odG1sJ1xuICAgIH0pLndoZW4oJy90YWJsZXMvc3RhdGljJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90YWJsZXMvc3RhdGljLmh0bWwnXG4gICAgfSkud2hlbignL3RhYmxlcy9yZXNwb25zaXZlJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90YWJsZXMvcmVzcG9uc2l2ZS5odG1sJ1xuICAgIH0pLndoZW4oJy90YWJsZXMvZHluYW1pYycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdGFibGVzL2R5bmFtaWMuaHRtbCdcbiAgICB9KS53aGVuKCcvY2hhcnRzL290aGVycycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY2hhcnRzL2NoYXJ0cy5odG1sJ1xuICAgIH0pLndoZW4oJy9jaGFydHMvbW9ycmlzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jaGFydHMvbW9ycmlzLmh0bWwnXG4gICAgfSkud2hlbignL2NoYXJ0cy9mbG90Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jaGFydHMvZmxvdC5odG1sJ1xuICAgIH0pLndoZW4oJy9tYWlsL2luYm94Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tYWlsL2luYm94Lmh0bWwnXG4gICAgfSkud2hlbignL21haWwvY29tcG9zZScsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFpbC9jb21wb3NlLmh0bWwnXG4gICAgfSkud2hlbignL21haWwvc2luZ2xlJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tYWlsL3NpbmdsZS5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9mZWF0dXJlcycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvZmVhdHVyZXMuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvc2lnbmluJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9zaWduaW4uaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvc2lnbnVwJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9zaWdudXAuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvZm9yZ290Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvbG9jay1zY3JlZW4nLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL2xvY2stc2NyZWVuLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL3Byb2ZpbGUnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL3Byb2ZpbGUuaHRtbCdcbiAgICB9KS53aGVuKCcvNDA0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy80MDQuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvNTAwJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy81MDAuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvYmxhbmsnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL2JsYW5rLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL2ludm9pY2UnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL2ludm9pY2UuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvc2VydmljZXMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL3NlcnZpY2VzLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL2Fib3V0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9hYm91dC5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9jb250YWN0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9jb250YWN0Lmh0bWwnXG4gICAgfSkud2hlbignL3Rhc2tzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90YXNrcy90YXNrcy5odG1sJ1xuICAgIH0pLm90aGVyd2lzZSh7XG4gICAgICByZWRpcmVjdFRvOiAnLzQwNCdcbiAgICB9KTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLmNoYXJ0LmN0cmxzJywgW10pLmNvbnRyb2xsZXIoJ2NoYXJ0Q3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5lYXN5cGllY2hhcnQgPSB7XG4gICAgICBwZXJjZW50OiA2NSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYmFyQ29sb3I6ICcjMzFDMEJFJyxcbiAgICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgICAgc2l6ZTogMTgwLFxuICAgICAgICBsaW5lV2lkdGg6IDVcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5lYXN5cGllY2hhcnQyID0ge1xuICAgICAgcGVyY2VudDogMzUsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGJhckNvbG9yOiAnIzY2QjVENycsXG4gICAgICAgIGxpbmVDYXA6ICdyb3VuZCcsXG4gICAgICAgIHNpemU6IDE4MCxcbiAgICAgICAgbGluZVdpZHRoOiAxMFxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmVhc3lwaWVjaGFydDMgPSB7XG4gICAgICBwZXJjZW50OiA2OCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYmFyQ29sb3I6ICcjNjBDRDlCJyxcbiAgICAgICAgbGluZUNhcDogJ3NxdWFyZScsXG4gICAgICAgIHNpemU6IDE4MCxcbiAgICAgICAgbGluZVdpZHRoOiAyMCxcbiAgICAgICAgc2NhbGVMZW5ndGg6IDBcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5nYXVnZUNoYXJ0MSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWF4VmFsdWU6IDMwMDAsXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA0MCxcbiAgICAgICAgdmFsOiAxMzc1XG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBsaW5lczogMTIsXG4gICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICBsaW5lV2lkdGg6IDAuNDcsXG4gICAgICAgIHBvaW50ZXI6IHtcbiAgICAgICAgICBsZW5ndGg6IDAuNixcbiAgICAgICAgICBzdHJva2VXaWR0aDogMC4wMyxcbiAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnXG4gICAgICAgIH0sXG4gICAgICAgIGxpbWl0TWF4OiAnZmFsc2UnLFxuICAgICAgICBjb2xvclN0YXJ0OiAnI0EzQzg2RCcsXG4gICAgICAgIGNvbG9yU3RvcDogJyNBM0M4NkQnLFxuICAgICAgICBzdHJva2VDb2xvcjogJyNFMEUwRTAnLFxuICAgICAgICBnZW5lcmF0ZUdyYWRpZW50OiB0cnVlLFxuICAgICAgICBwZXJjZW50Q29sb3JzOiBbWzAuMCwgJyM2MENEOUInXSwgWzEuMCwgJyM2MENEOUInXV1cbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5nYXVnZUNoYXJ0MiA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWF4VmFsdWU6IDMwMDAsXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA0NSxcbiAgICAgICAgdmFsOiAxMjAwXG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBsaW5lczogMTIsXG4gICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICBsaW5lV2lkdGg6IDAuNDcsXG4gICAgICAgIHBvaW50ZXI6IHtcbiAgICAgICAgICBsZW5ndGg6IDAuNixcbiAgICAgICAgICBzdHJva2VXaWR0aDogMC4wMyxcbiAgICAgICAgICBjb2xvcjogJyM0NjQ2NDYnXG4gICAgICAgIH0sXG4gICAgICAgIGxpbWl0TWF4OiAndHJ1ZScsXG4gICAgICAgIGNvbG9yU3RhcnQ6ICcjN0FDQkVFJyxcbiAgICAgICAgY29sb3JTdG9wOiAnIzdBQ0JFRScsXG4gICAgICAgIHN0cm9rZUNvbG9yOiAnI0YxRjFGMScsXG4gICAgICAgIGdlbmVyYXRlR3JhZGllbnQ6IHRydWUsXG4gICAgICAgIHBlcmNlbnRDb2xvcnM6IFtbMC4wLCAnIzY2QjVENyddLCBbMS4wLCAnIzY2QjVENyddXVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5nYXVnZUNoYXJ0MyA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWF4VmFsdWU6IDMwMDAsXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA1MCxcbiAgICAgICAgdmFsOiAxMTAwXG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBsaW5lczogMTIsXG4gICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICBsaW5lV2lkdGg6IDAuNDcsXG4gICAgICAgIHBvaW50ZXI6IHtcbiAgICAgICAgICBsZW5ndGg6IDAuNixcbiAgICAgICAgICBzdHJva2VXaWR0aDogMC4wMyxcbiAgICAgICAgICBjb2xvcjogJyM0NjQ2NDYnXG4gICAgICAgIH0sXG4gICAgICAgIGxpbWl0TWF4OiAndHJ1ZScsXG4gICAgICAgIGNvbG9yU3RhcnQ6ICcjRkY3ODU3JyxcbiAgICAgICAgY29sb3JTdG9wOiAnI0ZGNzg1NycsXG4gICAgICAgIHN0cm9rZUNvbG9yOiAnI0YxRjFGMScsXG4gICAgICAgIGdlbmVyYXRlR3JhZGllbnQ6IHRydWUsXG4gICAgICAgIHBlcmNlbnRDb2xvcnM6IFtbMC4wLCAnI0U4NzM1MiddLCBbMS4wLCAnI0U4NzM1MiddXVxuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ21vcnJpc0NoYXJ0Q3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5tYWluRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTAxJyxcbiAgICAgICAgeGJveDogMjk0MDAwLFxuICAgICAgICB3aWxsOiAxMzYwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAyNDQwMDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTAyJyxcbiAgICAgICAgeGJveDogMjI4MDAwLFxuICAgICAgICB3aWxsOiAzMzUwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAxMjcwMDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTAzJyxcbiAgICAgICAgeGJveDogMTk5MDAwLFxuICAgICAgICB3aWxsOiAxNTkwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAxMzAwMDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTA0JyxcbiAgICAgICAgeGJveDogMTc0MDAwLFxuICAgICAgICB3aWxsOiAxNjAwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiA4MjAwMFxuICAgICAgfSwge1xuICAgICAgICBtb250aDogJzIwMTMtMDUnLFxuICAgICAgICB4Ym94OiAyNTUwMDAsXG4gICAgICAgIHdpbGw6IDMxODAwMCxcbiAgICAgICAgcGxheXN0YXRpb246IDgyMDAwXG4gICAgICB9LCB7XG4gICAgICAgIG1vbnRoOiAnMjAxMy0wNicsXG4gICAgICAgIHhib3g6IDI5ODQwMCxcbiAgICAgICAgd2lsbDogNDAxODAwLFxuICAgICAgICBwbGF5c3RhdGlvbjogOTg2MDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTA3JyxcbiAgICAgICAgeGJveDogMzcwMDAwLFxuICAgICAgICB3aWxsOiAyMjUwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAxNTkwMDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTA4JyxcbiAgICAgICAgeGJveDogMzc2NzAwLFxuICAgICAgICB3aWxsOiAzMDM2MDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAxMzAwMDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTA5JyxcbiAgICAgICAgeGJveDogNTI3ODAwLFxuICAgICAgICB3aWxsOiAzMDEwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAxMTk0MDBcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5zaW1wbGVEYXRhID0gW1xuICAgICAge1xuICAgICAgICB5ZWFyOiAnMjAwOCcsXG4gICAgICAgIHZhbHVlOiAyMFxuICAgICAgfSwge1xuICAgICAgICB5ZWFyOiAnMjAwOScsXG4gICAgICAgIHZhbHVlOiAxMFxuICAgICAgfSwge1xuICAgICAgICB5ZWFyOiAnMjAxMCcsXG4gICAgICAgIHZhbHVlOiA1XG4gICAgICB9LCB7XG4gICAgICAgIHllYXI6ICcyMDExJyxcbiAgICAgICAgdmFsdWU6IDVcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTInLFxuICAgICAgICB2YWx1ZTogMjBcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTMnLFxuICAgICAgICB2YWx1ZTogMTlcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5jb21ib0RhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIHllYXI6ICcyMDA4JyxcbiAgICAgICAgYTogMjAsXG4gICAgICAgIGI6IDE2LFxuICAgICAgICBjOiAxMlxuICAgICAgfSwge1xuICAgICAgICB5ZWFyOiAnMjAwOScsXG4gICAgICAgIGE6IDEwLFxuICAgICAgICBiOiAyMixcbiAgICAgICAgYzogMzBcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTAnLFxuICAgICAgICBhOiA1LFxuICAgICAgICBiOiAxNCxcbiAgICAgICAgYzogMjBcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTEnLFxuICAgICAgICBhOiA1LFxuICAgICAgICBiOiAxMixcbiAgICAgICAgYzogMTlcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTInLFxuICAgICAgICBhOiAyMCxcbiAgICAgICAgYjogMTksXG4gICAgICAgIGM6IDEzXG4gICAgICB9LCB7XG4gICAgICAgIHllYXI6ICcyMDEzJyxcbiAgICAgICAgYTogMjgsXG4gICAgICAgIGI6IDIyLFxuICAgICAgICBjOiAyMFxuICAgICAgfVxuICAgIF07XG4gICAgcmV0dXJuICRzY29wZS5kb251dERhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRvd25sb2FkIFNhbGVzXCIsXG4gICAgICAgIHZhbHVlOiAxMlxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJJbi1TdG9yZSBTYWxlc1wiLFxuICAgICAgICB2YWx1ZTogMzBcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiTWFpbC1PcmRlciBTYWxlc1wiLFxuICAgICAgICB2YWx1ZTogMjBcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiT25saW5lIFNhbGVzXCIsXG4gICAgICAgIHZhbHVlOiAxOVxuICAgICAgfVxuICAgIF07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ2Zsb3RDaGFydEN0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICB2YXIgYXJlYUNoYXJ0LCBiYXJDaGFydCwgbGluZUNoYXJ0MTtcbiAgICBsaW5lQ2hhcnQxID0ge307XG4gICAgbGluZUNoYXJ0MS5kYXRhMSA9IFtbMSwgMTVdLCBbMiwgMjBdLCBbMywgMTRdLCBbNCwgMTBdLCBbNSwgMTBdLCBbNiwgMjBdLCBbNywgMjhdLCBbOCwgMjZdLCBbOSwgMjJdLCBbMTAsIDIzXSwgWzExLCAyNF1dO1xuICAgIGxpbmVDaGFydDEuZGF0YTIgPSBbWzEsIDldLCBbMiwgMTVdLCBbMywgMTddLCBbNCwgMjFdLCBbNSwgMTZdLCBbNiwgMTVdLCBbNywgMTNdLCBbOCwgMTVdLCBbOSwgMjldLCBbMTAsIDIxXSwgWzExLCAyOV1dO1xuICAgICRzY29wZS5saW5lMSA9IHt9O1xuICAgICRzY29wZS5saW5lMS5kYXRhID0gW1xuICAgICAge1xuICAgICAgICBkYXRhOiBsaW5lQ2hhcnQxLmRhdGExLFxuICAgICAgICBsYWJlbDogJ1Byb2R1Y3QgQSdcbiAgICAgIH0sIHtcbiAgICAgICAgZGF0YTogbGluZUNoYXJ0MS5kYXRhMixcbiAgICAgICAgbGFiZWw6ICdQcm9kdWN0IEInLFxuICAgICAgICBsaW5lczoge1xuICAgICAgICAgIGZpbGw6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5saW5lMS5vcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgIGZpbGxDb2xvcjoge1xuICAgICAgICAgICAgY29sb3JzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcG9pbnRzOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICBmaWxsQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgIHN5bWJvbDogXCJjaXJjbGVcIixcbiAgICAgICAgICByYWRpdXM6IDVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbG9yczogW1wiIzMxQzBCRVwiLCBcIiM4MTcwQ0FcIiwgXCIjRTg3MzUyXCJdLFxuICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICB0aWNrQ29sb3I6IFwiI2Y5ZjlmOVwiLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2VlZWVlZVwiXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgdGlja3M6IFtbMSwgJ0phbi4nXSwgWzIsICdGZWIuJ10sIFszLCAnTWFyLiddLCBbNCwgJ0Fwci4nXSwgWzUsICdNYXknXSwgWzYsICdKdW5lJ10sIFs3LCAnSnVseSddLCBbOCwgJ0F1Zy4nXSwgWzksICdTZXB0LiddLCBbMTAsICdPY3QuJ10sIFsxMSwgJ05vdi4nXSwgWzEyLCAnRGVjLiddXVxuICAgICAgfVxuICAgIH07XG4gICAgYXJlYUNoYXJ0ID0ge307XG4gICAgYXJlYUNoYXJ0LmRhdGExID0gW1syMDA3LCAxNV0sIFsyMDA4LCAyMF0sIFsyMDA5LCAxMF0sIFsyMDEwLCA1XSwgWzIwMTEsIDVdLCBbMjAxMiwgMjBdLCBbMjAxMywgMjhdXTtcbiAgICBhcmVhQ2hhcnQuZGF0YTIgPSBbWzIwMDcsIDE1XSwgWzIwMDgsIDE2XSwgWzIwMDksIDIyXSwgWzIwMTAsIDE0XSwgWzIwMTEsIDEyXSwgWzIwMTIsIDE5XSwgWzIwMTMsIDIyXV07XG4gICAgJHNjb3BlLmFyZWEgPSB7fTtcbiAgICAkc2NvcGUuYXJlYS5kYXRhID0gW1xuICAgICAge1xuICAgICAgICBkYXRhOiBhcmVhQ2hhcnQuZGF0YTEsXG4gICAgICAgIGxhYmVsOiBcIlZhbHVlIEFcIixcbiAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICBmaWxsOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgZGF0YTogYXJlYUNoYXJ0LmRhdGEyLFxuICAgICAgICBsYWJlbDogXCJWYWx1ZSBCXCIsXG4gICAgICAgIHBvaW50czoge1xuICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgeWF4aXM6IDJcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5hcmVhLm9wdGlvbnMgPSB7XG4gICAgICBzZXJpZXM6IHtcbiAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGZpbGw6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHBvaW50czoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgZmlsbENvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICBzeW1ib2w6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgcmFkaXVzOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHNoYWRvd1NpemU6IDBcbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICB0aWNrQ29sb3I6IFwiI2Y5ZjlmOVwiLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2VlZWVlZVwiXG4gICAgICB9LFxuICAgICAgY29sb3JzOiBbXCIjNjBDRDlCXCIsIFwiIzgxNzBDQVwiXSxcbiAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgbW9kZTogXCJ0aW1lXCJcbiAgICAgIH0sXG4gICAgICB5YXhlczogW1xuICAgICAgICB7fSwge1xuICAgICAgICAgIHBvc2l0aW9uOiBcInJpZ2h0XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gICAgYmFyQ2hhcnQgPSB7fTtcbiAgICBiYXJDaGFydC5kYXRhMSA9IFtbMjAwOCwgMjBdLCBbMjAwOSwgMTBdLCBbMjAxMCwgNV0sIFsyMDExLCA1XSwgWzIwMTIsIDIwXSwgWzIwMTMsIDI4XV07XG4gICAgYmFyQ2hhcnQuZGF0YTIgPSBbWzIwMDgsIDE2XSwgWzIwMDksIDIyXSwgWzIwMTAsIDE0XSwgWzIwMTEsIDEyXSwgWzIwMTIsIDE5XSwgWzIwMTMsIDIyXV07XG4gICAgYmFyQ2hhcnQuZGF0YTMgPSBbWzIwMDgsIDEyXSwgWzIwMDksIDMwXSwgWzIwMTAsIDIwXSwgWzIwMTEsIDE5XSwgWzIwMTIsIDEzXSwgWzIwMTMsIDIwXV07XG4gICAgJHNjb3BlLmJhckNoYXJ0ID0ge307XG4gICAgJHNjb3BlLmJhckNoYXJ0LmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlZhbHVlIEFcIixcbiAgICAgICAgZGF0YTogYmFyQ2hhcnQuZGF0YTFcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiVmFsdWUgQlwiLFxuICAgICAgICBkYXRhOiBiYXJDaGFydC5kYXRhMlxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJWYWx1ZSBDXCIsXG4gICAgICAgIGRhdGE6IGJhckNoYXJ0LmRhdGEzXG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuYmFyQ2hhcnQub3B0aW9ucyA9IHtcbiAgICAgIHNlcmllczoge1xuICAgICAgICBzdGFjazogdHJ1ZSxcbiAgICAgICAgYmFyczoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgZmlsbDogMSxcbiAgICAgICAgICBiYXJXaWR0aDogMC4zLFxuICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgICAgIG9yZGVyOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiNlZWVlZWVcIlxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgY29sb3JzOiBbXCIjNjBDRDlCXCIsIFwiIzY2QjVEN1wiLCBcIiNFRUM5NUFcIiwgXCIjRTg3MzUyXCJdXG4gICAgfTtcbiAgICAkc2NvcGUucGllQ2hhcnQgPSB7fTtcbiAgICAkc2NvcGUucGllQ2hhcnQuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiRG93bmxvYWQgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMTJcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiSW4tU3RvcmUgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMzBcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiTWFpbC1PcmRlciBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAyMFxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJPbmxpbmUgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMTlcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5waWVDaGFydC5vcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIHBpZToge1xuICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBzaG93OiB0cnVlXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNvbG9yczogW1wiIzYwQ0Q5QlwiLCBcIiM2NkI1RDdcIiwgXCIjRUVDOTVBXCIsIFwiI0U4NzM1MlwiXSxcbiAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICBjb250ZW50OiBcIiVwLjAlLCAlc1wiLFxuICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUuZG9udXRDaGFydCA9IHt9O1xuICAgICRzY29wZS5kb251dENoYXJ0LmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRvd25sb2FkIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDEyXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIkluLVN0b3JlIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDMwXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIk1haWwtT3JkZXIgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMjBcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiT25saW5lIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDE5XG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuZG9udXRDaGFydC5vcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIHBpZToge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgaW5uZXJSYWRpdXM6IDAuNVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIHNob3c6IHRydWVcbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgY29sb3JzOiBbXCIjNjBDRDlCXCIsIFwiIzY2QjVEN1wiLCBcIiNFRUM5NUFcIiwgXCIjRTg3MzUyXCJdLFxuICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgIGNvbnRlbnQ6IFwiJXAuMCUsICVzXCIsXG4gICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5kb251dENoYXJ0MiA9IHt9O1xuICAgICRzY29wZS5kb251dENoYXJ0Mi5kYXRhID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJEb3dubG9hZCBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAxMlxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJJbi1TdG9yZSBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAzMFxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJNYWlsLU9yZGVyIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDIwXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIk9ubGluZSBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAxOVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJEaXJlY3QgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMTVcbiAgICAgIH1cbiAgICBdO1xuICAgIHJldHVybiAkc2NvcGUuZG9udXRDaGFydDIub3B0aW9ucyA9IHtcbiAgICAgIHNlcmllczoge1xuICAgICAgICBwaWU6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGlubmVyUmFkaXVzOiAwLjVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IFtcIiMxQkI3QTBcIiwgXCIjMzlCNUI5XCIsIFwiIzUyQTNCQlwiLCBcIiM2MTlDQzRcIiwgXCIjNkQ5MEM1XCJdLFxuICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgIGNvbnRlbnQ6IFwiJXAuMCUsICVzXCIsXG4gICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdmbG90Q2hhcnRDdHJsLnJlYWx0aW1lJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHt9XSkuY29udHJvbGxlcignc3BhcmtsaW5lQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5kZW1vRGF0YTEgPSB7XG4gICAgICBkYXRhOiBbMywgMSwgMiwgMiwgNCwgNiwgNCwgNSwgMiwgNCwgNSwgMywgNCwgNiwgNCwgN10sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgbGluZUNvbG9yOiAnI2ZmZicsXG4gICAgICAgIGhpZ2hsaWdodExpbmVDb2xvcjogJyNmZmYnLFxuICAgICAgICBmaWxsQ29sb3I6ICcjNjBDRDlCJyxcbiAgICAgICAgc3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgbWluU3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgbWF4U3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTUwcHgnXG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUuc2ltcGxlQ2hhcnQxID0ge1xuICAgICAgZGF0YTogWzMsIDEsIDIsIDMsIDUsIDMsIDQsIDJdLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIGxpbmVDb2xvcjogJyMzMUMwQkUnLFxuICAgICAgICBmaWxsQ29sb3I6ICcjYmNlMGRmJyxcbiAgICAgICAgc3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgbWluU3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgbWF4U3BvdENvbG9yOiBmYWxzZVxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLnNpbXBsZUNoYXJ0MiA9IHtcbiAgICAgIGRhdGE6IFszLCAxLCAyLCAzLCA1LCAzLCA0LCAyXSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgIGJhckNvbG9yOiAnIzMxQzBCRSdcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5zaW1wbGVDaGFydDMgPSB7XG4gICAgICBkYXRhOiBbMywgMSwgMiwgMywgNSwgMywgNCwgMl0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBzbGljZUNvbG9yczogWycjMzFDMEJFJywgJyM2MENEOUInLCAnI0U4NzM1MicsICcjODE3MENBJywgJyNFRUM5NUEnLCAnIzYwQ0Q5QiddXG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUudHJpc3RhdGVDaGFydDEgPSB7XG4gICAgICBkYXRhOiBbMSwgMiwgLTMsIC01LCAzLCAxLCAtNCwgMl0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHR5cGU6ICd0cmlzdGF0ZScsXG4gICAgICAgIHBvc0JhckNvbG9yOiAnIzk1Yjc1ZCcsXG4gICAgICAgIG5lZ0JhckNvbG9yOiAnI2ZhODU2NCdcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5sYXJnZUNoYXJ0MSA9IHtcbiAgICAgIGRhdGE6IFszLCAxLCAyLCAzLCA1LCAzLCA0LCAyXSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBsaW5lQ29sb3I6ICcjNjc0RTlFJyxcbiAgICAgICAgaGlnaGxpZ2h0TGluZUNvbG9yOiAnIzdBQ0JFRScsXG4gICAgICAgIGZpbGxDb2xvcjogJyM5MjdFRDEnLFxuICAgICAgICBzcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICBtaW5TcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICBtYXhTcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxNTBweCdcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5sYXJnZUNoYXJ0MiA9IHtcbiAgICAgIGRhdGE6IFszLCAxLCAyLCAzLCA1LCAzLCA0LCAyXSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgIGJhckNvbG9yOiAnIzMxQzBCRScsXG4gICAgICAgIGJhcldpZHRoOiAxMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTUwcHgnXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLmxhcmdlQ2hhcnQzID0ge1xuICAgICAgZGF0YTogWzMsIDEsIDIsIDMsIDVdLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgc2xpY2VDb2xvcnM6IFsnIzMxQzBCRScsICcjNjBDRDlCJywgJyNFODczNTInLCAnIzgxNzBDQScsICcjRUVDOTVBJywgJyM2MENEOUInXSxcbiAgICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICAgIGhlaWdodDogJzE1MHB4J1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC5jaGFydC5kaXJlY3RpdmVzJywgW10pLmRpcmVjdGl2ZSgnZ2F1Z2VDaGFydCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBzY29wZToge1xuICAgICAgICBkYXRhOiAnPScsXG4gICAgICAgIG9wdGlvbnM6ICc9J1xuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciBkYXRhLCBnYXVnZSwgb3B0aW9ucztcbiAgICAgICAgZGF0YSA9IHNjb3BlLmRhdGE7XG4gICAgICAgIG9wdGlvbnMgPSBzY29wZS5vcHRpb25zO1xuICAgICAgICBnYXVnZSA9IG5ldyBHYXVnZShlbGVbMF0pLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGdhdWdlLm1heFZhbHVlID0gZGF0YS5tYXhWYWx1ZTtcbiAgICAgICAgZ2F1Z2UuYW5pbWF0aW9uU3BlZWQgPSBkYXRhLmFuaW1hdGlvblNwZWVkO1xuICAgICAgICByZXR1cm4gZ2F1Z2Uuc2V0KGRhdGEudmFsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ2Zsb3RDaGFydCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBzY29wZToge1xuICAgICAgICBkYXRhOiAnPScsXG4gICAgICAgIG9wdGlvbnM6ICc9J1xuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciBkYXRhLCBvcHRpb25zLCBwbG90O1xuICAgICAgICBkYXRhID0gc2NvcGUuZGF0YTtcbiAgICAgICAgb3B0aW9ucyA9IHNjb3BlLm9wdGlvbnM7XG4gICAgICAgIHJldHVybiBwbG90ID0gJC5wbG90KGVsZVswXSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdmbG90Q2hhcnRSZWFsdGltZScsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgZGF0YSwgZ2V0UmFuZG9tRGF0YSwgcGxvdCwgdG90YWxQb2ludHMsIHVwZGF0ZSwgdXBkYXRlSW50ZXJ2YWw7XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgdG90YWxQb2ludHMgPSAzMDA7XG4gICAgICAgIGdldFJhbmRvbURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaSwgcHJldiwgcmVzLCB5O1xuICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAoZGF0YS5sZW5ndGggPCB0b3RhbFBvaW50cykge1xuICAgICAgICAgICAgcHJldiA9IChkYXRhLmxlbmd0aCA+IDAgPyBkYXRhW2RhdGEubGVuZ3RoIC0gMV0gOiA1MCk7XG4gICAgICAgICAgICB5ID0gcHJldiArIE1hdGgucmFuZG9tKCkgKiAxMCAtIDU7XG4gICAgICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoeSA+IDEwMCkge1xuICAgICAgICAgICAgICAgIHkgPSAxMDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEucHVzaCh5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzID0gW107XG4gICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgd2hpbGUgKGkgPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzLnB1c2goW2ksIGRhdGFbaV1dKTtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfTtcbiAgICAgICAgdXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcGxvdC5zZXREYXRhKFtnZXRSYW5kb21EYXRhKCldKTtcbiAgICAgICAgICBwbG90LmRyYXcoKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KHVwZGF0ZSwgdXBkYXRlSW50ZXJ2YWwpO1xuICAgICAgICB9O1xuICAgICAgICBkYXRhID0gW107XG4gICAgICAgIHRvdGFsUG9pbnRzID0gMzAwO1xuICAgICAgICB1cGRhdGVJbnRlcnZhbCA9IDIwMDtcbiAgICAgICAgcGxvdCA9ICQucGxvdChlbGVbMF0sIFtnZXRSYW5kb21EYXRhKCldLCB7XG4gICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBmaWxsOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZWVlZWVlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29sb3JzOiBbXCIjNUJERERDXCJdXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXBkYXRlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdzcGFya2xpbmUnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgZGF0YTogJz0nLFxuICAgICAgICBvcHRpb25zOiAnPSdcbiAgICAgIH0sXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgZGF0YSwgb3B0aW9ucywgc3BhcmtSZXNpemUsIHNwYXJrbGluZURyYXc7XG4gICAgICAgIGRhdGEgPSBzY29wZS5kYXRhO1xuICAgICAgICBvcHRpb25zID0gc2NvcGUub3B0aW9ucztcbiAgICAgICAgc3BhcmtSZXNpemUgPSB2b2lkIDA7XG4gICAgICAgIHNwYXJrbGluZURyYXcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZWxlLnNwYXJrbGluZShkYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHNwYXJrUmVzaXplKTtcbiAgICAgICAgICByZXR1cm4gc3BhcmtSZXNpemUgPSBzZXRUaW1lb3V0KHNwYXJrbGluZURyYXcsIDIwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3BhcmtsaW5lRHJhdygpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnbW9ycmlzQ2hhcnQnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgZGF0YTogJz0nXG4gICAgICB9LFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyIGNvbG9ycywgZGF0YSwgZnVuYywgb3B0aW9ucztcbiAgICAgICAgZGF0YSA9IHNjb3BlLmRhdGE7XG4gICAgICAgIHN3aXRjaCAoYXR0cnMudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgICAgICAgaWYgKGF0dHJzLmxpbmVDb2xvcnMgPT09IHZvaWQgMCB8fCBhdHRycy5saW5lQ29sb3JzID09PSAnJykge1xuICAgICAgICAgICAgICBjb2xvcnMgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sb3JzID0gSlNPTi5wYXJzZShhdHRycy5saW5lQ29sb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZVswXSxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgeGtleTogYXR0cnMueGtleSxcbiAgICAgICAgICAgICAgeWtleXM6IEpTT04ucGFyc2UoYXR0cnMueWtleXMpLFxuICAgICAgICAgICAgICBsYWJlbHM6IEpTT04ucGFyc2UoYXR0cnMubGFiZWxzKSxcbiAgICAgICAgICAgICAgbGluZVdpZHRoOiBhdHRycy5saW5lV2lkdGggfHwgMixcbiAgICAgICAgICAgICAgbGluZUNvbG9yczogY29sb3JzIHx8IFsnIzBiNjJhNCcsICcjN2E5MmEzJywgJyM0ZGE3NGQnLCAnI2FmZDhmOCcsICcjZWRjMjQwJywgJyNjYjRiNGInLCAnIzk0NDBlZCddXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3JyaXMuTGluZShvcHRpb25zKTtcbiAgICAgICAgICBjYXNlICdhcmVhJzpcbiAgICAgICAgICAgIGlmIChhdHRycy5saW5lQ29sb3JzID09PSB2b2lkIDAgfHwgYXR0cnMubGluZUNvbG9ycyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgY29sb3JzID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbG9ycyA9IEpTT04ucGFyc2UoYXR0cnMubGluZUNvbG9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICBlbGVtZW50OiBlbGVbMF0sXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgIHhrZXk6IGF0dHJzLnhrZXksXG4gICAgICAgICAgICAgIHlrZXlzOiBKU09OLnBhcnNlKGF0dHJzLnlrZXlzKSxcbiAgICAgICAgICAgICAgbGFiZWxzOiBKU09OLnBhcnNlKGF0dHJzLmxhYmVscyksXG4gICAgICAgICAgICAgIGxpbmVXaWR0aDogYXR0cnMubGluZVdpZHRoIHx8IDIsXG4gICAgICAgICAgICAgIGxpbmVDb2xvcnM6IGNvbG9ycyB8fCBbJyMwYjYyYTQnLCAnIzdhOTJhMycsICcjNGRhNzRkJywgJyNhZmQ4ZjgnLCAnI2VkYzI0MCcsICcjY2I0YjRiJywgJyM5NDQwZWQnXSxcbiAgICAgICAgICAgICAgYmVoYXZlTGlrZUxpbmU6IGF0dHJzLmJlaGF2ZUxpa2VMaW5lIHx8IGZhbHNlLFxuICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogYXR0cnMuZmlsbE9wYWNpdHkgfHwgJ2F1dG8nLFxuICAgICAgICAgICAgICBwb2ludFNpemU6IGF0dHJzLnBvaW50U2l6ZSB8fCA0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3JyaXMuQXJlYShvcHRpb25zKTtcbiAgICAgICAgICBjYXNlICdiYXInOlxuICAgICAgICAgICAgaWYgKGF0dHJzLmJhckNvbG9ycyA9PT0gdm9pZCAwIHx8IGF0dHJzLmJhckNvbG9ycyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgY29sb3JzID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbG9ycyA9IEpTT04ucGFyc2UoYXR0cnMuYmFyQ29sb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZVswXSxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgeGtleTogYXR0cnMueGtleSxcbiAgICAgICAgICAgICAgeWtleXM6IEpTT04ucGFyc2UoYXR0cnMueWtleXMpLFxuICAgICAgICAgICAgICBsYWJlbHM6IEpTT04ucGFyc2UoYXR0cnMubGFiZWxzKSxcbiAgICAgICAgICAgICAgYmFyQ29sb3JzOiBjb2xvcnMgfHwgWycjMGI2MmE0JywgJyM3YTkyYTMnLCAnIzRkYTc0ZCcsICcjYWZkOGY4JywgJyNlZGMyNDAnLCAnI2NiNGI0YicsICcjOTQ0MGVkJ10sXG4gICAgICAgICAgICAgIHN0YWNrZWQ6IGF0dHJzLnN0YWNrZWQgfHwgbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9ycmlzLkJhcihvcHRpb25zKTtcbiAgICAgICAgICBjYXNlICdkb251dCc6XG4gICAgICAgICAgICBpZiAoYXR0cnMuY29sb3JzID09PSB2b2lkIDAgfHwgYXR0cnMuY29sb3JzID09PSAnJykge1xuICAgICAgICAgICAgICBjb2xvcnMgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sb3JzID0gSlNPTi5wYXJzZShhdHRycy5jb2xvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgZWxlbWVudDogZWxlWzBdLFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICBjb2xvcnM6IGNvbG9ycyB8fCBbJyMwQjYyQTQnLCAnIzM5ODBCNScsICcjNjc5REM2JywgJyM5NUJCRDcnLCAnI0IwQ0NFMScsICcjMDk1NzkxJywgJyMwOTUwODUnLCAnIzA4M0U2NycsICcjMDUyQzQ4JywgJyMwNDIxMzUnXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChhdHRycy5mb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgZnVuYyA9IG5ldyBGdW5jdGlvbigneScsICdkYXRhJywgYXR0cnMuZm9ybWF0dGVyKTtcbiAgICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXR0ZXIgPSBmdW5jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3JyaXMuRG9udXQob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAudWkuZm9ybS5jdHJscycsIFtdKS5jb250cm9sbGVyKCdUYWdzRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICByZXR1cm4gJHNjb3BlLnRhZ3MgPSBbJ2ZvbycsICdiYXInXTtcbiAgfVxuXSkuY29udHJvbGxlcignRGF0ZXBpY2tlckRlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLnRvZGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmR0ID0gbmV3IERhdGUoKTtcbiAgICB9O1xuICAgICRzY29wZS50b2RheSgpO1xuICAgICRzY29wZS5zaG93V2Vla3MgPSB0cnVlO1xuICAgICRzY29wZS50b2dnbGVXZWVrcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICRzY29wZS5zaG93V2Vla3MgPSAhJHNjb3BlLnNob3dXZWVrcztcbiAgICB9O1xuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICRzY29wZS5kdCA9IG51bGw7XG4gICAgfTtcbiAgICAkc2NvcGUuZGlzYWJsZWQgPSBmdW5jdGlvbihkYXRlLCBtb2RlKSB7XG4gICAgICByZXR1cm4gbW9kZSA9PT0gJ2RheScgJiYgKGRhdGUuZ2V0RGF5KCkgPT09IDAgfHwgZGF0ZS5nZXREYXkoKSA9PT0gNik7XG4gICAgfTtcbiAgICAkc2NvcGUudG9nZ2xlTWluID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVmO1xuICAgICAgcmV0dXJuICRzY29wZS5taW5EYXRlID0gKHJlZiA9ICRzY29wZS5taW5EYXRlKSAhPSBudWxsID8gcmVmIDoge1xuICAgICAgICBcIm51bGxcIjogbmV3IERhdGUoKVxuICAgICAgfTtcbiAgICB9O1xuICAgICRzY29wZS50b2dnbGVNaW4oKTtcbiAgICAkc2NvcGUub3BlbiA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm4gJHNjb3BlLm9wZW5lZCA9IHRydWU7XG4gICAgfTtcbiAgICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XG4gICAgICAneWVhci1mb3JtYXQnOiBcIid5eSdcIixcbiAgICAgICdzdGFydGluZy1kYXknOiAxXG4gICAgfTtcbiAgICAkc2NvcGUuZm9ybWF0cyA9IFsnZGQtTU1NTS15eXl5JywgJ3l5eXkvTU0vZGQnLCAnc2hvcnREYXRlJ107XG4gICAgcmV0dXJuICRzY29wZS5mb3JtYXQgPSAkc2NvcGUuZm9ybWF0c1swXTtcbiAgfVxuXSkuY29udHJvbGxlcignVGltZXBpY2tlckRlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLm15dGltZSA9IG5ldyBEYXRlKCk7XG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSB0cnVlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmlzbWVyaWRpYW4gPSAhJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcbiAgICAkc2NvcGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZDtcbiAgICAgIGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgZC5zZXRIb3VycygxNCk7XG4gICAgICBkLnNldE1pbnV0ZXMoMCk7XG4gICAgICByZXR1cm4gJHNjb3BlLm15dGltZSA9IGQ7XG4gICAgfTtcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUubXl0aW1lKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdUeXBlYWhlYWRDdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLnNlbGVjdGVkID0gdm9pZCAwO1xuICAgIHJldHVybiAkc2NvcGUuc3RhdGVzID0gWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJywgJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLCAnQ29ubmVjdGljdXQnLCAnRGVsYXdhcmUnLCAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLCAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJywgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBEYWtvdGEnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJywgJ1Job2RlIElzbGFuZCcsICdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJywgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJywgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXTtcbiAgfVxuXSkuY29udHJvbGxlcignUmF0aW5nRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUucmF0ZSA9IDc7XG4gICAgJHNjb3BlLm1heCA9IDEwO1xuICAgICRzY29wZS5pc1JlYWRvbmx5ID0gZmFsc2U7XG4gICAgJHNjb3BlLmhvdmVyaW5nT3ZlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAkc2NvcGUub3ZlclN0YXIgPSB2YWx1ZTtcbiAgICAgIHJldHVybiAkc2NvcGUucGVyY2VudCA9IDEwMCAqICh2YWx1ZSAvICRzY29wZS5tYXgpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5yYXRpbmdTdGF0ZXMgPSBbXG4gICAgICB7XG4gICAgICAgIHN0YXRlT246ICdnbHlwaGljb24tb2stc2lnbicsXG4gICAgICAgIHN0YXRlT2ZmOiAnZ2x5cGhpY29uLW9rLWNpcmNsZSdcbiAgICAgIH0sIHtcbiAgICAgICAgc3RhdGVPbjogJ2dseXBoaWNvbi1zdGFyJyxcbiAgICAgICAgc3RhdGVPZmY6ICdnbHlwaGljb24tc3Rhci1lbXB0eSdcbiAgICAgIH0sIHtcbiAgICAgICAgc3RhdGVPbjogJ2dseXBoaWNvbi1oZWFydCcsXG4gICAgICAgIHN0YXRlT2ZmOiAnZ2x5cGhpY29uLWJhbi1jaXJjbGUnXG4gICAgICB9LCB7XG4gICAgICAgIHN0YXRlT246ICdnbHlwaGljb24taGVhcnQnXG4gICAgICB9LCB7XG4gICAgICAgIHN0YXRlT2ZmOiAnZ2x5cGhpY29uLW9mZidcbiAgICAgIH1cbiAgICBdO1xuICB9XG5dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAudWkuZm9ybS5kaXJlY3RpdmVzJywgW10pLmRpcmVjdGl2ZSgndWlSYW5nZVNsaWRlcicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlKSB7XG4gICAgICAgIHJldHVybiBlbGUuc2xpZGVyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCd1aUZpbGVVcGxvYWQnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSkge1xuICAgICAgICByZXR1cm4gZWxlLmJvb3RzdHJhcEZpbGVJbnB1dCgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndWlTcGlubmVyJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uKGVsZSwgYXR0cnMpIHtcbiAgICAgICAgZWxlLmFkZENsYXNzKCd1aS1zcGlubmVyJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcG9zdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlLnNwaW5uZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCd1aVdpemFyZEZvcm0nLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlKSB7XG4gICAgICAgIHJldHVybiBlbGUuc3RlcHMoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAuZm9ybS52YWxpZGF0aW9uJywgW10pLmNvbnRyb2xsZXIoJ3dpemFyZEZvcm1DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLndpemFyZCA9IHtcbiAgICAgIGZpcnN0TmFtZTogJ3NvbWUgbmFtZScsXG4gICAgICBsYXN0TmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBhZ2U6ICcnLFxuICAgICAgYWRkcmVzczogJydcbiAgICB9O1xuICAgICRzY29wZS5pc1ZhbGlkYXRlU3RlcDEgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCRzY29wZS53aXphcmRfc3RlcDEpO1xuICAgICAgY29uc29sZS5sb2coJHNjb3BlLndpemFyZC5maXJzdE5hbWUgIT09ICcnKTtcbiAgICAgIGNvbnNvbGUubG9nKCRzY29wZS53aXphcmQubGFzdE5hbWUgPT09ICcnKTtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygkc2NvcGUud2l6YXJkLmZpcnN0TmFtZSAhPT0gJycgJiYgJHNjb3BlLndpemFyZC5sYXN0TmFtZSAhPT0gJycpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5maW5pc2hlZFdpemFyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCd5b28nKTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdmb3JtQ29uc3RyYWludHNDdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgdmFyIG9yaWdpbmFsO1xuICAgICRzY29wZS5mb3JtID0ge1xuICAgICAgcmVxdWlyZWQ6ICcnLFxuICAgICAgbWlubGVuZ3RoOiAnJyxcbiAgICAgIG1heGxlbmd0aDogJycsXG4gICAgICBsZW5ndGhfcmFnZTogJycsXG4gICAgICB0eXBlX3NvbWV0aGluZzogJycsXG4gICAgICBjb25maXJtX3R5cGU6ICcnLFxuICAgICAgZm9vOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHVybDogJycsXG4gICAgICBudW06ICcnLFxuICAgICAgbWluVmFsOiAnJyxcbiAgICAgIG1heFZhbDogJycsXG4gICAgICB2YWxSYW5nZTogJycsXG4gICAgICBwYXR0ZXJuOiAnJ1xuICAgIH07XG4gICAgb3JpZ2luYWwgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmZvcm0pO1xuICAgICRzY29wZS5yZXZlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5mb3JtID0gYW5ndWxhci5jb3B5KG9yaWdpbmFsKTtcbiAgICAgIHJldHVybiAkc2NvcGUuZm9ybV9jb25zdHJhaW50cy4kc2V0UHJpc3RpbmUoKTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5SZXZlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhYW5ndWxhci5lcXVhbHMoJHNjb3BlLmZvcm0sIG9yaWdpbmFsKSB8fCAhJHNjb3BlLmZvcm1fY29uc3RyYWludHMuJHByaXN0aW5lO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5jYW5TdWJtaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuZm9ybV9jb25zdHJhaW50cy4kdmFsaWQgJiYgIWFuZ3VsYXIuZXF1YWxzKCRzY29wZS5mb3JtLCBvcmlnaW5hbCk7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignc2lnbmluQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIHZhciBvcmlnaW5hbDtcbiAgICAkc2NvcGUudXNlciA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG4gICAgJHNjb3BlLnNob3dJbmZvT25TdWJtaXQgPSBmYWxzZTtcbiAgICBvcmlnaW5hbCA9IGFuZ3VsYXIuY29weSgkc2NvcGUudXNlcik7XG4gICAgJHNjb3BlLnJldmVydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnVzZXIgPSBhbmd1bGFyLmNvcHkob3JpZ2luYWwpO1xuICAgICAgcmV0dXJuICRzY29wZS5mb3JtX3NpZ25pbi4kc2V0UHJpc3RpbmUoKTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5SZXZlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhYW5ndWxhci5lcXVhbHMoJHNjb3BlLnVzZXIsIG9yaWdpbmFsKSB8fCAhJHNjb3BlLmZvcm1fc2lnbmluLiRwcmlzdGluZTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5TdWJtaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuZm9ybV9zaWduaW4uJHZhbGlkICYmICFhbmd1bGFyLmVxdWFscygkc2NvcGUudXNlciwgb3JpZ2luYWwpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuc2hvd0luZm9PblN1Ym1pdCA9IHRydWU7XG4gICAgICByZXR1cm4gJHNjb3BlLnJldmVydCgpO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ3NpZ251cEN0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICB2YXIgb3JpZ2luYWw7XG4gICAgJHNjb3BlLnVzZXIgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gICAgICBhZ2U6ICcnXG4gICAgfTtcbiAgICAkc2NvcGUuc2hvd0luZm9PblN1Ym1pdCA9IGZhbHNlO1xuICAgIG9yaWdpbmFsID0gYW5ndWxhci5jb3B5KCRzY29wZS51c2VyKTtcbiAgICAkc2NvcGUucmV2ZXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUudXNlciA9IGFuZ3VsYXIuY29weShvcmlnaW5hbCk7XG4gICAgICAkc2NvcGUuZm9ybV9zaWdudXAuJHNldFByaXN0aW5lKCk7XG4gICAgICByZXR1cm4gJHNjb3BlLmZvcm1fc2lnbnVwLmNvbmZpcm1QYXNzd29yZC4kc2V0UHJpc3RpbmUoKTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5SZXZlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhYW5ndWxhci5lcXVhbHMoJHNjb3BlLnVzZXIsIG9yaWdpbmFsKSB8fCAhJHNjb3BlLmZvcm1fc2lnbnVwLiRwcmlzdGluZTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5TdWJtaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuZm9ybV9zaWdudXAuJHZhbGlkICYmICFhbmd1bGFyLmVxdWFscygkc2NvcGUudXNlciwgb3JpZ2luYWwpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuc2hvd0luZm9PblN1Ym1pdCA9IHRydWU7XG4gICAgICByZXR1cm4gJHNjb3BlLnJldmVydCgpO1xuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndmFsaWRhdGVFcXVhbHMnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycywgbmdNb2RlbEN0cmwpIHtcbiAgICAgICAgdmFyIHZhbGlkYXRlRXF1YWw7XG4gICAgICAgIHZhbGlkYXRlRXF1YWwgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHZhciB2YWxpZDtcbiAgICAgICAgICB2YWxpZCA9IHZhbHVlID09PSBzY29wZS4kZXZhbChhdHRycy52YWxpZGF0ZUVxdWFscyk7XG4gICAgICAgICAgbmdNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdlcXVhbCcsIHZhbGlkKTtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbGlkID09PSBcImZ1bmN0aW9uXCIgPyB2YWxpZCh7XG4gICAgICAgICAgICB2YWx1ZTogdm9pZCAwXG4gICAgICAgICAgfSkgOiB2b2lkIDA7XG4gICAgICAgIH07XG4gICAgICAgIG5nTW9kZWxDdHJsLiRwYXJzZXJzLnB1c2godmFsaWRhdGVFcXVhbCk7XG4gICAgICAgIG5nTW9kZWxDdHJsLiRmb3JtYXR0ZXJzLnB1c2godmFsaWRhdGVFcXVhbCk7XG4gICAgICAgIHJldHVybiBzY29wZS4kd2F0Y2goYXR0cnMudmFsaWRhdGVFcXVhbHMsIGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKG5nTW9kZWxDdHJsLiRWaWV3VmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLm1hcCcsIFtdKS5kaXJlY3RpdmUoJ3VpSnF2bWFwJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIG9wdGlvbnM6ICc9J1xuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0gc2NvcGUub3B0aW9ucztcbiAgICAgICAgcmV0dXJuIGVsZS52ZWN0b3JNYXAob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignanF2bWFwQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIHZhciBzYW1wbGVfZGF0YTtcbiAgICBzYW1wbGVfZGF0YSA9IHtcbiAgICAgIFwiYWZcIjogXCIxNi42M1wiLFxuICAgICAgXCJhbFwiOiBcIjExLjU4XCIsXG4gICAgICBcImR6XCI6IFwiMTU4Ljk3XCIsXG4gICAgICBcImFvXCI6IFwiODUuODFcIixcbiAgICAgIFwiYWdcIjogXCIxLjFcIixcbiAgICAgIFwiYXJcIjogXCIzNTEuMDJcIixcbiAgICAgIFwiYW1cIjogXCI4LjgzXCIsXG4gICAgICBcImF1XCI6IFwiMTIxOS43MlwiLFxuICAgICAgXCJhdFwiOiBcIjM2Ni4yNlwiLFxuICAgICAgXCJhelwiOiBcIjUyLjE3XCIsXG4gICAgICBcImJzXCI6IFwiNy41NFwiLFxuICAgICAgXCJiaFwiOiBcIjIxLjczXCIsXG4gICAgICBcImJkXCI6IFwiMTA1LjRcIixcbiAgICAgIFwiYmJcIjogXCIzLjk2XCIsXG4gICAgICBcImJ5XCI6IFwiNTIuODlcIixcbiAgICAgIFwiYmVcIjogXCI0NjEuMzNcIixcbiAgICAgIFwiYnpcIjogXCIxLjQzXCIsXG4gICAgICBcImJqXCI6IFwiNi40OVwiLFxuICAgICAgXCJidFwiOiBcIjEuNFwiLFxuICAgICAgXCJib1wiOiBcIjE5LjE4XCIsXG4gICAgICBcImJhXCI6IFwiMTYuMlwiLFxuICAgICAgXCJid1wiOiBcIjEyLjVcIixcbiAgICAgIFwiYnJcIjogXCIyMDIzLjUzXCIsXG4gICAgICBcImJuXCI6IFwiMTEuOTZcIixcbiAgICAgIFwiYmdcIjogXCI0NC44NFwiLFxuICAgICAgXCJiZlwiOiBcIjguNjdcIixcbiAgICAgIFwiYmlcIjogXCIxLjQ3XCIsXG4gICAgICBcImtoXCI6IFwiMTEuMzZcIixcbiAgICAgIFwiY21cIjogXCIyMS44OFwiLFxuICAgICAgXCJjYVwiOiBcIjE1NjMuNjZcIixcbiAgICAgIFwiY3ZcIjogXCIxLjU3XCIsXG4gICAgICBcImNmXCI6IFwiMi4xMVwiLFxuICAgICAgXCJ0ZFwiOiBcIjcuNTlcIixcbiAgICAgIFwiY2xcIjogXCIxOTkuMThcIixcbiAgICAgIFwiY25cIjogXCI1NzQ1LjEzXCIsXG4gICAgICBcImNvXCI6IFwiMjgzLjExXCIsXG4gICAgICBcImttXCI6IFwiMC41NlwiLFxuICAgICAgXCJjZFwiOiBcIjEyLjZcIixcbiAgICAgIFwiY2dcIjogXCIxMS44OFwiLFxuICAgICAgXCJjclwiOiBcIjM1LjAyXCIsXG4gICAgICBcImNpXCI6IFwiMjIuMzhcIixcbiAgICAgIFwiaHJcIjogXCI1OS45MlwiLFxuICAgICAgXCJjeVwiOiBcIjIyLjc1XCIsXG4gICAgICBcImN6XCI6IFwiMTk1LjIzXCIsXG4gICAgICBcImRrXCI6IFwiMzA0LjU2XCIsXG4gICAgICBcImRqXCI6IFwiMS4xNFwiLFxuICAgICAgXCJkbVwiOiBcIjAuMzhcIixcbiAgICAgIFwiZG9cIjogXCI1MC44N1wiLFxuICAgICAgXCJlY1wiOiBcIjYxLjQ5XCIsXG4gICAgICBcImVnXCI6IFwiMjE2LjgzXCIsXG4gICAgICBcInN2XCI6IFwiMjEuOFwiLFxuICAgICAgXCJncVwiOiBcIjE0LjU1XCIsXG4gICAgICBcImVyXCI6IFwiMi4yNVwiLFxuICAgICAgXCJlZVwiOiBcIjE5LjIyXCIsXG4gICAgICBcImV0XCI6IFwiMzAuOTRcIixcbiAgICAgIFwiZmpcIjogXCIzLjE1XCIsXG4gICAgICBcImZpXCI6IFwiMjMxLjk4XCIsXG4gICAgICBcImZyXCI6IFwiMjU1NS40NFwiLFxuICAgICAgXCJnYVwiOiBcIjEyLjU2XCIsXG4gICAgICBcImdtXCI6IFwiMS4wNFwiLFxuICAgICAgXCJnZVwiOiBcIjExLjIzXCIsXG4gICAgICBcImRlXCI6IFwiMzMwNS45XCIsXG4gICAgICBcImdoXCI6IFwiMTguMDZcIixcbiAgICAgIFwiZ3JcIjogXCIzMDUuMDFcIixcbiAgICAgIFwiZ2RcIjogXCIwLjY1XCIsXG4gICAgICBcImd0XCI6IFwiNDAuNzdcIixcbiAgICAgIFwiZ25cIjogXCI0LjM0XCIsXG4gICAgICBcImd3XCI6IFwiMC44M1wiLFxuICAgICAgXCJneVwiOiBcIjIuMlwiLFxuICAgICAgXCJodFwiOiBcIjYuNVwiLFxuICAgICAgXCJoblwiOiBcIjE1LjM0XCIsXG4gICAgICBcImhrXCI6IFwiMjI2LjQ5XCIsXG4gICAgICBcImh1XCI6IFwiMTMyLjI4XCIsXG4gICAgICBcImlzXCI6IFwiMTIuNzdcIixcbiAgICAgIFwiaW5cIjogXCIxNDMwLjAyXCIsXG4gICAgICBcImlkXCI6IFwiNjk1LjA2XCIsXG4gICAgICBcImlyXCI6IFwiMzM3LjlcIixcbiAgICAgIFwiaXFcIjogXCI4NC4xNFwiLFxuICAgICAgXCJpZVwiOiBcIjIwNC4xNFwiLFxuICAgICAgXCJpbFwiOiBcIjIwMS4yNVwiLFxuICAgICAgXCJpdFwiOiBcIjIwMzYuNjlcIixcbiAgICAgIFwiam1cIjogXCIxMy43NFwiLFxuICAgICAgXCJqcFwiOiBcIjUzOTAuOVwiLFxuICAgICAgXCJqb1wiOiBcIjI3LjEzXCIsXG4gICAgICBcImt6XCI6IFwiMTI5Ljc2XCIsXG4gICAgICBcImtlXCI6IFwiMzIuNDJcIixcbiAgICAgIFwia2lcIjogXCIwLjE1XCIsXG4gICAgICBcImtyXCI6IFwiOTg2LjI2XCIsXG4gICAgICBcInVuZGVmaW5lZFwiOiBcIjUuNzNcIixcbiAgICAgIFwia3dcIjogXCIxMTcuMzJcIixcbiAgICAgIFwia2dcIjogXCI0LjQ0XCIsXG4gICAgICBcImxhXCI6IFwiNi4zNFwiLFxuICAgICAgXCJsdlwiOiBcIjIzLjM5XCIsXG4gICAgICBcImxiXCI6IFwiMzkuMTVcIixcbiAgICAgIFwibHNcIjogXCIxLjhcIixcbiAgICAgIFwibHJcIjogXCIwLjk4XCIsXG4gICAgICBcImx5XCI6IFwiNzcuOTFcIixcbiAgICAgIFwibHRcIjogXCIzNS43M1wiLFxuICAgICAgXCJsdVwiOiBcIjUyLjQzXCIsXG4gICAgICBcIm1rXCI6IFwiOS41OFwiLFxuICAgICAgXCJtZ1wiOiBcIjguMzNcIixcbiAgICAgIFwibXdcIjogXCI1LjA0XCIsXG4gICAgICBcIm15XCI6IFwiMjE4Ljk1XCIsXG4gICAgICBcIm12XCI6IFwiMS40M1wiLFxuICAgICAgXCJtbFwiOiBcIjkuMDhcIixcbiAgICAgIFwibXRcIjogXCI3LjhcIixcbiAgICAgIFwibXJcIjogXCIzLjQ5XCIsXG4gICAgICBcIm11XCI6IFwiOS40M1wiLFxuICAgICAgXCJteFwiOiBcIjEwMDQuMDRcIixcbiAgICAgIFwibWRcIjogXCI1LjM2XCIsXG4gICAgICBcIm1uXCI6IFwiNS44MVwiLFxuICAgICAgXCJtZVwiOiBcIjMuODhcIixcbiAgICAgIFwibWFcIjogXCI5MS43XCIsXG4gICAgICBcIm16XCI6IFwiMTAuMjFcIixcbiAgICAgIFwibW1cIjogXCIzNS42NVwiLFxuICAgICAgXCJuYVwiOiBcIjExLjQ1XCIsXG4gICAgICBcIm5wXCI6IFwiMTUuMTFcIixcbiAgICAgIFwibmxcIjogXCI3NzAuMzFcIixcbiAgICAgIFwibnpcIjogXCIxMzhcIixcbiAgICAgIFwibmlcIjogXCI2LjM4XCIsXG4gICAgICBcIm5lXCI6IFwiNS42XCIsXG4gICAgICBcIm5nXCI6IFwiMjA2LjY2XCIsXG4gICAgICBcIm5vXCI6IFwiNDEzLjUxXCIsXG4gICAgICBcIm9tXCI6IFwiNTMuNzhcIixcbiAgICAgIFwicGtcIjogXCIxNzQuNzlcIixcbiAgICAgIFwicGFcIjogXCIyNy4yXCIsXG4gICAgICBcInBnXCI6IFwiOC44MVwiLFxuICAgICAgXCJweVwiOiBcIjE3LjE3XCIsXG4gICAgICBcInBlXCI6IFwiMTUzLjU1XCIsXG4gICAgICBcInBoXCI6IFwiMTg5LjA2XCIsXG4gICAgICBcInBsXCI6IFwiNDM4Ljg4XCIsXG4gICAgICBcInB0XCI6IFwiMjIzLjdcIixcbiAgICAgIFwicWFcIjogXCIxMjYuNTJcIixcbiAgICAgIFwicm9cIjogXCIxNTguMzlcIixcbiAgICAgIFwicnVcIjogXCIxNDc2LjkxXCIsXG4gICAgICBcInJ3XCI6IFwiNS42OVwiLFxuICAgICAgXCJ3c1wiOiBcIjAuNTVcIixcbiAgICAgIFwic3RcIjogXCIwLjE5XCIsXG4gICAgICBcInNhXCI6IFwiNDM0LjQ0XCIsXG4gICAgICBcInNuXCI6IFwiMTIuNjZcIixcbiAgICAgIFwicnNcIjogXCIzOC45MlwiLFxuICAgICAgXCJzY1wiOiBcIjAuOTJcIixcbiAgICAgIFwic2xcIjogXCIxLjlcIixcbiAgICAgIFwic2dcIjogXCIyMTcuMzhcIixcbiAgICAgIFwic2tcIjogXCI4Ni4yNlwiLFxuICAgICAgXCJzaVwiOiBcIjQ2LjQ0XCIsXG4gICAgICBcInNiXCI6IFwiMC42N1wiLFxuICAgICAgXCJ6YVwiOiBcIjM1NC40MVwiLFxuICAgICAgXCJlc1wiOiBcIjEzNzQuNzhcIixcbiAgICAgIFwibGtcIjogXCI0OC4yNFwiLFxuICAgICAgXCJrblwiOiBcIjAuNTZcIixcbiAgICAgIFwibGNcIjogXCIxXCIsXG4gICAgICBcInZjXCI6IFwiMC41OFwiLFxuICAgICAgXCJzZFwiOiBcIjY1LjkzXCIsXG4gICAgICBcInNyXCI6IFwiMy4zXCIsXG4gICAgICBcInN6XCI6IFwiMy4xN1wiLFxuICAgICAgXCJzZVwiOiBcIjQ0NC41OVwiLFxuICAgICAgXCJjaFwiOiBcIjUyMi40NFwiLFxuICAgICAgXCJzeVwiOiBcIjU5LjYzXCIsXG4gICAgICBcInR3XCI6IFwiNDI2Ljk4XCIsXG4gICAgICBcInRqXCI6IFwiNS41OFwiLFxuICAgICAgXCJ0elwiOiBcIjIyLjQzXCIsXG4gICAgICBcInRoXCI6IFwiMzEyLjYxXCIsXG4gICAgICBcInRsXCI6IFwiMC42MlwiLFxuICAgICAgXCJ0Z1wiOiBcIjMuMDdcIixcbiAgICAgIFwidG9cIjogXCIwLjNcIixcbiAgICAgIFwidHRcIjogXCIyMS4yXCIsXG4gICAgICBcInRuXCI6IFwiNDMuODZcIixcbiAgICAgIFwidHJcIjogXCI3MjkuMDVcIixcbiAgICAgIFwidG1cIjogMCxcbiAgICAgIFwidWdcIjogXCIxNy4xMlwiLFxuICAgICAgXCJ1YVwiOiBcIjEzNi41NlwiLFxuICAgICAgXCJhZVwiOiBcIjIzOS42NVwiLFxuICAgICAgXCJnYlwiOiBcIjIyNTguNTdcIixcbiAgICAgIFwidXNcIjogXCIxNDYyNC4xOFwiLFxuICAgICAgXCJ1eVwiOiBcIjQwLjcxXCIsXG4gICAgICBcInV6XCI6IFwiMzcuNzJcIixcbiAgICAgIFwidnVcIjogXCIwLjcyXCIsXG4gICAgICBcInZlXCI6IFwiMjg1LjIxXCIsXG4gICAgICBcInZuXCI6IFwiMTAxLjk5XCIsXG4gICAgICBcInllXCI6IFwiMzAuMDJcIixcbiAgICAgIFwiem1cIjogXCIxNS42OVwiLFxuICAgICAgXCJ6d1wiOiBcIjUuNTdcIlxuICAgIH07XG4gICAgJHNjb3BlLndvcmxkTWFwID0ge1xuICAgICAgbWFwOiAnd29ybGRfZW4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGhvdmVyT3BhY2l0eTogMC43LFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyM2NjY2NjYnLFxuICAgICAgZW5hYmxlWm9vbTogdHJ1ZSxcbiAgICAgIHNob3dUb29sdGlwOiB0cnVlLFxuICAgICAgdmFsdWVzOiBzYW1wbGVfZGF0YSxcbiAgICAgIHNjYWxlQ29sb3JzOiBbJyNDNEZGRkYnLCAnIzA3QzBCQiddLFxuICAgICAgbm9ybWFsaXplRnVuY3Rpb246ICdwb2x5bm9taWFsJ1xuICAgIH07XG4gICAgJHNjb3BlLnZlbmV6dWVsYU1hcCA9IHtcbiAgICAgIG1hcDogJ3ZlbmV6dWVsYV9lbicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG51bGwsXG4gICAgICBjb2xvcjogJyMwMDAwNjMnLFxuICAgICAgaG92ZXJDb2xvcjogJyNCNkFCMEYnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyNmNGUzMGEnLFxuICAgICAgZW5hYmxlWm9vbTogdHJ1ZSxcbiAgICAgIHNob3dUb29sdGlwOiB0cnVlLFxuICAgICAgc2VsZWN0ZWRSZWdpb246ICdaVSdcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuZXVyb3BlTWFwID0ge1xuICAgICAgbWFwOiAnZXVyb3BlX2VuJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogbnVsbCxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBob3Zlck9wYWNpdHk6IDAuNyxcbiAgICAgIGhvdmVyQ29sb3I6ICcjOTk5OTk5JyxcbiAgICAgIGVuYWJsZVpvb206IGZhbHNlLFxuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgICAgdmFsdWVzOiBzYW1wbGVfZGF0YSxcbiAgICAgIHNjYWxlQ29sb3JzOiBbJyNDNEZGRkYnLCAnIzA3QzBCQiddLFxuICAgICAgbm9ybWFsaXplRnVuY3Rpb246ICdwb2x5bm9taWFsJ1xuICAgIH07XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC5wYWdlLmN0cmxzJywgW10pLmNvbnRyb2xsZXIoJ2ludm9pY2VDdHJsJywgW1xuICAnJHNjb3BlJywgJyR3aW5kb3cnLCBmdW5jdGlvbigkc2NvcGUsICR3aW5kb3cpIHtcbiAgICByZXR1cm4gJHNjb3BlLnByaW50SW52b2ljZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9yaWdpbmFsQ29udGVudHMsIHBvcHVwV2luLCBwcmludENvbnRlbnRzO1xuICAgICAgcHJpbnRDb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZvaWNlJykuaW5uZXJIVE1MO1xuICAgICAgb3JpZ2luYWxDb250ZW50cyA9IGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuICAgICAgcG9wdXBXaW4gPSB3aW5kb3cub3BlbigpO1xuICAgICAgcG9wdXBXaW4uZG9jdW1lbnQub3BlbigpO1xuICAgICAgcG9wdXBXaW4uZG9jdW1lbnQud3JpdGUoJzxodG1sPjxoZWFkPjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwic3R5bGVzL21haW4uY3NzXCIgLz48L2hlYWQ+PGJvZHkgb25sb2FkPVwid2luZG93LnByaW50KClcIj4nICsgcHJpbnRDb250ZW50cyArICc8L2h0bWw+Jyk7XG4gICAgICByZXR1cm4gcG9wdXBXaW4uZG9jdW1lbnQuY2xvc2UoKTtcbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAudGFibGVzJywgW10pLmNvbnRyb2xsZXIoJ3RhYmxlQ3RybCcsIFtcbiAgJyRzY29wZScsICckZmlsdGVyJywgZnVuY3Rpb24oJHNjb3BlLCAkZmlsdGVyKSB7XG4gICAgdmFyIGluaXQ7XG4gICAgJHNjb3BlLnN0b3JlcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ05paml5YSBNYXJrZXQnLFxuICAgICAgICBwcmljZTogJyQkJyxcbiAgICAgICAgc2FsZXM6IDI5MixcbiAgICAgICAgcmF0aW5nOiA0LjBcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0VhdCBPbiBNb25kYXkgVHJ1Y2snLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMTE5LFxuICAgICAgICByYXRpbmc6IDQuM1xuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnVGVhIEVyYScsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiA4NzQsXG4gICAgICAgIHJhdGluZzogNC4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdSb2dlcnMgRGVsaScsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAzNDcsXG4gICAgICAgIHJhdGluZzogNC4yXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdNb0Jvd2wnLFxuICAgICAgICBwcmljZTogJyQkJCcsXG4gICAgICAgIHNhbGVzOiAyNCxcbiAgICAgICAgcmF0aW5nOiA0LjZcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1RoZSBNaWxrIFBhaWwgTWFya2V0JyxcbiAgICAgICAgcHJpY2U6ICckJyxcbiAgICAgICAgc2FsZXM6IDU0MyxcbiAgICAgICAgcmF0aW5nOiA0LjVcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ05vYiBIaWxsIEZvb2RzJyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA4NzQsXG4gICAgICAgIHJhdGluZzogNC4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdTY3JhdGNoJyxcbiAgICAgICAgcHJpY2U6ICckJCQnLFxuICAgICAgICBzYWxlczogNjQzLFxuICAgICAgICByYXRpbmc6IDMuNlxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnR29jaGkgSmFwYW5lc2UgRnVzaW9uIFRhcGFzJyxcbiAgICAgICAgcHJpY2U6ICckJCQnLFxuICAgICAgICBzYWxlczogNTYsXG4gICAgICAgIHJhdGluZzogNC4xXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdDb3N0IFBsdXMgV29ybGQgTWFya2V0JyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA3OSxcbiAgICAgICAgcmF0aW5nOiA0LjBcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0J1bWJsZSBCZWUgSGVhbHRoIEZvb2RzJyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA0MyxcbiAgICAgICAgcmF0aW5nOiA0LjNcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0Nvc3RjbycsXG4gICAgICAgIHByaWNlOiAnJCQnLFxuICAgICAgICBzYWxlczogMjE5LFxuICAgICAgICByYXRpbmc6IDMuNlxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnUmVkIFJvY2sgQ29mZmVlIENvJyxcbiAgICAgICAgcHJpY2U6ICckJyxcbiAgICAgICAgc2FsZXM6IDc2NSxcbiAgICAgICAgcmF0aW5nOiA0LjFcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJzk5IFJhbmNoIE1hcmtldCcsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAxODEsXG4gICAgICAgIHJhdGluZzogMy40XG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdNaSBQdWVibG8gRm9vZCBDZW50ZXInLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogNzgsXG4gICAgICAgIHJhdGluZzogNC4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdDdWNpbmEgVmVudGknLFxuICAgICAgICBwcmljZTogJyQkJyxcbiAgICAgICAgc2FsZXM6IDE2MyxcbiAgICAgICAgcmF0aW5nOiAzLjNcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1N1ZmkgQ29mZmVlIFNob3AnLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMTEzLFxuICAgICAgICByYXRpbmc6IDMuM1xuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnRGFuYSBTdHJlZXQgUm9hc3RpbmcnLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMzE2LFxuICAgICAgICByYXRpbmc6IDQuMVxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnUGVhcmwgQ2FmZScsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAxNzMsXG4gICAgICAgIHJhdGluZzogMy40XG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdQb3NoIEJhZ2VsJyxcbiAgICAgICAgcHJpY2U6ICckJyxcbiAgICAgICAgc2FsZXM6IDE0MCxcbiAgICAgICAgcmF0aW5nOiA0LjBcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0FydGlzYW4gV2luZSBEZXBvdCcsXG4gICAgICAgIHByaWNlOiAnJCQnLFxuICAgICAgICBzYWxlczogMjYsXG4gICAgICAgIHJhdGluZzogNC4xXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdIb25nIEtvbmcgQ2hpbmVzZSBCYWtlcnknLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMTgyLFxuICAgICAgICByYXRpbmc6IDMuNFxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnU3RhcmJ1Y2tzJyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA5NyxcbiAgICAgICAgcmF0aW5nOiAzLjdcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1RhcGlvY2EgRXhwcmVzcycsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAzMDEsXG4gICAgICAgIHJhdGluZzogMy4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdIb3VzZSBvZiBCYWdlbHMnLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogODIsXG4gICAgICAgIHJhdGluZzogNC40XG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuc2VhcmNoS2V5d29yZHMgPSAnJztcbiAgICAkc2NvcGUuZmlsdGVyZWRTdG9yZXMgPSBbXTtcbiAgICAkc2NvcGUucm93ID0gJyc7XG4gICAgJHNjb3BlLnNlbGVjdCA9IGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgIHZhciBlbmQsIHN0YXJ0O1xuICAgICAgc3RhcnQgPSAocGFnZSAtIDEpICogJHNjb3BlLm51bVBlclBhZ2U7XG4gICAgICBlbmQgPSBzdGFydCArICRzY29wZS5udW1QZXJQYWdlO1xuICAgICAgcmV0dXJuICRzY29wZS5jdXJyZW50UGFnZVN0b3JlcyA9ICRzY29wZS5maWx0ZXJlZFN0b3Jlcy5zbGljZShzdGFydCwgZW5kKTtcbiAgICB9O1xuICAgICRzY29wZS5vbkZpbHRlckNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnNlbGVjdCgxKTtcbiAgICAgICRzY29wZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICByZXR1cm4gJHNjb3BlLnJvdyA9ICcnO1xuICAgIH07XG4gICAgJHNjb3BlLm9uTnVtUGVyUGFnZUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnNlbGVjdCgxKTtcbiAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFBhZ2UgPSAxO1xuICAgIH07XG4gICAgJHNjb3BlLm9uT3JkZXJDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5zZWxlY3QoMSk7XG4gICAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRQYWdlID0gMTtcbiAgICB9O1xuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5maWx0ZXJlZFN0b3JlcyA9ICRmaWx0ZXIoJ2ZpbHRlcicpKCRzY29wZS5zdG9yZXMsICRzY29wZS5zZWFyY2hLZXl3b3Jkcyk7XG4gICAgICByZXR1cm4gJHNjb3BlLm9uRmlsdGVyQ2hhbmdlKCk7XG4gICAgfTtcbiAgICAkc2NvcGUub3JkZXIgPSBmdW5jdGlvbihyb3dOYW1lKSB7XG4gICAgICBpZiAoJHNjb3BlLnJvdyA9PT0gcm93TmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkc2NvcGUucm93ID0gcm93TmFtZTtcbiAgICAgICRzY29wZS5maWx0ZXJlZFN0b3JlcyA9ICRmaWx0ZXIoJ29yZGVyQnknKSgkc2NvcGUuc3RvcmVzLCByb3dOYW1lKTtcbiAgICAgIHJldHVybiAkc2NvcGUub25PcmRlckNoYW5nZSgpO1xuICAgIH07XG4gICAgJHNjb3BlLm51bVBlclBhZ2VPcHQgPSBbMywgNSwgMTAsIDIwXTtcbiAgICAkc2NvcGUubnVtUGVyUGFnZSA9ICRzY29wZS5udW1QZXJQYWdlT3B0WzJdO1xuICAgICRzY29wZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgJHNjb3BlLmN1cnJlbnRQYWdlU3RvcmVzID0gW107XG4gICAgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnNlYXJjaCgpO1xuICAgICAgcmV0dXJuICRzY29wZS5zZWxlY3QoJHNjb3BlLmN1cnJlbnRQYWdlKTtcbiAgICB9O1xuICAgIHJldHVybiBpbml0KCk7XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC51aS5jdHJscycsIFtdKS5jb250cm9sbGVyKCdOb3RpZnlDdHJsJywgW1xuICAnJHNjb3BlJywgJ2xvZ2dlcicsIGZ1bmN0aW9uKCRzY29wZSwgbG9nZ2VyKSB7XG4gICAgcmV0dXJuICRzY29wZS5ub3RpZnkgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2coXCJIZWFkcyB1cCEgVGhpcyBhbGVydCBuZWVkcyB5b3VyIGF0dGVudGlvbiwgYnV0IGl0J3Mgbm90IHN1cGVyIGltcG9ydGFudC5cIik7XG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgIHJldHVybiBsb2dnZXIubG9nU3VjY2VzcyhcIldlbGwgZG9uZSEgWW91IHN1Y2Nlc3NmdWxseSByZWFkIHRoaXMgaW1wb3J0YW50IGFsZXJ0IG1lc3NhZ2UuXCIpO1xuICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZ1dhcm5pbmcoXCJXYXJuaW5nISBCZXN0IGNoZWNrIHlvIHNlbGYsIHlvdSdyZSBub3QgbG9va2luZyB0b28gZ29vZC5cIik7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZ0Vycm9yKFwiT2ggc25hcCEgQ2hhbmdlIGEgZmV3IHRoaW5ncyB1cCBhbmQgdHJ5IHN1Ym1pdHRpbmcgYWdhaW4uXCIpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ0FsZXJ0RGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUuYWxlcnRzID0gW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIG1zZzogJ1dlbGwgZG9uZSEgWW91IHN1Y2Nlc3NmdWxseSByZWFkIHRoaXMgaW1wb3J0YW50IGFsZXJ0IG1lc3NhZ2UuJ1xuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgIG1zZzogJ0hlYWRzIHVwISBUaGlzIGFsZXJ0IG5lZWRzIHlvdXIgYXR0ZW50aW9uLCBidXQgaXQgaXMgbm90IHN1cGVyIGltcG9ydGFudC4nXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgbXNnOiBcIldhcm5pbmchIEJlc3QgY2hlY2sgeW8gc2VsZiwgeW91J3JlIG5vdCBsb29raW5nIHRvbyBnb29kLlwiXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICBtc2c6ICdPaCBzbmFwISBDaGFuZ2UgYSBmZXcgdGhpbmdzIHVwIGFuZCB0cnkgc3VibWl0dGluZyBhZ2Fpbi4nXG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuYWRkQWxlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBudW0sIHR5cGU7XG4gICAgICBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgdHlwZSA9IHZvaWQgMDtcbiAgICAgIHN3aXRjaCAobnVtKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0eXBlID0gJ2luZm8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdHlwZSA9ICdzdWNjZXNzJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHR5cGUgPSAnaW5mbyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0eXBlID0gJ3dhcm5pbmcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgfVxuICAgICAgcmV0dXJuICRzY29wZS5hbGVydHMucHVzaCh7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIG1zZzogXCJBbm90aGVyIGFsZXJ0IVwiXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuY2xvc2VBbGVydCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmFsZXJ0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ1Byb2dyZXNzRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUubWF4ID0gMjAwO1xuICAgICRzY29wZS5yYW5kb20gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0eXBlLCB2YWx1ZTtcbiAgICAgIHZhbHVlID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxMCk7XG4gICAgICB0eXBlID0gdm9pZCAwO1xuICAgICAgaWYgKHZhbHVlIDwgMjUpIHtcbiAgICAgICAgdHlwZSA9IFwic3VjY2Vzc1wiO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDUwKSB7XG4gICAgICAgIHR5cGUgPSBcImluZm9cIjtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCA3NSkge1xuICAgICAgICB0eXBlID0gXCJ3YXJuaW5nXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gXCJkYW5nZXJcIjtcbiAgICAgIH1cbiAgICAgICRzY29wZS5zaG93V2FybmluZyA9IHR5cGUgPT09IFwiZGFuZ2VyXCIgfHwgdHlwZSA9PT0gXCJ3YXJuaW5nXCI7XG4gICAgICAkc2NvcGUuZHluYW1pYyA9IHZhbHVlO1xuICAgICAgJHNjb3BlLnR5cGUgPSB0eXBlO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5yYW5kb20oKTtcbiAgfVxuXSkuY29udHJvbGxlcignQWNjb3JkaW9uRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUub25lQXRBVGltZSA9IHRydWU7XG4gICAgJHNjb3BlLmdyb3VwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRHluYW1pYyBHcm91cCBIZWFkZXIgLSAxXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRHluYW1pYyBHcm91cCBCb2R5IC0gMVwiXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiBcIkR5bmFtaWMgR3JvdXAgSGVhZGVyIC0gMlwiLFxuICAgICAgICBjb250ZW50OiBcIkR5bmFtaWMgR3JvdXAgQm9keSAtIDJcIlxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogXCJEeW5hbWljIEdyb3VwIEhlYWRlciAtIDNcIixcbiAgICAgICAgY29udGVudDogXCJEeW5hbWljIEdyb3VwIEJvZHkgLSAzXCJcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5pdGVtcyA9IFtcIkl0ZW0gMVwiLCBcIkl0ZW0gMlwiLCBcIkl0ZW0gM1wiXTtcbiAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgaXNGaXJzdE9wZW46IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjE6IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjI6IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjM6IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjQ6IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjU6IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjY6IHRydWVcbiAgICB9O1xuICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbmV3SXRlbU5vO1xuICAgICAgbmV3SXRlbU5vID0gJHNjb3BlLml0ZW1zLmxlbmd0aCArIDE7XG4gICAgICAkc2NvcGUuaXRlbXMucHVzaChcIkl0ZW0gXCIgKyBuZXdJdGVtTm8pO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ0NvbGxhcHNlRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICByZXR1cm4gJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2U7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ01vZGFsRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCAnJG1vZGFsJywgJyRsb2cnLCBmdW5jdGlvbigkc2NvcGUsICRtb2RhbCwgJGxvZykge1xuICAgICRzY29wZS5pdGVtcyA9IFtcIml0ZW0xXCIsIFwiaXRlbTJcIiwgXCJpdGVtM1wiXTtcbiAgICAkc2NvcGUub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1vZGFsSW5zdGFuY2U7XG4gICAgICBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogXCJteU1vZGFsQ29udGVudC5odG1sXCIsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNb2RhbEluc3RhbmNlQ3RybCcsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBpdGVtczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJHNjb3BlLml0ZW1zO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKChmdW5jdGlvbihzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtO1xuICAgICAgfSksIGZ1bmN0aW9uKCkge1xuICAgICAgICAkbG9nLmluZm8oXCJNb2RhbCBkaXNtaXNzZWQgYXQ6IFwiICsgbmV3IERhdGUoKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdNb2RhbEluc3RhbmNlQ3RybCcsIFtcbiAgJyRzY29wZScsICckbW9kYWxJbnN0YW5jZScsICdpdGVtcycsIGZ1bmN0aW9uKCRzY29wZSwgJG1vZGFsSW5zdGFuY2UsIGl0ZW1zKSB7XG4gICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XG4gICAgJHNjb3BlLnNlbGVjdGVkID0ge1xuICAgICAgaXRlbTogJHNjb3BlLml0ZW1zWzBdXG4gICAgfTtcbiAgICAkc2NvcGUub2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKCRzY29wZS5zZWxlY3RlZC5pdGVtKTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoXCJjYW5jZWxcIik7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignUGFnaW5hdGlvbkRlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLnRvdGFsSXRlbXMgPSA2NDtcbiAgICAkc2NvcGUuY3VycmVudFBhZ2UgPSA0O1xuICAgICRzY29wZS5tYXhTaXplID0gNTtcbiAgICAkc2NvcGUuc2V0UGFnZSA9IGZ1bmN0aW9uKHBhZ2VObykge1xuICAgICAgcmV0dXJuICRzY29wZS5jdXJyZW50UGFnZSA9IHBhZ2VObztcbiAgICB9O1xuICAgICRzY29wZS5iaWdUb3RhbEl0ZW1zID0gMTc1O1xuICAgIHJldHVybiAkc2NvcGUuYmlnQ3VycmVudFBhZ2UgPSAxO1xuICB9XG5dKS5jb250cm9sbGVyKCdUYWJzRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUudGFicyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRHluYW1pYyBUaXRsZSAxXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRHluYW1pYyBjb250ZW50IDEuICBDb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOaWhpbCwgcXVpZGVtLCBvZmZpY2lpcywgZXQgZXggbGF1ZGFudGl1bSBzZWQgY3VwaWRpdGF0ZSB2b2x1cHRhdHVtIGxpYmVybyBub2JpcyBzaXQgaWxsdW0gdm9sdXB0YXRlcyBiZWF0YWUgYWIuIEFkLCByZXBlbGxlbmR1cyBub24gc2VxdWkgZXQgYXQuXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6IFwiRGlzYWJsZWRcIixcbiAgICAgICAgY29udGVudDogXCJEeW5hbWljIGNvbnRlbnQgMi4gIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOaWhpbCwgcXVpZGVtLCBvZmZpY2lpcywgZXQgZXggbGF1ZGFudGl1bSBzZWQgY3VwaWRpdGF0ZSB2b2x1cHRhdHVtIGxpYmVybyBub2JpcyBzaXQgaWxsdW0gdm9sdXB0YXRlcyBiZWF0YWUgYWIuIEFkLCByZXBlbGxlbmR1cyBub24gc2VxdWkgZXQgYXQuXCIsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9XG4gICAgXTtcbiAgICByZXR1cm4gJHNjb3BlLm5hdlR5cGUgPSBcInBpbGxzXCI7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ1RyZWVEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5saXN0ID0gW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwiSXRlbSAxXCIsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSwge1xuICAgICAgICBpZDogMixcbiAgICAgICAgdGl0bGU6IFwiSXRlbSAyXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIxLFxuICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjFcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMjExLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4xLjFcIixcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyMTIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjEuMlwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDIyLFxuICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjJcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMjIxLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4yLjFcIixcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyMjIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjIuMlwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICB0aXRsZTogXCJJdGVtIDNcIixcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICB0aXRsZTogXCJJdGVtIDRcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogNDEsXG4gICAgICAgICAgICB0aXRsZTogXCJJdGVtIDQuMVwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICB0aXRsZTogXCJJdGVtIDVcIixcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICB0aXRsZTogXCJJdGVtIDZcIixcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICB0aXRsZTogXCJJdGVtIDdcIixcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuc2VsZWN0ZWRJdGVtID0ge307XG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7fTtcbiAgICAkc2NvcGUucmVtb3ZlID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgIHNjb3BlLnJlbW92ZSgpO1xuICAgIH07XG4gICAgJHNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICBzY29wZS50b2dnbGUoKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUubmV3U3ViSXRlbSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICB2YXIgbm9kZURhdGE7XG4gICAgICBub2RlRGF0YSA9IHNjb3BlLiRtb2RlbFZhbHVlO1xuICAgICAgbm9kZURhdGEuaXRlbXMucHVzaCh7XG4gICAgICAgIGlkOiBub2RlRGF0YS5pZCAqIDEwICsgbm9kZURhdGEuaXRlbXMubGVuZ3RoLFxuICAgICAgICB0aXRsZTogbm9kZURhdGEudGl0bGUgKyBcIi5cIiArIChub2RlRGF0YS5pdGVtcy5sZW5ndGggKyAxKSxcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdNYXBEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsICckaHR0cCcsICckaW50ZXJ2YWwnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwLCAkaW50ZXJ2YWwpIHtcbiAgICB2YXIgaSwgbWFya2VycztcbiAgICBtYXJrZXJzID0gW107XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCA4KSB7XG4gICAgICBtYXJrZXJzW2ldID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgIHRpdGxlOiBcIk1hcmtlcjogXCIgKyBpXG4gICAgICB9KTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgJHNjb3BlLkdlbmVyYXRlTWFwTWFya2VycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGQsIGxhdCwgbG5nLCBsb2MsIG51bU1hcmtlcnM7XG4gICAgICBkID0gbmV3IERhdGUoKTtcbiAgICAgICRzY29wZS5kYXRlID0gZC50b0xvY2FsZVN0cmluZygpO1xuICAgICAgbnVtTWFya2VycyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgNDtcbiAgICAgIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBudW1NYXJrZXJzKSB7XG4gICAgICAgIGxhdCA9IDQzLjY2MDAwMDAgKyAoTWF0aC5yYW5kb20oKSAvIDEwMCk7XG4gICAgICAgIGxuZyA9IC03OS40MTAzMDAwICsgKE1hdGgucmFuZG9tKCkgLyAxMDApO1xuICAgICAgICBsb2MgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKTtcbiAgICAgICAgbWFya2Vyc1tpXS5zZXRQb3NpdGlvbihsb2MpO1xuICAgICAgICBtYXJrZXJzW2ldLnNldE1hcCgkc2NvcGUubWFwKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH07XG4gICAgJGludGVydmFsKCRzY29wZS5HZW5lcmF0ZU1hcE1hcmtlcnMsIDIwMDApO1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAudWkuZGlyZWN0aXZlcycsIFtdKS5kaXJlY3RpdmUoJ3VpVGltZScsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlKSB7XG4gICAgICAgIHZhciBjaGVja1RpbWUsIHN0YXJ0VGltZTtcbiAgICAgICAgc3RhcnRUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGgsIG0sIHMsIHQsIHRpbWUsIHRvZGF5O1xuICAgICAgICAgIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBoID0gdG9kYXkuZ2V0SG91cnMoKTtcbiAgICAgICAgICBtID0gdG9kYXkuZ2V0TWludXRlcygpO1xuICAgICAgICAgIHMgPSB0b2RheS5nZXRTZWNvbmRzKCk7XG4gICAgICAgICAgbSA9IGNoZWNrVGltZShtKTtcbiAgICAgICAgICBzID0gY2hlY2tUaW1lKHMpO1xuICAgICAgICAgIHRpbWUgPSBoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzO1xuICAgICAgICAgIGVsZS5odG1sKHRpbWUpO1xuICAgICAgICAgIHJldHVybiB0ID0gc2V0VGltZW91dChzdGFydFRpbWUsIDUwMCk7XG4gICAgICAgIH07XG4gICAgICAgIGNoZWNrVGltZSA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICBpZiAoaSA8IDEwKSB7XG4gICAgICAgICAgICBpID0gXCIwXCIgKyBpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0VGltZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndWlXZWF0aGVyJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciBjb2xvciwgaWNvbiwgc2t5Y29ucztcbiAgICAgICAgY29sb3IgPSBhdHRycy5jb2xvcjtcbiAgICAgICAgaWNvbiA9IFNreWNvbnNbYXR0cnMuaWNvbl07XG4gICAgICAgIHNreWNvbnMgPSBuZXcgU2t5Y29ucyh7XG4gICAgICAgICAgXCJjb2xvclwiOiBjb2xvcixcbiAgICAgICAgICBcInJlc2l6ZUNsZWFyXCI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHNreWNvbnMuYWRkKGVsZVswXSwgaWNvbik7XG4gICAgICAgIHJldHVybiBza3ljb25zLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAudWkuc2VydmljZXMnLCBbXSkuZmFjdG9yeSgnbG9nZ2VyJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgbG9nSXQ7XG4gICAgdG9hc3RyLm9wdGlvbnMgPSB7XG4gICAgICBcImNsb3NlQnV0dG9uXCI6IHRydWUsXG4gICAgICBcInBvc2l0aW9uQ2xhc3NcIjogXCJ0b2FzdC1ib3R0b20tcmlnaHRcIixcbiAgICAgIFwidGltZU91dFwiOiBcIjMwMDBcIlxuICAgIH07XG4gICAgbG9nSXQgPSBmdW5jdGlvbihtZXNzYWdlLCB0eXBlKSB7XG4gICAgICByZXR1cm4gdG9hc3RyW3R5cGVdKG1lc3NhZ2UpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZzogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBsb2dJdChtZXNzYWdlLCAnaW5mbycpO1xuICAgICAgfSxcbiAgICAgIGxvZ1dhcm5pbmc6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgbG9nSXQobWVzc2FnZSwgJ3dhcm5pbmcnKTtcbiAgICAgIH0sXG4gICAgICBsb2dTdWNjZXNzOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIGxvZ0l0KG1lc3NhZ2UsICdzdWNjZXNzJyk7XG4gICAgICB9LFxuICAgICAgbG9nRXJyb3I6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgbG9nSXQobWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLnRhc2snLCBbXSkuZmFjdG9yeSgndGFza1N0b3JhZ2UnLCBmdW5jdGlvbigpIHtcbiAgdmFyIERFTU9fVEFTS1MsIFNUT1JBR0VfSUQ7XG4gIFNUT1JBR0VfSUQgPSAndGFza3MnO1xuICBERU1PX1RBU0tTID0gJ1sge1widGl0bGVcIjogXCJGaW5pc2ggaG9tZXdvcmtcIiwgXCJjb21wbGV0ZWRcIjogdHJ1ZX0sIHtcInRpdGxlXCI6IFwiTWFrZSBhIGNhbGxcIiwgXCJjb21wbGV0ZWRcIjogdHJ1ZX0sIHtcInRpdGxlXCI6IFwiQnVpbGQgYSBzbm93bWFuIVwiLCBcImNvbXBsZXRlZFwiOiBmYWxzZX0sIHtcInRpdGxlXCI6IFwiVGFuZ28hIFRhbmdvISBUYW5nbyFcIiwgXCJjb21wbGV0ZWRcIjogZmFsc2V9LCB7XCJ0aXRsZVwiOiBcIlBsYXkgZ2FtZXMgd2l0aCBmcmllbmRzXCIsIFwiY29tcGxldGVkXCI6IGZhbHNlfSwge1widGl0bGVcIjogXCJTaG9wcGluZ1wiLCBcImNvbXBsZXRlZFwiOiBmYWxzZX0sIHtcInRpdGxlXCI6IFwiT25lIG1vcmUgZGFuY2VcIiwgXCJjb21wbGV0ZWRcIjogZmFsc2V9LCB7XCJ0aXRsZVwiOiBcIlRyeSBHb29nbGUgZ2xhc3NcIiwgXCJjb21wbGV0ZWRcIjogZmFsc2V9IF0nO1xuICByZXR1cm4ge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0lEKSB8fCBERU1PX1RBU0tTKTtcbiAgICB9LFxuICAgIHB1dDogZnVuY3Rpb24odGFza3MpIHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0lELCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgIH1cbiAgfTtcbn0pLmRpcmVjdGl2ZSgndGFza0ZvY3VzJywgW1xuICAnJHRpbWVvdXQnLCBmdW5jdGlvbigkdGltZW91dCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICByZXR1cm4gc2NvcGUuJHdhdGNoKGF0dHJzLnRhc2tGb2N1cywgZnVuY3Rpb24obmV3VmFsKSB7XG4gICAgICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICAgICAgcmV0dXJuICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gZWxlWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICB9LCAwLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCd0YXNrQ3RybCcsIFtcbiAgJyRzY29wZScsICd0YXNrU3RvcmFnZScsICdmaWx0ZXJGaWx0ZXInLCAnJHJvb3RTY29wZScsICdsb2dnZXInLCBmdW5jdGlvbigkc2NvcGUsIHRhc2tTdG9yYWdlLCBmaWx0ZXJGaWx0ZXIsICRyb290U2NvcGUsIGxvZ2dlcikge1xuICAgIHZhciB0YXNrcztcbiAgICB0YXNrcyA9ICRzY29wZS50YXNrcyA9IHRhc2tTdG9yYWdlLmdldCgpO1xuICAgICRzY29wZS5uZXdUYXNrID0gJyc7XG4gICAgJHNjb3BlLnJlbWFpbmluZ0NvdW50ID0gZmlsdGVyRmlsdGVyKHRhc2tzLCB7XG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSkubGVuZ3RoO1xuICAgICRzY29wZS5lZGl0ZWRUYXNrID0gbnVsbDtcbiAgICAkc2NvcGUuc3RhdHVzRmlsdGVyID0ge1xuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH07XG4gICAgJHNjb3BlLmZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnN0YXR1c0ZpbHRlciA9ICcnO1xuICAgICAgICBjYXNlICdhY3RpdmUnOlxuICAgICAgICAgIHJldHVybiAkc2NvcGUuc3RhdHVzRmlsdGVyID0ge1xuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ2NvbXBsZXRlZCc6XG4gICAgICAgICAgcmV0dXJuICRzY29wZS5zdGF0dXNGaWx0ZXIgPSB7XG4gICAgICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmFkZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5ld1Rhc2s7XG4gICAgICBuZXdUYXNrID0gJHNjb3BlLm5ld1Rhc2sudHJpbSgpO1xuICAgICAgaWYgKG5ld1Rhc2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICB0aXRsZTogbmV3VGFzayxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBsb2dnZXIubG9nU3VjY2VzcygnTmV3IHRhc2s6IFwiJyArIG5ld1Rhc2sgKyAnXCIgYWRkZWQnKTtcbiAgICAgIHRhc2tTdG9yYWdlLnB1dCh0YXNrcyk7XG4gICAgICAkc2NvcGUubmV3VGFzayA9ICcnO1xuICAgICAgcmV0dXJuICRzY29wZS5yZW1haW5pbmdDb3VudCsrO1xuICAgIH07XG4gICAgJHNjb3BlLmVkaXQgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmVkaXRlZFRhc2sgPSB0YXNrO1xuICAgIH07XG4gICAgJHNjb3BlLmRvbmVFZGl0aW5nID0gZnVuY3Rpb24odGFzaykge1xuICAgICAgJHNjb3BlLmVkaXRlZFRhc2sgPSBudWxsO1xuICAgICAgdGFzay50aXRsZSA9IHRhc2sudGl0bGUudHJpbSgpO1xuICAgICAgaWYgKCF0YXNrLnRpdGxlKSB7XG4gICAgICAgICRzY29wZS5yZW1vdmUodGFzayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dnZXIubG9nKCdUYXNrIHVwZGF0ZWQnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrU3RvcmFnZS5wdXQodGFza3MpO1xuICAgIH07XG4gICAgJHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgIHZhciBpbmRleDtcbiAgICAgICRzY29wZS5yZW1haW5pbmdDb3VudCAtPSB0YXNrLmNvbXBsZXRlZCA/IDAgOiAxO1xuICAgICAgaW5kZXggPSAkc2NvcGUudGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICRzY29wZS50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGFza1N0b3JhZ2UucHV0KHRhc2tzKTtcbiAgICAgIHJldHVybiBsb2dnZXIubG9nRXJyb3IoJ1Rhc2sgcmVtb3ZlZCcpO1xuICAgIH07XG4gICAgJHNjb3BlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICRzY29wZS5yZW1haW5pbmdDb3VudCArPSB0YXNrLmNvbXBsZXRlZCA/IC0xIDogMTtcbiAgICAgIHRhc2tTdG9yYWdlLnB1dCh0YXNrcyk7XG4gICAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKCRzY29wZS5yZW1haW5pbmdDb3VudCA+IDApIHtcbiAgICAgICAgICBpZiAoJHNjb3BlLnJlbWFpbmluZ0NvdW50ID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZygnQWxtb3N0IHRoZXJlISBPbmx5ICcgKyAkc2NvcGUucmVtYWluaW5nQ291bnQgKyAnIHRhc2sgbGVmdCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZygnR29vZCBqb2IhIE9ubHkgJyArICRzY29wZS5yZW1haW5pbmdDb3VudCArICcgdGFza3MgbGVmdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZ1N1Y2Nlc3MoJ0NvbmdyYXRzISBBbGwgZG9uZSA6KScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUuY2xlYXJDb21wbGV0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS50YXNrcyA9IHRhc2tzID0gdGFza3MuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICByZXR1cm4gIXZhbC5jb21wbGV0ZWQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0YXNrU3RvcmFnZS5wdXQodGFza3MpO1xuICAgIH07XG4gICAgJHNjb3BlLm1hcmtBbGwgPSBmdW5jdGlvbihjb21wbGV0ZWQpIHtcbiAgICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24odGFzaykge1xuICAgICAgICByZXR1cm4gdGFzay5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgICB9KTtcbiAgICAgICRzY29wZS5yZW1haW5pbmdDb3VudCA9IGNvbXBsZXRlZCA/IDAgOiB0YXNrcy5sZW5ndGg7XG4gICAgICB0YXNrU3RvcmFnZS5wdXQodGFza3MpO1xuICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZ1N1Y2Nlc3MoJ0NvbmdyYXRzISBBbGwgZG9uZSA6KScpO1xuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLiR3YXRjaCgncmVtYWluaW5nQ291bnQgPT0gMCcsIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuICRzY29wZS5hbGxDaGVja2VkID0gdmFsO1xuICAgIH0pO1xuICAgIHJldHVybiAkc2NvcGUuJHdhdGNoKCdyZW1haW5pbmdDb3VudCcsIGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICByZXR1cm4gJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd0YXNrUmVtYWluaW5nOmNoYW5nZWQnLCBuZXdWYWwpO1xuICAgIH0pO1xuICB9XG5dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAuZGlyZWN0aXZlcycsIFtdKS5kaXJlY3RpdmUoJ2ltZ0hvbGRlcicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICByZXR1cm4gSG9sZGVyLnJ1bih7XG4gICAgICAgICAgaW1hZ2VzOiBlbGVbMF1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdjdXN0b21CYWNrZ3JvdW5kJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgIGNvbnRyb2xsZXI6IFtcbiAgICAgICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGxvY2F0aW9uKSB7XG4gICAgICAgIHZhciBhZGRCZywgcGF0aDtcbiAgICAgICAgcGF0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAkbG9jYXRpb24ucGF0aCgpO1xuICAgICAgICB9O1xuICAgICAgICBhZGRCZyA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcygnYm9keS1ob21lIGJvZHktc3BlY2lhbCBib2R5LXRhc2tzIGJvZHktbG9jaycpO1xuICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgIHJldHVybiAkZWxlbWVudC5hZGRDbGFzcygnYm9keS1ob21lJyk7XG4gICAgICAgICAgICBjYXNlICcvNDA0JzpcbiAgICAgICAgICAgIGNhc2UgJy9wYWdlcy81MDAnOlxuICAgICAgICAgICAgY2FzZSAnL3BhZ2VzL3NpZ25pbic6XG4gICAgICAgICAgICBjYXNlICcvcGFnZXMvc2lnbnVwJzpcbiAgICAgICAgICAgIGNhc2UgJy9wYWdlcy9mb3Jnb3QnOlxuICAgICAgICAgICAgICByZXR1cm4gJGVsZW1lbnQuYWRkQ2xhc3MoJ2JvZHktc3BlY2lhbCcpO1xuICAgICAgICAgICAgY2FzZSAnL3BhZ2VzL2xvY2stc2NyZWVuJzpcbiAgICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50LmFkZENsYXNzKCdib2R5LXNwZWNpYWwgYm9keS1sb2NrJyk7XG4gICAgICAgICAgICBjYXNlICcvdGFza3MnOlxuICAgICAgICAgICAgICByZXR1cm4gJGVsZW1lbnQuYWRkQ2xhc3MoJ2JvZHktdGFza3MnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFkZEJnKCRsb2NhdGlvbi5wYXRoKCkpO1xuICAgICAgICByZXR1cm4gJHNjb3BlLiR3YXRjaChwYXRoLCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICAgIGlmIChuZXdWYWwgPT09IG9sZFZhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWRkQmcoJGxvY2F0aW9uLnBhdGgoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn0pLmRpcmVjdGl2ZSgndWlDb2xvclN3aXRjaCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICByZXR1cm4gZWxlLmZpbmQoJy5jb2xvci1vcHRpb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciAkdGhpcywgaHJlZlVybCwgc3R5bGU7XG4gICAgICAgICAgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIGhyZWZVcmwgPSB2b2lkIDA7XG4gICAgICAgICAgc3R5bGUgPSAkdGhpcy5kYXRhKCdzdHlsZScpO1xuICAgICAgICAgIGlmIChzdHlsZSA9PT0gJ2xvdWxvdScpIHtcbiAgICAgICAgICAgIGhyZWZVcmwgPSAnc3R5bGVzL21haW4uY3NzJztcbiAgICAgICAgICAgICQoJ2xpbmtbaHJlZl49XCJzdHlsZXMvbWFpblwiXScpLmF0dHIoJ2hyZWYnLCBocmVmVXJsKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICBzdHlsZSA9ICctJyArIHN0eWxlO1xuICAgICAgICAgICAgaHJlZlVybCA9ICdzdHlsZXMvbWFpbicgKyBzdHlsZSArICcuY3NzJztcbiAgICAgICAgICAgICQoJ2xpbmtbaHJlZl49XCJzdHlsZXMvbWFpblwiXScpLmF0dHIoJ2hyZWYnLCBocmVmVXJsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCd0b2dnbGVNaW5OYXYnLCBbXG4gICckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHJvb3RTY29wZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyICRjb250ZW50LCAkbmF2LCAkd2luZG93LCBUaW1lciwgYXBwLCB1cGRhdGVDbGFzcztcbiAgICAgICAgYXBwID0gJCgnI2FwcCcpO1xuICAgICAgICAkd2luZG93ID0gJCh3aW5kb3cpO1xuICAgICAgICAkbmF2ID0gJCgnI25hdi1jb250YWluZXInKTtcbiAgICAgICAgJGNvbnRlbnQgPSAkKCcjY29udGVudCcpO1xuICAgICAgICBlbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmIChhcHAuaGFzQ2xhc3MoJ25hdi1taW4nKSkge1xuICAgICAgICAgICAgYXBwLnJlbW92ZUNsYXNzKCduYXYtbWluJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcC5hZGRDbGFzcygnbmF2LW1pbicpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdtaW5OYXY6ZW5hYmxlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgVGltZXIgPSB2b2lkIDA7XG4gICAgICAgIHVwZGF0ZUNsYXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHdpZHRoO1xuICAgICAgICAgIHdpZHRoID0gJHdpbmRvdy53aWR0aCgpO1xuICAgICAgICAgIGlmICh3aWR0aCA8IDc2OCkge1xuICAgICAgICAgICAgcmV0dXJuIGFwcC5yZW1vdmVDbGFzcygnbmF2LW1pbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICR3aW5kb3cucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0O1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgICByZXR1cm4gdCA9IHNldFRpbWVvdXQodXBkYXRlQ2xhc3MsIDMwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnY29sbGFwc2VOYXYnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyICRhLCAkYVJlc3QsICRsaXN0cywgJGxpc3RzUmVzdCwgYXBwO1xuICAgICAgICAkbGlzdHMgPSBlbGUuZmluZCgndWwnKS5wYXJlbnQoJ2xpJyk7XG4gICAgICAgICRsaXN0cy5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtcmlnaHQgaWNvbi1oYXMtdWxcIj48L2k+Jyk7XG4gICAgICAgICRhID0gJGxpc3RzLmNoaWxkcmVuKCdhJyk7XG4gICAgICAgICRsaXN0c1Jlc3QgPSBlbGUuY2hpbGRyZW4oJ2xpJykubm90KCRsaXN0cyk7XG4gICAgICAgICRhUmVzdCA9ICRsaXN0c1Jlc3QuY2hpbGRyZW4oJ2EnKTtcbiAgICAgICAgYXBwID0gJCgnI2FwcCcpO1xuICAgICAgICAkYS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciAkcGFyZW50LCAkdGhpcztcbiAgICAgICAgICBpZiAoYXBwLmhhc0NsYXNzKCduYXYtbWluJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICRwYXJlbnQgPSAkdGhpcy5wYXJlbnQoJ2xpJyk7XG4gICAgICAgICAgJGxpc3RzLm5vdCgkcGFyZW50KS5yZW1vdmVDbGFzcygnb3BlbicpLmZpbmQoJ3VsJykuc2xpZGVVcCgpO1xuICAgICAgICAgICRwYXJlbnQudG9nZ2xlQ2xhc3MoJ29wZW4nKS5maW5kKCd1bCcpLnN0b3AoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJGFSZXN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuICRsaXN0cy5yZW1vdmVDbGFzcygnb3BlbicpLmZpbmQoJ3VsJykuc2xpZGVVcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNjb3BlLiRvbignbWluTmF2OmVuYWJsZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHJldHVybiAkbGlzdHMucmVtb3ZlQ2xhc3MoJ29wZW4nKS5maW5kKCd1bCcpLnNsaWRlVXAoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdoaWdobGlnaHRBY3RpdmUnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICBjb250cm9sbGVyOiBbXG4gICAgICAgICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJGxvY2F0aW9uKSB7XG4gICAgICAgICAgdmFyIGhpZ2hsaWdodEFjdGl2ZSwgbGlua3MsIHBhdGg7XG4gICAgICAgICAgbGlua3MgPSAkZWxlbWVudC5maW5kKCdhJyk7XG4gICAgICAgICAgcGF0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRsb2NhdGlvbi5wYXRoKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBoaWdobGlnaHRBY3RpdmUgPSBmdW5jdGlvbihsaW5rcywgcGF0aCkge1xuICAgICAgICAgICAgcGF0aCA9ICcjJyArIHBhdGg7XG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhci5mb3JFYWNoKGxpbmtzLCBmdW5jdGlvbihsaW5rKSB7XG4gICAgICAgICAgICAgIHZhciAkbGksICRsaW5rLCBocmVmO1xuICAgICAgICAgICAgICAkbGluayA9IGFuZ3VsYXIuZWxlbWVudChsaW5rKTtcbiAgICAgICAgICAgICAgJGxpID0gJGxpbmsucGFyZW50KCdsaScpO1xuICAgICAgICAgICAgICBocmVmID0gJGxpbmsuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICBpZiAoJGxpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICRsaS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihocmVmKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkbGkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGhpZ2hsaWdodEFjdGl2ZShsaW5rcywgJGxvY2F0aW9uLnBhdGgoKSk7XG4gICAgICAgICAgcmV0dXJuICRzY29wZS4kd2F0Y2gocGF0aCwgZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IG9sZFZhbCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGlnaGxpZ2h0QWN0aXZlKGxpbmtzLCAkbG9jYXRpb24ucGF0aCgpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndG9nZ2xlT2ZmQ2FudmFzJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHJldHVybiBlbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICQoJyNhcHAnKS50b2dnbGVDbGFzcygnb24tY2FudmFzJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnc2xpbVNjcm9sbCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICByZXR1cm4gZWxlLnNsaW1TY3JvbGwoe1xuICAgICAgICAgIGhlaWdodDogYXR0cnMuc2Nyb2xsSGVpZ2h0IHx8ICcxMDAlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ2dvQmFjaycsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICAgIGNvbnRyb2xsZXI6IFtcbiAgICAgICAgJyRzY29wZScsICckZWxlbWVudCcsICckd2luZG93JywgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJHdpbmRvdykge1xuICAgICAgICAgIHJldHVybiAkZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLmxvY2FsaXphdGlvbicsIFtdKS5mYWN0b3J5KCdsb2NhbGl6ZScsIFtcbiAgJyRodHRwJywgJyRyb290U2NvcGUnLCAnJHdpbmRvdycsIGZ1bmN0aW9uKCRodHRwLCAkcm9vdFNjb3BlLCAkd2luZG93KSB7XG4gICAgdmFyIGxvY2FsaXplO1xuICAgIGxvY2FsaXplID0ge1xuICAgICAgbGFuZ3VhZ2U6ICcnLFxuICAgICAgdXJsOiB2b2lkIDAsXG4gICAgICByZXNvdXJjZUZpbGVMb2FkZWQ6IGZhbHNlLFxuICAgICAgc3VjY2Vzc0NhbGxiYWNrOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGxvY2FsaXplLmRpY3Rpb25hcnkgPSBkYXRhO1xuICAgICAgICBsb2NhbGl6ZS5yZXNvdXJjZUZpbGVMb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdsb2NhbGl6ZVJlc291cmNlc1VwZGF0ZWQnKTtcbiAgICAgIH0sXG4gICAgICBzZXRMYW5ndWFnZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgbG9jYWxpemUubGFuZ3VhZ2UgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiLVwiKVswXTtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmluaXRMb2NhbGl6ZWRSZXNvdXJjZXMoKTtcbiAgICAgIH0sXG4gICAgICBzZXRVcmw6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGxvY2FsaXplLnVybCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbG9jYWxpemUuaW5pdExvY2FsaXplZFJlc291cmNlcygpO1xuICAgICAgfSxcbiAgICAgIGJ1aWxkVXJsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFsb2NhbGl6ZS5sYW5ndWFnZSkge1xuICAgICAgICAgIGxvY2FsaXplLmxhbmd1YWdlID0gKCR3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZSB8fCAkd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBsb2NhbGl6ZS5sYW5ndWFnZSA9IGxvY2FsaXplLmxhbmd1YWdlLnNwbGl0KFwiLVwiKVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2kxOG4vcmVzb3VyY2VzLWxvY2FsZV8nICsgbG9jYWxpemUubGFuZ3VhZ2UgKyAnLmpzJztcbiAgICAgIH0sXG4gICAgICBpbml0TG9jYWxpemVkUmVzb3VyY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVybDtcbiAgICAgICAgdXJsID0gbG9jYWxpemUudXJsIHx8IGxvY2FsaXplLmJ1aWxkVXJsKCk7XG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgIGNhY2hlOiBmYWxzZVxuICAgICAgICB9KS5zdWNjZXNzKGxvY2FsaXplLnN1Y2Nlc3NDYWxsYmFjaykuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbG9jYWxpemVSZXNvdXJjZXNVcGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldExvY2FsaXplZFN0cmluZzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCwgdmFsdWVMb3dlckNhc2U7XG4gICAgICAgIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGxvY2FsaXplLmRpY3Rpb25hcnkgJiYgdmFsdWUpIHtcbiAgICAgICAgICB2YWx1ZUxvd2VyQ2FzZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKGxvY2FsaXplLmRpY3Rpb25hcnlbdmFsdWVMb3dlckNhc2VdID09PSAnJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxvY2FsaXplLmRpY3Rpb25hcnlbdmFsdWVMb3dlckNhc2VdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGxvY2FsaXplO1xuICB9XG5dKS5kaXJlY3RpdmUoJ2kxOG4nLCBbXG4gICdsb2NhbGl6ZScsIGZ1bmN0aW9uKGxvY2FsaXplKSB7XG4gICAgdmFyIGkxOG5EaXJlY3RpdmU7XG4gICAgaTE4bkRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiBcIkVBXCIsXG4gICAgICB1cGRhdGVUZXh0OiBmdW5jdGlvbihlbGUsIGlucHV0LCBwbGFjZWhvbGRlcikge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICByZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIGlmIChpbnB1dCA9PT0gJ2kxOG4tcGxhY2Vob2xkZXInKSB7XG4gICAgICAgICAgcmVzdWx0ID0gbG9jYWxpemUuZ2V0TG9jYWxpemVkU3RyaW5nKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICByZXR1cm4gZWxlLmF0dHIoJ3BsYWNlaG9sZGVyJywgcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5sZW5ndGggPj0gMSkge1xuICAgICAgICAgIHJlc3VsdCA9IGxvY2FsaXplLmdldExvY2FsaXplZFN0cmluZyhpbnB1dCk7XG4gICAgICAgICAgcmV0dXJuIGVsZS50ZXh0KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICBzY29wZS4kb24oJ2xvY2FsaXplUmVzb3VyY2VzVXBkYXRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpMThuRGlyZWN0aXZlLnVwZGF0ZVRleHQoZWxlLCBhdHRycy5pMThuLCBhdHRycy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXR0cnMuJG9ic2VydmUoJ2kxOG4nLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBpMThuRGlyZWN0aXZlLnVwZGF0ZVRleHQoZWxlLCB2YWx1ZSwgYXR0cnMucGxhY2Vob2xkZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBpMThuRGlyZWN0aXZlO1xuICB9XG5dKS5jb250cm9sbGVyKCdMYW5nQ3RybCcsIFtcbiAgJyRzY29wZScsICdsb2NhbGl6ZScsIGZ1bmN0aW9uKCRzY29wZSwgbG9jYWxpemUpIHtcbiAgICAkc2NvcGUubGFuZyA9ICdFbmdsaXNoJztcbiAgICAkc2NvcGUuc2V0TGFuZyA9IGZ1bmN0aW9uKGxhbmcpIHtcbiAgICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgICBjYXNlICdFbmdsaXNoJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnRU4tVVMnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRXNwYcOxb2wnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdFUy1FUycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICfml6XmnKzoqp4nOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdKQS1KUCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICfkuK3mlocnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdaSC1UVycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEZXV0c2NoJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnREUtREUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZnJhbsOnYWlzJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnRlItRlInKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSXRhbGlhbm8nOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdJVC1JVCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQb3J0dWdhbCc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ1BULUJSJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ9Cg0YPRgdGB0LrQuNC5INGP0LfRi9C6JzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnUlUtUlUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAn7ZWc6rWt7Ja0JzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnS08tS1InKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkc2NvcGUubGFuZyA9IGxhbmc7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLmdldEZsYWcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsYW5nO1xuICAgICAgbGFuZyA9ICRzY29wZS5sYW5nO1xuICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgIGNhc2UgJ0VuZ2xpc2gnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtYW1lcmljYW4nO1xuICAgICAgICBjYXNlICdFc3Bhw7FvbCc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1zcGFpbic7XG4gICAgICAgIGNhc2UgJ+aXpeacrOiqnic6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1qYXBhbic7XG4gICAgICAgIGNhc2UgJ+S4reaWhyc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1jaGluYSc7XG4gICAgICAgIGNhc2UgJ0RldXRzY2gnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtZ2VybWFueSc7XG4gICAgICAgIGNhc2UgJ2ZyYW7Dp2Fpcyc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1mcmFuY2UnO1xuICAgICAgICBjYXNlICdJdGFsaWFubyc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1pdGFseSc7XG4gICAgICAgIGNhc2UgJ1BvcnR1Z2FsJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLXBvcnR1Z2FsJztcbiAgICAgICAgY2FzZSAn0KDRg9GB0YHQutC40Lkg0Y/Qt9GL0LonOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtcnVzc2lhJztcbiAgICAgICAgY2FzZSAn7ZWc6rWt7Ja0JzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWtvcmVhJztcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbXSkuY29udHJvbGxlcignQXBwQ3RybCcsIFtcbiAgJyRzY29wZScsICckbG9jYXRpb24nLCBmdW5jdGlvbigkc2NvcGUsICRsb2NhdGlvbikge1xuICAgICRzY29wZS5pc1NwZWNpZmljUGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBhdGg7XG4gICAgICBwYXRoID0gJGxvY2F0aW9uLnBhdGgoKTtcbiAgICAgIHJldHVybiBfLmNvbnRhaW5zKFsnLzQwNCcsICcvcGFnZXMvNTAwJywgJy9wYWdlcy9sb2dpbicsICcvcGFnZXMvc2lnbmluJywgJy9wYWdlcy9zaWduaW4xJywgJy9wYWdlcy9zaWduaW4yJywgJy9wYWdlcy9zaWdudXAnLCAnL3BhZ2VzL3NpZ251cDEnLCAnL3BhZ2VzL3NpZ251cDInLCAnL3BhZ2VzL2ZvcmdvdCcsICcvcGFnZXMvbG9jay1zY3JlZW4nXSwgcGF0aCk7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLm1haW4gPSB7XG4gICAgICBicmFuZDogJ0ludHJhbmV0JyxcbiAgICAgIG5hbWU6ICdBbmRyZXMgRGF2aWQgSmltZW5leicsXG4gICAgICBsb2dvOiAnaW1nL2xvZ28ucG5nJ1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ05hdkN0cmwnLCBbXG4gICckc2NvcGUnLCAndGFza1N0b3JhZ2UnLCAnZmlsdGVyRmlsdGVyJywgZnVuY3Rpb24oJHNjb3BlLCB0YXNrU3RvcmFnZSwgZmlsdGVyRmlsdGVyKSB7XG4gICAgdmFyIHRhc2tzO1xuICAgIHRhc2tzID0gJHNjb3BlLnRhc2tzID0gdGFza1N0b3JhZ2UuZ2V0KCk7XG4gICAgJHNjb3BlLnRhc2tSZW1haW5pbmdDb3VudCA9IGZpbHRlckZpbHRlcih0YXNrcywge1xuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0pLmxlbmd0aDtcbiAgICByZXR1cm4gJHNjb3BlLiRvbigndGFza1JlbWFpbmluZzpjaGFuZ2VkJywgZnVuY3Rpb24oZXZlbnQsIGNvdW50KSB7XG4gICAgICByZXR1cm4gJHNjb3BlLnRhc2tSZW1haW5pbmdDb3VudCA9IGNvdW50O1xuICAgIH0pO1xuICB9XG5dKS5jb250cm9sbGVyKCdEYXNoYm9hcmRDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHt9XSkuY29udHJvbGxlcignTW9kYWxBZ2VuZGFDdHJsJywgW1xuICAnJHNjb3BlJywgJyRtb2RhbCcsICckbG9nJywgZnVuY3Rpb24oJHNjb3BlLCAkbW9kYWwsICRsb2cpIHtcbiAgICAkc2NvcGUuaXRlbXMgPSBbXCJpdGVtMVwiLCBcIml0ZW0yXCIsIFwiaXRlbTNcIl07XG4gICAgJHNjb3BlLmNvbnRhY3RzID0gW107XG4gICAgJHNjb3BlLnNhdmVDb250YWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGlmICgkc2NvcGUubmV3Y29udGFjdC5pZCA9PT0gbnVsbCkge1xuICAgICAgICAkc2NvcGUubmV3Y29udGFjdC5pZCA9IHVpZCsrO1xuICAgICAgICAkc2NvcGUuY29udGFjdHMucHVzaCgkc2NvcGUubmV3Y29udGFjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgaW4gJHNjb3BlLmNvbnRhY3RzKSB7XG4gICAgICAgICAgaWYgKCRzY29wZS5jb250YWN0c1tpXS5pZCA9PT0gJHNjb3BlLm5ld2NvbnRhY3QuaWQpIHtcbiAgICAgICAgICAgICRzY29wZS5jb250YWN0c1tpXSA9ICRzY29wZS5uZXdjb250YWN0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHNjb3BlLm5ld2NvbnRhY3QgPSB7fTtcbiAgICB9O1xuICAgICRzY29wZVtcImRlbGV0ZVwiXSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvciAoaSBpbiAkc2NvcGUuY29udGFjdHMpIHtcbiAgICAgICAgaWYgKCRzY29wZS5jb250YWN0c1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAkc2NvcGUuY29udGFjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICRzY29wZS5uZXdjb250YWN0ID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5lZGl0ID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yIChpIGluICRzY29wZS5jb250YWN0cykge1xuICAgICAgICBpZiAoJHNjb3BlLmNvbnRhY3RzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICRzY29wZS5uZXdjb250YWN0ID0gYW5ndWxhci5jb3B5KCRzY29wZS5jb250YWN0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZTtcbiAgICAgIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiBcIm15TW9kYWxDb250ZW50Lmh0bWxcIixcbiAgICAgICAgY29udHJvbGxlcjogJ01vZGFsSW5zdGFuY2VDdHJsJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUuaXRlbXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oKGZ1bmN0aW9uKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAkc2NvcGUuc2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW07XG4gICAgICB9KSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICRsb2cuaW5mbyhcIk1vZGFsIGRpc21pc3NlZCBhdDogXCIgKyBuZXcgRGF0ZSgpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbl0pO1xuIiwiLyogalF1ZXJ5IEZsb3QgQW5pbWF0b3IgdmVyc2lvbiAxLjAuXG5cbkZsb3QgQW5pbWF0b3IgaXMgYSBmcmVlIGpRdWVyeSBQbHVnaW4gdGhhdCB3aWxsIGFkZCBmbHVpZCBhbmltYXRpb25zIHRvIEZsb3QgY2hhcnRzLlxuXG5Db3B5cmlnaHQgKGMpIDIwMTItMjAxMyBDaHRpd2kgTWFsZWtcbmh0dHA6Ly93d3cuY29kaWNvZGUuY29tL2FydC9qcXVlcnlfZmxvdF9hbmltYXRvci5hc3B4XG5cbkxpY2Vuc2VkIHVuZGVyIENyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24gMy4wIFVucG9ydGVkIExpY2Vuc2UuXG4qL1xuXG5ldmFsKGZ1bmN0aW9uKHAsYSxjLGssZSxkKXt3aGlsZShjLS0paWYoa1tjXSlwPXAucmVwbGFjZShuZXcgUmVnRXhwKCdcXFxcYicrYy50b1N0cmluZyhhKSsnXFxcXGInLCdnJyksa1tjXSk7cmV0dXJuIHA7fSgnJC4xbSh7MXc6YihlLHQsbil7YiBoKCl7MyBlPW9bMF1bMF07MyB0PW9bby44LTFdWzBdOzMgbj0odC1lKS9hOzMgcj1bXTtyLjYob1swXSk7MyBpPTE7Nz1vWzBdOzQ9b1tpXTtxKDMgcz1lK247czx0K247cys9bil7OShzPnQpe3M9dH0kKFwiIzE4XCIpLjE5KHMpOzFhKHM+NFswXSl7Nz00OzQ9b1tpKytdfTkocz09NFswXSl7ci42KFtzLDRbMV1dKTs3PTQ7ND1vW2krK119MTF7MyB1PSg0WzFdLTdbMV0pLyg0WzBdLTdbMF0pOzE2PXUqcysoN1sxXS11KjdbMF0pO3IuNihbcywxNl0pfX1qIHJ9YiB2KCl7MyBuPVtdO3ArKzsxYihjKXsxNFwiMWNcIjpuPWQudygtMSpwKTt5OzE0XCIxaFwiOm49ZC53KGQuOC8yLXAvMixkLjgvMitwLzIpO3k7MWQ6bj1kLncoMCxwKTt5fTkoIXUpezEzPW5bMF1bMF07MTI9bltuLjgtMV1bMF07bj1bXTtxKDMgaT0wO2k8by44O2krKyl7OShvW2ldWzBdPj0xMyYmb1tpXVswXTw9MTIpe24uNihvW2ldKX19fXRbcl0ueD1wPGE/bjpvO2cuMWoodCk7Zy4xaSgpOzkocDxhKXsxNSh2LGYvYSl9MTF7ZS4xZyhcIjFmXCIpfX1iIG0oaSl7MyBzPVtdO3MuNihbaVswXVswXSxrLjFlLjEwKGssaS56KGIoZSl7aiBlWzFdfSkpXSk7cy42KFtpWzBdWzBdLDE3XSk7cy42KFtpWzBdWzBdLGsuMWsuMTAoayxpLnooYihlKXtqIGVbMV19KSldKTtxKDMgbz0wO288aS44O28rKyl7cy42KFtpW29dWzBdLDE3XSl9dFtyXS54PXM7aiAkLjFsKGUsdCxuKX0zIHI9MDtxKDMgaT0wO2k8dC44O2krKyl7OSh0W2ldLjUpe3I9aX19MyBzPXRbcl07MyBvPXMueDszIHU9dFtyXS4xdj8xeDoxdDszIGE9dFtyXS41JiZ0W3JdLjUuMXJ8fDFxOzMgZj10W3JdLjUmJnRbcl0uNS4xcHx8MW87MyBsPXRbcl0uNSYmdFtyXS41LjFufHwwOzMgYz10W3JdLjUmJnRbcl0uNS4xdXx8XCIxc1wiOzMgcD0wOzMgZD1oKCk7MyBnPW0obyk7MTUodixsKTtqIGd9fSknLDM2LDcwLCd8fHx2YXJ8blBvaW50fGFuaW1hdG9yfHB1c2h8bFBvaW50fGxlbmd0aHxpZnx8ZnVuY3Rpb258fHx8fHx8fHJldHVybnxNYXRofHx8fHx8Zm9yfHx8fHx8c2xpY2V8ZGF0YXxicmVha3xtYXB8YXBwbHl8ZWxzZXxsYVZ8aW5WfGNhc2V8c2V0VGltZW91dHxjdXJWfG51bGx8bTJ8aHRtbHx3aGlsZXxzd2l0Y2h8bGVmdHxkZWZhdWx0fG1heHxhbmltYXRvckNvbXBsZXRlfHRyaWdnZXJ8Y2VudGVyfGRyYXd8c2V0RGF0YXxtaW58cGxvdHxleHRlbmR8c3RhcnR8MWUzfGR1cmF0aW9ufDEzNXxzdGVwc3xyaWdodHxmYWxzZXxkaXJlY3Rpb258bGluZXN8cGxvdEFuaW1hdG9yfHRydWUnLnNwbGl0KCd8JykpKVxuIiwiLyoganF1ZXJ5LnNwYXJrbGluZSAyLjEuMiAtIGh0dHA6Ly9vbW5pcG90ZW50Lm5ldC9qcXVlcnkuc3BhcmtsaW5lLyBcbioqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UgLSBzZWUgYWJvdmUgc2l0ZSBmb3IgZGV0YWlscyAqL1xuXG4oZnVuY3Rpb24oYSxiLGMpeyhmdW5jdGlvbihhKXt0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTpqUXVlcnkmJiFqUXVlcnkuZm4uc3BhcmtsaW5lJiZhKGpRdWVyeSl9KShmdW5jdGlvbihkKXtcInVzZSBzdHJpY3RcIjt2YXIgZT17fSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1LHYsdyx4LHkseixBLEIsQyxELEUsRixHLEgsSSxKLEssTD0wO2Y9ZnVuY3Rpb24oKXtyZXR1cm57Y29tbW9uOnt0eXBlOlwibGluZVwiLGxpbmVDb2xvcjpcIiMwMGZcIixmaWxsQ29sb3I6XCIjY2RmXCIsZGVmYXVsdFBpeGVsc1BlclZhbHVlOjMsd2lkdGg6XCJhdXRvXCIsaGVpZ2h0OlwiYXV0b1wiLGNvbXBvc2l0ZTohMSx0YWdWYWx1ZXNBdHRyaWJ1dGU6XCJ2YWx1ZXNcIix0YWdPcHRpb25zUHJlZml4Olwic3BhcmtcIixlbmFibGVUYWdPcHRpb25zOiExLGVuYWJsZUhpZ2hsaWdodDohMCxoaWdobGlnaHRMaWdodGVuOjEuNCx0b29sdGlwU2tpcE51bGw6ITAsdG9vbHRpcFByZWZpeDpcIlwiLHRvb2x0aXBTdWZmaXg6XCJcIixkaXNhYmxlSGlkZGVuQ2hlY2s6ITEsbnVtYmVyRm9ybWF0dGVyOiExLG51bWJlckRpZ2l0R3JvdXBDb3VudDozLG51bWJlckRpZ2l0R3JvdXBTZXA6XCIsXCIsbnVtYmVyRGVjaW1hbE1hcms6XCIuXCIsZGlzYWJsZVRvb2x0aXBzOiExLGRpc2FibGVJbnRlcmFjdGlvbjohMX0sbGluZTp7c3BvdENvbG9yOlwiI2Y4MFwiLGhpZ2hsaWdodFNwb3RDb2xvcjpcIiM1ZjVcIixoaWdobGlnaHRMaW5lQ29sb3I6XCIjZjIyXCIsc3BvdFJhZGl1czoxLjUsbWluU3BvdENvbG9yOlwiI2Y4MFwiLG1heFNwb3RDb2xvcjpcIiNmODBcIixsaW5lV2lkdGg6MSxub3JtYWxSYW5nZU1pbjpjLG5vcm1hbFJhbmdlTWF4OmMsbm9ybWFsUmFuZ2VDb2xvcjpcIiNjY2NcIixkcmF3Tm9ybWFsT25Ub3A6ITEsY2hhcnRSYW5nZU1pbjpjLGNoYXJ0UmFuZ2VNYXg6YyxjaGFydFJhbmdlTWluWDpjLGNoYXJ0UmFuZ2VNYXhYOmMsdG9vbHRpcEZvcm1hdDpuZXcgaCgnPHNwYW4gc3R5bGU9XCJjb2xvcjoge3tjb2xvcn19XCI+JiM5Njc5Ozwvc3Bhbj4ge3twcmVmaXh9fXt7eX19e3tzdWZmaXh9fScpfSxiYXI6e2JhckNvbG9yOlwiIzMzNjZjY1wiLG5lZ0JhckNvbG9yOlwiI2Y0NFwiLHN0YWNrZWRCYXJDb2xvcjpbXCIjMzM2NmNjXCIsXCIjZGMzOTEyXCIsXCIjZmY5OTAwXCIsXCIjMTA5NjE4XCIsXCIjNjZhYTAwXCIsXCIjZGQ0NDc3XCIsXCIjMDA5OWM2XCIsXCIjOTkwMDk5XCJdLHplcm9Db2xvcjpjLG51bGxDb2xvcjpjLHplcm9BeGlzOiEwLGJhcldpZHRoOjQsYmFyU3BhY2luZzoxLGNoYXJ0UmFuZ2VNYXg6YyxjaGFydFJhbmdlTWluOmMsY2hhcnRSYW5nZUNsaXA6ITEsY29sb3JNYXA6Yyx0b29sdGlwRm9ybWF0Om5ldyBoKCc8c3BhbiBzdHlsZT1cImNvbG9yOiB7e2NvbG9yfX1cIj4mIzk2Nzk7PC9zcGFuPiB7e3ByZWZpeH19e3t2YWx1ZX19e3tzdWZmaXh9fScpfSx0cmlzdGF0ZTp7YmFyV2lkdGg6NCxiYXJTcGFjaW5nOjEscG9zQmFyQ29sb3I6XCIjNmY2XCIsbmVnQmFyQ29sb3I6XCIjZjQ0XCIsemVyb0JhckNvbG9yOlwiIzk5OVwiLGNvbG9yTWFwOnt9LHRvb2x0aXBGb3JtYXQ6bmV3IGgoJzxzcGFuIHN0eWxlPVwiY29sb3I6IHt7Y29sb3J9fVwiPiYjOTY3OTs8L3NwYW4+IHt7dmFsdWU6bWFwfX0nKSx0b29sdGlwVmFsdWVMb29rdXBzOnttYXA6e1wiLTFcIjpcIkxvc3NcIiwwOlwiRHJhd1wiLDE6XCJXaW5cIn19fSxkaXNjcmV0ZTp7bGluZUhlaWdodDpcImF1dG9cIix0aHJlc2hvbGRDb2xvcjpjLHRocmVzaG9sZFZhbHVlOjAsY2hhcnRSYW5nZU1heDpjLGNoYXJ0UmFuZ2VNaW46YyxjaGFydFJhbmdlQ2xpcDohMSx0b29sdGlwRm9ybWF0Om5ldyBoKFwie3twcmVmaXh9fXt7dmFsdWV9fXt7c3VmZml4fX1cIil9LGJ1bGxldDp7dGFyZ2V0Q29sb3I6XCIjZjMzXCIsdGFyZ2V0V2lkdGg6MyxwZXJmb3JtYW5jZUNvbG9yOlwiIzMzZlwiLHJhbmdlQ29sb3JzOltcIiNkM2RhZmVcIixcIiNhOGI2ZmZcIixcIiM3Zjk0ZmZcIl0sYmFzZTpjLHRvb2x0aXBGb3JtYXQ6bmV3IGgoXCJ7e2ZpZWxka2V5OmZpZWxkc319IC0ge3t2YWx1ZX19XCIpLHRvb2x0aXBWYWx1ZUxvb2t1cHM6e2ZpZWxkczp7cjpcIlJhbmdlXCIscDpcIlBlcmZvcm1hbmNlXCIsdDpcIlRhcmdldFwifX19LHBpZTp7b2Zmc2V0OjAsc2xpY2VDb2xvcnM6W1wiIzMzNjZjY1wiLFwiI2RjMzkxMlwiLFwiI2ZmOTkwMFwiLFwiIzEwOTYxOFwiLFwiIzY2YWEwMFwiLFwiI2RkNDQ3N1wiLFwiIzAwOTljNlwiLFwiIzk5MDA5OVwiXSxib3JkZXJXaWR0aDowLGJvcmRlckNvbG9yOlwiIzAwMFwiLHRvb2x0aXBGb3JtYXQ6bmV3IGgoJzxzcGFuIHN0eWxlPVwiY29sb3I6IHt7Y29sb3J9fVwiPiYjOTY3OTs8L3NwYW4+IHt7dmFsdWV9fSAoe3twZXJjZW50LjF9fSUpJyl9LGJveDp7cmF3OiExLGJveExpbmVDb2xvcjpcIiMwMDBcIixib3hGaWxsQ29sb3I6XCIjY2RmXCIsd2hpc2tlckNvbG9yOlwiIzAwMFwiLG91dGxpZXJMaW5lQ29sb3I6XCIjMzMzXCIsb3V0bGllckZpbGxDb2xvcjpcIiNmZmZcIixtZWRpYW5Db2xvcjpcIiNmMDBcIixzaG93T3V0bGllcnM6ITAsb3V0bGllcklRUjoxLjUsc3BvdFJhZGl1czoxLjUsdGFyZ2V0OmMsdGFyZ2V0Q29sb3I6XCIjNGEyXCIsY2hhcnRSYW5nZU1heDpjLGNoYXJ0UmFuZ2VNaW46Yyx0b29sdGlwRm9ybWF0Om5ldyBoKFwie3tmaWVsZDpmaWVsZHN9fToge3t2YWx1ZX19XCIpLHRvb2x0aXBGb3JtYXRGaWVsZGxpc3RLZXk6XCJmaWVsZFwiLHRvb2x0aXBWYWx1ZUxvb2t1cHM6e2ZpZWxkczp7bHE6XCJMb3dlciBRdWFydGlsZVwiLG1lZDpcIk1lZGlhblwiLHVxOlwiVXBwZXIgUXVhcnRpbGVcIixsbzpcIkxlZnQgT3V0bGllclwiLHJvOlwiUmlnaHQgT3V0bGllclwiLGx3OlwiTGVmdCBXaGlza2VyXCIscnc6XCJSaWdodCBXaGlza2VyXCJ9fX19fSxFPScuanFzdG9vbHRpcCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwcHg7dG9wOiAwcHg7dmlzaWJpbGl0eTogaGlkZGVuO2JhY2tncm91bmQ6IHJnYigwLCAwLCAwKSB0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPSM5OTAwMDAwMCwgZW5kQ29sb3JzdHI9Izk5MDAwMDAwKTstbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPSM5OTAwMDAwMCwgZW5kQ29sb3JzdHI9Izk5MDAwMDAwKVwiO2NvbG9yOiB3aGl0ZTtmb250OiAxMHB4IGFyaWFsLCBzYW4gc2VyaWY7dGV4dC1hbGlnbjogbGVmdDt3aGl0ZS1zcGFjZTogbm93cmFwO3BhZGRpbmc6IDVweDtib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTt6LWluZGV4OiAxMDAwMDt9Lmpxc2ZpZWxkIHsgY29sb3I6IHdoaXRlO2ZvbnQ6IDEwcHggYXJpYWwsIHNhbiBzZXJpZjt0ZXh0LWFsaWduOiBsZWZ0O30nLGc9ZnVuY3Rpb24oKXt2YXIgYSxiO3JldHVybiBhPWZ1bmN0aW9uKCl7dGhpcy5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYXJndW1lbnRzLmxlbmd0aD4xPyhhcmd1bWVudHNbMF0/KGEucHJvdG90eXBlPWQuZXh0ZW5kKG5ldyBhcmd1bWVudHNbMF0sYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGgtMV0pLGEuX3N1cGVyPWFyZ3VtZW50c1swXS5wcm90b3R5cGUpOmEucHJvdG90eXBlPWFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoLTFdLGFyZ3VtZW50cy5sZW5ndGg+MiYmKGI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEsLTEpLGIudW5zaGlmdChhLnByb3RvdHlwZSksZC5leHRlbmQuYXBwbHkoZCxiKSkpOmEucHJvdG90eXBlPWFyZ3VtZW50c1swXSxhLnByb3RvdHlwZS5jbHM9YSxhfSxkLlNQRm9ybWF0Q2xhc3M9aD1nKHtmcmU6L1xce1xceyhbXFx3Ll0rPykoOiguKz8pKT9cXH1cXH0vZyxwcmVjcmU6LyhcXHcrKVxcLihcXGQrKS8saW5pdDpmdW5jdGlvbihhLGIpe3RoaXMuZm9ybWF0PWEsdGhpcy5mY2xhc3M9Yn0scmVuZGVyOmZ1bmN0aW9uKGEsYixkKXt2YXIgZT10aGlzLGY9YSxnLGgsaSxqLGs7cmV0dXJuIHRoaXMuZm9ybWF0LnJlcGxhY2UodGhpcy5mcmUsZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gaD1hcmd1bWVudHNbMV0saT1hcmd1bWVudHNbM10sZz1lLnByZWNyZS5leGVjKGgpLGc/KGs9Z1syXSxoPWdbMV0pOms9ITEsaj1mW2hdLGo9PT1jP1wiXCI6aSYmYiYmYltpXT8oYT1iW2ldLGEuZ2V0P2JbaV0uZ2V0KGopfHxqOmJbaV1bal18fGopOihuKGopJiYoZC5nZXQoXCJudW1iZXJGb3JtYXR0ZXJcIik/aj1kLmdldChcIm51bWJlckZvcm1hdHRlclwiKShqKTpqPXMoaixrLGQuZ2V0KFwibnVtYmVyRGlnaXRHcm91cENvdW50XCIpLGQuZ2V0KFwibnVtYmVyRGlnaXRHcm91cFNlcFwiKSxkLmdldChcIm51bWJlckRlY2ltYWxNYXJrXCIpKSksail9KX19KSxkLnNwZm9ybWF0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBoKGEsYil9LGk9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBhPGI/YjphPmM/YzphfSxqPWZ1bmN0aW9uKGEsYyl7dmFyIGQ7cmV0dXJuIGM9PT0yPyhkPWIuZmxvb3IoYS5sZW5ndGgvMiksYS5sZW5ndGglMj9hW2RdOihhW2QtMV0rYVtkXSkvMik6YS5sZW5ndGglMj8oZD0oYS5sZW5ndGgqYytjKS80LGQlMT8oYVtiLmZsb29yKGQpXSthW2IuZmxvb3IoZCktMV0pLzI6YVtkLTFdKTooZD0oYS5sZW5ndGgqYysyKS80LGQlMT8oYVtiLmZsb29yKGQpXSthW2IuZmxvb3IoZCktMV0pLzI6YVtkLTFdKX0saz1mdW5jdGlvbihhKXt2YXIgYjtzd2l0Y2goYSl7Y2FzZVwidW5kZWZpbmVkXCI6YT1jO2JyZWFrO2Nhc2VcIm51bGxcIjphPW51bGw7YnJlYWs7Y2FzZVwidHJ1ZVwiOmE9ITA7YnJlYWs7Y2FzZVwiZmFsc2VcIjphPSExO2JyZWFrO2RlZmF1bHQ6Yj1wYXJzZUZsb2F0KGEpLGE9PWImJihhPWIpfXJldHVybiBhfSxsPWZ1bmN0aW9uKGEpe3ZhciBiLGM9W107Zm9yKGI9YS5sZW5ndGg7Yi0tOyljW2JdPWsoYVtiXSk7cmV0dXJuIGN9LG09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9W107Zm9yKGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspYVtjXSE9PWImJmUucHVzaChhW2NdKTtyZXR1cm4gZX0sbj1mdW5jdGlvbihhKXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdChhKSkmJmlzRmluaXRlKGEpfSxzPWZ1bmN0aW9uKGEsYixjLGUsZil7dmFyIGcsaDthPShiPT09ITE/cGFyc2VGbG9hdChhKS50b1N0cmluZygpOmEudG9GaXhlZChiKSkuc3BsaXQoXCJcIiksZz0oZz1kLmluQXJyYXkoXCIuXCIsYSkpPDA/YS5sZW5ndGg6ZyxnPGEubGVuZ3RoJiYoYVtnXT1mKTtmb3IoaD1nLWM7aD4wO2gtPWMpYS5zcGxpY2UoaCwwLGUpO3JldHVybiBhLmpvaW4oXCJcIil9LG89ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2ZvcihkPWIubGVuZ3RoO2QtLTspe2lmKGMmJmJbZF09PT1udWxsKWNvbnRpbnVlO2lmKGJbZF0hPT1hKXJldHVybiExfXJldHVybiEwfSxwPWZ1bmN0aW9uKGEpe3ZhciBiPTAsYztmb3IoYz1hLmxlbmd0aDtjLS07KWIrPXR5cGVvZiBhW2NdPT1cIm51bWJlclwiP2FbY106MDtyZXR1cm4gYn0scj1mdW5jdGlvbihhKXtyZXR1cm4gZC5pc0FycmF5KGEpP2E6W2FdfSxxPWZ1bmN0aW9uKGIpe3ZhciBjO2EuY3JlYXRlU3R5bGVTaGVldD9hLmNyZWF0ZVN0eWxlU2hlZXQoKS5jc3NUZXh0PWI6KGM9YS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksYy50eXBlPVwidGV4dC9jc3NcIixhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChjKSxjW3R5cGVvZiBhLmJvZHkuc3R5bGUuV2Via2l0QXBwZWFyYW5jZT09XCJzdHJpbmdcIj9cImlubmVyVGV4dFwiOlwiaW5uZXJIVE1MXCJdPWIpfSxkLmZuLnNpbXBsZWRyYXc9ZnVuY3Rpb24oYixlLGYsZyl7dmFyIGgsaTtpZihmJiYoaD10aGlzLmRhdGEoXCJfanFzX3ZjYW52YXNcIikpKXJldHVybiBoO2lmKGQuZm4uc3BhcmtsaW5lLmNhbnZhcz09PSExKXJldHVybiExO2lmKGQuZm4uc3BhcmtsaW5lLmNhbnZhcz09PWMpe3ZhciBqPWEuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtpZighai5nZXRDb250ZXh0fHwhai5nZXRDb250ZXh0KFwiMmRcIikpe2lmKCFhLm5hbWVzcGFjZXN8fCEhYS5uYW1lc3BhY2VzLnYpcmV0dXJuIGQuZm4uc3BhcmtsaW5lLmNhbnZhcz0hMSwhMTthLm5hbWVzcGFjZXMuYWRkKFwidlwiLFwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTp2bWxcIixcIiNkZWZhdWx0I1ZNTFwiKSxkLmZuLnNwYXJrbGluZS5jYW52YXM9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIG5ldyBKKGEsYixjKX19ZWxzZSBkLmZuLnNwYXJrbGluZS5jYW52YXM9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIG5ldyBJKGEsYixjLGQpfX1yZXR1cm4gYj09PWMmJihiPWQodGhpcykuaW5uZXJXaWR0aCgpKSxlPT09YyYmKGU9ZCh0aGlzKS5pbm5lckhlaWdodCgpKSxoPWQuZm4uc3BhcmtsaW5lLmNhbnZhcyhiLGUsdGhpcyxnKSxpPWQodGhpcykuZGF0YShcIl9qcXNfbWhhbmRsZXJcIiksaSYmaS5yZWdpc3RlckNhbnZhcyhoKSxofSxkLmZuLmNsZWFyZHJhdz1mdW5jdGlvbigpe3ZhciBhPXRoaXMuZGF0YShcIl9qcXNfdmNhbnZhc1wiKTthJiZhLnJlc2V0KCl9LGQuUmFuZ2VNYXBDbGFzcz10PWcoe2luaXQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPVtdO2ZvcihiIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShiKSYmdHlwZW9mIGI9PVwic3RyaW5nXCImJmIuaW5kZXhPZihcIjpcIik+LTEmJihjPWIuc3BsaXQoXCI6XCIpLGNbMF09Y1swXS5sZW5ndGg9PT0wPy1JbmZpbml0eTpwYXJzZUZsb2F0KGNbMF0pLGNbMV09Y1sxXS5sZW5ndGg9PT0wP0luZmluaXR5OnBhcnNlRmxvYXQoY1sxXSksY1syXT1hW2JdLGQucHVzaChjKSk7dGhpcy5tYXA9YSx0aGlzLnJhbmdlbGlzdD1kfHwhMX0sZ2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMucmFuZ2VsaXN0LGQsZSxmO2lmKChmPXRoaXMubWFwW2FdKSE9PWMpcmV0dXJuIGY7aWYoYilmb3IoZD1iLmxlbmd0aDtkLS07KXtlPWJbZF07aWYoZVswXTw9YSYmZVsxXT49YSlyZXR1cm4gZVsyXX1yZXR1cm4gY319KSxkLnJhbmdlX21hcD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IHQoYSl9LHU9Zyh7aW5pdDpmdW5jdGlvbihhLGIpe3ZhciBjPWQoYSk7dGhpcy4kZWw9Yyx0aGlzLm9wdGlvbnM9Yix0aGlzLmN1cnJlbnRQYWdlWD0wLHRoaXMuY3VycmVudFBhZ2VZPTAsdGhpcy5lbD1hLHRoaXMuc3BsaXN0PVtdLHRoaXMudG9vbHRpcD1udWxsLHRoaXMub3Zlcj0hMSx0aGlzLmRpc3BsYXlUb29sdGlwcz0hYi5nZXQoXCJkaXNhYmxlVG9vbHRpcHNcIiksdGhpcy5oaWdobGlnaHRFbmFibGVkPSFiLmdldChcImRpc2FibGVIaWdobGlnaHRcIil9LHJlZ2lzdGVyU3BhcmtsaW5lOmZ1bmN0aW9uKGEpe3RoaXMuc3BsaXN0LnB1c2goYSksdGhpcy5vdmVyJiZ0aGlzLnVwZGF0ZURpc3BsYXkoKX0scmVnaXN0ZXJDYW52YXM6ZnVuY3Rpb24oYSl7dmFyIGI9ZChhLmNhbnZhcyk7dGhpcy5jYW52YXM9YSx0aGlzLiRjYW52YXM9YixiLm1vdXNlZW50ZXIoZC5wcm94eSh0aGlzLm1vdXNlZW50ZXIsdGhpcykpLGIubW91c2VsZWF2ZShkLnByb3h5KHRoaXMubW91c2VsZWF2ZSx0aGlzKSksYi5jbGljayhkLnByb3h5KHRoaXMubW91c2VjbGljayx0aGlzKSl9LHJlc2V0OmZ1bmN0aW9uKGEpe3RoaXMuc3BsaXN0PVtdLHRoaXMudG9vbHRpcCYmYSYmKHRoaXMudG9vbHRpcC5yZW1vdmUoKSx0aGlzLnRvb2x0aXA9Yyl9LG1vdXNlY2xpY2s6ZnVuY3Rpb24oYSl7dmFyIGI9ZC5FdmVudChcInNwYXJrbGluZUNsaWNrXCIpO2Iub3JpZ2luYWxFdmVudD1hLGIuc3BhcmtsaW5lcz10aGlzLnNwbGlzdCx0aGlzLiRlbC50cmlnZ2VyKGIpfSxtb3VzZWVudGVyOmZ1bmN0aW9uKGIpe2QoYS5ib2R5KS51bmJpbmQoXCJtb3VzZW1vdmUuanFzXCIpLGQoYS5ib2R5KS5iaW5kKFwibW91c2Vtb3ZlLmpxc1wiLGQucHJveHkodGhpcy5tb3VzZW1vdmUsdGhpcykpLHRoaXMub3Zlcj0hMCx0aGlzLmN1cnJlbnRQYWdlWD1iLnBhZ2VYLHRoaXMuY3VycmVudFBhZ2VZPWIucGFnZVksdGhpcy5jdXJyZW50RWw9Yi50YXJnZXQsIXRoaXMudG9vbHRpcCYmdGhpcy5kaXNwbGF5VG9vbHRpcHMmJih0aGlzLnRvb2x0aXA9bmV3IHYodGhpcy5vcHRpb25zKSx0aGlzLnRvb2x0aXAudXBkYXRlUG9zaXRpb24oYi5wYWdlWCxiLnBhZ2VZKSksdGhpcy51cGRhdGVEaXNwbGF5KCl9LG1vdXNlbGVhdmU6ZnVuY3Rpb24oKXtkKGEuYm9keSkudW5iaW5kKFwibW91c2Vtb3ZlLmpxc1wiKTt2YXIgYj10aGlzLnNwbGlzdCxjPWIubGVuZ3RoLGU9ITEsZixnO3RoaXMub3Zlcj0hMSx0aGlzLmN1cnJlbnRFbD1udWxsLHRoaXMudG9vbHRpcCYmKHRoaXMudG9vbHRpcC5yZW1vdmUoKSx0aGlzLnRvb2x0aXA9bnVsbCk7Zm9yKGc9MDtnPGM7ZysrKWY9YltnXSxmLmNsZWFyUmVnaW9uSGlnaGxpZ2h0KCkmJihlPSEwKTtlJiZ0aGlzLmNhbnZhcy5yZW5kZXIoKX0sbW91c2Vtb3ZlOmZ1bmN0aW9uKGEpe3RoaXMuY3VycmVudFBhZ2VYPWEucGFnZVgsdGhpcy5jdXJyZW50UGFnZVk9YS5wYWdlWSx0aGlzLmN1cnJlbnRFbD1hLnRhcmdldCx0aGlzLnRvb2x0aXAmJnRoaXMudG9vbHRpcC51cGRhdGVQb3NpdGlvbihhLnBhZ2VYLGEucGFnZVkpLHRoaXMudXBkYXRlRGlzcGxheSgpfSx1cGRhdGVEaXNwbGF5OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5zcGxpc3QsYj1hLmxlbmd0aCxjPSExLGU9dGhpcy4kY2FudmFzLm9mZnNldCgpLGY9dGhpcy5jdXJyZW50UGFnZVgtZS5sZWZ0LGc9dGhpcy5jdXJyZW50UGFnZVktZS50b3AsaCxpLGosayxsO2lmKCF0aGlzLm92ZXIpcmV0dXJuO2ZvcihqPTA7ajxiO2orKylpPWFbal0saz1pLnNldFJlZ2lvbkhpZ2hsaWdodCh0aGlzLmN1cnJlbnRFbCxmLGcpLGsmJihjPSEwKTtpZihjKXtsPWQuRXZlbnQoXCJzcGFya2xpbmVSZWdpb25DaGFuZ2VcIiksbC5zcGFya2xpbmVzPXRoaXMuc3BsaXN0LHRoaXMuJGVsLnRyaWdnZXIobCk7aWYodGhpcy50b29sdGlwKXtoPVwiXCI7Zm9yKGo9MDtqPGI7aisrKWk9YVtqXSxoKz1pLmdldEN1cnJlbnRSZWdpb25Ub29sdGlwKCk7dGhpcy50b29sdGlwLnNldENvbnRlbnQoaCl9dGhpcy5kaXNhYmxlSGlnaGxpZ2h0fHx0aGlzLmNhbnZhcy5yZW5kZXIoKX1rPT09bnVsbCYmdGhpcy5tb3VzZWxlYXZlKCl9fSksdj1nKHtzaXplU3R5bGU6XCJwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDt2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtmbG9hdDogbGVmdCAhaW1wb3J0YW50O1wiLGluaXQ6ZnVuY3Rpb24oYil7dmFyIGM9Yi5nZXQoXCJ0b29sdGlwQ2xhc3NuYW1lXCIsXCJqcXN0b29sdGlwXCIpLGU9dGhpcy5zaXplU3R5bGUsZjt0aGlzLmNvbnRhaW5lcj1iLmdldChcInRvb2x0aXBDb250YWluZXJcIil8fGEuYm9keSx0aGlzLnRvb2x0aXBPZmZzZXRYPWIuZ2V0KFwidG9vbHRpcE9mZnNldFhcIiwxMCksdGhpcy50b29sdGlwT2Zmc2V0WT1iLmdldChcInRvb2x0aXBPZmZzZXRZXCIsMTIpLGQoXCIjanFzc2l6ZXRpcFwiKS5yZW1vdmUoKSxkKFwiI2pxc3Rvb2x0aXBcIikucmVtb3ZlKCksdGhpcy5zaXpldGlwPWQoXCI8ZGl2Lz5cIix7aWQ6XCJqcXNzaXpldGlwXCIsc3R5bGU6ZSxcImNsYXNzXCI6Y30pLHRoaXMudG9vbHRpcD1kKFwiPGRpdi8+XCIse2lkOlwianFzdG9vbHRpcFwiLFwiY2xhc3NcIjpjfSkuYXBwZW5kVG8odGhpcy5jb250YWluZXIpLGY9dGhpcy50b29sdGlwLm9mZnNldCgpLHRoaXMub2Zmc2V0TGVmdD1mLmxlZnQsdGhpcy5vZmZzZXRUb3A9Zi50b3AsdGhpcy5oaWRkZW49ITAsZCh3aW5kb3cpLnVuYmluZChcInJlc2l6ZS5qcXMgc2Nyb2xsLmpxc1wiKSxkKHdpbmRvdykuYmluZChcInJlc2l6ZS5qcXMgc2Nyb2xsLmpxc1wiLGQucHJveHkodGhpcy51cGRhdGVXaW5kb3dEaW1zLHRoaXMpKSx0aGlzLnVwZGF0ZVdpbmRvd0RpbXMoKX0sdXBkYXRlV2luZG93RGltczpmdW5jdGlvbigpe3RoaXMuc2Nyb2xsVG9wPWQod2luZG93KS5zY3JvbGxUb3AoKSx0aGlzLnNjcm9sbExlZnQ9ZCh3aW5kb3cpLnNjcm9sbExlZnQoKSx0aGlzLnNjcm9sbFJpZ2h0PXRoaXMuc2Nyb2xsTGVmdCtkKHdpbmRvdykud2lkdGgoKSx0aGlzLnVwZGF0ZVBvc2l0aW9uKCl9LGdldFNpemU6ZnVuY3Rpb24oYSl7dGhpcy5zaXpldGlwLmh0bWwoYSkuYXBwZW5kVG8odGhpcy5jb250YWluZXIpLHRoaXMud2lkdGg9dGhpcy5zaXpldGlwLndpZHRoKCkrMSx0aGlzLmhlaWdodD10aGlzLnNpemV0aXAuaGVpZ2h0KCksdGhpcy5zaXpldGlwLnJlbW92ZSgpfSxzZXRDb250ZW50OmZ1bmN0aW9uKGEpe2lmKCFhKXt0aGlzLnRvb2x0aXAuY3NzKFwidmlzaWJpbGl0eVwiLFwiaGlkZGVuXCIpLHRoaXMuaGlkZGVuPSEwO3JldHVybn10aGlzLmdldFNpemUoYSksdGhpcy50b29sdGlwLmh0bWwoYSkuY3NzKHt3aWR0aDp0aGlzLndpZHRoLGhlaWdodDp0aGlzLmhlaWdodCx2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksdGhpcy5oaWRkZW4mJih0aGlzLmhpZGRlbj0hMSx0aGlzLnVwZGF0ZVBvc2l0aW9uKCkpfSx1cGRhdGVQb3NpdGlvbjpmdW5jdGlvbihhLGIpe2lmKGE9PT1jKXtpZih0aGlzLm1vdXNleD09PWMpcmV0dXJuO2E9dGhpcy5tb3VzZXgtdGhpcy5vZmZzZXRMZWZ0LGI9dGhpcy5tb3VzZXktdGhpcy5vZmZzZXRUb3B9ZWxzZSB0aGlzLm1vdXNleD1hLT10aGlzLm9mZnNldExlZnQsdGhpcy5tb3VzZXk9Yi09dGhpcy5vZmZzZXRUb3A7aWYoIXRoaXMuaGVpZ2h0fHwhdGhpcy53aWR0aHx8dGhpcy5oaWRkZW4pcmV0dXJuO2ItPXRoaXMuaGVpZ2h0K3RoaXMudG9vbHRpcE9mZnNldFksYSs9dGhpcy50b29sdGlwT2Zmc2V0WCxiPHRoaXMuc2Nyb2xsVG9wJiYoYj10aGlzLnNjcm9sbFRvcCksYTx0aGlzLnNjcm9sbExlZnQ/YT10aGlzLnNjcm9sbExlZnQ6YSt0aGlzLndpZHRoPnRoaXMuc2Nyb2xsUmlnaHQmJihhPXRoaXMuc2Nyb2xsUmlnaHQtdGhpcy53aWR0aCksdGhpcy50b29sdGlwLmNzcyh7bGVmdDphLHRvcDpifSl9LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMudG9vbHRpcC5yZW1vdmUoKSx0aGlzLnNpemV0aXAucmVtb3ZlKCksdGhpcy5zaXpldGlwPXRoaXMudG9vbHRpcD1jLGQod2luZG93KS51bmJpbmQoXCJyZXNpemUuanFzIHNjcm9sbC5qcXNcIil9fSksRj1mdW5jdGlvbigpe3EoRSl9LGQoRiksSz1bXSxkLmZuLnNwYXJrbGluZT1mdW5jdGlvbihiLGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZj1uZXcgZC5mbi5zcGFya2xpbmUub3B0aW9ucyh0aGlzLGUpLGc9ZCh0aGlzKSxoLGk7aD1mdW5jdGlvbigpe3ZhciBlLGgsaSxqLGssbCxtO2lmKGI9PT1cImh0bWxcInx8Yj09PWMpe209dGhpcy5nZXRBdHRyaWJ1dGUoZi5nZXQoXCJ0YWdWYWx1ZXNBdHRyaWJ1dGVcIikpO2lmKG09PT1jfHxtPT09bnVsbCltPWcuaHRtbCgpO2U9bS5yZXBsYWNlKC8oXlxccyo8IS0tKXwoLS0+XFxzKiQpfFxccysvZyxcIlwiKS5zcGxpdChcIixcIil9ZWxzZSBlPWI7aD1mLmdldChcIndpZHRoXCIpPT09XCJhdXRvXCI/ZS5sZW5ndGgqZi5nZXQoXCJkZWZhdWx0UGl4ZWxzUGVyVmFsdWVcIik6Zi5nZXQoXCJ3aWR0aFwiKTtpZihmLmdldChcImhlaWdodFwiKT09PVwiYXV0b1wiKXtpZighZi5nZXQoXCJjb21wb3NpdGVcIil8fCFkLmRhdGEodGhpcyxcIl9qcXNfdmNhbnZhc1wiKSlqPWEuY3JlYXRlRWxlbWVudChcInNwYW5cIiksai5pbm5lckhUTUw9XCJhXCIsZy5odG1sKGopLGk9ZChqKS5pbm5lckhlaWdodCgpfHxkKGopLmhlaWdodCgpLGQoaikucmVtb3ZlKCksaj1udWxsfWVsc2UgaT1mLmdldChcImhlaWdodFwiKTtmLmdldChcImRpc2FibGVJbnRlcmFjdGlvblwiKT9rPSExOihrPWQuZGF0YSh0aGlzLFwiX2pxc19taGFuZGxlclwiKSxrP2YuZ2V0KFwiY29tcG9zaXRlXCIpfHxrLnJlc2V0KCk6KGs9bmV3IHUodGhpcyxmKSxkLmRhdGEodGhpcyxcIl9qcXNfbWhhbmRsZXJcIixrKSkpO2lmKGYuZ2V0KFwiY29tcG9zaXRlXCIpJiYhZC5kYXRhKHRoaXMsXCJfanFzX3ZjYW52YXNcIikpe2QuZGF0YSh0aGlzLFwiX2pxc19lcnJub3RpZnlcIil8fChhbGVydChcIkF0dGVtcHRlZCB0byBhdHRhY2ggYSBjb21wb3NpdGUgc3BhcmtsaW5lIHRvIGFuIGVsZW1lbnQgd2l0aCBubyBleGlzdGluZyBzcGFya2xpbmVcIiksZC5kYXRhKHRoaXMsXCJfanFzX2Vycm5vdGlmeVwiLCEwKSk7cmV0dXJufWw9bmV3KGQuZm4uc3BhcmtsaW5lW2YuZ2V0KFwidHlwZVwiKV0pKHRoaXMsZSxmLGgsaSksbC5yZW5kZXIoKSxrJiZrLnJlZ2lzdGVyU3BhcmtsaW5lKGwpfTtpZihkKHRoaXMpLmh0bWwoKSYmIWYuZ2V0KFwiZGlzYWJsZUhpZGRlbkNoZWNrXCIpJiZkKHRoaXMpLmlzKFwiOmhpZGRlblwiKXx8IWQodGhpcykucGFyZW50cyhcImJvZHlcIikubGVuZ3RoKXtpZighZi5nZXQoXCJjb21wb3NpdGVcIikmJmQuZGF0YSh0aGlzLFwiX2pxc19wZW5kaW5nXCIpKWZvcihpPUsubGVuZ3RoO2k7aS0tKUtbaS0xXVswXT09dGhpcyYmSy5zcGxpY2UoaS0xLDEpO0sucHVzaChbdGhpcyxoXSksZC5kYXRhKHRoaXMsXCJfanFzX3BlbmRpbmdcIiwhMCl9ZWxzZSBoLmNhbGwodGhpcyl9KX0sZC5mbi5zcGFya2xpbmUuZGVmYXVsdHM9ZigpLGQuc3BhcmtsaW5lX2Rpc3BsYXlfdmlzaWJsZT1mdW5jdGlvbigpe3ZhciBhLGIsYyxlPVtdO2ZvcihiPTAsYz1LLmxlbmd0aDtiPGM7YisrKWE9S1tiXVswXSxkKGEpLmlzKFwiOnZpc2libGVcIikmJiFkKGEpLnBhcmVudHMoKS5pcyhcIjpoaWRkZW5cIik/KEtbYl1bMV0uY2FsbChhKSxkLmRhdGEoS1tiXVswXSxcIl9qcXNfcGVuZGluZ1wiLCExKSxlLnB1c2goYikpOiFkKGEpLmNsb3Nlc3QoXCJodG1sXCIpLmxlbmd0aCYmIWQuZGF0YShhLFwiX2pxc19wZW5kaW5nXCIpJiYoZC5kYXRhKEtbYl1bMF0sXCJfanFzX3BlbmRpbmdcIiwhMSksZS5wdXNoKGIpKTtmb3IoYj1lLmxlbmd0aDtiO2ItLSlLLnNwbGljZShlW2ItMV0sMSl9LGQuZm4uc3BhcmtsaW5lLm9wdGlvbnM9Zyh7aW5pdDpmdW5jdGlvbihhLGIpe3ZhciBjLGYsZyxoO3RoaXMudXNlck9wdGlvbnM9Yj1ifHx7fSx0aGlzLnRhZz1hLHRoaXMudGFnVmFsQ2FjaGU9e30sZj1kLmZuLnNwYXJrbGluZS5kZWZhdWx0cyxnPWYuY29tbW9uLHRoaXMudGFnT3B0aW9uc1ByZWZpeD1iLmVuYWJsZVRhZ09wdGlvbnMmJihiLnRhZ09wdGlvbnNQcmVmaXh8fGcudGFnT3B0aW9uc1ByZWZpeCksaD10aGlzLmdldFRhZ1NldHRpbmcoXCJ0eXBlXCIpLGg9PT1lP2M9ZltiLnR5cGV8fGcudHlwZV06Yz1mW2hdLHRoaXMubWVyZ2VkT3B0aW9ucz1kLmV4dGVuZCh7fSxnLGMsYil9LGdldFRhZ1NldHRpbmc6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy50YWdPcHRpb25zUHJlZml4LGQsZixnLGg7aWYoYj09PSExfHxiPT09YylyZXR1cm4gZTtpZih0aGlzLnRhZ1ZhbENhY2hlLmhhc093blByb3BlcnR5KGEpKWQ9dGhpcy50YWdWYWxDYWNoZS5rZXk7ZWxzZXtkPXRoaXMudGFnLmdldEF0dHJpYnV0ZShiK2EpO2lmKGQ9PT1jfHxkPT09bnVsbClkPWU7ZWxzZSBpZihkLnN1YnN0cigwLDEpPT09XCJbXCIpe2Q9ZC5zdWJzdHIoMSxkLmxlbmd0aC0yKS5zcGxpdChcIixcIik7Zm9yKGY9ZC5sZW5ndGg7Zi0tOylkW2ZdPWsoZFtmXS5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZyxcIlwiKSl9ZWxzZSBpZihkLnN1YnN0cigwLDEpPT09XCJ7XCIpe2c9ZC5zdWJzdHIoMSxkLmxlbmd0aC0yKS5zcGxpdChcIixcIiksZD17fTtmb3IoZj1nLmxlbmd0aDtmLS07KWg9Z1tmXS5zcGxpdChcIjpcIiwyKSxkW2hbMF0ucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csXCJcIildPWsoaFsxXS5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZyxcIlwiKSl9ZWxzZSBkPWsoZCk7dGhpcy50YWdWYWxDYWNoZS5rZXk9ZH1yZXR1cm4gZH0sZ2V0OmZ1bmN0aW9uKGEsYil7dmFyIGQ9dGhpcy5nZXRUYWdTZXR0aW5nKGEpLGY7cmV0dXJuIGQhPT1lP2Q6KGY9dGhpcy5tZXJnZWRPcHRpb25zW2FdKT09PWM/YjpmfX0pLGQuZm4uc3BhcmtsaW5lLl9iYXNlPWcoe2Rpc2FibGVkOiExLGluaXQ6ZnVuY3Rpb24oYSxiLGUsZixnKXt0aGlzLmVsPWEsdGhpcy4kZWw9ZChhKSx0aGlzLnZhbHVlcz1iLHRoaXMub3B0aW9ucz1lLHRoaXMud2lkdGg9Zix0aGlzLmhlaWdodD1nLHRoaXMuY3VycmVudFJlZ2lvbj1jfSxpbml0VGFyZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9IXRoaXMub3B0aW9ucy5nZXQoXCJkaXNhYmxlSW50ZXJhY3Rpb25cIik7KHRoaXMudGFyZ2V0PXRoaXMuJGVsLnNpbXBsZWRyYXcodGhpcy53aWR0aCx0aGlzLmhlaWdodCx0aGlzLm9wdGlvbnMuZ2V0KFwiY29tcG9zaXRlXCIpLGEpKT8odGhpcy5jYW52YXNXaWR0aD10aGlzLnRhcmdldC5waXhlbFdpZHRoLHRoaXMuY2FudmFzSGVpZ2h0PXRoaXMudGFyZ2V0LnBpeGVsSGVpZ2h0KTp0aGlzLmRpc2FibGVkPSEwfSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kaXNhYmxlZD8odGhpcy5lbC5pbm5lckhUTUw9XCJcIiwhMSk6ITB9LGdldFJlZ2lvbjpmdW5jdGlvbihhLGIpe30sc2V0UmVnaW9uSGlnaGxpZ2h0OmZ1bmN0aW9uKGEsYixkKXt2YXIgZT10aGlzLmN1cnJlbnRSZWdpb24sZj0hdGhpcy5vcHRpb25zLmdldChcImRpc2FibGVIaWdobGlnaHRcIiksZztyZXR1cm4gYj50aGlzLmNhbnZhc1dpZHRofHxkPnRoaXMuY2FudmFzSGVpZ2h0fHxiPDB8fGQ8MD9udWxsOihnPXRoaXMuZ2V0UmVnaW9uKGEsYixkKSxlIT09Zz8oZSE9PWMmJmYmJnRoaXMucmVtb3ZlSGlnaGxpZ2h0KCksdGhpcy5jdXJyZW50UmVnaW9uPWcsZyE9PWMmJmYmJnRoaXMucmVuZGVySGlnaGxpZ2h0KCksITApOiExKX0sY2xlYXJSZWdpb25IaWdobGlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jdXJyZW50UmVnaW9uIT09Yz8odGhpcy5yZW1vdmVIaWdobGlnaHQoKSx0aGlzLmN1cnJlbnRSZWdpb249YywhMCk6ITF9LHJlbmRlckhpZ2hsaWdodDpmdW5jdGlvbigpe3RoaXMuY2hhbmdlSGlnaGxpZ2h0KCEwKX0scmVtb3ZlSGlnaGxpZ2h0OmZ1bmN0aW9uKCl7dGhpcy5jaGFuZ2VIaWdobGlnaHQoITEpfSxjaGFuZ2VIaWdobGlnaHQ6ZnVuY3Rpb24oYSl7fSxnZXRDdXJyZW50UmVnaW9uVG9vbHRpcDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucyxiPVwiXCIsZT1bXSxmLGcsaSxqLGssbCxtLG4sbyxwLHEscixzLHQ7aWYodGhpcy5jdXJyZW50UmVnaW9uPT09YylyZXR1cm5cIlwiO2Y9dGhpcy5nZXRDdXJyZW50UmVnaW9uRmllbGRzKCkscT1hLmdldChcInRvb2x0aXBGb3JtYXR0ZXJcIik7aWYocSlyZXR1cm4gcSh0aGlzLGEsZik7YS5nZXQoXCJ0b29sdGlwQ2hhcnRUaXRsZVwiKSYmKGIrPSc8ZGl2IGNsYXNzPVwianFzIGpxc3RpdGxlXCI+JythLmdldChcInRvb2x0aXBDaGFydFRpdGxlXCIpK1wiPC9kaXY+XFxuXCIpLGc9dGhpcy5vcHRpb25zLmdldChcInRvb2x0aXBGb3JtYXRcIik7aWYoIWcpcmV0dXJuXCJcIjtkLmlzQXJyYXkoZyl8fChnPVtnXSksZC5pc0FycmF5KGYpfHwoZj1bZl0pLG09dGhpcy5vcHRpb25zLmdldChcInRvb2x0aXBGb3JtYXRGaWVsZGxpc3RcIiksbj10aGlzLm9wdGlvbnMuZ2V0KFwidG9vbHRpcEZvcm1hdEZpZWxkbGlzdEtleVwiKTtpZihtJiZuKXtvPVtdO2ZvcihsPWYubGVuZ3RoO2wtLTspcD1mW2xdW25dLCh0PWQuaW5BcnJheShwLG0pKSE9LTEmJihvW3RdPWZbbF0pO2Y9b31pPWcubGVuZ3RoLHM9Zi5sZW5ndGg7Zm9yKGw9MDtsPGk7bCsrKXtyPWdbbF0sdHlwZW9mIHI9PVwic3RyaW5nXCImJihyPW5ldyBoKHIpKSxqPXIuZmNsYXNzfHxcImpxc2ZpZWxkXCI7Zm9yKHQ9MDt0PHM7dCsrKWlmKCFmW3RdLmlzTnVsbHx8IWEuZ2V0KFwidG9vbHRpcFNraXBOdWxsXCIpKWQuZXh0ZW5kKGZbdF0se3ByZWZpeDphLmdldChcInRvb2x0aXBQcmVmaXhcIiksc3VmZml4OmEuZ2V0KFwidG9vbHRpcFN1ZmZpeFwiKX0pLGs9ci5yZW5kZXIoZlt0XSxhLmdldChcInRvb2x0aXBWYWx1ZUxvb2t1cHNcIiksYSksZS5wdXNoKCc8ZGl2IGNsYXNzPVwiJytqKydcIj4nK2srXCI8L2Rpdj5cIil9cmV0dXJuIGUubGVuZ3RoP2IrZS5qb2luKFwiXFxuXCIpOlwiXCJ9LGdldEN1cnJlbnRSZWdpb25GaWVsZHM6ZnVuY3Rpb24oKXt9LGNhbGNIaWdobGlnaHRDb2xvcjpmdW5jdGlvbihhLGMpe3ZhciBkPWMuZ2V0KFwiaGlnaGxpZ2h0Q29sb3JcIiksZT1jLmdldChcImhpZ2hsaWdodExpZ2h0ZW5cIiksZixnLGgsajtpZihkKXJldHVybiBkO2lmKGUpe2Y9L14jKFswLTlhLWZdKShbMC05YS1mXSkoWzAtOWEtZl0pJC9pLmV4ZWMoYSl8fC9eIyhbMC05YS1mXXsyfSkoWzAtOWEtZl17Mn0pKFswLTlhLWZdezJ9KSQvaS5leGVjKGEpO2lmKGYpe2g9W10sZz1hLmxlbmd0aD09PTQ/MTY6MTtmb3Ioaj0wO2o8MztqKyspaFtqXT1pKGIucm91bmQocGFyc2VJbnQoZltqKzFdLDE2KSpnKmUpLDAsMjU1KTtyZXR1cm5cInJnYihcIitoLmpvaW4oXCIsXCIpK1wiKVwifX1yZXR1cm4gYX19KSx3PXtjaGFuZ2VIaWdobGlnaHQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5jdXJyZW50UmVnaW9uLGM9dGhpcy50YXJnZXQsZT10aGlzLnJlZ2lvblNoYXBlc1tiXSxmO2UmJihmPXRoaXMucmVuZGVyUmVnaW9uKGIsYSksZC5pc0FycmF5KGYpfHxkLmlzQXJyYXkoZSk/KGMucmVwbGFjZVdpdGhTaGFwZXMoZSxmKSx0aGlzLnJlZ2lvblNoYXBlc1tiXT1kLm1hcChmLGZ1bmN0aW9uKGEpe3JldHVybiBhLmlkfSkpOihjLnJlcGxhY2VXaXRoU2hhcGUoZSxmKSx0aGlzLnJlZ2lvblNoYXBlc1tiXT1mLmlkKSl9LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBhPXRoaXMudmFsdWVzLGI9dGhpcy50YXJnZXQsYz10aGlzLnJlZ2lvblNoYXBlcyxlLGYsZyxoO2lmKCF0aGlzLmNscy5fc3VwZXIucmVuZGVyLmNhbGwodGhpcykpcmV0dXJuO2ZvcihnPWEubGVuZ3RoO2ctLTspe2U9dGhpcy5yZW5kZXJSZWdpb24oZyk7aWYoZSlpZihkLmlzQXJyYXkoZSkpe2Y9W107Zm9yKGg9ZS5sZW5ndGg7aC0tOyllW2hdLmFwcGVuZCgpLGYucHVzaChlW2hdLmlkKTtjW2ddPWZ9ZWxzZSBlLmFwcGVuZCgpLGNbZ109ZS5pZDtlbHNlIGNbZ109bnVsbH1iLnJlbmRlcigpfX0sZC5mbi5zcGFya2xpbmUubGluZT14PWcoZC5mbi5zcGFya2xpbmUuX2Jhc2Use3R5cGU6XCJsaW5lXCIsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUpe3guX3N1cGVyLmluaXQuY2FsbCh0aGlzLGEsYixjLGQsZSksdGhpcy52ZXJ0aWNlcz1bXSx0aGlzLnJlZ2lvbk1hcD1bXSx0aGlzLnh2YWx1ZXM9W10sdGhpcy55dmFsdWVzPVtdLHRoaXMueW1pbm1heD1bXSx0aGlzLmhpZ2h0bGlnaHRTcG90SWQ9bnVsbCx0aGlzLmxhc3RTaGFwZUlkPW51bGwsdGhpcy5pbml0VGFyZ2V0KCl9LGdldFJlZ2lvbjpmdW5jdGlvbihhLGIsZCl7dmFyIGUsZj10aGlzLnJlZ2lvbk1hcDtmb3IoZT1mLmxlbmd0aDtlLS07KWlmKGZbZV0hPT1udWxsJiZiPj1mW2VdWzBdJiZiPD1mW2VdWzFdKXJldHVybiBmW2VdWzJdO3JldHVybiBjfSxnZXRDdXJyZW50UmVnaW9uRmllbGRzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jdXJyZW50UmVnaW9uO3JldHVybntpc051bGw6dGhpcy55dmFsdWVzW2FdPT09bnVsbCx4OnRoaXMueHZhbHVlc1thXSx5OnRoaXMueXZhbHVlc1thXSxjb2xvcjp0aGlzLm9wdGlvbnMuZ2V0KFwibGluZUNvbG9yXCIpLGZpbGxDb2xvcjp0aGlzLm9wdGlvbnMuZ2V0KFwiZmlsbENvbG9yXCIpLG9mZnNldDphfX0scmVuZGVySGlnaGxpZ2h0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jdXJyZW50UmVnaW9uLGI9dGhpcy50YXJnZXQsZD10aGlzLnZlcnRpY2VzW2FdLGU9dGhpcy5vcHRpb25zLGY9ZS5nZXQoXCJzcG90UmFkaXVzXCIpLGc9ZS5nZXQoXCJoaWdobGlnaHRTcG90Q29sb3JcIiksaD1lLmdldChcImhpZ2hsaWdodExpbmVDb2xvclwiKSxpLGo7aWYoIWQpcmV0dXJuO2YmJmcmJihpPWIuZHJhd0NpcmNsZShkWzBdLGRbMV0sZixjLGcpLHRoaXMuaGlnaGxpZ2h0U3BvdElkPWkuaWQsYi5pbnNlcnRBZnRlclNoYXBlKHRoaXMubGFzdFNoYXBlSWQsaSkpLGgmJihqPWIuZHJhd0xpbmUoZFswXSx0aGlzLmNhbnZhc1RvcCxkWzBdLHRoaXMuY2FudmFzVG9wK3RoaXMuY2FudmFzSGVpZ2h0LGgpLHRoaXMuaGlnaGxpZ2h0TGluZUlkPWouaWQsYi5pbnNlcnRBZnRlclNoYXBlKHRoaXMubGFzdFNoYXBlSWQsaikpfSxyZW1vdmVIaWdobGlnaHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRhcmdldDt0aGlzLmhpZ2hsaWdodFNwb3RJZCYmKGEucmVtb3ZlU2hhcGVJZCh0aGlzLmhpZ2hsaWdodFNwb3RJZCksdGhpcy5oaWdobGlnaHRTcG90SWQ9bnVsbCksdGhpcy5oaWdobGlnaHRMaW5lSWQmJihhLnJlbW92ZVNoYXBlSWQodGhpcy5oaWdobGlnaHRMaW5lSWQpLHRoaXMuaGlnaGxpZ2h0TGluZUlkPW51bGwpfSxzY2FuVmFsdWVzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy52YWx1ZXMsYz1hLmxlbmd0aCxkPXRoaXMueHZhbHVlcyxlPXRoaXMueXZhbHVlcyxmPXRoaXMueW1pbm1heCxnLGgsaSxqLGs7Zm9yKGc9MDtnPGM7ZysrKWg9YVtnXSxpPXR5cGVvZiBhW2ddPT1cInN0cmluZ1wiLGo9dHlwZW9mIGFbZ109PVwib2JqZWN0XCImJmFbZ11pbnN0YW5jZW9mIEFycmF5LGs9aSYmYVtnXS5zcGxpdChcIjpcIiksaSYmay5sZW5ndGg9PT0yPyhkLnB1c2goTnVtYmVyKGtbMF0pKSxlLnB1c2goTnVtYmVyKGtbMV0pKSxmLnB1c2goTnVtYmVyKGtbMV0pKSk6aj8oZC5wdXNoKGhbMF0pLGUucHVzaChoWzFdKSxmLnB1c2goaFsxXSkpOihkLnB1c2goZyksYVtnXT09PW51bGx8fGFbZ109PT1cIm51bGxcIj9lLnB1c2gobnVsbCk6KGUucHVzaChOdW1iZXIoaCkpLGYucHVzaChOdW1iZXIoaCkpKSk7dGhpcy5vcHRpb25zLmdldChcInh2YWx1ZXNcIikmJihkPXRoaXMub3B0aW9ucy5nZXQoXCJ4dmFsdWVzXCIpKSx0aGlzLm1heHk9dGhpcy5tYXh5b3JnPWIubWF4LmFwcGx5KGIsZiksdGhpcy5taW55PXRoaXMubWlueW9yZz1iLm1pbi5hcHBseShiLGYpLHRoaXMubWF4eD1iLm1heC5hcHBseShiLGQpLHRoaXMubWlueD1iLm1pbi5hcHBseShiLGQpLHRoaXMueHZhbHVlcz1kLHRoaXMueXZhbHVlcz1lLHRoaXMueW1pbm1heD1mfSxwcm9jZXNzUmFuZ2VPcHRpb25zOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLGI9YS5nZXQoXCJub3JtYWxSYW5nZU1pblwiKSxkPWEuZ2V0KFwibm9ybWFsUmFuZ2VNYXhcIik7YiE9PWMmJihiPHRoaXMubWlueSYmKHRoaXMubWlueT1iKSxkPnRoaXMubWF4eSYmKHRoaXMubWF4eT1kKSksYS5nZXQoXCJjaGFydFJhbmdlTWluXCIpIT09YyYmKGEuZ2V0KFwiY2hhcnRSYW5nZUNsaXBcIil8fGEuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKTx0aGlzLm1pbnkpJiYodGhpcy5taW55PWEuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKSksYS5nZXQoXCJjaGFydFJhbmdlTWF4XCIpIT09YyYmKGEuZ2V0KFwiY2hhcnRSYW5nZUNsaXBcIil8fGEuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKT50aGlzLm1heHkpJiYodGhpcy5tYXh5PWEuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKSksYS5nZXQoXCJjaGFydFJhbmdlTWluWFwiKSE9PWMmJihhLmdldChcImNoYXJ0UmFuZ2VDbGlwWFwiKXx8YS5nZXQoXCJjaGFydFJhbmdlTWluWFwiKTx0aGlzLm1pbngpJiYodGhpcy5taW54PWEuZ2V0KFwiY2hhcnRSYW5nZU1pblhcIikpLGEuZ2V0KFwiY2hhcnRSYW5nZU1heFhcIikhPT1jJiYoYS5nZXQoXCJjaGFydFJhbmdlQ2xpcFhcIil8fGEuZ2V0KFwiY2hhcnRSYW5nZU1heFhcIik+dGhpcy5tYXh4KSYmKHRoaXMubWF4eD1hLmdldChcImNoYXJ0UmFuZ2VNYXhYXCIpKX0sZHJhd05vcm1hbFJhbmdlOmZ1bmN0aW9uKGEsZCxlLGYsZyl7dmFyIGg9dGhpcy5vcHRpb25zLmdldChcIm5vcm1hbFJhbmdlTWluXCIpLGk9dGhpcy5vcHRpb25zLmdldChcIm5vcm1hbFJhbmdlTWF4XCIpLGo9ZCtiLnJvdW5kKGUtZSooKGktdGhpcy5taW55KS9nKSksaz1iLnJvdW5kKGUqKGktaCkvZyk7dGhpcy50YXJnZXQuZHJhd1JlY3QoYSxqLGYsayxjLHRoaXMub3B0aW9ucy5nZXQoXCJub3JtYWxSYW5nZUNvbG9yXCIpKS5hcHBlbmQoKX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLGU9dGhpcy50YXJnZXQsZj10aGlzLmNhbnZhc1dpZHRoLGc9dGhpcy5jYW52YXNIZWlnaHQsaD10aGlzLnZlcnRpY2VzLGk9YS5nZXQoXCJzcG90UmFkaXVzXCIpLGo9dGhpcy5yZWdpb25NYXAsayxsLG0sbixvLHAscSxyLHMsdSx2LHcseSx6LEEsQixDLEQsRSxGLEcsSCxJLEosSztpZigheC5fc3VwZXIucmVuZGVyLmNhbGwodGhpcykpcmV0dXJuO3RoaXMuc2NhblZhbHVlcygpLHRoaXMucHJvY2Vzc1JhbmdlT3B0aW9ucygpLEk9dGhpcy54dmFsdWVzLEo9dGhpcy55dmFsdWVzO2lmKCF0aGlzLnltaW5tYXgubGVuZ3RofHx0aGlzLnl2YWx1ZXMubGVuZ3RoPDIpcmV0dXJuO249bz0wLGs9dGhpcy5tYXh4LXRoaXMubWlueD09PTA/MTp0aGlzLm1heHgtdGhpcy5taW54LGw9dGhpcy5tYXh5LXRoaXMubWlueT09PTA/MTp0aGlzLm1heHktdGhpcy5taW55LG09dGhpcy55dmFsdWVzLmxlbmd0aC0xLGkmJihmPGkqNHx8ZzxpKjQpJiYoaT0wKTtpZihpKXtHPWEuZ2V0KFwiaGlnaGxpZ2h0U3BvdENvbG9yXCIpJiYhYS5nZXQoXCJkaXNhYmxlSW50ZXJhY3Rpb25cIik7aWYoR3x8YS5nZXQoXCJtaW5TcG90Q29sb3JcIil8fGEuZ2V0KFwic3BvdENvbG9yXCIpJiZKW21dPT09dGhpcy5taW55KWctPWIuY2VpbChpKTtpZihHfHxhLmdldChcIm1heFNwb3RDb2xvclwiKXx8YS5nZXQoXCJzcG90Q29sb3JcIikmJkpbbV09PT10aGlzLm1heHkpZy09Yi5jZWlsKGkpLG4rPWIuY2VpbChpKTtpZihHfHwoYS5nZXQoXCJtaW5TcG90Q29sb3JcIil8fGEuZ2V0KFwibWF4U3BvdENvbG9yXCIpKSYmKEpbMF09PT10aGlzLm1pbnl8fEpbMF09PT10aGlzLm1heHkpKW8rPWIuY2VpbChpKSxmLT1iLmNlaWwoaSk7aWYoR3x8YS5nZXQoXCJzcG90Q29sb3JcIil8fGEuZ2V0KFwibWluU3BvdENvbG9yXCIpfHxhLmdldChcIm1heFNwb3RDb2xvclwiKSYmKEpbbV09PT10aGlzLm1pbnl8fEpbbV09PT10aGlzLm1heHkpKWYtPWIuY2VpbChpKX1nLS0sYS5nZXQoXCJub3JtYWxSYW5nZU1pblwiKSE9PWMmJiFhLmdldChcImRyYXdOb3JtYWxPblRvcFwiKSYmdGhpcy5kcmF3Tm9ybWFsUmFuZ2UobyxuLGcsZixsKSxxPVtdLHI9W3FdLHo9QT1udWxsLEI9Si5sZW5ndGg7Zm9yKEs9MDtLPEI7SysrKXM9SVtLXSx2PUlbSysxXSx1PUpbS10sdz1vK2Iucm91bmQoKHMtdGhpcy5taW54KSooZi9rKSkseT1LPEItMT9vK2Iucm91bmQoKHYtdGhpcy5taW54KSooZi9rKSk6ZixBPXcrKHktdykvMixqW0tdPVt6fHwwLEEsS10sej1BLHU9PT1udWxsP0smJihKW0stMV0hPT1udWxsJiYocT1bXSxyLnB1c2gocSkpLGgucHVzaChudWxsKSk6KHU8dGhpcy5taW55JiYodT10aGlzLm1pbnkpLHU+dGhpcy5tYXh5JiYodT10aGlzLm1heHkpLHEubGVuZ3RofHxxLnB1c2goW3csbitnXSkscD1bdyxuK2Iucm91bmQoZy1nKigodS10aGlzLm1pbnkpL2wpKV0scS5wdXNoKHApLGgucHVzaChwKSk7Qz1bXSxEPVtdLEU9ci5sZW5ndGg7Zm9yKEs9MDtLPEU7SysrKXE9cltLXSxxLmxlbmd0aCYmKGEuZ2V0KFwiZmlsbENvbG9yXCIpJiYocS5wdXNoKFtxW3EubGVuZ3RoLTFdWzBdLG4rZ10pLEQucHVzaChxLnNsaWNlKDApKSxxLnBvcCgpKSxxLmxlbmd0aD4yJiYocVswXT1bcVswXVswXSxxWzFdWzFdXSksQy5wdXNoKHEpKTtFPUQubGVuZ3RoO2ZvcihLPTA7SzxFO0srKyllLmRyYXdTaGFwZShEW0tdLGEuZ2V0KFwiZmlsbENvbG9yXCIpLGEuZ2V0KFwiZmlsbENvbG9yXCIpKS5hcHBlbmQoKTthLmdldChcIm5vcm1hbFJhbmdlTWluXCIpIT09YyYmYS5nZXQoXCJkcmF3Tm9ybWFsT25Ub3BcIikmJnRoaXMuZHJhd05vcm1hbFJhbmdlKG8sbixnLGYsbCksRT1DLmxlbmd0aDtmb3IoSz0wO0s8RTtLKyspZS5kcmF3U2hhcGUoQ1tLXSxhLmdldChcImxpbmVDb2xvclwiKSxjLGEuZ2V0KFwibGluZVdpZHRoXCIpKS5hcHBlbmQoKTtpZihpJiZhLmdldChcInZhbHVlU3BvdHNcIikpe0Y9YS5nZXQoXCJ2YWx1ZVNwb3RzXCIpLEYuZ2V0PT09YyYmKEY9bmV3IHQoRikpO2ZvcihLPTA7SzxCO0srKylIPUYuZ2V0KEpbS10pLEgmJmUuZHJhd0NpcmNsZShvK2Iucm91bmQoKElbS10tdGhpcy5taW54KSooZi9rKSksbitiLnJvdW5kKGctZyooKEpbS10tdGhpcy5taW55KS9sKSksaSxjLEgpLmFwcGVuZCgpfWkmJmEuZ2V0KFwic3BvdENvbG9yXCIpJiZKW21dIT09bnVsbCYmZS5kcmF3Q2lyY2xlKG8rYi5yb3VuZCgoSVtJLmxlbmd0aC0xXS10aGlzLm1pbngpKihmL2spKSxuK2Iucm91bmQoZy1nKigoSlttXS10aGlzLm1pbnkpL2wpKSxpLGMsYS5nZXQoXCJzcG90Q29sb3JcIikpLmFwcGVuZCgpLHRoaXMubWF4eSE9PXRoaXMubWlueW9yZyYmKGkmJmEuZ2V0KFwibWluU3BvdENvbG9yXCIpJiYocz1JW2QuaW5BcnJheSh0aGlzLm1pbnlvcmcsSildLGUuZHJhd0NpcmNsZShvK2Iucm91bmQoKHMtdGhpcy5taW54KSooZi9rKSksbitiLnJvdW5kKGctZyooKHRoaXMubWlueW9yZy10aGlzLm1pbnkpL2wpKSxpLGMsYS5nZXQoXCJtaW5TcG90Q29sb3JcIikpLmFwcGVuZCgpKSxpJiZhLmdldChcIm1heFNwb3RDb2xvclwiKSYmKHM9SVtkLmluQXJyYXkodGhpcy5tYXh5b3JnLEopXSxlLmRyYXdDaXJjbGUobytiLnJvdW5kKChzLXRoaXMubWlueCkqKGYvaykpLG4rYi5yb3VuZChnLWcqKCh0aGlzLm1heHlvcmctdGhpcy5taW55KS9sKSksaSxjLGEuZ2V0KFwibWF4U3BvdENvbG9yXCIpKS5hcHBlbmQoKSkpLHRoaXMubGFzdFNoYXBlSWQ9ZS5nZXRMYXN0U2hhcGVJZCgpLHRoaXMuY2FudmFzVG9wPW4sZS5yZW5kZXIoKX19KSxkLmZuLnNwYXJrbGluZS5iYXI9eT1nKGQuZm4uc3BhcmtsaW5lLl9iYXNlLHcse3R5cGU6XCJiYXJcIixpbml0OmZ1bmN0aW9uKGEsZSxmLGcsaCl7dmFyIGo9cGFyc2VJbnQoZi5nZXQoXCJiYXJXaWR0aFwiKSwxMCksbj1wYXJzZUludChmLmdldChcImJhclNwYWNpbmdcIiksMTApLG89Zi5nZXQoXCJjaGFydFJhbmdlTWluXCIpLHA9Zi5nZXQoXCJjaGFydFJhbmdlTWF4XCIpLHE9Zi5nZXQoXCJjaGFydFJhbmdlQ2xpcFwiKSxyPUluZmluaXR5LHM9LUluZmluaXR5LHUsdix3LHgseixBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUjt5Ll9zdXBlci5pbml0LmNhbGwodGhpcyxhLGUsZixnLGgpO2ZvcihBPTAsQj1lLmxlbmd0aDtBPEI7QSsrKXtPPWVbQV0sdT10eXBlb2YgTz09XCJzdHJpbmdcIiYmTy5pbmRleE9mKFwiOlwiKT4tMTtpZih1fHxkLmlzQXJyYXkoTykpSj0hMCx1JiYoTz1lW0FdPWwoTy5zcGxpdChcIjpcIikpKSxPPW0oTyxudWxsKSx2PWIubWluLmFwcGx5KGIsTyksdz1iLm1heC5hcHBseShiLE8pLHY8ciYmKHI9diksdz5zJiYocz13KX10aGlzLnN0YWNrZWQ9Six0aGlzLnJlZ2lvblNoYXBlcz17fSx0aGlzLmJhcldpZHRoPWosdGhpcy5iYXJTcGFjaW5nPW4sdGhpcy50b3RhbEJhcldpZHRoPWorbix0aGlzLndpZHRoPWc9ZS5sZW5ndGgqaisoZS5sZW5ndGgtMSkqbix0aGlzLmluaXRUYXJnZXQoKSxxJiYoSD1vPT09Yz8tSW5maW5pdHk6byxJPXA9PT1jP0luZmluaXR5OnApLHo9W10seD1KP1tdOno7dmFyIFM9W10sVD1bXTtmb3IoQT0wLEI9ZS5sZW5ndGg7QTxCO0ErKylpZihKKXtLPWVbQV0sZVtBXT1OPVtdLFNbQV09MCx4W0FdPVRbQV09MDtmb3IoTD0wLE09Sy5sZW5ndGg7TDxNO0wrKylPPU5bTF09cT9pKEtbTF0sSCxJKTpLW0xdLE8hPT1udWxsJiYoTz4wJiYoU1tBXSs9TykscjwwJiZzPjA/TzwwP1RbQV0rPWIuYWJzKE8pOnhbQV0rPU86eFtBXSs9Yi5hYnMoTy0oTzwwP3M6cikpLHoucHVzaChPKSl9ZWxzZSBPPXE/aShlW0FdLEgsSSk6ZVtBXSxPPWVbQV09ayhPKSxPIT09bnVsbCYmei5wdXNoKE8pO3RoaXMubWF4PUc9Yi5tYXguYXBwbHkoYix6KSx0aGlzLm1pbj1GPWIubWluLmFwcGx5KGIseiksdGhpcy5zdGFja01heD1zPUo/Yi5tYXguYXBwbHkoYixTKTpHLHRoaXMuc3RhY2tNaW49cj1KP2IubWluLmFwcGx5KGIseik6RixmLmdldChcImNoYXJ0UmFuZ2VNaW5cIikhPT1jJiYoZi5nZXQoXCJjaGFydFJhbmdlQ2xpcFwiKXx8Zi5nZXQoXCJjaGFydFJhbmdlTWluXCIpPEYpJiYoRj1mLmdldChcImNoYXJ0UmFuZ2VNaW5cIikpLGYuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKSE9PWMmJihmLmdldChcImNoYXJ0UmFuZ2VDbGlwXCIpfHxmLmdldChcImNoYXJ0UmFuZ2VNYXhcIik+RykmJihHPWYuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKSksdGhpcy56ZXJvQXhpcz1EPWYuZ2V0KFwiemVyb0F4aXNcIiwhMCksRjw9MCYmRz49MCYmRD9FPTA6RD09MD9FPUY6Rj4wP0U9RjpFPUcsdGhpcy54YXhpc09mZnNldD1FLEM9Sj9iLm1heC5hcHBseShiLHgpK2IubWF4LmFwcGx5KGIsVCk6Ry1GLHRoaXMuY2FudmFzSGVpZ2h0RWY9RCYmRjwwP3RoaXMuY2FudmFzSGVpZ2h0LTI6dGhpcy5jYW52YXNIZWlnaHQtMSxGPEU/KFE9SiYmRz49MD9zOkcsUD0oUS1FKS9DKnRoaXMuY2FudmFzSGVpZ2h0LFAhPT1iLmNlaWwoUCkmJih0aGlzLmNhbnZhc0hlaWdodEVmLT0yLFA9Yi5jZWlsKFApKSk6UD10aGlzLmNhbnZhc0hlaWdodCx0aGlzLnlvZmZzZXQ9UCxkLmlzQXJyYXkoZi5nZXQoXCJjb2xvck1hcFwiKSk/KHRoaXMuY29sb3JNYXBCeUluZGV4PWYuZ2V0KFwiY29sb3JNYXBcIiksdGhpcy5jb2xvck1hcEJ5VmFsdWU9bnVsbCk6KHRoaXMuY29sb3JNYXBCeUluZGV4PW51bGwsdGhpcy5jb2xvck1hcEJ5VmFsdWU9Zi5nZXQoXCJjb2xvck1hcFwiKSx0aGlzLmNvbG9yTWFwQnlWYWx1ZSYmdGhpcy5jb2xvck1hcEJ5VmFsdWUuZ2V0PT09YyYmKHRoaXMuY29sb3JNYXBCeVZhbHVlPW5ldyB0KHRoaXMuY29sb3JNYXBCeVZhbHVlKSkpLHRoaXMucmFuZ2U9Q30sZ2V0UmVnaW9uOmZ1bmN0aW9uKGEsZCxlKXt2YXIgZj1iLmZsb29yKGQvdGhpcy50b3RhbEJhcldpZHRoKTtyZXR1cm4gZjwwfHxmPj10aGlzLnZhbHVlcy5sZW5ndGg/YzpmfSxnZXRDdXJyZW50UmVnaW9uRmllbGRzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jdXJyZW50UmVnaW9uLGI9cih0aGlzLnZhbHVlc1thXSksYz1bXSxkLGU7Zm9yKGU9Yi5sZW5ndGg7ZS0tOylkPWJbZV0sYy5wdXNoKHtpc051bGw6ZD09PW51bGwsdmFsdWU6ZCxjb2xvcjp0aGlzLmNhbGNDb2xvcihlLGQsYSksb2Zmc2V0OmF9KTtyZXR1cm4gY30sY2FsY0NvbG9yOmZ1bmN0aW9uKGEsYixlKXt2YXIgZj10aGlzLmNvbG9yTWFwQnlJbmRleCxnPXRoaXMuY29sb3JNYXBCeVZhbHVlLGg9dGhpcy5vcHRpb25zLGksajtyZXR1cm4gdGhpcy5zdGFja2VkP2k9aC5nZXQoXCJzdGFja2VkQmFyQ29sb3JcIik6aT1iPDA/aC5nZXQoXCJuZWdCYXJDb2xvclwiKTpoLmdldChcImJhckNvbG9yXCIpLGI9PT0wJiZoLmdldChcInplcm9Db2xvclwiKSE9PWMmJihpPWguZ2V0KFwiemVyb0NvbG9yXCIpKSxnJiYoaj1nLmdldChiKSk/aT1qOmYmJmYubGVuZ3RoPmUmJihpPWZbZV0pLGQuaXNBcnJheShpKT9pW2ElaS5sZW5ndGhdOml9LHJlbmRlclJlZ2lvbjpmdW5jdGlvbihhLGUpe3ZhciBmPXRoaXMudmFsdWVzW2FdLGc9dGhpcy5vcHRpb25zLGg9dGhpcy54YXhpc09mZnNldCxpPVtdLGo9dGhpcy5yYW5nZSxrPXRoaXMuc3RhY2tlZCxsPXRoaXMudGFyZ2V0LG09YSp0aGlzLnRvdGFsQmFyV2lkdGgsbj10aGlzLmNhbnZhc0hlaWdodEVmLHA9dGhpcy55b2Zmc2V0LHEscixzLHQsdSx2LHcseCx5LHo7Zj1kLmlzQXJyYXkoZik/ZjpbZl0sdz1mLmxlbmd0aCx4PWZbMF0sdD1vKG51bGwsZiksej1vKGgsZiwhMCk7aWYodClyZXR1cm4gZy5nZXQoXCJudWxsQ29sb3JcIik/KHM9ZT9nLmdldChcIm51bGxDb2xvclwiKTp0aGlzLmNhbGNIaWdobGlnaHRDb2xvcihnLmdldChcIm51bGxDb2xvclwiKSxnKSxxPXA+MD9wLTE6cCxsLmRyYXdSZWN0KG0scSx0aGlzLmJhcldpZHRoLTEsMCxzLHMpKTpjO3U9cDtmb3Iodj0wO3Y8dzt2Kyspe3g9Zlt2XTtpZihrJiZ4PT09aCl7aWYoIXp8fHkpY29udGludWU7eT0hMH1qPjA/cj1iLmZsb29yKG4qKGIuYWJzKHgtaCkvaikpKzE6cj0xLHg8aHx8eD09PWgmJnA9PT0wPyhxPXUsdSs9cik6KHE9cC1yLHAtPXIpLHM9dGhpcy5jYWxjQ29sb3Iodix4LGEpLGUmJihzPXRoaXMuY2FsY0hpZ2hsaWdodENvbG9yKHMsZykpLGkucHVzaChsLmRyYXdSZWN0KG0scSx0aGlzLmJhcldpZHRoLTEsci0xLHMscykpfXJldHVybiBpLmxlbmd0aD09PTE/aVswXTppfX0pLGQuZm4uc3BhcmtsaW5lLnRyaXN0YXRlPXo9ZyhkLmZuLnNwYXJrbGluZS5fYmFzZSx3LHt0eXBlOlwidHJpc3RhdGVcIixpbml0OmZ1bmN0aW9uKGEsYixlLGYsZyl7dmFyIGg9cGFyc2VJbnQoZS5nZXQoXCJiYXJXaWR0aFwiKSwxMCksaT1wYXJzZUludChlLmdldChcImJhclNwYWNpbmdcIiksMTApO3ouX3N1cGVyLmluaXQuY2FsbCh0aGlzLGEsYixlLGYsZyksdGhpcy5yZWdpb25TaGFwZXM9e30sdGhpcy5iYXJXaWR0aD1oLHRoaXMuYmFyU3BhY2luZz1pLHRoaXMudG90YWxCYXJXaWR0aD1oK2ksdGhpcy52YWx1ZXM9ZC5tYXAoYixOdW1iZXIpLHRoaXMud2lkdGg9Zj1iLmxlbmd0aCpoKyhiLmxlbmd0aC0xKSppLGQuaXNBcnJheShlLmdldChcImNvbG9yTWFwXCIpKT8odGhpcy5jb2xvck1hcEJ5SW5kZXg9ZS5nZXQoXCJjb2xvck1hcFwiKSx0aGlzLmNvbG9yTWFwQnlWYWx1ZT1udWxsKToodGhpcy5jb2xvck1hcEJ5SW5kZXg9bnVsbCx0aGlzLmNvbG9yTWFwQnlWYWx1ZT1lLmdldChcImNvbG9yTWFwXCIpLHRoaXMuY29sb3JNYXBCeVZhbHVlJiZ0aGlzLmNvbG9yTWFwQnlWYWx1ZS5nZXQ9PT1jJiYodGhpcy5jb2xvck1hcEJ5VmFsdWU9bmV3IHQodGhpcy5jb2xvck1hcEJ5VmFsdWUpKSksdGhpcy5pbml0VGFyZ2V0KCl9LGdldFJlZ2lvbjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGIuZmxvb3IoYy90aGlzLnRvdGFsQmFyV2lkdGgpfSxnZXRDdXJyZW50UmVnaW9uRmllbGRzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jdXJyZW50UmVnaW9uO3JldHVybntpc051bGw6dGhpcy52YWx1ZXNbYV09PT1jLHZhbHVlOnRoaXMudmFsdWVzW2FdLGNvbG9yOnRoaXMuY2FsY0NvbG9yKHRoaXMudmFsdWVzW2FdLGEpLG9mZnNldDphfX0sY2FsY0NvbG9yOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy52YWx1ZXMsZD10aGlzLm9wdGlvbnMsZT10aGlzLmNvbG9yTWFwQnlJbmRleCxmPXRoaXMuY29sb3JNYXBCeVZhbHVlLGcsaDtyZXR1cm4gZiYmKGg9Zi5nZXQoYSkpP2c9aDplJiZlLmxlbmd0aD5iP2c9ZVtiXTpjW2JdPDA/Zz1kLmdldChcIm5lZ0JhckNvbG9yXCIpOmNbYl0+MD9nPWQuZ2V0KFwicG9zQmFyQ29sb3JcIik6Zz1kLmdldChcInplcm9CYXJDb2xvclwiKSxnfSxyZW5kZXJSZWdpb246ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLnZhbHVlcyxlPXRoaXMub3B0aW9ucyxmPXRoaXMudGFyZ2V0LGcsaCxpLGosayxsO2c9Zi5waXhlbEhlaWdodCxpPWIucm91bmQoZy8yKSxqPWEqdGhpcy50b3RhbEJhcldpZHRoLGRbYV08MD8oaz1pLGg9aS0xKTpkW2FdPjA/KGs9MCxoPWktMSk6KGs9aS0xLGg9MiksbD10aGlzLmNhbGNDb2xvcihkW2FdLGEpO2lmKGw9PT1udWxsKXJldHVybjtyZXR1cm4gYyYmKGw9dGhpcy5jYWxjSGlnaGxpZ2h0Q29sb3IobCxlKSksZi5kcmF3UmVjdChqLGssdGhpcy5iYXJXaWR0aC0xLGgtMSxsLGwpfX0pLGQuZm4uc3BhcmtsaW5lLmRpc2NyZXRlPUE9ZyhkLmZuLnNwYXJrbGluZS5fYmFzZSx3LHt0eXBlOlwiZGlzY3JldGVcIixpbml0OmZ1bmN0aW9uKGEsZSxmLGcsaCl7QS5fc3VwZXIuaW5pdC5jYWxsKHRoaXMsYSxlLGYsZyxoKSx0aGlzLnJlZ2lvblNoYXBlcz17fSx0aGlzLnZhbHVlcz1lPWQubWFwKGUsTnVtYmVyKSx0aGlzLm1pbj1iLm1pbi5hcHBseShiLGUpLHRoaXMubWF4PWIubWF4LmFwcGx5KGIsZSksdGhpcy5yYW5nZT10aGlzLm1heC10aGlzLm1pbix0aGlzLndpZHRoPWc9Zi5nZXQoXCJ3aWR0aFwiKT09PVwiYXV0b1wiP2UubGVuZ3RoKjI6dGhpcy53aWR0aCx0aGlzLmludGVydmFsPWIuZmxvb3IoZy9lLmxlbmd0aCksdGhpcy5pdGVtV2lkdGg9Zy9lLmxlbmd0aCxmLmdldChcImNoYXJ0UmFuZ2VNaW5cIikhPT1jJiYoZi5nZXQoXCJjaGFydFJhbmdlQ2xpcFwiKXx8Zi5nZXQoXCJjaGFydFJhbmdlTWluXCIpPHRoaXMubWluKSYmKHRoaXMubWluPWYuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKSksZi5nZXQoXCJjaGFydFJhbmdlTWF4XCIpIT09YyYmKGYuZ2V0KFwiY2hhcnRSYW5nZUNsaXBcIil8fGYuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKT50aGlzLm1heCkmJih0aGlzLm1heD1mLmdldChcImNoYXJ0UmFuZ2VNYXhcIikpLHRoaXMuaW5pdFRhcmdldCgpLHRoaXMudGFyZ2V0JiYodGhpcy5saW5lSGVpZ2h0PWYuZ2V0KFwibGluZUhlaWdodFwiKT09PVwiYXV0b1wiP2Iucm91bmQodGhpcy5jYW52YXNIZWlnaHQqLjMpOmYuZ2V0KFwibGluZUhlaWdodFwiKSl9LGdldFJlZ2lvbjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGIuZmxvb3IoYy90aGlzLml0ZW1XaWR0aCl9LGdldEN1cnJlbnRSZWdpb25GaWVsZHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmN1cnJlbnRSZWdpb247cmV0dXJue2lzTnVsbDp0aGlzLnZhbHVlc1thXT09PWMsdmFsdWU6dGhpcy52YWx1ZXNbYV0sb2Zmc2V0OmF9fSxyZW5kZXJSZWdpb246ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLnZhbHVlcyxlPXRoaXMub3B0aW9ucyxmPXRoaXMubWluLGc9dGhpcy5tYXgsaD10aGlzLnJhbmdlLGo9dGhpcy5pbnRlcnZhbCxrPXRoaXMudGFyZ2V0LGw9dGhpcy5jYW52YXNIZWlnaHQsbT10aGlzLmxpbmVIZWlnaHQsbj1sLW0sbyxwLHEscjtyZXR1cm4gcD1pKGRbYV0sZixnKSxyPWEqaixvPWIucm91bmQobi1uKigocC1mKS9oKSkscT1lLmdldChcInRocmVzaG9sZENvbG9yXCIpJiZwPGUuZ2V0KFwidGhyZXNob2xkVmFsdWVcIik/ZS5nZXQoXCJ0aHJlc2hvbGRDb2xvclwiKTplLmdldChcImxpbmVDb2xvclwiKSxjJiYocT10aGlzLmNhbGNIaWdobGlnaHRDb2xvcihxLGUpKSxrLmRyYXdMaW5lKHIsbyxyLG8rbSxxKX19KSxkLmZuLnNwYXJrbGluZS5idWxsZXQ9Qj1nKGQuZm4uc3BhcmtsaW5lLl9iYXNlLHt0eXBlOlwiYnVsbGV0XCIsaW5pdDpmdW5jdGlvbihhLGQsZSxmLGcpe3ZhciBoLGksajtCLl9zdXBlci5pbml0LmNhbGwodGhpcyxhLGQsZSxmLGcpLHRoaXMudmFsdWVzPWQ9bChkKSxqPWQuc2xpY2UoKSxqWzBdPWpbMF09PT1udWxsP2pbMl06alswXSxqWzFdPWRbMV09PT1udWxsP2pbMl06alsxXSxoPWIubWluLmFwcGx5KGIsZCksaT1iLm1heC5hcHBseShiLGQpLGUuZ2V0KFwiYmFzZVwiKT09PWM/aD1oPDA/aDowOmg9ZS5nZXQoXCJiYXNlXCIpLHRoaXMubWluPWgsdGhpcy5tYXg9aSx0aGlzLnJhbmdlPWktaCx0aGlzLnNoYXBlcz17fSx0aGlzLnZhbHVlU2hhcGVzPXt9LHRoaXMucmVnaW9uZGF0YT17fSx0aGlzLndpZHRoPWY9ZS5nZXQoXCJ3aWR0aFwiKT09PVwiYXV0b1wiP1wiNC4wZW1cIjpmLHRoaXMudGFyZ2V0PXRoaXMuJGVsLnNpbXBsZWRyYXcoZixnLGUuZ2V0KFwiY29tcG9zaXRlXCIpKSxkLmxlbmd0aHx8KHRoaXMuZGlzYWJsZWQ9ITApLHRoaXMuaW5pdFRhcmdldCgpfSxnZXRSZWdpb246ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPXRoaXMudGFyZ2V0LmdldFNoYXBlQXQoYSxiLGQpO3JldHVybiBlIT09YyYmdGhpcy5zaGFwZXNbZV0hPT1jP3RoaXMuc2hhcGVzW2VdOmN9LGdldEN1cnJlbnRSZWdpb25GaWVsZHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmN1cnJlbnRSZWdpb247cmV0dXJue2ZpZWxka2V5OmEuc3Vic3RyKDAsMSksdmFsdWU6dGhpcy52YWx1ZXNbYS5zdWJzdHIoMSldLHJlZ2lvbjphfX0sY2hhbmdlSGlnaGxpZ2h0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuY3VycmVudFJlZ2lvbixjPXRoaXMudmFsdWVTaGFwZXNbYl0sZDtkZWxldGUgdGhpcy5zaGFwZXNbY107c3dpdGNoKGIuc3Vic3RyKDAsMSkpe2Nhc2VcInJcIjpkPXRoaXMucmVuZGVyUmFuZ2UoYi5zdWJzdHIoMSksYSk7YnJlYWs7Y2FzZVwicFwiOmQ9dGhpcy5yZW5kZXJQZXJmb3JtYW5jZShhKTticmVhaztjYXNlXCJ0XCI6ZD10aGlzLnJlbmRlclRhcmdldChhKX10aGlzLnZhbHVlU2hhcGVzW2JdPWQuaWQsdGhpcy5zaGFwZXNbZC5pZF09Yix0aGlzLnRhcmdldC5yZXBsYWNlV2l0aFNoYXBlKGMsZCl9LHJlbmRlclJhbmdlOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcy52YWx1ZXNbYV0sZT1iLnJvdW5kKHRoaXMuY2FudmFzV2lkdGgqKChkLXRoaXMubWluKS90aGlzLnJhbmdlKSksZj10aGlzLm9wdGlvbnMuZ2V0KFwicmFuZ2VDb2xvcnNcIilbYS0yXTtyZXR1cm4gYyYmKGY9dGhpcy5jYWxjSGlnaGxpZ2h0Q29sb3IoZix0aGlzLm9wdGlvbnMpKSx0aGlzLnRhcmdldC5kcmF3UmVjdCgwLDAsZS0xLHRoaXMuY2FudmFzSGVpZ2h0LTEsZixmKX0scmVuZGVyUGVyZm9ybWFuY2U6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcy52YWx1ZXNbMV0sZD1iLnJvdW5kKHRoaXMuY2FudmFzV2lkdGgqKChjLXRoaXMubWluKS90aGlzLnJhbmdlKSksZT10aGlzLm9wdGlvbnMuZ2V0KFwicGVyZm9ybWFuY2VDb2xvclwiKTtyZXR1cm4gYSYmKGU9dGhpcy5jYWxjSGlnaGxpZ2h0Q29sb3IoZSx0aGlzLm9wdGlvbnMpKSx0aGlzLnRhcmdldC5kcmF3UmVjdCgwLGIucm91bmQodGhpcy5jYW52YXNIZWlnaHQqLjMpLGQtMSxiLnJvdW5kKHRoaXMuY2FudmFzSGVpZ2h0Ki40KS0xLGUsZSl9LHJlbmRlclRhcmdldDpmdW5jdGlvbihhKXt2YXIgYz10aGlzLnZhbHVlc1swXSxkPWIucm91bmQodGhpcy5jYW52YXNXaWR0aCooKGMtdGhpcy5taW4pL3RoaXMucmFuZ2UpLXRoaXMub3B0aW9ucy5nZXQoXCJ0YXJnZXRXaWR0aFwiKS8yKSxlPWIucm91bmQodGhpcy5jYW52YXNIZWlnaHQqLjEpLGY9dGhpcy5jYW52YXNIZWlnaHQtZSoyLGc9dGhpcy5vcHRpb25zLmdldChcInRhcmdldENvbG9yXCIpO3JldHVybiBhJiYoZz10aGlzLmNhbGNIaWdobGlnaHRDb2xvcihnLHRoaXMub3B0aW9ucykpLHRoaXMudGFyZ2V0LmRyYXdSZWN0KGQsZSx0aGlzLm9wdGlvbnMuZ2V0KFwidGFyZ2V0V2lkdGhcIiktMSxmLTEsZyxnKX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy52YWx1ZXMubGVuZ3RoLGI9dGhpcy50YXJnZXQsYyxkO2lmKCFCLl9zdXBlci5yZW5kZXIuY2FsbCh0aGlzKSlyZXR1cm47Zm9yKGM9MjtjPGE7YysrKWQ9dGhpcy5yZW5kZXJSYW5nZShjKS5hcHBlbmQoKSx0aGlzLnNoYXBlc1tkLmlkXT1cInJcIitjLHRoaXMudmFsdWVTaGFwZXNbXCJyXCIrY109ZC5pZDt0aGlzLnZhbHVlc1sxXSE9PW51bGwmJihkPXRoaXMucmVuZGVyUGVyZm9ybWFuY2UoKS5hcHBlbmQoKSx0aGlzLnNoYXBlc1tkLmlkXT1cInAxXCIsdGhpcy52YWx1ZVNoYXBlcy5wMT1kLmlkKSx0aGlzLnZhbHVlc1swXSE9PW51bGwmJihkPXRoaXMucmVuZGVyVGFyZ2V0KCkuYXBwZW5kKCksdGhpcy5zaGFwZXNbZC5pZF09XCJ0MFwiLHRoaXMudmFsdWVTaGFwZXMudDA9ZC5pZCksYi5yZW5kZXIoKX19KSxkLmZuLnNwYXJrbGluZS5waWU9Qz1nKGQuZm4uc3BhcmtsaW5lLl9iYXNlLHt0eXBlOlwicGllXCIsaW5pdDpmdW5jdGlvbihhLGMsZSxmLGcpe3ZhciBoPTAsaTtDLl9zdXBlci5pbml0LmNhbGwodGhpcyxhLGMsZSxmLGcpLHRoaXMuc2hhcGVzPXt9LHRoaXMudmFsdWVTaGFwZXM9e30sdGhpcy52YWx1ZXM9Yz1kLm1hcChjLE51bWJlciksZS5nZXQoXCJ3aWR0aFwiKT09PVwiYXV0b1wiJiYodGhpcy53aWR0aD10aGlzLmhlaWdodCk7aWYoYy5sZW5ndGg+MClmb3IoaT1jLmxlbmd0aDtpLS07KWgrPWNbaV07dGhpcy50b3RhbD1oLHRoaXMuaW5pdFRhcmdldCgpLHRoaXMucmFkaXVzPWIuZmxvb3IoYi5taW4odGhpcy5jYW52YXNXaWR0aCx0aGlzLmNhbnZhc0hlaWdodCkvMil9LGdldFJlZ2lvbjpmdW5jdGlvbihhLGIsZCl7dmFyIGU9dGhpcy50YXJnZXQuZ2V0U2hhcGVBdChhLGIsZCk7cmV0dXJuIGUhPT1jJiZ0aGlzLnNoYXBlc1tlXSE9PWM/dGhpcy5zaGFwZXNbZV06Y30sZ2V0Q3VycmVudFJlZ2lvbkZpZWxkczpmdW5jdGlvbigpe3ZhciBhPXRoaXMuY3VycmVudFJlZ2lvbjtyZXR1cm57aXNOdWxsOnRoaXMudmFsdWVzW2FdPT09Yyx2YWx1ZTp0aGlzLnZhbHVlc1thXSxwZXJjZW50OnRoaXMudmFsdWVzW2FdL3RoaXMudG90YWwqMTAwLGNvbG9yOnRoaXMub3B0aW9ucy5nZXQoXCJzbGljZUNvbG9yc1wiKVthJXRoaXMub3B0aW9ucy5nZXQoXCJzbGljZUNvbG9yc1wiKS5sZW5ndGhdLG9mZnNldDphfX0sY2hhbmdlSGlnaGxpZ2h0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuY3VycmVudFJlZ2lvbixjPXRoaXMucmVuZGVyU2xpY2UoYixhKSxkPXRoaXMudmFsdWVTaGFwZXNbYl07ZGVsZXRlIHRoaXMuc2hhcGVzW2RdLHRoaXMudGFyZ2V0LnJlcGxhY2VXaXRoU2hhcGUoZCxjKSx0aGlzLnZhbHVlU2hhcGVzW2JdPWMuaWQsdGhpcy5zaGFwZXNbYy5pZF09Yn0scmVuZGVyU2xpY2U6ZnVuY3Rpb24oYSxkKXt2YXIgZT10aGlzLnRhcmdldCxmPXRoaXMub3B0aW9ucyxnPXRoaXMucmFkaXVzLGg9Zi5nZXQoXCJib3JkZXJXaWR0aFwiKSxpPWYuZ2V0KFwib2Zmc2V0XCIpLGo9MipiLlBJLGs9dGhpcy52YWx1ZXMsbD10aGlzLnRvdGFsLG09aT8yKmIuUEkqKGkvMzYwKTowLG4sbyxwLHEscjtxPWsubGVuZ3RoO2ZvcihwPTA7cDxxO3ArKyl7bj1tLG89bSxsPjAmJihvPW0raiooa1twXS9sKSk7aWYoYT09PXApcmV0dXJuIHI9Zi5nZXQoXCJzbGljZUNvbG9yc1wiKVtwJWYuZ2V0KFwic2xpY2VDb2xvcnNcIikubGVuZ3RoXSxkJiYocj10aGlzLmNhbGNIaWdobGlnaHRDb2xvcihyLGYpKSxlLmRyYXdQaWVTbGljZShnLGcsZy1oLG4sbyxjLHIpO209b319LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBhPXRoaXMudGFyZ2V0LGQ9dGhpcy52YWx1ZXMsZT10aGlzLm9wdGlvbnMsZj10aGlzLnJhZGl1cyxnPWUuZ2V0KFwiYm9yZGVyV2lkdGhcIiksaCxpO2lmKCFDLl9zdXBlci5yZW5kZXIuY2FsbCh0aGlzKSlyZXR1cm47ZyYmYS5kcmF3Q2lyY2xlKGYsZixiLmZsb29yKGYtZy8yKSxlLmdldChcImJvcmRlckNvbG9yXCIpLGMsZykuYXBwZW5kKCk7Zm9yKGk9ZC5sZW5ndGg7aS0tOylkW2ldJiYoaD10aGlzLnJlbmRlclNsaWNlKGkpLmFwcGVuZCgpLHRoaXMudmFsdWVTaGFwZXNbaV09aC5pZCx0aGlzLnNoYXBlc1toLmlkXT1pKTthLnJlbmRlcigpfX0pLGQuZm4uc3BhcmtsaW5lLmJveD1EPWcoZC5mbi5zcGFya2xpbmUuX2Jhc2Use3R5cGU6XCJib3hcIixpbml0OmZ1bmN0aW9uKGEsYixjLGUsZil7RC5fc3VwZXIuaW5pdC5jYWxsKHRoaXMsYSxiLGMsZSxmKSx0aGlzLnZhbHVlcz1kLm1hcChiLE51bWJlciksdGhpcy53aWR0aD1jLmdldChcIndpZHRoXCIpPT09XCJhdXRvXCI/XCI0LjBlbVwiOmUsdGhpcy5pbml0VGFyZ2V0KCksdGhpcy52YWx1ZXMubGVuZ3RofHwodGhpcy5kaXNhYmxlZD0xKX0sZ2V0UmVnaW9uOmZ1bmN0aW9uKCl7cmV0dXJuIDF9LGdldEN1cnJlbnRSZWdpb25GaWVsZHM6ZnVuY3Rpb24oKXt2YXIgYT1be2ZpZWxkOlwibHFcIix2YWx1ZTp0aGlzLnF1YXJ0aWxlc1swXX0se2ZpZWxkOlwibWVkXCIsdmFsdWU6dGhpcy5xdWFydGlsZXNcblsxXX0se2ZpZWxkOlwidXFcIix2YWx1ZTp0aGlzLnF1YXJ0aWxlc1syXX1dO3JldHVybiB0aGlzLmxvdXRsaWVyIT09YyYmYS5wdXNoKHtmaWVsZDpcImxvXCIsdmFsdWU6dGhpcy5sb3V0bGllcn0pLHRoaXMucm91dGxpZXIhPT1jJiZhLnB1c2goe2ZpZWxkOlwicm9cIix2YWx1ZTp0aGlzLnJvdXRsaWVyfSksdGhpcy5sd2hpc2tlciE9PWMmJmEucHVzaCh7ZmllbGQ6XCJsd1wiLHZhbHVlOnRoaXMubHdoaXNrZXJ9KSx0aGlzLnJ3aGlza2VyIT09YyYmYS5wdXNoKHtmaWVsZDpcInJ3XCIsdmFsdWU6dGhpcy5yd2hpc2tlcn0pLGF9LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBhPXRoaXMudGFyZ2V0LGQ9dGhpcy52YWx1ZXMsZT1kLmxlbmd0aCxmPXRoaXMub3B0aW9ucyxnPXRoaXMuY2FudmFzV2lkdGgsaD10aGlzLmNhbnZhc0hlaWdodCxpPWYuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKT09PWM/Yi5taW4uYXBwbHkoYixkKTpmLmdldChcImNoYXJ0UmFuZ2VNaW5cIiksaz1mLmdldChcImNoYXJ0UmFuZ2VNYXhcIik9PT1jP2IubWF4LmFwcGx5KGIsZCk6Zi5nZXQoXCJjaGFydFJhbmdlTWF4XCIpLGw9MCxtLG4sbyxwLHEscixzLHQsdSx2LHc7aWYoIUQuX3N1cGVyLnJlbmRlci5jYWxsKHRoaXMpKXJldHVybjtpZihmLmdldChcInJhd1wiKSlmLmdldChcInNob3dPdXRsaWVyc1wiKSYmZC5sZW5ndGg+NT8obj1kWzBdLG09ZFsxXSxwPWRbMl0scT1kWzNdLHI9ZFs0XSxzPWRbNV0sdD1kWzZdKToobT1kWzBdLHA9ZFsxXSxxPWRbMl0scj1kWzNdLHM9ZFs0XSk7ZWxzZXtkLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS1ifSkscD1qKGQsMSkscT1qKGQsMikscj1qKGQsMyksbz1yLXA7aWYoZi5nZXQoXCJzaG93T3V0bGllcnNcIikpe209cz1jO2Zvcih1PTA7dTxlO3UrKyltPT09YyYmZFt1XT5wLW8qZi5nZXQoXCJvdXRsaWVySVFSXCIpJiYobT1kW3VdKSxkW3VdPHIrbypmLmdldChcIm91dGxpZXJJUVJcIikmJihzPWRbdV0pO249ZFswXSx0PWRbZS0xXX1lbHNlIG09ZFswXSxzPWRbZS0xXX10aGlzLnF1YXJ0aWxlcz1bcCxxLHJdLHRoaXMubHdoaXNrZXI9bSx0aGlzLnJ3aGlza2VyPXMsdGhpcy5sb3V0bGllcj1uLHRoaXMucm91dGxpZXI9dCx3PWcvKGstaSsxKSxmLmdldChcInNob3dPdXRsaWVyc1wiKSYmKGw9Yi5jZWlsKGYuZ2V0KFwic3BvdFJhZGl1c1wiKSksZy09MipiLmNlaWwoZi5nZXQoXCJzcG90UmFkaXVzXCIpKSx3PWcvKGstaSsxKSxuPG0mJmEuZHJhd0NpcmNsZSgobi1pKSp3K2wsaC8yLGYuZ2V0KFwic3BvdFJhZGl1c1wiKSxmLmdldChcIm91dGxpZXJMaW5lQ29sb3JcIiksZi5nZXQoXCJvdXRsaWVyRmlsbENvbG9yXCIpKS5hcHBlbmQoKSx0PnMmJmEuZHJhd0NpcmNsZSgodC1pKSp3K2wsaC8yLGYuZ2V0KFwic3BvdFJhZGl1c1wiKSxmLmdldChcIm91dGxpZXJMaW5lQ29sb3JcIiksZi5nZXQoXCJvdXRsaWVyRmlsbENvbG9yXCIpKS5hcHBlbmQoKSksYS5kcmF3UmVjdChiLnJvdW5kKChwLWkpKncrbCksYi5yb3VuZChoKi4xKSxiLnJvdW5kKChyLXApKncpLGIucm91bmQoaCouOCksZi5nZXQoXCJib3hMaW5lQ29sb3JcIiksZi5nZXQoXCJib3hGaWxsQ29sb3JcIikpLmFwcGVuZCgpLGEuZHJhd0xpbmUoYi5yb3VuZCgobS1pKSp3K2wpLGIucm91bmQoaC8yKSxiLnJvdW5kKChwLWkpKncrbCksYi5yb3VuZChoLzIpLGYuZ2V0KFwibGluZUNvbG9yXCIpKS5hcHBlbmQoKSxhLmRyYXdMaW5lKGIucm91bmQoKG0taSkqdytsKSxiLnJvdW5kKGgvNCksYi5yb3VuZCgobS1pKSp3K2wpLGIucm91bmQoaC1oLzQpLGYuZ2V0KFwid2hpc2tlckNvbG9yXCIpKS5hcHBlbmQoKSxhLmRyYXdMaW5lKGIucm91bmQoKHMtaSkqdytsKSxiLnJvdW5kKGgvMiksYi5yb3VuZCgoci1pKSp3K2wpLGIucm91bmQoaC8yKSxmLmdldChcImxpbmVDb2xvclwiKSkuYXBwZW5kKCksYS5kcmF3TGluZShiLnJvdW5kKChzLWkpKncrbCksYi5yb3VuZChoLzQpLGIucm91bmQoKHMtaSkqdytsKSxiLnJvdW5kKGgtaC80KSxmLmdldChcIndoaXNrZXJDb2xvclwiKSkuYXBwZW5kKCksYS5kcmF3TGluZShiLnJvdW5kKChxLWkpKncrbCksYi5yb3VuZChoKi4xKSxiLnJvdW5kKChxLWkpKncrbCksYi5yb3VuZChoKi45KSxmLmdldChcIm1lZGlhbkNvbG9yXCIpKS5hcHBlbmQoKSxmLmdldChcInRhcmdldFwiKSYmKHY9Yi5jZWlsKGYuZ2V0KFwic3BvdFJhZGl1c1wiKSksYS5kcmF3TGluZShiLnJvdW5kKChmLmdldChcInRhcmdldFwiKS1pKSp3K2wpLGIucm91bmQoaC8yLXYpLGIucm91bmQoKGYuZ2V0KFwidGFyZ2V0XCIpLWkpKncrbCksYi5yb3VuZChoLzIrdiksZi5nZXQoXCJ0YXJnZXRDb2xvclwiKSkuYXBwZW5kKCksYS5kcmF3TGluZShiLnJvdW5kKChmLmdldChcInRhcmdldFwiKS1pKSp3K2wtdiksYi5yb3VuZChoLzIpLGIucm91bmQoKGYuZ2V0KFwidGFyZ2V0XCIpLWkpKncrbCt2KSxiLnJvdW5kKGgvMiksZi5nZXQoXCJ0YXJnZXRDb2xvclwiKSkuYXBwZW5kKCkpLGEucmVuZGVyKCl9fSksRz1nKHtpbml0OmZ1bmN0aW9uKGEsYixjLGQpe3RoaXMudGFyZ2V0PWEsdGhpcy5pZD1iLHRoaXMudHlwZT1jLHRoaXMuYXJncz1kfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YXJnZXQuYXBwZW5kU2hhcGUodGhpcyksdGhpc319KSxIPWcoe19weHJlZ2V4Oi8oXFxkKykocHgpP1xccyokL2ksaW5pdDpmdW5jdGlvbihhLGIsYyl7aWYoIWEpcmV0dXJuO3RoaXMud2lkdGg9YSx0aGlzLmhlaWdodD1iLHRoaXMudGFyZ2V0PWMsdGhpcy5sYXN0U2hhcGVJZD1udWxsLGNbMF0mJihjPWNbMF0pLGQuZGF0YShjLFwiX2pxc192Y2FudmFzXCIsdGhpcyl9LGRyYXdMaW5lOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdGhpcy5kcmF3U2hhcGUoW1thLGJdLFtjLGRdXSxlLGYpfSxkcmF3U2hhcGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuX2dlblNoYXBlKFwiU2hhcGVcIixbYSxiLGMsZF0pfSxkcmF3Q2lyY2xlOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdGhpcy5fZ2VuU2hhcGUoXCJDaXJjbGVcIixbYSxiLGMsZCxlLGZdKX0sZHJhd1BpZVNsaWNlOmZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3JldHVybiB0aGlzLl9nZW5TaGFwZShcIlBpZVNsaWNlXCIsW2EsYixjLGQsZSxmLGddKX0sZHJhd1JlY3Q6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3JldHVybiB0aGlzLl9nZW5TaGFwZShcIlJlY3RcIixbYSxiLGMsZCxlLGZdKX0sZ2V0RWxlbWVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNhbnZhc30sZ2V0TGFzdFNoYXBlSWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sYXN0U2hhcGVJZH0scmVzZXQ6ZnVuY3Rpb24oKXthbGVydChcInJlc2V0IG5vdCBpbXBsZW1lbnRlZFwiKX0sX2luc2VydDpmdW5jdGlvbihhLGIpe2QoYikuaHRtbChhKX0sX2NhbGN1bGF0ZVBpeGVsRGltczpmdW5jdGlvbihhLGIsYyl7dmFyIGU7ZT10aGlzLl9weHJlZ2V4LmV4ZWMoYiksZT90aGlzLnBpeGVsSGVpZ2h0PWVbMV06dGhpcy5waXhlbEhlaWdodD1kKGMpLmhlaWdodCgpLGU9dGhpcy5fcHhyZWdleC5leGVjKGEpLGU/dGhpcy5waXhlbFdpZHRoPWVbMV06dGhpcy5waXhlbFdpZHRoPWQoYykud2lkdGgoKX0sX2dlblNoYXBlOmZ1bmN0aW9uKGEsYil7dmFyIGM9TCsrO3JldHVybiBiLnVuc2hpZnQoYyksbmV3IEcodGhpcyxjLGEsYil9LGFwcGVuZFNoYXBlOmZ1bmN0aW9uKGEpe2FsZXJ0KFwiYXBwZW5kU2hhcGUgbm90IGltcGxlbWVudGVkXCIpfSxyZXBsYWNlV2l0aFNoYXBlOmZ1bmN0aW9uKGEsYil7YWxlcnQoXCJyZXBsYWNlV2l0aFNoYXBlIG5vdCBpbXBsZW1lbnRlZFwiKX0saW5zZXJ0QWZ0ZXJTaGFwZTpmdW5jdGlvbihhLGIpe2FsZXJ0KFwiaW5zZXJ0QWZ0ZXJTaGFwZSBub3QgaW1wbGVtZW50ZWRcIil9LHJlbW92ZVNoYXBlSWQ6ZnVuY3Rpb24oYSl7YWxlcnQoXCJyZW1vdmVTaGFwZUlkIG5vdCBpbXBsZW1lbnRlZFwiKX0sZ2V0U2hhcGVBdDpmdW5jdGlvbihhLGIsYyl7YWxlcnQoXCJnZXRTaGFwZUF0IG5vdCBpbXBsZW1lbnRlZFwiKX0scmVuZGVyOmZ1bmN0aW9uKCl7YWxlcnQoXCJyZW5kZXIgbm90IGltcGxlbWVudGVkXCIpfX0pLEk9ZyhILHtpbml0OmZ1bmN0aW9uKGIsZSxmLGcpe0kuX3N1cGVyLmluaXQuY2FsbCh0aGlzLGIsZSxmKSx0aGlzLmNhbnZhcz1hLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksZlswXSYmKGY9ZlswXSksZC5kYXRhKGYsXCJfanFzX3ZjYW52YXNcIix0aGlzKSxkKHRoaXMuY2FudmFzKS5jc3Moe2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIix3aWR0aDpiLGhlaWdodDplLHZlcnRpY2FsQWxpZ246XCJ0b3BcIn0pLHRoaXMuX2luc2VydCh0aGlzLmNhbnZhcyxmKSx0aGlzLl9jYWxjdWxhdGVQaXhlbERpbXMoYixlLHRoaXMuY2FudmFzKSx0aGlzLmNhbnZhcy53aWR0aD10aGlzLnBpeGVsV2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0PXRoaXMucGl4ZWxIZWlnaHQsdGhpcy5pbnRlcmFjdD1nLHRoaXMuc2hhcGVzPXt9LHRoaXMuc2hhcGVzZXE9W10sdGhpcy5jdXJyZW50VGFyZ2V0U2hhcGVJZD1jLGQodGhpcy5jYW52YXMpLmNzcyh7d2lkdGg6dGhpcy5waXhlbFdpZHRoLGhlaWdodDp0aGlzLnBpeGVsSGVpZ2h0fSl9LF9nZXRDb250ZXh0OmZ1bmN0aW9uKGEsYixkKXt2YXIgZT10aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGEhPT1jJiYoZS5zdHJva2VTdHlsZT1hKSxlLmxpbmVXaWR0aD1kPT09Yz8xOmQsYiE9PWMmJihlLmZpbGxTdHlsZT1iKSxlfSxyZXNldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX2dldENvbnRleHQoKTthLmNsZWFyUmVjdCgwLDAsdGhpcy5waXhlbFdpZHRoLHRoaXMucGl4ZWxIZWlnaHQpLHRoaXMuc2hhcGVzPXt9LHRoaXMuc2hhcGVzZXE9W10sdGhpcy5jdXJyZW50VGFyZ2V0U2hhcGVJZD1jfSxfZHJhd1NoYXBlOmZ1bmN0aW9uKGEsYixkLGUsZil7dmFyIGc9dGhpcy5fZ2V0Q29udGV4dChkLGUsZiksaCxpO2cuYmVnaW5QYXRoKCksZy5tb3ZlVG8oYlswXVswXSsuNSxiWzBdWzFdKy41KTtmb3IoaD0xLGk9Yi5sZW5ndGg7aDxpO2grKylnLmxpbmVUbyhiW2hdWzBdKy41LGJbaF1bMV0rLjUpO2QhPT1jJiZnLnN0cm9rZSgpLGUhPT1jJiZnLmZpbGwoKSx0aGlzLnRhcmdldFghPT1jJiZ0aGlzLnRhcmdldFkhPT1jJiZnLmlzUG9pbnRJblBhdGgodGhpcy50YXJnZXRYLHRoaXMudGFyZ2V0WSkmJih0aGlzLmN1cnJlbnRUYXJnZXRTaGFwZUlkPWEpfSxfZHJhd0NpcmNsZTpmdW5jdGlvbihhLGQsZSxmLGcsaCxpKXt2YXIgaj10aGlzLl9nZXRDb250ZXh0KGcsaCxpKTtqLmJlZ2luUGF0aCgpLGouYXJjKGQsZSxmLDAsMipiLlBJLCExKSx0aGlzLnRhcmdldFghPT1jJiZ0aGlzLnRhcmdldFkhPT1jJiZqLmlzUG9pbnRJblBhdGgodGhpcy50YXJnZXRYLHRoaXMudGFyZ2V0WSkmJih0aGlzLmN1cnJlbnRUYXJnZXRTaGFwZUlkPWEpLGchPT1jJiZqLnN0cm9rZSgpLGghPT1jJiZqLmZpbGwoKX0sX2RyYXdQaWVTbGljZTpmdW5jdGlvbihhLGIsZCxlLGYsZyxoLGkpe3ZhciBqPXRoaXMuX2dldENvbnRleHQoaCxpKTtqLmJlZ2luUGF0aCgpLGoubW92ZVRvKGIsZCksai5hcmMoYixkLGUsZixnLCExKSxqLmxpbmVUbyhiLGQpLGouY2xvc2VQYXRoKCksaCE9PWMmJmouc3Ryb2tlKCksaSYmai5maWxsKCksdGhpcy50YXJnZXRYIT09YyYmdGhpcy50YXJnZXRZIT09YyYmai5pc1BvaW50SW5QYXRoKHRoaXMudGFyZ2V0WCx0aGlzLnRhcmdldFkpJiYodGhpcy5jdXJyZW50VGFyZ2V0U2hhcGVJZD1hKX0sX2RyYXdSZWN0OmZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3JldHVybiB0aGlzLl9kcmF3U2hhcGUoYSxbW2IsY10sW2IrZCxjXSxbYitkLGMrZV0sW2IsYytlXSxbYixjXV0sZixnKX0sYXBwZW5kU2hhcGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuc2hhcGVzW2EuaWRdPWEsdGhpcy5zaGFwZXNlcS5wdXNoKGEuaWQpLHRoaXMubGFzdFNoYXBlSWQ9YS5pZCxhLmlkfSxyZXBsYWNlV2l0aFNoYXBlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5zaGFwZXNlcSxkO3RoaXMuc2hhcGVzW2IuaWRdPWI7Zm9yKGQ9Yy5sZW5ndGg7ZC0tOyljW2RdPT1hJiYoY1tkXT1iLmlkKTtkZWxldGUgdGhpcy5zaGFwZXNbYV19LHJlcGxhY2VXaXRoU2hhcGVzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5zaGFwZXNlcSxkPXt9LGUsZixnO2ZvcihmPWEubGVuZ3RoO2YtLTspZFthW2ZdXT0hMDtmb3IoZj1jLmxlbmd0aDtmLS07KWU9Y1tmXSxkW2VdJiYoYy5zcGxpY2UoZiwxKSxkZWxldGUgdGhpcy5zaGFwZXNbZV0sZz1mKTtmb3IoZj1iLmxlbmd0aDtmLS07KWMuc3BsaWNlKGcsMCxiW2ZdLmlkKSx0aGlzLnNoYXBlc1tiW2ZdLmlkXT1iW2ZdfSxpbnNlcnRBZnRlclNoYXBlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5zaGFwZXNlcSxkO2ZvcihkPWMubGVuZ3RoO2QtLTspaWYoY1tkXT09PWEpe2Muc3BsaWNlKGQrMSwwLGIuaWQpLHRoaXMuc2hhcGVzW2IuaWRdPWI7cmV0dXJufX0scmVtb3ZlU2hhcGVJZDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnNoYXBlc2VxLGM7Zm9yKGM9Yi5sZW5ndGg7Yy0tOylpZihiW2NdPT09YSl7Yi5zcGxpY2UoYywxKTticmVha31kZWxldGUgdGhpcy5zaGFwZXNbYV19LGdldFNoYXBlQXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLnRhcmdldFg9Yix0aGlzLnRhcmdldFk9Yyx0aGlzLnJlbmRlcigpLHRoaXMuY3VycmVudFRhcmdldFNoYXBlSWR9LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBhPXRoaXMuc2hhcGVzZXEsYj10aGlzLnNoYXBlcyxjPWEubGVuZ3RoLGQ9dGhpcy5fZ2V0Q29udGV4dCgpLGUsZixnO2QuY2xlYXJSZWN0KDAsMCx0aGlzLnBpeGVsV2lkdGgsdGhpcy5waXhlbEhlaWdodCk7Zm9yKGc9MDtnPGM7ZysrKWU9YVtnXSxmPWJbZV0sdGhpc1tcIl9kcmF3XCIrZi50eXBlXS5hcHBseSh0aGlzLGYuYXJncyk7dGhpcy5pbnRlcmFjdHx8KHRoaXMuc2hhcGVzPXt9LHRoaXMuc2hhcGVzZXE9W10pfX0pLEo9ZyhILHtpbml0OmZ1bmN0aW9uKGIsYyxlKXt2YXIgZjtKLl9zdXBlci5pbml0LmNhbGwodGhpcyxiLGMsZSksZVswXSYmKGU9ZVswXSksZC5kYXRhKGUsXCJfanFzX3ZjYW52YXNcIix0aGlzKSx0aGlzLmNhbnZhcz1hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLGQodGhpcy5jYW52YXMpLmNzcyh7ZGlzcGxheTpcImlubGluZS1ibG9ja1wiLHBvc2l0aW9uOlwicmVsYXRpdmVcIixvdmVyZmxvdzpcImhpZGRlblwiLHdpZHRoOmIsaGVpZ2h0OmMsbWFyZ2luOlwiMHB4XCIscGFkZGluZzpcIjBweFwiLHZlcnRpY2FsQWxpZ246XCJ0b3BcIn0pLHRoaXMuX2luc2VydCh0aGlzLmNhbnZhcyxlKSx0aGlzLl9jYWxjdWxhdGVQaXhlbERpbXMoYixjLHRoaXMuY2FudmFzKSx0aGlzLmNhbnZhcy53aWR0aD10aGlzLnBpeGVsV2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0PXRoaXMucGl4ZWxIZWlnaHQsZj0nPHY6Z3JvdXAgY29vcmRvcmlnaW49XCIwIDBcIiBjb29yZHNpemU9XCInK3RoaXMucGl4ZWxXaWR0aCtcIiBcIit0aGlzLnBpeGVsSGVpZ2h0KydcIicrJyBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDonK3RoaXMucGl4ZWxXaWR0aCtcInB4O2hlaWdodD1cIit0aGlzLnBpeGVsSGVpZ2h0KydweDtcIj48L3Y6Z3JvdXA+Jyx0aGlzLmNhbnZhcy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVFbmRcIixmKSx0aGlzLmdyb3VwPWQodGhpcy5jYW52YXMpLmNoaWxkcmVuKClbMF0sdGhpcy5yZW5kZXJlZD0hMSx0aGlzLnByZXJlbmRlcj1cIlwifSxfZHJhd1NoYXBlOmZ1bmN0aW9uKGEsYixkLGUsZil7dmFyIGc9W10saCxpLGosayxsLG0sbjtmb3Iobj0wLG09Yi5sZW5ndGg7bjxtO24rKylnW25dPVwiXCIrYltuXVswXStcIixcIitiW25dWzFdO3JldHVybiBoPWcuc3BsaWNlKDAsMSksZj1mPT09Yz8xOmYsaT1kPT09Yz8nIHN0cm9rZWQ9XCJmYWxzZVwiICc6JyBzdHJva2VXZWlnaHQ9XCInK2YrJ3B4XCIgc3Ryb2tlQ29sb3I9XCInK2QrJ1wiICcsaj1lPT09Yz8nIGZpbGxlZD1cImZhbHNlXCInOicgZmlsbENvbG9yPVwiJytlKydcIiBmaWxsZWQ9XCJ0cnVlXCIgJyxrPWdbMF09PT1nW2cubGVuZ3RoLTFdP1wieCBcIjpcIlwiLGw9Jzx2OnNoYXBlIGNvb3Jkb3JpZ2luPVwiMCAwXCIgY29vcmRzaXplPVwiJyt0aGlzLnBpeGVsV2lkdGgrXCIgXCIrdGhpcy5waXhlbEhlaWdodCsnXCIgJysnIGlkPVwianFzc2hhcGUnK2ErJ1wiICcraStqKycgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjBweDt0b3A6MHB4O2hlaWdodDonK3RoaXMucGl4ZWxIZWlnaHQrXCJweDt3aWR0aDpcIit0aGlzLnBpeGVsV2lkdGgrJ3B4O3BhZGRpbmc6MHB4O21hcmdpbjowcHg7XCIgJysnIHBhdGg9XCJtICcraCtcIiBsIFwiK2cuam9pbihcIiwgXCIpK1wiIFwiK2srJ2VcIj4nK1wiIDwvdjpzaGFwZT5cIixsfSxfZHJhd0NpcmNsZTpmdW5jdGlvbihhLGIsZCxlLGYsZyxoKXt2YXIgaSxqLGs7cmV0dXJuIGItPWUsZC09ZSxpPWY9PT1jPycgc3Ryb2tlZD1cImZhbHNlXCIgJzonIHN0cm9rZVdlaWdodD1cIicraCsncHhcIiBzdHJva2VDb2xvcj1cIicrZisnXCIgJyxqPWc9PT1jPycgZmlsbGVkPVwiZmFsc2VcIic6JyBmaWxsQ29sb3I9XCInK2crJ1wiIGZpbGxlZD1cInRydWVcIiAnLGs9Jzx2Om92YWwgIGlkPVwianFzc2hhcGUnK2ErJ1wiICcraStqKycgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6JytkK1wicHg7IGxlZnQ6XCIrYitcInB4OyB3aWR0aDpcIitlKjIrXCJweDsgaGVpZ2h0OlwiK2UqMisncHhcIj48L3Y6b3ZhbD4nLGt9LF9kcmF3UGllU2xpY2U6ZnVuY3Rpb24oYSxkLGUsZixnLGgsaSxqKXt2YXIgayxsLG0sbixvLHAscSxyO2lmKGc9PT1oKXJldHVyblwiXCI7aC1nPT09MipiLlBJJiYoZz0wLGg9MipiLlBJKSxsPWQrYi5yb3VuZChiLmNvcyhnKSpmKSxtPWUrYi5yb3VuZChiLnNpbihnKSpmKSxuPWQrYi5yb3VuZChiLmNvcyhoKSpmKSxvPWUrYi5yb3VuZChiLnNpbihoKSpmKTtpZihsPT09biYmbT09PW8pe2lmKGgtZzxiLlBJKXJldHVyblwiXCI7bD1uPWQrZixtPW89ZX1yZXR1cm4gbD09PW4mJm09PT1vJiZoLWc8Yi5QST9cIlwiOihrPVtkLWYsZS1mLGQrZixlK2YsbCxtLG4sb10scD1pPT09Yz8nIHN0cm9rZWQ9XCJmYWxzZVwiICc6JyBzdHJva2VXZWlnaHQ9XCIxcHhcIiBzdHJva2VDb2xvcj1cIicraSsnXCIgJyxxPWo9PT1jPycgZmlsbGVkPVwiZmFsc2VcIic6JyBmaWxsQ29sb3I9XCInK2orJ1wiIGZpbGxlZD1cInRydWVcIiAnLHI9Jzx2OnNoYXBlIGNvb3Jkb3JpZ2luPVwiMCAwXCIgY29vcmRzaXplPVwiJyt0aGlzLnBpeGVsV2lkdGgrXCIgXCIrdGhpcy5waXhlbEhlaWdodCsnXCIgJysnIGlkPVwianFzc2hhcGUnK2ErJ1wiICcrcCtxKycgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjBweDt0b3A6MHB4O2hlaWdodDonK3RoaXMucGl4ZWxIZWlnaHQrXCJweDt3aWR0aDpcIit0aGlzLnBpeGVsV2lkdGgrJ3B4O3BhZGRpbmc6MHB4O21hcmdpbjowcHg7XCIgJysnIHBhdGg9XCJtICcrZCtcIixcIitlK1wiIHdhIFwiK2suam9pbihcIiwgXCIpKycgeCBlXCI+JytcIiA8L3Y6c2hhcGU+XCIscil9LF9kcmF3UmVjdDpmdW5jdGlvbihhLGIsYyxkLGUsZixnKXtyZXR1cm4gdGhpcy5fZHJhd1NoYXBlKGEsW1tiLGNdLFtiLGMrZV0sW2IrZCxjK2VdLFtiK2QsY10sW2IsY11dLGYsZyl9LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy5ncm91cC5pbm5lckhUTUw9XCJcIn0sYXBwZW5kU2hhcGU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1tcIl9kcmF3XCIrYS50eXBlXS5hcHBseSh0aGlzLGEuYXJncyk7cmV0dXJuIHRoaXMucmVuZGVyZWQ/dGhpcy5ncm91cC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVFbmRcIixiKTp0aGlzLnByZXJlbmRlcis9Yix0aGlzLmxhc3RTaGFwZUlkPWEuaWQsYS5pZH0scmVwbGFjZVdpdGhTaGFwZTpmdW5jdGlvbihhLGIpe3ZhciBjPWQoXCIjanFzc2hhcGVcIithKSxlPXRoaXNbXCJfZHJhd1wiK2IudHlwZV0uYXBwbHkodGhpcyxiLmFyZ3MpO2NbMF0ub3V0ZXJIVE1MPWV9LHJlcGxhY2VXaXRoU2hhcGVzOmZ1bmN0aW9uKGEsYil7dmFyIGM9ZChcIiNqcXNzaGFwZVwiK2FbMF0pLGU9XCJcIixmPWIubGVuZ3RoLGc7Zm9yKGc9MDtnPGY7ZysrKWUrPXRoaXNbXCJfZHJhd1wiK2JbZ10udHlwZV0uYXBwbHkodGhpcyxiW2ddLmFyZ3MpO2NbMF0ub3V0ZXJIVE1MPWU7Zm9yKGc9MTtnPGEubGVuZ3RoO2crKylkKFwiI2pxc3NoYXBlXCIrYVtnXSkucmVtb3ZlKCl9LGluc2VydEFmdGVyU2hhcGU6ZnVuY3Rpb24oYSxiKXt2YXIgYz1kKFwiI2pxc3NoYXBlXCIrYSksZT10aGlzW1wiX2RyYXdcIitiLnR5cGVdLmFwcGx5KHRoaXMsYi5hcmdzKTtjWzBdLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyRW5kXCIsZSl9LHJlbW92ZVNoYXBlSWQ6ZnVuY3Rpb24oYSl7dmFyIGI9ZChcIiNqcXNzaGFwZVwiK2EpO3RoaXMuZ3JvdXAucmVtb3ZlQ2hpbGQoYlswXSl9LGdldFNoYXBlQXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEuaWQuc3Vic3RyKDgpO3JldHVybiBkfSxyZW5kZXI6ZnVuY3Rpb24oKXt0aGlzLnJlbmRlcmVkfHwodGhpcy5ncm91cC5pbm5lckhUTUw9dGhpcy5wcmVyZW5kZXIsdGhpcy5yZW5kZXJlZD0hMCl9fSl9KX0pKGRvY3VtZW50LE1hdGgpOyIsIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLyogU2V0IHVwIGEgUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHNoaW0gc28gd2UgY2FuIGFuaW1hdGUgZWZmaWNpZW50bHkgRk9SXG4gICAqIEdSRUFUIEpVU1RJQ0UuICovXG4gIHZhciByZXF1ZXN0SW50ZXJ2YWwsIGNhbmNlbEludGVydmFsO1xuXG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmFmID0gZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxuICAgICAgICAgICAgICBnbG9iYWwud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgIGdsb2JhbC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgICAgICAgZ2xvYmFsLm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxuICAgICAgICAgICAgICBnbG9iYWwubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICxcbiAgICAgICAgY2FmID0gZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lICAgICAgICB8fFxuICAgICAgICAgICAgICBnbG9iYWwud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgIHx8XG4gICAgICAgICAgICAgIGdsb2JhbC5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSAgICAgfHxcbiAgICAgICAgICAgICAgZ2xvYmFsLm9DYW5jZWxBbmltYXRpb25GcmFtZSAgICAgICB8fFxuICAgICAgICAgICAgICBnbG9iYWwubXNDYW5jZWxBbmltYXRpb25GcmFtZSAgICAgIDtcblxuICAgIGlmKHJhZiAmJiBjYWYpIHtcbiAgICAgIHJlcXVlc3RJbnRlcnZhbCA9IGZ1bmN0aW9uKGZuLCBkZWxheSkge1xuICAgICAgICB2YXIgaGFuZGxlID0ge3ZhbHVlOiBudWxsfTtcblxuICAgICAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICAgIGhhbmRsZS52YWx1ZSA9IHJhZihsb29wKTtcbiAgICAgICAgICBmbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9vcCgpO1xuICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgfTtcblxuICAgICAgY2FuY2VsSW50ZXJ2YWwgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgY2FmKGhhbmRsZS52YWx1ZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgcmVxdWVzdEludGVydmFsID0gc2V0SW50ZXJ2YWw7XG4gICAgICBjYW5jZWxJbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWw7XG4gICAgfVxuICB9KCkpO1xuXG4gIC8qIENhdG11bGwtcm9tIHNwbGluZSBzdHVmZnMuICovXG4gIC8qXG4gIGZ1bmN0aW9uIHVwc2FtcGxlKG4sIHNwbGluZSkge1xuICAgIHZhciBwb2x5bGluZSA9IFtdLFxuICAgICAgICBsZW4gPSBzcGxpbmUubGVuZ3RoLFxuICAgICAgICBieCAgPSBzcGxpbmVbMF0sXG4gICAgICAgIGJ5ICA9IHNwbGluZVsxXSxcbiAgICAgICAgY3ggID0gc3BsaW5lWzJdLFxuICAgICAgICBjeSAgPSBzcGxpbmVbM10sXG4gICAgICAgIGR4ICA9IHNwbGluZVs0XSxcbiAgICAgICAgZHkgID0gc3BsaW5lWzVdLFxuICAgICAgICBpLCBqLCBheCwgYXksIHB4LCBxeCwgcngsIHN4LCBweSwgcXksIHJ5LCBzeSwgdDtcblxuICAgIGZvcihpID0gNjsgaSAhPT0gc3BsaW5lLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBheCA9IGJ4O1xuICAgICAgYnggPSBjeDtcbiAgICAgIGN4ID0gZHg7XG4gICAgICBkeCA9IHNwbGluZVtpICAgIF07XG4gICAgICBweCA9IC0wLjUgKiBheCArIDEuNSAqIGJ4IC0gMS41ICogY3ggKyAwLjUgKiBkeDtcbiAgICAgIHF4ID0gICAgICAgIGF4IC0gMi41ICogYnggKyAyLjAgKiBjeCAtIDAuNSAqIGR4O1xuICAgICAgcnggPSAtMC41ICogYXggICAgICAgICAgICArIDAuNSAqIGN4ICAgICAgICAgICA7XG4gICAgICBzeCA9ICAgICAgICAgICAgICAgICAgIGJ4ICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgYXkgPSBieTtcbiAgICAgIGJ5ID0gY3k7XG4gICAgICBjeSA9IGR5O1xuICAgICAgZHkgPSBzcGxpbmVbaSArIDFdO1xuICAgICAgcHkgPSAtMC41ICogYXkgKyAxLjUgKiBieSAtIDEuNSAqIGN5ICsgMC41ICogZHk7XG4gICAgICBxeSA9ICAgICAgICBheSAtIDIuNSAqIGJ5ICsgMi4wICogY3kgLSAwLjUgKiBkeTtcbiAgICAgIHJ5ID0gLTAuNSAqIGF5ICAgICAgICAgICAgKyAwLjUgKiBjeSAgICAgICAgICAgO1xuICAgICAgc3kgPSAgICAgICAgICAgICAgICAgICBieSAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICAgIGZvcihqID0gMDsgaiAhPT0gbjsgKytqKSB7XG4gICAgICAgIHQgPSBqIC8gbjtcblxuICAgICAgICBwb2x5bGluZS5wdXNoKFxuICAgICAgICAgICgocHggKiB0ICsgcXgpICogdCArIHJ4KSAqIHQgKyBzeCxcbiAgICAgICAgICAoKHB5ICogdCArIHF5KSAqIHQgKyByeSkgKiB0ICsgc3lcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwb2x5bGluZS5wdXNoKFxuICAgICAgcHggKyBxeCArIHJ4ICsgc3gsXG4gICAgICBweSArIHF5ICsgcnkgKyBzeVxuICAgICk7XG5cbiAgICByZXR1cm4gcG9seWxpbmU7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duc2FtcGxlKG4sIHBvbHlsaW5lKSB7XG4gICAgdmFyIGxlbiA9IDAsXG4gICAgICAgIGksIGR4LCBkeTtcblxuICAgIGZvcihpID0gMjsgaSAhPT0gcG9seWxpbmUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGR4ID0gcG9seWxpbmVbaSAgICBdIC0gcG9seWxpbmVbaSAtIDJdO1xuICAgICAgZHkgPSBwb2x5bGluZVtpICsgMV0gLSBwb2x5bGluZVtpIC0gMV07XG4gICAgICBsZW4gKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICBsZW4gLz0gbjtcblxuICAgIHZhciBzbWFsbCA9IFtdLFxuICAgICAgICB0YXJnZXQgPSBsZW4sXG4gICAgICAgIG1pbiA9IDAsXG4gICAgICAgIG1heCwgdDtcblxuICAgIHNtYWxsLnB1c2gocG9seWxpbmVbMF0sIHBvbHlsaW5lWzFdKTtcblxuICAgIGZvcihpID0gMjsgaSAhPT0gcG9seWxpbmUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGR4ID0gcG9seWxpbmVbaSAgICBdIC0gcG9seWxpbmVbaSAtIDJdO1xuICAgICAgZHkgPSBwb2x5bGluZVtpICsgMV0gLSBwb2x5bGluZVtpIC0gMV07XG4gICAgICBtYXggPSBtaW4gKyBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICBpZihtYXggPiB0YXJnZXQpIHtcbiAgICAgICAgdCA9ICh0YXJnZXQgLSBtaW4pIC8gKG1heCAtIG1pbik7XG5cbiAgICAgICAgc21hbGwucHVzaChcbiAgICAgICAgICBwb2x5bGluZVtpIC0gMl0gKyBkeCAqIHQsXG4gICAgICAgICAgcG9seWxpbmVbaSAtIDFdICsgZHkgKiB0XG4gICAgICAgICk7XG5cbiAgICAgICAgdGFyZ2V0ICs9IGxlbjtcbiAgICAgIH1cblxuICAgICAgbWluID0gbWF4O1xuICAgIH1cblxuICAgIHNtYWxsLnB1c2gocG9seWxpbmVbcG9seWxpbmUubGVuZ3RoIC0gMl0sIHBvbHlsaW5lW3BvbHlsaW5lLmxlbmd0aCAtIDFdKTtcblxuICAgIHJldHVybiBzbWFsbDtcbiAgfVxuICAqL1xuXG4gIC8qIERlZmluZSBza3ljb24gdGhpbmdzLiAqL1xuICAvKiBGSVhNRTogSSdtICpyZWFsbHkgcmVhbGx5KiBzb3JyeSB0aGF0IHRoaXMgY29kZSBpcyBzbyBncm9zcy4gUmVhbGx5LCBJIGFtLlxuICAgKiBJJ2xsIHRyeSB0byBjbGVhbiBpdCB1cCBldmVudHVhbGx5ISBQcm9taXNlISAqL1xuICB2YXIgS0VZRlJBTUUgPSA1MDAsXG4gICAgICBTVFJPS0UgPSAwLjA4LFxuICAgICAgVEFVID0gMi4wICogTWF0aC5QSSxcbiAgICAgIFRXT19PVkVSX1NRUlRfMiA9IDIuMCAvIE1hdGguc3FydCgyKTtcblxuICBmdW5jdGlvbiBjaXJjbGUoY3R4LCB4LCB5LCByKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgciwgMCwgVEFVLCBmYWxzZSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmUoY3R4LCBheCwgYXksIGJ4LCBieSkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKGF4LCBheSk7XG4gICAgY3R4LmxpbmVUbyhieCwgYnkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1ZmYoY3R4LCB0LCBjeCwgY3ksIHJ4LCByeSwgcm1pbiwgcm1heCkge1xuICAgIHZhciBjID0gTWF0aC5jb3ModCAqIFRBVSksXG4gICAgICAgIHMgPSBNYXRoLnNpbih0ICogVEFVKTtcblxuICAgIHJtYXggLT0gcm1pbjtcblxuICAgIGNpcmNsZShcbiAgICAgIGN0eCxcbiAgICAgIGN4IC0gcyAqIHJ4LFxuICAgICAgY3kgKyBjICogcnkgKyBybWF4ICogMC41LFxuICAgICAgcm1pbiArICgxIC0gYyAqIDAuNSkgKiBybWF4XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1ZmZzKGN0eCwgdCwgY3gsIGN5LCByeCwgcnksIHJtaW4sIHJtYXgpIHtcbiAgICB2YXIgaTtcblxuICAgIGZvcihpID0gNTsgaS0tOyApXG4gICAgICBwdWZmKGN0eCwgdCArIGkgLyA1LCBjeCwgY3ksIHJ4LCByeSwgcm1pbiwgcm1heCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG91ZChjdHgsIHQsIGN4LCBjeSwgY3csIHMsIGNvbG9yKSB7XG4gICAgdCAvPSAzMDAwMDtcblxuICAgIHZhciBhID0gY3cgKiAwLjIxLFxuICAgICAgICBiID0gY3cgKiAwLjEyLFxuICAgICAgICBjID0gY3cgKiAwLjI0LFxuICAgICAgICBkID0gY3cgKiAwLjI4O1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHB1ZmZzKGN0eCwgdCwgY3gsIGN5LCBhLCBiLCBjLCBkKTtcblxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcbiAgICBwdWZmcyhjdHgsIHQsIGN4LCBjeSwgYSwgYiwgYyAtIHMsIGQgLSBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1bihjdHgsIHQsIGN4LCBjeSwgY3csIHMsIGNvbG9yKSB7XG4gICAgdCAvPSAxMjAwMDA7XG5cbiAgICB2YXIgYSA9IGN3ICogMC4yNSAtIHMgKiAwLjUsXG4gICAgICAgIGIgPSBjdyAqIDAuMzIgKyBzICogMC41LFxuICAgICAgICBjID0gY3cgKiAwLjUwIC0gcyAqIDAuNSxcbiAgICAgICAgaSwgcCwgY29zLCBzaW47XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gcztcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjeCwgY3ksIGEsIDAsIFRBVSwgZmFsc2UpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGZvcihpID0gODsgaS0tOyApIHtcbiAgICAgIHAgPSAodCArIGkgLyA4KSAqIFRBVTtcbiAgICAgIGNvcyA9IE1hdGguY29zKHApO1xuICAgICAgc2luID0gTWF0aC5zaW4ocCk7XG4gICAgICBsaW5lKGN0eCwgY3ggKyBjb3MgKiBiLCBjeSArIHNpbiAqIGIsIGN4ICsgY29zICogYywgY3kgKyBzaW4gKiBjKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb29uKGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDE1MDAwO1xuXG4gICAgdmFyIGEgPSBjdyAqIDAuMjkgLSBzICogMC41LFxuICAgICAgICBiID0gY3cgKiAwLjA1LFxuICAgICAgICBjID0gTWF0aC5jb3ModCAqIFRBVSksXG4gICAgICAgIHAgPSBjICogVEFVIC8gLTE2O1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuXG4gICAgY3ggKz0gYyAqIGI7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjeCwgY3ksIGEsIHAgKyBUQVUgLyA4LCBwICsgVEFVICogNyAvIDgsIGZhbHNlKTtcbiAgICBjdHguYXJjKGN4ICsgTWF0aC5jb3MocCkgKiBhICogVFdPX09WRVJfU1FSVF8yLCBjeSArIE1hdGguc2luKHApICogYSAqIFRXT19PVkVSX1NRUlRfMiwgYSwgcCArIFRBVSAqIDUgLyA4LCBwICsgVEFVICogMyAvIDgsIHRydWUpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBmdW5jdGlvbiByYWluKGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDEzNTA7XG5cbiAgICB2YXIgYSA9IGN3ICogMC4xNixcbiAgICAgICAgYiA9IFRBVSAqIDExIC8gMTIsXG4gICAgICAgIGMgPSBUQVUgKiAgNyAvIDEyLFxuICAgICAgICBpLCBwLCB4LCB5O1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuXG4gICAgZm9yKGkgPSA0OyBpLS07ICkge1xuICAgICAgcCA9ICh0ICsgaSAvIDQpICUgMTtcbiAgICAgIHggPSBjeCArICgoaSAtIDEuNSkgLyAxLjUpICogKGkgPT09IDEgfHwgaSA9PT0gMiA/IC0xIDogMSkgKiBhO1xuICAgICAgeSA9IGN5ICsgcCAqIHAgKiBjdztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oeCwgeSAtIHMgKiAxLjUpO1xuICAgICAgY3R4LmFyYyh4LCB5LCBzICogMC43NSwgYiwgYywgZmFsc2UpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzbGVldChjdHgsIHQsIGN4LCBjeSwgY3csIHMsIGNvbG9yKSB7XG4gICAgdCAvPSA3NTA7XG5cbiAgICB2YXIgYSA9IGN3ICogMC4xODc1LFxuICAgICAgICBiID0gVEFVICogMTEgLyAxMixcbiAgICAgICAgYyA9IFRBVSAqICA3IC8gMTIsXG4gICAgICAgIGksIHAsIHgsIHk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gcyAqIDAuNTtcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBmb3IoaSA9IDQ7IGktLTsgKSB7XG4gICAgICBwID0gKHQgKyBpIC8gNCkgJSAxO1xuICAgICAgeCA9IE1hdGguZmxvb3IoY3ggKyAoKGkgLSAxLjUpIC8gMS41KSAqIChpID09PSAxIHx8IGkgPT09IDIgPyAtMSA6IDEpICogYSkgKyAwLjU7XG4gICAgICB5ID0gY3kgKyBwICogY3c7XG4gICAgICBsaW5lKGN0eCwgeCwgeSAtIHMgKiAxLjUsIHgsIHkgKyBzICogMS41KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzbm93KGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDMwMDA7XG5cbiAgICB2YXIgYSAgPSBjdyAqIDAuMTYsXG4gICAgICAgIGIgID0gcyAqIDAuNzUsXG4gICAgICAgIHUgID0gdCAqIFRBVSAqIDAuNyxcbiAgICAgICAgdXggPSBNYXRoLmNvcyh1KSAqIGIsXG4gICAgICAgIHV5ID0gTWF0aC5zaW4odSkgKiBiLFxuICAgICAgICB2ICA9IHUgKyBUQVUgLyAzLFxuICAgICAgICB2eCA9IE1hdGguY29zKHYpICogYixcbiAgICAgICAgdnkgPSBNYXRoLnNpbih2KSAqIGIsXG4gICAgICAgIHcgID0gdSArIFRBVSAqIDIgLyAzLFxuICAgICAgICB3eCA9IE1hdGguY29zKHcpICogYixcbiAgICAgICAgd3kgPSBNYXRoLnNpbih3KSAqIGIsXG4gICAgICAgIGksIHAsIHgsIHk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gcyAqIDAuNTtcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBmb3IoaSA9IDQ7IGktLTsgKSB7XG4gICAgICBwID0gKHQgKyBpIC8gNCkgJSAxO1xuICAgICAgeCA9IGN4ICsgTWF0aC5zaW4oKHAgKyBpIC8gNCkgKiBUQVUpICogYTtcbiAgICAgIHkgPSBjeSArIHAgKiBjdztcblxuICAgICAgbGluZShjdHgsIHggLSB1eCwgeSAtIHV5LCB4ICsgdXgsIHkgKyB1eSk7XG4gICAgICBsaW5lKGN0eCwgeCAtIHZ4LCB5IC0gdnksIHggKyB2eCwgeSArIHZ5KTtcbiAgICAgIGxpbmUoY3R4LCB4IC0gd3gsIHkgLSB3eSwgeCArIHd4LCB5ICsgd3kpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZvZ2JhbmsoY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xuICAgIHQgLz0gMzAwMDA7XG5cbiAgICB2YXIgYSA9IGN3ICogMC4yMSxcbiAgICAgICAgYiA9IGN3ICogMC4wNixcbiAgICAgICAgYyA9IGN3ICogMC4yMSxcbiAgICAgICAgZCA9IGN3ICogMC4yODtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBwdWZmcyhjdHgsIHQsIGN4LCBjeSwgYSwgYiwgYywgZCk7XG5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XG4gICAgcHVmZnMoY3R4LCB0LCBjeCwgY3ksIGEsIGIsIGMgLSBzLCBkIC0gcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH1cblxuICAvKlxuICB2YXIgV0lORF9QQVRIUyA9IFtcbiAgICAgICAgZG93bnNhbXBsZSg2MywgdXBzYW1wbGUoOCwgW1xuICAgICAgICAgIC0xLjAwLCAtMC4yOCxcbiAgICAgICAgICAtMC43NSwgLTAuMTgsXG4gICAgICAgICAgLTAuNTAsICAwLjEyLFxuICAgICAgICAgIC0wLjIwLCAgMC4xMixcbiAgICAgICAgICAtMC4wNCwgLTAuMDQsXG4gICAgICAgICAgLTAuMDcsIC0wLjE4LFxuICAgICAgICAgIC0wLjE5LCAtMC4xOCxcbiAgICAgICAgICAtMC4yMywgLTAuMDUsXG4gICAgICAgICAgLTAuMTIsICAwLjExLFxuICAgICAgICAgICAwLjAyLCAgMC4xNixcbiAgICAgICAgICAgMC4yMCwgIDAuMTUsXG4gICAgICAgICAgIDAuNTAsICAwLjA3LFxuICAgICAgICAgICAwLjc1LCAgMC4xOCxcbiAgICAgICAgICAgMS4wMCwgIDAuMjhcbiAgICAgICAgXSkpLFxuICAgICAgICBkb3duc2FtcGxlKDMxLCB1cHNhbXBsZSgxNiwgW1xuICAgICAgICAgIC0xLjAwLCAtMC4xMCxcbiAgICAgICAgICAtMC43NSwgIDAuMDAsXG4gICAgICAgICAgLTAuNTAsICAwLjEwLFxuICAgICAgICAgIC0wLjI1LCAgMC4xNCxcbiAgICAgICAgICAgMC4wMCwgIDAuMTAsXG4gICAgICAgICAgIDAuMjUsICAwLjAwLFxuICAgICAgICAgICAwLjUwLCAtMC4xMCxcbiAgICAgICAgICAgMC43NSwgLTAuMTQsXG4gICAgICAgICAgIDEuMDAsIC0wLjEwXG4gICAgICAgIF0pKVxuICAgICAgXTtcbiAgKi9cblxuICB2YXIgV0lORF9QQVRIUyA9IFtcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjc1MDAsIC0wLjE4MDAsIC0wLjcyMTksIC0wLjE1MjcsIC0wLjY5NzEsIC0wLjEyMjUsXG4gICAgICAgICAgLTAuNjczOSwgLTAuMDkxMCwgLTAuNjUxNiwgLTAuMDU4OCwgLTAuNjI5OCwgLTAuMDI2MixcbiAgICAgICAgICAtMC42MDgzLCAgMC4wMDY1LCAtMC41ODY4LCAgMC4wMzk2LCAtMC41NjQzLCAgMC4wNzMxLFxuICAgICAgICAgIC0wLjUzNzIsICAwLjEwNDEsIC0wLjUwMzMsICAwLjEyNTksIC0wLjQ2NjIsICAwLjE0MDYsXG4gICAgICAgICAgLTAuNDI3NSwgIDAuMTQ5MywgLTAuMzg4MSwgIDAuMTUzMCwgLTAuMzQ4NywgIDAuMTUyNixcbiAgICAgICAgICAtMC4zMDk1LCAgMC4xNDg4LCAtMC4yNzA4LCAgMC4xNDIxLCAtMC4yMzE5LCAgMC4xMzQyLFxuICAgICAgICAgIC0wLjE5NDMsICAwLjEyMTcsIC0wLjE2MDAsICAwLjEwMjUsIC0wLjEyOTAsICAwLjA3ODUsXG4gICAgICAgICAgLTAuMTAxMiwgIDAuMDUwOSwgLTAuMDc2NCwgIDAuMDIwNiwgLTAuMDU0NywgLTAuMDEyMCxcbiAgICAgICAgICAtMC4wMzc4LCAtMC4wNDcyLCAtMC4wMzI0LCAtMC4wODU3LCAtMC4wMzg5LCAtMC4xMjQxLFxuICAgICAgICAgIC0wLjA1NDYsIC0wLjE1OTksIC0wLjA4MTQsIC0wLjE4NzYsIC0wLjExOTMsIC0wLjE5NjQsXG4gICAgICAgICAgLTAuMTU4MiwgLTAuMTkzNSwgLTAuMTkzMSwgLTAuMTc2OSwgLTAuMjE1NywgLTAuMTQ1MyxcbiAgICAgICAgICAtMC4yMjkwLCAtMC4xMDg1LCAtMC4yMzI3LCAtMC4wNjk3LCAtMC4yMjQwLCAtMC4wMzE3LFxuICAgICAgICAgIC0wLjIwNjQsICAwLjAwMzMsIC0wLjE4NTMsICAwLjAzNjIsIC0wLjE2MTMsICAwLjA2NzIsXG4gICAgICAgICAgLTAuMTM1MCwgIDAuMDk2MSwgLTAuMTA1MSwgIDAuMTIxMywgLTAuMDcwNiwgIDAuMTM5NyxcbiAgICAgICAgICAtMC4wMzMyLCAgMC4xNTEyLCAgMC4wMDUzLCAgMC4xNTgwLCAgMC4wNDQyLCAgMC4xNjI0LFxuICAgICAgICAgICAwLjA4MzMsICAwLjE2MzYsICAwLjEyMjQsICAwLjE2MTUsICAwLjE2MTMsICAwLjE1NjUsXG4gICAgICAgICAgIDAuMTk5OSwgIDAuMTUwMCwgIDAuMjM3OCwgIDAuMTQwMiwgIDAuMjc0OSwgIDAuMTI3OSxcbiAgICAgICAgICAgMC4zMTE4LCAgMC4xMTQ3LCAgMC4zNDg3LCAgMC4xMDE1LCAgMC4zODU4LCAgMC4wODkyLFxuICAgICAgICAgICAwLjQyMzYsICAwLjA3ODcsICAwLjQ2MjEsICAwLjA3MTUsICAwLjUwMTIsICAwLjA3MDIsXG4gICAgICAgICAgIDAuNTM5OCwgIDAuMDc2NiwgIDAuNTc2OCwgIDAuMDg5MCwgIDAuNjEyMywgIDAuMTA1NSxcbiAgICAgICAgICAgMC42NDY2LCAgMC4xMjQ0LCAgMC42ODA1LCAgMC4xNDQwLCAgMC43MTQ3LCAgMC4xNjMwLFxuICAgICAgICAgICAwLjc1MDAsICAwLjE4MDBcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjc1MDAsICAwLjAwMDAsIC0wLjcwMzMsICAwLjAxOTUsIC0wLjY1NjksICAwLjAzOTksXG4gICAgICAgICAgLTAuNjEwNCwgIDAuMDYwMCwgLTAuNTYzNCwgIDAuMDc4OSwgLTAuNTE1NSwgIDAuMDk1NCxcbiAgICAgICAgICAtMC40NjY3LCAgMC4xMDg5LCAtMC40MTc0LCAgMC4xMjA2LCAtMC4zNjc2LCAgMC4xMjk5LFxuICAgICAgICAgIC0wLjMxNzQsICAwLjEzNjUsIC0wLjI2NjksICAwLjEzOTgsIC0wLjIxNjIsICAwLjEzOTEsXG4gICAgICAgICAgLTAuMTY1OCwgIDAuMTM0NywgLTAuMTE1NywgIDAuMTI3MSwgLTAuMDY2MSwgIDAuMTE2OSxcbiAgICAgICAgICAtMC4wMTcwLCAgMC4xMDQ2LCAgMC4wMzE2LCAgMC4wOTAzLCAgMC4wNzkxLCAgMC4wNzI4LFxuICAgICAgICAgICAwLjEyNTksICAwLjA1MzQsICAwLjE3MjMsICAwLjAzMzEsICAwLjIxODgsICAwLjAxMjksXG4gICAgICAgICAgIDAuMjY1NiwgLTAuMDA2NCwgIDAuMzEyMiwgLTAuMDI2MywgIDAuMzU4NiwgLTAuMDQ2NixcbiAgICAgICAgICAgMC40MDUyLCAtMC4wNjY1LCAgMC40NTI1LCAtMC4wODQ3LCAgMC41MDA3LCAtMC4xMDAyLFxuICAgICAgICAgICAwLjU0OTcsIC0wLjExMzAsICAwLjU5OTEsIC0wLjEyNDAsICAwLjY0OTEsIC0wLjEzMjUsXG4gICAgICAgICAgIDAuNjk5NCwgLTAuMTM4MCwgIDAuNzUwMCwgLTAuMTQwMFxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgV0lORF9PRkZTRVRTID0gW1xuICAgICAgICB7c3RhcnQ6IDAuMzYsIGVuZDogMC4xMX0sXG4gICAgICAgIHtzdGFydDogMC41NiwgZW5kOiAwLjE2fVxuICAgICAgXTtcblxuICBmdW5jdGlvbiBsZWFmKGN0eCwgdCwgeCwgeSwgY3csIHMsIGNvbG9yKSB7XG4gICAgdmFyIGEgPSBjdyAvIDgsXG4gICAgICAgIGIgPSBhIC8gMyxcbiAgICAgICAgYyA9IDIgKiBiLFxuICAgICAgICBkID0gKHQgJSAxKSAqIFRBVSxcbiAgICAgICAgZSA9IE1hdGguY29zKGQpLFxuICAgICAgICBmID0gTWF0aC5zaW4oZCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCAgICAgICAgLCB5ICAgICAgICAsIGEsIGQgICAgICAgICAgLCBkICsgTWF0aC5QSSwgZmFsc2UpO1xuICAgIGN0eC5hcmMoeCAtIGIgKiBlLCB5IC0gYiAqIGYsIGMsIGQgKyBNYXRoLlBJLCBkICAgICAgICAgICwgZmFsc2UpO1xuICAgIGN0eC5hcmMoeCArIGMgKiBlLCB5ICsgYyAqIGYsIGIsIGQgKyBNYXRoLlBJLCBkICAgICAgICAgICwgdHJ1ZSApO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3b29zaChjdHgsIHQsIGN4LCBjeSwgY3csIHMsIGluZGV4LCB0b3RhbCwgY29sb3IpIHtcbiAgICB0IC89IDI1MDA7XG5cbiAgICB2YXIgcGF0aCA9IFdJTkRfUEFUSFNbaW5kZXhdLFxuICAgICAgICBhID0gKHQgKyBpbmRleCAtIFdJTkRfT0ZGU0VUU1tpbmRleF0uc3RhcnQpICUgdG90YWwsXG4gICAgICAgIGMgPSAodCArIGluZGV4IC0gV0lORF9PRkZTRVRTW2luZGV4XS5lbmQgICkgJSB0b3RhbCxcbiAgICAgICAgZSA9ICh0ICsgaW5kZXggICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAlIHRvdGFsLFxuICAgICAgICBiLCBkLCBmLCBpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuXG4gICAgaWYoYSA8IDEpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgYSAqPSBwYXRoLmxlbmd0aCAvIDIgLSAxO1xuICAgICAgYiAgPSBNYXRoLmZsb29yKGEpO1xuICAgICAgYSAtPSBiO1xuICAgICAgYiAqPSAyO1xuICAgICAgYiArPSAyO1xuXG4gICAgICBjdHgubW92ZVRvKFxuICAgICAgICBjeCArIChwYXRoW2IgLSAyXSAqICgxIC0gYSkgKyBwYXRoW2IgICAgXSAqIGEpICogY3csXG4gICAgICAgIGN5ICsgKHBhdGhbYiAtIDFdICogKDEgLSBhKSArIHBhdGhbYiArIDFdICogYSkgKiBjd1xuICAgICAgKTtcblxuICAgICAgaWYoYyA8IDEpIHtcbiAgICAgICAgYyAqPSBwYXRoLmxlbmd0aCAvIDIgLSAxO1xuICAgICAgICBkICA9IE1hdGguZmxvb3IoYyk7XG4gICAgICAgIGMgLT0gZDtcbiAgICAgICAgZCAqPSAyO1xuICAgICAgICBkICs9IDI7XG5cbiAgICAgICAgZm9yKGkgPSBiOyBpICE9PSBkOyBpICs9IDIpXG4gICAgICAgICAgY3R4LmxpbmVUbyhjeCArIHBhdGhbaV0gKiBjdywgY3kgKyBwYXRoW2kgKyAxXSAqIGN3KTtcblxuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgIGN4ICsgKHBhdGhbZCAtIDJdICogKDEgLSBjKSArIHBhdGhbZCAgICBdICogYykgKiBjdyxcbiAgICAgICAgICBjeSArIChwYXRoW2QgLSAxXSAqICgxIC0gYykgKyBwYXRoW2QgKyAxXSAqIGMpICogY3dcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZWxzZVxuICAgICAgICBmb3IoaSA9IGI7IGkgIT09IHBhdGgubGVuZ3RoOyBpICs9IDIpXG4gICAgICAgICAgY3R4LmxpbmVUbyhjeCArIHBhdGhbaV0gKiBjdywgY3kgKyBwYXRoW2kgKyAxXSAqIGN3KTtcblxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGVsc2UgaWYoYyA8IDEpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgYyAqPSBwYXRoLmxlbmd0aCAvIDIgLSAxO1xuICAgICAgZCAgPSBNYXRoLmZsb29yKGMpO1xuICAgICAgYyAtPSBkO1xuICAgICAgZCAqPSAyO1xuICAgICAgZCArPSAyO1xuXG4gICAgICBjdHgubW92ZVRvKGN4ICsgcGF0aFswXSAqIGN3LCBjeSArIHBhdGhbMV0gKiBjdyk7XG5cbiAgICAgIGZvcihpID0gMjsgaSAhPT0gZDsgaSArPSAyKVxuICAgICAgICBjdHgubGluZVRvKGN4ICsgcGF0aFtpXSAqIGN3LCBjeSArIHBhdGhbaSArIDFdICogY3cpO1xuXG4gICAgICBjdHgubGluZVRvKFxuICAgICAgICBjeCArIChwYXRoW2QgLSAyXSAqICgxIC0gYykgKyBwYXRoW2QgICAgXSAqIGMpICogY3csXG4gICAgICAgIGN5ICsgKHBhdGhbZCAtIDFdICogKDEgLSBjKSArIHBhdGhbZCArIDFdICogYykgKiBjd1xuICAgICAgKTtcblxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGlmKGUgPCAxKSB7XG4gICAgICBlICo9IHBhdGgubGVuZ3RoIC8gMiAtIDE7XG4gICAgICBmICA9IE1hdGguZmxvb3IoZSk7XG4gICAgICBlIC09IGY7XG4gICAgICBmICo9IDI7XG4gICAgICBmICs9IDI7XG5cbiAgICAgIGxlYWYoXG4gICAgICAgIGN0eCxcbiAgICAgICAgdCxcbiAgICAgICAgY3ggKyAocGF0aFtmIC0gMl0gKiAoMSAtIGUpICsgcGF0aFtmICAgIF0gKiBlKSAqIGN3LFxuICAgICAgICBjeSArIChwYXRoW2YgLSAxXSAqICgxIC0gZSkgKyBwYXRoW2YgKyAxXSAqIGUpICogY3csXG4gICAgICAgIGN3LFxuICAgICAgICBzLFxuICAgICAgICBjb2xvclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgU2t5Y29ucyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgdGhpcy5saXN0ICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLmludGVydmFsICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb2xvciAgICAgICA9IG9wdHMgJiYgb3B0cy5jb2xvciA/IG9wdHMuY29sb3IgOiBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMucmVzaXplQ2xlYXIgPSAhIShvcHRzICYmIG9wdHMucmVzaXplQ2xlYXIpO1xuICAgICAgfTtcblxuICBTa3ljb25zLkNMRUFSX0RBWSA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgc3VuKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuNSwgcywgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9O1xuXG4gIFNreWNvbnMuQ0xFQVJfTklHSFQgPSBmdW5jdGlvbihjdHgsIHQsIGNvbG9yKSB7XG4gICAgdmFyIHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcblxuICAgIG1vb24oY3R4LCB0LCB3ICogMC41LCBoICogMC41LCBzLCBzICogU1RST0tFLCBjb2xvcik7XG4gIH07XG5cbiAgU2t5Y29ucy5QQVJUTFlfQ0xPVURZX0RBWSA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgc3VuKGN0eCwgdCwgdyAqIDAuNjI1LCBoICogMC4zNzUsIHMgKiAwLjc1LCBzICogU1RST0tFLCBjb2xvcik7XG4gICAgY2xvdWQoY3R4LCB0LCB3ICogMC4zNzUsIGggKiAwLjYyNSwgcyAqIDAuNzUsIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgfTtcblxuICBTa3ljb25zLlBBUlRMWV9DTE9VRFlfTklHSFQgPSBmdW5jdGlvbihjdHgsIHQsIGNvbG9yKSB7XG4gICAgdmFyIHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcblxuICAgIG1vb24oY3R4LCB0LCB3ICogMC42NjcsIGggKiAwLjM3NSwgcyAqIDAuNzUsIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgICBjbG91ZChjdHgsIHQsIHcgKiAwLjM3NSwgaCAqIDAuNjI1LCBzICogMC43NSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9O1xuXG4gIFNreWNvbnMuQ0xPVURZID0gZnVuY3Rpb24oY3R4LCB0LCBjb2xvcikge1xuICAgIHZhciB3ID0gY3R4LmNhbnZhcy53aWR0aCxcbiAgICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICBjbG91ZChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjUsIHMsIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgfTtcblxuICBTa3ljb25zLlJBSU4gPSBmdW5jdGlvbihjdHgsIHQsIGNvbG9yKSB7XG4gICAgdmFyIHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcblxuICAgIHJhaW4oY3R4LCB0LCB3ICogMC41LCBoICogMC4zNywgcyAqIDAuOSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICAgIGNsb3VkKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuMzcsIHMgKiAwLjksIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgfTtcblxuICBTa3ljb25zLlNMRUVUID0gZnVuY3Rpb24oY3R4LCB0LCBjb2xvcikge1xuICAgIHZhciB3ID0gY3R4LmNhbnZhcy53aWR0aCxcbiAgICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICBzbGVldChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XG4gICAgY2xvdWQoY3R4LCB0LCB3ICogMC41LCBoICogMC4zNywgcyAqIDAuOSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9O1xuXG4gIFNreWNvbnMuU05PVyA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgc25vdyhjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XG4gICAgY2xvdWQoY3R4LCB0LCB3ICogMC41LCBoICogMC4zNywgcyAqIDAuOSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9O1xuXG4gIFNreWNvbnMuV0lORCA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgc3dvb3NoKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuNSwgcywgcyAqIFNUUk9LRSwgMCwgMiwgY29sb3IpO1xuICAgIHN3b29zaChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjUsIHMsIHMgKiBTVFJPS0UsIDEsIDIsIGNvbG9yKTtcbiAgfTtcblxuICBTa3ljb25zLkZPRyA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpLFxuICAgICAgICBrID0gcyAqIFNUUk9LRTtcblxuICAgIGZvZ2JhbmsoY3R4LCB0LCB3ICogMC41LCBoICogMC4zMiwgcyAqIDAuNzUsIGssIGNvbG9yKTtcblxuICAgIHQgLz0gNTAwMDtcblxuICAgIHZhciBhID0gTWF0aC5jb3MoKHQgICAgICAgKSAqIFRBVSkgKiBzICogMC4wMixcbiAgICAgICAgYiA9IE1hdGguY29zKCh0ICsgMC4yNSkgKiBUQVUpICogcyAqIDAuMDIsXG4gICAgICAgIGMgPSBNYXRoLmNvcygodCArIDAuNTApICogVEFVKSAqIHMgKiAwLjAyLFxuICAgICAgICBkID0gTWF0aC5jb3MoKHQgKyAwLjc1KSAqIFRBVSkgKiBzICogMC4wMixcbiAgICAgICAgbiA9IGggKiAwLjkzNixcbiAgICAgICAgZSA9IE1hdGguZmxvb3IobiAtIGsgKiAwLjUpICsgMC41LFxuICAgICAgICBmID0gTWF0aC5mbG9vcihuIC0gayAqIDIuNSkgKyAwLjU7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gaztcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBsaW5lKGN0eCwgYSArIHcgKiAwLjIgKyBrICogMC41LCBlLCBiICsgdyAqIDAuOCAtIGsgKiAwLjUsIGUpO1xuICAgIGxpbmUoY3R4LCBjICsgdyAqIDAuMiArIGsgKiAwLjUsIGYsIGQgKyB3ICogMC44IC0gayAqIDAuNSwgZik7XG4gIH07XG5cbiAgU2t5Y29ucy5wcm90b3R5cGUgPSB7XG4gICAgYWRkOiBmdW5jdGlvbihlbCwgZHJhdykge1xuICAgICAgdmFyIG9iajtcblxuICAgICAgaWYodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgICBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKTtcblxuICAgICAgLy8gRG9lcyBub3RoaW5nIGlmIGNhbnZhcyBuYW1lIGRvZXNuJ3QgZXhpc3RzXG4gICAgICBpZihlbCA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBpZih0eXBlb2YgZHJhdyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBkcmF3ID0gZHJhdy50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoLy0vZywgXCJfXCIpO1xuICAgICAgICBkcmF3ID0gU2t5Y29ucy5oYXNPd25Qcm9wZXJ0eShkcmF3KSA/IFNreWNvbnNbZHJhd10gOiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBEb2VzIG5vdGhpbmcgaWYgdGhlIGRyYXcgZnVuY3Rpb24gaXNuJ3QgYWN0dWFsbHkgYSBmdW5jdGlvblxuICAgICAgaWYodHlwZW9mIGRyYXcgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBvYmogPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBjb250ZXh0OiBlbC5nZXRDb250ZXh0KFwiMmRcIiksXG4gICAgICAgIGRyYXdpbmc6IGRyYXdcbiAgICAgIH07XG5cbiAgICAgIHRoaXMubGlzdC5wdXNoKG9iaik7XG4gICAgICB0aGlzLmRyYXcob2JqLCBLRVlGUkFNRSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKGVsLCBkcmF3KSB7XG4gICAgICB2YXIgaTtcblxuICAgICAgaWYodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgICBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKTtcblxuICAgICAgZm9yKGkgPSB0aGlzLmxpc3QubGVuZ3RoOyBpLS07IClcbiAgICAgICAgaWYodGhpcy5saXN0W2ldLmVsZW1lbnQgPT09IGVsKSB7XG4gICAgICAgICAgdGhpcy5saXN0W2ldLmRyYXdpbmcgPSBkcmF3O1xuICAgICAgICAgIHRoaXMuZHJhdyh0aGlzLmxpc3RbaV0sIEtFWUZSQU1FKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgdGhpcy5hZGQoZWwsIGRyYXcpO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihlbCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGlmKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbCk7XG5cbiAgICAgIGZvcihpID0gdGhpcy5saXN0Lmxlbmd0aDsgaS0tOyApXG4gICAgICAgIGlmKHRoaXMubGlzdFtpXS5lbGVtZW50ID09PSBlbCkge1xuICAgICAgICAgIHRoaXMubGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkcmF3OiBmdW5jdGlvbihvYmosIHRpbWUpIHtcbiAgICAgIHZhciBjYW52YXMgPSBvYmouY29udGV4dC5jYW52YXM7XG5cbiAgICAgIGlmKHRoaXMucmVzaXplQ2xlYXIpXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcblxuICAgICAgZWxzZVxuICAgICAgICBvYmouY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgb2JqLmRyYXdpbmcob2JqLmNvbnRleHQsIHRpbWUsIHRoaXMuY29sb3IpO1xuICAgIH0sXG4gICAgcGxheTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSByZXF1ZXN0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IoaSA9IHNlbGYubGlzdC5sZW5ndGg7IGktLTsgKVxuICAgICAgICAgIHNlbGYuZHJhdyhzZWxmLmxpc3RbaV0sIG5vdyk7XG4gICAgICB9LCAxMDAwIC8gNjApO1xuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGlmKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgY2FuY2VsSW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBnbG9iYWwuU2t5Y29ucyA9IFNreWNvbnM7XG59KHRoaXMpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==