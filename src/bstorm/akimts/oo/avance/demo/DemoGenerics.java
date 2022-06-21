package bstorm.akimts.oo.avance.demo;

import bstorm.akimts.oo.avance.demo.generics.*;
import bstorm.akimts.oo.avance.exo.CompetitionImpl;
import bstorm.akimts.oo.avance.exo.Judoka;

import java.time.LocalDate;

public class DemoGenerics {

    public static void main(String[] args) {

        CompetitionImpl<Judoka> competition = new CompetitionImpl<>();
        Judoka judoka = new Judoka("Cucinotta", "Giuseppe", LocalDate.of(1991,04,18), 54);
        competition.inscrire(judoka);
        competition.desinscrire(judoka);
    }
}
