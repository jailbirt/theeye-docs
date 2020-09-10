
# Como colaborar con la documentacion de TheEye

## Sincronizacion con repositorio de GitHub

1) Vamos al directorio o link que queremos sincronizar, presionamos fork, 
   esto nos hara una copia division del repositorio a nuestra cuenta.
    ![theeye.io](../../images/stepbystep/fork.png)

Una Vez que lo hayamos hecho nos llevara a nuestro repositorio y nos aparecera esto:
    ![theeye.io](../../images/stepbystep/mirepoforkeado.png)

1) Clonamos nuestro repositorio a nuestro equipo:
```console
git clone https://github.com/miUsuario/theeye-docs.git
```

3) Para agregar un remoto nuevo, usa el comando git remote add en la terminal, dentro del directorio donde está almacenado tu repositorio.
El comando git remote add toma dos argumentos:
* Un nombre remoto, por ejemplo:
```console
 theeyeDocs
 ```

* La url Remota :
```console 
https://github.com/theeye-io/theeye-docs.git
```
* Hacemos el remote:

```console 
git remote add theeyeDocs https://github.com/theeye-io/theeye-docs.git
```
4) Consulta el remoto para ver que cambios hubo usando git fetch
```console
    git fetch theeyeDocs
```
___
## Sincronizacion de branchs
### Debemos crear una branch llamada *development*, esta tiene el mismo nombre de la branch remota de theeyeDocs. En esta branch local no haremos ninguna edicion, se usara para tenerla actualizada constantemente y se usara de base para crear otras branch , <span style="color:red">nunca se debe usar Master tanto como local y remoto.</span> 
 1) Creamos la branch *development* en nuestro repositorio:
  ```console
      git checkout -b development
  ```
 2) Para chequear a que branch estamos parados:
  ```console
      git branch
  ```
 3) El asterisco(*) nos indica en que branch estamos
  ```console
      *development
       master 
 ```
4)  Modificamos el HEAD de nuestra branch, trayendo el ultimo commit mergeado en la branch remota
 ```console
     git reset --hard theeyeDocs/development
```
___
## Verificar Sincronizacion
### Para verificar y comparar el ultimo commit en la branch local y remota, usaremos *git log* 

* verificar ultimo commit de la branch local
```console
     git log origin/development
```
* verificar ultimo commit de la branch remota
```console
     git log theeyeDocs/development
```
### En el caso de ambos nos tendria que traer el mismo resultado en el primer ultimo commit para que esten sincronizados, sera similar a este:

```console
     commit ce65923d6adba4629fcf678d53094ed357f50f85 (HEAD -> development, theeyeDocs/development, origin/development)
Author: agustin94 <53794002+agustin94@users.noreply.github.com>
Date:   Wed Sep 9 18:36:23 2020 -0300

    add task (#47)

commit 26f1219b08cfbc7238d9c4846ca273485f3b0476
Author: agustin94 <53794002+agustin94@users.noreply.github.com>
Date:   Wed Sep 9 13:16:45 2020 -0300

    Arreglando detalles del path (#41)

commit fd06a5770ba6932ccd48bde6258db0c96ad87811
Author: agustin94 <53794002+agustin94@users.noreply.github.com>
Date:   Wed Sep 9 10:57:54 2020 -0300

    add api indicators (#43)

commit aca8c16e13ec8bbe869667e76c69fe92174cfb8f (theeyeDocs/master, origin/master, origin/HEAD, master)
Author: facugon <facugon@theeye.io>
Date:   Wed Sep 9 10:52:50 2020 -0300

    improves and corrections

commit a4a7dc26a55043cc10806b573f2d92314f1ed3f2
Author: facugon <facugon@theeye.io>
Date:   Wed Sep 9 10:27:22 2020 -0300

    logo link fixed
```

___
## Editar documentacion y subir cambios a nuestro repositorio

### Antes de hacer alguna edicion de los archivos, tendremos que crear una nueva branch usando de base **development**. Cuando hayamos editado y/o agregado los archivos de la documentacion debemos hacer un **git push** a nuestro repositorio remoto y crear un Pull Request. 

1) Crear nueva branch 
```console
     git checkout -b "miNuevaBranch"
```
2) Para ver cuales son los archivos que agregamos, borramos y editamos: 
```console
     git status
```
3) Subimos nuestros cambios a nuestra branch: 
```console
     git add . (o seleccionar el archivo que editamos)
     git commit -m "nuestro mensaje"
     git push origin miNuevaBranch
```