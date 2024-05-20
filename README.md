# React compiler

This repository demonstrates how the [React compliler](https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024#react-compiler) can be invoked through the babel toolchain for a sample application.

## Running locally

_Note: This project was built using `node@20` and `npm@10` and hasn't been tested for other versions._

To run the application locally run

> npm i --legacy-peer-deps

_Note `legacy-peer-deps` as react router has unmet peer depenency for beta version of react 19_

Then run

> npm run start

By default the application run on `https://dev.reactcompiler.io:3000/app`. To access the application from this URL, add the following line to your `/etc/hosts`:

```
127.0.0.1    dev.reactcompiler.io
```

The dev server creates self signed certificates which needs to be added to your keychain in order to run `https`. Open `{workspaceroot}/.ca/primary.crt` and locate the cert `parceljs.org` in you keychain application. Double click the certificate and under the collapsible section _"Trust"_ select _"Always trust"_ in the select menu labelled _"When using this certificate"_.

## Invoking the react compiler

By the default, this project _does not_ invoke the react compiler. To enable this feature, through react compiler babel plugin, add the following line to `babel.config.json`:

```
{
  "plugins": ["babel-plugin-react-compiler"]
}
```
