'use strict';

String.prototype.capitalize = function() { 
    return this.charAt(0).toUpperCase() // первая буква upper
        + this.slice(1).toLowerCase(); // остальные lower
    }  
const sort = (sentence) => sentence.trim() // срезали боковые пробелы
                                    .replace(/\s+/g, " ") // заменили промежутки на 1 пробел
                                    .split(' ')  // разбили на слова
                                    .map((word) => [...word] // разбили слово на буквы
                                                        .sort(Intl.Collator().compare) // отсортили буквы(и 'ё')
                                                        .join('').capitalize()) // склеили слово назад
                                    .sort(Intl.Collator().compare) // отсортили слова(с учётом 'ё')
                                    .join(' '); // склеиваем новое предложение