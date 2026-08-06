// Sample tracking data (would normally come from a server)
const trackingData = {
  'FDX545515462': {
    trackingNumber: 'FDX545515462',
    status: 'On Hold',
    estimatedDelivery: '2026-08-10',
    origin: 'Washington, DC',
    destination: 'Pittsburgh, PA',
    service: 'Standard Shipping',
    weight: '2.6 lbs',
    shipDate: '2026-08-03',
    items: '1 package',
    currentLocation: 'Chicago, IL',
    lastUpdated: '2026-07-17T13:45:20',
    events: [
      {
        status: 'Arrived at FedEx Facility',
        location: 'Portland, OR',
        timestamp: '2026-07-17T13:15:00',
        description: 'Package arrived at FedEx sorting facility.'
      },
      {
        status: 'In Transit',
        location: 'Washington, DC',
        timestamp: '2026-07-17T12:45:00',
        description: 'Package has departed origin facility.'
      },
      {
        status: 'Shipment Information Sent',
        location: 'Washington, DC',
        timestamp: '2026-07-17T09:30:00',
        description: 'Shipment information sent to FedEx.'
      }
    ]
  },
  'FDX557314482': {
    trackingNumber: 'FDX557314482',
    status: 'On Hold',
    estimatedDelivery: '2026-08-10',
    origin: 'California, CA',
    destination: 'Waterbury, Connecticut',
    service: 'Standard Shipping',
    weight: '2.6 lbs',
    shipDate: '2026-08-03',
    items: '1 package',
    currentLocation: 'Michigan, MI',
    lastUpdated: '2026-08-06T20:30:00',
    events: [
      {
        status: 'On Hold',
        location: 'Romulus, MI',
        timestamp: '2026-08-05T18:00:00',
        description: 'Shipment is currently on hold at the carrier processing facility.'
      },
      {
        status: 'In Transit',
        location: 'Romulus, MI',
        timestamp: '2026-08-05T16:15:00',
        description: 'Package arrived at sorting facility.'
      },
      {
        status: 'In Transit',
        location: 'Romulus, MI',
        timestamp: '2026-08-05T13:20:00',
        description: 'Package is in transit.'
      },
      {
        status: 'In Transit',
        location: 'Phoenix, AZ',
        timestamp: '2026-08-05T10:05:00',
        description: 'Package departed processing hub.'
      },
      {
        status: 'Arrived at Facility',
        location: 'Phoenix, AZ',
        timestamp: '2026-08-04T21:30:00',
        description: 'Package arrived at carrier hub.'
      },
      {
        status: 'In Transit',
        location: 'Commerce, CA',
        timestamp: '2026-08-04T13:25:00',
        description: 'Package is out for delivery.'
      },
      {
        status: 'Arrived at Facility',
        location: ''Commerce, CA',
        timestamp: '2026-08-03T18:15:00',
        description: 'Package arrived at local FedEx facility.'
      },
      {
        status: 'Picked Up',
        location: 'Los Angeles, CA',
        timestamp: '2026-08-03T13:30:00',
        description: 'Package picked up by carrier.'
      },
      {
        status: 'Shipment Information Sent',
        location: 'Los Angeles, CA',
        timestamp: '2026-08-03T09:20:00',
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
