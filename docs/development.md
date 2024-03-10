# Welcome to development to commerce API

If you already cloned the repository and you know that you need to deep dive in the code, here are some guidelines to set up your environment.

### Virtual enviroment with `venv`

```sh
python -m venv env
```

#### Activate the environment

##### Unix

```sh
source ./env/bin/activate
```

##### Powershell

```ps1
.\env\Scripts\activate
```

#### Building dependecies

It will install all the dependencies and your local FastAPI in your local environment.

```sh
pip install -r requirements.txt
```

#### Run server with `uvicorn`

Alredy for development...

```shell
uvicorn app.main:app --reload
```

### Thank for read

Now I will teach you the development tools... Go `doc/tools_development.md`
