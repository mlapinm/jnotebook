var batwing = {
    status: "Ready",
    rescueBatman: function() {
      document.write("Locating his transponder ... initiating launch ...");
    }
  }
  
  if (batwing.status === "Ready") {
    batwing.rescueBatman();
    document.write("<br />")
  }

  var utilities = {
    printAllMembers: function(targetObject) {
      for (i in targetObject) {
        document.write("<br />" + targetObject[i]);
      }
    }
  }
  
 utilities.printAllMembers(batwing);
 