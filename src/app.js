function ConverterCtrl($scope) {
  $scope.rules = angular.copy(BootstrapUpgrader.rules);
  $scope.source = '<a class="btn">Button</a>';
  
  $scope.result = "";
  
  $scope.runRules = function() {
    var report = BootstrapUpgrader.perform($scope.source, true);
    $scope.result = report.output;
    $("#pretty").html(hljs.highlightAuto(report.output).value);
    for (var i = 0; i < report.results.length; i++) {
      var message = report.results[i] || "No Changes";
      $scope.rules[i].runMessage = message;
      $scope.rules[i].runClass = (message === "No Changes") ? "label-default" : "label-success";
    }
    $scope.hasRun = true;
  }
}