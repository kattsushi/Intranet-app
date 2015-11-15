'use strict';
angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'textAngular', 'app.ui.ctrls', 'app.ui.directives', 'app.ui.services', 'app.controllers', 'app.page.ctrls']).config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      redirectTo: '/inicio'
    }).when('/inicio', {
      templateUrl: 'views/inicio.html'
    }).when('/dashboard1', {
      templateUrl: 'views/dashboard1.html'
    }).when('/404', {
      templateUrl: 'views/pages/404.html'
    }).when('/pages/500', {
      templateUrl: 'views/pages/500.html'
    }).otherwise({
      redirectTo: '/404'
    });
  }, function($interpolateProvider) {
    $interpolateProvider.startSymbol("{[{");
    return $interpolateProvider.endSymbol("}]}");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIlBhZ2UvUGFnZUN0cmwuanMiLCJVSS9VSUN0cmwuanMiLCJVSS9VSURpcmVjdGl2ZS5qcyIsIlVJL1VJU2VydmljZS5qcyIsInNoYXJlZC9kaXJlY3RpdmVzLmpzIiwic2hhcmVkL2xvY2FsaXplLmpzIiwic2hhcmVkL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1JvdXRlJywgJ25nQW5pbWF0ZScsICd1aS5ib290c3RyYXAnLCAndGV4dEFuZ3VsYXInLCAnYXBwLnVpLmN0cmxzJywgJ2FwcC51aS5kaXJlY3RpdmVzJywgJ2FwcC51aS5zZXJ2aWNlcycsICdhcHAuY29udHJvbGxlcnMnLCAnYXBwLnBhZ2UuY3RybHMnXSkuY29uZmlnKFtcbiAgJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgICByZXR1cm4gJHJvdXRlUHJvdmlkZXIud2hlbignLycsIHtcbiAgICAgIHJlZGlyZWN0VG86ICcvaW5pY2lvJ1xuICAgIH0pLndoZW4oJy9pbmljaW8nLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2luaWNpby5odG1sJ1xuICAgIH0pLndoZW4oJy9kYXNoYm9hcmQxJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9kYXNoYm9hcmQxLmh0bWwnXG4gICAgfSkud2hlbignLzQwNCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvNDA0Lmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzLzUwMCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvNTAwLmh0bWwnXG4gICAgfSkub3RoZXJ3aXNlKHtcbiAgICAgIHJlZGlyZWN0VG86ICcvNDA0J1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbigkaW50ZXJwb2xhdGVQcm92aWRlcikge1xuICAgICRpbnRlcnBvbGF0ZVByb3ZpZGVyLnN0YXJ0U3ltYm9sKFwie1t7XCIpO1xuICAgIHJldHVybiAkaW50ZXJwb2xhdGVQcm92aWRlci5lbmRTeW1ib2woXCJ9XX1cIik7XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC5wYWdlLmN0cmxzJywgW10pLmNvbnRyb2xsZXIoJ2ludm9pY2VDdHJsJywgW1xuICAnJHNjb3BlJywgJyR3aW5kb3cnLCBmdW5jdGlvbigkc2NvcGUsICR3aW5kb3cpIHtcbiAgICByZXR1cm4gJHNjb3BlLnByaW50SW52b2ljZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9yaWdpbmFsQ29udGVudHMsIHBvcHVwV2luLCBwcmludENvbnRlbnRzO1xuICAgICAgcHJpbnRDb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZvaWNlJykuaW5uZXJIVE1MO1xuICAgICAgb3JpZ2luYWxDb250ZW50cyA9IGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuICAgICAgcG9wdXBXaW4gPSB3aW5kb3cub3BlbigpO1xuICAgICAgcG9wdXBXaW4uZG9jdW1lbnQub3BlbigpO1xuICAgICAgcG9wdXBXaW4uZG9jdW1lbnQud3JpdGUoJzxodG1sPjxoZWFkPjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwic3R5bGVzL21haW4uY3NzXCIgLz48L2hlYWQ+PGJvZHkgb25sb2FkPVwid2luZG93LnByaW50KClcIj4nICsgcHJpbnRDb250ZW50cyArICc8L2h0bWw+Jyk7XG4gICAgICByZXR1cm4gcG9wdXBXaW4uZG9jdW1lbnQuY2xvc2UoKTtcbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAudWkuY3RybHMnLCBbXSkuY29udHJvbGxlcignTm90aWZ5Q3RybCcsIFtcbiAgJyRzY29wZScsICdsb2dnZXInLCBmdW5jdGlvbigkc2NvcGUsIGxvZ2dlcikge1xuICAgIHJldHVybiAkc2NvcGUubm90aWZ5ID0gZnVuY3Rpb24odHlwZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgIHJldHVybiBsb2dnZXIubG9nKFwiSGVhZHMgdXAhIFRoaXMgYWxlcnQgbmVlZHMgeW91ciBhdHRlbnRpb24sIGJ1dCBpdCdzIG5vdCBzdXBlciBpbXBvcnRhbnQuXCIpO1xuICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZ1N1Y2Nlc3MoXCJXZWxsIGRvbmUhIFlvdSBzdWNjZXNzZnVsbHkgcmVhZCB0aGlzIGltcG9ydGFudCBhbGVydCBtZXNzYWdlLlwiKTtcbiAgICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2dXYXJuaW5nKFwiV2FybmluZyEgQmVzdCBjaGVjayB5byBzZWxmLCB5b3UncmUgbm90IGxvb2tpbmcgdG9vIGdvb2QuXCIpO1xuICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2dFcnJvcihcIk9oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLlwiKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdBbGVydERlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLmFsZXJ0cyA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICBtc2c6ICdXZWxsIGRvbmUhIFlvdSBzdWNjZXNzZnVsbHkgcmVhZCB0aGlzIGltcG9ydGFudCBhbGVydCBtZXNzYWdlLidcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICBtc2c6ICdIZWFkcyB1cCEgVGhpcyBhbGVydCBuZWVkcyB5b3VyIGF0dGVudGlvbiwgYnV0IGl0IGlzIG5vdCBzdXBlciBpbXBvcnRhbnQuJ1xuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgIG1zZzogXCJXYXJuaW5nISBCZXN0IGNoZWNrIHlvIHNlbGYsIHlvdSdyZSBub3QgbG9va2luZyB0b28gZ29vZC5cIlxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgbXNnOiAnT2ggc25hcCEgQ2hhbmdlIGEgZmV3IHRoaW5ncyB1cCBhbmQgdHJ5IHN1Ym1pdHRpbmcgYWdhaW4uJ1xuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLmFkZEFsZXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbnVtLCB0eXBlO1xuICAgICAgbnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICAgIHR5cGUgPSB2b2lkIDA7XG4gICAgICBzd2l0Y2ggKG51bSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgdHlwZSA9ICdpbmZvJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHR5cGUgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0eXBlID0gJ2luZm8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdHlwZSA9ICd3YXJuaW5nJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAkc2NvcGUuYWxlcnRzLnB1c2goe1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBtc2c6IFwiQW5vdGhlciBhbGVydCFcIlxuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLmNsb3NlQWxlcnQgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgcmV0dXJuICRzY29wZS5hbGVydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdQcm9ncmVzc0RlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLm1heCA9IDIwMDtcbiAgICAkc2NvcGUucmFuZG9tID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdHlwZSwgdmFsdWU7XG4gICAgICB2YWx1ZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMTApO1xuICAgICAgdHlwZSA9IHZvaWQgMDtcbiAgICAgIGlmICh2YWx1ZSA8IDI1KSB7XG4gICAgICAgIHR5cGUgPSBcInN1Y2Nlc3NcIjtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCA1MCkge1xuICAgICAgICB0eXBlID0gXCJpbmZvXCI7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgNzUpIHtcbiAgICAgICAgdHlwZSA9IFwid2FybmluZ1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IFwiZGFuZ2VyXCI7XG4gICAgICB9XG4gICAgICAkc2NvcGUuc2hvd1dhcm5pbmcgPSB0eXBlID09PSBcImRhbmdlclwiIHx8IHR5cGUgPT09IFwid2FybmluZ1wiO1xuICAgICAgJHNjb3BlLmR5bmFtaWMgPSB2YWx1ZTtcbiAgICAgICRzY29wZS50eXBlID0gdHlwZTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUucmFuZG9tKCk7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ0FjY29yZGlvbkRlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLm9uZUF0QVRpbWUgPSB0cnVlO1xuICAgICRzY29wZS5ncm91cHMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkR5bmFtaWMgR3JvdXAgSGVhZGVyIC0gMVwiLFxuICAgICAgICBjb250ZW50OiBcIkR5bmFtaWMgR3JvdXAgQm9keSAtIDFcIlxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogXCJEeW5hbWljIEdyb3VwIEhlYWRlciAtIDJcIixcbiAgICAgICAgY29udGVudDogXCJEeW5hbWljIEdyb3VwIEJvZHkgLSAyXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6IFwiRHluYW1pYyBHcm91cCBIZWFkZXIgLSAzXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRHluYW1pYyBHcm91cCBCb2R5IC0gM1wiXG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuaXRlbXMgPSBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl07XG4gICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgIGlzRmlyc3RPcGVuOiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW4xOiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW4yOiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW4zOiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW40OiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW41OiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW42OiB0cnVlXG4gICAgfTtcbiAgICAkc2NvcGUuYWRkSXRlbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5ld0l0ZW1ObztcbiAgICAgIG5ld0l0ZW1ObyA9ICRzY29wZS5pdGVtcy5sZW5ndGggKyAxO1xuICAgICAgJHNjb3BlLml0ZW1zLnB1c2goXCJJdGVtIFwiICsgbmV3SXRlbU5vKTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdDb2xsYXBzZURlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgcmV0dXJuICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICB9XG5dKS5jb250cm9sbGVyKCdNb2RhbERlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgJyRtb2RhbCcsICckbG9nJywgZnVuY3Rpb24oJHNjb3BlLCAkbW9kYWwsICRsb2cpIHtcbiAgICAkc2NvcGUuaXRlbXMgPSBbXCJpdGVtMVwiLCBcIml0ZW0yXCIsIFwiaXRlbTNcIl07XG4gICAgJHNjb3BlLm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtb2RhbEluc3RhbmNlO1xuICAgICAgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwibXlNb2RhbENvbnRlbnQuaHRtbFwiLFxuICAgICAgICBjb250cm9sbGVyOiAnTW9kYWxJbnN0YW5jZUN0cmwnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgaXRlbXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRzY29wZS5pdGVtcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbigoZnVuY3Rpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICRzY29wZS5zZWxlY3RlZCA9IHNlbGVjdGVkSXRlbTtcbiAgICAgIH0pLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvZy5pbmZvKFwiTW9kYWwgZGlzbWlzc2VkIGF0OiBcIiArIG5ldyBEYXRlKCkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignTW9kYWxJbnN0YW5jZUN0cmwnLCBbXG4gICckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnLCAnaXRlbXMnLCBmdW5jdGlvbigkc2NvcGUsICRtb2RhbEluc3RhbmNlLCBpdGVtcykge1xuICAgICRzY29wZS5pdGVtcyA9IGl0ZW1zO1xuICAgICRzY29wZS5zZWxlY3RlZCA9IHtcbiAgICAgIGl0ZW06ICRzY29wZS5pdGVtc1swXVxuICAgIH07XG4gICAgJHNjb3BlLm9rID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSgkc2NvcGUuc2VsZWN0ZWQuaXRlbSk7XG4gICAgfTtcbiAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKFwiY2FuY2VsXCIpO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ1BhZ2luYXRpb25EZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS50b3RhbEl0ZW1zID0gNjQ7XG4gICAgJHNjb3BlLmN1cnJlbnRQYWdlID0gNDtcbiAgICAkc2NvcGUubWF4U2l6ZSA9IDU7XG4gICAgJHNjb3BlLnNldFBhZ2UgPSBmdW5jdGlvbihwYWdlTm8pIHtcbiAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFBhZ2UgPSBwYWdlTm87XG4gICAgfTtcbiAgICAkc2NvcGUuYmlnVG90YWxJdGVtcyA9IDE3NTtcbiAgICByZXR1cm4gJHNjb3BlLmJpZ0N1cnJlbnRQYWdlID0gMTtcbiAgfVxuXSkuY29udHJvbGxlcignVGFic0RlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLnRhYnMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkR5bmFtaWMgVGl0bGUgMVwiLFxuICAgICAgICBjb250ZW50OiBcIkR5bmFtaWMgY29udGVudCAxLiAgQ29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmloaWwsIHF1aWRlbSwgb2ZmaWNpaXMsIGV0IGV4IGxhdWRhbnRpdW0gc2VkIGN1cGlkaXRhdGUgdm9sdXB0YXR1bSBsaWJlcm8gbm9iaXMgc2l0IGlsbHVtIHZvbHVwdGF0ZXMgYmVhdGFlIGFiLiBBZCwgcmVwZWxsZW5kdXMgbm9uIHNlcXVpIGV0IGF0LlwiXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiBcIkRpc2FibGVkXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRHluYW1pYyBjb250ZW50IDIuICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmloaWwsIHF1aWRlbSwgb2ZmaWNpaXMsIGV0IGV4IGxhdWRhbnRpdW0gc2VkIGN1cGlkaXRhdGUgdm9sdXB0YXR1bSBsaWJlcm8gbm9iaXMgc2l0IGlsbHVtIHZvbHVwdGF0ZXMgYmVhdGFlIGFiLiBBZCwgcmVwZWxsZW5kdXMgbm9uIHNlcXVpIGV0IGF0LlwiLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfVxuICAgIF07XG4gICAgcmV0dXJuICRzY29wZS5uYXZUeXBlID0gXCJwaWxsc1wiO1xuICB9XG5dKS5jb250cm9sbGVyKCdUcmVlRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUubGlzdCA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gMVwiLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gMlwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyMSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4xXCIsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIxMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMS4xXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMjEyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4xLjJcIixcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAyMixcbiAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4yXCIsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIyMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMi4xXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMjIyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4yLjJcIixcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSwge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgdGl0bGU6IFwiSXRlbSAzXCIsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSwge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgdGl0bGU6IFwiSXRlbSA0XCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQxLFxuICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSA0LjFcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSwge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgdGl0bGU6IFwiSXRlbSA1XCIsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSwge1xuICAgICAgICBpZDogNixcbiAgICAgICAgdGl0bGU6IFwiSXRlbSA2XCIsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSwge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgdGl0bGU6IFwiSXRlbSA3XCIsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLnNlbGVjdGVkSXRlbSA9IHt9O1xuICAgICRzY29wZS5vcHRpb25zID0ge307XG4gICAgJHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICBzY29wZS5yZW1vdmUoKTtcbiAgICB9O1xuICAgICRzY29wZS50b2dnbGUgPSBmdW5jdGlvbihzY29wZSkge1xuICAgICAgc2NvcGUudG9nZ2xlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLm5ld1N1Ykl0ZW0gPSBmdW5jdGlvbihzY29wZSkge1xuICAgICAgdmFyIG5vZGVEYXRhO1xuICAgICAgbm9kZURhdGEgPSBzY29wZS4kbW9kZWxWYWx1ZTtcbiAgICAgIG5vZGVEYXRhLml0ZW1zLnB1c2goe1xuICAgICAgICBpZDogbm9kZURhdGEuaWQgKiAxMCArIG5vZGVEYXRhLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgdGl0bGU6IG5vZGVEYXRhLnRpdGxlICsgXCIuXCIgKyAobm9kZURhdGEuaXRlbXMubGVuZ3RoICsgMSksXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignTWFwRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCAnJGh0dHAnLCAnJGludGVydmFsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgJGludGVydmFsKSB7XG4gICAgdmFyIGksIG1hcmtlcnM7XG4gICAgbWFya2VycyA9IFtdO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgOCkge1xuICAgICAgbWFya2Vyc1tpXSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICB0aXRsZTogXCJNYXJrZXI6IFwiICsgaVxuICAgICAgfSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgICRzY29wZS5HZW5lcmF0ZU1hcE1hcmtlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkLCBsYXQsIGxuZywgbG9jLCBudW1NYXJrZXJzO1xuICAgICAgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAkc2NvcGUuZGF0ZSA9IGQudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgIG51bU1hcmtlcnMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDQ7XG4gICAgICBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgbnVtTWFya2Vycykge1xuICAgICAgICBsYXQgPSA0My42NjAwMDAwICsgKE1hdGgucmFuZG9tKCkgLyAxMDApO1xuICAgICAgICBsbmcgPSAtNzkuNDEwMzAwMCArIChNYXRoLnJhbmRvbSgpIC8gMTAwKTtcbiAgICAgICAgbG9jID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyk7XG4gICAgICAgIG1hcmtlcnNbaV0uc2V0UG9zaXRpb24obG9jKTtcbiAgICAgICAgbWFya2Vyc1tpXS5zZXRNYXAoJHNjb3BlLm1hcCk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9O1xuICAgICRpbnRlcnZhbCgkc2NvcGUuR2VuZXJhdGVNYXBNYXJrZXJzLCAyMDAwKTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLnVpLmRpcmVjdGl2ZXMnLCBbXSkuZGlyZWN0aXZlKCd1aVRpbWUnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSkge1xuICAgICAgICB2YXIgY2hlY2tUaW1lLCBzdGFydFRpbWU7XG4gICAgICAgIHN0YXJ0VGltZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBoLCBtLCBzLCB0LCB0aW1lLCB0b2RheTtcbiAgICAgICAgICB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgaCA9IHRvZGF5LmdldEhvdXJzKCk7XG4gICAgICAgICAgbSA9IHRvZGF5LmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICBzID0gdG9kYXkuZ2V0U2Vjb25kcygpO1xuICAgICAgICAgIG0gPSBjaGVja1RpbWUobSk7XG4gICAgICAgICAgcyA9IGNoZWNrVGltZShzKTtcbiAgICAgICAgICB0aW1lID0gaCArIFwiOlwiICsgbSArIFwiOlwiICsgcztcbiAgICAgICAgICBlbGUuaHRtbCh0aW1lKTtcbiAgICAgICAgICByZXR1cm4gdCA9IHNldFRpbWVvdXQoc3RhcnRUaW1lLCA1MDApO1xuICAgICAgICB9O1xuICAgICAgICBjaGVja1RpbWUgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgaWYgKGkgPCAxMCkge1xuICAgICAgICAgICAgaSA9IFwiMFwiICsgaTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdGFydFRpbWUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ3VpV2VhdGhlcicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgY29sb3IsIGljb24sIHNreWNvbnM7XG4gICAgICAgIGNvbG9yID0gYXR0cnMuY29sb3I7XG4gICAgICAgIGljb24gPSBTa3ljb25zW2F0dHJzLmljb25dO1xuICAgICAgICBza3ljb25zID0gbmV3IFNreWNvbnMoe1xuICAgICAgICAgIFwiY29sb3JcIjogY29sb3IsXG4gICAgICAgICAgXCJyZXNpemVDbGVhclwiOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBza3ljb25zLmFkZChlbGVbMF0sIGljb24pO1xuICAgICAgICByZXR1cm4gc2t5Y29ucy5wbGF5KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLnVpLnNlcnZpY2VzJywgW10pLmZhY3RvcnkoJ2xvZ2dlcicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxvZ0l0O1xuICAgIHRvYXN0ci5vcHRpb25zID0ge1xuICAgICAgXCJjbG9zZUJ1dHRvblwiOiB0cnVlLFxuICAgICAgXCJwb3NpdGlvbkNsYXNzXCI6IFwidG9hc3QtYm90dG9tLXJpZ2h0XCIsXG4gICAgICBcInRpbWVPdXRcIjogXCIzMDAwXCJcbiAgICB9O1xuICAgIGxvZ0l0ID0gZnVuY3Rpb24obWVzc2FnZSwgdHlwZSkge1xuICAgICAgcmV0dXJuIHRvYXN0clt0eXBlXShtZXNzYWdlKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBsb2c6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgbG9nSXQobWVzc2FnZSwgJ2luZm8nKTtcbiAgICAgIH0sXG4gICAgICBsb2dXYXJuaW5nOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIGxvZ0l0KG1lc3NhZ2UsICd3YXJuaW5nJyk7XG4gICAgICB9LFxuICAgICAgbG9nU3VjY2VzczogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBsb2dJdChtZXNzYWdlLCAnc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGxvZ0Vycm9yOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIGxvZ0l0KG1lc3NhZ2UsICdlcnJvcicpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcC5kaXJlY3RpdmVzJywgW10pLmRpcmVjdGl2ZSgnaW1nSG9sZGVyJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHJldHVybiBIb2xkZXIucnVuKHtcbiAgICAgICAgICBpbWFnZXM6IGVsZVswXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ2N1c3RvbUJhY2tncm91bmQnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogXCJBXCIsXG4gICAgY29udHJvbGxlcjogW1xuICAgICAgJyRzY29wZScsICckZWxlbWVudCcsICckbG9jYXRpb24nLCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkbG9jYXRpb24pIHtcbiAgICAgICAgdmFyIGFkZEJnLCBwYXRoO1xuICAgICAgICBwYXRoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICRsb2NhdGlvbi5wYXRoKCk7XG4gICAgICAgIH07XG4gICAgICAgIGFkZEJnID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKCdib2R5LWhvbWUgYm9keS1zcGVjaWFsIGJvZHktdGFza3MgYm9keS1sb2NrJyk7XG4gICAgICAgICAgc3dpdGNoIChwYXRoKSB7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50LmFkZENsYXNzKCdib2R5LWhvbWUnKTtcbiAgICAgICAgICAgIGNhc2UgJy80MDQnOlxuICAgICAgICAgICAgY2FzZSAnL3BhZ2VzLzUwMCc6XG4gICAgICAgICAgICBjYXNlICcvcGFnZXMvc2lnbmluJzpcbiAgICAgICAgICAgIGNhc2UgJy9wYWdlcy9zaWdudXAnOlxuICAgICAgICAgICAgY2FzZSAnL3BhZ2VzL2ZvcmdvdCc6XG4gICAgICAgICAgICAgIHJldHVybiAkZWxlbWVudC5hZGRDbGFzcygnYm9keS1zcGVjaWFsJyk7XG4gICAgICAgICAgICBjYXNlICcvcGFnZXMvbG9jay1zY3JlZW4nOlxuICAgICAgICAgICAgICByZXR1cm4gJGVsZW1lbnQuYWRkQ2xhc3MoJ2JvZHktc3BlY2lhbCBib2R5LWxvY2snKTtcbiAgICAgICAgICAgIGNhc2UgJy90YXNrcyc6XG4gICAgICAgICAgICAgIHJldHVybiAkZWxlbWVudC5hZGRDbGFzcygnYm9keS10YXNrcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYWRkQmcoJGxvY2F0aW9uLnBhdGgoKSk7XG4gICAgICAgIHJldHVybiAkc2NvcGUuJHdhdGNoKHBhdGgsIGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gb2xkVmFsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhZGRCZygkbG9jYXRpb24ucGF0aCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgXVxuICB9O1xufSkuZGlyZWN0aXZlKCd1aUNvbG9yU3dpdGNoJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHJldHVybiBlbGUuZmluZCgnLmNvbG9yLW9wdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgdmFyICR0aGlzLCBocmVmVXJsLCBzdHlsZTtcbiAgICAgICAgICAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgaHJlZlVybCA9IHZvaWQgMDtcbiAgICAgICAgICBzdHlsZSA9ICR0aGlzLmRhdGEoJ3N0eWxlJyk7XG4gICAgICAgICAgaWYgKHN0eWxlID09PSAnbG91bG91Jykge1xuICAgICAgICAgICAgaHJlZlVybCA9ICdzdHlsZXMvbWFpbi5jc3MnO1xuICAgICAgICAgICAgJCgnbGlua1tocmVmXj1cInN0eWxlcy9tYWluXCJdJykuYXR0cignaHJlZicsIGhyZWZVcmwpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgIHN0eWxlID0gJy0nICsgc3R5bGU7XG4gICAgICAgICAgICBocmVmVXJsID0gJ3N0eWxlcy9tYWluJyArIHN0eWxlICsgJy5jc3MnO1xuICAgICAgICAgICAgJCgnbGlua1tocmVmXj1cInN0eWxlcy9tYWluXCJdJykuYXR0cignaHJlZicsIGhyZWZVcmwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ3RvZ2dsZU1pbk5hdicsIFtcbiAgJyRyb290U2NvcGUnLCBmdW5jdGlvbigkcm9vdFNjb3BlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgJGNvbnRlbnQsICRuYXYsICR3aW5kb3csIFRpbWVyLCBhcHAsIHVwZGF0ZUNsYXNzO1xuICAgICAgICBhcHAgPSAkKCcjYXBwJyk7XG4gICAgICAgICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gICAgICAgICRuYXYgPSAkKCcjbmF2LWNvbnRhaW5lcicpO1xuICAgICAgICAkY29udGVudCA9ICQoJyNjb250ZW50Jyk7XG4gICAgICAgIGVsZS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGFwcC5oYXNDbGFzcygnbmF2LW1pbicpKSB7XG4gICAgICAgICAgICBhcHAucmVtb3ZlQ2xhc3MoJ25hdi1taW4nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwLmFkZENsYXNzKCduYXYtbWluJyk7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ21pbk5hdjplbmFibGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBUaW1lciA9IHZvaWQgMDtcbiAgICAgICAgdXBkYXRlQ2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgd2lkdGg7XG4gICAgICAgICAgd2lkdGggPSAkd2luZG93LndpZHRoKCk7XG4gICAgICAgICAgaWYgKHdpZHRoIDwgNzY4KSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwLnJlbW92ZUNsYXNzKCduYXYtbWluJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gJHdpbmRvdy5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICAgIHJldHVybiB0ID0gc2V0VGltZW91dCh1cGRhdGVDbGFzcywgMzAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdjb2xsYXBzZU5hdicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgJGEsICRhUmVzdCwgJGxpc3RzLCAkbGlzdHNSZXN0LCBhcHA7XG4gICAgICAgICRsaXN0cyA9IGVsZS5maW5kKCd1bCcpLnBhcmVudCgnbGknKTtcbiAgICAgICAgJGxpc3RzLmFwcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1yaWdodCBpY29uLWhhcy11bFwiPjwvaT4nKTtcbiAgICAgICAgJGEgPSAkbGlzdHMuY2hpbGRyZW4oJ2EnKTtcbiAgICAgICAgJGxpc3RzUmVzdCA9IGVsZS5jaGlsZHJlbignbGknKS5ub3QoJGxpc3RzKTtcbiAgICAgICAgJGFSZXN0ID0gJGxpc3RzUmVzdC5jaGlsZHJlbignYScpO1xuICAgICAgICBhcHAgPSAkKCcjYXBwJyk7XG4gICAgICAgICRhLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgdmFyICRwYXJlbnQsICR0aGlzO1xuICAgICAgICAgIGlmIChhcHAuaGFzQ2xhc3MoJ25hdi1taW4nKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgJHBhcmVudCA9ICR0aGlzLnBhcmVudCgnbGknKTtcbiAgICAgICAgICAkbGlzdHMubm90KCRwYXJlbnQpLnJlbW92ZUNsYXNzKCdvcGVuJykuZmluZCgndWwnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgJHBhcmVudC50b2dnbGVDbGFzcygnb3BlbicpLmZpbmQoJ3VsJykuc3RvcCgpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkYVJlc3Qub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gJGxpc3RzLnJlbW92ZUNsYXNzKCdvcGVuJykuZmluZCgndWwnKS5zbGlkZVVwKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2NvcGUuJG9uKCdtaW5OYXY6ZW5hYmxlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuICRsaXN0cy5yZW1vdmVDbGFzcygnb3BlbicpLmZpbmQoJ3VsJykuc2xpZGVVcCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ2hpZ2hsaWdodEFjdGl2ZScsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICAgIGNvbnRyb2xsZXI6IFtcbiAgICAgICAgJyRzY29wZScsICckZWxlbWVudCcsICckYXR0cnMnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkbG9jYXRpb24pIHtcbiAgICAgICAgICB2YXIgaGlnaGxpZ2h0QWN0aXZlLCBsaW5rcywgcGF0aDtcbiAgICAgICAgICBsaW5rcyA9ICRlbGVtZW50LmZpbmQoJ2EnKTtcbiAgICAgICAgICBwYXRoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJGxvY2F0aW9uLnBhdGgoKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGhpZ2hsaWdodEFjdGl2ZSA9IGZ1bmN0aW9uKGxpbmtzLCBwYXRoKSB7XG4gICAgICAgICAgICBwYXRoID0gJyMnICsgcGF0aDtcbiAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmZvckVhY2gobGlua3MsIGZ1bmN0aW9uKGxpbmspIHtcbiAgICAgICAgICAgICAgdmFyICRsaSwgJGxpbmssIGhyZWY7XG4gICAgICAgICAgICAgICRsaW5rID0gYW5ndWxhci5lbGVtZW50KGxpbmspO1xuICAgICAgICAgICAgICAkbGkgPSAkbGluay5wYXJlbnQoJ2xpJyk7XG4gICAgICAgICAgICAgIGhyZWYgPSAkbGluay5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgIGlmICgkbGkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgJGxpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKGhyZWYpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRsaS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgaGlnaGxpZ2h0QWN0aXZlKGxpbmtzLCAkbG9jYXRpb24ucGF0aCgpKTtcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLiR3YXRjaChwYXRoLCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gb2xkVmFsKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoaWdobGlnaHRBY3RpdmUobGlua3MsICRsb2NhdGlvbi5wYXRoKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCd0b2dnbGVPZmZDYW52YXMnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgcmV0dXJuIGVsZS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJCgnI2FwcCcpLnRvZ2dsZUNsYXNzKCdvbi1jYW52YXMnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdzbGltU2Nyb2xsJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHJldHVybiBlbGUuc2xpbVNjcm9sbCh7XG4gICAgICAgICAgaGVpZ2h0OiBhdHRycy5zY3JvbGxIZWlnaHQgfHwgJzEwMCUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnZ29CYWNrJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgICAgY29udHJvbGxlcjogW1xuICAgICAgICAnJHNjb3BlJywgJyRlbGVtZW50JywgJyR3aW5kb3cnLCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkd2luZG93KSB7XG4gICAgICAgICAgcmV0dXJuICRlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICR3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAubG9jYWxpemF0aW9uJywgW10pLmZhY3RvcnkoJ2xvY2FsaXplJywgW1xuICAnJGh0dHAnLCAnJHJvb3RTY29wZScsICckd2luZG93JywgZnVuY3Rpb24oJGh0dHAsICRyb290U2NvcGUsICR3aW5kb3cpIHtcbiAgICB2YXIgbG9jYWxpemU7XG4gICAgbG9jYWxpemUgPSB7XG4gICAgICBsYW5ndWFnZTogJycsXG4gICAgICB1cmw6IHZvaWQgMCxcbiAgICAgIHJlc291cmNlRmlsZUxvYWRlZDogZmFsc2UsXG4gICAgICBzdWNjZXNzQ2FsbGJhY2s6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgbG9jYWxpemUuZGljdGlvbmFyeSA9IGRhdGE7XG4gICAgICAgIGxvY2FsaXplLnJlc291cmNlRmlsZUxvYWRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2xvY2FsaXplUmVzb3VyY2VzVXBkYXRlZCcpO1xuICAgICAgfSxcbiAgICAgIHNldExhbmd1YWdlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBsb2NhbGl6ZS5sYW5ndWFnZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCItXCIpWzBdO1xuICAgICAgICByZXR1cm4gbG9jYWxpemUuaW5pdExvY2FsaXplZFJlc291cmNlcygpO1xuICAgICAgfSxcbiAgICAgIHNldFVybDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgbG9jYWxpemUudXJsID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5pbml0TG9jYWxpemVkUmVzb3VyY2VzKCk7XG4gICAgICB9LFxuICAgICAgYnVpbGRVcmw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWxvY2FsaXplLmxhbmd1YWdlKSB7XG4gICAgICAgICAgbG9jYWxpemUubGFuZ3VhZ2UgPSAoJHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8ICR3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGxvY2FsaXplLmxhbmd1YWdlID0gbG9jYWxpemUubGFuZ3VhZ2Uuc3BsaXQoXCItXCIpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnaTE4bi9yZXNvdXJjZXMtbG9jYWxlXycgKyBsb2NhbGl6ZS5sYW5ndWFnZSArICcuanMnO1xuICAgICAgfSxcbiAgICAgIGluaXRMb2NhbGl6ZWRSZXNvdXJjZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdXJsO1xuICAgICAgICB1cmwgPSBsb2NhbGl6ZS51cmwgfHwgbG9jYWxpemUuYnVpbGRVcmwoKTtcbiAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgY2FjaGU6IGZhbHNlXG4gICAgICAgIH0pLnN1Y2Nlc3MobG9jYWxpemUuc3VjY2Vzc0NhbGxiYWNrKS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdsb2NhbGl6ZVJlc291cmNlc1VwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0TG9jYWxpemVkU3RyaW5nOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0LCB2YWx1ZUxvd2VyQ2FzZTtcbiAgICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICBpZiAobG9jYWxpemUuZGljdGlvbmFyeSAmJiB2YWx1ZSkge1xuICAgICAgICAgIHZhbHVlTG93ZXJDYXNlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZiAobG9jYWxpemUuZGljdGlvbmFyeVt2YWx1ZUxvd2VyQ2FzZV0gPT09ICcnKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gbG9jYWxpemUuZGljdGlvbmFyeVt2YWx1ZUxvd2VyQ2FzZV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gbG9jYWxpemU7XG4gIH1cbl0pLmRpcmVjdGl2ZSgnaTE4bicsIFtcbiAgJ2xvY2FsaXplJywgZnVuY3Rpb24obG9jYWxpemUpIHtcbiAgICB2YXIgaTE4bkRpcmVjdGl2ZTtcbiAgICBpMThuRGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6IFwiRUFcIixcbiAgICAgIHVwZGF0ZVRleHQ6IGZ1bmN0aW9uKGVsZSwgaW5wdXQsIHBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGlucHV0ID09PSAnaTE4bi1wbGFjZWhvbGRlcicpIHtcbiAgICAgICAgICByZXN1bHQgPSBsb2NhbGl6ZS5nZXRMb2NhbGl6ZWRTdHJpbmcocGxhY2Vob2xkZXIpO1xuICAgICAgICAgIHJldHVybiBlbGUuYXR0cigncGxhY2Vob2xkZXInLCByZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0Lmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgcmVzdWx0ID0gbG9jYWxpemUuZ2V0TG9jYWxpemVkU3RyaW5nKGlucHV0KTtcbiAgICAgICAgICByZXR1cm4gZWxlLnRleHQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHNjb3BlLiRvbignbG9jYWxpemVSZXNvdXJjZXNVcGRhdGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGkxOG5EaXJlY3RpdmUudXBkYXRlVGV4dChlbGUsIGF0dHJzLmkxOG4sIGF0dHJzLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhdHRycy4kb2JzZXJ2ZSgnaTE4bicsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGkxOG5EaXJlY3RpdmUudXBkYXRlVGV4dChlbGUsIHZhbHVlLCBhdHRycy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGkxOG5EaXJlY3RpdmU7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ0xhbmdDdHJsJywgW1xuICAnJHNjb3BlJywgJ2xvY2FsaXplJywgZnVuY3Rpb24oJHNjb3BlLCBsb2NhbGl6ZSkge1xuICAgICRzY29wZS5sYW5nID0gJ0VuZ2xpc2gnO1xuICAgICRzY29wZS5zZXRMYW5nID0gZnVuY3Rpb24obGFuZykge1xuICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgIGNhc2UgJ0VuZ2xpc2gnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdFTi1VUycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFc3Bhw7FvbCc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ0VTLUVTJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ+aXpeacrOiqnic6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ0pBLUpQJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ+S4reaWhyc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ1pILVRXJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0RldXRzY2gnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdERS1ERScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmcmFuw6dhaXMnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdGUi1GUicpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdJdGFsaWFubyc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ0lULUlUJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BvcnR1Z2FsJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnUFQtQlInKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAn0KDRg9GB0YHQutC40Lkg0Y/Qt9GL0LonOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdSVS1SVScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICftlZzqta3slrQnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdLTy1LUicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICRzY29wZS5sYW5nID0gbGFuZztcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuZ2V0RmxhZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxhbmc7XG4gICAgICBsYW5nID0gJHNjb3BlLmxhbmc7XG4gICAgICBzd2l0Y2ggKGxhbmcpIHtcbiAgICAgICAgY2FzZSAnRW5nbGlzaCc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1hbWVyaWNhbic7XG4gICAgICAgIGNhc2UgJ0VzcGHDsW9sJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLXNwYWluJztcbiAgICAgICAgY2FzZSAn5pel5pys6KqeJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWphcGFuJztcbiAgICAgICAgY2FzZSAn5Lit5paHJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWNoaW5hJztcbiAgICAgICAgY2FzZSAnRGV1dHNjaCc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1nZXJtYW55JztcbiAgICAgICAgY2FzZSAnZnJhbsOnYWlzJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWZyYW5jZSc7XG4gICAgICAgIGNhc2UgJ0l0YWxpYW5vJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWl0YWx5JztcbiAgICAgICAgY2FzZSAnUG9ydHVnYWwnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtcG9ydHVnYWwnO1xuICAgICAgICBjYXNlICfQoNGD0YHRgdC60LjQuSDRj9C30YvQuic6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1ydXNzaWEnO1xuICAgICAgICBjYXNlICftlZzqta3slrQnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3Mta29yZWEnO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKS5jb250cm9sbGVyKCdBcHBDdHJsJywgW1xuICAnJHNjb3BlJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uKCRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICAgJHNjb3BlLmlzU3BlY2lmaWNQYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcGF0aDtcbiAgICAgIHBhdGggPSAkbG9jYXRpb24ucGF0aCgpO1xuICAgICAgcmV0dXJuIF8uY29udGFpbnMoWycvNDA0JywgJy9wYWdlcy81MDAnLCAnL3BhZ2VzL2xvZ2luJywgJy9wYWdlcy9zaWduaW4nLCAnL3BhZ2VzL3NpZ25pbjEnLCAnL3BhZ2VzL3NpZ25pbjInLCAnL3BhZ2VzL3NpZ251cCcsICcvcGFnZXMvc2lnbnVwMScsICcvcGFnZXMvc2lnbnVwMicsICcvcGFnZXMvZm9yZ290JywgJy9wYWdlcy9sb2NrLXNjcmVlbiddLCBwYXRoKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUubWFpbiA9IHtcbiAgICAgIGJyYW5kOiAnSW50cmFuZXQnLFxuICAgICAgbmFtZTogJ0FuZHJlcyBEYXZpZCBKaW1lbmV6JyxcbiAgICAgIGxvZ286ICdpbWcvbG9nby5wbmcnXG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignTmF2Q3RybCcsIFtcbiAgJyRzY29wZScsICd0YXNrU3RvcmFnZScsICdmaWx0ZXJGaWx0ZXInLCBmdW5jdGlvbigkc2NvcGUsIHRhc2tTdG9yYWdlLCBmaWx0ZXJGaWx0ZXIpIHtcbiAgICB2YXIgdGFza3M7XG4gICAgdGFza3MgPSAkc2NvcGUudGFza3MgPSB0YXNrU3RvcmFnZS5nZXQoKTtcbiAgICAkc2NvcGUudGFza1JlbWFpbmluZ0NvdW50ID0gZmlsdGVyRmlsdGVyKHRhc2tzLCB7XG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSkubGVuZ3RoO1xuICAgIHJldHVybiAkc2NvcGUuJG9uKCd0YXNrUmVtYWluaW5nOmNoYW5nZWQnLCBmdW5jdGlvbihldmVudCwgY291bnQpIHtcbiAgICAgIHJldHVybiAkc2NvcGUudGFza1JlbWFpbmluZ0NvdW50ID0gY291bnQ7XG4gICAgfSk7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge31dKS5jb250cm9sbGVyKCdNb2RhbEFnZW5kYUN0cmwnLCBbXG4gICckc2NvcGUnLCAnJG1vZGFsJywgJyRsb2cnLCBmdW5jdGlvbigkc2NvcGUsICRtb2RhbCwgJGxvZykge1xuICAgICRzY29wZS5pdGVtcyA9IFtcIml0ZW0xXCIsIFwiaXRlbTJcIiwgXCJpdGVtM1wiXTtcbiAgICAkc2NvcGUuY29udGFjdHMgPSBbXTtcbiAgICAkc2NvcGUuc2F2ZUNvbnRhY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpO1xuICAgICAgaWYgKCRzY29wZS5uZXdjb250YWN0LmlkID09PSBudWxsKSB7XG4gICAgICAgICRzY29wZS5uZXdjb250YWN0LmlkID0gdWlkKys7XG4gICAgICAgICRzY29wZS5jb250YWN0cy5wdXNoKCRzY29wZS5uZXdjb250YWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSBpbiAkc2NvcGUuY29udGFjdHMpIHtcbiAgICAgICAgICBpZiAoJHNjb3BlLmNvbnRhY3RzW2ldLmlkID09PSAkc2NvcGUubmV3Y29udGFjdC5pZCkge1xuICAgICAgICAgICAgJHNjb3BlLmNvbnRhY3RzW2ldID0gJHNjb3BlLm5ld2NvbnRhY3Q7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkc2NvcGUubmV3Y29udGFjdCA9IHt9O1xuICAgIH07XG4gICAgJHNjb3BlW1wiZGVsZXRlXCJdID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yIChpIGluICRzY29wZS5jb250YWN0cykge1xuICAgICAgICBpZiAoJHNjb3BlLmNvbnRhY3RzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICRzY29wZS5jb250YWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgJHNjb3BlLm5ld2NvbnRhY3QgPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmVkaXQgPSBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IgKGkgaW4gJHNjb3BlLmNvbnRhY3RzKSB7XG4gICAgICAgIGlmICgkc2NvcGUuY29udGFjdHNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgJHNjb3BlLm5ld2NvbnRhY3QgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmNvbnRhY3RzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtb2RhbEluc3RhbmNlO1xuICAgICAgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwibXlNb2RhbENvbnRlbnQuaHRtbFwiLFxuICAgICAgICBjb250cm9sbGVyOiAnTW9kYWxJbnN0YW5jZUN0cmwnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgaXRlbXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRzY29wZS5pdGVtcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbigoZnVuY3Rpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICRzY29wZS5zZWxlY3RlZCA9IHNlbGVjdGVkSXRlbTtcbiAgICAgIH0pLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvZy5pbmZvKFwiTW9kYWwgZGlzbWlzc2VkIGF0OiBcIiArIG5ldyBEYXRlKCkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
