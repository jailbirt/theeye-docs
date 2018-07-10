# User management

[![theeye.io](https://theeye.io/img/logo2.png)](https://theeye.io)

## User Management Documentation

### Contents

* [User Roles](./#user-accounts-and-roles-web-mobile-access)
* [Permissions](./#permissions)
* [Effective permissions per role type](./#effective-permissions-per-role)
* [Members Page \(CRUD Users\)](./#members-page-user-administration)
* [ACLs](./#acls)

### User Accounts and Roles \(Web/Mobile access\)

======================================================

There're six user permission profiles.

### Permissions

1. Full Control
   * Can manage organizations.
   * Has all the permissions listed below.
2. Full Access
   * Can view all the resources that belongs to the organization.
3. View
   * Can view monitors, tasks and output logs.
4. Execution
   * Can view and execute tasks.
5. Create and Modify
   * Can create and modify resources \(e.g. create scripts, create tasks, assign ACLs to tasks\)
6. User Admin
   * Add and delete users
   * Set user credential \(admin/manager/user/viewer\)

_Note:_ **Users will have access to resources provided by ACLs. Only user types with** _**Full Access**_ **permission will be able to see all resources.**

#### Effective permissions per role

1. **root**
   * Full Control
2. **owner**
   * Full Access
   * Create and Modify
   * Execution
   * User Admin
3. **admin**
   * Full Access
   * Create and Modify
   * Execution
4. **user**
   * View
   * Execution
5. **viewer**
   * View
6. **manager**
   * User Admin
   * View
   * Execution

### Members Page \(User administration\)

To Create, modify or delete users, go to _Settings_ from the left menu and then go to _Members_ section.

![](../.gitbook/assets/user_members%20%281%29.jpg)

When you invite a new user, you will be prompted to select the user's role \(admin/user/viewer/manager\). The role can be changed at any time by a user manager. The user account must be activated by the activation link sent by email.

### ACLs

In the previous section we've described user roles and user administration. ACLs applies directly to resources. Admin roles can make resources visible to other members by adding them to the input field labeled _ACL's_ available on _Tasks_ and _Monitors_. When a user is added to an ACL list, then the resource becomes available and accesible according to the member's role. Notifications are sent to all users within the ACL list, regardless the user role. E-mail addresses can also be added to ACLs lists in order to have them notified disregarding any account membership.

![](../.gitbook/assets/acls%20%281%29.png)

