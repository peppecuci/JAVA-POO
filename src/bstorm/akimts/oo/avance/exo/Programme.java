package bstorm.akimts.oo.avance.exo;

import bstorm.akimts.oo.avance.exo.exceptions.EtatCompetitionException;
import bstorm.akimts.oo.avance.exo.exceptions.NiveauCompetition;

import java.util.List;

public class Programme {

    public static void main(String[] args) {

        CompetitionImpl<Judoka> compet = new CompetitionImpl<>(NiveauCompetition.REGIONAL, 5);

        System.out.println("Les participants de la competition sont:");
        try {
            compet.inscrire(new Judoka("Giuseppe", "Cucinotta", null, 60));
            compet.inscrire(new Judoka("Rami", "Hoteite", null, 50));
            compet.inscrire(new Judoka("Marcelo", "Romero", null, 45));
            compet.inscrire(new Judoka("Abed", "Boah", null, 75));
        }
        catch(EtatCompetitionException ex) {
            ex.printStackTrace();
        }


        compet.lancer();

    }

}
