package bstorm.akimts.oo.avance.exo;

import java.time.LocalDate;
import java.util.Random;

public class Coureur extends Sportif{
    private int vitesseMoyenne;
    private int poid;

    //region

    public Coureur(String nom, String prenom, LocalDate dateNaiss, int vitesseMoyenne, int poid) {
        super(nom, prenom, dateNaiss);
        this.vitesseMoyenne = vitesseMoyenne;
        if(this.vitesseMoyenne < 8 || this.vitesseMoyenne > 13) {
            this.vitesseMoyenne = 11;
        }
        this.poid = poid;
        if(this.poid < 60 || this.poid > 200) {
            this.poid = 140;
        }
    }

    public int getVitesseMoyenne() {
        return vitesseMoyenne;
    }

    public void setVitesseMoyenne(int vitesseMoyenne) {
        this.vitesseMoyenne = vitesseMoyenne;
    }

    public int getPoid() {
        return poid;
    }

    public void setPoid(int poid) {
        this.poid = poid;
    }

    //endregion

    public double performer() {
        Random random = new Random();
        int performance = this.vitesseMoyenne / this.poid * (random.nextInt(110, 131));
        return performance;
    }
}
