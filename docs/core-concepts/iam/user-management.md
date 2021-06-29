[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

# IAM - Roles and access management

-----

## Roles by group



   | Rol         | Task     | IAM      | CRUD     | ACL's    | 
   | -----       | -----    | -----    | -----    | -----    | 
   | Onwer       | &#10003; | &#10003; | &#10003; | &#10003; | 
   | Admin       | &#10003; | -        | -        | &#10003; | 
   | Manager     | view     | &#10003; | -        | -        | 
   | User        | execute  | -        | -        | -        | 
   | Viewer      | view     | -        | -        | -        | 
   | Agent       | \*       | -        | -        | -        | 
   | Integration | \*       | -        | -        | -        | 


### Human Users


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


-----

### Bot Users

1. **agent**


2. **integration**


## Members control

To add, modify or revoke users for the current organization, go to the left hamburguer menu , then go to _Settings_ > _Members_ section.

![](../../images/members.png)

When you invite a new member, it will be prompted to select the user's role \(admin/user/viewer/manager\).
The role can be changed at any time by a manager or the owner of the account.


-----


## ACLs

In the previous section we've described user roles and user administration.
ACLs applies directly to resources.
Admin users can make resources visible to other members by adding them to the input field labeled _ACL's_ available on _Tasks_ and _Monitors_.
When a user is added to an ACL list, then the resource becomes available and accesible according to the member's role.
Notifications are sent to all users within the ACL list, regardless the user role.


-----


## Domain Controller


On-premises installation of TheEye allows to integrate the core users authorization and access control to the customer Domain Controller.


### Pre-Requistes

To integrate to a Domain Controller


* Bind DN

* Bind Credentials

* TLS Certificate


Once the integration is configured, the system will authenticate every user throught the Domain Controller.


### User Profile

The first time a user login to TheEye using the Domain Controller, TheEye internally register the user profile using the following attributes obtained from the Domain Controller:

* id

* fullname

* email

* username

* groups


The groups attribute is required to obtain a credencial for the user.

The profile will be used to identified the user in the system activity logs and in the web interface.



### Groups

Users must be assigned to the group **theeye_users** to use TheEye. If the user is not assigned to a group recognized by TheEye, the authentication system will forbidd access.

Credential can also be controlled assigning one of the following groups to the users

  * theeye_owners     

  * theeye_admins     

  * theeye_managers    

  * theeye_users   

  * theeye_viewers


### First Time Login

Follow hereunder steps to allow a domain user to access TheEye:

#### Step 1

In the Domain Controller add the group to the user.

If the user is assigned to an invalid group, the login attempt will be rejected.

#### Step 2

Login to TheEye web interface using a user with owner or manager permissions.

Invite the user from the members panel of the target organization.

#### Step 3

The user is now ready to login to TheEye web interface.

