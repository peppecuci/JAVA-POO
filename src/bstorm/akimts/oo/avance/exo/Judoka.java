package bstorm.akimts.oo.avance.exo;

import java.time.LocalDate;
import java.util.Random;

public class Judoka extends Sportif {

    private int puissanceProjection;

    //region
    public Judoka(String nom, String prenom, LocalDate dateNaiss, int puissanceProjection) {
        super(nom, prenom, dateNaiss);
        this.puissanceProjection = puissanceProjection;
        if(this.puissanceProjection < 40 || this.puissanceProjection > 80){
            this.puissanceProjection = 60;
        }
    }

    public int getPuissanceProjection() {
        return puissanceProjection;
    }

    public void setPuissanceProjection(int puissanceProjection) {
        this.puissanceProjection = puissanceProjection;
    }
    //endregion


    @Override
    public double performer() {
        Random random = new Random();
        int performance = this.puissanceProjection + (random.nextInt(-20, 21));
        return performance;
    }
}
