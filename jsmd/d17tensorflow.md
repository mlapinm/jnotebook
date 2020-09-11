### Freecodecamp

[TensorFlow - Introduction to TensorFlow](#TensorFlow---Introduction-to-TensorFlow)  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  


### KGP Talkie

[TensorFlow 2.0 Tutorial for Beginners 1 - Getting Started with Coding of Tensorflow 2.0 and Keras](#TensorFlow-2.0-Tutorial-for-Beginners-1---Getting-Started-with-Coding-of-Tensorflow-2.0-and-Keras)  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  


### Freecodecamp

#### TensorFlow - Introduction to TensorFlow

[youtube Machine Learning](https://www.youtube.com/watch?v=tPYj3fFJGjk&list=PLWKjhJtqVAblStefaz_YOVpDWqcRScc2s)  
[Google Disk](https://drive.google.com/drive/folders/1jA-upbWhnhMziosA5KpswIITm_JiZ-EG)  
[]() 
[]() 
[]() 
[]() 
[]() 


#### d1403Core Learning Algorithms.ipynb

[Build a linear model with Estimators](https://www.tensorflow.org/tutorials/estimator/linear)  
[]()  
[]()  
[]()  


print(dftrain.head())
```
   survived     sex   age  ...     deck  embark_town  alone
0         0    male  22.0  ...  unknown  Southampton      n
1         1  female  38.0  ...        C    Cherbourg      n
2         1  female  26.0  ...  unknown  Southampton      y
3         1  female  35.0  ...        C  Southampton      n
4         0    male  28.0  ...  unknown   Queenstown      y
```

print(dftrain.loc[0], "\n y_train.loc[0] = ", y_train.loc[0])
```
sex                          male
age                            22
n_siblings_spouses              1
parch                           0
fare                         7.25
class                       Third
deck                      unknown
embark_town           Southampton
alone                           n
Name: 0, dtype: object 
 y_train.loc[0] =  0
 ```

print(dftrain["age"][0])   # 22.0

```
[VocabularyListCategoricalColumn(key='sex', vocabulary_list=('male', 'female'), dtype=tf.string, default_value=-1, num_oov_buckets=0),

VocabularyListCategoricalColumn(key='n_siblings_spouses', vocabulary_list=(1, 0, 3, 4, 2, 5, 8), dtype=tf.int64, default_value=-1, num_oov_buckets=0),  

VocabularyListCategoricalColumn(key='parch', vocabulary_list=(0, 1, 2, 5, 3, 4), dtype=tf.int64, default_value=-1, num_oov_buckets=0),  
VocabularyListCategoricalColumn(key='class', vocabulary_list=('Third', 'First', 'Second'), dtype=tf.string, default_value=-1, num_oov_buckets=0),  

 VocabularyListCategoricalColumn(key='deck', vocabulary_list=('unknown', 'C', 'G', 'A', 'B', 'D', 'F', 'E'), dtype=tf.string, default_value=-1, num_oov_buckets=0),  
 
  VocabularyListCategoricalColumn(key='embark_town', vocabulary_list=('Southampton', 'Cherbourg', 'Queenstown', 'unknown'), dtype=tf.string, default_value=-1, num_oov_buckets=0),  
  
   VocabularyListCategoricalColumn(key='alone', vocabulary_list=('n', 'y'), dtype=tf.string, default_value=-1, num_oov_buckets=0),
   
   NumericColumn(key='age', shape=(1,), default_value=None, dtype=tf.float32, normalizer_fn=None), 
   
   NumericColumn(key='fare', shape=(1,), default_value=None, dtype=tf.float32, normalizer_fn=None)]
```

```
dftrain["sex"].unique()
# array(['male', 'female'], dtype=object)
```

```
dftrain["n_siblings_spouses"].unique()
# array([1, 0, 3, 4, 2, 5, 8])
```

```
d = dict(dftrain)
print(type(dftrain), type(d))
# <class 'pandas.core.frame.DataFrame'> <class 'dict'>
```

```
d = dict(dftrain)
# print(d['age'][0],d['sex'][0], d['embark_town'][0]) 
# 22.0 male Southampton
# print(d.keys())
s=''
for i in d.keys():
  s += " " + str(d[i][0])
# print(s)  
#  male 22.0 1 0 7.25 Third unknown Southampton n
sk=''
sv=''
for k,v in d.items():
  sk += " " + str(k)
  sv += " " + str(v[0])
  print(k, v[0])
# sex male
# age 22.0
# n_siblings_spouses 1
# parch 0
# fare 7.25
# class Third
# deck unknown
# embark_town Southampton
# alone n


# print(sk)  
# print(sv)
#  sex age n_siblings_spouses parch fare class deck embark_town alone
#  male 22.0 1 0 7.25 Third unknown Southampton n
```

```
a = np.array(range(8))
ds = tf.data.Dataset.from_tensor_slices(a)
# ds = ds.shuffle(2)   # [1, 2, 0, 3, 4, 6, 5, 7]
# ds = ds.batch(3)
# [array([0, 1, 2]), array([3, 4, 5]), array([6, 7])]
list(ds.as_numpy_iterator())
```

```
a = np.array(range(8))
ds = tf.data.Dataset.from_tensor_slices(a)
ds = ds.repeat(2)
list(ds.as_numpy_iterator())
# [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7]
```

```
a = np.array(range(2))
ds = tf.data.Dataset.from_tensor_slices((a,a))
ds = ds.repeat(2)
list(ds.as_numpy_iterator())
# [(0, 0), (1, 1), (0, 0), (1, 1)]
```

#### train_input_fn()
- la - 200 партий
- la[0-199][0] - 9 колонок
- la[0-199][0]['sex'] - 32 в партии
- la[0-199][1] - 32 servive   

  
#### eval_input_fn()
- lb - 9 партий
- lb[0-8][0] - 9 колонок
- lb[0-8][0]['sex'] - 32 в партии
- lb[0-8][1] - 32 servive















### KGP Talkie
#### TensorFlow 2.0 Tutorial for Beginners 1 - Getting Started with Coding of Tensorflow 2.0 and Keras


[TensorFlow 2.0 Tutorial for Beginners 1 - Getting Started with Coding of Tensorflow 2.0 and Keras](https://www.youtube.com/watch?v=nVvhkVLh60o&list=PLc2rvfiptPSR3iwFp1VHVJFK4yAMo0wuF&index=4)  
[DeepLearning Google Disk](https://drive.google.com/drive/folders/1jA-upbWhnhMziosA5KpswIITm_JiZ-EG)  
[github Getting-Started-with-Tensorflow-2.0-and-Keras-for-Beginners](https://github.com/Srishailamsri-123456789/Getting-Started-with-Tensorflow-2.0-and-Keras-for-Beginners/blob/master/Deep%20Learning%20with%20Tensorflow%202.0%20Tutorial%20-%20Getting%20Started%20with%20Tensorflow%202.0%20and%20Keras%20for%20Beginners.ipynb)  
[]()  
[]()  


- обрабатывает данные 
- строит модель
- тренировка и оценка модели


```
он принимает входные данные в качестве
многомерный массив, который также является
известный как тензор
```

- RC - release candidate
- [KGP Talkie](https://www.youtube.com/c/KGPTalkie/videos)
- [Обзор Keras для TensorFlow](https://habr.com/ru/post/482126/) 

- [Первая модель: набор данных Fashion MNIST](https://habr.com/ru/post/454034/)  


- открыть anaconda в административном режиме
- tf тренируется в режиме значений от 0 до 1(значение точек массива)
- нейронные сети не принимают значения более 1
- блокнот shif-tab - справочная информация


```python
print()
```

[Решение задачи классификации на примере dataset Titanic](https://ansmirnov.ru/kaggle-titanic-dataset/)  
[]()  
[]()  
[]()  
[]()  

