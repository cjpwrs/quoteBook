angular.module("quoteBook").service("dataService", function () {
    var quotes = [
        { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse', id:0},
        { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill', id:1},
        { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein', id:2},
        { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost', id:3},
        { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart', id:4},
        { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon', id:5},
        { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis', id:6}
    ];
    
    function quoteMaker(text, author){
        this.text = text;
        this.author = author;
        this.id = quotes.length;
    }
    
    this.hideQuote = function (idx) {
        quotes[idx].hide = !quotes[idx].hide;

    }

    this.getQuotes = function(){
        return quotes;
    }

    this.text = "";
    this.author = "";

    this.addQuote = function(text, author){
        if(text)
            quotes.push(new quoteMaker(text, author));

    };

    this.removeQuote = function (text) {
        for(var i = 0; i < quotes.length; i++) {
            if(text === quotes[i].text){
                quotes.splice(i, 1);
            };
        }


    };

    this.selectorOptions = [
        "text", "author"
    ]
});
