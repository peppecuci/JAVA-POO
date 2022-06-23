package bstorm.akimts.oo.avance.exo;

import java.time.LocalDate;

abstract class Sportif {

    private String nom;
    private String prenom;
    private LocalDate dateNaiss;

    private int totalGain;

    //region const-get-set
    public Sportif(String nom, String prenom, LocalDate dateNaiss) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaiss = dateNaiss;
    }
    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public LocalDate getDateNaiss() {
        return dateNaiss;
    }

    public void setDateNaiss(LocalDate dateNaiss) {
        this.dateNaiss = dateNaiss;
    }

    public int getTotalGain() {
        return totalGain;
    }

    public void setTotalGain(int totalGain) {
        this.totalGain = totalGain;
    }

    //endregion

    public abstract double performer();

    @Override
    public String toString() {
        return nom + " " + prenom;
    }
}
