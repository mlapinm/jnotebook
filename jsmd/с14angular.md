##### Learn how to easily build single-page web applications using this popular JavaScript framework.
[Learn AngularJS 1.X](https://www.codecademy.com/learn/learn-angularjs)  
[]()  


#### Your First App
LESSON
Get up and running quickly by building an AngularJS app from scratch.

Exercises

1. Hello AngularJS I

2. Hello AngularJS II

3. Workflow

4. Filters I

Your First App
LESSON
Get up and running quickly by building an AngularJS app from scratch.

Exercises

1. Hello AngularJS I

2. Hello AngularJS II

_|_|_|_|_|_
--|--|--|--|--|--
1|app.js|var app = angular.module('myApp',[]);|||
2|index.html|&lt;body ng-app="myApp"&gt;|||
3|MainController.js|app.controller(|||
4|index.html|&lt;div class="main" ng-controller="MainController"&gt;|||
5|index.html|&lt;h1&gt;{{ title}}  &lt;/h1&gt;|||
6|||||


MainController.js


```python
app.controller('MainController',['$scope',
function($scope){
  $scope.title = 'Top Sellers in Books';
}
]);
```

index.html


```python
    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>

  </body>
```




```python
$scope.promo = 'string promo';
        <h1>{{title}}  </h1>
        <h2>{{promo}}</h2>
```



3. Workflow
```
  $scope.product = { 
  name: 'The Book of Trees', 
  price: 19 
}; ```
4. Filters I  
{{product.price| currency}}

5. Filters II
```
<p class="title">{{product.name | uppercase}}</p>
        <p class="price">{{product.price| currency}}</p>
        <p>{{product.price | currency}}</p>
        <p class="date">{{product.pubdate | date}}</p>
  price: 19,
  pubdate: new Date('2014', '03', '08')         
```


#### 6. ng-repeat I
```
$scope.products = [{ 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/the-book-of-trees.jpg' 
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg' 
  } 
];

<div ng-repeat="product in products" class="col-md-6"> 
  <div class="thumbnail"> 
    <img src="img/the-book-of-trees.jpg"> 
    <p class="title">{{ product.name }}</p> 
    <p class="price">{{ product.price | currency }}</p> 
    <p class="date">{{ product.pubdate | date }}</p> 
  </div> 
</div> 
```

#### 7. ng-repeat II
```
<img ng-src="{{ product.cover }}"> 
```

#### 8. Directives

#### 9. ng-click I
1. 
```
likes: 0,
```
1. 
```
<div class="rating"> 
  <p class="likes">+{{product.likes}} </p> 
</div> 
```
1. 
```
  $scope.plusOne = function(index) { 
  $scope.products[index].likes += 1; 
};
```
1. 
```
<p class="likes" ng-click="plusOne($index)">
```

#### 10. ng-click II
1. 
```
    dislikes: 0,
```
1. 
```
<p class="dislikes">{{product.dislikes}}</p>
```
1. 
```
$scope.minusOne = function(index){
  $scope.products[index].dislikes += 1;
};  
```
1. 
```
  <p class="dislikes" ng-click="minusOne($index)">-{{product.dislikes}}</p>  
```
1. 
```
```
1. 
```
```
1. 
```
```
1. 
```
```




11. Generalizations

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

1. Directives I

2. Directives II

3. Directives III

4. Built-in and Custom Directives

5. installApp I

6. installApp II

7. installApp III

8. Generalizations

















08.03 - 25 - 

_|_|_|_|_|_
--|--|--|--|--|--
currency|деньги|Workflow|рабочий процесс|thumbnail|эскиз
generalize|обобщить|behavior|поведение||
|||||
