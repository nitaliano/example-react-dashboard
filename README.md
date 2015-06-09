### Starter Info
I started with the [React Starter Kit](https://github.com/kriasoft/react-starter-kit), and modified from there. 
I highly recommend that you check that project out if you haven't already!

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /api/                   # REST API / Relay endpoints
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /assets/                # Static files which are copied to ./build on compile
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /core/                  # Core components (Flux dispatcher)
│   ├── /decorators/            # Higher-order React components
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /styles/                # Less files and Twitter Bootstrap imports
│   ├── /templates/             # HTML templates for server-side rendering, emails etc.
│   ├── /utils/                 # Utility classes and functions
│   ├── /vendor/                # Vendor client side files (Highcharts)
│   ├── /app.js                 # Client-side startup script
│   └── /server.js              # Server-side startup script
│── gulpfile.babel.js           # Configuration file for automated builds
│── package.json                # The list of 3rd party libraries and utilities
│── preprocessor.js             # ES6 transpiler settings for Jest
└── webpack.config.js           # Webpack configuration for bundling and optimization
```

### Getting Started

```shell
$ git clone https://github.com/unboundfire/example-react-dashboard.git
$ cd example-react-dashboard
$ npm install -g gulp           # Install Gulp task runner globally
$ npm install                   # Install Node.js components listed in ./package.json
```

### How to Run

```shell
$ gulp
```

This will start a lightweight development server with LiveReload and
synchronized browsing across multiple devices and browsers.
