# User Management

[![theeye.io](../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## Roles

1. **owner**
    * full access
    * full control of organizations
    * create and modify
    * tasks execution
    * acls administration
    * members control

2. **admin**
    * full access
    * create and modify
    * tasks execution
    * acls administration

3. **manager**
    * members control
    * view (ACL's required)
    * tasks execution (ACL's required)
      
4. **user**
    * view (ACL's required)
    * tasks execution (ACL's required)

5. **viewer**
    * view (ACL's required)


## Members control

To Create, modify or delete users, go to _Settings_ from the left menu and then go to _Members_ section.

![](../images/user_members-1.jpg)

When you invite a new user, you will be prompted to select the user's role \(admin/user/viewer/manager\). The role can be changed at any time by a user manager. The user account must be activated by the activation link sent by email.

## ACLs

In the previous section we've described user roles and user administration.
ACLs applies directly to resources.
Admin roles can make resources visible to other members by adding them to the input field labeled _ACL's_ available on _Tasks_ and _Monitors_.
When a user is added to an ACL list, then the resource becomes available and accesible according to the member's role.
Notifications are sent to all users within the ACL list, regardless the user role.
E-mail addresses can also be added to ACLs lists in order to have them notified disregarding any account membership.

![](../images/acls-1.png)

## Users Domain Controller

On-premise installations allows to integrate the core authorization and access control to a Domain Controller.

Once the integration is configured, the system will connect by default to the Domain Controller to authenticate every user.
The procedure to accept users is the same

1. Invite (Members control) a user to the decired organization using the user internal organization email.
2. The user will receive an invitation email with an Activation Link.
3. Throw the Activation the core will verify the user against the Domain Controller.

If the user was not invited, it is allowed to login and register to TheEye. By default the user will be assigned to the main on-premise organization and with the lowest allowed security credential, which is viewer.

To correctly register a user it must be assigned to a recognized Group by theeye.
On the Domain Controller, one of the following groups must be assigned to the user

  * theeye_owner
  * theeye_admins
  * theeye_managers
  * theeye_users
  * theeye_viewers or none to assign to viewers group
