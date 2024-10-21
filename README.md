Demo exchange in PTX

This repository helps to set up a basic Prometheus-X enviroment.
It contains a postman collection and environment to setup and run the exchange.

The demo uses is the B2B, consumer side triggered exchange.
It does not contain any policies or consent handling.

To setup the enviroment, you need to clone this, and and 3 other repositories:
- ptx-demo-exchange (this repository)
- dataspace-connector
- catalog-api
- contract-manager

I forked the original repositories to keep them compatible with the demo and made some fixes and changes when it was necessary.

You can clone the repositories with the working branches like this:

```bash
git clone -b main https://github.com/botondklenk/ptx-demo-exchange.git