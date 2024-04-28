document.getElementById('itinerary-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user input values
    var destination = document.getElementById('destination').value;
    var duration = parseInt(document.getElementById('duration').value);
    var budget = parseInt(document.getElementById('budget').value);
    var activities = Array.from(document.getElementById('activities').selectedOptions).map(option => option.value);

    // Generate itinerary based on user input (example)
    var itinerary = generateItinerary(destination, duration, budget, activities);

    // Display itinerary
    document.getElementById('itinerary').innerHTML = itinerary;
});

function generateItinerary(destination, duration, budget, activities) {
    // Generate itinerary based on user input (example)
    var itinerary = `
        <h2>Generated Adventure Itinerary for ${destination}</h2>
        <p>Duration of Stay: ${duration} days</p>
        <p>Budget per Person: ${budget} currency</p>
        <p>Preferred Activities: ${activities.join(', ')}</p>
        <p style="color:red;">Our Team will be contacting you Regarding your Trip.</p>
        <p style="color:red;">Thanks for Chosing us!!!</p>
        <!-- Add more details as needed -->
    `;
    return itinerary;
}
