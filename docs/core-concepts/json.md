# Why JSON?

## What is JSON? 

Do you know what it is? Are you familiarized with JSON? If not [check some of this links](https://www.google.com/search?q=json)

We expect JSON output when running script. We use JSON to encode every environment variables, even strings, that will be available within scripts.

The exception is for Task Inputs, when bypassing values from one task to another, we try to decode string values before using them as arguments of scripts.

We do this to keep every output and environment variable consistent between each other and with the same encoding.
This will make it easy to parse and transfer data, and eventually automate the extraction and storage of the data.

Every string, in JSON format, is surrounded by doble quotes.
So when a var is only a string, you will have to decode it first or, in other words, remove doble quotes.

After doing that, you will get the real value and will be ready to use.

## JSON language support and processors

Almost every modern programming language has tools to encode/decode JSON and convert it into usable structures by the language.

 | Language        | Tool                      | Sample and Links |
 | -----           | ----                      | ---- |
 | Unix bash/shell | jq                        | <a target="_blank" href="https://stedolan.github.io/jq/">JQ Github</a> |
 | Windows cmd/bat | powershell                | <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/convertfrom-json?view=powershell-6">Microsoft Docs</a> |
 | Javascript      | JSON.encode/JSON.decode   | <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON">Mozilla Docs</a> |
 | PHP             | json_encode / json_decode | <a target="_blank" href="https://www.php.net/manual/en/ref.json.php">PHP.net Manual</a> |
 | Python          | json lib                  | <a target="_blank" href="https://docs.python.org/3/library/json.html">Python Docs</a> |
