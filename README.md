# Shopped

This is the source code for [shopped](https://shopped.up.railway.app/) by Open Lab.

## Getting started (frontend only)

If you are only interested in making changes to the interface, you can run the
frontend in a development mode as follows.

### Prerequisites

- Install [pnpm](https://pnpm.io/installation)
- Install [node](https://nodejs.org/en)

### Running packages frontend

```sh
pnpm install --frozen-lockfile

```

```sh
pnpm dev # http://localhost:3000
```

## Getting started (Backend only)

If you are only interested in making changes to the server, you can run the
backend in a development mode as follows.

### MakeFile

run all make commands with clean tests
```bash
make all build
```

build the application
```bash
make build
```

run the application
```bash
make run
```

Create DB container
```bash
make docker-run
```

Shutdown DB container
```bash
make docker-down
```

live reload the application
```bash
make watch
```

run the test suite
```bash
make test
```

clean up binary from the last build
```bash
make clean
```

## License

commerce is licensed under either of

- MIT license (LICENSE-MIT or https://opensource.org/licenses/MIT)
