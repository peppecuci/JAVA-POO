package bstorm.akimts.oo.avance.exo;

import java.time.LocalDate;
import java.util.Random;

public class LanceurJavelot extends Sportif {

    private int force;
    private int anneeExp;

    //region
    public LanceurJavelot(String nom, String prenom, LocalDate dateNaiss, int force, int anneeExp) {
        super(nom, prenom, dateNaiss);
        this.force = force;
        if(force < 30 || force > 50) {
            force = 40;
        }
        this.anneeExp = anneeExp;
        if(anneeExp < 0 || anneeExp > 20){
            anneeExp = 10;
        }
    }

    public int getForce() {
        return force;
    }

    public void setForce(int force) {
        this.force = force;
    }

    public int getAnneeExp() {
        return anneeExp;
    }

    public void setAnneeExp(int anneeExp) {
        this.anneeExp = anneeExp;
    }
    //endregion

    public double performer() {
        Random random = new Random();
        double forceAnnee = force + anneeExp;
        double pourcentage = forceAnnee * (random.nextDouble(0.70, 0.91));
        double performance = forceAnnee * pourcentage;
        return performance;
    }

}
