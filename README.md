<h1 align="center">Crypto Algorithm 📟</h1>
<p align="center">
  Lightweight TypeScript library with Node.js Crypto Algortihm utilities
</p>
<p align="center">
  <a href="https://npmjs.org/package/@alessiofrittoli/crypto-algorithm">
    <img src="https://img.shields.io/npm/v/@alessiofrittoli/crypto-algorithm" alt="Latest version"/>
  </a>
  <a href="https://coveralls.io/github/alessiofrittoli/crypto-algorithm">
    <img src="https://coveralls.io/repos/github/alessiofrittoli/crypto-algorithm/badge.svg" alt="Test coverage"/>
  </a>
  <a href="https://socket.dev/npm/package/@alessiofrittoli/crypto-algorithm/overview">
    <img src="https://socket.dev/api/badge/npm/package/@alessiofrittoli/crypto-algorithm" alt="Socket Security score"/>
  </a>
  <a href="https://npmjs.org/package/@alessiofrittoli/crypto-algorithm">
    <img src="https://img.shields.io/npm/dm/@alessiofrittoli/crypto-algorithm.svg" alt="npm downloads"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/crypto-algorithm">
    <img src="https://badgen.net/bundlephobia/dependency-count/@alessiofrittoli/crypto-algorithm" alt="Dependencies"/>
  </a>
  <a href="https://libraries.io/npm/%40alessiofrittoli%2Fcrypto-algorithm">
    <img src="https://img.shields.io/librariesio/release/npm/@alessiofrittoli/crypto-algorithm" alt="Dependencies status"/>
  </a>
</p>
<p align="center">
  <a href="https://bundlephobia.com/package/@alessiofrittoli/crypto-algorithm">
    <img src="https://badgen.net/bundlephobia/min/@alessiofrittoli/crypto-algorithm" alt="minified"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/crypto-algorithm">
    <img src="https://badgen.net/bundlephobia/minzip/@alessiofrittoli/crypto-algorithm" alt="minizipped"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/crypto-algorithm">
    <img src="https://badgen.net/bundlephobia/tree-shaking/@alessiofrittoli/crypto-algorithm" alt="Tree shakable"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/sponsors/alessiofrittoli">
    <img src="https://img.shields.io/static/v1?label=Fund%20this%20package&message=%E2%9D%A4&logo=GitHub&color=%23DB61A2" alt="Fund this package"/>
  </a>
</p>

[sponsor-badge]: https://img.shields.io/static/v1?label=Fund%20this%20package&message=%E2%9D%A4&logo=GitHub&color=%23DB61A2
[sponsor-url]: https://github.com/sponsors/alessiofrittoli

### Table of Contents

- [Getting started](#getting-started)
- [Development](#development)
  - [Local development](#local-development)
  - [Production build](#production-build)
  - [Unit tests](#unit-tests)
    - [Run tests with coverage](#run-tests-with-coverage)
  - [Contributing](#contributing)
  - [Security](#security)
- [API Reference](#api-reference)
  - [Algorithm utility Class](#algorithm-utility-class)
- [Credits](#made-with-)

---

### Getting started

Run the following command to start using `crypto-algorithm` in your projects:

```bash
npm i @alessiofrittoli/crypto-algorithm
```

or using `pnpm`

```bash
pnpm i @alessiofrittoli/crypto-algorithm
```

---

### Development

Run the following to start development

```shell
nvm use

pnpm i
```

#### Local development

Run the following

```shell
pnpm dev
```

This will generate unminified output code, sourcemaps and will enable source file watcher.

---

#### Production build

Run the following to create a local production build

```shell
pnpm build
```

This will generate minified output code without sourcemaps.

---

#### Unit tests

Run all the defined test suites by running the following:

```shell
# Run tests and watch file changes.
pnpm test:watch

# Run tests in a CI environment.
pnpm test:ci
```

---

##### Run tests with coverage

An HTTP server is then started to serve coverage files from `./coverage` folder.

⚠️ You may see a blank page the first time you run this command. Simply refresh the browser to see the updates.

```shell
pnpm test:coverage:serve
```

---

#### Contributing

Contributions are truly welcome!

Please refer to the [Contributing Doc](./CONTRIBUTING.md) for more information on how to start contributing to this project.

Help keep this project up to date with [GitHub Sponsor][sponsor-url].

[![GitHub Sponsor][sponsor-badge]][sponsor-url]

---

#### Security

If you believe you have found a security vulnerability, we encourage you to **_responsibly disclose this and NOT open a public issue_**. We will investigate all legitimate reports. Email `security@alessiofrittoli.it` to disclose any security vulnerabilities.

---

### API Reference

### Algorithm utility Class

The `Algorithm` class is designed to manage cryptographic algorithm schemas, including their mappings and retrievals based on various criteria.

#### Overview

The `Algorithm` class provides utilities to manage and retrieve cryptographic algorithm specifications. The specifications include details like key type (`kty`), cryptographic algorithm identifier (`alg`), curve parameters, hash functions, and web crypto API names.

The algorithms supported by this class conform to [COSE Algorithms](https://iana.org/assignments/cose/cose.xhtml#algorithms) and the [Web Cryptography API](https://developer.mozilla.org/en-US/docs/Web/API/EcKeyImportParams#namedcurve).

#### Static Properties

##### `KTY`

A map of key type constants. The supported key types are:

| Key   | Value | Description        |
| ----- | ----- | ------------------ |
| `OKP` | `1`   | Octet Key Pair     |
| `EC2` | `2`   | Elliptic Curve (2) |
| `RSA` | `3`   | RSA                |

##### `Algorithm.MAP`

A Map object that associates algorithm identifiers with their corresponding schemas. The schema includes:

- `kty`: Key type.
- `alg`: Algorithm identifier.
- `crv`: Curve identifier (for elliptic curves).
- `name`: Name of the algorithm.
- `hash`: Hash function used.
- `crvSchemeName`: Curve scheme name.
- `namedCurve`: Named curve for elliptic curve algorithms.
- `webcryptoName`: Corresponding Web Crypto API algorithm name.
- `jwkAlg`: JSON Web Key (JWK) algorithm name.

#### Static Methods

##### `Algorithm.by()`

Retrieves an algorithm schema based on a partial schema or `KeyAlgorithm`.

###### Parameters

- `scheme` `(Partial<Algo.Schema> | KeyAlgorithm)`: A partial schema or KeyAlgorithm object.

###### Returns

- `(Algo.Schema | undefined)`: The matching algorithm schema, or `undefined` if no match is found.

###### Implementation

- If the scheme contains an `alg` property, the method directly retrieves the schema from the `Algorithm.MAP`.
- Otherwise, the method iterates through the `Algorithm.MAP` entries and performs a property-based match.

---

##### `Algorithm.byId()`

Retrieves an algorithm schema by its identifier.

###### Parameters

- `alg` (Algo.Id): The algorithm identifier.

###### Returns

- `(Algo.Schema | undefined)`: The schema associated with the provided identifier, or `undefined` if no match is found.

###### Implementation

- Internally calls the `Algorithm.by()` method with an object containing the `alg` property.

#### Usage examples

#### Retrieve Schema by Algorithm ID

```ts
import { Algorithm } from '@alessiofrittoli/crypto-algorithm'

const schema = Algorithm.byId(-7)
console.log(schema)
// Output: Schema details for ECDSA using SHA-256
```

#### Retrieve Schema by Partial Properties

```ts
import type { Algo } from '@alessiofrittoli/crypto-algorithm/types'
import { Algorithm } from '@alessiofrittoli/crypto-algorithm'

const partialScheme: Partial<Algo.Schema> = {
  name: 'RSA-PSS',
  hash: 'SHA-256',
}
const schema = Algorithm.by(partialScheme)
console.log(schema)
// Output: Schema details for RSA-PSS with SHA-256
```

#### Supported Algorithms in `Algorithm.MAP`

The `Algorithm.MAP` includes schemas for:

- `ECDSA` (Elliptic Curve Digital Signature Algorithm)
- `EdDSA` (Edwards-curve Digital Signature Algorithm)
- `RSA-PSS` (RSA Probabilistic Signature Scheme)
- `RSASSA-PKCS1-v1_5` (RSA Signature Scheme with Appendix)
- `HMAC` (Hash-based Message Authentication Code)
- `DSA` (Digital Signature Algorithm)

Refer to the [Algorithm.MAP](#algorithmmap) implementation for specific algorithm configurations.

---

### Made with ☕

<table style='display:flex;gap:20px;'>
  <tbody>
    <tr>
      <td>
        <img alt="avatar" src='https://avatars.githubusercontent.com/u/35973186' style='width:60px;border-radius:50%;object-fit:contain;'>
      </td>
      <td>
        <table style='display:flex;gap:2px;flex-direction:column;'>
          <tbody>
              <tr>
                <td>
                  <a href='https://github.com/alessiofrittoli' target='_blank' rel='noopener'>Alessio Frittoli</a>
                </td>
              </tr>
              <tr>
                <td>
                  <small>
                    <a href='https://alessiofrittoli.it' target='_blank' rel='noopener'>https://alessiofrittoli.it</a> |
                    <a href='mailto:info@alessiofrittoli.it' target='_blank' rel='noopener'>info@alessiofrittoli.it</a>
                  </small>
                </td>
              </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
