// interface questions {
//     id: number;
//     type: string;
//     question: string;
//     answers: {
//         answer1: string;
//         answer2: string;
//         answer3: string;
//         correctAnswer: string;
//     };
//     fullAnswer: string;
//     level: number;
// }

const questions = [
    {
        id: 1,
        type: 'questions',
        question: `Какие типы данных есть в javaScript? Перечислите их`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        В JavaScript есть примитивные типы данных и Объекты
        <br>
        <b>Примитивы:</b> string, number, boolean, null, undefined, symbol, BigInt
        <br>
        <b>Объекты:</b>: Objects`,
        level: 1
    },
    {
        id: 2,
        type: 'questions',
        question: `Что такое переменные?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Переменные - это зарезервированные ячейки памяти, которые хранят данные. Все переменные должны иметь свое имя. В
        Js имя переменной не может начинаться с цифр, также они регистрозависимые
        `,
        level: 1
    },
    {
        id: 3,
        type: 'questions',
        question: `В чем отличия var, let, const?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Главное отличие var от let в их области видимости. Область видимости var - весь контекст выполнения, в котором он объявлен.
        Область видимости let ограничена фигурными скобками, в котором она была объявлена.
        <br>
        Также если мы попытаеся обратиться к переменной до ее инициализации с var мы получим undefined, с let/const ReferenceError
        <br>
        Отличия let и const в том, что мы можем переинициализировать(мутировать) let, а const мы можем инициализировать только 1 раз.
        `,
        level: 4
    },
    {
        id: 4,
        type: 'questions',
        question: `Что такое функция?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Функция в Js - это разновидность объекта, которая используется для выполнения алгоритма поставленной ей задачи
        `,
        level: 1
    },
    {
        id: 5,
        type: 'questions',
        question: `В чем отличия Function expression и Function declaration`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        1. Моментом создания - Javascript объявляет и инициализирует Function declaration, до того, как начнется выполнение
        самой первой строчки кода - поэтому мы можем обратиться к Function declaration, до ее инициализации.
        Function expression создается в тот момент, когда выполнение кода дойдет до нее, если мы попробуем обратиться
        к ней до этого момента, то получим ReferenceError
        <br>
        2. Методом объявления
        <br>
        <pre>
        function test1() {
            console.log("Look me"); // Function declaration
        }
        const test2 = () => {
            console.log("Look me again!"); //Function expression
        };
        </pre>
        <br>
        3. У стрелочных функций нет arguments и this - Если происходит обращение к this, его значение берётся снаружи.
        Если к arguments - вернется ReferenceError: arguments is not defined
        <br>
        <pre>
        let group = {
            title: "Our Group",
            students: ["John", "Pete", "Alice"],
            showList() {
              this.students.forEach((student) => alert(this.title + ": " + student));
            },
        };
        group.showList(); // все ок, this выбрасывает нас на область видимоси выше showList, и нам доступен title
        </pre>
        <br>
        4. Отсутствие this естественным образом ведёт к другому ограничению: стрелочные функции не могут быть
        использованы как конструкторы.Они не могут быть вызваны с new.
        `,
        level: 6
    },
    {
        id: 6,
        type: 'questions',
        question: `что такое hoisting (всплытие/поднятие)?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        это механизм в JavaScript, в котором переменные и объявления функций, передвигаются вверх своей
        области видимости перед тем, как код будет выполнен.
        <br>
        Объявление переменной через var всегда обрабатывается до выполнения кода
        <br>
        <pre>
        bla = 2;
        var bla;
        // ...
        // читается как:
        var bla;
        bla = 2;
        </pre>
        <br>
        Важно отметить, что подъем будет влиять на объявление переменной, но не на инициализацию ее значения.
        Значение присваивается при выполнении оператора присваивания:
        <br>
        Все необъявленные переменные это по факту глобальные переменные.
        `,
        level: 6
    },
    {
        id: 7,
        type: 'questions',
        question: `что такое замыкание?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        возможность ссылаться на конкретный экземпляр локальной привязки в пределах замкнутой области видимости.
        Функция, которая ссылается на привязки из окружающих ее локальных областей видимости, называется замыканием
        <br>
        <pre>
        // 1
        function outerFunction() {
          const outer = 'I see the outer variable!';
          function innerFunction() {
            console.log(outer);
          }
          return innerFunction;
        }
        outerFunction()(); // I see the outer variable!

        // 2
        function person() {
        let name = 'Peter';
        
        return function displayName() {
          console.log(name);
          };
        }
        person() // 'Peter'
        </pre>
        `,
        level: 5
    },
    {
        id: 8,
        type: 'questions',
        question: `что такое рекурсия?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Рекурсия - это один из приемов в программировании, когда функция вызывает саму себя. В рекурсии должны присутствовать:
        <br>
        1. базис рекурсии - это условие, при котором рекурсия завершает свое выполнение
        <br>
        2. шаг рекурсии - это действие, которое будет выполняться до тех пор, пока не достигнет базиса рекурсии.
        <br>
        <pre>
        function pow(x, n) {
            if (n === 1) {
              return x;
            } else {
              return x * pow(x, n - 1);
            }
        }
        alert( pow(2, 3) ); // 8
        </pre>

        `,
        level: 4
    },
    {
        id: 9,
        type: 'questions',
        question: `что добавили в ES6`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        * стрелочные функции
        <br>
        * Деструктурирующее присваивание
        <br>
        <pre>
        const names = ['sergei', 'maksim', 'roman']
        const [sergei, maksim, roman] = names
        console.log(sergei) // sergei
        </pre>
        <br>
        * шаблонные литералы(обратные кавычки), в которых мы можем использовать функциональные выражения.
        <br>
        <pre>
        console.log(\`Мне \${15 + 6} год\`) // мне 21 год
        </pre>
        <br>
        * Блочная область видимости (ключевые слова «let» и «const»).
        <br>
        * Параметры по умолчанию.
        <br>
        * добавлены promise
        <br>
        * метод Array.prototype.includes, который проверяет, содержится ли переданный аргумент в массиве.
        <br>
        * асинхронность теперь официально поддерживается (async/await);
        <br>
        * spread и rest оператор
        <br>
        <pre>
        // rest
        const test = (a, b, ...numbers) => {
          console.log(a, b, numbers)
        }
        test(1, 2, 3, 4, 5, 6) // 1, 2, [3,4,5,6]

        // spread
        let arr = [3, 5, 1];
        alert( Math.max(...arr) ); // 5 (оператор "раскрывает" массив в список аргументов)
        </pre>
        <br>
        `,
        level: 5
    },
    {
        id: 10,
        type: 'questions',
        question: `Что такое глобальные переменные, какие проблемы могут быть с ними связаны?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Глобальные переменные - переменные, которые объявлены вне какого-либо блока, и их область
        видимости весь скрипт. Из-за этого могут возникуть проблемы с инициализацией и перезаписью переменных`,
        level: 2
    },
    {
        id: 11,
        type: 'questions',
        question: `Что такое ошибка undefined`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `это значит, что мы не присвоили значение переменной`,
        level: 2
    },
    {
        id: 12,
        type: 'questions',
        question: `question`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `string`,
        level: 1
    },
    {
        id: 13,
        type: 'questions',
        question: `В чем отличия === и == ?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Строгое сравнение(===) проверяет равенство без приведения типов.
        Например если сравнить ““ и false, то результат строгого неравенства будет false,а если сравнивать не строгим, то true`,
        level: 1
    },
    {
        id: 14,
        type: 'questions',
        question: `Что такое null?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `null - это тип примитив, который представляет отсутствие какого-либо объектного значения.
        null часто присваивается в местах где ожидается объект, но подходящего объекта нет.`,
        level: 3
    },
    {
        id: 15,
        type: 'questions',
        question: `что такое свойства функций?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Функции содержат полезные свойства, которые мы можем использовать.
        Например мы можем узнать имя функции с помощью .name, или количество параметров с помощью .length.
        `,
        level: 3
    },
    {
        id: 16,
        type: 'questions',
        question: `Что такое анонимные функции?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Анонимная функция - это функция, который была объявлена без собственного имени
        <br>
        <pre>
        function ask(question, yes, no) {
            if (confirm(question)) yes()
            else no();
        }
          
          ask(
            "Вы согласны?",
            function() { alert("Вы согласились."); },
            function() { alert("Вы отменили выполнение."); }
          );
        </pre>
        `,
        level: 3
    },
    {
        id: 17,
        type: 'questions',
        question: `какие вы знаете методы массивов, что они делают??`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        forEach() - выполняет указанную функцию один раз для каждого элемента в массиве
        <br>
        reduce() - применяет функцию к каждому элементу массива, возвращая одна результирующее свойство.
        <br>
        map() - создает новый массив с результатом вызова функции для каждого элемента массива
        <br>
        split() - разбивает объект String на массив строк путём разделения строки указанной подстрокой.
        <br>
        splice() - изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
        <br>
        join() - объединяет все элементы массива (или массивоподобного объекта) в строку.
        <br>
        concat() - возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими
        массивами и/или значениями, переданными в качестве аргументов.
        <br>
        filter() - выполняет указанную функцию для каждого элемента в массиве, и возвращает новый массив с элементами, которые прошли проверку
        <br>
        reverse() - изменяет порядок элементов в массиве на обратный
        <br>
        sort() - сортирует на месте массив и возвращает его. Порядок cортировки по умолчанию соответствует порядку кодовых точек Unicode.
        `,
        level: 3
    },
    {
        id: 18,
        type: 'questions',
        question: `Что такое Объект?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Объекты – это ассоциативные массивы с рядом дополнительных возможностей. Они хранят значения в паре ключ-значение
        <br>
        Чтобы получить доступ к значение объекта, мы можем обратиться к значению через точку или через квадратные скобки.
        Квадратные скобки позволяют взять ключ из переменной
        <br>
        Все объекты в JavaScript являются потомками глобального объекта Object; все объекты наследуют методы и свойства
        из прототипа объекта Object.prototype, хотя они и могут быть переопределены. Например, прототипы других конструкторов
        переопределяют свойство constructor и предоставляют свои собственные методы toString(). Изменения в объекте прототипа
        Object распространяются на все объекты до тех пор, пока свойства и методы, учитывающие эти изменения, не переопределяются
        дальше по цепочке прототипов.
        <br>
        `,
        level: 5
    },
    {
        id: 19,
        type: 'questions',
        question: `Можно ли изменить содержимое объекта, если объявление произошло через const? Если да, то почему?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Объект можно изменить, если он объявлен через константу. const защищает от изменений только саму переменную, но не ее содержимое`,
        level: 5
    },
    {
        id: 20,
        type: 'questions',
        question: `Можем ли мы получить свойство в объекте, которого не существует?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Да. В отличии от других языков js может получить доступ к любому свойству. При обращении к свойству, которого нет, js зайдет в прототип объекта, если и его там нет, то вернется undefined.`,
        level: 6
    },
    {
        id: 21,
        type: 'questions',
        question: `Как мы можем проверить существование свойства в объекте?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `С помощь оператора in, мы можем проверить существует ли свойство.`,
        level: 4
    },
    {
        id: 22,
        type: 'questions',
        question: `Упорядочены ли свойства объектов?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `свойства упорядочены особым образом: свойства с целочисленными ключами
        сортируются по возрастанию, остальные располагаются в порядке создания.`,
        level: 6
    },
    {
        id: 23,
        type: 'questions',
        question: `Как js понимает, что нужно удалить объект? какие методы используются для этого?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        js постоянно анализирует, что находиться у него в памяти - js удаляет недостижимые объекты - сборка мусора
        <br>
        Сборка по поколениям (Generational collection) – объекты делятся на «новые» и «старые».
        Многие объекты появляются, выполняют свою задачу и быстро умирают, их можно удалять более агрессивно.
        Те, которые живут достаточно долго, становятся «старыми» и проверяются реже.
        <br>
        Инкрементальная сборка (Incremental collection) – если объектов много, то обход всех ссылок и
        пометка достижимых объектов может занять значительное время и привести к видимым задержкам выполнения скрипта.
        Поэтому интерпретатор пытается организовать сборку мусора поэтапно. Этапы выполняются по отдельности один за другим.
        Это требует дополнительного учёта для отслеживания изменений между этапами, но зато теперь у нас есть много крошечных
        задержек вместо одной большой.
        <br>
        Сборка в свободное время (Idle-time collection) – чтобы уменьшить возможное влияние на производительность, сборщик
        мусора старается работать только во время простоя процессора.
        <br>
        сборка мусора происходит автоматически, мы не можем повлиять на нее
        `,
        level: 8
    },
    {
        id: 24,
        type: 'questions',
        question: `Что такое опциональная цепочка "?" ?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Опциональная цепочка ?. — это безопасный способ доступа к свойствам вложенных объектов,
        даже если какое-либо из промежуточных свойств не существует.
        <br>
        Опциональная цепочка ?. останавливает вычисление и возвращает undefined, если часть перед ?. имеет значение undefined или null.
        <br>
        <pre>
        let user = {}; // пользователь без адреса
        alert(user?.address?.street); // undefined (без ошибки)
        </pre>
        `,
        level: 5
    },
    {
        id: 25,
        type: 'questions',
        question: `Отличия объектов от примитивных типов данных?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Одним из фундаментальных отличий объектов от примитивных типов данных является то, что они хранятся и копируются «по ссылке».
        Переменная хранит не сам объект, а его «адрес в памяти», другими словами «ссылку» на него.
        <br>
        <pre>
        let user = { name: "Иван" };

        let admin = user;

        admin.name = "Петя"; // изменено по ссылке из переменной "admin"

        alert(user.name); // 'Петя', изменения видны по ссылке из переменной "user"

        //
        let a = {};
        let b = a; // копирование по ссылке

        alert(a == b); // true, т.к. обе переменные ссылаются на один и тот же объект
        alert(a === b); // true

        //
        let a = {};
        let b = {}; // два независимых объекта

        alert(a == b); // false
        </pre>
        `,
        level: 5
    },
    {
        id: 26,
        type: 'questions',
        question: `Что делает цикл for in, и чем он опасен?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        цикл for in пробегает по ключам и свойствам объекта и выполняет функцию описанную в теле цикла.
        Если в объекте нет свойств, то цикл игнорируется.
        <br>
        цикл for in опасен тем, что он пробегает не только по ключам и свойствам, но и заходит в его прототип, это может привести к проблемам
        `,
        level: 6
    },
    {
        id: 27,
        type: 'questions',
        question: `что происходит со старым значением в переменной, после того как мы ее переопределили?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `при переопределении переменной, старое значение удаляется`,
        level: 4
    },
    {
        id: 28,
        type: 'questions',
        question: `Как будет вести себя результат вычисления, если где-то в выражении будет NaN?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `если где-то в расчете будет NaN, то результатом вычислений с его участием будет NaN.`,
        level: 3
    },
    {
        id: 29,
        type: 'questions',
        question: `чему равно сравнение null == undefined? что можете рассказать об этом сравнении?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `для нестрогого равенства == значений undefined и null действует особое правило:
        эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому null == 0 ложно.`,
        level: 5
    },
    {
        id: 30,
        type: 'questions',
        question: `Как сравниваются строки?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Строки сравниваются посимвольно в лексикографическом порядке`,
        level: 4
    },
    {
        id: 31,
        type: 'questions',
        question: `Что вы можете рассказать про оператор "??"`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Оператор "??" был добавлен совсем недавно - из двух аргументов он возвращает, тот у которого значение
        определено (null/undefined он отсеивает). У него низкий приоритет, поэтому для его использования скорее
        всего потребуются скобки. Также этот оператор нельзя использовать с операторами ||, &&, но можно обойти
        это ограничение с помощью скобок.
        `,
        level: 5
    },
    {
        id: 32,
        type: 'questions',
        question: `Как можно завершить цикл, или перейти к следующей итерации цикла?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        для завершения цикла используется break, для того, чтобы перейти к следующей итерации используется continue
        <br>
        <pre>
        for (let i = 0; i < 10; i++) {
            // если true, пропустить оставшуюся часть тела цикла
            if (i % 2 == 0) continue;
            alert(i); // 1, 3, 5, 7, 9
        }
        </pre>
        `,
        level: 5
    },
    {
        id: 33,
        type: 'questions',
        question: `Что происходит с внешней переменной, если в функции мы объявляем переменную с таким же именем`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю.`,
        level: 5
    },
    {
        id: 34,
        type: 'questions',
        question: `Что такое параметр по умолчанию, как его задать?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `параметр по умолчанию - это значение параметра, используемое функцией, если значения параметра
        не было передано. Мы можем присвоить параметр по умолчанию, когда объявляем параметры.`,
        level: 3
    },
    {
        id: 35,
        type: 'questions',
        question: `Что произойдет если использовать return без значения?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Пустой return аналогичен return undefined. Он приведет к немедленному выходу из функции!`,
        level: 3
    },
    {
        id: 36,
        type: 'questions',
        question: `Почему не следует добавлять перенос строки между return и его значением?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `потому что код не выполнится, js подставит точку с запятой после return.
        Но можно осуществить перенос с помощью скобки после return`,
        level: 3
    },
];

const a = document.getElementById('asd')
const t = questions[4].fullAnswer
a.innerHTML = t