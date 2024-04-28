var app = angular.module('touristApp', []);

app.controller('MainController', function($scope) {
    // Sample data for Ranidah Waterfall
    $scope.description = "Ranidah Waterfall is a breathtaking natural attraction located in the heart of Chhattisgarh. It is known for its pristine beauty, lush green surroundings, and cascading waterfalls.";
    $scope.nearestLandmark = "Bastar Wildlife Sanctuary";
    $scope.nearestTrainStation = "Jagdalpur Railway Station";
    $scope.nearestBusStand = "Jagdalpur Bus Stand";
    $scope.visitingHours = "9:00 AM - 5:00 PM";
    $scope.entryFees = "Rs. 50 per person (for adults)";
    $scope.nearbyAttractions = ["Bastar Palace", "Chitrakote Falls", "Tirathgarh Waterfall"];
    $scope.activities = ["Trekking", "Nature Photography", "Picnicking"];
});
