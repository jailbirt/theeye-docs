# Gestión de identidades

___
### Otorgar permisos de Aprobardor

#### ¿Cómo accedo a la organización / unidad de negocio de una solicitud? 

Hacer Click en el menú de organizaciones y seleccionar la Unidad de Negocio para la cual solicitan el recurso:

![theeye.io](logicalaccessImg/cambiar_organizacion.png)
___
### Identificación de Tareas
### ¿Cómo identificar las tareas por sus Tags?

![theeye.io](logicalaccessImg/filtro.png)

![theeye.io](logicalaccessImg/filtro2.png)

___
## Gestión de Accesos (ACL)
#### Como darle a un usuario acceso a una tarea desde ACL

1) Hacemos click en los tres punts que nos indica la flecha
![theeye.io](logicalaccessImg/acl.png)
2) Vamos **Edit task**
![theeye.io](logicalaccessImg/acl2.png)
3) Click en el titulo de **Advanced Options**
![theeye.io](logicalaccessImg/acl3.png)
4) Vamos al campo de **ACL** y nos mostrara los usuarios que estaran en la organizacion y lo seleccionamos clickeando en el mismo.
![theeye.io](logicalaccessImg/acl4.png)
5) Cuando lo hayamos seleccionado hacemos click en **Confirm**
    y el usuario ya estara asignada a esa tarea.
![theeye.io](logicalaccessImg/acl5.png)

___
# Cambio modificar el Autorizador de una tarea de Aprobación
El autorizador deberá cumplir con los siguientes requisitos:
* Usuario de TheEye (theeye_users en AD)
* Pertenecer a la organización solicitada dentro de TheEye

Primero se debe identificar la tarea.
Si la tarea pertenece a una Workflow se debe solicitar el nombre del Workflow.

Para cambiar el autorizador, se debe editar la tarea.

1) Editamos el workflow haciendoclick en los 3 puntos y luego **Edit Workflow**
![theeye.io](logicalaccessImg/editarapproval.png)

2) Click en el icono de Approval y elegimos la opcion de **Edit**
![theeye.io](logicalaccessImg/editarapproval2.png)

3) En el campo **Approver** hacemos click y seleccionamos al usuario.
   ![theeye.io](logicalaccessImg/editarapproval3.png)