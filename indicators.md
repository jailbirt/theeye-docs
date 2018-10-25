---
description: >-
  Indicators are used as a representation of an associated factor or quantity.
  They enable you to have information as handy as it gets in your Dashboard.
---

# Indicators

## Representation 

![Indicator Icon](.gitbook/assets/image%20%284%29.png)

![Indicator&apos;s panel](.gitbook/assets/image%20%282%29.png)

Indicators are shown at the top of the dashboard only when available.

#### Indicator kinds

* Progress
  * The indicator value is shown in percent inside a bar, in the same way a progress bar does.
* Text
  * The indicator value is shown as typed.

#### Indicators' properties:

* **title:** The name that identifies the indicator
* **type:** Indicator kind \(Progress/Text\)
* **state**: Normal or Failure. Status determines wether it is green\(normal\) or red\(failure\).
* **value**: The factor or quantity to show
* **read\_only**: true \| false. When set to false the indicator can be dismissed \(deleted\) from the Dashboard.
* **acl**: users that will be able to see the indicator. Expects an array with users: \["email1","email2", ...\]
* **severity:** high\| low. When set to HIGH the failure status will be shown in red, otherwise it will be shown in yellow.
* **description**: description field that is not visible in the Dashboard.



### Create, Update, Delete and Get Status from Indicators

Indicators are managed via TheEye RESTfull API, they're not meant to be manipulated from the UI.

In order to work with Indicators an API KEY is needed, find your own at the Credentials pane, under the Settings menu:

![Settings-&amp;gt;Credentials](.gitbook/assets/image%20%287%29.png)

#### API URL for Indicators

```bash
https://supervisor.theeye.io/indicator?access_token={token}&customer={customer}
```

#### 

#### GET All indicators from an organization

Method: `GET`

URL: `https://supervisor.theeye.io/indicator?access_token={token}&customer={customer}`

Example using cURL:

`curl -X GET 'https://supervisor.theeye.io/indicator?access_token={token}&customer={customer}'`

#### 

#### Create an Indicator

Method: `POST`

Properties: `title, type, state, value.`

Check the following example, used to create the text indicator shown at the begining of this page.

```bash
curl -X POST 'https://supervisor.theeye.io/indicator?access_token={API_access_token}&customer={customer_name}' --header 'Content-Type: application/json' --data '{"title":"Currency Exchange
Dollar/Peso","state":"normal","type":"text","value":"37.56"}'
```

The request response will look like this, where customer\_id, customer\_name, user\_id and id values were replaced for security reasons:

`{"enable":true,"acl":[],"severity":"HIGH","alerts":true,"state":"normal","sticky":false,"value":"37.56","type":"text","_type":"TextIndicator","title":"Currency Exchange Dollar/Peso","customer_id":"AAA","customer_name":"BBB","user_id":"CCC","creation_date":"2018-10-22T23:10:31.912Z","last_update":"2018-10-22T23:10:31.915Z","id":"{indicator_id}"}`



#### Update an Indicator by ID

Method: `PATCH`

Properties: `title, state, value`

URL: `https://supervisor.theeye.io/indicator/{indicator_id}`

Check the following example, used to update the text indicator value shown at the begining of this page.

```bash
curl -X PATCH 'https://supervisor.theeye.io/indicator/{indicator_id}?access_token={API_access_token}&customer={customer_name}' --header 'Content-Type: application/json' --data '{"value":"39.99"}'
```

The request response will look like this, where customer\_id, customer\_name, user\_id and id values were replaced for security reasons:

`{"enable":true,"acl":[],"severity":"HIGH","alerts":true,"state":"normal","sticky":false,"value":"39.96","type":"text","_type":"TextIndicator","creation_date":"2018-10-22T23:10:31.912Z","last_update":"2018-10-22T23:48:07.515Z","title":"Exchange Dollar/Peso","customer_id":"AAA","customer_name":"BBB","user_id":"CCC","id":"{indicator_id}"}`

#### 

#### Update an Indicator by Title

Method: `PATCH`

Properties: `title, state, value`

URL: `https://supervisor.theeye.io/indicator/title/{urlencoded_title}`

Check the following example, used to update the text indicator value shown at the begining of this page.

`curl -X PATCH 'https://supervisor.theeye.io/indicator/title/Currency%20Exchange Dollar%2fPeso?access_token={token}&customer={customer}' --header 'Content-Type: application/json' --data '{"value":"34"}'`



#### 

\`\`

