#!/bin/bash

requirements="./requirements.txt"
requirements_dev="./requirements-dev.txt"

[ "$1" = "-p" ] && PYTHON=$2 || PYTHON="python3"

venv="env"

echo "Activate Env... 🐳"

chmod +x "./$venv/bin/activate"

if [ -d "$venv" ]; then
    echo "Install dependencies... 🚀"

    "$PYTHON" -m pip install --upgrade pip

    source "./$venv/bin/activate"

    "$PYTHON" -m pip install -r "$requirements"

    "$PYTHON" -m pip install -r "$requirements_dev"
else
    echo "Denied... folder $venv no exists ❌"
fi
