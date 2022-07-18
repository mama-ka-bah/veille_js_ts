interface FigureGeo{
    surface():Number,
}

var carre: FigureGeo ={
    surface:function():Number{
        var cote = 6
        return cote*cote
    }
}

console.log(carre.surface())


interface Salutation{
    direBonjour(name:string):string
}

var keita: Salutation={
    direBonjour(name:string):string{
        return "Bonjour " + name
    }
}

console.log(keita.direBonjour("Keita"))