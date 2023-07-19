// Function cookieTest takes two parameters: iFrameUri (URL of the iframe) and callBack (callback function).
const cookieTest = (iFrameUri, callBack) => {
  // Define the messageHandler function to handle the event when a message is received.
  let messageHandler = (event) => {     
    // Parse the received message data as JSON.
    const data = JSON.parse(event.data);
    // Call the callBack function with the 'result' property from the received data.
    callBack(data['result']);
    // Remove the messageHandler event listener to avoid memory leaks.
    window.removeEventListener('message', messageHandler);
    // Remove the iframe from the document body.
    document.body.removeChild(frame);
  };

  // Add an event listener to the 'message' event, which will trigger the messageHandler function when a message is received.
  window.addEventListener('message', messageHandler);

  // Create an iframe element.
  const frame = document.createElement('iframe');
  // Set the source URL of the iframe to the provided iFrameUri.
  frame.src = iFrameUri; 
  // Set the sandbox attribute of the iframe to allow executing scripts and accessing the same-origin.
  frame.sandbox = "allow-scripts allow-same-origin";
  // Hide the iframe by setting its display style to 'none'.
  frame.style.display = 'none';
  // When the iframe is loaded, post a message to its content window with the JSON data { 'test': 'cookie' }.
  // This message will be received by the iframe's content and processed by the messageHandler function.
  frame.onload = (e) => {
    frame.contentWindow.postMessage(JSON.stringify({ 'test': 'cookie' }), '*');
  };

  // Add the iframe to the document body.
  document.body.appendChild(frame);
};

// Call the cookieTest function with the provided URL and a callback function.
cookieTest('https://victor.com.de/cookiescheck/', (result) => {
  // If the result is falsy (e.g., null, undefined, false), display an error message.
  if(!result) {
    // YOUR CODE ....
  } else {
    // YOUR CODE ....
  }
});
