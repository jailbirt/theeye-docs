# Static site for documentation

## que es?
A static web page (sometimes called a flat page or a stationary page) is a web page that is delivered to the user's web browser exactly as stored,[1] in contrast to dynamic web pages which are generated by a web application.[2]

Consequently, a static web page displays the same information for all users, from all contexts, subject to modern capabilities of a web server to negotiate content-type or language of the document where such versions are available and the server is configured to do so.

## Python: MkDocs
- site: https://github.com/mkdocs/mkdocs/
  - last commit: 2019-m05
- template: https://github.com/squidfunk/mkdocs-material
  - last commit: 2019-m06


## Paso a paso:

### instalar paquetes requeridos:
sudo apt install python python-pip
pip install pipenv

### crear "virtual environment"
mkdir ~/proyecto
cd ~/proyecto
pipenv install
pipenv shell
(pyramid-someHash) $
  pipenv install mkdocs mkdocs-material

### tree projects
.
├── docs                ---> files sueltos o en folder
│   └── imagenes        ---> assest
├── mkdocs.yml          ---> mkdocs, yml, genera el sitio
├── Pipfile             ---> python mkdocs
├── Pipfile.lock        ---> python mkdocs
├── README.md           ---> este documento que lees
└── site                ---> almacena el build

### up for preview
* para evitar problemas, trabajar siempre desde pipenv
mkdocs serve
INFO    -  Building documentation...
INFO    -  Cleaning site directory
[I 160402 15:50:43 server:271] Serving on http://127.0.0.1:8000
[I 160402 15:50:43 handlers:58] Start watching changes
[I 160402 15:50:43 handlers:60] Start detecting changes

### Building the site
mkdocs build

### clean old files in sites
mkdocs build --clean
