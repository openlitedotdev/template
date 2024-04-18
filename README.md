# Commerce

<img src="./.github/OpenLand.jpeg" align="right" alt="Open Land" width="100" />

This is the source code for https://ui-commerce.up.railway.app/ by Open Land.

<br>

## Project Information

### Features

- Open sources
- Dashboard
- Api (Totally open source)
- Customize
- Dark Mode support
- Shopping cart
- Responsive design

## Getting started (frontend only)

If you are only interested in making changes to the interface, you can run the
frontend in a development mode as follows.

### Prerequisites

- Install pnpm (https://pnpm.io/installation)
- node (https://nodejs.org/en)

### Running packages frontend

1. `pnpm install --frozen-lockfile`

2. `pnpm dev`

3. `http://localhost:3000`, `http://localhost:5173`

## Getting started (Backend only)

If you are only interested in making changes to the server, you can run the
backend in a development mode as follows.

### Prerequisites

- Install python (https://www.python.org/downloads/)
- Install uv (https://github.com/astral-sh/uv/blob/main/README.md#getting-started)

### Running backend

1. `uv venv`

**Windows Activate**

2. `./.venv/Scripts/activate.ps1`

**Unix Activate**

3. `source .venv/bin/activate`

4. `uv pip install -r requirements.txt`

5. `uv pip install -r requirements-dev.txt`

6. `./scripts/server.sh`

## License

commerce is licensed under either of

- MIT license (LICENSE-MIT or https://opensource.org/licenses/MIT)
