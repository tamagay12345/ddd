// Sample tracking data (would normally come from a server)
const trackingData = {
  'FDX766567854': {
    trackingNumber: 'FDX766567854',
    status: 'In Transit',
    estimatedDelivery: '2025-05-12',
    origin: 'San Bernardino, CA',
    destination: 'Waterbury, CT',
    service: 'Express Shipping',
    weight: '5.2 lbs',
    shipDate: '2025-05-08',
    items: '1 package',
    currentLocation: 'Phoenix, AZ',
    lastUpdated: '2025-05-08T20:15:00',
    events: [
      
      {
        status: 'Arrived at FedEx Facility',
        location: 'San Bernardino, CA',
        timestamp: '2025-05-08T18:15:00',
        description: 'Package arrived at FedEx sorting facility.'
      },
      {
        status: 'In Transit',
        location: 'San Bernardino, CA',
        timestamp: '2025-05-08T16:45:00',
        description: 'Package has departed origin facility.'
      },
      {
        status: 'Shipped',
        location: 'San Bernardino, CA',
        timestamp: '2025-05-08T11:30:00',
        description: 'Shipment information sent to FedEx.'
      }
    ]
  },
  'FDX987654321': {
    trackingNumber: 'FDX987654321',
    status: 'Delivered',
    estimatedDelivery: '2025-05-06',
    origin: 'Boston, MA',
    destination: 'Austin, TX',
    service: 'Standard Shipping',
    weight: '3.8 lbs',
    shipDate: '2025-05-01',
    items: '1 package',
    currentLocation: 'Austin, TX',
    lastUpdated: '2025-05-06T13:45:00',
    events: [
      {
        status: 'Delivered',
        location: 'Austin, TX',
        timestamp: '2025-05-06T13:45:00',
        description: 'Package delivered. Signed for by: T.SMITH'
      },
      {
        status: 'Out For Delivery',
        location: 'Austin, TX',
        timestamp: '2025-05-06T08:30:00',
        description: 'Package is out for delivery.'
      },
      {
        status: 'At Local Facility',
        location: 'Austin, TX',
        timestamp: '2025-05-05T19:15:00',
        description: 'Package arrived at local FedEx facility.'
      },
      {
        status: 'In Transit',
        location: 'Dallas, TX',
        timestamp: '2025-05-04T11:30:00',
        description: 'Package in transit to destination.'
      },
      {
        status: 'Shipped',
        location: 'Boston, MA',
        timestamp: '2025-05-01T14:20:00',
        description: 'Shipment information sent to FedEx.'
      }
    ]
  }
};

// DOM Elements
const trackingForm = document.getElementById('tracking-form');
const trackingNumberInput = document.getElementById('tracking-number');
const errorMessage = document.getElementById('error-message');
const trackingResult = document.getElementById('tracking-result');

// Functions
function formatDate(dateString) {
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatDateTime(dateString) {
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

function validateTrackingNumber(trackingNumber) {
  // Simple validation for FedEx tracking number format
  const fedexPattern = /^(FDX\d{9}|\d{10}|\d{12}|FDX\d{12}|\d{15})$/i;
  return fedexPattern.test(trackingNumber);
}

function getStatusIcon(status) {
  status = status.toLowerCase();
  if (status.includes('delivered')) {
    return '✅';
  } else if (status.includes('transit')) {
    return '🚚';
  } else if (status.includes('out for delivery')) {
    return '🚚';
  } else if (status.includes('facility')) {
    return '🏢';
  } else if (status.includes('shipped') || status.includes('information received')) {
    return '📦';
  } else {
    return '📦';
  }
}

function displayTrackingResult(trackingData) {
  // Set tracking ID
  document.getElementById('tracking-id').textContent = trackingData.trackingNumber;
  
  // Set status information
  document.getElementById('status').textContent = trackingData.status;
  document.getElementById('status-description').textContent = `Your package is ${trackingData.status.toLowerCase()}`;
  document.getElementById('status-icon').textContent = getStatusIcon(trackingData.status);
  
  // Set delivery date
  document.getElementById('delivery-date').textContent = formatDate(trackingData.estimatedDelivery);
  
  // Set shipment details
  document.getElementById('origin').textContent = trackingData.origin;
  document.getElementById('destination').textContent = trackingData.destination;
  document.getElementById('service').textContent = trackingData.service;
  document.getElementById('weight').textContent = trackingData.weight;
  document.getElementById('ship-date').textContent = formatDate(trackingData.shipDate);
  document.getElementById('items').textContent = trackingData.items;
  
  // Create timeline
  const timelineContainer = document.getElementById('tracking-timeline');
  timelineContainer.innerHTML = '';
  
  trackingData.events.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.className = 'timeline-event';
    
    eventElement.innerHTML = `
      <div class="timeline-date">${formatDateTime(event.timestamp)}</div>
      <div class="timeline-status">${event.status}</div>
      <div class="timeline-location">${event.location}</div>
      <div class="timeline-description">${event.description}</div>
    `;
    
    timelineContainer.appendChild(eventElement);
  });
  
  // Show the result
  trackingResult.classList.remove('hidden');
}

// Event Listeners
trackingForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const trackingNumber = trackingNumberInput.value.trim();
  
  // Validate tracking number
  if (!validateTrackingNumber(trackingNumber)) {
    errorMessage.textContent = 'Invalid tracking number format. Please check and try again.';
    errorMessage.classList.remove('hidden');
    trackingResult.classList.add('hidden');
    return;
  }
  
  // Check if tracking number exists in our data
  if (trackingData[trackingNumber]) {
    errorMessage.classList.add('hidden');
    displayTrackingResult(trackingData[trackingNumber]);
  } else {
    errorMessage.textContent = 'Tracking number not found. Please check and try again.';
    errorMessage.classList.remove('hidden');
    trackingResult.classList.add('hidden');
  }
});
