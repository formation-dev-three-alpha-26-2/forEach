# forEach


## Introduction

Il est bon de savoir que nous avons **deux formes de fonctions** :

### 1. Déclaration de fonction (Function Declaration)

```javascript
function square(x) {
    return x * x;
}
```

### 2. Expression de fonction (Function Expression)

```javascript
var square = function(x) {
    return x * x;
};
```

La méthode **`forEach`** permet de parcourir un tableau et d’exécuter une fonction pour chaque élément.

```javascript
var nombres = [1, 2, 3, 4];

nombres.forEach(function(nombre) {
    console.log(nombre);
});
```

Résultat :

```text
1
2
3
4
```

## Exercices


### 1. Compléter `sumSquares` 

```javascript

 function sumSquares(numbers) { 
       var total = 0; 
       // ... 
       return total; 
 }

```

### 2. Fonction `impairs`
Écrire impairs(numbers) pour retourner les nombres impairs

```javascript
 function impairs (numbers) { 
   
 }

```

### 3. Fonction `sommeDeTousLesÉlémentsMultipliésParQuatre`

Écrire la fonction qui somme tous les éléments multipliés par 4

```javascript
 function sommeDeTousLesÉlémentsMultipliésParQuatre (numbers) { 
   
 }

```

### 4. Fonction `doublerTous` 

Écrire une fonction qui prend un tableau de nombres en paramètre et retourne un tableau de tous ces nombres doublés :

```javascript
function doublerTous(nombres) {

}

```

### 5. Fonction `diviserTousParDeux`

Écrire une fonction diviserTousParDeux qui prend un tableau de nombres en paramètre et retourne un tableau avec tous ces nombres divisés par deux :

```javascript
function diviserTousParDeux(nombres) {

}

```

### 6. Fonction `mettreEnMajuscules`

Écrire une fonction mettreEnMajuscules qui prend un tableau de chaînes de caractères en paramètre et retourne un tableau de toutes ces chaînes transformées en majuscules

```javascript
function mettreEnMajuscules(chaines) {

}


```


### 7. Fonction `pairs`

Écrire une fonction pairs qui prend un tableau de nombres en paramètre et retourne un tableau ne contenant que les nombres pairs :

```javascript

function pairs(nombres) {

}

```

## 8.Fonction `multiplesDeTrois` 

Écrire une fonction multiplesDeTrois qui prend un tableau de nombres en paramètre et retourne un tableau ne contenant que les nombres multiples de trois :

```javascript
function multiplesDeTrois(nombres) {

}
```

## 9. Fonction `positifs`

Écrire une fonction positifs qui prend un tableau de nombres en paramètre et retourne un tableau ne contenant que les nombres positifs :

```javascript
function positifs(nombres) {

}
```

## 10. Fonction `longueurPaire` 

Écrire une fonction longueurPaire qui prend un tableau de chaînes de caractères et retourne un tableau ne contenant que les chaînes ayant une longueur paire :

```javascript
function longueurPaire(chaines) {

}
```
# Avancé

## 1. indexedExponentials

Écrire une fonction `indexedExponentials` qui prend un tableau de nombres en paramètre et retourne un nouveau tableau où chaque nombre est élevé à la puissance de son index.



```javascript
Exemple :
function indexedExponentials(nombres) {

}
indexedExponentials([2, 5, 7, 4]) // => [2^0, 5^1, 7^2, 4^3] => [1, 5, 49, 64]

```

## 2. evenIndexedOddNumbers

Écrire une fonction `evenIndexedOddNumbers` qui prend un tableau de nombres en paramètre et retourne un tableau contenant uniquement les nombres impairs qui se trouvent à un index pair.


```javascript
function evenIndexedOddNumbers(nombres) {

}

evenIndexedOddNumbers([1, 3, 3, 4, 7, 10]) // => [1, 3, 7]

```

## 3. evenIndexedEvenLengths

Écrire une fonction `evenIndexedEvenLengths` qui prend un tableau de chaînes de caractères en paramètre et retourne uniquement les chaînes qui se trouvent à un index pair et qui ont une longueur paire.



```javascript
function evenIndexedEvenLengths(chaines) {

}


evenIndexedEvenLengths(['lion', 'monkey', 'aardvaark', 'cat', 'doge'])// => ['lion', 'doge']
evenIndexedEvenLengths(['red', 'green', 'purple', 'blue', 'yellow']) // => ['purple', 'yellow']
```

---

## 4. unique

Écrire une fonction `unique` qui prend un tableau en paramètre et retourne un nouveau tableau contenant uniquement les éléments uniques (sans doublons).



```javascript
function unique(tableau) {

}
unique([1, 2, 3, 3, 4, 4, 5]) // => [1, 2, 3, 4, 5]
```


## 5. findDuplicates

Écrire une fonction `findDuplicates` qui prend un tableau en paramètre et retourne un tableau contenant toutes les valeurs qui apparaissent plus d’une fois.


```javascript
function findDuplicates(tableau) {

}
findDuplicates([1, 2, 3, 2, 4, 3]) // => [2, 3]
```

## 6. palindrome

Écrire une fonction `palindrome` qui prend une chaîne de caractères en paramètre et retourne `true` si la chaîne est un palindrome (elle se lit de la même façon à l’envers et à l’endroit), sinon `false`.



```javascript
function palindrome(chaine) {

}
palindrome('racecar') // => true
palindrome('hello') // => false
```

## 7. chunk

Écrire une fonction `chunk` qui prend un tableau et une taille de bloc en paramètres, et retourne un tableau de sous-tableaux, chacun ayant la taille indiquée (sauf le dernier qui peut être plus court).


```javascript
function chunk(tableau, taille) {

}
chunk([1, 2, 3, 4, 5], 2) // => [[1, 2], [3, 4], [5]]

chunk([1, 2, 3, 4, 5], 3) // => [[1, 2, 3], [4, 5]]
```

## 8. flattenArray

Écrire une fonction `flattenArray` qui prend un tableau de tableaux en paramètre et retourne un tableau aplati.


```javascript
function flattenArray(tableaux) {

}
flattenArray([[1, 2, 3], [4, 5], [6]]) // => [1, 2, 3, 4, 5, 6]
```

---

## 9. rotateArray

Écrire une fonction `rotateArray` qui prend un tableau et un nombre de rotations en paramètres et qui fait tourner les éléments du tableau vers la droite. La rotation doit se faire **sur place** (sans créer un nouveau tableau).


```javascript
function rotateArray(tableau, rotations) {

}
rotateArray([1, 2, 3, 4, 5], 2) // => [4, 5, 1, 2, 3]

```
