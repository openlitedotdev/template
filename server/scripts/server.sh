#! /bin/bash

folder_app="app"

if [ -d "$folder_app" ]; then
    # Acción a realizar si la condición es verdadera
    echo "Run server... 🚀"
    uvicorn app.main:app --port 8888 --reload
else
    echo "Denied folder no existe...❌"
fi
