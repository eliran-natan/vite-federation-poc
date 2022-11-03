# Module Federation with Vite - POC

This example demos consumption of federated modules from a vite bundle. The `Shell` app (Vue based) displays components exposed by the `Axonius` app (Vue based) and by the `AxoniusX` app (React based). 

## Running the Shell App

1. Install node dependencies for shell application and for each child application. That is, for both `Shell`, `Axonius` and `AxoniusX`, `cd` to the root directory and run `npm i`. 
2. At the root directory, run `pnpm build` and `pnpm serve`. This will build and serve the `Shell` app on port 5000, the `Axonius` app on port 5001, and the `AxoniusX` app on port 5002. 

- HOST (Shell): [localhost:5000](http://localhost:5000/)
- REMOTE (Axonius): [localhost:5001](http://localhost:5001/)
- REMOTE (AxoniusX): [localhost:5002](http://localhost:5002/)

## Development (+ Hot reload included)
To develope each app (either child or shell), `cd` to its root directory and run `pnpm run dev`. 

## Destroy 
`CTRL + C` will only stop the shell app. Run `pnpm stop` from the shell app root directory to stop all other apps.


