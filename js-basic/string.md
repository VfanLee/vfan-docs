# String 方法总结

> 参考：[MDN String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

对于一些官方弃用的方法（如：substr）不记录。

## String.fromCharCode()

String.fromCharCode() 静态方法返回由指定的 UTF-16 码元序列创建的字符串。

```js
console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="
```

## String.fromCodePoint()

String.fromCodePoint() 静态方法将根据指定的码位序列返回一个字符串。

```js
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"
```

## String.raw()

String.raw() 静态方法是模板字符串的标签函数。它的作用类似于 Python 中的 r 前缀或 C# 中用于字符串字面量的 @ 前缀。它用于获取模板字符串的原始字符串形式——即，替换表达式（例如 ${foo}）会被替换处理，但转义序列（例如 \n）不会被处理。

```js
// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"
```

## String.prototype.at()

at() 方法接受一个整数值，并返回一个新的 String，该字符串由位于指定偏移量处的单个 UTF-16 码元组成。该方法允许正整数和负整数。负整数从字符串中的最后一个字符开始倒数。

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"
```

## String.prototype.charAt()

String 的 charAt() 方法返回一个由给定索引处的单个 UTF-16 码元构成的新字符串。

charAt() 方法总是将字符串作为 UTF-16 码元序列进行索引，因此它可能会返回孤项代理。要获取给定索引处的完整 Unicode 码位，请使用 String.prototype.codePointAt() 和 String.fromCodePoint()。

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"
```

## String.prototype.charCodeAt()

String 的 charCodeAt() 方法返回一个整数，表示给定索引处的 UTF-16 码元，其值介于 0 和 65535 之间。

charCodeAt() 方法总是将字符串当作 UTF-16 码元序列进行索引，因此它可能返回单独代理项（lone surrogate）。如果要获取给定索引处的完整 Unicode 码位，请使用 String.prototype.codePointAt() 方法。

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);
// Expected output: "Character code 113 is equal to q"
```

## String.prototype.codePointAt()

String 的 codePointAt() 方法返回一个非负整数，该整数是从给定索引开始的字符的 Unicode 码位值。请注意，索引仍然基于 UTF-16 码元，而不是 Unicode 码位。

```js
const icons = '☃★♲';

console.log(icons.codePointAt(1));
// Expected output: "9733"
```

## String.prototype.concat()

concat() 方法将字符串参数连接到调用的字符串，并返回一个新的字符串。

```js
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"
```

## String.prototype.endsWith()

endsWith() 方法用于判断一个字符串是否以指定字符串结尾，如果是则返回 true，否则返回 false。

```js
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false
```

## String.prototype.includes()

includes() 方法执行区分大小写的搜索，以确定是否可以在一个字符串中找到另一个字符串，并根据情况返回 true 或 false。

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"
```

## String.prototype.indexOf()

String 的 indexOf() 方法在字符串中搜索指定子字符串，并返回其第一次出现的位置索引。它可以接受一个可选的参数指定搜索的起始位置，如果找到了指定的子字符串，则返回的位置索引大于或等于指定的数字。

```js
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Expected output: "The index of the second "dog" is 38"
```

## String.prototype.isWellFormed()

String 值的 isWellFormed() 方法返回一个表示该字符串是否包含单独代理项的布尔值。

```js
const strings = [
  // 单独的前导代理
  "ab\uD800",
  "ab\uD800c",
  // 单独的后尾代理
  "\uDFFFab",
  "c\uDFFFab",
  // 格式正确
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.isWellFormed());
}
// 输出：
// false
// false
// false
// false
// true
// true
```

## String.prototype.lastIndexOf()

String 的 lastIndexOf() 方法搜索该字符串并返回指定子字符串最后一次出现的索引。它可以接受一个可选的起始位置参数，并返回指定子字符串在小于或等于指定数字的索引中的最后一次出现的位置。

```js
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);
// Expected output: "Index of the last "dog" is 38"
```

## String.prototype.localeCompare()

localeCompare() 方法返回一个数字，表示参考字符串在排序顺序中是在给定字符串之前、之后还是与之相同。在支持 Intl.Collator API 的实现中，该方法仅是调用了 Intl.Collator 方法。

当比较大量字符串时，例如对大型数组进行排序，最好创建一个 Intl.Collator 对象，并使用其 compare() (en-US) 方法提供的函数。

```js
const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0
```

## String.prototype.match()

match() 方法检索字符串与正则表达式进行匹配的结果。

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]
```

## String.prototype.matchAll()

matchAll() 方法返回一个迭代器，该迭代器包含了检索字符串与正则表达式进行匹配的所有结果（包括捕获组）。

```js
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]
```

## String.prototype.normalize()

String 的 normalize() 方法返回该字符串的 Unicode 标准化形式。

```js
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
// Expected output: "Amélie, Amélie"
console.log(name1 === name2);
// Expected output: false
console.log(name1.length === name2.length);
// Expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Expected output: true
console.log(name1NFC.length === name2NFC.length);
// Expected output: true
```

## String.prototype.padEnd()

padEnd() 方法会将当前字符串从末尾开始填充给定的字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的末尾开始的。

```js
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// Expected output: "200  "
```

## String.prototype.padStart()

padStart() 方法用另一个字符串填充当前字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的开头开始的。

```js
const str1 = '5';

console.log(str1.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"
```

## String.prototype.repeat()

repeat() 方法构造并返回一个新字符串，其中包含指定数量的所调用的字符串副本，这些副本连接在一起。

```js
const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "
```

## String.prototype.replace()

replace() 方法返回一个新字符串，其中一个、多个或所有匹配的 pattern 被替换为 replacement。pattern 可以是字符串或 RegExp，replacement 可以是字符串或一个在每次匹配时调用的函数。如果 pattern 是字符串，则只会替换第一个匹配项。原始的字符串不会改变。

```js
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
```

## String.prototype.replaceAll()

replaceAll() 方法返回一个新字符串，其中所有匹配 pattern 的部分都被替换为 replacement。pattern 可以是一个字符串或一个 RegExp，replacement 可以是一个字符串或一个在每次匹配时调用的函数。原始字符串保持不变。

```js
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(paragraph.replaceAll(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"
```

## String.prototype.search()

search() 方法用于在 String 对象中执行正则表达式的搜索，寻找匹配项。

```js
const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"
```

## String.prototype.slice()

slice() 方法提取字符串的一部分，并将其作为新字符串返回，而不修改原始字符串。

```js
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"
```

## String.prototype.split()

split() 方法接受一个模式，通过搜索模式将字符串分割成一个有序的子串列表，将这些子串放入一个数组，并返回该数组。

```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
```

## String.prototype.startsWith()

String 的 startsWith() 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。

```js
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false
```

## String.prototype.substring()

String 的 substring() 方法返回该字符串从起始索引到结束索引（不包括）的部分，如果未提供结束索引，则返回到字符串末尾的部分。

```js
const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"
```

## String.prototype.toLocaleLowerCase()

String 的 toLocaleLowerCase() 方法会根据特定区域设置的大小写映射规则，将字符串转换为小写形式并返回。

```js
const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"
```

## String.prototype.toLocaleUpperCase()

String 的 toLocaleUpperCase() 方法会根据特定区域设置的大小写映射规则，将字符串转换为大写形式并返回。

```js
const city = 'istanbul';

console.log(city.toLocaleUpperCase('en-US'));
// Expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase('TR'));
// Expected output: "İSTANBUL"
```

## String.prototype.toLowerCase()

String 的 toLowerCase() 方法将该字符串转换为小写形式。

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."
```

## String.prototype.toString()

String 的 toString() 方法返回该字符串的值。

```js
const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"
```

## String.prototype.toUpperCase()

String 的 toUpperCase() 方法将该字符串转换为大写形式。

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

## String.prototype.toWellFormed()

String 的 toWellFormed() 方法返回一个字符串，其中该字符串的所有单独代理项都被替换为 Unicode 替换字符 U+FFFD。

```js
const strings = [
  // 单独的前导代理
  "ab\uD800",
  "ab\uD800c",
  // 单独的后尾代理
  "\uDFFFab",
  "c\uDFFFab",
  // 格式正确
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.toWellFormed());
}
// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
```

## String.prototype.trim()

String 的 trim() 方法会从字符串的两端移除空白字符，并返回一个新的字符串，而不会修改原始字符串。

要返回一个仅从一端修剪空白字符的新字符串，请使用 trimStart() 或 trimEnd()。

```js
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
```

## String.prototype.trimEnd()

String 的 trimEnd() 方法会从字符串的结尾移除空白字符，并返回一个新的字符串，而不会修改原始字符串。trimRight() 是该方法的别名。

```js
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";
```

## String.prototype.trimStart()

String 的 trimStart() 方法会从字符串的开头移除空白字符，并返回一个新的字符串，而不会修改原始字符串。trimLeft() 是该方法的别名。

```js
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
```

## String.prototype.valueOf()

valueOf() 方法返回 String 对象的字符串值。

```js
const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"
```
