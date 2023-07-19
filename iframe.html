<!doctype html>
<html>
<head>
</head>
<body>
    <script>
        // Function to check if cookies are enabled in the user's browser.
        const checkCookiesEnable = () => {
            // Check if cookies are enabled using the navigator.cookieEnabled property.
            let isCookieEnabled = (window.navigator.cookieEnabled) ? true : false;
            
            // If the browser doesn't support the navigator.cookieEnabled property or it is explicitly set to false,
            // try to set a test cookie to check if cookies are enabled.
            if (typeof window.navigator.cookieEnabled == "undefined" && !isCookieEnabled) {
                // Attempt to set a test cookie named "testcookie".
                document.cookie = "testcookie";
                // Check if the test cookie can be retrieved from the document.cookie property,
                // indicating that cookies are enabled.
                isCookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
            }

            return isCookieEnabled; // Return the result indicating whether cookies are enabled.
        }

        // Immediately Invoked Function Expression (IIFE) to handle the 'message' event.
        (function () {
            window.addEventListener('message', event => {
                try {
                    let data = JSON.parse(event.data); // Parse the received message data as JSON.
                    if (data['test'] !== 'cookie') // Check if the received message is for testing cookies.
                        return; // If not, do nothing and return.

                    let result = checkCookiesEnable(); // Call the function to check if cookies are enabled.

                    // Post the result back to the parent window with a message containing the 'result' property.
                    parent.postMessage(JSON.stringify({
                        'result': result
                    }), event.origin);
                }
                catch (e) {
                    console.error(e); // Log any errors that might occur during the process.
                }
            });
        })();
    </script>
</body>
</html>
