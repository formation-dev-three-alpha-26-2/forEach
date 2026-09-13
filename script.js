function sumSquares(numbers) {
  var total = 0;

  numbers.forEach((element) => {
    total += element ** element;
  });
  return total;
}

console.log(sumSquares([2, 4, 3]));

function doublerTous(nombres) {
  let arr = [];

  nombres.forEach((el) => {
    arr.push(el * 2);
  });
  return arr;
}

console.log(doublerTous([2, 4, 5]));

function mettreEnMajuscules(chaines) {
  let arr = [];

  chaines.forEach((el) => {
    arr.push(el.toUpperCase());
  });
  return arr;
}

console.log(mettreEnMajuscules(["hello", "hi"]));

function multiplesDeTrois(nombres) {
  let arr = [];

  nombres.forEach((el) => {
    if (el % 3 === 0) {
      arr.push(el);
    }
  });
  return arr;
}

function positifs(nombres) {
  let arr = [];

  nombres.forEach((el) => {
    if (el >= 0) {
      arr.push(el);
    }
  });
  return arr;
}

function longueurPairs(chaines) {
  let arr = [];

  chaines.forEach((el) => {
    if (el.length % 2 === 0) {
      arr.push(el);
    }
  });
  return arr;
}

function indexexpo(numbers) {
  var total = [];

  numbers.forEach((element, i) => {
    total.push(element ** i);
  });
  return total;
}

console.log(indexexpo([2, 5, 7, 4]));

function evenIndexedOddNumbers(nombres) {
  let arr = [];
  nombres.forEach((element, i) => {
    if (element % 2 !== 0 && i % 2 === 0) {
      arr.push(element);
    }
  });
  return arr;
}
console.log(evenIndexedOddNumbers([1, 3, 3, 4, 7, 10]));

function evenIndexedEvenLengths(chaines) {
  let arr = [];
  chaines.forEach((element, i) => {
    if (element.length % 2 === 0 && i % 2 === 0) {
      arr.push(element);
    }
  });
  return arr;
}
console.log(
  evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]),
);

function unique(tableau) {
  let result = [];

  tableau.forEach((el) => {
    if (result.indexOf(el) === -1) {
      result.push(el);
    }
  });

  return result;
}
console.log(unique([1, 2, 3, 3, 4, 4, 5]));

function findDuplicates(tableau) {
  let result = [];

  let obj = {};

  tableau.forEach((el) => {
    if (!obj.hasOwnProperty(el)) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  });

  console.log(obj);

  for (let cle in obj) {
    if (obj[cle] > 1) {
      result.push(Number(cle));
    }
  }

  return result;
}
console.log(findDuplicates([1, 2, 3, 2, 4, 3]));

function palindrome(chaine) {
  let result = "";

  for (let i = chaine.length - 1; i >= 0; i--) {
    console.log(chaine[i]);

    result += chaine[i];
  }

  return result === chaine;
}

console.log(palindrome("hannah"));

function chunk(tableau, taille) {
  let result = [];

  tableau.forEach((el, i) => {
    if (i % taille === 0) {
      result.push(tableau.slice(i, i + taille));
    }
  });
  return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2));

function chunk(tableau, taille) {
  let result = [];

  let arr = [];
  tableau.forEach((el, i) => {
    arr.push(el);
    if (arr.length === taille) {
      result.push(arr);
      arr = [];
    }
  });

  if (arr.length > 0) {
    result.push(arr);
  }

  return result;
}
console.log(chunk([1, 2, 3, 4, 5], 2));
