import Iquestions from './Iquestions'

const questions: Array<Iquestions> = [
    {
        id: 1,
        type: 'javaScriptQuestions',
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
        level: 1,
        show: false
    },
    {
        id: 2,
        type: 'javaScriptQuestions',
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
        level: 1,
        show: false
    },
    {
        id: 3,
        type: 'javaScriptQuestions',
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
        level: 4,
        show: false
    },
    {
        id: 4,
        type: 'javaScriptQuestions',
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
        level: 1,
        show: false
    },
    {
        id: 5,
        type: 'javaScriptQuestions',
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
        level: 6,
        show: false
    },
    {
        id: 6,
        type: 'javaScriptQuestions',
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
        level: 6,
        show: false
    },
    {
        id: 7,
        type: 'javaScriptQuestions',
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
        level: 5,
        show: false
    },
    {
        id: 8,
        type: 'javaScriptQuestions',
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
        level: 4,
        show: false
    },
    {
        id: 9,
        type: 'javaScriptQuestions',
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
        level: 5,
        show: false
    },
    {
        id: 10,
        type: 'javaScriptQuestions',
        question: `Что такое глобальные переменные, какие проблемы могут быть с ними связаны?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Глобальные переменные - переменные, которые объявлены вне какого-либо блока, и их область
        видимости весь скрипт. Из-за этого могут возникуть проблемы с инициализацией и перезаписью переменных`,
        level: 2,
        show: false
    },
    {
        id: 11,
        type: 'javaScriptQuestions',
        question: `Что такое ошибка undefined`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `это значит, что мы не присвоили значение переменной`,
        level: 2,
        show: false
    },
    {
        id: 12,
        type: 'javaScriptQuestions',
        question: `question`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `string`,
        level: 1,
        show: false
    },
    {
        id: 13,
        type: 'javaScriptQuestions',
        question: `В чем отличия === и == ?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Строгое сравнение(===) проверяет равенство без приведения типов.
        Например если сравнить ““ и false, то результат строгого неравенства будет false,а если сравнивать не строгим, то true`,
        level: 1,
        show: false
    },
    {
        id: 14,
        type: 'javaScriptQuestions',
        question: `Что такое null?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `null - это тип примитив, который представляет отсутствие какого-либо объектного значения.
        null часто присваивается в местах где ожидается объект, но подходящего объекта нет.`,
        level: 3,
        show: false
    },
    {
        id: 15,
        type: 'javaScriptQuestions',
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
        level: 3,
        show: false
    },
    {
        id: 16,
        type: 'javaScriptQuestions',
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
        level: 3,
        show: false
    },
    {
        id: 17,
        type: 'javaScriptQuestions',
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
        level: 3,
        show: false
    },
    {
        id: 18,
        type: 'javaScriptQuestions',
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
        level: 5,
        show: false
    },
    {
        id: 19,
        type: 'javaScriptQuestions',
        question: `Можно ли изменить содержимое объекта, если объявление произошло через const? Если да, то почему?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Объект можно изменить, если он объявлен через константу. const защищает от изменений только саму переменную, но не ее содержимое`,
        level: 5,
        show: false
    },
    {
        id: 20,
        type: 'javaScriptQuestions',
        question: `Можем ли мы получить свойство в объекте, которого не существует?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Да. В отличии от других языков js может получить доступ к любому свойству. При обращении к свойству, которого нет, js зайдет в прототип объекта, если и его там нет, то вернется undefined.`,
        level: 6,
        show: false
    },
    {
        id: 21,
        type: 'javaScriptQuestions',
        question: `Как мы можем проверить существование свойства в объекте?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `С помощь оператора in, мы можем проверить существует ли свойство.`,
        level: 4,
        show: false
    },
    {
        id: 22,
        type: 'javaScriptQuestions',
        question: `Упорядочены ли свойства объектов?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `свойства упорядочены особым образом: свойства с целочисленными ключами
        сортируются по возрастанию, остальные располагаются в порядке создания.`,
        level: 6,
        show: false
    },
    {
        id: 23,
        type: 'javaScriptQuestions',
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
        level: 8,
        show: false
    },
    {
        id: 24,
        type: 'javaScriptQuestions',
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
        level: 5,
        show: false
    },
    {
        id: 25,
        type: 'javaScriptQuestions',
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
        level: 5,
        show: false
    },
    {
        id: 26,
        type: 'javaScriptQuestions',
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
        level: 6,
        show: false
    },
    {
        id: 27,
        type: 'javaScriptQuestions',
        question: `что происходит со старым значением в переменной, после того как мы ее переопределили?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `при переопределении переменной, старое значение удаляется`,
        level: 4,
        show: false
    },
    {
        id: 28,
        type: 'javaScriptQuestions',
        question: `Как будет вести себя результат вычисления, если где-то в выражении будет NaN?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `если где-то в расчете будет NaN, то результатом вычислений с его участием будет NaN.`,
        level: 3,
        show: false
    },
    {
        id: 29,
        type: 'javaScriptQuestions',
        question: `чему равно сравнение null == undefined? что можете рассказать об этом сравнении?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `для нестрогого равенства == значений undefined и null действует особое правило:
        эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому null == 0 ложно.`,
        level: 5,
        show: false
    },
    {
        id: 30,
        type: 'javaScriptQuestions',
        question: `Как сравниваются строки?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Строки сравниваются посимвольно в лексикографическом порядке`,
        level: 4,
        show: false
    },
    {
        id: 31,
        type: 'javaScriptQuestions',
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
        level: 5,
        show: false
    },
    {
        id: 32,
        type: 'javaScriptQuestions',
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
        level: 5,
        show: false
    },
    {
        id: 33,
        type: 'javaScriptQuestions',
        question: `Что происходит с внешней переменной, если в функции мы объявляем переменную с таким же именем`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю.`,
        level: 5,
        show: false
    },
    {
        id: 34,
        type: 'javaScriptQuestions',
        question: `Что такое параметр по умолчанию, как его задать?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `параметр по умолчанию - это значение параметра, используемое функцией, если значения параметра
        не было передано. Мы можем присвоить параметр по умолчанию, когда объявляем параметры.`,
        level: 3,
        show: false
    },
    {
        id: 35,
        type: 'javaScriptQuestions',
        question: `Что произойдет если использовать return без значения?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Пустой return аналогичен return undefined. Он приведет к немедленному выходу из функции!`,
        level: 3,
        show: false
    },
    {
        id: 36,
        type: 'javaScriptQuestions',
        question: `Почему не следует добавлять перенос строки между return и его значением?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `потому что код не выполнится, js подставит точку с запятой после return.
        Но можно осуществить перенос с помощью скобки после return`,
        level: 3,
        show: false
    },
    {
        id: 37,
        type: 'javaScriptQuestions',
        question: `функция это значение?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `да, функция это значение, и мы можем работать с ней как со значением - копировать
        функцию в другую переменную, передавать в качестве параметра и т.д`,
        level: 3,
        show: false
    },
    {
        id: 38,
        type: 'javaScriptQuestions',
        question: `Что такое callback функция?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        коллбэк функция(функция обратного вызова) - функция, которая передается как аргумент другой функции.
        <br>
        <pre>
        const parent = (func) => {
            func()
        }
        const params = () => {
            console.log(123)
        }
        parent(params) // 123
        </pre>
        `,
        level: 4,
        show: false
    },
    {
        id: 39,
        type: 'javaScriptQuestions',
        question: `Что такое Json`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Javascript Object Notation(json) - Формат обмена и хранения данных, основанной на javascript.`,
        level: 3,
        show: false
    },
    {
        id: 40,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
    {
        id: 41,
        type: 'javaScriptQuestions',
        question: `Что такое Ajax`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Asynchronous Javascript and XML(Ajax) - это набор методов для веб-разработки,
        которые позволяют веб-приложением работать асинхронно - обрабатывать любые запросы в фоновом режиме`,
        level: 3,
        show: false
    },
    {
        id: 42,
        type: 'javaScriptQuestions',
        question: `Что такое a11y (Accessibility)`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Accessibility - доступность клиент-ресурса, для людей с ограниченным возможностями к информации.`,
        level: 5,
        show: false
    },
    {
        id: 43,
        type: 'javaScriptQuestions',
        question: `В чем отличие forEach от map?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        map() может вернуть новый массив return. forEach() выбрасывает значение return и всегда возвращает undefined.
        <br>
        Второе различие между этими методами: map() можно привязывать к другим методам - reduce(), sort(), filter() и т.д. А вот
        forEach(), как вы можете догадаться, возвращается undefined.
        `,
        level: 3,
        show: false
    },
    {
        id: 44,
        type: 'javaScriptQuestions',
        question: `В чем разница между объектами хоста и собственными объектами?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Встроенные объекты - основные предопределенные объекты всегда доступны в JavaScript. String , Math , RegExp , Object , Function и т.д.
        <br>
        Объекты хоста - объекты, которые предоставляются например средой браузера window , XmlHttpRequest, DOM и т.д. Они отличаются
        от встроенных объектов, поскольку не во всех средах будут одни и те же объекты хоста.
        <br>
        Объекты пользователя - объекты, определенные в коде пользователем
        `,
        level: 7,
        show: false
    },
    {
        id: 45,
        type: 'javaScriptQuestions',
        question: `Что такое тернарный оператор, почему он так называется`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `тернарный оператор - оператор "?", он так называется, потому что может
        применяться к 3 операндам. Его логика - Условие ? Ложь : правда. Запинается на правде`,
        level: 3,
        show: false
    },
    {
        id: 46,
        type: 'javaScriptQuestions',
        question: `что такое функции высшего порядка?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Это функция, принимающая в качестве аргументов другие функции или возвращающая другую функцию в качестве результата`,
        level: 3,
        show: false
    },
    {
        id: 47,
        type: 'javaScriptQuestions',
        question: `Что происходит с массивами, когда мы пытаемся их сложить?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Массивы не имеют ни Symbol.toPrimitive, ни функционирующего valueOf,
        они реализуют только преобразование toString,таким образом,
        здесь [] становится пустой строкой, [1] становится "1", а [1,2] становится "1,2".`,
        level: 5,
        show: false
    },
    {
        id: 48,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
    {
        id: 49,
        type: 'javaScriptQuestions',
        question: `Почему js не может работать напрямую с памятью компьютера?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Потому что js интерпретируемый язык, и за его выполнение отвечает браузер,
        который не дает возможность взаимодействовать на память компьютера напрямую`,
        level: 6,
        show: false
    },
    {
        id: 50,
        type: 'javaScriptQuestions',
        question: `Что происходит, когда мы вводим url в адресную строку и нажимаем enter?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `Браузер ищет сервер по IP адресу, устанавливает соединение, отправляет HTTP запрос
        на получение контента, первым приходит HTML файл, который браузер обрабатывает и при необходимости отправляет запросы на 
        получение js файлов, css стилей и т.д`,
        level: 6,
        show: false
    },
    {
        id: 51,
        type: 'javaScriptQuestions',
        question: `В чем отличия неопределенной переменной и необъявленной?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Неопределенная переменная - это переменная, которую мы объявили, но на данный момент не содержит никакого значения
        <br>
        необъявленная переменная - это переменная, которая была формально не объявлена в доступной области видимости
        `,
        level: 4,
        show: false
    },
    {
        id: 52,
        type: 'javaScriptQuestions',
        question: `Почему мы можем обратиться к свойству примитивного типа, ведь это примитив?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `JS прототипно-наследуемый язык, при обращении к свойству примитива js под капотом создает объект-обертку,
        который наследует все свойства и методы глобального объекта того типа данных, к которому мы обратились.`,
        level: 6,
        show: false
    },
    {
        id: 53,
        type: 'javaScriptQuestions',
        question: `Как проверить число на NaN?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Существует несколько способов проверить число на тип NaN - Object.is() isNaN() Полифилл
        <br>
        Рекомендуется использовать 1 вариант, т.к он даст точный результат. Функция isNaN() слишком буквально сравнивает на NaN,
        например функция вернет true, если значение будет undefined,
        NaN, {}, 'someString'. Это происходит потому что значение приводится к числу, и оно является NaN
        `,
        level: 5,
        show: false
    },
    {
        id: 54,
        type: 'javaScriptQuestions',
        question: `Как работает eventLoop?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Javascript - однопоточный, асинхронный язык. Асинхронность достигается благодаря eventLoop.
        <br>
        Когда браузер начинает интерпретировать наш код, то он делает это синхронно. Синхронные операции он помещает в callStack где они выполняются
        в порядке очереди (последний зашел - первый вышел). Если интерпретатор видит асинхронную операцию, например: setTimeout, Promise,
        event press key и т.д, то он берет эту операцию и помещает в Task Queue(очередь),
        и продолжает выполнение кода. В это время Task Queue "ждет" пока асинхронная операция завершится, и после этого помещает её в callStack,
        где она выполнится.
        <br>
        Task Queue - делится на микро и макротаски. в микро таски попадают промисы, в макротаски все остальное. <b>у микротасок (промисов)
        приоритет выше, чем у макротасок, поэтому они выполняются раньше.</b>
        <br>
        <pre>
        console.log(1)
        setTimeout(() => {
          console.log(2)
        }, 0)

        new Promise((resolve, reject) => {
          resolve()
        }).then(() => console.log(3))

        console.log(4)
        // result 1 4 3 2
        </pre>
        `,
        level: 7,
        show: false
    },
    {
        id: 55,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
    {
        id: 56,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
    {
        id: 57,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
    {
        id: 58,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
    {
        id: 59,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
    {
        id: 60,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
    {
        id: 61,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
    {
        id: 62,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
    {
        id: 63,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
    {
        id: 64,
        type: 'javaScriptQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: ``,
        level: 3,
        show: false
    },
];