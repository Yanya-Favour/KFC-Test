## KFC (Kentucky Fried Chicken) Clone 
---
<p>
This was a collaborative construct week project at Masai School.
Goal behind the project was to create a full stack clone of the KFC website as close as possible to the original one with all the major functionalities of this website, such as  Authentication, Landing Page & Food Gallery, Menu, User Cart, Checkout, Payment Gateway.
This project was built by a team of 6 developers in 5 Days. 
</p>

* [Click Here](https://clone-kfc.netlify.app/ "KFC Clone") to view the deployed website.

<p>
KFC (Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. 
It is the world's second-largest restaurant chain after McDonald's.
KFC was founded by Colonel Harland Sanders, an entrepreneur who began selling fried chicken from his roadside restaurant in Corbin, Kentucky. 
By branding himself as "Colonel Sanders", Harland became a prominent figure of American cultural history and his image remains widely used in KFC advertising to this day.
KFC was one of the first American fast-food chains to expand internationally, opening outlets in Canada, the United Kingdom, Mexico and Jamaica by the mid-1960s. 
</p>

### Credits
___
* Images: [kfc.com](https://www.kfc.com/)
* Content & Data: [kfc.com](https://www.kfc.com/)
* Icons: [React Icons](https://react-icons.github.io/react-icons/)
* References: [MDN Docs](https://developer.mozilla.org/en-US/ ) | [W3Schools](https://www.w3schools.com/) | [React Slick](https://react-slick.neostack.com/)

### Tech Stack
___

* HTML 5
* CSS 3
* JavaScript
* React JS
* Redux JS 
* Node JS
* Express JS
* MongoDB
* React Icons
* React Slick
* Git

### Features
___
* Authentication
* Landing Page & Food Gallery
* Menu
* User Cart
* Checkout
* Payment Gateway

### Screenshots
___
![screehshot](https://miro.medium.com/max/1400/1*fu995W5N5M0VbHGlpNJxPQ.jpeg)
<br/>
<br/>
![screehshot2](https://miro.medium.com/max/1400/1*OBk1DWRx516zaSBgJZ7PrA.jpeg)
<br/>
<br/>
![screehshot3](https://miro.medium.com/max/1400/1*WQIFiH_I3wTtJZxBQQOs9w.jpeg)
<br/>
<br/>
![screehshot4](https://miro.medium.com/max/1400/1*zkiNq-T3glOef708whgQaA.jpeg)
<br/>
<br/>
![screehshot5](https://miro.medium.com/max/1400/1*WMqWF6FwCcpr74x9piU_Ug.jpeg)
<br/>
<br/>
![screehshot5](https://miro.medium.com/max/1400/1*N_xfAdo9YiXeeyRjaAWc_w.jpeg)


### Team
___
 <ul>
        <li><a href="https://github.com/Nameh-Dhiman">Nameh Dhiman</a></li>
        <li><a href="https://github.com/suranaarpit">Arpit Surana</a></li>
        <li> <a href="https://github.com/AmanJaiswal0612">Aman Jaiswal</a> </li>
        <li><a href="https://github.com/mdarshadkhan1998">MD Arshad Khan</a></li>
        <li><a href="https://github.com/hlv-kakashi">Anupam Kumar</a></li>
        <li><a href="https://github.com/arpitchaudhary03">Arpit Chaudhary</a></li>
  </ul>
  
 ### Contributing
 ___
 Contributions are always welcome!<br><br>
 You can contribute with us to make this more functionable.

### Test the API with Postman
___
1. Start MongoDB locally. The backend connects to `mongodb://localhost:27017/kfc_clone`.
2. In a terminal, run `cd Backend`, `npm install`, then `npm run dev`.
3. In Postman, import `postman/collections/KFC API.postman_collection.json` and `postman/environments/Local KFC API.postman_environment.json`.
4. Select the **Local KFC API** environment and send `GET {{baseUrl}}/` to confirm the API is reachable at `http://localhost:8080`.

The collection includes the auth, landing, search, menu, and cart endpoints. Run **Login** first to store `authToken` for **Logout**. Payment requests require valid Razorpay credentials configured in `Backend/.env`.

To populate MongoDB with the products currently shown by the website, run `npm run seed` from `Backend`. This upserts the fixture data into `menus`, `favorites`, `featureds`, and `quickbites` without dropping existing records. The website then reads these sections from the API; if the API is unavailable, it no longer substitutes fixture products or a browser-only cart.

In MongoDB Compass, connect to the same MongoDB instance used by the backend (`mongodb://localhost:27017`) and open the `kfc_clone` database. User signups are stored in `userdetails`, cart entries in `carts`, and catalog/homepage records in the collections listed above. You can set `MONGODB_URI` in `Backend/.env` if your MongoDB instance uses a different connection string.

### Deploy the full app

The frontend is deployed on Vercel and the Express API on Render. The backend needs a hosted MongoDB database because a local MongoDB instance is not available when your computer is off.

1. Push this project to a **private** GitHub repository. The repository root contains `render.yaml`; the Vercel project root should be `frontend/kfc-app`.
2. Create a MongoDB Atlas database and database user. Keep the connection string private.
3. In Render, create a Blueprint from the repository. The API is pinned to Render's Free plan; do not select a paid plan. Set `MONGODB_URI` to the Atlas connection string and deploy the `kfc-api` service. Render generates `JWT_SECRET` from the Blueprint. The API URL will look like `https://kfc-api.onrender.com`.
4. In Vercel, import the repository with project root `frontend/kfc-app`, build command `npm run build`, and output directory `build`. Add `REACT_APP_API_BASE_URL` with the Render API URL (no trailing slash), then deploy. If using Razorpay, also set `REACT_APP_RAZORPAY_KEY_ID` to its public key.
5. Set the Render `FRONTEND_URL` environment variable to the Vercel production URL and redeploy the API. This allows the hosted website through CORS.
6. Populate the hosted catalog by running the existing seed command against Atlas: set `MONGODB_URI` in `Backend/.env` to the Atlas connection string, then run `npm run seed` from `Backend`. Do not commit the `.env` file.

Authentication and catalog/cart APIs work once these services and environment variables are configured. Payment additionally requires `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` on Render and a matching public `REACT_APP_RAZORPAY_KEY_ID` on Vercel. Never put the Razorpay secret in a frontend variable.

Render's Free web services sleep after 15 minutes without traffic and can take about a minute to wake on the next request. The public Vercel link remains available, but its first API request after idle may be slow. Render's free usage limits and service behavior can change; confirm the current dashboard plan before creating any resource.
   
