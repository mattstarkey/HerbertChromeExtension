app.controller("popupController", function($scope){

	$scope.rangeVal = "0";
	
	chrome.storage.sync.get('HerbertFilterLevel', function(data){
		$scope.rangeVal = data.HerbertFilterLevel;
		$scope.$apply();
		$scope.SliderChange();
	});

	$scope.SliderChange = function(){
		$scope.message = "";

		switch ($scope.rangeVal) {
	        case "0":
	            $scope.message = "minimum filter";
	            break;
	        case "1":
	            $scope.message = "medium filter";
	            break;
	        case "2":
	            $scope.message = "maximum filter";
	            break;
	        default:
	    }

	    // saves user selection.
	    saveChanges();
	}

	$scope.SliderChange();	

	function saveChanges() {
        // Get a value saved from input.
        var theValue = $scope.rangeVal;
        // Check that there's some code there.
        if (!theValue) {
          console.log($scope.rangeVal);
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'HerbertFilterLevel': theValue});
    }


})