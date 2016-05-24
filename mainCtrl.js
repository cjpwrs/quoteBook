angular.module("quoteBook").controller("mainCtrl", function($scope, dataService){

    $scope.quotes = dataService.getQuotes();
    $scope.hideQuote = dataService.hideQuote;
    $scope.addQuote = function(text, author){
        dataService.addQuote(text, author);
        $scope.text = "";
        $scope.author = "";
    }
    $scope.removeQuote = dataService.removeQuote;

    $scope.text = "" //dataService.text;
    $scope.author = "" //dataService.author;
    $scope.name = "CJ"
    $scope.selectorOptions = dataService.selectorOptions;
    $scope.selected;
});
