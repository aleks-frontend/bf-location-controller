# BF Location Controller
## Implementation
### Function call snippet
In order to make the function work, snippet needs to be included inside the `<script></script>` tags.  
Here is an example screenshot: https://screencast.com/t/dNip0Dy7a

#### Using the Dynamic Content button
The easieast way of adding the snippet into your code is using the `Dynamic Content` button. Here are the instructions: 
1. https://screencast.com/t/nucMipLh
2. https://screencast.com/t/iA0Ewm0BKS
3. https://screencast.com/t/Di0umhmtSgep
4. https://screencast.com/t/iyxboB8a0
5. https://screencast.com/t/2xmZfNo62m

## Implementing **Toggle Brand** and **Master Location Object**
To pass the value of our **Toggle Brand** choice input, we need to pass it via `data-toggle-brand` attribute on the `<body>` tag, like this: https://screencast.com/t/Tfsnc40w

Same method is used to pass the **Master Location Object** as well: https://screencast.com/t/gnTPSgv2mB

## Telling our function where to show location property data
We are using `data-location-property` attributes for each HTML element where we want the dynamic data to be injected. 

Here is an example: https://screencast.com/t/uRvrgN0PQ4b

### Location Properties
Available `data-location-property` values at this moment are:
- brand
- logoBlack
- logoWhite
- logoWhite
- phone
- website
- address
- name

These properties can be updated in the `{{account.snippets.brandToggleObject}}` at any time. 
