var reponseDEUX;
var reponseTROIS;
var reponseQUATRE;


var reponseUN = prompt("Dite bonjour");

if (reponseUN == "bonjour")
{
    reponseDEUX = prompt("ca va bien?");
    if( reponseDEUX== "oui")
    {
         reponseTROIS = prompt("Ha super alors ! Il fait beau dehors ?");
        if (reponseTROIS == "oui")
        {
            reponseQUATRE = prompt("Il y a du soleil dehors alors?");
            if (reponseQUATRE == "oui")
            {
                alert("Super ! J'adore le soleil");
            }
            else if (reponseQUATRE=="non")
            {
            alert("Tant qu'il fait beau temps c'est bon alors");
            }
        }
        else if(reponseTROIS=="non")
        {
            reponseQUATRE = prompt("Il y a de la pluie alors?")
            if (reponseQUATRE=="oui")
            {
                alert("C'est pas si mal la pluie j'aime bien moi :-)");
            }
            else if (reponseQUATRE=="non")
            {
                alert("Dommage j'aime bien la pluie");
            }
        }
    }
    else if (reponseDEUX== "non")
    {
        reponseTROIS = prompt("Tu es malade ?");
        if (reponseTROIS == "oui")
        {
            alert("Oh ben repose toi bien alors! ");

        }
        else if (reponseDEUX=="non")
        {
            alert("Ha tant mieux alors tu es en bonne santé");
        }
    }
}
else 
{
    alert ("Désolé je n'ai pas compris");
}