'use strict';

const sort = (sentence) => sentence.trim() // срезали боковые пробелы
                                    .replace(/\s+/g, " ") // заменили промежутки на 1 пробел
                                    .split(' ')  // разбили на слова
                                    .map((word) =>  { 
                                        const sorted = [...word] // разбили слово на буквы
                                            .sort(Intl.Collator().compare) // отсортили буквы(и 'ё')
                                            .join(''); // склеили слово назад
                                        return sorted.charAt(0).toUpperCase() + sorted.slice(1).toLowerCase();
                                    })
                                    .sort(Intl.Collator().compare) // отсортили слова(с учётом 'ё')
                                    .join(' '); // склеиваем новое предложение                                