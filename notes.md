- npm is a package manager
- npm init


#package.json:
- is a configuration for npm
- list of dependencies/packages

- ^ auto upgrade to minor versions
- ~ auto upgrade to major versions

dependencies:
    dev ~ build
    prod ~ runtime

bundler:
    webpack
    parvel

npx
    execute a package
    npx parcel index.html


CDN is one way to add react library to app

Error: "Browser scripts cannot have imports or exports"
Reason aap.js is added as a browser script; add type="module"



# Parcel (https://parceljs.org/)
- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- it uses a File Watching algorithm
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Building - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking - remove unused code
- Different dev & prod bundles



https://browserslist.dev/


add scripts in package.json
npm run start or npm start

jsx is simple and easy way to create react object(s)
parcel(babel under the hood) traspiled JSX, before it reaches JS engine

https://babeljs.io/ is a Javascript compiler.


React Component
Class based component - OLD
Functional Component - NEW
- returns JSX (in turn a react element) as a function
- name should start with Capital (const FunctionalComp = ...)
- While rendering use like this .render(<FunctionalComp />)
- Componenet composition: component inside another component
- can use function or arrow function 


# plan for application




Config Driven UI 
- means UI is driven by config
- config data comes from backend

Why Id is required while using loop or map?
- if not given, react wil re render all the components
- never use index as a key (index as a key as an anti pattern)


