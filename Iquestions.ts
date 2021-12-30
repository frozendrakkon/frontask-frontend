export default interface Iquestions {
    id: number;
    type: string;
    question: string;
    answers: {
        answer1: string;
        answer2: string;
        answer3: string;
        correctAnswer: string;
    };
    fullAnswer: string;
    level: number
    show: boolean
}