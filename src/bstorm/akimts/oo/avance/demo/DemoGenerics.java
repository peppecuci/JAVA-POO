package bstorm.akimts.oo.avance.demo;

import bstorm.akimts.oo.avance.demo.generics.*;
import bstorm.akimts.oo.avance.exo.CompetitionImpl;
import bstorm.akimts.oo.avance.exo.Judoka;
import bstorm.akimts.oo.avance.exo.exceptions.NiveauCompetition;

import java.time.LocalDate;

public class DemoGenerics {

    public static void main(String[] args) {

        CompetitionImpl<Judoka> competition = new CompetitionImpl<>(NiveauCompetition.REGIONAL, 5);
        Judoka judoka = new Judoka("Cucinotta", "Giuseppe", LocalDate.of(1991,04,18), 54);
        competition.inscrire(judoka);
        competition.desinscrire(judoka);
    }
}
