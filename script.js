class Quiz {
    constructor(question){
        this.question = question;
        this.CurrentQuestionIndex = 0;
        this.score = 0;
    }
    getCurrentQuestion(){
        return this.question [this.CurrentQuestionIndex];
    }
  checkAnswer(selectedOption) {
        if (selectedOption === this.getCurrentQuestion().correctAnswer) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }

    isQuizover(){
        return this.currentQuestionIndex >= this.question.length;
    }
}
/*
class Quiz { 1. this define a class called quiz
             2. A class is a blueprint of creating object
             3. In this case, the Quiz class will manage a quiz's question, track progress, and calculate score.}

constructor { 1. the constructor is a special method that runs when a new object is created from     the Quiz class.
              2. It initializes the quiz with a set of questions.}

this.question = question; ( 1. this.question stores the question parameter insiden the object.
                            2. It allows the quiz instance to access the list of question later.
                            3. Example of question array:
                            code:
                            const question = [
                            { question : "what is 5+5?", answer = "10"}
                             { question : "what is the capital of India", answer = "New Delhi"}
                              ];
                              )
    
this.CurrentQuestionIndex = 0; ( 1. this tracks which question the quiz is currently on.
                                 2. It starts at 0, meaning the first question in the question array.
                                 3. Each time a user answer, CurrentQuestionIndex will increase to move to the question.)

this.score = 0; (1. the score variable tracks the number of correct answer increases the score
                 2. it satrts at 0, and each correct answer increase the score.)

getcurrentquestion() { 1.This method (function inside the class) returns the current question object from the quiz.}

return this.question [this.CurrentQuestionIndex]; {1. the retrives the current question object from the question array using this.CurrentQuestionIndex.

Example:

const quiz = new quiz(question);
console.log(quiz.getCurrentQuestion());

if CurrentQuestionIndex = 0, it returns
{ question : "what is 5+5?", answer = "10"};
 
}

 */
