### Routing a react app with React Router

First, you need to install react-router-dom with npm :

``` js

npm i react-router-dom 

```

Then, initiate a router in your index.js file : 

``` js

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

```