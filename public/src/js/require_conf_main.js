require.config({

    paths: {
        "backbone": "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min",
        "text": "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
        "mustache": "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.4/handlebars",
        "lodash":"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash",
        "jquery":"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery"
    },

    map:{
        '*': {
            'underscore': 'lodash'
        }
    },

    shim:{
        "backbone":["undescore"]
    }
});
