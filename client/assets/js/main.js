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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIkNoYXJ0L0NoYXJ0Q3RybC5qcyIsIkNoYXJ0L0NoYXJ0RGlyZWN0aXZlLmpzIiwiRm9ybS9Gb3JtQ3RybC5qcyIsIkZvcm0vRm9ybURpcmVjdGl2ZS5qcyIsIkZvcm0vRm9ybVZhbGlkYXRpb24uanMiLCJNYXAvTWFwLmpzIiwiUGFnZS9QYWdlQ3RybC5qcyIsIlRhYmxlL1RhYmxlQ3RybC5qcyIsIlRhc2svVGFzay5qcyIsIlVJL1VJQ3RybC5qcyIsIlVJL1VJRGlyZWN0aXZlLmpzIiwiVUkvVUlTZXJ2aWNlLmpzIiwic2hhcmVkL2RpcmVjdGl2ZXMuanMiLCJzaGFyZWQvbG9jYWxpemUuanMiLCJzaGFyZWQvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMza0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZScsICduZ0FuaW1hdGUnLCAndWkuYm9vdHN0cmFwJywgJ2Vhc3lwaWVjaGFydCcsICdtZ28tYW5ndWxhci13aXphcmQnLCAndGV4dEFuZ3VsYXInLCAndWkudHJlZScsICduZ01hcCcsICduZ1RhZ3NJbnB1dCcsICdhcHAudWkuY3RybHMnLCAnYXBwLnVpLmRpcmVjdGl2ZXMnLCAnYXBwLnVpLnNlcnZpY2VzJywgJ2FwcC5jb250cm9sbGVycycsICdhcHAuZGlyZWN0aXZlcycsICdhcHAuZm9ybS52YWxpZGF0aW9uJywgJ2FwcC51aS5mb3JtLmN0cmxzJywgJ2FwcC51aS5mb3JtLmRpcmVjdGl2ZXMnLCAnYXBwLnRhYmxlcycsICdhcHAubWFwJywgJ2FwcC50YXNrJywgJ2FwcC5sb2NhbGl6YXRpb24nLCAnYXBwLmNoYXJ0LmN0cmxzJywgJ2FwcC5jaGFydC5kaXJlY3RpdmVzJywgJ2FwcC5wYWdlLmN0cmxzJ10pLmNvbmZpZyhbXG4gICckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgcmV0dXJuICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XG4gICAgICByZWRpcmVjdFRvOiAnL2luaWNpbydcbiAgICB9KS53aGVuKCcvaW5pY2lvJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9pbmljaW8uaHRtbCdcbiAgICB9KS53aGVuKCcvZGFzaGJvYXJkMScsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZGFzaGJvYXJkMS5odG1sJ1xuICAgIH0pLndoZW4oJy91aS90eXBvZ3JhcGh5Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS90eXBvZ3JhcGh5Lmh0bWwnXG4gICAgfSkud2hlbignL3VpL2J1dHRvbnMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL2J1dHRvbnMuaHRtbCdcbiAgICB9KS53aGVuKCcvdWkvaWNvbnMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL2ljb25zLmh0bWwnXG4gICAgfSkud2hlbignL3VpL2dyaWRzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS9ncmlkcy5odG1sJ1xuICAgIH0pLndoZW4oJy91aS93aWRnZXRzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS93aWRnZXRzLmh0bWwnXG4gICAgfSkud2hlbignL3VpL2NvbXBvbmVudHMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL2NvbXBvbmVudHMuaHRtbCdcbiAgICB9KS53aGVuKCcvdWkvdGltZWxpbmUnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL3RpbWVsaW5lLmh0bWwnXG4gICAgfSkud2hlbignL3VpL25lc3RlZC1saXN0cycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdWkvbmVzdGVkLWxpc3RzLmh0bWwnXG4gICAgfSkud2hlbignL3VpL3ByaWNpbmctdGFibGVzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS9wcmljaW5nLXRhYmxlcy5odG1sJ1xuICAgIH0pLndoZW4oJy9mb3Jtcy9lbGVtZW50cycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZm9ybXMvZWxlbWVudHMuaHRtbCdcbiAgICB9KS53aGVuKCcvZm9ybXMvbGF5b3V0cycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZm9ybXMvbGF5b3V0cy5odG1sJ1xuICAgIH0pLndoZW4oJy9mb3Jtcy92YWxpZGF0aW9uJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9mb3Jtcy92YWxpZGF0aW9uLmh0bWwnXG4gICAgfSkud2hlbignL2Zvcm1zL3dpemFyZCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZm9ybXMvd2l6YXJkLmh0bWwnXG4gICAgfSkud2hlbignL21hcHMvZ21hcCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFwcy9nbWFwLmh0bWwnXG4gICAgfSkud2hlbignL21hcHMvanF2bWFwJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tYXBzL2pxdm1hcC5odG1sJ1xuICAgIH0pLndoZW4oJy90YWJsZXMvc3RhdGljJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90YWJsZXMvc3RhdGljLmh0bWwnXG4gICAgfSkud2hlbignL3RhYmxlcy9yZXNwb25zaXZlJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90YWJsZXMvcmVzcG9uc2l2ZS5odG1sJ1xuICAgIH0pLndoZW4oJy90YWJsZXMvZHluYW1pYycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdGFibGVzL2R5bmFtaWMuaHRtbCdcbiAgICB9KS53aGVuKCcvY2hhcnRzL290aGVycycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY2hhcnRzL2NoYXJ0cy5odG1sJ1xuICAgIH0pLndoZW4oJy9jaGFydHMvbW9ycmlzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jaGFydHMvbW9ycmlzLmh0bWwnXG4gICAgfSkud2hlbignL2NoYXJ0cy9mbG90Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jaGFydHMvZmxvdC5odG1sJ1xuICAgIH0pLndoZW4oJy9tYWlsL2luYm94Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tYWlsL2luYm94Lmh0bWwnXG4gICAgfSkud2hlbignL21haWwvY29tcG9zZScsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFpbC9jb21wb3NlLmh0bWwnXG4gICAgfSkud2hlbignL21haWwvc2luZ2xlJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tYWlsL3NpbmdsZS5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9mZWF0dXJlcycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvZmVhdHVyZXMuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvc2lnbmluJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9zaWduaW4uaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvc2lnbnVwJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9zaWdudXAuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvZm9yZ290Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvbG9jay1zY3JlZW4nLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL2xvY2stc2NyZWVuLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL3Byb2ZpbGUnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL3Byb2ZpbGUuaHRtbCdcbiAgICB9KS53aGVuKCcvNDA0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy80MDQuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvNTAwJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy81MDAuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvYmxhbmsnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL2JsYW5rLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL2ludm9pY2UnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL2ludm9pY2UuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvc2VydmljZXMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL3NlcnZpY2VzLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL2Fib3V0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9hYm91dC5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9jb250YWN0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9jb250YWN0Lmh0bWwnXG4gICAgfSkud2hlbignL3Rhc2tzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90YXNrcy90YXNrcy5odG1sJ1xuICAgIH0pLm90aGVyd2lzZSh7XG4gICAgICByZWRpcmVjdFRvOiAnLzQwNCdcbiAgICB9KTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLmNoYXJ0LmN0cmxzJywgW10pLmNvbnRyb2xsZXIoJ2NoYXJ0Q3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5lYXN5cGllY2hhcnQgPSB7XG4gICAgICBwZXJjZW50OiA2NSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYmFyQ29sb3I6ICcjMzFDMEJFJyxcbiAgICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgICAgc2l6ZTogMTgwLFxuICAgICAgICBsaW5lV2lkdGg6IDVcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5lYXN5cGllY2hhcnQyID0ge1xuICAgICAgcGVyY2VudDogMzUsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGJhckNvbG9yOiAnIzY2QjVENycsXG4gICAgICAgIGxpbmVDYXA6ICdyb3VuZCcsXG4gICAgICAgIHNpemU6IDE4MCxcbiAgICAgICAgbGluZVdpZHRoOiAxMFxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmVhc3lwaWVjaGFydDMgPSB7XG4gICAgICBwZXJjZW50OiA2OCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYmFyQ29sb3I6ICcjNjBDRDlCJyxcbiAgICAgICAgbGluZUNhcDogJ3NxdWFyZScsXG4gICAgICAgIHNpemU6IDE4MCxcbiAgICAgICAgbGluZVdpZHRoOiAyMCxcbiAgICAgICAgc2NhbGVMZW5ndGg6IDBcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5nYXVnZUNoYXJ0MSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWF4VmFsdWU6IDMwMDAsXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA0MCxcbiAgICAgICAgdmFsOiAxMzc1XG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBsaW5lczogMTIsXG4gICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICBsaW5lV2lkdGg6IDAuNDcsXG4gICAgICAgIHBvaW50ZXI6IHtcbiAgICAgICAgICBsZW5ndGg6IDAuNixcbiAgICAgICAgICBzdHJva2VXaWR0aDogMC4wMyxcbiAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnXG4gICAgICAgIH0sXG4gICAgICAgIGxpbWl0TWF4OiAnZmFsc2UnLFxuICAgICAgICBjb2xvclN0YXJ0OiAnI0EzQzg2RCcsXG4gICAgICAgIGNvbG9yU3RvcDogJyNBM0M4NkQnLFxuICAgICAgICBzdHJva2VDb2xvcjogJyNFMEUwRTAnLFxuICAgICAgICBnZW5lcmF0ZUdyYWRpZW50OiB0cnVlLFxuICAgICAgICBwZXJjZW50Q29sb3JzOiBbWzAuMCwgJyM2MENEOUInXSwgWzEuMCwgJyM2MENEOUInXV1cbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5nYXVnZUNoYXJ0MiA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWF4VmFsdWU6IDMwMDAsXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA0NSxcbiAgICAgICAgdmFsOiAxMjAwXG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBsaW5lczogMTIsXG4gICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICBsaW5lV2lkdGg6IDAuNDcsXG4gICAgICAgIHBvaW50ZXI6IHtcbiAgICAgICAgICBsZW5ndGg6IDAuNixcbiAgICAgICAgICBzdHJva2VXaWR0aDogMC4wMyxcbiAgICAgICAgICBjb2xvcjogJyM0NjQ2NDYnXG4gICAgICAgIH0sXG4gICAgICAgIGxpbWl0TWF4OiAndHJ1ZScsXG4gICAgICAgIGNvbG9yU3RhcnQ6ICcjN0FDQkVFJyxcbiAgICAgICAgY29sb3JTdG9wOiAnIzdBQ0JFRScsXG4gICAgICAgIHN0cm9rZUNvbG9yOiAnI0YxRjFGMScsXG4gICAgICAgIGdlbmVyYXRlR3JhZGllbnQ6IHRydWUsXG4gICAgICAgIHBlcmNlbnRDb2xvcnM6IFtbMC4wLCAnIzY2QjVENyddLCBbMS4wLCAnIzY2QjVENyddXVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5nYXVnZUNoYXJ0MyA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWF4VmFsdWU6IDMwMDAsXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiA1MCxcbiAgICAgICAgdmFsOiAxMTAwXG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBsaW5lczogMTIsXG4gICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICBsaW5lV2lkdGg6IDAuNDcsXG4gICAgICAgIHBvaW50ZXI6IHtcbiAgICAgICAgICBsZW5ndGg6IDAuNixcbiAgICAgICAgICBzdHJva2VXaWR0aDogMC4wMyxcbiAgICAgICAgICBjb2xvcjogJyM0NjQ2NDYnXG4gICAgICAgIH0sXG4gICAgICAgIGxpbWl0TWF4OiAndHJ1ZScsXG4gICAgICAgIGNvbG9yU3RhcnQ6ICcjRkY3ODU3JyxcbiAgICAgICAgY29sb3JTdG9wOiAnI0ZGNzg1NycsXG4gICAgICAgIHN0cm9rZUNvbG9yOiAnI0YxRjFGMScsXG4gICAgICAgIGdlbmVyYXRlR3JhZGllbnQ6IHRydWUsXG4gICAgICAgIHBlcmNlbnRDb2xvcnM6IFtbMC4wLCAnI0U4NzM1MiddLCBbMS4wLCAnI0U4NzM1MiddXVxuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ21vcnJpc0NoYXJ0Q3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5tYWluRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTAxJyxcbiAgICAgICAgeGJveDogMjk0MDAwLFxuICAgICAgICB3aWxsOiAxMzYwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAyNDQwMDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTAyJyxcbiAgICAgICAgeGJveDogMjI4MDAwLFxuICAgICAgICB3aWxsOiAzMzUwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAxMjcwMDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTAzJyxcbiAgICAgICAgeGJveDogMTk5MDAwLFxuICAgICAgICB3aWxsOiAxNTkwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAxMzAwMDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTA0JyxcbiAgICAgICAgeGJveDogMTc0MDAwLFxuICAgICAgICB3aWxsOiAxNjAwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiA4MjAwMFxuICAgICAgfSwge1xuICAgICAgICBtb250aDogJzIwMTMtMDUnLFxuICAgICAgICB4Ym94OiAyNTUwMDAsXG4gICAgICAgIHdpbGw6IDMxODAwMCxcbiAgICAgICAgcGxheXN0YXRpb246IDgyMDAwXG4gICAgICB9LCB7XG4gICAgICAgIG1vbnRoOiAnMjAxMy0wNicsXG4gICAgICAgIHhib3g6IDI5ODQwMCxcbiAgICAgICAgd2lsbDogNDAxODAwLFxuICAgICAgICBwbGF5c3RhdGlvbjogOTg2MDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTA3JyxcbiAgICAgICAgeGJveDogMzcwMDAwLFxuICAgICAgICB3aWxsOiAyMjUwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAxNTkwMDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTA4JyxcbiAgICAgICAgeGJveDogMzc2NzAwLFxuICAgICAgICB3aWxsOiAzMDM2MDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAxMzAwMDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTA5JyxcbiAgICAgICAgeGJveDogNTI3ODAwLFxuICAgICAgICB3aWxsOiAzMDEwMDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiAxMTk0MDBcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5zaW1wbGVEYXRhID0gW1xuICAgICAge1xuICAgICAgICB5ZWFyOiAnMjAwOCcsXG4gICAgICAgIHZhbHVlOiAyMFxuICAgICAgfSwge1xuICAgICAgICB5ZWFyOiAnMjAwOScsXG4gICAgICAgIHZhbHVlOiAxMFxuICAgICAgfSwge1xuICAgICAgICB5ZWFyOiAnMjAxMCcsXG4gICAgICAgIHZhbHVlOiA1XG4gICAgICB9LCB7XG4gICAgICAgIHllYXI6ICcyMDExJyxcbiAgICAgICAgdmFsdWU6IDVcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTInLFxuICAgICAgICB2YWx1ZTogMjBcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTMnLFxuICAgICAgICB2YWx1ZTogMTlcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5jb21ib0RhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIHllYXI6ICcyMDA4JyxcbiAgICAgICAgYTogMjAsXG4gICAgICAgIGI6IDE2LFxuICAgICAgICBjOiAxMlxuICAgICAgfSwge1xuICAgICAgICB5ZWFyOiAnMjAwOScsXG4gICAgICAgIGE6IDEwLFxuICAgICAgICBiOiAyMixcbiAgICAgICAgYzogMzBcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTAnLFxuICAgICAgICBhOiA1LFxuICAgICAgICBiOiAxNCxcbiAgICAgICAgYzogMjBcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTEnLFxuICAgICAgICBhOiA1LFxuICAgICAgICBiOiAxMixcbiAgICAgICAgYzogMTlcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTInLFxuICAgICAgICBhOiAyMCxcbiAgICAgICAgYjogMTksXG4gICAgICAgIGM6IDEzXG4gICAgICB9LCB7XG4gICAgICAgIHllYXI6ICcyMDEzJyxcbiAgICAgICAgYTogMjgsXG4gICAgICAgIGI6IDIyLFxuICAgICAgICBjOiAyMFxuICAgICAgfVxuICAgIF07XG4gICAgcmV0dXJuICRzY29wZS5kb251dERhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRvd25sb2FkIFNhbGVzXCIsXG4gICAgICAgIHZhbHVlOiAxMlxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJJbi1TdG9yZSBTYWxlc1wiLFxuICAgICAgICB2YWx1ZTogMzBcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiTWFpbC1PcmRlciBTYWxlc1wiLFxuICAgICAgICB2YWx1ZTogMjBcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiT25saW5lIFNhbGVzXCIsXG4gICAgICAgIHZhbHVlOiAxOVxuICAgICAgfVxuICAgIF07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ2Zsb3RDaGFydEN0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICB2YXIgYXJlYUNoYXJ0LCBiYXJDaGFydCwgbGluZUNoYXJ0MTtcbiAgICBsaW5lQ2hhcnQxID0ge307XG4gICAgbGluZUNoYXJ0MS5kYXRhMSA9IFtbMSwgMTVdLCBbMiwgMjBdLCBbMywgMTRdLCBbNCwgMTBdLCBbNSwgMTBdLCBbNiwgMjBdLCBbNywgMjhdLCBbOCwgMjZdLCBbOSwgMjJdLCBbMTAsIDIzXSwgWzExLCAyNF1dO1xuICAgIGxpbmVDaGFydDEuZGF0YTIgPSBbWzEsIDldLCBbMiwgMTVdLCBbMywgMTddLCBbNCwgMjFdLCBbNSwgMTZdLCBbNiwgMTVdLCBbNywgMTNdLCBbOCwgMTVdLCBbOSwgMjldLCBbMTAsIDIxXSwgWzExLCAyOV1dO1xuICAgICRzY29wZS5saW5lMSA9IHt9O1xuICAgICRzY29wZS5saW5lMS5kYXRhID0gW1xuICAgICAge1xuICAgICAgICBkYXRhOiBsaW5lQ2hhcnQxLmRhdGExLFxuICAgICAgICBsYWJlbDogJ1Byb2R1Y3QgQSdcbiAgICAgIH0sIHtcbiAgICAgICAgZGF0YTogbGluZUNoYXJ0MS5kYXRhMixcbiAgICAgICAgbGFiZWw6ICdQcm9kdWN0IEInLFxuICAgICAgICBsaW5lczoge1xuICAgICAgICAgIGZpbGw6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5saW5lMS5vcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgIGZpbGxDb2xvcjoge1xuICAgICAgICAgICAgY29sb3JzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcG9pbnRzOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICBmaWxsQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgIHN5bWJvbDogXCJjaXJjbGVcIixcbiAgICAgICAgICByYWRpdXM6IDVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbG9yczogW1wiIzMxQzBCRVwiLCBcIiM4MTcwQ0FcIiwgXCIjRTg3MzUyXCJdLFxuICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICB0aWNrQ29sb3I6IFwiI2Y5ZjlmOVwiLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2VlZWVlZVwiXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgdGlja3M6IFtbMSwgJ0phbi4nXSwgWzIsICdGZWIuJ10sIFszLCAnTWFyLiddLCBbNCwgJ0Fwci4nXSwgWzUsICdNYXknXSwgWzYsICdKdW5lJ10sIFs3LCAnSnVseSddLCBbOCwgJ0F1Zy4nXSwgWzksICdTZXB0LiddLCBbMTAsICdPY3QuJ10sIFsxMSwgJ05vdi4nXSwgWzEyLCAnRGVjLiddXVxuICAgICAgfVxuICAgIH07XG4gICAgYXJlYUNoYXJ0ID0ge307XG4gICAgYXJlYUNoYXJ0LmRhdGExID0gW1syMDA3LCAxNV0sIFsyMDA4LCAyMF0sIFsyMDA5LCAxMF0sIFsyMDEwLCA1XSwgWzIwMTEsIDVdLCBbMjAxMiwgMjBdLCBbMjAxMywgMjhdXTtcbiAgICBhcmVhQ2hhcnQuZGF0YTIgPSBbWzIwMDcsIDE1XSwgWzIwMDgsIDE2XSwgWzIwMDksIDIyXSwgWzIwMTAsIDE0XSwgWzIwMTEsIDEyXSwgWzIwMTIsIDE5XSwgWzIwMTMsIDIyXV07XG4gICAgJHNjb3BlLmFyZWEgPSB7fTtcbiAgICAkc2NvcGUuYXJlYS5kYXRhID0gW1xuICAgICAge1xuICAgICAgICBkYXRhOiBhcmVhQ2hhcnQuZGF0YTEsXG4gICAgICAgIGxhYmVsOiBcIlZhbHVlIEFcIixcbiAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICBmaWxsOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgZGF0YTogYXJlYUNoYXJ0LmRhdGEyLFxuICAgICAgICBsYWJlbDogXCJWYWx1ZSBCXCIsXG4gICAgICAgIHBvaW50czoge1xuICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgeWF4aXM6IDJcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5hcmVhLm9wdGlvbnMgPSB7XG4gICAgICBzZXJpZXM6IHtcbiAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGZpbGw6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHBvaW50czoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgZmlsbENvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICBzeW1ib2w6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgcmFkaXVzOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHNoYWRvd1NpemU6IDBcbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICB0aWNrQ29sb3I6IFwiI2Y5ZjlmOVwiLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2VlZWVlZVwiXG4gICAgICB9LFxuICAgICAgY29sb3JzOiBbXCIjNjBDRDlCXCIsIFwiIzgxNzBDQVwiXSxcbiAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgbW9kZTogXCJ0aW1lXCJcbiAgICAgIH0sXG4gICAgICB5YXhlczogW1xuICAgICAgICB7fSwge1xuICAgICAgICAgIHBvc2l0aW9uOiBcInJpZ2h0XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gICAgYmFyQ2hhcnQgPSB7fTtcbiAgICBiYXJDaGFydC5kYXRhMSA9IFtbMjAwOCwgMjBdLCBbMjAwOSwgMTBdLCBbMjAxMCwgNV0sIFsyMDExLCA1XSwgWzIwMTIsIDIwXSwgWzIwMTMsIDI4XV07XG4gICAgYmFyQ2hhcnQuZGF0YTIgPSBbWzIwMDgsIDE2XSwgWzIwMDksIDIyXSwgWzIwMTAsIDE0XSwgWzIwMTEsIDEyXSwgWzIwMTIsIDE5XSwgWzIwMTMsIDIyXV07XG4gICAgYmFyQ2hhcnQuZGF0YTMgPSBbWzIwMDgsIDEyXSwgWzIwMDksIDMwXSwgWzIwMTAsIDIwXSwgWzIwMTEsIDE5XSwgWzIwMTIsIDEzXSwgWzIwMTMsIDIwXV07XG4gICAgJHNjb3BlLmJhckNoYXJ0ID0ge307XG4gICAgJHNjb3BlLmJhckNoYXJ0LmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlZhbHVlIEFcIixcbiAgICAgICAgZGF0YTogYmFyQ2hhcnQuZGF0YTFcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiVmFsdWUgQlwiLFxuICAgICAgICBkYXRhOiBiYXJDaGFydC5kYXRhMlxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJWYWx1ZSBDXCIsXG4gICAgICAgIGRhdGE6IGJhckNoYXJ0LmRhdGEzXG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuYmFyQ2hhcnQub3B0aW9ucyA9IHtcbiAgICAgIHNlcmllczoge1xuICAgICAgICBzdGFjazogdHJ1ZSxcbiAgICAgICAgYmFyczoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgZmlsbDogMSxcbiAgICAgICAgICBiYXJXaWR0aDogMC4zLFxuICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgICAgIG9yZGVyOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiNlZWVlZWVcIlxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgY29sb3JzOiBbXCIjNjBDRDlCXCIsIFwiIzY2QjVEN1wiLCBcIiNFRUM5NUFcIiwgXCIjRTg3MzUyXCJdXG4gICAgfTtcbiAgICAkc2NvcGUucGllQ2hhcnQgPSB7fTtcbiAgICAkc2NvcGUucGllQ2hhcnQuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiRG93bmxvYWQgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMTJcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiSW4tU3RvcmUgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMzBcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiTWFpbC1PcmRlciBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAyMFxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJPbmxpbmUgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMTlcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5waWVDaGFydC5vcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIHBpZToge1xuICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBzaG93OiB0cnVlXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNvbG9yczogW1wiIzYwQ0Q5QlwiLCBcIiM2NkI1RDdcIiwgXCIjRUVDOTVBXCIsIFwiI0U4NzM1MlwiXSxcbiAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICBjb250ZW50OiBcIiVwLjAlLCAlc1wiLFxuICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUuZG9udXRDaGFydCA9IHt9O1xuICAgICRzY29wZS5kb251dENoYXJ0LmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRvd25sb2FkIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDEyXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIkluLVN0b3JlIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDMwXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIk1haWwtT3JkZXIgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMjBcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiT25saW5lIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDE5XG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuZG9udXRDaGFydC5vcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIHBpZToge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgaW5uZXJSYWRpdXM6IDAuNVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIHNob3c6IHRydWVcbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgY29sb3JzOiBbXCIjNjBDRDlCXCIsIFwiIzY2QjVEN1wiLCBcIiNFRUM5NUFcIiwgXCIjRTg3MzUyXCJdLFxuICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgIGNvbnRlbnQ6IFwiJXAuMCUsICVzXCIsXG4gICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5kb251dENoYXJ0MiA9IHt9O1xuICAgICRzY29wZS5kb251dENoYXJ0Mi5kYXRhID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJEb3dubG9hZCBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAxMlxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJJbi1TdG9yZSBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAzMFxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJNYWlsLU9yZGVyIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDIwXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIk9ubGluZSBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAxOVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJEaXJlY3QgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMTVcbiAgICAgIH1cbiAgICBdO1xuICAgIHJldHVybiAkc2NvcGUuZG9udXRDaGFydDIub3B0aW9ucyA9IHtcbiAgICAgIHNlcmllczoge1xuICAgICAgICBwaWU6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGlubmVyUmFkaXVzOiAwLjVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IFtcIiMxQkI3QTBcIiwgXCIjMzlCNUI5XCIsIFwiIzUyQTNCQlwiLCBcIiM2MTlDQzRcIiwgXCIjNkQ5MEM1XCJdLFxuICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgIGNvbnRlbnQ6IFwiJXAuMCUsICVzXCIsXG4gICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdmbG90Q2hhcnRDdHJsLnJlYWx0aW1lJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHt9XSkuY29udHJvbGxlcignc3BhcmtsaW5lQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5kZW1vRGF0YTEgPSB7XG4gICAgICBkYXRhOiBbMywgMSwgMiwgMiwgNCwgNiwgNCwgNSwgMiwgNCwgNSwgMywgNCwgNiwgNCwgN10sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgbGluZUNvbG9yOiAnI2ZmZicsXG4gICAgICAgIGhpZ2hsaWdodExpbmVDb2xvcjogJyNmZmYnLFxuICAgICAgICBmaWxsQ29sb3I6ICcjNjBDRDlCJyxcbiAgICAgICAgc3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgbWluU3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgbWF4U3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTUwcHgnXG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUuc2ltcGxlQ2hhcnQxID0ge1xuICAgICAgZGF0YTogWzMsIDEsIDIsIDMsIDUsIDMsIDQsIDJdLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIGxpbmVDb2xvcjogJyMzMUMwQkUnLFxuICAgICAgICBmaWxsQ29sb3I6ICcjYmNlMGRmJyxcbiAgICAgICAgc3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgbWluU3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgbWF4U3BvdENvbG9yOiBmYWxzZVxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLnNpbXBsZUNoYXJ0MiA9IHtcbiAgICAgIGRhdGE6IFszLCAxLCAyLCAzLCA1LCAzLCA0LCAyXSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgIGJhckNvbG9yOiAnIzMxQzBCRSdcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5zaW1wbGVDaGFydDMgPSB7XG4gICAgICBkYXRhOiBbMywgMSwgMiwgMywgNSwgMywgNCwgMl0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBzbGljZUNvbG9yczogWycjMzFDMEJFJywgJyM2MENEOUInLCAnI0U4NzM1MicsICcjODE3MENBJywgJyNFRUM5NUEnLCAnIzYwQ0Q5QiddXG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUudHJpc3RhdGVDaGFydDEgPSB7XG4gICAgICBkYXRhOiBbMSwgMiwgLTMsIC01LCAzLCAxLCAtNCwgMl0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHR5cGU6ICd0cmlzdGF0ZScsXG4gICAgICAgIHBvc0JhckNvbG9yOiAnIzk1Yjc1ZCcsXG4gICAgICAgIG5lZ0JhckNvbG9yOiAnI2ZhODU2NCdcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5sYXJnZUNoYXJ0MSA9IHtcbiAgICAgIGRhdGE6IFszLCAxLCAyLCAzLCA1LCAzLCA0LCAyXSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBsaW5lQ29sb3I6ICcjNjc0RTlFJyxcbiAgICAgICAgaGlnaGxpZ2h0TGluZUNvbG9yOiAnIzdBQ0JFRScsXG4gICAgICAgIGZpbGxDb2xvcjogJyM5MjdFRDEnLFxuICAgICAgICBzcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICBtaW5TcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICBtYXhTcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxNTBweCdcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5sYXJnZUNoYXJ0MiA9IHtcbiAgICAgIGRhdGE6IFszLCAxLCAyLCAzLCA1LCAzLCA0LCAyXSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgIGJhckNvbG9yOiAnIzMxQzBCRScsXG4gICAgICAgIGJhcldpZHRoOiAxMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTUwcHgnXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLmxhcmdlQ2hhcnQzID0ge1xuICAgICAgZGF0YTogWzMsIDEsIDIsIDMsIDVdLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgc2xpY2VDb2xvcnM6IFsnIzMxQzBCRScsICcjNjBDRDlCJywgJyNFODczNTInLCAnIzgxNzBDQScsICcjRUVDOTVBJywgJyM2MENEOUInXSxcbiAgICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICAgIGhlaWdodDogJzE1MHB4J1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC5jaGFydC5kaXJlY3RpdmVzJywgW10pLmRpcmVjdGl2ZSgnZ2F1Z2VDaGFydCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBzY29wZToge1xuICAgICAgICBkYXRhOiAnPScsXG4gICAgICAgIG9wdGlvbnM6ICc9J1xuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciBkYXRhLCBnYXVnZSwgb3B0aW9ucztcbiAgICAgICAgZGF0YSA9IHNjb3BlLmRhdGE7XG4gICAgICAgIG9wdGlvbnMgPSBzY29wZS5vcHRpb25zO1xuICAgICAgICBnYXVnZSA9IG5ldyBHYXVnZShlbGVbMF0pLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIGdhdWdlLm1heFZhbHVlID0gZGF0YS5tYXhWYWx1ZTtcbiAgICAgICAgZ2F1Z2UuYW5pbWF0aW9uU3BlZWQgPSBkYXRhLmFuaW1hdGlvblNwZWVkO1xuICAgICAgICByZXR1cm4gZ2F1Z2Uuc2V0KGRhdGEudmFsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ2Zsb3RDaGFydCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBzY29wZToge1xuICAgICAgICBkYXRhOiAnPScsXG4gICAgICAgIG9wdGlvbnM6ICc9J1xuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciBkYXRhLCBvcHRpb25zLCBwbG90O1xuICAgICAgICBkYXRhID0gc2NvcGUuZGF0YTtcbiAgICAgICAgb3B0aW9ucyA9IHNjb3BlLm9wdGlvbnM7XG4gICAgICAgIHJldHVybiBwbG90ID0gJC5wbG90KGVsZVswXSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdmbG90Q2hhcnRSZWFsdGltZScsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgZGF0YSwgZ2V0UmFuZG9tRGF0YSwgcGxvdCwgdG90YWxQb2ludHMsIHVwZGF0ZSwgdXBkYXRlSW50ZXJ2YWw7XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgdG90YWxQb2ludHMgPSAzMDA7XG4gICAgICAgIGdldFJhbmRvbURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaSwgcHJldiwgcmVzLCB5O1xuICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAoZGF0YS5sZW5ndGggPCB0b3RhbFBvaW50cykge1xuICAgICAgICAgICAgcHJldiA9IChkYXRhLmxlbmd0aCA+IDAgPyBkYXRhW2RhdGEubGVuZ3RoIC0gMV0gOiA1MCk7XG4gICAgICAgICAgICB5ID0gcHJldiArIE1hdGgucmFuZG9tKCkgKiAxMCAtIDU7XG4gICAgICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoeSA+IDEwMCkge1xuICAgICAgICAgICAgICAgIHkgPSAxMDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEucHVzaCh5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzID0gW107XG4gICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgd2hpbGUgKGkgPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzLnB1c2goW2ksIGRhdGFbaV1dKTtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfTtcbiAgICAgICAgdXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcGxvdC5zZXREYXRhKFtnZXRSYW5kb21EYXRhKCldKTtcbiAgICAgICAgICBwbG90LmRyYXcoKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KHVwZGF0ZSwgdXBkYXRlSW50ZXJ2YWwpO1xuICAgICAgICB9O1xuICAgICAgICBkYXRhID0gW107XG4gICAgICAgIHRvdGFsUG9pbnRzID0gMzAwO1xuICAgICAgICB1cGRhdGVJbnRlcnZhbCA9IDIwMDtcbiAgICAgICAgcGxvdCA9ICQucGxvdChlbGVbMF0sIFtnZXRSYW5kb21EYXRhKCldLCB7XG4gICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBmaWxsOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZWVlZWVlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29sb3JzOiBbXCIjNUJERERDXCJdXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXBkYXRlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdzcGFya2xpbmUnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgZGF0YTogJz0nLFxuICAgICAgICBvcHRpb25zOiAnPSdcbiAgICAgIH0sXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgZGF0YSwgb3B0aW9ucywgc3BhcmtSZXNpemUsIHNwYXJrbGluZURyYXc7XG4gICAgICAgIGRhdGEgPSBzY29wZS5kYXRhO1xuICAgICAgICBvcHRpb25zID0gc2NvcGUub3B0aW9ucztcbiAgICAgICAgc3BhcmtSZXNpemUgPSB2b2lkIDA7XG4gICAgICAgIHNwYXJrbGluZURyYXcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZWxlLnNwYXJrbGluZShkYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHNwYXJrUmVzaXplKTtcbiAgICAgICAgICByZXR1cm4gc3BhcmtSZXNpemUgPSBzZXRUaW1lb3V0KHNwYXJrbGluZURyYXcsIDIwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3BhcmtsaW5lRHJhdygpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnbW9ycmlzQ2hhcnQnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgZGF0YTogJz0nXG4gICAgICB9LFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyIGNvbG9ycywgZGF0YSwgZnVuYywgb3B0aW9ucztcbiAgICAgICAgZGF0YSA9IHNjb3BlLmRhdGE7XG4gICAgICAgIHN3aXRjaCAoYXR0cnMudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgICAgICAgaWYgKGF0dHJzLmxpbmVDb2xvcnMgPT09IHZvaWQgMCB8fCBhdHRycy5saW5lQ29sb3JzID09PSAnJykge1xuICAgICAgICAgICAgICBjb2xvcnMgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sb3JzID0gSlNPTi5wYXJzZShhdHRycy5saW5lQ29sb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZVswXSxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgeGtleTogYXR0cnMueGtleSxcbiAgICAgICAgICAgICAgeWtleXM6IEpTT04ucGFyc2UoYXR0cnMueWtleXMpLFxuICAgICAgICAgICAgICBsYWJlbHM6IEpTT04ucGFyc2UoYXR0cnMubGFiZWxzKSxcbiAgICAgICAgICAgICAgbGluZVdpZHRoOiBhdHRycy5saW5lV2lkdGggfHwgMixcbiAgICAgICAgICAgICAgbGluZUNvbG9yczogY29sb3JzIHx8IFsnIzBiNjJhNCcsICcjN2E5MmEzJywgJyM0ZGE3NGQnLCAnI2FmZDhmOCcsICcjZWRjMjQwJywgJyNjYjRiNGInLCAnIzk0NDBlZCddXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3JyaXMuTGluZShvcHRpb25zKTtcbiAgICAgICAgICBjYXNlICdhcmVhJzpcbiAgICAgICAgICAgIGlmIChhdHRycy5saW5lQ29sb3JzID09PSB2b2lkIDAgfHwgYXR0cnMubGluZUNvbG9ycyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgY29sb3JzID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbG9ycyA9IEpTT04ucGFyc2UoYXR0cnMubGluZUNvbG9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICBlbGVtZW50OiBlbGVbMF0sXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgIHhrZXk6IGF0dHJzLnhrZXksXG4gICAgICAgICAgICAgIHlrZXlzOiBKU09OLnBhcnNlKGF0dHJzLnlrZXlzKSxcbiAgICAgICAgICAgICAgbGFiZWxzOiBKU09OLnBhcnNlKGF0dHJzLmxhYmVscyksXG4gICAgICAgICAgICAgIGxpbmVXaWR0aDogYXR0cnMubGluZVdpZHRoIHx8IDIsXG4gICAgICAgICAgICAgIGxpbmVDb2xvcnM6IGNvbG9ycyB8fCBbJyMwYjYyYTQnLCAnIzdhOTJhMycsICcjNGRhNzRkJywgJyNhZmQ4ZjgnLCAnI2VkYzI0MCcsICcjY2I0YjRiJywgJyM5NDQwZWQnXSxcbiAgICAgICAgICAgICAgYmVoYXZlTGlrZUxpbmU6IGF0dHJzLmJlaGF2ZUxpa2VMaW5lIHx8IGZhbHNlLFxuICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogYXR0cnMuZmlsbE9wYWNpdHkgfHwgJ2F1dG8nLFxuICAgICAgICAgICAgICBwb2ludFNpemU6IGF0dHJzLnBvaW50U2l6ZSB8fCA0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3JyaXMuQXJlYShvcHRpb25zKTtcbiAgICAgICAgICBjYXNlICdiYXInOlxuICAgICAgICAgICAgaWYgKGF0dHJzLmJhckNvbG9ycyA9PT0gdm9pZCAwIHx8IGF0dHJzLmJhckNvbG9ycyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgY29sb3JzID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbG9ycyA9IEpTT04ucGFyc2UoYXR0cnMuYmFyQ29sb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZVswXSxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgeGtleTogYXR0cnMueGtleSxcbiAgICAgICAgICAgICAgeWtleXM6IEpTT04ucGFyc2UoYXR0cnMueWtleXMpLFxuICAgICAgICAgICAgICBsYWJlbHM6IEpTT04ucGFyc2UoYXR0cnMubGFiZWxzKSxcbiAgICAgICAgICAgICAgYmFyQ29sb3JzOiBjb2xvcnMgfHwgWycjMGI2MmE0JywgJyM3YTkyYTMnLCAnIzRkYTc0ZCcsICcjYWZkOGY4JywgJyNlZGMyNDAnLCAnI2NiNGI0YicsICcjOTQ0MGVkJ10sXG4gICAgICAgICAgICAgIHN0YWNrZWQ6IGF0dHJzLnN0YWNrZWQgfHwgbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9ycmlzLkJhcihvcHRpb25zKTtcbiAgICAgICAgICBjYXNlICdkb251dCc6XG4gICAgICAgICAgICBpZiAoYXR0cnMuY29sb3JzID09PSB2b2lkIDAgfHwgYXR0cnMuY29sb3JzID09PSAnJykge1xuICAgICAgICAgICAgICBjb2xvcnMgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sb3JzID0gSlNPTi5wYXJzZShhdHRycy5jb2xvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgZWxlbWVudDogZWxlWzBdLFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICBjb2xvcnM6IGNvbG9ycyB8fCBbJyMwQjYyQTQnLCAnIzM5ODBCNScsICcjNjc5REM2JywgJyM5NUJCRDcnLCAnI0IwQ0NFMScsICcjMDk1NzkxJywgJyMwOTUwODUnLCAnIzA4M0U2NycsICcjMDUyQzQ4JywgJyMwNDIxMzUnXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChhdHRycy5mb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgZnVuYyA9IG5ldyBGdW5jdGlvbigneScsICdkYXRhJywgYXR0cnMuZm9ybWF0dGVyKTtcbiAgICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXR0ZXIgPSBmdW5jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3JyaXMuRG9udXQob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAudWkuZm9ybS5jdHJscycsIFtdKS5jb250cm9sbGVyKCdUYWdzRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICByZXR1cm4gJHNjb3BlLnRhZ3MgPSBbJ2ZvbycsICdiYXInXTtcbiAgfVxuXSkuY29udHJvbGxlcignRGF0ZXBpY2tlckRlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLnRvZGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmR0ID0gbmV3IERhdGUoKTtcbiAgICB9O1xuICAgICRzY29wZS50b2RheSgpO1xuICAgICRzY29wZS5zaG93V2Vla3MgPSB0cnVlO1xuICAgICRzY29wZS50b2dnbGVXZWVrcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICRzY29wZS5zaG93V2Vla3MgPSAhJHNjb3BlLnNob3dXZWVrcztcbiAgICB9O1xuICAgICRzY29wZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICRzY29wZS5kdCA9IG51bGw7XG4gICAgfTtcbiAgICAkc2NvcGUuZGlzYWJsZWQgPSBmdW5jdGlvbihkYXRlLCBtb2RlKSB7XG4gICAgICByZXR1cm4gbW9kZSA9PT0gJ2RheScgJiYgKGRhdGUuZ2V0RGF5KCkgPT09IDAgfHwgZGF0ZS5nZXREYXkoKSA9PT0gNik7XG4gICAgfTtcbiAgICAkc2NvcGUudG9nZ2xlTWluID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVmO1xuICAgICAgcmV0dXJuICRzY29wZS5taW5EYXRlID0gKHJlZiA9ICRzY29wZS5taW5EYXRlKSAhPSBudWxsID8gcmVmIDoge1xuICAgICAgICBcIm51bGxcIjogbmV3IERhdGUoKVxuICAgICAgfTtcbiAgICB9O1xuICAgICRzY29wZS50b2dnbGVNaW4oKTtcbiAgICAkc2NvcGUub3BlbiA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm4gJHNjb3BlLm9wZW5lZCA9IHRydWU7XG4gICAgfTtcbiAgICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XG4gICAgICAneWVhci1mb3JtYXQnOiBcIid5eSdcIixcbiAgICAgICdzdGFydGluZy1kYXknOiAxXG4gICAgfTtcbiAgICAkc2NvcGUuZm9ybWF0cyA9IFsnZGQtTU1NTS15eXl5JywgJ3l5eXkvTU0vZGQnLCAnc2hvcnREYXRlJ107XG4gICAgcmV0dXJuICRzY29wZS5mb3JtYXQgPSAkc2NvcGUuZm9ybWF0c1swXTtcbiAgfVxuXSkuY29udHJvbGxlcignVGltZXBpY2tlckRlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLm15dGltZSA9IG5ldyBEYXRlKCk7XG4gICAgJHNjb3BlLmhzdGVwID0gMTtcbiAgICAkc2NvcGUubXN0ZXAgPSAxNTtcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcbiAgICAgIGhzdGVwOiBbMSwgMiwgM10sXG4gICAgICBtc3RlcDogWzEsIDUsIDEwLCAxNSwgMjUsIDMwXVxuICAgIH07XG4gICAgJHNjb3BlLmlzbWVyaWRpYW4gPSB0cnVlO1xuICAgICRzY29wZS50b2dnbGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmlzbWVyaWRpYW4gPSAhJHNjb3BlLmlzbWVyaWRpYW47XG4gICAgfTtcbiAgICAkc2NvcGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZDtcbiAgICAgIGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgZC5zZXRIb3VycygxNCk7XG4gICAgICBkLnNldE1pbnV0ZXMoMCk7XG4gICAgICByZXR1cm4gJHNjb3BlLm15dGltZSA9IGQ7XG4gICAgfTtcbiAgICAkc2NvcGUuY2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdUaW1lIGNoYW5nZWQgdG86ICcgKyAkc2NvcGUubXl0aW1lKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkc2NvcGUubXl0aW1lID0gbnVsbDtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdUeXBlYWhlYWRDdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLnNlbGVjdGVkID0gdm9pZCAwO1xuICAgIHJldHVybiAkc2NvcGUuc3RhdGVzID0gWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJywgJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLCAnQ29ubmVjdGljdXQnLCAnRGVsYXdhcmUnLCAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLCAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJywgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBEYWtvdGEnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJywgJ1Job2RlIElzbGFuZCcsICdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJywgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJywgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXTtcbiAgfVxuXSkuY29udHJvbGxlcignUmF0aW5nRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUucmF0ZSA9IDc7XG4gICAgJHNjb3BlLm1heCA9IDEwO1xuICAgICRzY29wZS5pc1JlYWRvbmx5ID0gZmFsc2U7XG4gICAgJHNjb3BlLmhvdmVyaW5nT3ZlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAkc2NvcGUub3ZlclN0YXIgPSB2YWx1ZTtcbiAgICAgIHJldHVybiAkc2NvcGUucGVyY2VudCA9IDEwMCAqICh2YWx1ZSAvICRzY29wZS5tYXgpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5yYXRpbmdTdGF0ZXMgPSBbXG4gICAgICB7XG4gICAgICAgIHN0YXRlT246ICdnbHlwaGljb24tb2stc2lnbicsXG4gICAgICAgIHN0YXRlT2ZmOiAnZ2x5cGhpY29uLW9rLWNpcmNsZSdcbiAgICAgIH0sIHtcbiAgICAgICAgc3RhdGVPbjogJ2dseXBoaWNvbi1zdGFyJyxcbiAgICAgICAgc3RhdGVPZmY6ICdnbHlwaGljb24tc3Rhci1lbXB0eSdcbiAgICAgIH0sIHtcbiAgICAgICAgc3RhdGVPbjogJ2dseXBoaWNvbi1oZWFydCcsXG4gICAgICAgIHN0YXRlT2ZmOiAnZ2x5cGhpY29uLWJhbi1jaXJjbGUnXG4gICAgICB9LCB7XG4gICAgICAgIHN0YXRlT246ICdnbHlwaGljb24taGVhcnQnXG4gICAgICB9LCB7XG4gICAgICAgIHN0YXRlT2ZmOiAnZ2x5cGhpY29uLW9mZidcbiAgICAgIH1cbiAgICBdO1xuICB9XG5dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAudWkuZm9ybS5kaXJlY3RpdmVzJywgW10pLmRpcmVjdGl2ZSgndWlSYW5nZVNsaWRlcicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlKSB7XG4gICAgICAgIHJldHVybiBlbGUuc2xpZGVyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCd1aUZpbGVVcGxvYWQnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSkge1xuICAgICAgICByZXR1cm4gZWxlLmJvb3RzdHJhcEZpbGVJbnB1dCgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndWlTcGlubmVyJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uKGVsZSwgYXR0cnMpIHtcbiAgICAgICAgZWxlLmFkZENsYXNzKCd1aS1zcGlubmVyJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcG9zdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlLnNwaW5uZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCd1aVdpemFyZEZvcm0nLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlKSB7XG4gICAgICAgIHJldHVybiBlbGUuc3RlcHMoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAuZm9ybS52YWxpZGF0aW9uJywgW10pLmNvbnRyb2xsZXIoJ3dpemFyZEZvcm1DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLndpemFyZCA9IHtcbiAgICAgIGZpcnN0TmFtZTogJ3NvbWUgbmFtZScsXG4gICAgICBsYXN0TmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBhZ2U6ICcnLFxuICAgICAgYWRkcmVzczogJydcbiAgICB9O1xuICAgICRzY29wZS5pc1ZhbGlkYXRlU3RlcDEgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCRzY29wZS53aXphcmRfc3RlcDEpO1xuICAgICAgY29uc29sZS5sb2coJHNjb3BlLndpemFyZC5maXJzdE5hbWUgIT09ICcnKTtcbiAgICAgIGNvbnNvbGUubG9nKCRzY29wZS53aXphcmQubGFzdE5hbWUgPT09ICcnKTtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygkc2NvcGUud2l6YXJkLmZpcnN0TmFtZSAhPT0gJycgJiYgJHNjb3BlLndpemFyZC5sYXN0TmFtZSAhPT0gJycpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5maW5pc2hlZFdpemFyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCd5b28nKTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdmb3JtQ29uc3RyYWludHNDdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgdmFyIG9yaWdpbmFsO1xuICAgICRzY29wZS5mb3JtID0ge1xuICAgICAgcmVxdWlyZWQ6ICcnLFxuICAgICAgbWlubGVuZ3RoOiAnJyxcbiAgICAgIG1heGxlbmd0aDogJycsXG4gICAgICBsZW5ndGhfcmFnZTogJycsXG4gICAgICB0eXBlX3NvbWV0aGluZzogJycsXG4gICAgICBjb25maXJtX3R5cGU6ICcnLFxuICAgICAgZm9vOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHVybDogJycsXG4gICAgICBudW06ICcnLFxuICAgICAgbWluVmFsOiAnJyxcbiAgICAgIG1heFZhbDogJycsXG4gICAgICB2YWxSYW5nZTogJycsXG4gICAgICBwYXR0ZXJuOiAnJ1xuICAgIH07XG4gICAgb3JpZ2luYWwgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmZvcm0pO1xuICAgICRzY29wZS5yZXZlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5mb3JtID0gYW5ndWxhci5jb3B5KG9yaWdpbmFsKTtcbiAgICAgIHJldHVybiAkc2NvcGUuZm9ybV9jb25zdHJhaW50cy4kc2V0UHJpc3RpbmUoKTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5SZXZlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhYW5ndWxhci5lcXVhbHMoJHNjb3BlLmZvcm0sIG9yaWdpbmFsKSB8fCAhJHNjb3BlLmZvcm1fY29uc3RyYWludHMuJHByaXN0aW5lO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5jYW5TdWJtaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuZm9ybV9jb25zdHJhaW50cy4kdmFsaWQgJiYgIWFuZ3VsYXIuZXF1YWxzKCRzY29wZS5mb3JtLCBvcmlnaW5hbCk7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignc2lnbmluQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIHZhciBvcmlnaW5hbDtcbiAgICAkc2NvcGUudXNlciA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG4gICAgJHNjb3BlLnNob3dJbmZvT25TdWJtaXQgPSBmYWxzZTtcbiAgICBvcmlnaW5hbCA9IGFuZ3VsYXIuY29weSgkc2NvcGUudXNlcik7XG4gICAgJHNjb3BlLnJldmVydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnVzZXIgPSBhbmd1bGFyLmNvcHkob3JpZ2luYWwpO1xuICAgICAgcmV0dXJuICRzY29wZS5mb3JtX3NpZ25pbi4kc2V0UHJpc3RpbmUoKTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5SZXZlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhYW5ndWxhci5lcXVhbHMoJHNjb3BlLnVzZXIsIG9yaWdpbmFsKSB8fCAhJHNjb3BlLmZvcm1fc2lnbmluLiRwcmlzdGluZTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5TdWJtaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuZm9ybV9zaWduaW4uJHZhbGlkICYmICFhbmd1bGFyLmVxdWFscygkc2NvcGUudXNlciwgb3JpZ2luYWwpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuc2hvd0luZm9PblN1Ym1pdCA9IHRydWU7XG4gICAgICByZXR1cm4gJHNjb3BlLnJldmVydCgpO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ3NpZ251cEN0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICB2YXIgb3JpZ2luYWw7XG4gICAgJHNjb3BlLnVzZXIgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gICAgICBhZ2U6ICcnXG4gICAgfTtcbiAgICAkc2NvcGUuc2hvd0luZm9PblN1Ym1pdCA9IGZhbHNlO1xuICAgIG9yaWdpbmFsID0gYW5ndWxhci5jb3B5KCRzY29wZS51c2VyKTtcbiAgICAkc2NvcGUucmV2ZXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUudXNlciA9IGFuZ3VsYXIuY29weShvcmlnaW5hbCk7XG4gICAgICAkc2NvcGUuZm9ybV9zaWdudXAuJHNldFByaXN0aW5lKCk7XG4gICAgICByZXR1cm4gJHNjb3BlLmZvcm1fc2lnbnVwLmNvbmZpcm1QYXNzd29yZC4kc2V0UHJpc3RpbmUoKTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5SZXZlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhYW5ndWxhci5lcXVhbHMoJHNjb3BlLnVzZXIsIG9yaWdpbmFsKSB8fCAhJHNjb3BlLmZvcm1fc2lnbnVwLiRwcmlzdGluZTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5TdWJtaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuZm9ybV9zaWdudXAuJHZhbGlkICYmICFhbmd1bGFyLmVxdWFscygkc2NvcGUudXNlciwgb3JpZ2luYWwpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuc2hvd0luZm9PblN1Ym1pdCA9IHRydWU7XG4gICAgICByZXR1cm4gJHNjb3BlLnJldmVydCgpO1xuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndmFsaWRhdGVFcXVhbHMnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycywgbmdNb2RlbEN0cmwpIHtcbiAgICAgICAgdmFyIHZhbGlkYXRlRXF1YWw7XG4gICAgICAgIHZhbGlkYXRlRXF1YWwgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHZhciB2YWxpZDtcbiAgICAgICAgICB2YWxpZCA9IHZhbHVlID09PSBzY29wZS4kZXZhbChhdHRycy52YWxpZGF0ZUVxdWFscyk7XG4gICAgICAgICAgbmdNb2RlbEN0cmwuJHNldFZhbGlkaXR5KCdlcXVhbCcsIHZhbGlkKTtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbGlkID09PSBcImZ1bmN0aW9uXCIgPyB2YWxpZCh7XG4gICAgICAgICAgICB2YWx1ZTogdm9pZCAwXG4gICAgICAgICAgfSkgOiB2b2lkIDA7XG4gICAgICAgIH07XG4gICAgICAgIG5nTW9kZWxDdHJsLiRwYXJzZXJzLnB1c2godmFsaWRhdGVFcXVhbCk7XG4gICAgICAgIG5nTW9kZWxDdHJsLiRmb3JtYXR0ZXJzLnB1c2godmFsaWRhdGVFcXVhbCk7XG4gICAgICAgIHJldHVybiBzY29wZS4kd2F0Y2goYXR0cnMudmFsaWRhdGVFcXVhbHMsIGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKG5nTW9kZWxDdHJsLiRWaWV3VmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLm1hcCcsIFtdKS5kaXJlY3RpdmUoJ3VpSnF2bWFwJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIG9wdGlvbnM6ICc9J1xuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0gc2NvcGUub3B0aW9ucztcbiAgICAgICAgcmV0dXJuIGVsZS52ZWN0b3JNYXAob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignanF2bWFwQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIHZhciBzYW1wbGVfZGF0YTtcbiAgICBzYW1wbGVfZGF0YSA9IHtcbiAgICAgIFwiYWZcIjogXCIxNi42M1wiLFxuICAgICAgXCJhbFwiOiBcIjExLjU4XCIsXG4gICAgICBcImR6XCI6IFwiMTU4Ljk3XCIsXG4gICAgICBcImFvXCI6IFwiODUuODFcIixcbiAgICAgIFwiYWdcIjogXCIxLjFcIixcbiAgICAgIFwiYXJcIjogXCIzNTEuMDJcIixcbiAgICAgIFwiYW1cIjogXCI4LjgzXCIsXG4gICAgICBcImF1XCI6IFwiMTIxOS43MlwiLFxuICAgICAgXCJhdFwiOiBcIjM2Ni4yNlwiLFxuICAgICAgXCJhelwiOiBcIjUyLjE3XCIsXG4gICAgICBcImJzXCI6IFwiNy41NFwiLFxuICAgICAgXCJiaFwiOiBcIjIxLjczXCIsXG4gICAgICBcImJkXCI6IFwiMTA1LjRcIixcbiAgICAgIFwiYmJcIjogXCIzLjk2XCIsXG4gICAgICBcImJ5XCI6IFwiNTIuODlcIixcbiAgICAgIFwiYmVcIjogXCI0NjEuMzNcIixcbiAgICAgIFwiYnpcIjogXCIxLjQzXCIsXG4gICAgICBcImJqXCI6IFwiNi40OVwiLFxuICAgICAgXCJidFwiOiBcIjEuNFwiLFxuICAgICAgXCJib1wiOiBcIjE5LjE4XCIsXG4gICAgICBcImJhXCI6IFwiMTYuMlwiLFxuICAgICAgXCJid1wiOiBcIjEyLjVcIixcbiAgICAgIFwiYnJcIjogXCIyMDIzLjUzXCIsXG4gICAgICBcImJuXCI6IFwiMTEuOTZcIixcbiAgICAgIFwiYmdcIjogXCI0NC44NFwiLFxuICAgICAgXCJiZlwiOiBcIjguNjdcIixcbiAgICAgIFwiYmlcIjogXCIxLjQ3XCIsXG4gICAgICBcImtoXCI6IFwiMTEuMzZcIixcbiAgICAgIFwiY21cIjogXCIyMS44OFwiLFxuICAgICAgXCJjYVwiOiBcIjE1NjMuNjZcIixcbiAgICAgIFwiY3ZcIjogXCIxLjU3XCIsXG4gICAgICBcImNmXCI6IFwiMi4xMVwiLFxuICAgICAgXCJ0ZFwiOiBcIjcuNTlcIixcbiAgICAgIFwiY2xcIjogXCIxOTkuMThcIixcbiAgICAgIFwiY25cIjogXCI1NzQ1LjEzXCIsXG4gICAgICBcImNvXCI6IFwiMjgzLjExXCIsXG4gICAgICBcImttXCI6IFwiMC41NlwiLFxuICAgICAgXCJjZFwiOiBcIjEyLjZcIixcbiAgICAgIFwiY2dcIjogXCIxMS44OFwiLFxuICAgICAgXCJjclwiOiBcIjM1LjAyXCIsXG4gICAgICBcImNpXCI6IFwiMjIuMzhcIixcbiAgICAgIFwiaHJcIjogXCI1OS45MlwiLFxuICAgICAgXCJjeVwiOiBcIjIyLjc1XCIsXG4gICAgICBcImN6XCI6IFwiMTk1LjIzXCIsXG4gICAgICBcImRrXCI6IFwiMzA0LjU2XCIsXG4gICAgICBcImRqXCI6IFwiMS4xNFwiLFxuICAgICAgXCJkbVwiOiBcIjAuMzhcIixcbiAgICAgIFwiZG9cIjogXCI1MC44N1wiLFxuICAgICAgXCJlY1wiOiBcIjYxLjQ5XCIsXG4gICAgICBcImVnXCI6IFwiMjE2LjgzXCIsXG4gICAgICBcInN2XCI6IFwiMjEuOFwiLFxuICAgICAgXCJncVwiOiBcIjE0LjU1XCIsXG4gICAgICBcImVyXCI6IFwiMi4yNVwiLFxuICAgICAgXCJlZVwiOiBcIjE5LjIyXCIsXG4gICAgICBcImV0XCI6IFwiMzAuOTRcIixcbiAgICAgIFwiZmpcIjogXCIzLjE1XCIsXG4gICAgICBcImZpXCI6IFwiMjMxLjk4XCIsXG4gICAgICBcImZyXCI6IFwiMjU1NS40NFwiLFxuICAgICAgXCJnYVwiOiBcIjEyLjU2XCIsXG4gICAgICBcImdtXCI6IFwiMS4wNFwiLFxuICAgICAgXCJnZVwiOiBcIjExLjIzXCIsXG4gICAgICBcImRlXCI6IFwiMzMwNS45XCIsXG4gICAgICBcImdoXCI6IFwiMTguMDZcIixcbiAgICAgIFwiZ3JcIjogXCIzMDUuMDFcIixcbiAgICAgIFwiZ2RcIjogXCIwLjY1XCIsXG4gICAgICBcImd0XCI6IFwiNDAuNzdcIixcbiAgICAgIFwiZ25cIjogXCI0LjM0XCIsXG4gICAgICBcImd3XCI6IFwiMC44M1wiLFxuICAgICAgXCJneVwiOiBcIjIuMlwiLFxuICAgICAgXCJodFwiOiBcIjYuNVwiLFxuICAgICAgXCJoblwiOiBcIjE1LjM0XCIsXG4gICAgICBcImhrXCI6IFwiMjI2LjQ5XCIsXG4gICAgICBcImh1XCI6IFwiMTMyLjI4XCIsXG4gICAgICBcImlzXCI6IFwiMTIuNzdcIixcbiAgICAgIFwiaW5cIjogXCIxNDMwLjAyXCIsXG4gICAgICBcImlkXCI6IFwiNjk1LjA2XCIsXG4gICAgICBcImlyXCI6IFwiMzM3LjlcIixcbiAgICAgIFwiaXFcIjogXCI4NC4xNFwiLFxuICAgICAgXCJpZVwiOiBcIjIwNC4xNFwiLFxuICAgICAgXCJpbFwiOiBcIjIwMS4yNVwiLFxuICAgICAgXCJpdFwiOiBcIjIwMzYuNjlcIixcbiAgICAgIFwiam1cIjogXCIxMy43NFwiLFxuICAgICAgXCJqcFwiOiBcIjUzOTAuOVwiLFxuICAgICAgXCJqb1wiOiBcIjI3LjEzXCIsXG4gICAgICBcImt6XCI6IFwiMTI5Ljc2XCIsXG4gICAgICBcImtlXCI6IFwiMzIuNDJcIixcbiAgICAgIFwia2lcIjogXCIwLjE1XCIsXG4gICAgICBcImtyXCI6IFwiOTg2LjI2XCIsXG4gICAgICBcInVuZGVmaW5lZFwiOiBcIjUuNzNcIixcbiAgICAgIFwia3dcIjogXCIxMTcuMzJcIixcbiAgICAgIFwia2dcIjogXCI0LjQ0XCIsXG4gICAgICBcImxhXCI6IFwiNi4zNFwiLFxuICAgICAgXCJsdlwiOiBcIjIzLjM5XCIsXG4gICAgICBcImxiXCI6IFwiMzkuMTVcIixcbiAgICAgIFwibHNcIjogXCIxLjhcIixcbiAgICAgIFwibHJcIjogXCIwLjk4XCIsXG4gICAgICBcImx5XCI6IFwiNzcuOTFcIixcbiAgICAgIFwibHRcIjogXCIzNS43M1wiLFxuICAgICAgXCJsdVwiOiBcIjUyLjQzXCIsXG4gICAgICBcIm1rXCI6IFwiOS41OFwiLFxuICAgICAgXCJtZ1wiOiBcIjguMzNcIixcbiAgICAgIFwibXdcIjogXCI1LjA0XCIsXG4gICAgICBcIm15XCI6IFwiMjE4Ljk1XCIsXG4gICAgICBcIm12XCI6IFwiMS40M1wiLFxuICAgICAgXCJtbFwiOiBcIjkuMDhcIixcbiAgICAgIFwibXRcIjogXCI3LjhcIixcbiAgICAgIFwibXJcIjogXCIzLjQ5XCIsXG4gICAgICBcIm11XCI6IFwiOS40M1wiLFxuICAgICAgXCJteFwiOiBcIjEwMDQuMDRcIixcbiAgICAgIFwibWRcIjogXCI1LjM2XCIsXG4gICAgICBcIm1uXCI6IFwiNS44MVwiLFxuICAgICAgXCJtZVwiOiBcIjMuODhcIixcbiAgICAgIFwibWFcIjogXCI5MS43XCIsXG4gICAgICBcIm16XCI6IFwiMTAuMjFcIixcbiAgICAgIFwibW1cIjogXCIzNS42NVwiLFxuICAgICAgXCJuYVwiOiBcIjExLjQ1XCIsXG4gICAgICBcIm5wXCI6IFwiMTUuMTFcIixcbiAgICAgIFwibmxcIjogXCI3NzAuMzFcIixcbiAgICAgIFwibnpcIjogXCIxMzhcIixcbiAgICAgIFwibmlcIjogXCI2LjM4XCIsXG4gICAgICBcIm5lXCI6IFwiNS42XCIsXG4gICAgICBcIm5nXCI6IFwiMjA2LjY2XCIsXG4gICAgICBcIm5vXCI6IFwiNDEzLjUxXCIsXG4gICAgICBcIm9tXCI6IFwiNTMuNzhcIixcbiAgICAgIFwicGtcIjogXCIxNzQuNzlcIixcbiAgICAgIFwicGFcIjogXCIyNy4yXCIsXG4gICAgICBcInBnXCI6IFwiOC44MVwiLFxuICAgICAgXCJweVwiOiBcIjE3LjE3XCIsXG4gICAgICBcInBlXCI6IFwiMTUzLjU1XCIsXG4gICAgICBcInBoXCI6IFwiMTg5LjA2XCIsXG4gICAgICBcInBsXCI6IFwiNDM4Ljg4XCIsXG4gICAgICBcInB0XCI6IFwiMjIzLjdcIixcbiAgICAgIFwicWFcIjogXCIxMjYuNTJcIixcbiAgICAgIFwicm9cIjogXCIxNTguMzlcIixcbiAgICAgIFwicnVcIjogXCIxNDc2LjkxXCIsXG4gICAgICBcInJ3XCI6IFwiNS42OVwiLFxuICAgICAgXCJ3c1wiOiBcIjAuNTVcIixcbiAgICAgIFwic3RcIjogXCIwLjE5XCIsXG4gICAgICBcInNhXCI6IFwiNDM0LjQ0XCIsXG4gICAgICBcInNuXCI6IFwiMTIuNjZcIixcbiAgICAgIFwicnNcIjogXCIzOC45MlwiLFxuICAgICAgXCJzY1wiOiBcIjAuOTJcIixcbiAgICAgIFwic2xcIjogXCIxLjlcIixcbiAgICAgIFwic2dcIjogXCIyMTcuMzhcIixcbiAgICAgIFwic2tcIjogXCI4Ni4yNlwiLFxuICAgICAgXCJzaVwiOiBcIjQ2LjQ0XCIsXG4gICAgICBcInNiXCI6IFwiMC42N1wiLFxuICAgICAgXCJ6YVwiOiBcIjM1NC40MVwiLFxuICAgICAgXCJlc1wiOiBcIjEzNzQuNzhcIixcbiAgICAgIFwibGtcIjogXCI0OC4yNFwiLFxuICAgICAgXCJrblwiOiBcIjAuNTZcIixcbiAgICAgIFwibGNcIjogXCIxXCIsXG4gICAgICBcInZjXCI6IFwiMC41OFwiLFxuICAgICAgXCJzZFwiOiBcIjY1LjkzXCIsXG4gICAgICBcInNyXCI6IFwiMy4zXCIsXG4gICAgICBcInN6XCI6IFwiMy4xN1wiLFxuICAgICAgXCJzZVwiOiBcIjQ0NC41OVwiLFxuICAgICAgXCJjaFwiOiBcIjUyMi40NFwiLFxuICAgICAgXCJzeVwiOiBcIjU5LjYzXCIsXG4gICAgICBcInR3XCI6IFwiNDI2Ljk4XCIsXG4gICAgICBcInRqXCI6IFwiNS41OFwiLFxuICAgICAgXCJ0elwiOiBcIjIyLjQzXCIsXG4gICAgICBcInRoXCI6IFwiMzEyLjYxXCIsXG4gICAgICBcInRsXCI6IFwiMC42MlwiLFxuICAgICAgXCJ0Z1wiOiBcIjMuMDdcIixcbiAgICAgIFwidG9cIjogXCIwLjNcIixcbiAgICAgIFwidHRcIjogXCIyMS4yXCIsXG4gICAgICBcInRuXCI6IFwiNDMuODZcIixcbiAgICAgIFwidHJcIjogXCI3MjkuMDVcIixcbiAgICAgIFwidG1cIjogMCxcbiAgICAgIFwidWdcIjogXCIxNy4xMlwiLFxuICAgICAgXCJ1YVwiOiBcIjEzNi41NlwiLFxuICAgICAgXCJhZVwiOiBcIjIzOS42NVwiLFxuICAgICAgXCJnYlwiOiBcIjIyNTguNTdcIixcbiAgICAgIFwidXNcIjogXCIxNDYyNC4xOFwiLFxuICAgICAgXCJ1eVwiOiBcIjQwLjcxXCIsXG4gICAgICBcInV6XCI6IFwiMzcuNzJcIixcbiAgICAgIFwidnVcIjogXCIwLjcyXCIsXG4gICAgICBcInZlXCI6IFwiMjg1LjIxXCIsXG4gICAgICBcInZuXCI6IFwiMTAxLjk5XCIsXG4gICAgICBcInllXCI6IFwiMzAuMDJcIixcbiAgICAgIFwiem1cIjogXCIxNS42OVwiLFxuICAgICAgXCJ6d1wiOiBcIjUuNTdcIlxuICAgIH07XG4gICAgJHNjb3BlLndvcmxkTWFwID0ge1xuICAgICAgbWFwOiAnd29ybGRfZW4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGhvdmVyT3BhY2l0eTogMC43LFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyM2NjY2NjYnLFxuICAgICAgZW5hYmxlWm9vbTogdHJ1ZSxcbiAgICAgIHNob3dUb29sdGlwOiB0cnVlLFxuICAgICAgdmFsdWVzOiBzYW1wbGVfZGF0YSxcbiAgICAgIHNjYWxlQ29sb3JzOiBbJyNDNEZGRkYnLCAnIzA3QzBCQiddLFxuICAgICAgbm9ybWFsaXplRnVuY3Rpb246ICdwb2x5bm9taWFsJ1xuICAgIH07XG4gICAgJHNjb3BlLnZlbmV6dWVsYU1hcCA9IHtcbiAgICAgIG1hcDogJ3ZlbmV6dWVsYV9lbicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG51bGwsXG4gICAgICBjb2xvcjogJyMwMDAwNjMnLFxuICAgICAgaG92ZXJDb2xvcjogJyNCNkFCMEYnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyNmNGUzMGEnLFxuICAgICAgZW5hYmxlWm9vbTogdHJ1ZSxcbiAgICAgIHNob3dUb29sdGlwOiB0cnVlLFxuICAgICAgc2VsZWN0ZWRSZWdpb246ICdaVSdcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuZXVyb3BlTWFwID0ge1xuICAgICAgbWFwOiAnZXVyb3BlX2VuJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogbnVsbCxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBob3Zlck9wYWNpdHk6IDAuNyxcbiAgICAgIGhvdmVyQ29sb3I6ICcjOTk5OTk5JyxcbiAgICAgIGVuYWJsZVpvb206IGZhbHNlLFxuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgICAgdmFsdWVzOiBzYW1wbGVfZGF0YSxcbiAgICAgIHNjYWxlQ29sb3JzOiBbJyNDNEZGRkYnLCAnIzA3QzBCQiddLFxuICAgICAgbm9ybWFsaXplRnVuY3Rpb246ICdwb2x5bm9taWFsJ1xuICAgIH07XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC5wYWdlLmN0cmxzJywgW10pLmNvbnRyb2xsZXIoJ2ludm9pY2VDdHJsJywgW1xuICAnJHNjb3BlJywgJyR3aW5kb3cnLCBmdW5jdGlvbigkc2NvcGUsICR3aW5kb3cpIHtcbiAgICByZXR1cm4gJHNjb3BlLnByaW50SW52b2ljZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9yaWdpbmFsQ29udGVudHMsIHBvcHVwV2luLCBwcmludENvbnRlbnRzO1xuICAgICAgcHJpbnRDb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZvaWNlJykuaW5uZXJIVE1MO1xuICAgICAgb3JpZ2luYWxDb250ZW50cyA9IGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuICAgICAgcG9wdXBXaW4gPSB3aW5kb3cub3BlbigpO1xuICAgICAgcG9wdXBXaW4uZG9jdW1lbnQub3BlbigpO1xuICAgICAgcG9wdXBXaW4uZG9jdW1lbnQud3JpdGUoJzxodG1sPjxoZWFkPjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwic3R5bGVzL21haW4uY3NzXCIgLz48L2hlYWQ+PGJvZHkgb25sb2FkPVwid2luZG93LnByaW50KClcIj4nICsgcHJpbnRDb250ZW50cyArICc8L2h0bWw+Jyk7XG4gICAgICByZXR1cm4gcG9wdXBXaW4uZG9jdW1lbnQuY2xvc2UoKTtcbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAudGFibGVzJywgW10pLmNvbnRyb2xsZXIoJ3RhYmxlQ3RybCcsIFtcbiAgJyRzY29wZScsICckZmlsdGVyJywgZnVuY3Rpb24oJHNjb3BlLCAkZmlsdGVyKSB7XG4gICAgdmFyIGluaXQ7XG4gICAgJHNjb3BlLnN0b3JlcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ05paml5YSBNYXJrZXQnLFxuICAgICAgICBwcmljZTogJyQkJyxcbiAgICAgICAgc2FsZXM6IDI5MixcbiAgICAgICAgcmF0aW5nOiA0LjBcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0VhdCBPbiBNb25kYXkgVHJ1Y2snLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMTE5LFxuICAgICAgICByYXRpbmc6IDQuM1xuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnVGVhIEVyYScsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiA4NzQsXG4gICAgICAgIHJhdGluZzogNC4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdSb2dlcnMgRGVsaScsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAzNDcsXG4gICAgICAgIHJhdGluZzogNC4yXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdNb0Jvd2wnLFxuICAgICAgICBwcmljZTogJyQkJCcsXG4gICAgICAgIHNhbGVzOiAyNCxcbiAgICAgICAgcmF0aW5nOiA0LjZcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1RoZSBNaWxrIFBhaWwgTWFya2V0JyxcbiAgICAgICAgcHJpY2U6ICckJyxcbiAgICAgICAgc2FsZXM6IDU0MyxcbiAgICAgICAgcmF0aW5nOiA0LjVcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ05vYiBIaWxsIEZvb2RzJyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA4NzQsXG4gICAgICAgIHJhdGluZzogNC4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdTY3JhdGNoJyxcbiAgICAgICAgcHJpY2U6ICckJCQnLFxuICAgICAgICBzYWxlczogNjQzLFxuICAgICAgICByYXRpbmc6IDMuNlxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnR29jaGkgSmFwYW5lc2UgRnVzaW9uIFRhcGFzJyxcbiAgICAgICAgcHJpY2U6ICckJCQnLFxuICAgICAgICBzYWxlczogNTYsXG4gICAgICAgIHJhdGluZzogNC4xXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdDb3N0IFBsdXMgV29ybGQgTWFya2V0JyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA3OSxcbiAgICAgICAgcmF0aW5nOiA0LjBcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0J1bWJsZSBCZWUgSGVhbHRoIEZvb2RzJyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA0MyxcbiAgICAgICAgcmF0aW5nOiA0LjNcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0Nvc3RjbycsXG4gICAgICAgIHByaWNlOiAnJCQnLFxuICAgICAgICBzYWxlczogMjE5LFxuICAgICAgICByYXRpbmc6IDMuNlxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnUmVkIFJvY2sgQ29mZmVlIENvJyxcbiAgICAgICAgcHJpY2U6ICckJyxcbiAgICAgICAgc2FsZXM6IDc2NSxcbiAgICAgICAgcmF0aW5nOiA0LjFcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJzk5IFJhbmNoIE1hcmtldCcsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAxODEsXG4gICAgICAgIHJhdGluZzogMy40XG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdNaSBQdWVibG8gRm9vZCBDZW50ZXInLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogNzgsXG4gICAgICAgIHJhdGluZzogNC4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdDdWNpbmEgVmVudGknLFxuICAgICAgICBwcmljZTogJyQkJyxcbiAgICAgICAgc2FsZXM6IDE2MyxcbiAgICAgICAgcmF0aW5nOiAzLjNcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1N1ZmkgQ29mZmVlIFNob3AnLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMTEzLFxuICAgICAgICByYXRpbmc6IDMuM1xuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnRGFuYSBTdHJlZXQgUm9hc3RpbmcnLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMzE2LFxuICAgICAgICByYXRpbmc6IDQuMVxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnUGVhcmwgQ2FmZScsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAxNzMsXG4gICAgICAgIHJhdGluZzogMy40XG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdQb3NoIEJhZ2VsJyxcbiAgICAgICAgcHJpY2U6ICckJyxcbiAgICAgICAgc2FsZXM6IDE0MCxcbiAgICAgICAgcmF0aW5nOiA0LjBcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0FydGlzYW4gV2luZSBEZXBvdCcsXG4gICAgICAgIHByaWNlOiAnJCQnLFxuICAgICAgICBzYWxlczogMjYsXG4gICAgICAgIHJhdGluZzogNC4xXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdIb25nIEtvbmcgQ2hpbmVzZSBCYWtlcnknLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMTgyLFxuICAgICAgICByYXRpbmc6IDMuNFxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnU3RhcmJ1Y2tzJyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA5NyxcbiAgICAgICAgcmF0aW5nOiAzLjdcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1RhcGlvY2EgRXhwcmVzcycsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAzMDEsXG4gICAgICAgIHJhdGluZzogMy4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdIb3VzZSBvZiBCYWdlbHMnLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogODIsXG4gICAgICAgIHJhdGluZzogNC40XG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuc2VhcmNoS2V5d29yZHMgPSAnJztcbiAgICAkc2NvcGUuZmlsdGVyZWRTdG9yZXMgPSBbXTtcbiAgICAkc2NvcGUucm93ID0gJyc7XG4gICAgJHNjb3BlLnNlbGVjdCA9IGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgIHZhciBlbmQsIHN0YXJ0O1xuICAgICAgc3RhcnQgPSAocGFnZSAtIDEpICogJHNjb3BlLm51bVBlclBhZ2U7XG4gICAgICBlbmQgPSBzdGFydCArICRzY29wZS5udW1QZXJQYWdlO1xuICAgICAgcmV0dXJuICRzY29wZS5jdXJyZW50UGFnZVN0b3JlcyA9ICRzY29wZS5maWx0ZXJlZFN0b3Jlcy5zbGljZShzdGFydCwgZW5kKTtcbiAgICB9O1xuICAgICRzY29wZS5vbkZpbHRlckNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnNlbGVjdCgxKTtcbiAgICAgICRzY29wZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICByZXR1cm4gJHNjb3BlLnJvdyA9ICcnO1xuICAgIH07XG4gICAgJHNjb3BlLm9uTnVtUGVyUGFnZUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnNlbGVjdCgxKTtcbiAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFBhZ2UgPSAxO1xuICAgIH07XG4gICAgJHNjb3BlLm9uT3JkZXJDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5zZWxlY3QoMSk7XG4gICAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRQYWdlID0gMTtcbiAgICB9O1xuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5maWx0ZXJlZFN0b3JlcyA9ICRmaWx0ZXIoJ2ZpbHRlcicpKCRzY29wZS5zdG9yZXMsICRzY29wZS5zZWFyY2hLZXl3b3Jkcyk7XG4gICAgICByZXR1cm4gJHNjb3BlLm9uRmlsdGVyQ2hhbmdlKCk7XG4gICAgfTtcbiAgICAkc2NvcGUub3JkZXIgPSBmdW5jdGlvbihyb3dOYW1lKSB7XG4gICAgICBpZiAoJHNjb3BlLnJvdyA9PT0gcm93TmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkc2NvcGUucm93ID0gcm93TmFtZTtcbiAgICAgICRzY29wZS5maWx0ZXJlZFN0b3JlcyA9ICRmaWx0ZXIoJ29yZGVyQnknKSgkc2NvcGUuc3RvcmVzLCByb3dOYW1lKTtcbiAgICAgIHJldHVybiAkc2NvcGUub25PcmRlckNoYW5nZSgpO1xuICAgIH07XG4gICAgJHNjb3BlLm51bVBlclBhZ2VPcHQgPSBbMywgNSwgMTAsIDIwXTtcbiAgICAkc2NvcGUubnVtUGVyUGFnZSA9ICRzY29wZS5udW1QZXJQYWdlT3B0WzJdO1xuICAgICRzY29wZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgJHNjb3BlLmN1cnJlbnRQYWdlU3RvcmVzID0gW107XG4gICAgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnNlYXJjaCgpO1xuICAgICAgcmV0dXJuICRzY29wZS5zZWxlY3QoJHNjb3BlLmN1cnJlbnRQYWdlKTtcbiAgICB9O1xuICAgIHJldHVybiBpbml0KCk7XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC50YXNrJywgW10pLmZhY3RvcnkoJ3Rhc2tTdG9yYWdlJywgZnVuY3Rpb24oKSB7XG4gIHZhciBERU1PX1RBU0tTLCBTVE9SQUdFX0lEO1xuICBTVE9SQUdFX0lEID0gJ3Rhc2tzJztcbiAgREVNT19UQVNLUyA9ICdbIHtcInRpdGxlXCI6IFwiRmluaXNoIGhvbWV3b3JrXCIsIFwiY29tcGxldGVkXCI6IHRydWV9LCB7XCJ0aXRsZVwiOiBcIk1ha2UgYSBjYWxsXCIsIFwiY29tcGxldGVkXCI6IHRydWV9LCB7XCJ0aXRsZVwiOiBcIkJ1aWxkIGEgc25vd21hbiFcIiwgXCJjb21wbGV0ZWRcIjogZmFsc2V9LCB7XCJ0aXRsZVwiOiBcIlRhbmdvISBUYW5nbyEgVGFuZ28hXCIsIFwiY29tcGxldGVkXCI6IGZhbHNlfSwge1widGl0bGVcIjogXCJQbGF5IGdhbWVzIHdpdGggZnJpZW5kc1wiLCBcImNvbXBsZXRlZFwiOiBmYWxzZX0sIHtcInRpdGxlXCI6IFwiU2hvcHBpbmdcIiwgXCJjb21wbGV0ZWRcIjogZmFsc2V9LCB7XCJ0aXRsZVwiOiBcIk9uZSBtb3JlIGRhbmNlXCIsIFwiY29tcGxldGVkXCI6IGZhbHNlfSwge1widGl0bGVcIjogXCJUcnkgR29vZ2xlIGdsYXNzXCIsIFwiY29tcGxldGVkXCI6IGZhbHNlfSBdJztcbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9JRCkgfHwgREVNT19UQVNLUyk7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uKHRhc2tzKSB7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9JRCwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICB9XG4gIH07XG59KS5kaXJlY3RpdmUoJ3Rhc2tGb2N1cycsIFtcbiAgJyR0aW1lb3V0JywgZnVuY3Rpb24oJHRpbWVvdXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlLiR3YXRjaChhdHRycy50YXNrRm9jdXMsIGZ1bmN0aW9uKG5ld1ZhbCkge1xuICAgICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICAgIHJldHVybiAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZVswXS5mb2N1cygpO1xuICAgICAgICAgICAgfSwgMCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcigndGFza0N0cmwnLCBbXG4gICckc2NvcGUnLCAndGFza1N0b3JhZ2UnLCAnZmlsdGVyRmlsdGVyJywgJyRyb290U2NvcGUnLCAnbG9nZ2VyJywgZnVuY3Rpb24oJHNjb3BlLCB0YXNrU3RvcmFnZSwgZmlsdGVyRmlsdGVyLCAkcm9vdFNjb3BlLCBsb2dnZXIpIHtcbiAgICB2YXIgdGFza3M7XG4gICAgdGFza3MgPSAkc2NvcGUudGFza3MgPSB0YXNrU3RvcmFnZS5nZXQoKTtcbiAgICAkc2NvcGUubmV3VGFzayA9ICcnO1xuICAgICRzY29wZS5yZW1haW5pbmdDb3VudCA9IGZpbHRlckZpbHRlcih0YXNrcywge1xuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0pLmxlbmd0aDtcbiAgICAkc2NvcGUuZWRpdGVkVGFzayA9IG51bGw7XG4gICAgJHNjb3BlLnN0YXR1c0ZpbHRlciA9IHtcbiAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICB9O1xuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcbiAgICAgIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICAgICAgcmV0dXJuICRzY29wZS5zdGF0dXNGaWx0ZXIgPSAnJztcbiAgICAgICAgY2FzZSAnYWN0aXZlJzpcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnN0YXR1c0ZpbHRlciA9IHtcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgICAgIHJldHVybiAkc2NvcGUuc3RhdHVzRmlsdGVyID0ge1xuICAgICAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5hZGQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuZXdUYXNrO1xuICAgICAgbmV3VGFzayA9ICRzY29wZS5uZXdUYXNrLnRyaW0oKTtcbiAgICAgIGlmIChuZXdUYXNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgdGl0bGU6IG5ld1Rhc2ssXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgbG9nZ2VyLmxvZ1N1Y2Nlc3MoJ05ldyB0YXNrOiBcIicgKyBuZXdUYXNrICsgJ1wiIGFkZGVkJyk7XG4gICAgICB0YXNrU3RvcmFnZS5wdXQodGFza3MpO1xuICAgICAgJHNjb3BlLm5ld1Rhc2sgPSAnJztcbiAgICAgIHJldHVybiAkc2NvcGUucmVtYWluaW5nQ291bnQrKztcbiAgICB9O1xuICAgICRzY29wZS5lZGl0ID0gZnVuY3Rpb24odGFzaykge1xuICAgICAgcmV0dXJuICRzY29wZS5lZGl0ZWRUYXNrID0gdGFzaztcbiAgICB9O1xuICAgICRzY29wZS5kb25lRWRpdGluZyA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICRzY29wZS5lZGl0ZWRUYXNrID0gbnVsbDtcbiAgICAgIHRhc2sudGl0bGUgPSB0YXNrLnRpdGxlLnRyaW0oKTtcbiAgICAgIGlmICghdGFzay50aXRsZSkge1xuICAgICAgICAkc2NvcGUucmVtb3ZlKHRhc2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLmxvZygnVGFzayB1cGRhdGVkJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFza1N0b3JhZ2UucHV0KHRhc2tzKTtcbiAgICB9O1xuICAgICRzY29wZS5yZW1vdmUgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICB2YXIgaW5kZXg7XG4gICAgICAkc2NvcGUucmVtYWluaW5nQ291bnQgLT0gdGFzay5jb21wbGV0ZWQgPyAwIDogMTtcbiAgICAgIGluZGV4ID0gJHNjb3BlLnRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAkc2NvcGUudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRhc2tTdG9yYWdlLnB1dCh0YXNrcyk7XG4gICAgICByZXR1cm4gbG9nZ2VyLmxvZ0Vycm9yKCdUYXNrIHJlbW92ZWQnKTtcbiAgICB9O1xuICAgICRzY29wZS5jb21wbGV0ZWQgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAkc2NvcGUucmVtYWluaW5nQ291bnQgKz0gdGFzay5jb21wbGV0ZWQgPyAtMSA6IDE7XG4gICAgICB0YXNrU3RvcmFnZS5wdXQodGFza3MpO1xuICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgIGlmICgkc2NvcGUucmVtYWluaW5nQ291bnQgPiAwKSB7XG4gICAgICAgICAgaWYgKCRzY29wZS5yZW1haW5pbmdDb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2coJ0FsbW9zdCB0aGVyZSEgT25seSAnICsgJHNjb3BlLnJlbWFpbmluZ0NvdW50ICsgJyB0YXNrIGxlZnQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2coJ0dvb2Qgam9iISBPbmx5ICcgKyAkc2NvcGUucmVtYWluaW5nQ291bnQgKyAnIHRhc2tzIGxlZnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2dTdWNjZXNzKCdDb25ncmF0cyEgQWxsIGRvbmUgOiknKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmNsZWFyQ29tcGxldGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUudGFza3MgPSB0YXNrcyA9IHRhc2tzLmZpbHRlcihmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuICF2YWwuY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGFza1N0b3JhZ2UucHV0KHRhc2tzKTtcbiAgICB9O1xuICAgICRzY29wZS5tYXJrQWxsID0gZnVuY3Rpb24oY29tcGxldGVkKSB7XG4gICAgICB0YXNrcy5mb3JFYWNoKGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIHRhc2suY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICAkc2NvcGUucmVtYWluaW5nQ291bnQgPSBjb21wbGV0ZWQgPyAwIDogdGFza3MubGVuZ3RoO1xuICAgICAgdGFza1N0b3JhZ2UucHV0KHRhc2tzKTtcbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2dTdWNjZXNzKCdDb25ncmF0cyEgQWxsIGRvbmUgOiknKTtcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS4kd2F0Y2goJ3JlbWFpbmluZ0NvdW50ID09IDAnLCBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuYWxsQ2hlY2tlZCA9IHZhbDtcbiAgICB9KTtcbiAgICByZXR1cm4gJHNjb3BlLiR3YXRjaCgncmVtYWluaW5nQ291bnQnLCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgcmV0dXJuICRyb290U2NvcGUuJGJyb2FkY2FzdCgndGFza1JlbWFpbmluZzpjaGFuZ2VkJywgbmV3VmFsKTtcbiAgICB9KTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLnVpLmN0cmxzJywgW10pLmNvbnRyb2xsZXIoJ05vdGlmeUN0cmwnLCBbXG4gICckc2NvcGUnLCAnbG9nZ2VyJywgZnVuY3Rpb24oJHNjb3BlLCBsb2dnZXIpIHtcbiAgICByZXR1cm4gJHNjb3BlLm5vdGlmeSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZyhcIkhlYWRzIHVwISBUaGlzIGFsZXJ0IG5lZWRzIHlvdXIgYXR0ZW50aW9uLCBidXQgaXQncyBub3Qgc3VwZXIgaW1wb3J0YW50LlwiKTtcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2dTdWNjZXNzKFwiV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS5cIik7XG4gICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgIHJldHVybiBsb2dnZXIubG9nV2FybmluZyhcIldhcm5pbmchIEJlc3QgY2hlY2sgeW8gc2VsZiwgeW91J3JlIG5vdCBsb29raW5nIHRvbyBnb29kLlwiKTtcbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgIHJldHVybiBsb2dnZXIubG9nRXJyb3IoXCJPaCBzbmFwISBDaGFuZ2UgYSBmZXcgdGhpbmdzIHVwIGFuZCB0cnkgc3VibWl0dGluZyBhZ2Fpbi5cIik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignQWxlcnREZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5hbGVydHMgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgbXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgbXNnOiAnSGVhZHMgdXAhIFRoaXMgYWxlcnQgbmVlZHMgeW91ciBhdHRlbnRpb24sIGJ1dCBpdCBpcyBub3Qgc3VwZXIgaW1wb3J0YW50LidcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICBtc2c6IFwiV2FybmluZyEgQmVzdCBjaGVjayB5byBzZWxmLCB5b3UncmUgbm90IGxvb2tpbmcgdG9vIGdvb2QuXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgIG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5hZGRBbGVydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG51bSwgdHlwZTtcbiAgICAgIG51bSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgICB0eXBlID0gdm9pZCAwO1xuICAgICAgc3dpdGNoIChudW0pIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHR5cGUgPSAnaW5mbyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0eXBlID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdHlwZSA9ICdpbmZvJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHR5cGUgPSAnd2FybmluZyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICB9XG4gICAgICByZXR1cm4gJHNjb3BlLmFsZXJ0cy5wdXNoKHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgbXNnOiBcIkFub3RoZXIgYWxlcnQhXCJcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5jbG9zZUFsZXJ0ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuYWxlcnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignUHJvZ3Jlc3NEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5tYXggPSAyMDA7XG4gICAgJHNjb3BlLnJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHR5cGUsIHZhbHVlO1xuICAgICAgdmFsdWUgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwKSArIDEwKTtcbiAgICAgIHR5cGUgPSB2b2lkIDA7XG4gICAgICBpZiAodmFsdWUgPCAyNSkge1xuICAgICAgICB0eXBlID0gXCJzdWNjZXNzXCI7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgNTApIHtcbiAgICAgICAgdHlwZSA9IFwiaW5mb1wiO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDc1KSB7XG4gICAgICAgIHR5cGUgPSBcIndhcm5pbmdcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSBcImRhbmdlclwiO1xuICAgICAgfVxuICAgICAgJHNjb3BlLnNob3dXYXJuaW5nID0gdHlwZSA9PT0gXCJkYW5nZXJcIiB8fCB0eXBlID09PSBcIndhcm5pbmdcIjtcbiAgICAgICRzY29wZS5keW5hbWljID0gdmFsdWU7XG4gICAgICAkc2NvcGUudHlwZSA9IHR5cGU7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLnJhbmRvbSgpO1xuICB9XG5dKS5jb250cm9sbGVyKCdBY2NvcmRpb25EZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5vbmVBdEFUaW1lID0gdHJ1ZTtcbiAgICAkc2NvcGUuZ3JvdXBzID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJEeW5hbWljIEdyb3VwIEhlYWRlciAtIDFcIixcbiAgICAgICAgY29udGVudDogXCJEeW5hbWljIEdyb3VwIEJvZHkgLSAxXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6IFwiRHluYW1pYyBHcm91cCBIZWFkZXIgLSAyXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRHluYW1pYyBHcm91cCBCb2R5IC0gMlwiXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiBcIkR5bmFtaWMgR3JvdXAgSGVhZGVyIC0gM1wiLFxuICAgICAgICBjb250ZW50OiBcIkR5bmFtaWMgR3JvdXAgQm9keSAtIDNcIlxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLml0ZW1zID0gW1wiSXRlbSAxXCIsIFwiSXRlbSAyXCIsIFwiSXRlbSAzXCJdO1xuICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICBpc0ZpcnN0T3BlbjogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuMTogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuMjogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuMzogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuNDogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuNTogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuNjogdHJ1ZVxuICAgIH07XG4gICAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuZXdJdGVtTm87XG4gICAgICBuZXdJdGVtTm8gPSAkc2NvcGUuaXRlbXMubGVuZ3RoICsgMTtcbiAgICAgICRzY29wZS5pdGVtcy5wdXNoKFwiSXRlbSBcIiArIG5ld0l0ZW1Obyk7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignQ29sbGFwc2VEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIHJldHVybiAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgfVxuXSkuY29udHJvbGxlcignTW9kYWxEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsICckbW9kYWwnLCAnJGxvZycsIGZ1bmN0aW9uKCRzY29wZSwgJG1vZGFsLCAkbG9nKSB7XG4gICAgJHNjb3BlLml0ZW1zID0gW1wiaXRlbTFcIiwgXCJpdGVtMlwiLCBcIml0ZW0zXCJdO1xuICAgICRzY29wZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZTtcbiAgICAgIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiBcIm15TW9kYWxDb250ZW50Lmh0bWxcIixcbiAgICAgICAgY29udHJvbGxlcjogJ01vZGFsSW5zdGFuY2VDdHJsJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUuaXRlbXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oKGZ1bmN0aW9uKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAkc2NvcGUuc2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW07XG4gICAgICB9KSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICRsb2cuaW5mbyhcIk1vZGFsIGRpc21pc3NlZCBhdDogXCIgKyBuZXcgRGF0ZSgpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ01vZGFsSW5zdGFuY2VDdHJsJywgW1xuICAnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJywgJ2l0ZW1zJywgZnVuY3Rpb24oJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSwgaXRlbXMpIHtcbiAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcbiAgICAkc2NvcGUuc2VsZWN0ZWQgPSB7XG4gICAgICBpdGVtOiAkc2NvcGUuaXRlbXNbMF1cbiAgICB9O1xuICAgICRzY29wZS5vayA9IGZ1bmN0aW9uKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoJHNjb3BlLnNlbGVjdGVkLml0ZW0pO1xuICAgIH07XG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcyhcImNhbmNlbFwiKTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdQYWdpbmF0aW9uRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUudG90YWxJdGVtcyA9IDY0O1xuICAgICRzY29wZS5jdXJyZW50UGFnZSA9IDQ7XG4gICAgJHNjb3BlLm1heFNpemUgPSA1O1xuICAgICRzY29wZS5zZXRQYWdlID0gZnVuY3Rpb24ocGFnZU5vKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRQYWdlID0gcGFnZU5vO1xuICAgIH07XG4gICAgJHNjb3BlLmJpZ1RvdGFsSXRlbXMgPSAxNzU7XG4gICAgcmV0dXJuICRzY29wZS5iaWdDdXJyZW50UGFnZSA9IDE7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ1RhYnNEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS50YWJzID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJEeW5hbWljIFRpdGxlIDFcIixcbiAgICAgICAgY29udGVudDogXCJEeW5hbWljIGNvbnRlbnQgMS4gIENvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5paGlsLCBxdWlkZW0sIG9mZmljaWlzLCBldCBleCBsYXVkYW50aXVtIHNlZCBjdXBpZGl0YXRlIHZvbHVwdGF0dW0gbGliZXJvIG5vYmlzIHNpdCBpbGx1bSB2b2x1cHRhdGVzIGJlYXRhZSBhYi4gQWQsIHJlcGVsbGVuZHVzIG5vbiBzZXF1aSBldCBhdC5cIlxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogXCJEaXNhYmxlZFwiLFxuICAgICAgICBjb250ZW50OiBcIkR5bmFtaWMgY29udGVudCAyLiAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5paGlsLCBxdWlkZW0sIG9mZmljaWlzLCBldCBleCBsYXVkYW50aXVtIHNlZCBjdXBpZGl0YXRlIHZvbHVwdGF0dW0gbGliZXJvIG5vYmlzIHNpdCBpbGx1bSB2b2x1cHRhdGVzIGJlYXRhZSBhYi4gQWQsIHJlcGVsbGVuZHVzIG5vbiBzZXF1aSBldCBhdC5cIixcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH1cbiAgICBdO1xuICAgIHJldHVybiAkc2NvcGUubmF2VHlwZSA9IFwicGlsbHNcIjtcbiAgfVxuXSkuY29udHJvbGxlcignVHJlZURlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLmxpc3QgPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJJdGVtIDFcIixcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICB0aXRsZTogXCJJdGVtIDJcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMjEsXG4gICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMVwiLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyMTEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjEuMVwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIxMixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMS4yXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMjIsXG4gICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMlwiLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyMjEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjIuMVwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIyMixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMi4yXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gM1wiLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gNFwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0MSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gNC4xXCIsXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gNVwiLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gNlwiLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gN1wiLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5zZWxlY3RlZEl0ZW0gPSB7fTtcbiAgICAkc2NvcGUub3B0aW9ucyA9IHt9O1xuICAgICRzY29wZS5yZW1vdmUgPSBmdW5jdGlvbihzY29wZSkge1xuICAgICAgc2NvcGUucmVtb3ZlKCk7XG4gICAgfTtcbiAgICAkc2NvcGUudG9nZ2xlID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgIHNjb3BlLnRvZ2dsZSgpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5uZXdTdWJJdGVtID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgIHZhciBub2RlRGF0YTtcbiAgICAgIG5vZGVEYXRhID0gc2NvcGUuJG1vZGVsVmFsdWU7XG4gICAgICBub2RlRGF0YS5pdGVtcy5wdXNoKHtcbiAgICAgICAgaWQ6IG5vZGVEYXRhLmlkICogMTAgKyBub2RlRGF0YS5pdGVtcy5sZW5ndGgsXG4gICAgICAgIHRpdGxlOiBub2RlRGF0YS50aXRsZSArIFwiLlwiICsgKG5vZGVEYXRhLml0ZW1zLmxlbmd0aCArIDEpLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ01hcERlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgJyRodHRwJywgJyRpbnRlcnZhbCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCkge1xuICAgIHZhciBpLCBtYXJrZXJzO1xuICAgIG1hcmtlcnMgPSBbXTtcbiAgICBpID0gMDtcbiAgICB3aGlsZSAoaSA8IDgpIHtcbiAgICAgIG1hcmtlcnNbaV0gPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgdGl0bGU6IFwiTWFya2VyOiBcIiArIGlcbiAgICAgIH0pO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICAkc2NvcGUuR2VuZXJhdGVNYXBNYXJrZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZCwgbGF0LCBsbmcsIGxvYywgbnVtTWFya2VycztcbiAgICAgIGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgJHNjb3BlLmRhdGUgPSBkLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICBudW1NYXJrZXJzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyA0O1xuICAgICAgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IG51bU1hcmtlcnMpIHtcbiAgICAgICAgbGF0ID0gNDMuNjYwMDAwMCArIChNYXRoLnJhbmRvbSgpIC8gMTAwKTtcbiAgICAgICAgbG5nID0gLTc5LjQxMDMwMDAgKyAoTWF0aC5yYW5kb20oKSAvIDEwMCk7XG4gICAgICAgIGxvYyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpO1xuICAgICAgICBtYXJrZXJzW2ldLnNldFBvc2l0aW9uKGxvYyk7XG4gICAgICAgIG1hcmtlcnNbaV0uc2V0TWFwKCRzY29wZS5tYXApO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfTtcbiAgICAkaW50ZXJ2YWwoJHNjb3BlLkdlbmVyYXRlTWFwTWFya2VycywgMjAwMCk7XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC51aS5kaXJlY3RpdmVzJywgW10pLmRpcmVjdGl2ZSgndWlUaW1lJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUpIHtcbiAgICAgICAgdmFyIGNoZWNrVGltZSwgc3RhcnRUaW1lO1xuICAgICAgICBzdGFydFRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaCwgbSwgcywgdCwgdGltZSwgdG9kYXk7XG4gICAgICAgICAgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGggPSB0b2RheS5nZXRIb3VycygpO1xuICAgICAgICAgIG0gPSB0b2RheS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgcyA9IHRvZGF5LmdldFNlY29uZHMoKTtcbiAgICAgICAgICBtID0gY2hlY2tUaW1lKG0pO1xuICAgICAgICAgIHMgPSBjaGVja1RpbWUocyk7XG4gICAgICAgICAgdGltZSA9IGggKyBcIjpcIiArIG0gKyBcIjpcIiArIHM7XG4gICAgICAgICAgZWxlLmh0bWwodGltZSk7XG4gICAgICAgICAgcmV0dXJuIHQgPSBzZXRUaW1lb3V0KHN0YXJ0VGltZSwgNTAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgY2hlY2tUaW1lID0gZnVuY3Rpb24oaSkge1xuICAgICAgICAgIGlmIChpIDwgMTApIHtcbiAgICAgICAgICAgIGkgPSBcIjBcIiArIGk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3RhcnRUaW1lKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCd1aVdlYXRoZXInLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyIGNvbG9yLCBpY29uLCBza3ljb25zO1xuICAgICAgICBjb2xvciA9IGF0dHJzLmNvbG9yO1xuICAgICAgICBpY29uID0gU2t5Y29uc1thdHRycy5pY29uXTtcbiAgICAgICAgc2t5Y29ucyA9IG5ldyBTa3ljb25zKHtcbiAgICAgICAgICBcImNvbG9yXCI6IGNvbG9yLFxuICAgICAgICAgIFwicmVzaXplQ2xlYXJcIjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgc2t5Y29ucy5hZGQoZWxlWzBdLCBpY29uKTtcbiAgICAgICAgcmV0dXJuIHNreWNvbnMucGxheSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC51aS5zZXJ2aWNlcycsIFtdKS5mYWN0b3J5KCdsb2dnZXInLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBsb2dJdDtcbiAgICB0b2FzdHIub3B0aW9ucyA9IHtcbiAgICAgIFwiY2xvc2VCdXR0b25cIjogdHJ1ZSxcbiAgICAgIFwicG9zaXRpb25DbGFzc1wiOiBcInRvYXN0LWJvdHRvbS1yaWdodFwiLFxuICAgICAgXCJ0aW1lT3V0XCI6IFwiMzAwMFwiXG4gICAgfTtcbiAgICBsb2dJdCA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHR5cGUpIHtcbiAgICAgIHJldHVybiB0b2FzdHJbdHlwZV0obWVzc2FnZSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIGxvZ0l0KG1lc3NhZ2UsICdpbmZvJyk7XG4gICAgICB9LFxuICAgICAgbG9nV2FybmluZzogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBsb2dJdChtZXNzYWdlLCAnd2FybmluZycpO1xuICAgICAgfSxcbiAgICAgIGxvZ1N1Y2Nlc3M6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgbG9nSXQobWVzc2FnZSwgJ3N1Y2Nlc3MnKTtcbiAgICAgIH0sXG4gICAgICBsb2dFcnJvcjogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBsb2dJdChtZXNzYWdlLCAnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAuZGlyZWN0aXZlcycsIFtdKS5kaXJlY3RpdmUoJ2ltZ0hvbGRlcicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICByZXR1cm4gSG9sZGVyLnJ1bih7XG4gICAgICAgICAgaW1hZ2VzOiBlbGVbMF1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdjdXN0b21CYWNrZ3JvdW5kJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgIGNvbnRyb2xsZXI6IFtcbiAgICAgICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGxvY2F0aW9uKSB7XG4gICAgICAgIHZhciBhZGRCZywgcGF0aDtcbiAgICAgICAgcGF0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAkbG9jYXRpb24ucGF0aCgpO1xuICAgICAgICB9O1xuICAgICAgICBhZGRCZyA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcygnYm9keS1ob21lIGJvZHktc3BlY2lhbCBib2R5LXRhc2tzIGJvZHktbG9jaycpO1xuICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgIHJldHVybiAkZWxlbWVudC5hZGRDbGFzcygnYm9keS1ob21lJyk7XG4gICAgICAgICAgICBjYXNlICcvNDA0JzpcbiAgICAgICAgICAgIGNhc2UgJy9wYWdlcy81MDAnOlxuICAgICAgICAgICAgY2FzZSAnL3BhZ2VzL3NpZ25pbic6XG4gICAgICAgICAgICBjYXNlICcvcGFnZXMvc2lnbnVwJzpcbiAgICAgICAgICAgIGNhc2UgJy9wYWdlcy9mb3Jnb3QnOlxuICAgICAgICAgICAgICByZXR1cm4gJGVsZW1lbnQuYWRkQ2xhc3MoJ2JvZHktc3BlY2lhbCcpO1xuICAgICAgICAgICAgY2FzZSAnL3BhZ2VzL2xvY2stc2NyZWVuJzpcbiAgICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50LmFkZENsYXNzKCdib2R5LXNwZWNpYWwgYm9keS1sb2NrJyk7XG4gICAgICAgICAgICBjYXNlICcvdGFza3MnOlxuICAgICAgICAgICAgICByZXR1cm4gJGVsZW1lbnQuYWRkQ2xhc3MoJ2JvZHktdGFza3MnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFkZEJnKCRsb2NhdGlvbi5wYXRoKCkpO1xuICAgICAgICByZXR1cm4gJHNjb3BlLiR3YXRjaChwYXRoLCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICAgIGlmIChuZXdWYWwgPT09IG9sZFZhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWRkQmcoJGxvY2F0aW9uLnBhdGgoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn0pLmRpcmVjdGl2ZSgndWlDb2xvclN3aXRjaCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICByZXR1cm4gZWxlLmZpbmQoJy5jb2xvci1vcHRpb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciAkdGhpcywgaHJlZlVybCwgc3R5bGU7XG4gICAgICAgICAgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIGhyZWZVcmwgPSB2b2lkIDA7XG4gICAgICAgICAgc3R5bGUgPSAkdGhpcy5kYXRhKCdzdHlsZScpO1xuICAgICAgICAgIGlmIChzdHlsZSA9PT0gJ2xvdWxvdScpIHtcbiAgICAgICAgICAgIGhyZWZVcmwgPSAnc3R5bGVzL21haW4uY3NzJztcbiAgICAgICAgICAgICQoJ2xpbmtbaHJlZl49XCJzdHlsZXMvbWFpblwiXScpLmF0dHIoJ2hyZWYnLCBocmVmVXJsKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICBzdHlsZSA9ICctJyArIHN0eWxlO1xuICAgICAgICAgICAgaHJlZlVybCA9ICdzdHlsZXMvbWFpbicgKyBzdHlsZSArICcuY3NzJztcbiAgICAgICAgICAgICQoJ2xpbmtbaHJlZl49XCJzdHlsZXMvbWFpblwiXScpLmF0dHIoJ2hyZWYnLCBocmVmVXJsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCd0b2dnbGVNaW5OYXYnLCBbXG4gICckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHJvb3RTY29wZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyICRjb250ZW50LCAkbmF2LCAkd2luZG93LCBUaW1lciwgYXBwLCB1cGRhdGVDbGFzcztcbiAgICAgICAgYXBwID0gJCgnI2FwcCcpO1xuICAgICAgICAkd2luZG93ID0gJCh3aW5kb3cpO1xuICAgICAgICAkbmF2ID0gJCgnI25hdi1jb250YWluZXInKTtcbiAgICAgICAgJGNvbnRlbnQgPSAkKCcjY29udGVudCcpO1xuICAgICAgICBlbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmIChhcHAuaGFzQ2xhc3MoJ25hdi1taW4nKSkge1xuICAgICAgICAgICAgYXBwLnJlbW92ZUNsYXNzKCduYXYtbWluJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcC5hZGRDbGFzcygnbmF2LW1pbicpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdtaW5OYXY6ZW5hYmxlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgVGltZXIgPSB2b2lkIDA7XG4gICAgICAgIHVwZGF0ZUNsYXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHdpZHRoO1xuICAgICAgICAgIHdpZHRoID0gJHdpbmRvdy53aWR0aCgpO1xuICAgICAgICAgIGlmICh3aWR0aCA8IDc2OCkge1xuICAgICAgICAgICAgcmV0dXJuIGFwcC5yZW1vdmVDbGFzcygnbmF2LW1pbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICR3aW5kb3cucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0O1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgICByZXR1cm4gdCA9IHNldFRpbWVvdXQodXBkYXRlQ2xhc3MsIDMwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnY29sbGFwc2VOYXYnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyICRhLCAkYVJlc3QsICRsaXN0cywgJGxpc3RzUmVzdCwgYXBwO1xuICAgICAgICAkbGlzdHMgPSBlbGUuZmluZCgndWwnKS5wYXJlbnQoJ2xpJyk7XG4gICAgICAgICRsaXN0cy5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtcmlnaHQgaWNvbi1oYXMtdWxcIj48L2k+Jyk7XG4gICAgICAgICRhID0gJGxpc3RzLmNoaWxkcmVuKCdhJyk7XG4gICAgICAgICRsaXN0c1Jlc3QgPSBlbGUuY2hpbGRyZW4oJ2xpJykubm90KCRsaXN0cyk7XG4gICAgICAgICRhUmVzdCA9ICRsaXN0c1Jlc3QuY2hpbGRyZW4oJ2EnKTtcbiAgICAgICAgYXBwID0gJCgnI2FwcCcpO1xuICAgICAgICAkYS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciAkcGFyZW50LCAkdGhpcztcbiAgICAgICAgICBpZiAoYXBwLmhhc0NsYXNzKCduYXYtbWluJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICRwYXJlbnQgPSAkdGhpcy5wYXJlbnQoJ2xpJyk7XG4gICAgICAgICAgJGxpc3RzLm5vdCgkcGFyZW50KS5yZW1vdmVDbGFzcygnb3BlbicpLmZpbmQoJ3VsJykuc2xpZGVVcCgpO1xuICAgICAgICAgICRwYXJlbnQudG9nZ2xlQ2xhc3MoJ29wZW4nKS5maW5kKCd1bCcpLnN0b3AoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJGFSZXN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuICRsaXN0cy5yZW1vdmVDbGFzcygnb3BlbicpLmZpbmQoJ3VsJykuc2xpZGVVcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNjb3BlLiRvbignbWluTmF2OmVuYWJsZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHJldHVybiAkbGlzdHMucmVtb3ZlQ2xhc3MoJ29wZW4nKS5maW5kKCd1bCcpLnNsaWRlVXAoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdoaWdobGlnaHRBY3RpdmUnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICBjb250cm9sbGVyOiBbXG4gICAgICAgICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJGxvY2F0aW9uKSB7XG4gICAgICAgICAgdmFyIGhpZ2hsaWdodEFjdGl2ZSwgbGlua3MsIHBhdGg7XG4gICAgICAgICAgbGlua3MgPSAkZWxlbWVudC5maW5kKCdhJyk7XG4gICAgICAgICAgcGF0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRsb2NhdGlvbi5wYXRoKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBoaWdobGlnaHRBY3RpdmUgPSBmdW5jdGlvbihsaW5rcywgcGF0aCkge1xuICAgICAgICAgICAgcGF0aCA9ICcjJyArIHBhdGg7XG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhci5mb3JFYWNoKGxpbmtzLCBmdW5jdGlvbihsaW5rKSB7XG4gICAgICAgICAgICAgIHZhciAkbGksICRsaW5rLCBocmVmO1xuICAgICAgICAgICAgICAkbGluayA9IGFuZ3VsYXIuZWxlbWVudChsaW5rKTtcbiAgICAgICAgICAgICAgJGxpID0gJGxpbmsucGFyZW50KCdsaScpO1xuICAgICAgICAgICAgICBocmVmID0gJGxpbmsuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICBpZiAoJGxpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICRsaS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihocmVmKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkbGkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGhpZ2hsaWdodEFjdGl2ZShsaW5rcywgJGxvY2F0aW9uLnBhdGgoKSk7XG4gICAgICAgICAgcmV0dXJuICRzY29wZS4kd2F0Y2gocGF0aCwgZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IG9sZFZhbCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGlnaGxpZ2h0QWN0aXZlKGxpbmtzLCAkbG9jYXRpb24ucGF0aCgpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndG9nZ2xlT2ZmQ2FudmFzJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHJldHVybiBlbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICQoJyNhcHAnKS50b2dnbGVDbGFzcygnb24tY2FudmFzJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnc2xpbVNjcm9sbCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICByZXR1cm4gZWxlLnNsaW1TY3JvbGwoe1xuICAgICAgICAgIGhlaWdodDogYXR0cnMuc2Nyb2xsSGVpZ2h0IHx8ICcxMDAlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ2dvQmFjaycsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICAgIGNvbnRyb2xsZXI6IFtcbiAgICAgICAgJyRzY29wZScsICckZWxlbWVudCcsICckd2luZG93JywgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJHdpbmRvdykge1xuICAgICAgICAgIHJldHVybiAkZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLmxvY2FsaXphdGlvbicsIFtdKS5mYWN0b3J5KCdsb2NhbGl6ZScsIFtcbiAgJyRodHRwJywgJyRyb290U2NvcGUnLCAnJHdpbmRvdycsIGZ1bmN0aW9uKCRodHRwLCAkcm9vdFNjb3BlLCAkd2luZG93KSB7XG4gICAgdmFyIGxvY2FsaXplO1xuICAgIGxvY2FsaXplID0ge1xuICAgICAgbGFuZ3VhZ2U6ICcnLFxuICAgICAgdXJsOiB2b2lkIDAsXG4gICAgICByZXNvdXJjZUZpbGVMb2FkZWQ6IGZhbHNlLFxuICAgICAgc3VjY2Vzc0NhbGxiYWNrOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGxvY2FsaXplLmRpY3Rpb25hcnkgPSBkYXRhO1xuICAgICAgICBsb2NhbGl6ZS5yZXNvdXJjZUZpbGVMb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdsb2NhbGl6ZVJlc291cmNlc1VwZGF0ZWQnKTtcbiAgICAgIH0sXG4gICAgICBzZXRMYW5ndWFnZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgbG9jYWxpemUubGFuZ3VhZ2UgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiLVwiKVswXTtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmluaXRMb2NhbGl6ZWRSZXNvdXJjZXMoKTtcbiAgICAgIH0sXG4gICAgICBzZXRVcmw6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGxvY2FsaXplLnVybCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbG9jYWxpemUuaW5pdExvY2FsaXplZFJlc291cmNlcygpO1xuICAgICAgfSxcbiAgICAgIGJ1aWxkVXJsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFsb2NhbGl6ZS5sYW5ndWFnZSkge1xuICAgICAgICAgIGxvY2FsaXplLmxhbmd1YWdlID0gKCR3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZSB8fCAkd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBsb2NhbGl6ZS5sYW5ndWFnZSA9IGxvY2FsaXplLmxhbmd1YWdlLnNwbGl0KFwiLVwiKVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2kxOG4vcmVzb3VyY2VzLWxvY2FsZV8nICsgbG9jYWxpemUubGFuZ3VhZ2UgKyAnLmpzJztcbiAgICAgIH0sXG4gICAgICBpbml0TG9jYWxpemVkUmVzb3VyY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVybDtcbiAgICAgICAgdXJsID0gbG9jYWxpemUudXJsIHx8IGxvY2FsaXplLmJ1aWxkVXJsKCk7XG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgIGNhY2hlOiBmYWxzZVxuICAgICAgICB9KS5zdWNjZXNzKGxvY2FsaXplLnN1Y2Nlc3NDYWxsYmFjaykuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbG9jYWxpemVSZXNvdXJjZXNVcGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldExvY2FsaXplZFN0cmluZzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCwgdmFsdWVMb3dlckNhc2U7XG4gICAgICAgIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGxvY2FsaXplLmRpY3Rpb25hcnkgJiYgdmFsdWUpIHtcbiAgICAgICAgICB2YWx1ZUxvd2VyQ2FzZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKGxvY2FsaXplLmRpY3Rpb25hcnlbdmFsdWVMb3dlckNhc2VdID09PSAnJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxvY2FsaXplLmRpY3Rpb25hcnlbdmFsdWVMb3dlckNhc2VdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGxvY2FsaXplO1xuICB9XG5dKS5kaXJlY3RpdmUoJ2kxOG4nLCBbXG4gICdsb2NhbGl6ZScsIGZ1bmN0aW9uKGxvY2FsaXplKSB7XG4gICAgdmFyIGkxOG5EaXJlY3RpdmU7XG4gICAgaTE4bkRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiBcIkVBXCIsXG4gICAgICB1cGRhdGVUZXh0OiBmdW5jdGlvbihlbGUsIGlucHV0LCBwbGFjZWhvbGRlcikge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICByZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIGlmIChpbnB1dCA9PT0gJ2kxOG4tcGxhY2Vob2xkZXInKSB7XG4gICAgICAgICAgcmVzdWx0ID0gbG9jYWxpemUuZ2V0TG9jYWxpemVkU3RyaW5nKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICByZXR1cm4gZWxlLmF0dHIoJ3BsYWNlaG9sZGVyJywgcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5sZW5ndGggPj0gMSkge1xuICAgICAgICAgIHJlc3VsdCA9IGxvY2FsaXplLmdldExvY2FsaXplZFN0cmluZyhpbnB1dCk7XG4gICAgICAgICAgcmV0dXJuIGVsZS50ZXh0KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICBzY29wZS4kb24oJ2xvY2FsaXplUmVzb3VyY2VzVXBkYXRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpMThuRGlyZWN0aXZlLnVwZGF0ZVRleHQoZWxlLCBhdHRycy5pMThuLCBhdHRycy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXR0cnMuJG9ic2VydmUoJ2kxOG4nLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBpMThuRGlyZWN0aXZlLnVwZGF0ZVRleHQoZWxlLCB2YWx1ZSwgYXR0cnMucGxhY2Vob2xkZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBpMThuRGlyZWN0aXZlO1xuICB9XG5dKS5jb250cm9sbGVyKCdMYW5nQ3RybCcsIFtcbiAgJyRzY29wZScsICdsb2NhbGl6ZScsIGZ1bmN0aW9uKCRzY29wZSwgbG9jYWxpemUpIHtcbiAgICAkc2NvcGUubGFuZyA9ICdFbmdsaXNoJztcbiAgICAkc2NvcGUuc2V0TGFuZyA9IGZ1bmN0aW9uKGxhbmcpIHtcbiAgICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgICBjYXNlICdFbmdsaXNoJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnRU4tVVMnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRXNwYcOxb2wnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdFUy1FUycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICfml6XmnKzoqp4nOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdKQS1KUCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICfkuK3mlocnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdaSC1UVycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEZXV0c2NoJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnREUtREUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZnJhbsOnYWlzJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnRlItRlInKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSXRhbGlhbm8nOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdJVC1JVCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQb3J0dWdhbCc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ1BULUJSJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ9Cg0YPRgdGB0LrQuNC5INGP0LfRi9C6JzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnUlUtUlUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAn7ZWc6rWt7Ja0JzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnS08tS1InKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkc2NvcGUubGFuZyA9IGxhbmc7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLmdldEZsYWcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsYW5nO1xuICAgICAgbGFuZyA9ICRzY29wZS5sYW5nO1xuICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgIGNhc2UgJ0VuZ2xpc2gnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtYW1lcmljYW4nO1xuICAgICAgICBjYXNlICdFc3Bhw7FvbCc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1zcGFpbic7XG4gICAgICAgIGNhc2UgJ+aXpeacrOiqnic6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1qYXBhbic7XG4gICAgICAgIGNhc2UgJ+S4reaWhyc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1jaGluYSc7XG4gICAgICAgIGNhc2UgJ0RldXRzY2gnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtZ2VybWFueSc7XG4gICAgICAgIGNhc2UgJ2ZyYW7Dp2Fpcyc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1mcmFuY2UnO1xuICAgICAgICBjYXNlICdJdGFsaWFubyc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1pdGFseSc7XG4gICAgICAgIGNhc2UgJ1BvcnR1Z2FsJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLXBvcnR1Z2FsJztcbiAgICAgICAgY2FzZSAn0KDRg9GB0YHQutC40Lkg0Y/Qt9GL0LonOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtcnVzc2lhJztcbiAgICAgICAgY2FzZSAn7ZWc6rWt7Ja0JzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWtvcmVhJztcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbXSkuY29udHJvbGxlcignQXBwQ3RybCcsIFtcbiAgJyRzY29wZScsICckbG9jYXRpb24nLCBmdW5jdGlvbigkc2NvcGUsICRsb2NhdGlvbikge1xuICAgICRzY29wZS5pc1NwZWNpZmljUGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBhdGg7XG4gICAgICBwYXRoID0gJGxvY2F0aW9uLnBhdGgoKTtcbiAgICAgIHJldHVybiBfLmNvbnRhaW5zKFsnLzQwNCcsICcvcGFnZXMvNTAwJywgJy9wYWdlcy9sb2dpbicsICcvcGFnZXMvc2lnbmluJywgJy9wYWdlcy9zaWduaW4xJywgJy9wYWdlcy9zaWduaW4yJywgJy9wYWdlcy9zaWdudXAnLCAnL3BhZ2VzL3NpZ251cDEnLCAnL3BhZ2VzL3NpZ251cDInLCAnL3BhZ2VzL2ZvcmdvdCcsICcvcGFnZXMvbG9jay1zY3JlZW4nXSwgcGF0aCk7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLm1haW4gPSB7XG4gICAgICBicmFuZDogJ0ludHJhbmV0JyxcbiAgICAgIG5hbWU6ICdBbmRyZXMgRGF2aWQgSmltZW5leicsXG4gICAgICBsb2dvOiAnaW1nL2xvZ28ucG5nJ1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ05hdkN0cmwnLCBbXG4gICckc2NvcGUnLCAndGFza1N0b3JhZ2UnLCAnZmlsdGVyRmlsdGVyJywgZnVuY3Rpb24oJHNjb3BlLCB0YXNrU3RvcmFnZSwgZmlsdGVyRmlsdGVyKSB7XG4gICAgdmFyIHRhc2tzO1xuICAgIHRhc2tzID0gJHNjb3BlLnRhc2tzID0gdGFza1N0b3JhZ2UuZ2V0KCk7XG4gICAgJHNjb3BlLnRhc2tSZW1haW5pbmdDb3VudCA9IGZpbHRlckZpbHRlcih0YXNrcywge1xuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0pLmxlbmd0aDtcbiAgICByZXR1cm4gJHNjb3BlLiRvbigndGFza1JlbWFpbmluZzpjaGFuZ2VkJywgZnVuY3Rpb24oZXZlbnQsIGNvdW50KSB7XG4gICAgICByZXR1cm4gJHNjb3BlLnRhc2tSZW1haW5pbmdDb3VudCA9IGNvdW50O1xuICAgIH0pO1xuICB9XG5dKS5jb250cm9sbGVyKCdEYXNoYm9hcmRDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHt9XSkuY29udHJvbGxlcignTW9kYWxBZ2VuZGFDdHJsJywgW1xuICAnJHNjb3BlJywgJyRtb2RhbCcsICckbG9nJywgZnVuY3Rpb24oJHNjb3BlLCAkbW9kYWwsICRsb2cpIHtcbiAgICAkc2NvcGUuaXRlbXMgPSBbXCJpdGVtMVwiLCBcIml0ZW0yXCIsIFwiaXRlbTNcIl07XG4gICAgJHNjb3BlLmNvbnRhY3RzID0gW107XG4gICAgJHNjb3BlLnNhdmVDb250YWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGlmICgkc2NvcGUubmV3Y29udGFjdC5pZCA9PT0gbnVsbCkge1xuICAgICAgICAkc2NvcGUubmV3Y29udGFjdC5pZCA9IHVpZCsrO1xuICAgICAgICAkc2NvcGUuY29udGFjdHMucHVzaCgkc2NvcGUubmV3Y29udGFjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgaW4gJHNjb3BlLmNvbnRhY3RzKSB7XG4gICAgICAgICAgaWYgKCRzY29wZS5jb250YWN0c1tpXS5pZCA9PT0gJHNjb3BlLm5ld2NvbnRhY3QuaWQpIHtcbiAgICAgICAgICAgICRzY29wZS5jb250YWN0c1tpXSA9ICRzY29wZS5uZXdjb250YWN0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHNjb3BlLm5ld2NvbnRhY3QgPSB7fTtcbiAgICB9O1xuICAgICRzY29wZVtcImRlbGV0ZVwiXSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvciAoaSBpbiAkc2NvcGUuY29udGFjdHMpIHtcbiAgICAgICAgaWYgKCRzY29wZS5jb250YWN0c1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAkc2NvcGUuY29udGFjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICRzY29wZS5uZXdjb250YWN0ID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5lZGl0ID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yIChpIGluICRzY29wZS5jb250YWN0cykge1xuICAgICAgICBpZiAoJHNjb3BlLmNvbnRhY3RzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICRzY29wZS5uZXdjb250YWN0ID0gYW5ndWxhci5jb3B5KCRzY29wZS5jb250YWN0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZTtcbiAgICAgIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiBcIm15TW9kYWxDb250ZW50Lmh0bWxcIixcbiAgICAgICAgY29udHJvbGxlcjogJ01vZGFsSW5zdGFuY2VDdHJsJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUuaXRlbXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oKGZ1bmN0aW9uKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAkc2NvcGUuc2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW07XG4gICAgICB9KSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICRsb2cuaW5mbyhcIk1vZGFsIGRpc21pc3NlZCBhdDogXCIgKyBuZXcgRGF0ZSgpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbl0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9