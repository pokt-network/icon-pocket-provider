
<div align="center">
  <a href="https://www.pokt.network">
    <img src="https://user-images.githubusercontent.com/16605170/74199287-94f17680-4c18-11ea-9de2-b094fab91431.png" alt="Pocket Network logo" width="340"/>
  </a>
</div>

# Pocket Provider for ICON Network

Connect any ICON application to Pocket's decentralized network of data providers to read and write data to all of the ICON blockchains.

<div>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"><img src="https://img.shields.io/badge/js-reference-yellow.svg"/></a>
</div>

## Overview
<div>
    <a  href="https://github.com/pokt-network/icon-pocket-provider/releases"><img src="https://img.shields.io/github/release-pre/pokt-network/icon-pocket-provider.svg"/></a>
    <a  href="https://github.com/pokt-network/pocket-core/pulse"><img src="https://img.shields.io/github/contributors/pokt-network/icon-pocket-provider.svg"/></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"/></a>
    <a href="https://github.com/pokt-network/icon-pocket-provider/pulse"><img src="https://img.shields.io/github/last-commit/pokt-network/icon-pocket-provider.svg"/></a>
    <a href="https://github.com/pokt-network/icon-pocket-provider/pulls"><img src="https://img.shields.io/github/issues-pr/pokt-network/icon-pocket-provider.svg"/></a>
    <a href="https://github.com/pokt-network/icon-pocket-provider/issues"><img src="https://img.shields.io/github/issues-closed/pokt-network/icon-pocket-provider.svg"/></a>
</div>

The ICON Pocket Provider is a drop-in replacement for the [ICON SDK for JavaScript](https://github.com/icon-project/icon-sdk-js). By replacing the default provider with the Pocket Network, your ICON app is able to access a decentralized, scalable array of data providers at a lower cost than commercial alternatives.

If your application connects to the ICON blockchains, you can use Pocket to increase decentralization and lower infrastructure costs!

For more information on Pocket, please visit [pokt.network](https://pokt.network/).

## Getting Started

Once you've prepared the prerequisites to using Pocket, it is simple to use to access any ICON blockchain.

### Example usage

```
// create the Pocket provider
const pocketProvider = new PocketLib.PocketProvider(
    iconChainID, 
    iconAPIPath, 
    pocketInstance, 
    pocketAAT
);

// inject the pocketProvider into IconService
const iconService = new IconService(pocketProvider);
```

Please see [this example integration](https://github.com/pokt-network/integration-icon/blob/staging/src/index.js) for a live running example of an ICON application using Pocket.

### Installation

Pocket Network libraries are hosted on NPM:

```
npm install --save @pokt-network/pocket-js
npm install --save icon-sdk-js
npm install --save js-sha256
```

## Documentation

Please see [docs.pokt.network](https://docs.pokt.network/docs/connect-to-icon) for complete documentation.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/pokt-network/icon-pocket-provider/blob/master/CONTRIBUTING.md) for details on contributions and the process of submitting pull requests.

## Support & Contact

<div>
  <a  href="https://twitter.com/poktnetwork" ><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"></a>
  <a href="https://t.me/POKTnetwork"><img src="https://img.shields.io/badge/Telegram-blue.svg"></a>
  <a href="https://www.facebook.com/POKTnetwork" ><img src="https://img.shields.io/badge/Facebook-red.svg"></a>
  <a href="https://research.pokt.network"><img src="https://img.shields.io/discourse/https/research.pokt.network/posts.svg"></a>
</div>


## License

This project is licensed under the MIT License; see the [LICENSE.md](LICENSE.md) file for details.
