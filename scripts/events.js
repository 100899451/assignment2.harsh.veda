$(document).ready(function() {
    // Function to load events from JSON file or API
    function loadEvents() {
        $.ajax({
            url: 'events.json', // Replace 'events.json' with your JSON file or API endpoint
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                displayEvents(data.events);
            },
            error: function(xhr, status, error) {
                console.error('Error loading events:', error);
            }
        });
    }

    // Function to display events
    function displayEvents(events) {
        var eventsContainer = $('#events-container');
        eventsContainer.empty(); // Clear previous events

        // Iterate through each event and display it
        events.forEach(function(event) {
            var eventHTML = '<div class="col-md-4 mb-4">';
            eventHTML += '<div class="card">';
            eventHTML += '<img src="' + event.image + '" class="card-img-top" alt="' + event.title + '">';
            eventHTML += '<div class="card-body">';
            eventHTML += '<h5 class="card-title">' + event.title + '</h5>';
            eventHTML += '<p class="card-text">' + event.date + '</p>';
            eventHTML += '<p class="card-text">' + event.description + '</p>';
            eventHTML += '</div></div></div>';

            eventsContainer.append(eventHTML);
        });
    }

    // Function to filter events based on search input
    function filterEvents(keyword) {
        var filteredEvents = [];
        events.forEach(function(event) {
            if (event.title.toLowerCase().includes(keyword.toLowerCase()) || event.description.toLowerCase().includes(keyword.toLowerCase())) {
                filteredEvents.push(event);
            }
        });
        displayEvents(filteredEvents);
    }

    // Load events when the page loads
    loadEvents();

    // Event listener for search input
    $('#searchInput').on('input', function() {
        var keyword = $(this).val();
        filterEvents(keyword);
    });
});
