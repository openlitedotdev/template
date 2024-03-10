#! /bin/bash

folder_app="api"

if [ -d "$folder_app" ]; then
    # Acción a realizar si la condición es verdadera
    echo "Run server... 🚀"
    uvicorn api.main:app --port 8888 --reload
else
    echo "Denied folder no existe...❌"
fi
