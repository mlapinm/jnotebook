[https://www.freecodecamp.org/learn/](https://www.freecodecamp.org/learn/)
#### Bootstrap



#### 1. Introduction to the Bootstrap Challenges
```
```
#### 2. Use Responsive Design with Bootstrap Fluid Containers
```
<div class="container-fluid">
</div>
```
#### 3. Make Images Mobile Responsive
```
<img class="img-responsive" src="https://bit.ly/fcc-running-cats" />
```
#### 4. Center Text with Bootstrap
```
  <h2 class="red-text text-center">CatPhotoApp</h2>
```
#### 5. Create a Bootstrap Button
```
<button class="btn btn-default">Like</button>
```
#### 6. Create a Block Element Bootstrap Button
```
<button class="btn btn-default btn-block">Like</button>
```
#### 7. Taste the Bootstrap Button Color Rainbow
```
<button class="btn btn-primary btn-block">Like</button>
```
#### 8. Call out Optional Actions with btn-info
```
<button class="btn btn-info btn-block">Info</button>
```
#### 9. Warn Your Users of a Dangerous Action with btn-danger
```
<button class="btn btn-block btn-danger">Delete</button>
```


#### 10. Use the Bootstrap Grid to Put Elements Side By Side
```
<div class="row">
<div class="col-xs-4">
<button class="btn btn-block btn-primary">Like</button>
</div>
<div class="col-xs-4">
  <button class="btn btn-block btn-info">Info</button>
</div>
<div class="col-xs-4">
  <button class="btn btn-block btn-danger">Delete</button>
</div>
</div>
```



_|_|_|_|_|_
--|--|--|--|--|--
None|576px|720px|940px|1140px|
xs|sm|md|lg|xl|


#### 11. Ditch Custom CSS for Bootstrap
```
img-responsive
thick-green-border
```
#### 12. Use a span to Target Inline Elements
```
<p>Things cats <span class="text-danger">love:</span></p>
```
#### 13. Create a Custom Heading
```
  <div class="row">
  <div class="col-xs-8">
  <h2 class="text-primary text-center">CatPhotoApp</h2>
  </div>
  <div class="col-xs-4">
  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  </div>
  </div>
```
#### 14. Add Font Awesome Icons to our Buttons
```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
<button class="btn btn-block btn-primary">
<i class="fas fa-thumbs-up"></i>Like</button>


```
#### 15. Add Font Awesome Icons to all of our Buttons
```
<i class="fas fa-info-circle"></i>
<i class="fas fa-trash"></i>
```
#### 16. Responsively Style Radio Buttons
```
  <div class="row">
    <div class="col-xs-6">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label></div>
    <div class="col-xs-6">
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label></div>
  </div>
```
#### 17. Responsively Style Checkboxes
```
<div class="row">
      <div class="col-xs-4">    <label><input type="checkbox" name="personality"> Loving</label></div>
<div class="col-xs-4">      
    <label><input type="checkbox" name="personality"> Lazy</label></div>
    <div class="col-xs-4">
    <label><input type="checkbox" name="personality"> Crazy</label></div></div>
```
#### 18. Style Text Inputs as Form Controls
```


<input type="text" class="form-control" placeholder="cat photo URL" required>
<button type="submit" class="btn btn-primary">
<button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i>Submit</button>
```
#### 19. Line up Form Elements Responsively with Bootstrap
```
<div class="row">
      <div class="col-xs-7">
    <input type="text" class="form-control" placeholder="cat photo URL" required></div>
    <div class="col-xs-5">
    <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button></div></div>
```
#### 20. Create a Bootstrap Headline
```
<h3 class="text-primary text-center">jQuery Playground</h3>
```
#### 21. House our page within a Bootstrap container-fluid div
```
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>

</div>
```
#### 22. Create a Bootstrap Row
```
  <div class="row">
    
  </div>
```
#### 23. Split Your Bootstrap Row
```
  <div class="row">
<div class="col-xs-6">
  
</div>
<div class="col-xs-6">
  
</div>

  </div>
```
#### 24. Create Bootstrap Wells
```
```
#### 25. Add Elements within Your Bootstrap Wells
```
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
```
#### 26. Apply the Default Bootstrap Button Style
```
<button class="btn btn-default target"></button>
```
#### 27. Create a Class to Target with jQuery Selectors
```
```
#### 28. Add id Attributes to Bootstrap Elements
```
<div class="well" id="left-well">
<div class="well" id="right-well">
```
#### 29. Label Bootstrap Wells
```
    <div class="col-xs-6">
    <h4>#left-well</h4>
      <div class="well"
      
    <div class="col-xs-6">
    <h4>#right-well</h4>
      <div class="well" 
```
#### 30. Give Each Element a Unique id
```
<button id="target6" class="btn btn-default target"></button>
```
#### 31. Label Bootstrap Buttons
```
<button class="btn btn-default target" id="target1">#target1</button>
```
#### 32. Use Comments to Clarify Code
```
<!-- Only change code above this line. -->
```


```python
%%html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
  <div class="col-xs-8">
  <h2 class="text-primary text-center">CatPhotoApp</h2>
  </div>
  <div class="col-xs-4">
  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  </div>
  </div>
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>

```


```python
%%html
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

```


<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>




















_|_|_|_|_|_
--|--|--|--|--|--
Dangerous|опасный|narrow|узкий|Ditch|кювет
plenty|множество|convenient|удобный|clarity|ясность
|||||
|||||
|||||


[getbootstrap.ru](https://getbootstrap.ru/docs/v4-alpha/layout/grid/)  
