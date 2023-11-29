export default {
  myFun1: () => {
    const tripId = String(Input2.text); // Get the trip ID from the input widget
    if (tripId) { // Check if the trip ID is not empty
      DeleteTrip.run({ pathParams: { tripId: tripId } }, () => {
        // Success callback
        showAlert('Trip deleted successfully!', 'success');
      }, () => {
        // Error callback
        showAlert('Failed to delete trip.', 'error');
      });
    } else {
      showAlert('Please enter a Trip ID.', 'info');
    }
  }
}