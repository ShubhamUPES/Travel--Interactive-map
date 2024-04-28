// Function to pin location on the map
function pinLocation() {
    const coordinatesInput = document.getElementById('coordinatesInput').value;
    
    // Split the input into latitude and longitude values
    const [latitudeStr, longitudeStr] = coordinatesInput.split(',').map(coord => coord.trim());
    
    // Convert latitude and longitude strings to numbers
    const latitude = parseFloat(latitudeStr);
    const longitude = parseFloat(longitudeStr);

    // Check if coordinates are valid numbers
    if (isNaN(latitude) || isNaN(longitude)) {
        alert('Invalid coordinates! Please enter valid latitude and longitude.');
        return;
    }

    // Add a red dot marker at the specified coordinates
    new SimpleMapLearn.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);
}
