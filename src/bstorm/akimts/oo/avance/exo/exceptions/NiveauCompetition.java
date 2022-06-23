package bstorm.akimts.oo.avance.exo.exceptions;

public enum NiveauCompetition {

    REGIONAL(1000, 25),
    NATIONAL(10000, 50),
    INTERNATIONNALE(100000, 100);

    private int prime;
    private int nbrParticipants;

    //region const-get
    NiveauCompetition(int prime, int nbrParticipants) {
        this.prime = prime;
        this.nbrParticipants = nbrParticipants;
    }

    public int getPrime() {
        return prime;
    }

    public int getNbrParticipants() {
        return nbrParticipants;
    }
    //endregion
}
