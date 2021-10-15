# Crystal Ball API
## What is Crystal Ball API?
Crystal Ball REST API allows developers to get responses to random questions users may have. The API retrieves a response to the users question.
## URL
        GET: https://crystalballapi.herokuapp.com 
## Parameters
- /response:
    - Retrieves a answer to a question.
## Answers
- "I hear the whispers from the Fates and they say YES."
- "If you travel down this path, you will surely find trouble, NO."
- "My vision is hazy, try again later."
- "Clear your mind, and try again."
- "This is your destiny, YES."
- "Outlook does not seem positive, NO."
- "Perhaps using your intuition, will serve you best on this matter."

## Usage
        GET: https://crystalballapi.herokuapp.com/answer 
### Node.js
        const request = require('request');

        let options = {
        url: 'https://crystalballapi.herokuapp.com/answer ',
        method: 'POST'
        };

        function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
        }

        request(options, callback);

### Response 

        {"answer": "I hear the whispers from the Fates and they say YES."}