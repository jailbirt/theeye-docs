
# Build TheEye Agent

To build theeye-agent into binary enclosejs is required.

file `cat misc/run_enclose.sh `

```bash

#!/bin/bash

root="$PWD"

cd $root/node_modules/config
npm install hjson toml cson properties

cd $root
enclose -o bin/theeye-agent -l warning core/main.js
```


desde el directorio root del agente correr el script

./misc/run_enclose.sh

se genera el binario. mover el binario y los siguientes archivos bindings y ffi_bindings que están escondidos dentro del directorio node_modules en algún directorio (find) a un directorio nuevo junto con los archivos de configuración que hagan falta , quedaría así

```bash
@facugon dice (development): ls -la
total 29832
drwxrwxr-x 4 facugon facugon 4096 feb 10 09:14 .
drwxrwxr-x 12 facugon facugon 4096 feb 10 11:38 ..
-rwxrwxr-x 1 facugon facugon 43104 feb 10 09:13 binding.node
drwxrwxr-x 2 facugon facugon 4096 feb 10 11:40 config
drwxr-xr-x 2 facugon facugon 4096 feb 10 09:14 downloads
-rwxrwxr-x 1 facugon facugon 80952 feb 10 09:14 ffi_bindings.node
-rwxrwxr-- 1 facugon facugon 30401224 feb 10 09:09 theeye-agent
```

los downloads son los que se generan solos a medida que se descangan los scripts por el uso del agente.
theeye-agent es el nombre que se le puso al binario. config es el directorio con configuraciones , minimo tiene que incluir la configuración default.conf
