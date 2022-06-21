package bstorm.akimts.oo.avance.exo;

import java.util.Set;


// Cette interface me permet de rester dans le cadre de l'énoncé
public interface Competition<S extends Sportif> {

    void lancer();
    void inscrire(S athlete);
    void desinscrire(S athlete);
    Set<S> getGagnants();
    boolean isTerminee();

    int getLimiteParticipant();

}
