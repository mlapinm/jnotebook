var planet = {
    id: 34,
    name: "Imtempesta Nox",
    faction: {
      factionId: 2,
      name: "Nex",
      notification: function() {
        document.write("Nex alliance ... unite!");
        document.write("<br>")
      }
    },
    cities: [
      { locationId: 15, name: "Gladius" },
      { locationId: 16, name: "Chalybs" },
      { locationId: 17, name: "Ensis" }
    ]
  };

planet.faction.notification();
document.write(planet.cities[1].name);
for (member in planet)
{
  document.write("<br/>" + member + " ==> " + planet[member]);
}
//================
const myObject = {
    nick: 'cage',
    phil: 'murray',
};

Object.entries(myObject).forEach(([k,v]) => {
    document.write("<br>The key: ",k)
    document.write(" The value: ",v)
})