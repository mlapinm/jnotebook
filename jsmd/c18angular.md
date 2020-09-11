[Learn AngularJS 1.X](https://www.codecademy.com/learn/learn-angularjs)  
[AngularJS уроки](#AngularJS-уроки)  
[]()  
[]()  


### AngularJS уроки
[1 Дата биндинг](#1-Дата-биндинг)  
[2 Контроллеры](#2-Контроллеры)  
[3 Обмен данными между контроллерами](#3-Обмен-данными-между-контроллерами)  
[4 Определение метода в контроллере](#4-Определение-метода-в-контроллере)  
[5 Вложенные контроллеры](#5-Вложенные-контроллеры)  
[6 Controller as синтаксис](#6-Controller-as-синтаксис)  
[7 Пишем простую директиву](#7-Пишем-простую-директиву)  
[8 Фильтры](#8-Фильтры)  
[9 Ограничения (Restrictions) в директивах](#9-Ограничения-(Restrictions)-в-директивах)  
[10 Шаблоны в директивах](#10-Шаблоны-в-директивах)  
[11 Transclude в директивах](#11-Transclude-в-директивах)  
[12 TemplateUrl в директивах](#12-TemplateUrl-в-директивах)  
[13 Кешируем шаблоны](#13-Кешируем-шаблоны)  
[14 Общение контроллера и директивы](#14-Общение-контроллера-и-директивы)  
[15 Scope true в директивах](#15-Scope-true-в-директивах)  
[16 Изолированый скоуп в директивах](#16-Изолированый-скоуп-в-директивах)  
[17 Transclude element в директивах](#17-Transclude-element-в-директивах)  
[18 http запросы](#18-http-запросы)  
[19 Angular-mocks](#19-Angular-mocks)  
[20 Compile в директивах](#20-Compile-в-директивах)  
[21 Ng-cloak и ng-bind](#21-Ng-cloak-и-ng-bind)  
[22 Как делать переходы по страницам с помощью ngRoute](#22-Как-делать-переходы-по-страницам-с-помощью-ngRoute)  
[23 Ng route. Пишем мини блог с помощью routeParams](#23-Ng-route.-Пишем-мини-блог-с-помощью-routeParams)  
[24 Отслеживание событий роутера ngRoute](#24-Отслеживание-событий-роутера-ngRoute) 









1. A user visits the AngularJS app.
1. The view presents the app’s data through the use of expressions, filters, and directives. Directives bind new behavior HTML elements.
1. A user clicks an element in the view. If the element has a directive, AngularJS runs the function.
1. The function in the controller updates the state of the data.
1. The view automatically changes and displays the updated data. The page doesn’t need to reload at any point.

#### Directives
LESSON
Learn how to use directives to make standalone UI components.

Exercises

1. Directives I

2. Directives II

3. Directives III

4. Built-in and Custom Directives

5. installApp I

6. installApp II

7. installApp III

8. Generalizations

#### Directives
LESSON
Learn how to use directives to make standalone UI components.

Exercises

```
```
#### 1. Directives I
```
js/directives/appInfo.js
app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});

index.html in line 48
    <!-- Directives -->
<script src="js/directives/appInfo.js"></script>

     <div class="container">
         <div class="card">
          <app-info info="move"></app-info> 
        </div>

        <div class="card">
          <app-info info="shutterbugg"></app-info>
                  </div>

        <div class="card">
          <app-info info="gameboard"> </app-info>       

          </div>

```
#### 2. Directives II

```
```
#### 3. Directives III
```
        <div class="card">
          <app-info info="forecast"> </app-info>       

          </div>
```
#### 4. Built-in and Custom Directives
```
 $scope.apps = [ 
  { 
    icon: 'img/move.jpg', 
    title: 'MOVE', 
    developer: 'MOVE, Inc.', 
    price: 0.99 
  }, 
  { 
    icon: 'img/shutterbugg.jpg', 
    title: 'Shutterbugg', 
    developer: 'Chico Dusty', 
    price: 2.99 
  },
    { 
    icon: 'img/move.jpg', 
    title: 'MOVE', 
    developer: 'MOVE, Inc.', 
    price: 0.99 
  }, 
  { 
    icon: 'img/shutterbugg.jpg', 
    title: 'Shutterbugg', 
    developer: 'Chico Dusty', 
    price: 2.99 
  }, 
];

<div class="card" ng-repeat="app in apps">
	<app-info info="app"></app-info>
</div>
```
#### 5. installApp I
```
app.directive('installApp', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      
    }, 
    templateUrl: 'js/directives/installApp.html' 
  }; 
});


<script src="js/directives/installApp.js"></script>

==============================
app.directive('installApp', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      
    }, 
    templateUrl: 'js/directives/installApp.html',
  link: function(scope, element, attrs) { 
  scope.buttonText = "Install", 
  scope.installed = false, 

  scope.download = function() { 
    element.toggleClass('btn-active'); 
    if(scope.installed) { 
      scope.buttonText = "Install"; 
      scope.installed = false; 
    } else { 
      scope.buttonText = "Uninstall"; 
      scope.installed = true; 
    } 
  } 
}   
  }; 
});

```
#### 6. installApp II
```
<button class="btn btn-active" ng-click="download()"> 
  {{ buttonText }} 
</button> 
```
#### 7. installApp III
```
<div class="card" ng-repeat="app in apps">
	<app-info info="app"></app-info>
<install-app></install-app>
</div>
```
#### 8. Generalizations
```
Unlike jQuery which adds interactivity as a layer on top of HTML, AngularJS treats interactivity as a native component of HTML.
```

#### Services
LESSON
Use services to communicate with a server.

Exercises

1. Services I

2. Services II

3. Generalizations

#### Services
LESSON
Use services to communicate with a server.

Exercises

#### 1. Services I
```
```

#### 1 visit  
[JSON object containing a city_name and an array days](https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json)  
```
```

#### 2. js/services/forecast.js
```
app.factory('forecast', ['$http', function($http) { 
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
```

#### 3. index.html
```
    <!-- Services -->
<script src="js/services/forecast.js">
</script>
```

#### 4. MainController
```
app.controller('MainController', ['$scope', 
'forecast',
function($scope,
forecast) {
forecast.success(function(data) { 
    $scope.fiveDay = data; 
  });     
}]);
```

#### 
```
```

#### 
```
```

#### 2. Services II
```
            <div class="forecast" ng-repeat="day in fiveDay.days">
              <div class="day row">
                <!-- datetime -->
                <div class="weekday col-xs-4">
                 {{day.datetime | date }}
                </div>
                <!-- icon -->
                <div class="weather col-xs-3">
                <img ng-src={{day.icon}} />
                </div>
                <div class="col-xs-1"></div>
                <!-- high -->
                <div class="high col-xs-2">
                 {{day.high}}
                </div>
                <!-- low -->
                <div class="low col-xs-2">
                 {{day.low}}
                </div>
              </div>
            </div>
```
#### 3. Generalizations
```
```

```
ng-app ng-model
```

#### 1 Дата биндинг
```
<body ng-app>
{{"hello"}}

    <input type="text" ng-model="hello">
<p>{{hello}}</p>

    <input type="text" ng-model="hello">
    <input type="text" ng-model="hello">
<p>{{hello}}</p>


```
#### 2 Контроллеры
```
<html  ng-app="app">

<script src="js/app.js"></script>

var app = angular.module('app', []);
-------------------
    <div ng-controller="myCtrl">


var app = angular.module('app', []).controller('myCtrl', function(){});
-------------------
    <div ng-controller="myCtrl">
{{hello}}

var app = angular.module('app', []).controller('myCtrl', function($scope){
  $scope.hello = 333;
});
-------------
  <input type="text" ng-model="myBook"><br>
  {{myBook}}

  $scope.myBook = "hello";

```
#### 3 Обмен данными между контроллерами
```


    <div ng-controller="firstCtrl">
    <input type="text" ng-model=myFactory.hello>

    </div>
    <div ng-controller="secondCtrl">
    <input type="text" ng-model=myFactory.hello>

    </div>

app.controller('firstCtrl', function($scope, myFactory){
  $scope.myFactory = myFactory;
  $scope.hello = "hello";
});
app.controller('secondCtrl', function($scope, myFactory){
  $scope.myFactory = myFactory;
  $scope.hello = "hello";
});
app.factory('myFactory', () => {
  return {
    hello: 'Hello World'
  };
});


```
#### 4 Определение метода в контроллере
```
{{hello}}<br>
{{getBookmark()}}

 $scope.hello = "hello";
 $scope.getBookmark = () => {
    return "My Bookmark ";
  };
---------
  $scope.hello = "hello";
  $scope.setHello = (text) => {
    $scope.hello = text;
  };

{{hello}}<br>
<button ng-click='setHello("Foo")'>Foo</button><br>
<button ng-click='setHello("Bar")'>Bar</button>
------
{{myFactory.hello("Petya")}}<br>

app.factory('myFactory', ()=>{
  return {
    hello: (v)=>{return "Hello " + v }
  }
});
-----
app.factory('myFactory', () => {
  return {
    hello: (v)=>"Hello " + v 
  }
});
```
#### 5 Вложенные контроллеры
```
    <div ng-controller="booksCtrl">
    {{hello}}
      <div ng-controller="angularBookCtrl">
<button ng-click='showBook("angular")'>angular</button>  
<br>
      </div>
      <div ng-controller="emberBookCtrl">
<button ng-click='showBook("ember")'>ember</button><br>
      </div>
    </div>


app.controller('booksCtrl', function($scope){
  $scope.hello = "hello";
  $scope.showBook = function(v){
    $scope.hello = v;
  }
});
app.controller('angularBookCtrl', function($scope){
});
app.controller('emberBookCtrl', function($scope){
});
```
#### 6 Controller as синтаксис
```
  <body ng-app="app">
<div ng-controller='mainCtrl as mainCtrl'>
  {{mainCtrl.hello}}
<div ng-controller='firstCtrl as firstCtrl'>
  {{firstCtrl.hello}}
  <button ng-click='firstCtrl.setHello()'>Petya</button><br>
  <button ng-click='mainCtrl.setHello()'>Petya</button>
</div>
</div>

var app = angular.module('app', []);
app.controller('mainCtrl', function(){
  this.hello="mainHello";
  this.setHello = function(){
    this.hello = "dddd";
  };
});
app.controller('firstCtrl', function(){
  this.setHello = function(){
    this.hello = "dddd";
  };
  this.hello = "hello1";
});
```
#### 7 Пишем простую директиву
```
  <div foo> 1 </div>  

app.directive('foo', function(){
  return function(scope, element, attrs){
     element.text("3");
  };
});
-----
app.directive('foo', function(){
  return {
    link: function(scope, element, attrs){
     element.text("3");
  }
  }
});
----
app.directive('foo', function(){
  return {
    link: function(scope, element, attrs){
     element.on('click', function(){
       var text = element.text() == "foo"?"bar":"foo";
       element.text(text);
     })
  }
  }
});

```
#### 8 Фильтры
```
  <div ng-controller="mainCtrl">  
   {{money1 | moneyFilter}}
   {{money2 | moneyFilter}}
   {{money3 | moneyFilter}}
  </div>  

app.controller('mainCtrl', function($scope){
  $scope.money1 = "1.22$";
  $scope.money2 = "$2.33";
  $scope.money3 = "4.33";
});
app.filter('moneyFilter', function(){
  return function(s){
    var firstChar = s.slice(0,1),
    lastChar =  s.slice(-1),
    sliced;
    if(firstChar=='$'){
      return s;
    }else if(lastChar == '$'){
      sliced = s.slice(0, s.length-1);
      return '$'+sliced;
    }else{
      return '$'+s;
    }
    return s;
  };
});
```
#### 9 Ограничения (Restrictions) в директивах
```

<div foo-bar>a1</div>
<foo-bar>a2</foo-bar>
<!-- directive: foo-bar -->
<div class="foo-bar">a4</div>

app.directive('fooBar', function(){
  var k=0;
  return {
    restrict: 'EACM',  //'E', 'A', 'EA', 'C'
    link: function(scope, element, attrs){
      element.text(k++);
    }
  };
});
```
#### 10 Шаблоны в директивах
```
app.directive('fooBar', function(){
 return {
 template:"<div>Hello {{name}} </div>",   
    link: function(scope, element, attrs){
      scope.name = "Vasya";
    }
  };
});
```
```
app.directive('fooBar', function(){
  var names = [
    {
      id: 1,
      name: "AngularJS" 
    },
    {
      id: 2,
      name: "EmberJS"
    },
    {
      id: 3,
      name: "ReactJS"
    }
  ];
 return {
  // template: "2333{{names[0].name}}", 
 template:"<div ng-repeat='name in names'>{{name.name}} </div>",   
    link: function(scope, element, attrs){
      scope.names = names;
    }
  };
});
```
#### 11 Transclude в директивах
```
   transclude: true,
   template: "{{name}} <ng-transclude></ng-transclude>", 
```
#### 12 TemplateUrl в директивах
```
```
#### 13 Кешируем шаблоны
```
```
#### 14 Общение контроллера и директивы
```
```
#### 15 Scope true в директивах
```
```
#### 16 Изолированый скоуп в директивах
```
```
#### 17 Transclude element в директивах
```
```
#### 18 http запросы
```
```
#### 19 Angular-mocks
```
```
#### 20 Compile в директивах
```
```
#### 21 Ng-cloak и ng-bind
```
```
#### 22 Как делать переходы по страницам с помощью ngRoute
```
```
#### 23 Ng route. Пишем мини блог с помощью routeParams
```
```
#### 24 Отслеживание событий роутера ngRoute
```
```









17.03 25  
18.03 50-75   
  

[codecademy](https://www.codecademy.com/courses/learn-angularjs/lessons/directives/exercises/directives-generalizations)  
[]()  
[]()  
[]()  
[]()  


_|_|_|_|_|_
--|--|--|--|--|--
|||||
|||||
|||||

