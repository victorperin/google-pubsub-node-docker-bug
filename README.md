# Bug reproduction: Google Cloud - PubSub NodeJS with docker (alpine only version)

This bug occurs only inside a docker container running NodeJS Alpine version.

To run the test outside docker, you must run:
```
npm run test
```

To run the test inside a docker container (with debian default version), you must run:
```
npm run docker:test
```

To reproduce the bug, inside a alpine container, you must run:
```
npm run docker-alpine:test
```
