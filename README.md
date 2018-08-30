# localStorageAndAjaxRequest
The Web Storage API defines two storage mechanisms which are very important: Session Storage and Local Storage.
Both Session Storage and Local Storage provide a private area for your data. Any data you store cannot be accessed by other websites.

Session Storage maintains the data stored into it for the duration of the page session. If multiple windows or tabs visit the same site, they will have two different Session Storage instances.

When a tab/window is closed, the Session Storage for that particular tab/window is cleared.
Local Storage instead persists the data until it’s explicitly removed, either by you or by the user. It’s never cleaned up automatically, and it’s shared in all the sessions that access a site.

Both Local Storage and Session Storage are protocol specific: data stored when the page is accessed using http is not available when the page is served with https, and vice versa.

Web Storage is only accessible in the browser. It’s not sent to the server like cookies do.
Both Local and Session Storage are available on the window object, so you can access them using sessionStorage and localStorage.

Their set of properties and methods is exactly the same, because they return the same object, a Storage object.

The Storage Object has a single property, length, which is the number of data items stored into it.

Ajax: 
Asynchronous JavaScript + XML, while not a technology in itself, is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together, including HTML or XHTML, Cascading Style Sheets, JavaScript, The Document Object Model, XML, XSLT, and most importantly the XMLHttpRequest object.
When these technologies are combined in the Ajax model, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.

Although X in Ajax stands for XML, JSON is used more than XML nowadays because of its many advantages such as being lighter and a part of JavaScript. Both JSON and XML are used for packaging information in Ajax model
