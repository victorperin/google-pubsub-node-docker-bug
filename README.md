# Bug reproduction: Google Cloud - PubSub NodeJS with docker (alpine only version)

This bug occurs only inside a docker container running NodeJS Alpine version.

## Problem
The program throws an `Segmentation fault (core dumped)` error.


## Executing
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

[![asciicast](https://asciinema.org/a/raNIqqp9mtExOytnjzTP3u5OP.png)](https://asciinema.org/a/raNIqqp9mtExOytnjzTP3u5OP) [![Greenkeeper badge](https://badges.greenkeeper.io/victorperin/google-pubsub-node-docker-bug.svg)](https://greenkeeper.io/)
