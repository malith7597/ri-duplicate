const AccessControl = require('accesscontrol')
const ac = new AccessControl()

exports.roles = (function() {
    ac.grant("basic")
     .readOwn("profile")
     .updateOwn("profile")
     .createOwn("excuse")

     
    ac.grant("director")
     .extend("basic")
     .readAny("profile")
     .updateAny("profile")
     .readAny("excuse")
     .createOwn("meeting")
     .readOwn("meeting")
     .deleteOwn("meeting")
     .updateOwn("meeting")
     
    ac.grant("saa")
     .extend("basic")
     .extend("director")
     .readAny("meeting")
     .deleteAny("meeting")
     .updateAny("meeting")
     .deleteAny("profile")
     
    return ac;
    })();
    
   