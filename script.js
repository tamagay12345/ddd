// Sample tracking data (would normally come from a server)
const trackingData = {
  'FDX835672214': {
    trackingNumber: 'FDX835672214',
    status: 'In Transit',
    estimatedDelivery: '2026-05-11',
    origin: 'Washington, DC',
    destination: 'Cobourg, ON',
    service: 'International Shipping',
    weight: '3.8 lbs',
    shipDate: '2026-05-03',
    items: '1 package',
    currentLocation: 'Chicago, IL',
    lastUpdated: '2026-05-04T13:45:20',
    events: [
      {
        status: 'In Transit',
        location: 'Chicago, IL',
        timestamp: '2026-05-04T13:20:00',
        description: 'Package Departed FedEx hub.'
      },
      {
        status: 'In Transit',
        location: 'Portland, OR',
        timestamp: '2026-05-04T11:30:00',
        description: 'Package in transit to destination.'
      },
      {
        status: 'Out For Delivery',
        location: 'Portland, OR',
        timestamp: '2026-05-04T10:00:00',
        description: 'Package is out for delivery.'
      },
      {
        status: 'Arrived at FedEx Facility',
        location: 'Portland, OR',
        timestamp: '2026-05-02T16:15:00',
        description: 'Package arrived at FedEx sorting facility.'
      },
      {
        status: 'In Transit',
        location: 'Washington, DC',
        timestamp: '2026-05-02T12:45:00',
        description: 'Package has departed origin facility.'
      },
      {
        status: 'Shipped',
        location: 'Washington, DC',
        timestamp: '2026-05-02T09:30:00',
        description: 'Shipment information sent to FedEx.'
      }
    ]
  },
  'FDX784593216': {
    trackingNumber: 'FDX784593216',
    status: 'In Transit',
    estimatedDelivery: '2026-05-16',
    origin: 'Flushing, NY',
    destination: 'San Antonio, TX',
    service: 'Standard Shipping',
    weight: '3.8 lbs',
    shipDate: '2026-05-13',
    items: '1 package',
    currentLocation: 'Queens, NY',
    lastUpdated: '2026-05-13T13:30:00',
    events: [
    
      {
        status: 'In Transit',
        location: 'Queens, NY',
        timestamp: '2026-05-13T13:25:00',
        description: 'Package is out for delivery.'
      },
      {
        status: 'Arrived at Facility',
        location: 'Queens, NY',
        timestamp: '2026-05-13T12:15:00',
        description: 'Package arrived at local FedEx facility.'
      },
      {
        status: 'Picked Up',
        location: 'Flushing, NY',
        timestamp: '2026-05-13T11:30:00',
        description: 'Package picked up by carrier.'
      },
      {
        status: 'Shipment Information Sent',
        location: 'Flushing, NY',
        timestamp: '2026-05-13T09:20:00',
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
