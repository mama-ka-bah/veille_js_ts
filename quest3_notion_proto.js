var exam={
  nom:"bacc",
moyenne: function(){
  console.log("vous reussirez")
}
}
var eleve = {

}
eleve.__proto__ = exam
console.log(eleve.nom)