'use strict';

const sort = (sentence) => sentence.split(' ')  // разбили на слова
                                   .map((word) => word.split('') // разбили слово на буквы
                                                      .sort(Intl.Collator().compare) // отсортили буквы(и 'ё')
                                                      .join('')) // склеили слово назад
                                   .map((word) => word.charAt(0).toUpperCase() // первая буква upper
                                                    + word.slice(1).toLowerCase()) // остальные lower
                                   .sort(Intl.Collator().compare) // отсортили слова(с учётом 'ё')
                                   .join(' '); // склеиваем новое предложение