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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIlBhZ2UvUGFnZUN0cmwuanMiLCJVSS9VSUN0cmwuanMiLCJVSS9VSURpcmVjdGl2ZS5qcyIsIlVJL1VJU2VydmljZS5qcyIsInNoYXJlZC9kaXJlY3RpdmVzLmpzIiwic2hhcmVkL2xvY2FsaXplLmpzIiwic2hhcmVkL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1JvdXRlJywgJ25nQW5pbWF0ZScsICd1aS5ib290c3RyYXAnLCAnZWFzeXBpZWNoYXJ0JywgJ21nby1hbmd1bGFyLXdpemFyZCcsICd0ZXh0QW5ndWxhcicsICd1aS50cmVlJywgJ25nTWFwJywgJ25nVGFnc0lucHV0JywgJ2FwcC51aS5jdHJscycsICdhcHAudWkuZGlyZWN0aXZlcycsICdhcHAudWkuc2VydmljZXMnLCAnYXBwLmNvbnRyb2xsZXJzJywgJ2FwcC5kaXJlY3RpdmVzJywgJ2FwcC5mb3JtLnZhbGlkYXRpb24nLCAnYXBwLnVpLmZvcm0uY3RybHMnLCAnYXBwLnVpLmZvcm0uZGlyZWN0aXZlcycsICdhcHAudGFibGVzJywgJ2FwcC5tYXAnLCAnYXBwLnRhc2snLCAnYXBwLmxvY2FsaXphdGlvbicsICdhcHAuY2hhcnQuY3RybHMnLCAnYXBwLmNoYXJ0LmRpcmVjdGl2ZXMnLCAnYXBwLnBhZ2UuY3RybHMnXSkuY29uZmlnKFtcbiAgJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgICByZXR1cm4gJHJvdXRlUHJvdmlkZXIud2hlbignLycsIHtcbiAgICAgIHJlZGlyZWN0VG86ICcvaW5pY2lvJ1xuICAgIH0pLndoZW4oJy9pbmljaW8nLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2luaWNpby5odG1sJ1xuICAgIH0pLndoZW4oJy9kYXNoYm9hcmQxJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9kYXNoYm9hcmQxLmh0bWwnXG4gICAgfSkud2hlbignL3VpL3R5cG9ncmFwaHknLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL3R5cG9ncmFwaHkuaHRtbCdcbiAgICB9KS53aGVuKCcvdWkvYnV0dG9ucycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdWkvYnV0dG9ucy5odG1sJ1xuICAgIH0pLndoZW4oJy91aS9pY29ucycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdWkvaWNvbnMuaHRtbCdcbiAgICB9KS53aGVuKCcvdWkvZ3JpZHMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL2dyaWRzLmh0bWwnXG4gICAgfSkud2hlbignL3VpL3dpZGdldHMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL3dpZGdldHMuaHRtbCdcbiAgICB9KS53aGVuKCcvdWkvY29tcG9uZW50cycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdWkvY29tcG9uZW50cy5odG1sJ1xuICAgIH0pLndoZW4oJy91aS90aW1lbGluZScsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdWkvdGltZWxpbmUuaHRtbCdcbiAgICB9KS53aGVuKCcvdWkvbmVzdGVkLWxpc3RzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS9uZXN0ZWQtbGlzdHMuaHRtbCdcbiAgICB9KS53aGVuKCcvdWkvcHJpY2luZy10YWJsZXMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL3ByaWNpbmctdGFibGVzLmh0bWwnXG4gICAgfSkud2hlbignL2Zvcm1zL2VsZW1lbnRzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9mb3Jtcy9lbGVtZW50cy5odG1sJ1xuICAgIH0pLndoZW4oJy9mb3Jtcy9sYXlvdXRzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9mb3Jtcy9sYXlvdXRzLmh0bWwnXG4gICAgfSkud2hlbignL2Zvcm1zL3ZhbGlkYXRpb24nLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Zvcm1zL3ZhbGlkYXRpb24uaHRtbCdcbiAgICB9KS53aGVuKCcvZm9ybXMvd2l6YXJkJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9mb3Jtcy93aXphcmQuaHRtbCdcbiAgICB9KS53aGVuKCcvbWFwcy9nbWFwJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tYXBzL2dtYXAuaHRtbCdcbiAgICB9KS53aGVuKCcvbWFwcy9qcXZtYXAnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21hcHMvanF2bWFwLmh0bWwnXG4gICAgfSkud2hlbignL3RhYmxlcy9zdGF0aWMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3RhYmxlcy9zdGF0aWMuaHRtbCdcbiAgICB9KS53aGVuKCcvdGFibGVzL3Jlc3BvbnNpdmUnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3RhYmxlcy9yZXNwb25zaXZlLmh0bWwnXG4gICAgfSkud2hlbignL3RhYmxlcy9keW5hbWljJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90YWJsZXMvZHluYW1pYy5odG1sJ1xuICAgIH0pLndoZW4oJy9jaGFydHMvb3RoZXJzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jaGFydHMvY2hhcnRzLmh0bWwnXG4gICAgfSkud2hlbignL2NoYXJ0cy9tb3JyaXMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NoYXJ0cy9tb3JyaXMuaHRtbCdcbiAgICB9KS53aGVuKCcvY2hhcnRzL2Zsb3QnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NoYXJ0cy9mbG90Lmh0bWwnXG4gICAgfSkud2hlbignL21haWwvaW5ib3gnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21haWwvaW5ib3guaHRtbCdcbiAgICB9KS53aGVuKCcvbWFpbC9jb21wb3NlJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tYWlsL2NvbXBvc2UuaHRtbCdcbiAgICB9KS53aGVuKCcvbWFpbC9zaW5nbGUnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21haWwvc2luZ2xlLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL2ZlYXR1cmVzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9mZWF0dXJlcy5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9zaWduaW4nLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL3NpZ25pbi5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9zaWdudXAnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL3NpZ251cC5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9mb3Jnb3QnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9sb2NrLXNjcmVlbicsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvbG9jay1zY3JlZW4uaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvcHJvZmlsZScsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvcHJvZmlsZS5odG1sJ1xuICAgIH0pLndoZW4oJy80MDQnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzLzQwNC5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy81MDAnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzLzUwMC5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9ibGFuaycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvYmxhbmsuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvaW52b2ljZScsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvaW52b2ljZS5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9zZXJ2aWNlcycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvc2VydmljZXMuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvYWJvdXQnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL2Fib3V0Lmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL2NvbnRhY3QnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL2NvbnRhY3QuaHRtbCdcbiAgICB9KS53aGVuKCcvdGFza3MnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3Rhc2tzL3Rhc2tzLmh0bWwnXG4gICAgfSkub3RoZXJ3aXNlKHtcbiAgICAgIHJlZGlyZWN0VG86ICcvNDA0J1xuICAgIH0pO1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAucGFnZS5jdHJscycsIFtdKS5jb250cm9sbGVyKCdpbnZvaWNlQ3RybCcsIFtcbiAgJyRzY29wZScsICckd2luZG93JywgZnVuY3Rpb24oJHNjb3BlLCAkd2luZG93KSB7XG4gICAgcmV0dXJuICRzY29wZS5wcmludEludm9pY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvcmlnaW5hbENvbnRlbnRzLCBwb3B1cFdpbiwgcHJpbnRDb250ZW50cztcbiAgICAgIHByaW50Q29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW52b2ljZScpLmlubmVySFRNTDtcbiAgICAgIG9yaWdpbmFsQ29udGVudHMgPSBkb2N1bWVudC5ib2R5LmlubmVySFRNTDtcbiAgICAgIHBvcHVwV2luID0gd2luZG93Lm9wZW4oKTtcbiAgICAgIHBvcHVwV2luLmRvY3VtZW50Lm9wZW4oKTtcbiAgICAgIHBvcHVwV2luLmRvY3VtZW50LndyaXRlKCc8aHRtbD48aGVhZD48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cInN0eWxlcy9tYWluLmNzc1wiIC8+PC9oZWFkPjxib2R5IG9ubG9hZD1cIndpbmRvdy5wcmludCgpXCI+JyArIHByaW50Q29udGVudHMgKyAnPC9odG1sPicpO1xuICAgICAgcmV0dXJuIHBvcHVwV2luLmRvY3VtZW50LmNsb3NlKCk7XG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLnVpLmN0cmxzJywgW10pLmNvbnRyb2xsZXIoJ05vdGlmeUN0cmwnLCBbXG4gICckc2NvcGUnLCAnbG9nZ2VyJywgZnVuY3Rpb24oJHNjb3BlLCBsb2dnZXIpIHtcbiAgICByZXR1cm4gJHNjb3BlLm5vdGlmeSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZyhcIkhlYWRzIHVwISBUaGlzIGFsZXJ0IG5lZWRzIHlvdXIgYXR0ZW50aW9uLCBidXQgaXQncyBub3Qgc3VwZXIgaW1wb3J0YW50LlwiKTtcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2dTdWNjZXNzKFwiV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS5cIik7XG4gICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgIHJldHVybiBsb2dnZXIubG9nV2FybmluZyhcIldhcm5pbmchIEJlc3QgY2hlY2sgeW8gc2VsZiwgeW91J3JlIG5vdCBsb29raW5nIHRvbyBnb29kLlwiKTtcbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgIHJldHVybiBsb2dnZXIubG9nRXJyb3IoXCJPaCBzbmFwISBDaGFuZ2UgYSBmZXcgdGhpbmdzIHVwIGFuZCB0cnkgc3VibWl0dGluZyBhZ2Fpbi5cIik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignQWxlcnREZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5hbGVydHMgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgbXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgbXNnOiAnSGVhZHMgdXAhIFRoaXMgYWxlcnQgbmVlZHMgeW91ciBhdHRlbnRpb24sIGJ1dCBpdCBpcyBub3Qgc3VwZXIgaW1wb3J0YW50LidcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICBtc2c6IFwiV2FybmluZyEgQmVzdCBjaGVjayB5byBzZWxmLCB5b3UncmUgbm90IGxvb2tpbmcgdG9vIGdvb2QuXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgIG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5hZGRBbGVydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG51bSwgdHlwZTtcbiAgICAgIG51bSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgICB0eXBlID0gdm9pZCAwO1xuICAgICAgc3dpdGNoIChudW0pIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHR5cGUgPSAnaW5mbyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0eXBlID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdHlwZSA9ICdpbmZvJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHR5cGUgPSAnd2FybmluZyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0eXBlID0gJ2Rhbmdlcic7XG4gICAgICB9XG4gICAgICByZXR1cm4gJHNjb3BlLmFsZXJ0cy5wdXNoKHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgbXNnOiBcIkFub3RoZXIgYWxlcnQhXCJcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5jbG9zZUFsZXJ0ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuYWxlcnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignUHJvZ3Jlc3NEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5tYXggPSAyMDA7XG4gICAgJHNjb3BlLnJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHR5cGUsIHZhbHVlO1xuICAgICAgdmFsdWUgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwKSArIDEwKTtcbiAgICAgIHR5cGUgPSB2b2lkIDA7XG4gICAgICBpZiAodmFsdWUgPCAyNSkge1xuICAgICAgICB0eXBlID0gXCJzdWNjZXNzXCI7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgNTApIHtcbiAgICAgICAgdHlwZSA9IFwiaW5mb1wiO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDc1KSB7XG4gICAgICAgIHR5cGUgPSBcIndhcm5pbmdcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSBcImRhbmdlclwiO1xuICAgICAgfVxuICAgICAgJHNjb3BlLnNob3dXYXJuaW5nID0gdHlwZSA9PT0gXCJkYW5nZXJcIiB8fCB0eXBlID09PSBcIndhcm5pbmdcIjtcbiAgICAgICRzY29wZS5keW5hbWljID0gdmFsdWU7XG4gICAgICAkc2NvcGUudHlwZSA9IHR5cGU7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLnJhbmRvbSgpO1xuICB9XG5dKS5jb250cm9sbGVyKCdBY2NvcmRpb25EZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5vbmVBdEFUaW1lID0gdHJ1ZTtcbiAgICAkc2NvcGUuZ3JvdXBzID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJEeW5hbWljIEdyb3VwIEhlYWRlciAtIDFcIixcbiAgICAgICAgY29udGVudDogXCJEeW5hbWljIEdyb3VwIEJvZHkgLSAxXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6IFwiRHluYW1pYyBHcm91cCBIZWFkZXIgLSAyXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRHluYW1pYyBHcm91cCBCb2R5IC0gMlwiXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiBcIkR5bmFtaWMgR3JvdXAgSGVhZGVyIC0gM1wiLFxuICAgICAgICBjb250ZW50OiBcIkR5bmFtaWMgR3JvdXAgQm9keSAtIDNcIlxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLml0ZW1zID0gW1wiSXRlbSAxXCIsIFwiSXRlbSAyXCIsIFwiSXRlbSAzXCJdO1xuICAgICRzY29wZS5zdGF0dXMgPSB7XG4gICAgICBpc0ZpcnN0T3BlbjogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuMTogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuMjogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuMzogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuNDogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuNTogdHJ1ZSxcbiAgICAgIGlzRmlyc3RPcGVuNjogdHJ1ZVxuICAgIH07XG4gICAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuZXdJdGVtTm87XG4gICAgICBuZXdJdGVtTm8gPSAkc2NvcGUuaXRlbXMubGVuZ3RoICsgMTtcbiAgICAgICRzY29wZS5pdGVtcy5wdXNoKFwiSXRlbSBcIiArIG5ld0l0ZW1Obyk7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignQ29sbGFwc2VEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIHJldHVybiAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgfVxuXSkuY29udHJvbGxlcignTW9kYWxEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsICckbW9kYWwnLCAnJGxvZycsIGZ1bmN0aW9uKCRzY29wZSwgJG1vZGFsLCAkbG9nKSB7XG4gICAgJHNjb3BlLml0ZW1zID0gW1wiaXRlbTFcIiwgXCJpdGVtMlwiLCBcIml0ZW0zXCJdO1xuICAgICRzY29wZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZTtcbiAgICAgIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiBcIm15TW9kYWxDb250ZW50Lmh0bWxcIixcbiAgICAgICAgY29udHJvbGxlcjogJ01vZGFsSW5zdGFuY2VDdHJsJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUuaXRlbXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oKGZ1bmN0aW9uKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAkc2NvcGUuc2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW07XG4gICAgICB9KSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICRsb2cuaW5mbyhcIk1vZGFsIGRpc21pc3NlZCBhdDogXCIgKyBuZXcgRGF0ZSgpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ01vZGFsSW5zdGFuY2VDdHJsJywgW1xuICAnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJywgJ2l0ZW1zJywgZnVuY3Rpb24oJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSwgaXRlbXMpIHtcbiAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcbiAgICAkc2NvcGUuc2VsZWN0ZWQgPSB7XG4gICAgICBpdGVtOiAkc2NvcGUuaXRlbXNbMF1cbiAgICB9O1xuICAgICRzY29wZS5vayA9IGZ1bmN0aW9uKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoJHNjb3BlLnNlbGVjdGVkLml0ZW0pO1xuICAgIH07XG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcyhcImNhbmNlbFwiKTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdQYWdpbmF0aW9uRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUudG90YWxJdGVtcyA9IDY0O1xuICAgICRzY29wZS5jdXJyZW50UGFnZSA9IDQ7XG4gICAgJHNjb3BlLm1heFNpemUgPSA1O1xuICAgICRzY29wZS5zZXRQYWdlID0gZnVuY3Rpb24ocGFnZU5vKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRQYWdlID0gcGFnZU5vO1xuICAgIH07XG4gICAgJHNjb3BlLmJpZ1RvdGFsSXRlbXMgPSAxNzU7XG4gICAgcmV0dXJuICRzY29wZS5iaWdDdXJyZW50UGFnZSA9IDE7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ1RhYnNEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS50YWJzID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJEeW5hbWljIFRpdGxlIDFcIixcbiAgICAgICAgY29udGVudDogXCJEeW5hbWljIGNvbnRlbnQgMS4gIENvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5paGlsLCBxdWlkZW0sIG9mZmljaWlzLCBldCBleCBsYXVkYW50aXVtIHNlZCBjdXBpZGl0YXRlIHZvbHVwdGF0dW0gbGliZXJvIG5vYmlzIHNpdCBpbGx1bSB2b2x1cHRhdGVzIGJlYXRhZSBhYi4gQWQsIHJlcGVsbGVuZHVzIG5vbiBzZXF1aSBldCBhdC5cIlxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogXCJEaXNhYmxlZFwiLFxuICAgICAgICBjb250ZW50OiBcIkR5bmFtaWMgY29udGVudCAyLiAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5paGlsLCBxdWlkZW0sIG9mZmljaWlzLCBldCBleCBsYXVkYW50aXVtIHNlZCBjdXBpZGl0YXRlIHZvbHVwdGF0dW0gbGliZXJvIG5vYmlzIHNpdCBpbGx1bSB2b2x1cHRhdGVzIGJlYXRhZSBhYi4gQWQsIHJlcGVsbGVuZHVzIG5vbiBzZXF1aSBldCBhdC5cIixcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH1cbiAgICBdO1xuICAgIHJldHVybiAkc2NvcGUubmF2VHlwZSA9IFwicGlsbHNcIjtcbiAgfVxuXSkuY29udHJvbGxlcignVHJlZURlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLmxpc3QgPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJJdGVtIDFcIixcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICB0aXRsZTogXCJJdGVtIDJcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMjEsXG4gICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMVwiLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyMTEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjEuMVwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIxMixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMS4yXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMjIsXG4gICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMlwiLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyMjEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjIuMVwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIyMixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMi4yXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gM1wiLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gNFwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0MSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gNC4xXCIsXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gNVwiLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gNlwiLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gN1wiLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5zZWxlY3RlZEl0ZW0gPSB7fTtcbiAgICAkc2NvcGUub3B0aW9ucyA9IHt9O1xuICAgICRzY29wZS5yZW1vdmUgPSBmdW5jdGlvbihzY29wZSkge1xuICAgICAgc2NvcGUucmVtb3ZlKCk7XG4gICAgfTtcbiAgICAkc2NvcGUudG9nZ2xlID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgIHNjb3BlLnRvZ2dsZSgpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5uZXdTdWJJdGVtID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgIHZhciBub2RlRGF0YTtcbiAgICAgIG5vZGVEYXRhID0gc2NvcGUuJG1vZGVsVmFsdWU7XG4gICAgICBub2RlRGF0YS5pdGVtcy5wdXNoKHtcbiAgICAgICAgaWQ6IG5vZGVEYXRhLmlkICogMTAgKyBub2RlRGF0YS5pdGVtcy5sZW5ndGgsXG4gICAgICAgIHRpdGxlOiBub2RlRGF0YS50aXRsZSArIFwiLlwiICsgKG5vZGVEYXRhLml0ZW1zLmxlbmd0aCArIDEpLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ01hcERlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgJyRodHRwJywgJyRpbnRlcnZhbCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCkge1xuICAgIHZhciBpLCBtYXJrZXJzO1xuICAgIG1hcmtlcnMgPSBbXTtcbiAgICBpID0gMDtcbiAgICB3aGlsZSAoaSA8IDgpIHtcbiAgICAgIG1hcmtlcnNbaV0gPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgdGl0bGU6IFwiTWFya2VyOiBcIiArIGlcbiAgICAgIH0pO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICAkc2NvcGUuR2VuZXJhdGVNYXBNYXJrZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZCwgbGF0LCBsbmcsIGxvYywgbnVtTWFya2VycztcbiAgICAgIGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgJHNjb3BlLmRhdGUgPSBkLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICBudW1NYXJrZXJzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyA0O1xuICAgICAgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IG51bU1hcmtlcnMpIHtcbiAgICAgICAgbGF0ID0gNDMuNjYwMDAwMCArIChNYXRoLnJhbmRvbSgpIC8gMTAwKTtcbiAgICAgICAgbG5nID0gLTc5LjQxMDMwMDAgKyAoTWF0aC5yYW5kb20oKSAvIDEwMCk7XG4gICAgICAgIGxvYyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpO1xuICAgICAgICBtYXJrZXJzW2ldLnNldFBvc2l0aW9uKGxvYyk7XG4gICAgICAgIG1hcmtlcnNbaV0uc2V0TWFwKCRzY29wZS5tYXApO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfTtcbiAgICAkaW50ZXJ2YWwoJHNjb3BlLkdlbmVyYXRlTWFwTWFya2VycywgMjAwMCk7XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC51aS5kaXJlY3RpdmVzJywgW10pLmRpcmVjdGl2ZSgndWlUaW1lJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUpIHtcbiAgICAgICAgdmFyIGNoZWNrVGltZSwgc3RhcnRUaW1lO1xuICAgICAgICBzdGFydFRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaCwgbSwgcywgdCwgdGltZSwgdG9kYXk7XG4gICAgICAgICAgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGggPSB0b2RheS5nZXRIb3VycygpO1xuICAgICAgICAgIG0gPSB0b2RheS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgcyA9IHRvZGF5LmdldFNlY29uZHMoKTtcbiAgICAgICAgICBtID0gY2hlY2tUaW1lKG0pO1xuICAgICAgICAgIHMgPSBjaGVja1RpbWUocyk7XG4gICAgICAgICAgdGltZSA9IGggKyBcIjpcIiArIG0gKyBcIjpcIiArIHM7XG4gICAgICAgICAgZWxlLmh0bWwodGltZSk7XG4gICAgICAgICAgcmV0dXJuIHQgPSBzZXRUaW1lb3V0KHN0YXJ0VGltZSwgNTAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgY2hlY2tUaW1lID0gZnVuY3Rpb24oaSkge1xuICAgICAgICAgIGlmIChpIDwgMTApIHtcbiAgICAgICAgICAgIGkgPSBcIjBcIiArIGk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3RhcnRUaW1lKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCd1aVdlYXRoZXInLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyIGNvbG9yLCBpY29uLCBza3ljb25zO1xuICAgICAgICBjb2xvciA9IGF0dHJzLmNvbG9yO1xuICAgICAgICBpY29uID0gU2t5Y29uc1thdHRycy5pY29uXTtcbiAgICAgICAgc2t5Y29ucyA9IG5ldyBTa3ljb25zKHtcbiAgICAgICAgICBcImNvbG9yXCI6IGNvbG9yLFxuICAgICAgICAgIFwicmVzaXplQ2xlYXJcIjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgc2t5Y29ucy5hZGQoZWxlWzBdLCBpY29uKTtcbiAgICAgICAgcmV0dXJuIHNreWNvbnMucGxheSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC51aS5zZXJ2aWNlcycsIFtdKS5mYWN0b3J5KCdsb2dnZXInLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBsb2dJdDtcbiAgICB0b2FzdHIub3B0aW9ucyA9IHtcbiAgICAgIFwiY2xvc2VCdXR0b25cIjogdHJ1ZSxcbiAgICAgIFwicG9zaXRpb25DbGFzc1wiOiBcInRvYXN0LWJvdHRvbS1yaWdodFwiLFxuICAgICAgXCJ0aW1lT3V0XCI6IFwiMzAwMFwiXG4gICAgfTtcbiAgICBsb2dJdCA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHR5cGUpIHtcbiAgICAgIHJldHVybiB0b2FzdHJbdHlwZV0obWVzc2FnZSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIGxvZ0l0KG1lc3NhZ2UsICdpbmZvJyk7XG4gICAgICB9LFxuICAgICAgbG9nV2FybmluZzogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBsb2dJdChtZXNzYWdlLCAnd2FybmluZycpO1xuICAgICAgfSxcbiAgICAgIGxvZ1N1Y2Nlc3M6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgbG9nSXQobWVzc2FnZSwgJ3N1Y2Nlc3MnKTtcbiAgICAgIH0sXG4gICAgICBsb2dFcnJvcjogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBsb2dJdChtZXNzYWdlLCAnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAuZGlyZWN0aXZlcycsIFtdKS5kaXJlY3RpdmUoJ2ltZ0hvbGRlcicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICByZXR1cm4gSG9sZGVyLnJ1bih7XG4gICAgICAgICAgaW1hZ2VzOiBlbGVbMF1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdjdXN0b21CYWNrZ3JvdW5kJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgIGNvbnRyb2xsZXI6IFtcbiAgICAgICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGxvY2F0aW9uKSB7XG4gICAgICAgIHZhciBhZGRCZywgcGF0aDtcbiAgICAgICAgcGF0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAkbG9jYXRpb24ucGF0aCgpO1xuICAgICAgICB9O1xuICAgICAgICBhZGRCZyA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcygnYm9keS1ob21lIGJvZHktc3BlY2lhbCBib2R5LXRhc2tzIGJvZHktbG9jaycpO1xuICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgIHJldHVybiAkZWxlbWVudC5hZGRDbGFzcygnYm9keS1ob21lJyk7XG4gICAgICAgICAgICBjYXNlICcvNDA0JzpcbiAgICAgICAgICAgIGNhc2UgJy9wYWdlcy81MDAnOlxuICAgICAgICAgICAgY2FzZSAnL3BhZ2VzL3NpZ25pbic6XG4gICAgICAgICAgICBjYXNlICcvcGFnZXMvc2lnbnVwJzpcbiAgICAgICAgICAgIGNhc2UgJy9wYWdlcy9mb3Jnb3QnOlxuICAgICAgICAgICAgICByZXR1cm4gJGVsZW1lbnQuYWRkQ2xhc3MoJ2JvZHktc3BlY2lhbCcpO1xuICAgICAgICAgICAgY2FzZSAnL3BhZ2VzL2xvY2stc2NyZWVuJzpcbiAgICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50LmFkZENsYXNzKCdib2R5LXNwZWNpYWwgYm9keS1sb2NrJyk7XG4gICAgICAgICAgICBjYXNlICcvdGFza3MnOlxuICAgICAgICAgICAgICByZXR1cm4gJGVsZW1lbnQuYWRkQ2xhc3MoJ2JvZHktdGFza3MnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFkZEJnKCRsb2NhdGlvbi5wYXRoKCkpO1xuICAgICAgICByZXR1cm4gJHNjb3BlLiR3YXRjaChwYXRoLCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICAgIGlmIChuZXdWYWwgPT09IG9sZFZhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWRkQmcoJGxvY2F0aW9uLnBhdGgoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn0pLmRpcmVjdGl2ZSgndWlDb2xvclN3aXRjaCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICByZXR1cm4gZWxlLmZpbmQoJy5jb2xvci1vcHRpb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciAkdGhpcywgaHJlZlVybCwgc3R5bGU7XG4gICAgICAgICAgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIGhyZWZVcmwgPSB2b2lkIDA7XG4gICAgICAgICAgc3R5bGUgPSAkdGhpcy5kYXRhKCdzdHlsZScpO1xuICAgICAgICAgIGlmIChzdHlsZSA9PT0gJ2xvdWxvdScpIHtcbiAgICAgICAgICAgIGhyZWZVcmwgPSAnc3R5bGVzL21haW4uY3NzJztcbiAgICAgICAgICAgICQoJ2xpbmtbaHJlZl49XCJzdHlsZXMvbWFpblwiXScpLmF0dHIoJ2hyZWYnLCBocmVmVXJsKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICBzdHlsZSA9ICctJyArIHN0eWxlO1xuICAgICAgICAgICAgaHJlZlVybCA9ICdzdHlsZXMvbWFpbicgKyBzdHlsZSArICcuY3NzJztcbiAgICAgICAgICAgICQoJ2xpbmtbaHJlZl49XCJzdHlsZXMvbWFpblwiXScpLmF0dHIoJ2hyZWYnLCBocmVmVXJsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCd0b2dnbGVNaW5OYXYnLCBbXG4gICckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHJvb3RTY29wZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyICRjb250ZW50LCAkbmF2LCAkd2luZG93LCBUaW1lciwgYXBwLCB1cGRhdGVDbGFzcztcbiAgICAgICAgYXBwID0gJCgnI2FwcCcpO1xuICAgICAgICAkd2luZG93ID0gJCh3aW5kb3cpO1xuICAgICAgICAkbmF2ID0gJCgnI25hdi1jb250YWluZXInKTtcbiAgICAgICAgJGNvbnRlbnQgPSAkKCcjY29udGVudCcpO1xuICAgICAgICBlbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmIChhcHAuaGFzQ2xhc3MoJ25hdi1taW4nKSkge1xuICAgICAgICAgICAgYXBwLnJlbW92ZUNsYXNzKCduYXYtbWluJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcC5hZGRDbGFzcygnbmF2LW1pbicpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdtaW5OYXY6ZW5hYmxlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgVGltZXIgPSB2b2lkIDA7XG4gICAgICAgIHVwZGF0ZUNsYXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHdpZHRoO1xuICAgICAgICAgIHdpZHRoID0gJHdpbmRvdy53aWR0aCgpO1xuICAgICAgICAgIGlmICh3aWR0aCA8IDc2OCkge1xuICAgICAgICAgICAgcmV0dXJuIGFwcC5yZW1vdmVDbGFzcygnbmF2LW1pbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICR3aW5kb3cucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0O1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgICByZXR1cm4gdCA9IHNldFRpbWVvdXQodXBkYXRlQ2xhc3MsIDMwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnY29sbGFwc2VOYXYnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyICRhLCAkYVJlc3QsICRsaXN0cywgJGxpc3RzUmVzdCwgYXBwO1xuICAgICAgICAkbGlzdHMgPSBlbGUuZmluZCgndWwnKS5wYXJlbnQoJ2xpJyk7XG4gICAgICAgICRsaXN0cy5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtcmlnaHQgaWNvbi1oYXMtdWxcIj48L2k+Jyk7XG4gICAgICAgICRhID0gJGxpc3RzLmNoaWxkcmVuKCdhJyk7XG4gICAgICAgICRsaXN0c1Jlc3QgPSBlbGUuY2hpbGRyZW4oJ2xpJykubm90KCRsaXN0cyk7XG4gICAgICAgICRhUmVzdCA9ICRsaXN0c1Jlc3QuY2hpbGRyZW4oJ2EnKTtcbiAgICAgICAgYXBwID0gJCgnI2FwcCcpO1xuICAgICAgICAkYS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciAkcGFyZW50LCAkdGhpcztcbiAgICAgICAgICBpZiAoYXBwLmhhc0NsYXNzKCduYXYtbWluJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICRwYXJlbnQgPSAkdGhpcy5wYXJlbnQoJ2xpJyk7XG4gICAgICAgICAgJGxpc3RzLm5vdCgkcGFyZW50KS5yZW1vdmVDbGFzcygnb3BlbicpLmZpbmQoJ3VsJykuc2xpZGVVcCgpO1xuICAgICAgICAgICRwYXJlbnQudG9nZ2xlQ2xhc3MoJ29wZW4nKS5maW5kKCd1bCcpLnN0b3AoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJGFSZXN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuICRsaXN0cy5yZW1vdmVDbGFzcygnb3BlbicpLmZpbmQoJ3VsJykuc2xpZGVVcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNjb3BlLiRvbignbWluTmF2OmVuYWJsZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHJldHVybiAkbGlzdHMucmVtb3ZlQ2xhc3MoJ29wZW4nKS5maW5kKCd1bCcpLnNsaWRlVXAoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdoaWdobGlnaHRBY3RpdmUnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICBjb250cm9sbGVyOiBbXG4gICAgICAgICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJGxvY2F0aW9uKSB7XG4gICAgICAgICAgdmFyIGhpZ2hsaWdodEFjdGl2ZSwgbGlua3MsIHBhdGg7XG4gICAgICAgICAgbGlua3MgPSAkZWxlbWVudC5maW5kKCdhJyk7XG4gICAgICAgICAgcGF0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRsb2NhdGlvbi5wYXRoKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBoaWdobGlnaHRBY3RpdmUgPSBmdW5jdGlvbihsaW5rcywgcGF0aCkge1xuICAgICAgICAgICAgcGF0aCA9ICcjJyArIHBhdGg7XG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhci5mb3JFYWNoKGxpbmtzLCBmdW5jdGlvbihsaW5rKSB7XG4gICAgICAgICAgICAgIHZhciAkbGksICRsaW5rLCBocmVmO1xuICAgICAgICAgICAgICAkbGluayA9IGFuZ3VsYXIuZWxlbWVudChsaW5rKTtcbiAgICAgICAgICAgICAgJGxpID0gJGxpbmsucGFyZW50KCdsaScpO1xuICAgICAgICAgICAgICBocmVmID0gJGxpbmsuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICBpZiAoJGxpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICRsaS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihocmVmKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkbGkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGhpZ2hsaWdodEFjdGl2ZShsaW5rcywgJGxvY2F0aW9uLnBhdGgoKSk7XG4gICAgICAgICAgcmV0dXJuICRzY29wZS4kd2F0Y2gocGF0aCwgZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IG9sZFZhbCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGlnaGxpZ2h0QWN0aXZlKGxpbmtzLCAkbG9jYXRpb24ucGF0aCgpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndG9nZ2xlT2ZmQ2FudmFzJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHJldHVybiBlbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICQoJyNhcHAnKS50b2dnbGVDbGFzcygnb24tY2FudmFzJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnc2xpbVNjcm9sbCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICByZXR1cm4gZWxlLnNsaW1TY3JvbGwoe1xuICAgICAgICAgIGhlaWdodDogYXR0cnMuc2Nyb2xsSGVpZ2h0IHx8ICcxMDAlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ2dvQmFjaycsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICAgIGNvbnRyb2xsZXI6IFtcbiAgICAgICAgJyRzY29wZScsICckZWxlbWVudCcsICckd2luZG93JywgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJHdpbmRvdykge1xuICAgICAgICAgIHJldHVybiAkZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLmxvY2FsaXphdGlvbicsIFtdKS5mYWN0b3J5KCdsb2NhbGl6ZScsIFtcbiAgJyRodHRwJywgJyRyb290U2NvcGUnLCAnJHdpbmRvdycsIGZ1bmN0aW9uKCRodHRwLCAkcm9vdFNjb3BlLCAkd2luZG93KSB7XG4gICAgdmFyIGxvY2FsaXplO1xuICAgIGxvY2FsaXplID0ge1xuICAgICAgbGFuZ3VhZ2U6ICcnLFxuICAgICAgdXJsOiB2b2lkIDAsXG4gICAgICByZXNvdXJjZUZpbGVMb2FkZWQ6IGZhbHNlLFxuICAgICAgc3VjY2Vzc0NhbGxiYWNrOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGxvY2FsaXplLmRpY3Rpb25hcnkgPSBkYXRhO1xuICAgICAgICBsb2NhbGl6ZS5yZXNvdXJjZUZpbGVMb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdsb2NhbGl6ZVJlc291cmNlc1VwZGF0ZWQnKTtcbiAgICAgIH0sXG4gICAgICBzZXRMYW5ndWFnZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgbG9jYWxpemUubGFuZ3VhZ2UgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiLVwiKVswXTtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmluaXRMb2NhbGl6ZWRSZXNvdXJjZXMoKTtcbiAgICAgIH0sXG4gICAgICBzZXRVcmw6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGxvY2FsaXplLnVybCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbG9jYWxpemUuaW5pdExvY2FsaXplZFJlc291cmNlcygpO1xuICAgICAgfSxcbiAgICAgIGJ1aWxkVXJsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFsb2NhbGl6ZS5sYW5ndWFnZSkge1xuICAgICAgICAgIGxvY2FsaXplLmxhbmd1YWdlID0gKCR3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZSB8fCAkd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBsb2NhbGl6ZS5sYW5ndWFnZSA9IGxvY2FsaXplLmxhbmd1YWdlLnNwbGl0KFwiLVwiKVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2kxOG4vcmVzb3VyY2VzLWxvY2FsZV8nICsgbG9jYWxpemUubGFuZ3VhZ2UgKyAnLmpzJztcbiAgICAgIH0sXG4gICAgICBpbml0TG9jYWxpemVkUmVzb3VyY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVybDtcbiAgICAgICAgdXJsID0gbG9jYWxpemUudXJsIHx8IGxvY2FsaXplLmJ1aWxkVXJsKCk7XG4gICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgIGNhY2hlOiBmYWxzZVxuICAgICAgICB9KS5zdWNjZXNzKGxvY2FsaXplLnN1Y2Nlc3NDYWxsYmFjaykuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbG9jYWxpemVSZXNvdXJjZXNVcGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldExvY2FsaXplZFN0cmluZzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCwgdmFsdWVMb3dlckNhc2U7XG4gICAgICAgIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGxvY2FsaXplLmRpY3Rpb25hcnkgJiYgdmFsdWUpIHtcbiAgICAgICAgICB2YWx1ZUxvd2VyQ2FzZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKGxvY2FsaXplLmRpY3Rpb25hcnlbdmFsdWVMb3dlckNhc2VdID09PSAnJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxvY2FsaXplLmRpY3Rpb25hcnlbdmFsdWVMb3dlckNhc2VdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGxvY2FsaXplO1xuICB9XG5dKS5kaXJlY3RpdmUoJ2kxOG4nLCBbXG4gICdsb2NhbGl6ZScsIGZ1bmN0aW9uKGxvY2FsaXplKSB7XG4gICAgdmFyIGkxOG5EaXJlY3RpdmU7XG4gICAgaTE4bkRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiBcIkVBXCIsXG4gICAgICB1cGRhdGVUZXh0OiBmdW5jdGlvbihlbGUsIGlucHV0LCBwbGFjZWhvbGRlcikge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICByZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIGlmIChpbnB1dCA9PT0gJ2kxOG4tcGxhY2Vob2xkZXInKSB7XG4gICAgICAgICAgcmVzdWx0ID0gbG9jYWxpemUuZ2V0TG9jYWxpemVkU3RyaW5nKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICByZXR1cm4gZWxlLmF0dHIoJ3BsYWNlaG9sZGVyJywgcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5sZW5ndGggPj0gMSkge1xuICAgICAgICAgIHJlc3VsdCA9IGxvY2FsaXplLmdldExvY2FsaXplZFN0cmluZyhpbnB1dCk7XG4gICAgICAgICAgcmV0dXJuIGVsZS50ZXh0KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICBzY29wZS4kb24oJ2xvY2FsaXplUmVzb3VyY2VzVXBkYXRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpMThuRGlyZWN0aXZlLnVwZGF0ZVRleHQoZWxlLCBhdHRycy5pMThuLCBhdHRycy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXR0cnMuJG9ic2VydmUoJ2kxOG4nLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBpMThuRGlyZWN0aXZlLnVwZGF0ZVRleHQoZWxlLCB2YWx1ZSwgYXR0cnMucGxhY2Vob2xkZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBpMThuRGlyZWN0aXZlO1xuICB9XG5dKS5jb250cm9sbGVyKCdMYW5nQ3RybCcsIFtcbiAgJyRzY29wZScsICdsb2NhbGl6ZScsIGZ1bmN0aW9uKCRzY29wZSwgbG9jYWxpemUpIHtcbiAgICAkc2NvcGUubGFuZyA9ICdFbmdsaXNoJztcbiAgICAkc2NvcGUuc2V0TGFuZyA9IGZ1bmN0aW9uKGxhbmcpIHtcbiAgICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgICBjYXNlICdFbmdsaXNoJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnRU4tVVMnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRXNwYcOxb2wnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdFUy1FUycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICfml6XmnKzoqp4nOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdKQS1KUCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICfkuK3mlocnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdaSC1UVycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEZXV0c2NoJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnREUtREUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZnJhbsOnYWlzJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnRlItRlInKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSXRhbGlhbm8nOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdJVC1JVCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQb3J0dWdhbCc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ1BULUJSJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ9Cg0YPRgdGB0LrQuNC5INGP0LfRi9C6JzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnUlUtUlUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAn7ZWc6rWt7Ja0JzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnS08tS1InKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkc2NvcGUubGFuZyA9IGxhbmc7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLmdldEZsYWcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsYW5nO1xuICAgICAgbGFuZyA9ICRzY29wZS5sYW5nO1xuICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgIGNhc2UgJ0VuZ2xpc2gnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtYW1lcmljYW4nO1xuICAgICAgICBjYXNlICdFc3Bhw7FvbCc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1zcGFpbic7XG4gICAgICAgIGNhc2UgJ+aXpeacrOiqnic6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1qYXBhbic7XG4gICAgICAgIGNhc2UgJ+S4reaWhyc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1jaGluYSc7XG4gICAgICAgIGNhc2UgJ0RldXRzY2gnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtZ2VybWFueSc7XG4gICAgICAgIGNhc2UgJ2ZyYW7Dp2Fpcyc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1mcmFuY2UnO1xuICAgICAgICBjYXNlICdJdGFsaWFubyc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1pdGFseSc7XG4gICAgICAgIGNhc2UgJ1BvcnR1Z2FsJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLXBvcnR1Z2FsJztcbiAgICAgICAgY2FzZSAn0KDRg9GB0YHQutC40Lkg0Y/Qt9GL0LonOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtcnVzc2lhJztcbiAgICAgICAgY2FzZSAn7ZWc6rWt7Ja0JzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWtvcmVhJztcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbXSkuY29udHJvbGxlcignQXBwQ3RybCcsIFtcbiAgJyRzY29wZScsICckbG9jYXRpb24nLCBmdW5jdGlvbigkc2NvcGUsICRsb2NhdGlvbikge1xuICAgICRzY29wZS5pc1NwZWNpZmljUGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBhdGg7XG4gICAgICBwYXRoID0gJGxvY2F0aW9uLnBhdGgoKTtcbiAgICAgIHJldHVybiBfLmNvbnRhaW5zKFsnLzQwNCcsICcvcGFnZXMvNTAwJywgJy9wYWdlcy9sb2dpbicsICcvcGFnZXMvc2lnbmluJywgJy9wYWdlcy9zaWduaW4xJywgJy9wYWdlcy9zaWduaW4yJywgJy9wYWdlcy9zaWdudXAnLCAnL3BhZ2VzL3NpZ251cDEnLCAnL3BhZ2VzL3NpZ251cDInLCAnL3BhZ2VzL2ZvcmdvdCcsICcvcGFnZXMvbG9jay1zY3JlZW4nXSwgcGF0aCk7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLm1haW4gPSB7XG4gICAgICBicmFuZDogJ0ludHJhbmV0JyxcbiAgICAgIG5hbWU6ICdBbmRyZXMgRGF2aWQgSmltZW5leicsXG4gICAgICBsb2dvOiAnaW1nL2xvZ28ucG5nJ1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ05hdkN0cmwnLCBbXG4gICckc2NvcGUnLCAndGFza1N0b3JhZ2UnLCAnZmlsdGVyRmlsdGVyJywgZnVuY3Rpb24oJHNjb3BlLCB0YXNrU3RvcmFnZSwgZmlsdGVyRmlsdGVyKSB7XG4gICAgdmFyIHRhc2tzO1xuICAgIHRhc2tzID0gJHNjb3BlLnRhc2tzID0gdGFza1N0b3JhZ2UuZ2V0KCk7XG4gICAgJHNjb3BlLnRhc2tSZW1haW5pbmdDb3VudCA9IGZpbHRlckZpbHRlcih0YXNrcywge1xuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0pLmxlbmd0aDtcbiAgICByZXR1cm4gJHNjb3BlLiRvbigndGFza1JlbWFpbmluZzpjaGFuZ2VkJywgZnVuY3Rpb24oZXZlbnQsIGNvdW50KSB7XG4gICAgICByZXR1cm4gJHNjb3BlLnRhc2tSZW1haW5pbmdDb3VudCA9IGNvdW50O1xuICAgIH0pO1xuICB9XG5dKS5jb250cm9sbGVyKCdEYXNoYm9hcmRDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHt9XSkuY29udHJvbGxlcignTW9kYWxBZ2VuZGFDdHJsJywgW1xuICAnJHNjb3BlJywgJyRtb2RhbCcsICckbG9nJywgZnVuY3Rpb24oJHNjb3BlLCAkbW9kYWwsICRsb2cpIHtcbiAgICAkc2NvcGUuaXRlbXMgPSBbXCJpdGVtMVwiLCBcIml0ZW0yXCIsIFwiaXRlbTNcIl07XG4gICAgJHNjb3BlLmNvbnRhY3RzID0gW107XG4gICAgJHNjb3BlLnNhdmVDb250YWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGlmICgkc2NvcGUubmV3Y29udGFjdC5pZCA9PT0gbnVsbCkge1xuICAgICAgICAkc2NvcGUubmV3Y29udGFjdC5pZCA9IHVpZCsrO1xuICAgICAgICAkc2NvcGUuY29udGFjdHMucHVzaCgkc2NvcGUubmV3Y29udGFjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgaW4gJHNjb3BlLmNvbnRhY3RzKSB7XG4gICAgICAgICAgaWYgKCRzY29wZS5jb250YWN0c1tpXS5pZCA9PT0gJHNjb3BlLm5ld2NvbnRhY3QuaWQpIHtcbiAgICAgICAgICAgICRzY29wZS5jb250YWN0c1tpXSA9ICRzY29wZS5uZXdjb250YWN0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHNjb3BlLm5ld2NvbnRhY3QgPSB7fTtcbiAgICB9O1xuICAgICRzY29wZVtcImRlbGV0ZVwiXSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvciAoaSBpbiAkc2NvcGUuY29udGFjdHMpIHtcbiAgICAgICAgaWYgKCRzY29wZS5jb250YWN0c1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAkc2NvcGUuY29udGFjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICRzY29wZS5uZXdjb250YWN0ID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5lZGl0ID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yIChpIGluICRzY29wZS5jb250YWN0cykge1xuICAgICAgICBpZiAoJHNjb3BlLmNvbnRhY3RzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICRzY29wZS5uZXdjb250YWN0ID0gYW5ndWxhci5jb3B5KCRzY29wZS5jb250YWN0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZTtcbiAgICAgIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiBcIm15TW9kYWxDb250ZW50Lmh0bWxcIixcbiAgICAgICAgY29udHJvbGxlcjogJ01vZGFsSW5zdGFuY2VDdHJsJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUuaXRlbXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oKGZ1bmN0aW9uKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAkc2NvcGUuc2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW07XG4gICAgICB9KSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICRsb2cuaW5mbyhcIk1vZGFsIGRpc21pc3NlZCBhdDogXCIgKyBuZXcgRGF0ZSgpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbl0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
