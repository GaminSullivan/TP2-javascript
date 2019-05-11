var reponse = prompt("Dite bonjour ! ");

if (reponse== "bonjour")
{
    var secondeReponse = prompt("Bonjour ! Ca va ?");
    if (secondeReponse == "oui")
    {
        alert ("je suis content pour toi");
    }
    else 
    {
        alert("Désolé, il faut que je file");
    }
}
else {
    alert ("Désolé je n'ai pas compris");
}