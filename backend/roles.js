const AccessControl = require('accesscontrol')
const ac = new AccessControl()

exports.roles = (function() {
    ac.grant("basic")
     .readOwn("profile")
     .updateOwn("profile")
     .createOwn("excuse")
     .readOwn("excuse")
     .readOwn("skill")
     .updateOwn("skill")
     .createOwn("skill")
     .readOwn("skill")

     
    ac.grant("director")
     .extend("basic")
     .readAny("profile")
     .updateAny("profile")
     .readAny("excuse")
     .createOwn("meeting")
     .readOwn("meeting")
     .deleteOwn("meeting")
     .updateOwn("meeting")
     .createOwn("project")
     .readOwn("project")
     .deleteOwn("project")
     .updateOwn("project")
     .readAny("skill")
     
    ac.grant("saa")
     .extend("basic")
     .extend("director")
     .readAny("meeting")
     .deleteAny("meeting")
     .updateAny("meeting")
     .deleteAny("profile")
     
    return ac;
    })();
    
   