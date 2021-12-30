import Iquestions from './Iquestions'

const questions: Array<Iquestions> = [
    {
        id: 1,
        type: 'htmlCssQuestions',
        question: `Что делает doctype?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `тег DOCTYPE сообщает валидатору, какую именно версию (X)HTML вы используете в своей странице.
        Этот тег должен всегда находиться в первой строке каждой страницы. Если он отсутсвует, или написана его старая версия,
        то браузер перейдет в загадочный режим(quirk), и будет пытаться разобрать вашу страницу так, как вывел бы IE4`,
        level: 5,
        show: false
    },
    {
        id: 2,
        type: 'htmlCssQuestions',
        question: `Для чего нужны data-атрибуты?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `data - атрибуты позволяют хранить дополнительную информацию в стандартных элементах HTML,
        без хаков вроде нестандартных атрибутов`,
        level: 5,
        show: false
    },
    {
        id: 3,
        type: 'htmlCssQuestions',
        question: `Зачем использовать srcset атрибут в теге изображения? Объясните процесс,
        который использует браузер при оценке содержимого этого атрибута.`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `srcset предназначен для объявления адаптивных изображений. Браузер самостоятельно анализирует размер
        экрана пользователя и решает,
        какую из объявленных картинок (т.е. какой размер картинки) выбрать для демонстрации.`,
        level: 5,
        show: false
    },
    {
        id: 4,
        type: 'htmlCssQuestions',
        question: `Что такое HTML?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `HTML (HyperText Markup Language) - это язык гипертекстовой разметки.
        Он используется для того, чтобы дать браузеру понять, как нужно отображать загруженный сайт.`,
        level: 3,
        show: false
    },
    {
        id: 5,
        type: 'htmlCssQuestions',
        question: `Отличия Div от Span`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Div - блочный элемент (занимает всю ширину, которая ему предоставляется)
        <br>
        Span - строчный элемент (ширина ограничена контентом)`,
        level: 1,
        show: false
    },
    {
        id: 6,
        type: 'htmlCssQuestions',
        question: `Как мы можем отправить данные на сервер в форме без использования javascript?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `С помощью атрибута action в теге form, также можно обозначить метод отправки с помощью атрибута method`,
        level: 1,
        show: false
    },
    {
        id: 7,
        type: 'htmlCssQuestions',
        question: `Какие вы знаете селекторы Css?`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Универсальный селектор: *
        <br>
        Селектор типа элемента: ul, td
        <br>
        Селектор идентификатора: #id
        <br>
        Селектор класса: .box
        <br>
        Любой Потомок: #id .box
        <br>
        Дочерний: #id> .box
        `,
        level: 3,
        show: false
    },
    {
        id: 8,
        type: 'htmlCssQuestions',
        question: `Расскажите о приоритетах селекторов`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        От больше к меньшему: !important, inline styles, #id, селектора класса, селектор элемента
        `,
        level: 5,
        show: false
    },
    {
        id: 9,
        type: 'htmlCssQuestions',
        question: `Расскажите какие свойства есть у position, и что они делают`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `
        Свойства: position: absolute, relative, sticky, fixed, static
        <br>
        absolute - элемент расположен относительно его ближайшего относительно (relative) позиционированного
        предка, если таковой имеется; в противном случае он помещается относительно исходного содержащего блока.
        Его конечная позиция определяется значениями top, right, bottom, и left.
        <br>
        relative (относительно) - Элемент позиционируется в соответствии с нормальным потоком документа,
        а затем смещается относительно себя на основе значений top, right, bottom и left. Смещение не влияет на
        положение любых других элементов; таким образом, пространство, заданное для элемента в макете страницы,
        такое же, как если бы позиция была static.
        <br>
        sticky - Элемент позиционируется в соответствии с нормальным потоком документа, а
        затем смещается относительно его ближайшего прокручивающего предка
        ("прилипает к верху страницы при прокрутке")
        <br>
        static - Это значение позволяет элементу находиться в обычном его состоянии,
        расположенном на своём месте в документе. Свойства top, right, bottom, left и z-index не
        применяются к данному элементу. Это значение по умолчанию.
        <br>
        fixed - По своему действию это значение близко к absolute, но в отличие от него привязывается
        к указанной свойствами left, top, right и bottom точке на экране и не меняет своего положения
        при прокрутке веб-страницы.
        `,
        level: 6,
        show: false
    },
    {
        id: 10,
        type: 'htmlCssQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `AAA`,
        level: 1,
        show: false
    },
    {
        id: 11,
        type: 'htmlCssQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `AAA`,
        level: 1,
        show: false
    },
    {
        id: 12,
        type: 'htmlCssQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `AAA`,
        level: 1,
        show: false
    },
    {
        id: 13,
        type: 'htmlCssQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `AAA`,
        level: 1,
        show: false
    },
    {
        id: 14,
        type: 'htmlCssQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `AAA`,
        level: 1,
        show: false
    },
    {
        id: 15,
        type: 'htmlCssQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `AAA`,
        level: 1,
        show: false
    },
    {
        id: 16,
        type: 'htmlCssQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `AAA`,
        level: 1,
        show: false
    },
    {
        id: 17,
        type: 'htmlCssQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `AAA`,
        level: 1,
        show: false
    },
    {
        id: 18,
        type: 'htmlCssQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `AAA`,
        level: 1,
        show: false
    },
    {
        id: 19,
        type: 'htmlCssQuestions',
        question: `ABRA`,
        answers: {
            answer1: '-',
            answer2: '-',
            answer3: '-',
            correctAnswer: '-',
        },
        fullAnswer: `AAA`,
        level: 1,
        show: false
    },
]