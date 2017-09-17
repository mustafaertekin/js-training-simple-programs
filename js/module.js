/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */
 
"use strict";

/**
 * A URL PARSER
 * This function analyses an url.
 * Please refer to the "https://de.wikipedia.org/wiki/Uniform_Resource_Locator"
 */
function analyseUrl(pUrl) {
    let r = {
        host: null
        , query: null
        , schema: null
        , port: null
        , path: null
        , query: null
    }; // and other props.
    //...
    r.schema = pUrl.split("://")[0];
    if (pUrl.indexOf(":", 8) > -1) {
        r.host = pUrl.substring(r.schema.length + 3, pUrl.indexOf(":", 8));
    }
    else if (pUrl.indexOf("/", 8) > -1) {
        r.host = pUrl.substring(r.schema.length + 3, pUrl.indexOf("/", 8));
    }
    else if (pUrl.indexOf("?", 8) > -1) {
        r.host = pUrl.substring(r.schema.length + 3, pUrl.indexOf("?", 8));
    }
    else if (pUrl.indexOf("#", 8) > -1) {
        r.host = pUrl.substring(r.schema.length + 3, pUrl.indexOf("#", 8));
    }
    else {
        r.host = pUrl.substring(r.schema.length + 3, pUrl.length);
    }
    
    if (pUrl.indexOf(":", 8) > -1) {
        r.port = pUrl.substring(pUrl.indexOf(":", 8)+1, pUrl.indexOf("/", 8));
    }
    
    if (pUrl.indexOf("/", 8) > -1) {
        r.path = pUrl.substring(pUrl.indexOf("/", 8)+1, pUrl.indexOf("?", 8));
    }
    
    if (pUrl.indexOf("?", 8) > -1) {
        r.query = pUrl.substring(pUrl.indexOf("?", 8)+1, pUrl.length);
    }
    
    if (pUrl.includes("#")){
        r.fragment = pUrl.substring(pUrl.indexOf("#")+1, pUrl.length);
    }
    return r;
}
