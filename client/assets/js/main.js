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
angular.module('app.page.ctrls', []).controller('invoiceCtrl', [
  '$scope', '$window', function($scope, $window) {
    return $scope.printInvoice = function() {
      var originalContents, popupWin, printContents;
      printContents = document.getElementById('invoice').innerHTML;
      originalContents = document.body.innerHTML;
      popupWin = window.open();
      popupWin.document.open();
      popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">" + printContents + "</html>');
      return popupWin.document.close();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIlVJL1VJQ3RybC5qcyIsIlVJL1VJRGlyZWN0aXZlLmpzIiwiVUkvVUlTZXJ2aWNlLmpzIiwiUGFnZS9QYWdlQ3RybC5qcyIsInNoYXJlZC9kaXJlY3RpdmVzLmpzIiwic2hhcmVkL2xvY2FsaXplLmpzIiwic2hhcmVkL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1JvdXRlJywgJ25nQW5pbWF0ZScsICd1aS5ib290c3RyYXAnLCAndGV4dEFuZ3VsYXInLCAnYXBwLnVpLmN0cmxzJywgJ2FwcC51aS5kaXJlY3RpdmVzJywgJ2FwcC51aS5zZXJ2aWNlcycsICdhcHAuY29udHJvbGxlcnMnLCAnYXBwLnBhZ2UuY3RybHMnXSkuY29uZmlnKFtcbiAgJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgICByZXR1cm4gJHJvdXRlUHJvdmlkZXIud2hlbignLycsIHtcbiAgICAgIHJlZGlyZWN0VG86ICcvaW5pY2lvJ1xuICAgIH0pLndoZW4oJy9pbmljaW8nLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2luaWNpby5odG1sJ1xuICAgIH0pLndoZW4oJy9kYXNoYm9hcmQxJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9kYXNoYm9hcmQxLmh0bWwnXG4gICAgfSkud2hlbignLzQwNCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvNDA0Lmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzLzUwMCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvNTAwLmh0bWwnXG4gICAgfSkub3RoZXJ3aXNlKHtcbiAgICAgIHJlZGlyZWN0VG86ICcvNDA0J1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbigkaW50ZXJwb2xhdGVQcm92aWRlcikge1xuICAgICRpbnRlcnBvbGF0ZVByb3ZpZGVyLnN0YXJ0U3ltYm9sKFwie1t7XCIpO1xuICAgIHJldHVybiAkaW50ZXJwb2xhdGVQcm92aWRlci5lbmRTeW1ib2woXCJ9XX1cIik7XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC51aS5jdHJscycsIFtdKS5jb250cm9sbGVyKCdOb3RpZnlDdHJsJywgW1xuICAnJHNjb3BlJywgJ2xvZ2dlcicsIGZ1bmN0aW9uKCRzY29wZSwgbG9nZ2VyKSB7XG4gICAgcmV0dXJuICRzY29wZS5ub3RpZnkgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2coXCJIZWFkcyB1cCEgVGhpcyBhbGVydCBuZWVkcyB5b3VyIGF0dGVudGlvbiwgYnV0IGl0J3Mgbm90IHN1cGVyIGltcG9ydGFudC5cIik7XG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgIHJldHVybiBsb2dnZXIubG9nU3VjY2VzcyhcIldlbGwgZG9uZSEgWW91IHN1Y2Nlc3NmdWxseSByZWFkIHRoaXMgaW1wb3J0YW50IGFsZXJ0IG1lc3NhZ2UuXCIpO1xuICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZ1dhcm5pbmcoXCJXYXJuaW5nISBCZXN0IGNoZWNrIHlvIHNlbGYsIHlvdSdyZSBub3QgbG9va2luZyB0b28gZ29vZC5cIik7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZ0Vycm9yKFwiT2ggc25hcCEgQ2hhbmdlIGEgZmV3IHRoaW5ncyB1cCBhbmQgdHJ5IHN1Ym1pdHRpbmcgYWdhaW4uXCIpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ0FsZXJ0RGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUuYWxlcnRzID0gW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIG1zZzogJ1dlbGwgZG9uZSEgWW91IHN1Y2Nlc3NmdWxseSByZWFkIHRoaXMgaW1wb3J0YW50IGFsZXJ0IG1lc3NhZ2UuJ1xuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgIG1zZzogJ0hlYWRzIHVwISBUaGlzIGFsZXJ0IG5lZWRzIHlvdXIgYXR0ZW50aW9uLCBidXQgaXQgaXMgbm90IHN1cGVyIGltcG9ydGFudC4nXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgbXNnOiBcIldhcm5pbmchIEJlc3QgY2hlY2sgeW8gc2VsZiwgeW91J3JlIG5vdCBsb29raW5nIHRvbyBnb29kLlwiXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICBtc2c6ICdPaCBzbmFwISBDaGFuZ2UgYSBmZXcgdGhpbmdzIHVwIGFuZCB0cnkgc3VibWl0dGluZyBhZ2Fpbi4nXG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuYWRkQWxlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBudW0sIHR5cGU7XG4gICAgICBudW0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgdHlwZSA9IHZvaWQgMDtcbiAgICAgIHN3aXRjaCAobnVtKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0eXBlID0gJ2luZm8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdHlwZSA9ICdzdWNjZXNzJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHR5cGUgPSAnaW5mbyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0eXBlID0gJ3dhcm5pbmcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdHlwZSA9ICdkYW5nZXInO1xuICAgICAgfVxuICAgICAgcmV0dXJuICRzY29wZS5hbGVydHMucHVzaCh7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIG1zZzogXCJBbm90aGVyIGFsZXJ0IVwiXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuY2xvc2VBbGVydCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmFsZXJ0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ1Byb2dyZXNzRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUubWF4ID0gMjAwO1xuICAgICRzY29wZS5yYW5kb20gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0eXBlLCB2YWx1ZTtcbiAgICAgIHZhbHVlID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxMCk7XG4gICAgICB0eXBlID0gdm9pZCAwO1xuICAgICAgaWYgKHZhbHVlIDwgMjUpIHtcbiAgICAgICAgdHlwZSA9IFwic3VjY2Vzc1wiO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDUwKSB7XG4gICAgICAgIHR5cGUgPSBcImluZm9cIjtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCA3NSkge1xuICAgICAgICB0eXBlID0gXCJ3YXJuaW5nXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gXCJkYW5nZXJcIjtcbiAgICAgIH1cbiAgICAgICRzY29wZS5zaG93V2FybmluZyA9IHR5cGUgPT09IFwiZGFuZ2VyXCIgfHwgdHlwZSA9PT0gXCJ3YXJuaW5nXCI7XG4gICAgICAkc2NvcGUuZHluYW1pYyA9IHZhbHVlO1xuICAgICAgJHNjb3BlLnR5cGUgPSB0eXBlO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5yYW5kb20oKTtcbiAgfVxuXSkuY29udHJvbGxlcignQWNjb3JkaW9uRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUub25lQXRBVGltZSA9IHRydWU7XG4gICAgJHNjb3BlLmdyb3VwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRHluYW1pYyBHcm91cCBIZWFkZXIgLSAxXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRHluYW1pYyBHcm91cCBCb2R5IC0gMVwiXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiBcIkR5bmFtaWMgR3JvdXAgSGVhZGVyIC0gMlwiLFxuICAgICAgICBjb250ZW50OiBcIkR5bmFtaWMgR3JvdXAgQm9keSAtIDJcIlxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogXCJEeW5hbWljIEdyb3VwIEhlYWRlciAtIDNcIixcbiAgICAgICAgY29udGVudDogXCJEeW5hbWljIEdyb3VwIEJvZHkgLSAzXCJcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5pdGVtcyA9IFtcIkl0ZW0gMVwiLCBcIkl0ZW0gMlwiLCBcIkl0ZW0gM1wiXTtcbiAgICAkc2NvcGUuc3RhdHVzID0ge1xuICAgICAgaXNGaXJzdE9wZW46IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjE6IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjI6IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjM6IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjQ6IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjU6IHRydWUsXG4gICAgICBpc0ZpcnN0T3BlbjY6IHRydWVcbiAgICB9O1xuICAgICRzY29wZS5hZGRJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbmV3SXRlbU5vO1xuICAgICAgbmV3SXRlbU5vID0gJHNjb3BlLml0ZW1zLmxlbmd0aCArIDE7XG4gICAgICAkc2NvcGUuaXRlbXMucHVzaChcIkl0ZW0gXCIgKyBuZXdJdGVtTm8pO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ0NvbGxhcHNlRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICByZXR1cm4gJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2U7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ01vZGFsRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCAnJG1vZGFsJywgJyRsb2cnLCBmdW5jdGlvbigkc2NvcGUsICRtb2RhbCwgJGxvZykge1xuICAgICRzY29wZS5pdGVtcyA9IFtcIml0ZW0xXCIsIFwiaXRlbTJcIiwgXCJpdGVtM1wiXTtcbiAgICAkc2NvcGUub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1vZGFsSW5zdGFuY2U7XG4gICAgICBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogXCJteU1vZGFsQ29udGVudC5odG1sXCIsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNb2RhbEluc3RhbmNlQ3RybCcsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBpdGVtczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJHNjb3BlLml0ZW1zO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKChmdW5jdGlvbihzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtO1xuICAgICAgfSksIGZ1bmN0aW9uKCkge1xuICAgICAgICAkbG9nLmluZm8oXCJNb2RhbCBkaXNtaXNzZWQgYXQ6IFwiICsgbmV3IERhdGUoKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdNb2RhbEluc3RhbmNlQ3RybCcsIFtcbiAgJyRzY29wZScsICckbW9kYWxJbnN0YW5jZScsICdpdGVtcycsIGZ1bmN0aW9uKCRzY29wZSwgJG1vZGFsSW5zdGFuY2UsIGl0ZW1zKSB7XG4gICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XG4gICAgJHNjb3BlLnNlbGVjdGVkID0ge1xuICAgICAgaXRlbTogJHNjb3BlLml0ZW1zWzBdXG4gICAgfTtcbiAgICAkc2NvcGUub2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKCRzY29wZS5zZWxlY3RlZC5pdGVtKTtcbiAgICB9O1xuICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoXCJjYW5jZWxcIik7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignUGFnaW5hdGlvbkRlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLnRvdGFsSXRlbXMgPSA2NDtcbiAgICAkc2NvcGUuY3VycmVudFBhZ2UgPSA0O1xuICAgICRzY29wZS5tYXhTaXplID0gNTtcbiAgICAkc2NvcGUuc2V0UGFnZSA9IGZ1bmN0aW9uKHBhZ2VObykge1xuICAgICAgcmV0dXJuICRzY29wZS5jdXJyZW50UGFnZSA9IHBhZ2VObztcbiAgICB9O1xuICAgICRzY29wZS5iaWdUb3RhbEl0ZW1zID0gMTc1O1xuICAgIHJldHVybiAkc2NvcGUuYmlnQ3VycmVudFBhZ2UgPSAxO1xuICB9XG5dKS5jb250cm9sbGVyKCdUYWJzRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUudGFicyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRHluYW1pYyBUaXRsZSAxXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRHluYW1pYyBjb250ZW50IDEuICBDb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOaWhpbCwgcXVpZGVtLCBvZmZpY2lpcywgZXQgZXggbGF1ZGFudGl1bSBzZWQgY3VwaWRpdGF0ZSB2b2x1cHRhdHVtIGxpYmVybyBub2JpcyBzaXQgaWxsdW0gdm9sdXB0YXRlcyBiZWF0YWUgYWIuIEFkLCByZXBlbGxlbmR1cyBub24gc2VxdWkgZXQgYXQuXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6IFwiRGlzYWJsZWRcIixcbiAgICAgICAgY29udGVudDogXCJEeW5hbWljIGNvbnRlbnQgMi4gIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOaWhpbCwgcXVpZGVtLCBvZmZpY2lpcywgZXQgZXggbGF1ZGFudGl1bSBzZWQgY3VwaWRpdGF0ZSB2b2x1cHRhdHVtIGxpYmVybyBub2JpcyBzaXQgaWxsdW0gdm9sdXB0YXRlcyBiZWF0YWUgYWIuIEFkLCByZXBlbGxlbmR1cyBub24gc2VxdWkgZXQgYXQuXCIsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9XG4gICAgXTtcbiAgICByZXR1cm4gJHNjb3BlLm5hdlR5cGUgPSBcInBpbGxzXCI7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ1RyZWVEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5saXN0ID0gW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwiSXRlbSAxXCIsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSwge1xuICAgICAgICBpZDogMixcbiAgICAgICAgdGl0bGU6IFwiSXRlbSAyXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIxLFxuICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjFcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMjExLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4xLjFcIixcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyMTIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjEuMlwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDIyLFxuICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjJcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMjIxLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4yLjFcIixcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyMjIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSAyLjIuMlwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICB0aXRsZTogXCJJdGVtIDNcIixcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICB0aXRsZTogXCJJdGVtIDRcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogNDEsXG4gICAgICAgICAgICB0aXRsZTogXCJJdGVtIDQuMVwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICB0aXRsZTogXCJJdGVtIDVcIixcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICB0aXRsZTogXCJJdGVtIDZcIixcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICB0aXRsZTogXCJJdGVtIDdcIixcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuc2VsZWN0ZWRJdGVtID0ge307XG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7fTtcbiAgICAkc2NvcGUucmVtb3ZlID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgIHNjb3BlLnJlbW92ZSgpO1xuICAgIH07XG4gICAgJHNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICBzY29wZS50b2dnbGUoKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUubmV3U3ViSXRlbSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICB2YXIgbm9kZURhdGE7XG4gICAgICBub2RlRGF0YSA9IHNjb3BlLiRtb2RlbFZhbHVlO1xuICAgICAgbm9kZURhdGEuaXRlbXMucHVzaCh7XG4gICAgICAgIGlkOiBub2RlRGF0YS5pZCAqIDEwICsgbm9kZURhdGEuaXRlbXMubGVuZ3RoLFxuICAgICAgICB0aXRsZTogbm9kZURhdGEudGl0bGUgKyBcIi5cIiArIChub2RlRGF0YS5pdGVtcy5sZW5ndGggKyAxKSxcbiAgICAgICAgaXRlbXM6IFtdXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdNYXBEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsICckaHR0cCcsICckaW50ZXJ2YWwnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwLCAkaW50ZXJ2YWwpIHtcbiAgICB2YXIgaSwgbWFya2VycztcbiAgICBtYXJrZXJzID0gW107XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCA4KSB7XG4gICAgICBtYXJrZXJzW2ldID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgIHRpdGxlOiBcIk1hcmtlcjogXCIgKyBpXG4gICAgICB9KTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgJHNjb3BlLkdlbmVyYXRlTWFwTWFya2VycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGQsIGxhdCwgbG5nLCBsb2MsIG51bU1hcmtlcnM7XG4gICAgICBkID0gbmV3IERhdGUoKTtcbiAgICAgICRzY29wZS5kYXRlID0gZC50b0xvY2FsZVN0cmluZygpO1xuICAgICAgbnVtTWFya2VycyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgNDtcbiAgICAgIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBudW1NYXJrZXJzKSB7XG4gICAgICAgIGxhdCA9IDQzLjY2MDAwMDAgKyAoTWF0aC5yYW5kb20oKSAvIDEwMCk7XG4gICAgICAgIGxuZyA9IC03OS40MTAzMDAwICsgKE1hdGgucmFuZG9tKCkgLyAxMDApO1xuICAgICAgICBsb2MgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKTtcbiAgICAgICAgbWFya2Vyc1tpXS5zZXRQb3NpdGlvbihsb2MpO1xuICAgICAgICBtYXJrZXJzW2ldLnNldE1hcCgkc2NvcGUubWFwKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH07XG4gICAgJGludGVydmFsKCRzY29wZS5HZW5lcmF0ZU1hcE1hcmtlcnMsIDIwMDApO1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAudWkuZGlyZWN0aXZlcycsIFtdKS5kaXJlY3RpdmUoJ3VpVGltZScsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlKSB7XG4gICAgICAgIHZhciBjaGVja1RpbWUsIHN0YXJ0VGltZTtcbiAgICAgICAgc3RhcnRUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGgsIG0sIHMsIHQsIHRpbWUsIHRvZGF5O1xuICAgICAgICAgIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBoID0gdG9kYXkuZ2V0SG91cnMoKTtcbiAgICAgICAgICBtID0gdG9kYXkuZ2V0TWludXRlcygpO1xuICAgICAgICAgIHMgPSB0b2RheS5nZXRTZWNvbmRzKCk7XG4gICAgICAgICAgbSA9IGNoZWNrVGltZShtKTtcbiAgICAgICAgICBzID0gY2hlY2tUaW1lKHMpO1xuICAgICAgICAgIHRpbWUgPSBoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzO1xuICAgICAgICAgIGVsZS5odG1sKHRpbWUpO1xuICAgICAgICAgIHJldHVybiB0ID0gc2V0VGltZW91dChzdGFydFRpbWUsIDUwMCk7XG4gICAgICAgIH07XG4gICAgICAgIGNoZWNrVGltZSA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICBpZiAoaSA8IDEwKSB7XG4gICAgICAgICAgICBpID0gXCIwXCIgKyBpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0VGltZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndWlXZWF0aGVyJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciBjb2xvciwgaWNvbiwgc2t5Y29ucztcbiAgICAgICAgY29sb3IgPSBhdHRycy5jb2xvcjtcbiAgICAgICAgaWNvbiA9IFNreWNvbnNbYXR0cnMuaWNvbl07XG4gICAgICAgIHNreWNvbnMgPSBuZXcgU2t5Y29ucyh7XG4gICAgICAgICAgXCJjb2xvclwiOiBjb2xvcixcbiAgICAgICAgICBcInJlc2l6ZUNsZWFyXCI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHNreWNvbnMuYWRkKGVsZVswXSwgaWNvbik7XG4gICAgICAgIHJldHVybiBza3ljb25zLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAudWkuc2VydmljZXMnLCBbXSkuZmFjdG9yeSgnbG9nZ2VyJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgbG9nSXQ7XG4gICAgdG9hc3RyLm9wdGlvbnMgPSB7XG4gICAgICBcImNsb3NlQnV0dG9uXCI6IHRydWUsXG4gICAgICBcInBvc2l0aW9uQ2xhc3NcIjogXCJ0b2FzdC1ib3R0b20tcmlnaHRcIixcbiAgICAgIFwidGltZU91dFwiOiBcIjMwMDBcIlxuICAgIH07XG4gICAgbG9nSXQgPSBmdW5jdGlvbihtZXNzYWdlLCB0eXBlKSB7XG4gICAgICByZXR1cm4gdG9hc3RyW3R5cGVdKG1lc3NhZ2UpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZzogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBsb2dJdChtZXNzYWdlLCAnaW5mbycpO1xuICAgICAgfSxcbiAgICAgIGxvZ1dhcm5pbmc6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgbG9nSXQobWVzc2FnZSwgJ3dhcm5pbmcnKTtcbiAgICAgIH0sXG4gICAgICBsb2dTdWNjZXNzOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIGxvZ0l0KG1lc3NhZ2UsICdzdWNjZXNzJyk7XG4gICAgICB9LFxuICAgICAgbG9nRXJyb3I6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgbG9nSXQobWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLnBhZ2UuY3RybHMnLCBbXSkuY29udHJvbGxlcignaW52b2ljZUN0cmwnLCBbXG4gICckc2NvcGUnLCAnJHdpbmRvdycsIGZ1bmN0aW9uKCRzY29wZSwgJHdpbmRvdykge1xuICAgIHJldHVybiAkc2NvcGUucHJpbnRJbnZvaWNlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3JpZ2luYWxDb250ZW50cywgcG9wdXBXaW4sIHByaW50Q29udGVudHM7XG4gICAgICBwcmludENvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludm9pY2UnKS5pbm5lckhUTUw7XG4gICAgICBvcmlnaW5hbENvbnRlbnRzID0gZG9jdW1lbnQuYm9keS5pbm5lckhUTUw7XG4gICAgICBwb3B1cFdpbiA9IHdpbmRvdy5vcGVuKCk7XG4gICAgICBwb3B1cFdpbi5kb2N1bWVudC5vcGVuKCk7XG4gICAgICBwb3B1cFdpbi5kb2N1bWVudC53cml0ZSgnPGh0bWw+PGhlYWQ+PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJzdHlsZXMvbWFpbi5jc3NcIiAvPjwvaGVhZD48Ym9keSBvbmxvYWQ9XCJ3aW5kb3cucHJpbnQoKVwiPlwiICsgcHJpbnRDb250ZW50cyArIFwiPC9odG1sPicpO1xuICAgICAgcmV0dXJuIHBvcHVwV2luLmRvY3VtZW50LmNsb3NlKCk7XG4gICAgfTtcbiAgfVxuXSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbXSkuZGlyZWN0aXZlKCdpbWdIb2xkZXInLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgcmV0dXJuIEhvbGRlci5ydW4oe1xuICAgICAgICAgIGltYWdlczogZWxlWzBdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnY3VzdG9tQmFja2dyb3VuZCcsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICBjb250cm9sbGVyOiBbXG4gICAgICAnJHNjb3BlJywgJyRlbGVtZW50JywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRsb2NhdGlvbikge1xuICAgICAgICB2YXIgYWRkQmcsIHBhdGg7XG4gICAgICAgIHBhdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJGxvY2F0aW9uLnBhdGgoKTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkQmcgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2JvZHktaG9tZSBib2R5LXNwZWNpYWwgYm9keS10YXNrcyBib2R5LWxvY2snKTtcbiAgICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcbiAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICByZXR1cm4gJGVsZW1lbnQuYWRkQ2xhc3MoJ2JvZHktaG9tZScpO1xuICAgICAgICAgICAgY2FzZSAnLzQwNCc6XG4gICAgICAgICAgICBjYXNlICcvcGFnZXMvNTAwJzpcbiAgICAgICAgICAgIGNhc2UgJy9wYWdlcy9zaWduaW4nOlxuICAgICAgICAgICAgY2FzZSAnL3BhZ2VzL3NpZ251cCc6XG4gICAgICAgICAgICBjYXNlICcvcGFnZXMvZm9yZ290JzpcbiAgICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50LmFkZENsYXNzKCdib2R5LXNwZWNpYWwnKTtcbiAgICAgICAgICAgIGNhc2UgJy9wYWdlcy9sb2NrLXNjcmVlbic6XG4gICAgICAgICAgICAgIHJldHVybiAkZWxlbWVudC5hZGRDbGFzcygnYm9keS1zcGVjaWFsIGJvZHktbG9jaycpO1xuICAgICAgICAgICAgY2FzZSAnL3Rhc2tzJzpcbiAgICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50LmFkZENsYXNzKCdib2R5LXRhc2tzJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhZGRCZygkbG9jYXRpb24ucGF0aCgpKTtcbiAgICAgICAgcmV0dXJuICRzY29wZS4kd2F0Y2gocGF0aCwgZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICBpZiAobmV3VmFsID09PSBvbGRWYWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFkZEJnKCRsb2NhdGlvbi5wYXRoKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICBdXG4gIH07XG59KS5kaXJlY3RpdmUoJ3VpQ29sb3JTd2l0Y2gnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgcmV0dXJuIGVsZS5maW5kKCcuY29sb3Itb3B0aW9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICB2YXIgJHRoaXMsIGhyZWZVcmwsIHN0eWxlO1xuICAgICAgICAgICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICBocmVmVXJsID0gdm9pZCAwO1xuICAgICAgICAgIHN0eWxlID0gJHRoaXMuZGF0YSgnc3R5bGUnKTtcbiAgICAgICAgICBpZiAoc3R5bGUgPT09ICdsb3Vsb3UnKSB7XG4gICAgICAgICAgICBocmVmVXJsID0gJ3N0eWxlcy9tYWluLmNzcyc7XG4gICAgICAgICAgICAkKCdsaW5rW2hyZWZePVwic3R5bGVzL21haW5cIl0nKS5hdHRyKCdocmVmJywgaHJlZlVybCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgc3R5bGUgPSAnLScgKyBzdHlsZTtcbiAgICAgICAgICAgIGhyZWZVcmwgPSAnc3R5bGVzL21haW4nICsgc3R5bGUgKyAnLmNzcyc7XG4gICAgICAgICAgICAkKCdsaW5rW2hyZWZePVwic3R5bGVzL21haW5cIl0nKS5hdHRyKCdocmVmJywgaHJlZlVybCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndG9nZ2xlTWluTmF2JywgW1xuICAnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRyb290U2NvcGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciAkY29udGVudCwgJG5hdiwgJHdpbmRvdywgVGltZXIsIGFwcCwgdXBkYXRlQ2xhc3M7XG4gICAgICAgIGFwcCA9ICQoJyNhcHAnKTtcbiAgICAgICAgJHdpbmRvdyA9ICQod2luZG93KTtcbiAgICAgICAgJG5hdiA9ICQoJyNuYXYtY29udGFpbmVyJyk7XG4gICAgICAgICRjb250ZW50ID0gJCgnI2NvbnRlbnQnKTtcbiAgICAgICAgZWxlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBpZiAoYXBwLmhhc0NsYXNzKCduYXYtbWluJykpIHtcbiAgICAgICAgICAgIGFwcC5yZW1vdmVDbGFzcygnbmF2LW1pbicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHAuYWRkQ2xhc3MoJ25hdi1taW4nKTtcbiAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbWluTmF2OmVuYWJsZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFRpbWVyID0gdm9pZCAwO1xuICAgICAgICB1cGRhdGVDbGFzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3aWR0aDtcbiAgICAgICAgICB3aWR0aCA9ICR3aW5kb3cud2lkdGgoKTtcbiAgICAgICAgICBpZiAod2lkdGggPCA3NjgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcHAucmVtb3ZlQ2xhc3MoJ25hdi1taW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAkd2luZG93LnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgICAgcmV0dXJuIHQgPSBzZXRUaW1lb3V0KHVwZGF0ZUNsYXNzLCAzMDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ2NvbGxhcHNlTmF2JywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciAkYSwgJGFSZXN0LCAkbGlzdHMsICRsaXN0c1Jlc3QsIGFwcDtcbiAgICAgICAgJGxpc3RzID0gZWxlLmZpbmQoJ3VsJykucGFyZW50KCdsaScpO1xuICAgICAgICAkbGlzdHMuYXBwZW5kKCc8aSBjbGFzcz1cImZhIGZhLWNhcmV0LXJpZ2h0IGljb24taGFzLXVsXCI+PC9pPicpO1xuICAgICAgICAkYSA9ICRsaXN0cy5jaGlsZHJlbignYScpO1xuICAgICAgICAkbGlzdHNSZXN0ID0gZWxlLmNoaWxkcmVuKCdsaScpLm5vdCgkbGlzdHMpO1xuICAgICAgICAkYVJlc3QgPSAkbGlzdHNSZXN0LmNoaWxkcmVuKCdhJyk7XG4gICAgICAgIGFwcCA9ICQoJyNhcHAnKTtcbiAgICAgICAgJGEub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICB2YXIgJHBhcmVudCwgJHRoaXM7XG4gICAgICAgICAgaWYgKGFwcC5oYXNDbGFzcygnbmF2LW1pbicpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAkcGFyZW50ID0gJHRoaXMucGFyZW50KCdsaScpO1xuICAgICAgICAgICRsaXN0cy5ub3QoJHBhcmVudCkucmVtb3ZlQ2xhc3MoJ29wZW4nKS5maW5kKCd1bCcpLnNsaWRlVXAoKTtcbiAgICAgICAgICAkcGFyZW50LnRvZ2dsZUNsYXNzKCdvcGVuJykuZmluZCgndWwnKS5zdG9wKCkuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICRhUmVzdC5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHJldHVybiAkbGlzdHMucmVtb3ZlQ2xhc3MoJ29wZW4nKS5maW5kKCd1bCcpLnNsaWRlVXAoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzY29wZS4kb24oJ21pbk5hdjplbmFibGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gJGxpc3RzLnJlbW92ZUNsYXNzKCdvcGVuJykuZmluZCgndWwnKS5zbGlkZVVwKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnaGlnaGxpZ2h0QWN0aXZlJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgICAgY29udHJvbGxlcjogW1xuICAgICAgICAnJHNjb3BlJywgJyRlbGVtZW50JywgJyRhdHRycycsICckbG9jYXRpb24nLCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRsb2NhdGlvbikge1xuICAgICAgICAgIHZhciBoaWdobGlnaHRBY3RpdmUsIGxpbmtzLCBwYXRoO1xuICAgICAgICAgIGxpbmtzID0gJGVsZW1lbnQuZmluZCgnYScpO1xuICAgICAgICAgIHBhdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkbG9jYXRpb24ucGF0aCgpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgaGlnaGxpZ2h0QWN0aXZlID0gZnVuY3Rpb24obGlua3MsIHBhdGgpIHtcbiAgICAgICAgICAgIHBhdGggPSAnIycgKyBwYXRoO1xuICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuZm9yRWFjaChsaW5rcywgZnVuY3Rpb24obGluaykge1xuICAgICAgICAgICAgICB2YXIgJGxpLCAkbGluaywgaHJlZjtcbiAgICAgICAgICAgICAgJGxpbmsgPSBhbmd1bGFyLmVsZW1lbnQobGluayk7XG4gICAgICAgICAgICAgICRsaSA9ICRsaW5rLnBhcmVudCgnbGknKTtcbiAgICAgICAgICAgICAgaHJlZiA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgICAgaWYgKCRsaS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkbGkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoaHJlZikgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJGxpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBoaWdobGlnaHRBY3RpdmUobGlua3MsICRsb2NhdGlvbi5wYXRoKCkpO1xuICAgICAgICAgIHJldHVybiAkc2NvcGUuJHdhdGNoKHBhdGgsIGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgICAgICBpZiAobmV3VmFsID09PSBvbGRWYWwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhpZ2hsaWdodEFjdGl2ZShsaW5rcywgJGxvY2F0aW9uLnBhdGgoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ3RvZ2dsZU9mZkNhbnZhcycsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICByZXR1cm4gZWxlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAkKCcjYXBwJykudG9nZ2xlQ2xhc3MoJ29uLWNhbnZhcycpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ3NsaW1TY3JvbGwnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgcmV0dXJuIGVsZS5zbGltU2Nyb2xsKHtcbiAgICAgICAgICBoZWlnaHQ6IGF0dHJzLnNjcm9sbEhlaWdodCB8fCAnMTAwJSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdnb0JhY2snLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICBjb250cm9sbGVyOiBbXG4gICAgICAgICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJHdpbmRvdycsIGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICR3aW5kb3cpIHtcbiAgICAgICAgICByZXR1cm4gJGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC5sb2NhbGl6YXRpb24nLCBbXSkuZmFjdG9yeSgnbG9jYWxpemUnLCBbXG4gICckaHR0cCcsICckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCBmdW5jdGlvbigkaHR0cCwgJHJvb3RTY29wZSwgJHdpbmRvdykge1xuICAgIHZhciBsb2NhbGl6ZTtcbiAgICBsb2NhbGl6ZSA9IHtcbiAgICAgIGxhbmd1YWdlOiAnJyxcbiAgICAgIHVybDogdm9pZCAwLFxuICAgICAgcmVzb3VyY2VGaWxlTG9hZGVkOiBmYWxzZSxcbiAgICAgIHN1Y2Nlc3NDYWxsYmFjazogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBsb2NhbGl6ZS5kaWN0aW9uYXJ5ID0gZGF0YTtcbiAgICAgICAgbG9jYWxpemUucmVzb3VyY2VGaWxlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbG9jYWxpemVSZXNvdXJjZXNVcGRhdGVkJyk7XG4gICAgICB9LFxuICAgICAgc2V0TGFuZ3VhZ2U6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGxvY2FsaXplLmxhbmd1YWdlID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdChcIi1cIilbMF07XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5pbml0TG9jYWxpemVkUmVzb3VyY2VzKCk7XG4gICAgICB9LFxuICAgICAgc2V0VXJsOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBsb2NhbGl6ZS51cmwgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmluaXRMb2NhbGl6ZWRSZXNvdXJjZXMoKTtcbiAgICAgIH0sXG4gICAgICBidWlsZFVybDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghbG9jYWxpemUubGFuZ3VhZ2UpIHtcbiAgICAgICAgICBsb2NhbGl6ZS5sYW5ndWFnZSA9ICgkd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgJHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbG9jYWxpemUubGFuZ3VhZ2UgPSBsb2NhbGl6ZS5sYW5ndWFnZS5zcGxpdChcIi1cIilbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpMThuL3Jlc291cmNlcy1sb2NhbGVfJyArIGxvY2FsaXplLmxhbmd1YWdlICsgJy5qcyc7XG4gICAgICB9LFxuICAgICAgaW5pdExvY2FsaXplZFJlc291cmNlczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1cmw7XG4gICAgICAgIHVybCA9IGxvY2FsaXplLnVybCB8fCBsb2NhbGl6ZS5idWlsZFVybCgpO1xuICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBjYWNoZTogZmFsc2VcbiAgICAgICAgfSkuc3VjY2Vzcyhsb2NhbGl6ZS5zdWNjZXNzQ2FsbGJhY2spLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2xvY2FsaXplUmVzb3VyY2VzVXBkYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBnZXRMb2NhbGl6ZWRTdHJpbmc6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQsIHZhbHVlTG93ZXJDYXNlO1xuICAgICAgICByZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIGlmIChsb2NhbGl6ZS5kaWN0aW9uYXJ5ICYmIHZhbHVlKSB7XG4gICAgICAgICAgdmFsdWVMb3dlckNhc2UgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmIChsb2NhbGl6ZS5kaWN0aW9uYXJ5W3ZhbHVlTG93ZXJDYXNlXSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsb2NhbGl6ZS5kaWN0aW9uYXJ5W3ZhbHVlTG93ZXJDYXNlXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdpMThuJywgW1xuICAnbG9jYWxpemUnLCBmdW5jdGlvbihsb2NhbGl6ZSkge1xuICAgIHZhciBpMThuRGlyZWN0aXZlO1xuICAgIGkxOG5EaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogXCJFQVwiLFxuICAgICAgdXBkYXRlVGV4dDogZnVuY3Rpb24oZWxlLCBpbnB1dCwgcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICBpZiAoaW5wdXQgPT09ICdpMThuLXBsYWNlaG9sZGVyJykge1xuICAgICAgICAgIHJlc3VsdCA9IGxvY2FsaXplLmdldExvY2FsaXplZFN0cmluZyhwbGFjZWhvbGRlcik7XG4gICAgICAgICAgcmV0dXJuIGVsZS5hdHRyKCdwbGFjZWhvbGRlcicsIHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICByZXN1bHQgPSBsb2NhbGl6ZS5nZXRMb2NhbGl6ZWRTdHJpbmcoaW5wdXQpO1xuICAgICAgICAgIHJldHVybiBlbGUudGV4dChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgc2NvcGUuJG9uKCdsb2NhbGl6ZVJlc291cmNlc1VwZGF0ZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaTE4bkRpcmVjdGl2ZS51cGRhdGVUZXh0KGVsZSwgYXR0cnMuaTE4biwgYXR0cnMucGxhY2Vob2xkZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF0dHJzLiRvYnNlcnZlKCdpMThuJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gaTE4bkRpcmVjdGl2ZS51cGRhdGVUZXh0KGVsZSwgdmFsdWUsIGF0dHJzLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gaTE4bkRpcmVjdGl2ZTtcbiAgfVxuXSkuY29udHJvbGxlcignTGFuZ0N0cmwnLCBbXG4gICckc2NvcGUnLCAnbG9jYWxpemUnLCBmdW5jdGlvbigkc2NvcGUsIGxvY2FsaXplKSB7XG4gICAgJHNjb3BlLmxhbmcgPSAnRW5nbGlzaCc7XG4gICAgJHNjb3BlLnNldExhbmcgPSBmdW5jdGlvbihsYW5nKSB7XG4gICAgICBzd2l0Y2ggKGxhbmcpIHtcbiAgICAgICAgY2FzZSAnRW5nbGlzaCc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ0VOLVVTJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0VzcGHDsW9sJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnRVMtRVMnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAn5pel5pys6KqeJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnSkEtSlAnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAn5Lit5paHJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnWkgtVFcnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRGV1dHNjaCc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ0RFLURFJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZyYW7Dp2Fpcyc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ0ZSLUZSJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0l0YWxpYW5vJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnSVQtSVQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUG9ydHVnYWwnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdQVC1CUicpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICfQoNGD0YHRgdC60LjQuSDRj9C30YvQuic6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ1JVLVJVJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ+2VnOq1reyWtCc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ0tPLUtSJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJHNjb3BlLmxhbmcgPSBsYW5nO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5nZXRGbGFnID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGFuZztcbiAgICAgIGxhbmcgPSAkc2NvcGUubGFuZztcbiAgICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgICBjYXNlICdFbmdsaXNoJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWFtZXJpY2FuJztcbiAgICAgICAgY2FzZSAnRXNwYcOxb2wnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3Mtc3BhaW4nO1xuICAgICAgICBjYXNlICfml6XmnKzoqp4nOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtamFwYW4nO1xuICAgICAgICBjYXNlICfkuK3mlocnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtY2hpbmEnO1xuICAgICAgICBjYXNlICdEZXV0c2NoJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWdlcm1hbnknO1xuICAgICAgICBjYXNlICdmcmFuw6dhaXMnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtZnJhbmNlJztcbiAgICAgICAgY2FzZSAnSXRhbGlhbm8nOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtaXRhbHknO1xuICAgICAgICBjYXNlICdQb3J0dWdhbCc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1wb3J0dWdhbCc7XG4gICAgICAgIGNhc2UgJ9Cg0YPRgdGB0LrQuNC5INGP0LfRi9C6JzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLXJ1c3NpYSc7XG4gICAgICAgIGNhc2UgJ+2VnOq1reyWtCc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1rb3JlYSc7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJywgW10pLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBbXG4gICckc2NvcGUnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24oJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgICAkc2NvcGUuaXNTcGVjaWZpY1BhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwYXRoO1xuICAgICAgcGF0aCA9ICRsb2NhdGlvbi5wYXRoKCk7XG4gICAgICByZXR1cm4gXy5jb250YWlucyhbJy80MDQnLCAnL3BhZ2VzLzUwMCcsICcvcGFnZXMvbG9naW4nLCAnL3BhZ2VzL3NpZ25pbicsICcvcGFnZXMvc2lnbmluMScsICcvcGFnZXMvc2lnbmluMicsICcvcGFnZXMvc2lnbnVwJywgJy9wYWdlcy9zaWdudXAxJywgJy9wYWdlcy9zaWdudXAyJywgJy9wYWdlcy9mb3Jnb3QnLCAnL3BhZ2VzL2xvY2stc2NyZWVuJ10sIHBhdGgpO1xuICAgIH07XG4gICAgcmV0dXJuICRzY29wZS5tYWluID0ge1xuICAgICAgYnJhbmQ6ICdJbnRyYW5ldCcsXG4gICAgICBuYW1lOiAnQW5kcmVzIERhdmlkIEppbWVuZXonLFxuICAgICAgbG9nbzogJ2ltZy9sb2dvLnBuZydcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdOYXZDdHJsJywgW1xuICAnJHNjb3BlJywgJ3Rhc2tTdG9yYWdlJywgJ2ZpbHRlckZpbHRlcicsIGZ1bmN0aW9uKCRzY29wZSwgdGFza1N0b3JhZ2UsIGZpbHRlckZpbHRlcikge1xuICAgIHZhciB0YXNrcztcbiAgICB0YXNrcyA9ICRzY29wZS50YXNrcyA9IHRhc2tTdG9yYWdlLmdldCgpO1xuICAgICRzY29wZS50YXNrUmVtYWluaW5nQ291bnQgPSBmaWx0ZXJGaWx0ZXIodGFza3MsIHtcbiAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICB9KS5sZW5ndGg7XG4gICAgcmV0dXJuICRzY29wZS4kb24oJ3Rhc2tSZW1haW5pbmc6Y2hhbmdlZCcsIGZ1bmN0aW9uKGV2ZW50LCBjb3VudCkge1xuICAgICAgcmV0dXJuICRzY29wZS50YXNrUmVtYWluaW5nQ291bnQgPSBjb3VudDtcbiAgICB9KTtcbiAgfVxuXSkuY29udHJvbGxlcignRGFzaGJvYXJkQ3RybCcsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7fV0pLmNvbnRyb2xsZXIoJ01vZGFsQWdlbmRhQ3RybCcsIFtcbiAgJyRzY29wZScsICckbW9kYWwnLCAnJGxvZycsIGZ1bmN0aW9uKCRzY29wZSwgJG1vZGFsLCAkbG9nKSB7XG4gICAgJHNjb3BlLml0ZW1zID0gW1wiaXRlbTFcIiwgXCJpdGVtMlwiLCBcIml0ZW0zXCJdO1xuICAgICRzY29wZS5jb250YWN0cyA9IFtdO1xuICAgICRzY29wZS5zYXZlQ29udGFjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGk7XG4gICAgICBpZiAoJHNjb3BlLm5ld2NvbnRhY3QuaWQgPT09IG51bGwpIHtcbiAgICAgICAgJHNjb3BlLm5ld2NvbnRhY3QuaWQgPSB1aWQrKztcbiAgICAgICAgJHNjb3BlLmNvbnRhY3RzLnB1c2goJHNjb3BlLm5ld2NvbnRhY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpIGluICRzY29wZS5jb250YWN0cykge1xuICAgICAgICAgIGlmICgkc2NvcGUuY29udGFjdHNbaV0uaWQgPT09ICRzY29wZS5uZXdjb250YWN0LmlkKSB7XG4gICAgICAgICAgICAkc2NvcGUuY29udGFjdHNbaV0gPSAkc2NvcGUubmV3Y29udGFjdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICRzY29wZS5uZXdjb250YWN0ID0ge307XG4gICAgfTtcbiAgICAkc2NvcGVbXCJkZWxldGVcIl0gPSBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IgKGkgaW4gJHNjb3BlLmNvbnRhY3RzKSB7XG4gICAgICAgIGlmICgkc2NvcGUuY29udGFjdHNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgJHNjb3BlLmNvbnRhY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAkc2NvcGUubmV3Y29udGFjdCA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUuZWRpdCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvciAoaSBpbiAkc2NvcGUuY29udGFjdHMpIHtcbiAgICAgICAgaWYgKCRzY29wZS5jb250YWN0c1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAkc2NvcGUubmV3Y29udGFjdCA9IGFuZ3VsYXIuY29weSgkc2NvcGUuY29udGFjdHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1vZGFsSW5zdGFuY2U7XG4gICAgICBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogXCJteU1vZGFsQ29udGVudC5odG1sXCIsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNb2RhbEluc3RhbmNlQ3RybCcsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBpdGVtczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJHNjb3BlLml0ZW1zO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKChmdW5jdGlvbihzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtO1xuICAgICAgfSksIGZ1bmN0aW9uKCkge1xuICAgICAgICAkbG9nLmluZm8oXCJNb2RhbCBkaXNtaXNzZWQgYXQ6IFwiICsgbmV3IERhdGUoKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5dKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
