class Quiz {
    constructor(question){
        this.question = question;
        this.CurrentQuestionIndex = 0;
        this.score = 0;
    }
    getCurrentQuestion(){
        return this.question [this.CurrentQuestionIndex];
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
    


 */
