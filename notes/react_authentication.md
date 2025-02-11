# Authentication Introduction
Authentication is the process of verifying the identity of a user, system, or entity before granting access to a resource. It typically involves:

* Something you know (e.g., passwords, PINs)
* Something you have (e.g., security tokens, smart cards)
* Something you are (e.g., biometrics such as fingerprints, facial recognition)

## Common Authentication Methods
### Password-Based Authentication
* Most Common
* Something you know: requires users to provide credentials (username/password)
* Subject to: brute-force attacks, phishing, credential stuffing, etc.

### MultiFactor Authentication(MFA)
* Enhances security by requiring multiple forms of authentication
  * Creds (something you know) + Key FOB (something you have)
  * Creds (something you know) + Auth App on Phone (something you have)
  * Creds + Key FOB + Finger print (all three !)

### Token Based
* Uses cyrptographic tokens instead of password
* E.g. JWT, OAuth2, OpenID Connect

### More to Come...

## Adding Authentication to React
### Routing Authentication
One of the biggest things we do with authentication is block users from accessing certain resources without logging in.  Other frameworks call this "Middleware", but in React we can do it with specialized components.

```jsx
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, redirectPath = "/login" }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
```
