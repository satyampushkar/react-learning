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