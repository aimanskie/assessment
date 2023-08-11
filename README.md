# Places Autocomplete with Google Maps

A web application that provides a search autocomplete for places around the world, utilizing the Google Maps API. The app displays a location at the center of a map based on user input and also maintains a history of user searches. These searches can be re-selected from a modal to search again according to previous inputs.

**Note**: This app currently uses a temporary Google Maps API key which will be deleted in a week's time. To use this application beyond this period, you'll need to replace it with your own API key.

## Prerequisites

- Node.js
- npm

## Getting Started

1. **Clone the repository**

   ```bash
   git clone [repository-url]

   ```

2. **Navigate to the project directory**

   ```bash
   cd assessment
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Replace Google Maps API key**

   ### find 'key=' in the script tag below and replace the value with your own API key before '&', as this is the key value pair in query strings.

   ```bash
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRNZvuGQwiWSwYnlSgzwKqRw1xAKPG3w0&libraries=places">
   </script>
   ```

5. **Run the app**

```bash
npm run dev
```
