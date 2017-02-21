var app = angular.module('sixSim', []);

app.controller('sixSimController', function($scope){
  $scope.wordArray = ['Please','Potato','Playground','friends','cookies'];

  $scope.styleArray= [{color: 'red'},{color: 'green'},{color: 'blue'},{color: 'pink'},{color: 'yellow', 'background-color':'red'},{color: 'blue', 'background-color':'pink'},{color: 'grey', 'background-color':'orange'}];
  // $scope.styleArray = [class1,class2,class3,class4,class5,class6,class7,class8]


  $scope.phraseArray=['Rain in Spain','Sea Shells By Sea Shore','Helloooo Jeanine']
  $scope.randomArray=[];



  $scope.btnOne = function () {
    var randomWord = $scope.wordArray[Math.floor(Math.random() * $scope.wordArray.length)];
    $scope.randomArray.push({text:randomWord, style:'none'});
  }

  $scope.btnTwo = function () {
    var randomWord = $scope.wordArray[Math.floor(Math.random() * $scope.wordArray.length)];

    var randomStyle = $scope.styleArray[Math.floor(Math.random() * $scope.styleArray.length)];

    $scope.randomArray.push({text:randomWord, style:randomStyle});
  }

  $scope.btnThree = function () {
    var randomPhrase = $scope.phraseArray[Math.floor(Math.random() * $scope.phraseArray.length)];
    $scope.randomArray.push({text:randomPhrase, style:'none'})
  }

  $scope.btnFour = function () {
    var randomPhrase = $scope.phraseArray[Math.floor(Math.random() * $scope.phraseArray.length)];

    var randomStyle = $scope.styleArray[Math.floor(Math.random() * $scope.styleArray.length)];

    $scope.randomArray.push({text:randomPhrase, style:randomStyle});
  }




});
