# What Cookies Check does? 🍪✔️
<p>A simple method to check if the user's web browser supports and allows the use of cookies. Cookies are small pieces of data stored in the user's browser, often used to remember information between visits or track user activities on a website. This code aims to verify whether the browser allows cookies and provides a reliable mechanism to check this capability.</p>
<ul>
  <li>Checks if the user's browser supports cookies.</li>
  <li>Handles browsers that don't support <code>navigator.cookieEnabled</code>.</li>
  <li>Verifies if the browser allows third-party cookies, avoiding errors.</li>
  <li>Provides a reliable mechanism for smooth user experience.</li>
  <li>Enables displaying alternative content when third-party cookies are blocked.</li>
  <li>Prevents user-facing errors due to cookie-related issues.</li>
</ul>

# Case of use
<p>Some browsers have settings to block third-party cookies, and if a user with this configuration accesses a website that has content requiring third-party cookies authorization, the content generates an error and is not displayed to the user. By using this code, it is possible to check if the user's browser allows cookies and create a conditional statement to show alternative content in case the browser blocks third-party cookies. This way, it prevents the user from encountering an error message or having a bad experience.</p>

# How to use
Suppose a website utilizes iframes to embed third-party content. Before loading and interacting with this content, the parent window wants to verify if cookies are enabled in the user's browser. 
<ol>
  <li>In your main webpage, include the <a href="https://github.com/VictorlBueno/cookiescheck/blob/main/caller-example.js" target="_blank">main page code</a> to send a message to the iframe (other webpage) containing the <a href="https://github.com/VictorlBueno/cookiescheck/blob/main/check-cookies-page.html" target="_blank">support page code</a> that needs to be deployed to another domain. Or you can just use the code on the main webpage that contains a link to point to www.victor.com.de/cookiescheck, a website that already has the <a href="https://github.com/VictorlBueno/cookiescheck/blob/main/check-cookies-page.html" target="_blank">support page code</a> implemented.</li>
  <li>The iframe will process the message, perform the cookie test, and reply back to the parent window <code>true</code> or <code>false</code>.</li>
  <li>Based on the result, the parent window can make informed decisions about displaying certain content or enabling specific features that require cookies.</li>
</ol>

```JavaScript
// Call the cookieTest function with the provided URL and a callback function.
// You can change this website to another one where you implemented the support page code (which needs to be at a different domain than the main page code).
cookieTest('https://victor.com.de/cookiescheck/', (result) => {
  // If cookies is not accepted
  if(!result) {
    // YOUR ALTERNATIVE CODE HERE
  } else {
    // YOUR ORIGINAL CODE HERE
  }
}
```

# Conclusion
The JavaScript code provides a reliable way to check if cookies are supported in the user's web browser. By using the navigator.cookieEnabled property and setting a test cookie, the code ensures a comprehensive approach to determine cookie support. This functionality is valuable for websites and web applications that depend on cookies for essential functionalities or personalized user experiences. By being aware of cookie support, developers can tailor their websites to provide the best possible user experience for all visitors.
 
#
<h6>Links&ensp;&ensp;&ensp;&ensp;
<a href="https://linkedin.com/in/victorlbueno/" target="_blank">LinkedIn</a>&ensp;&ensp;•&ensp;&ensp;
<a href="https://victor.com.de/" target="_blank">Website</a>&ensp;&ensp;•&ensp;&ensp;
<a href="https://instagram.com/victorlbueno" target="_blank">Instagram</a></h6>
