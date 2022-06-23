package bstorm.akimts.oo.avance.exo;

import bstorm.akimts.oo.avance.exo.exceptions.EtatCompetitionException;
import bstorm.akimts.oo.avance.exo.exceptions.LimiteAtteinteException;
import bstorm.akimts.oo.avance.exo.exceptions.NiveauCompetition;

import java.util.*;

public class CompetitionImpl<TypeCompet extends Sportif> implements Competition<TypeCompet> {

    private NiveauCompetition niveauCompet;
    private final int limiteParticipant;
    private final Map<TypeCompet, Integer> participants = new HashMap<>();
    private List<Sportif> classements;


    public CompetitionImpl(NiveauCompetition niveauCompet, int limiteParticipant) {
        if(limiteParticipant < 0)
            throw new IllegalArgumentException("la limite de participant invalide (devrait être positive");
        this.limiteParticipant = limiteParticipant;
        this.niveauCompet = niveauCompet;
    }


    @Override
    public void lancer() {

        // n'est pas terminé
        if( isTerminee()  )
            throw new EtatCompetitionException(isTerminee() , false);

        // Pas de participants
        if( participants.size() <= 3 )
            throw new IllegalStateException("La compet n'a pas de participants");

        for (TypeCompet sportif : participants.keySet()) {
            participants.put(sportif, (int) sportif.performer());
        }

        classements = genererClassement();
        Set <TypeCompet> setGagnants = getGagnants();
        System.out.println("Le gagnant est: " + setGagnants);
        for (Sportif sportif : setGagnants) {
            sportif.setTotalGain(this.niveauCompet.getPrime() / setGagnants.size());
            System.out.println("Prime gagné: " + sportif.getTotalGain());
        }



    }

    @Override
    public void inscrire(TypeCompet sportif) {

        // n'est pas termine
        if( isTerminee()  )
            throw new EtatCompetitionException(isTerminee() , false);

        // il y a de la place
        if( limiteParticipant != 0 && participants.size() >= limiteParticipant )
            throw new LimiteAtteinteException(limiteParticipant);

        // doit etre non inscrit+
        if( participants.containsKey(sportif) )
            throw new IllegalArgumentException("sportif déjà inscrit");

        participants.put(sportif, null);
        System.out.println("-" + sportif.getNom() + " " + sportif.getPrenom());
    }

    @Override
    public void desinscrire(TypeCompet sportif) {

        // deja terminée
        if( isTerminee()  )
            throw new EtatCompetitionException(isTerminee() , false);

        // n'existe pas
        if( !participants.containsKey(sportif) )
            throw new IllegalArgumentException("sportif non inscrit");

        participants.remove(sportif);
    }

    @Override
    public Set<TypeCompet> getGagnants() {

        if( !isTerminee() )
            throw new EtatCompetitionException(isTerminee() , true);

        Collection<Integer> values = participants.values();
        int maxPerf = 0;
        for (Integer value : values) {
            if( value > maxPerf )
                maxPerf = value;
        }

        Set<TypeCompet> gagnants = new HashSet<>();
        for (Map.Entry<TypeCompet, Integer> entry : participants.entrySet()) {
            if( entry.getValue() == maxPerf )
                gagnants.add(entry.getKey() );
        }

//        int maxPerf = participants.values()
//                .stream()
//                .mapToInt(i -> i)
//                .max()
//                .getAsInt();

//        Set<Sportif> gagnants = participants.entrySet().stream()
//                .filter( e -> e.getValue() == maxPerf )
//                .map( Map.Entry::getKey )
//                .collect(Collectors.toSet());

        return gagnants;
    }

    @Override
    public boolean isTerminee() {
        return classements != null;
    }

    @Override
    public int getLimiteParticipant() {
        return limiteParticipant;
    }

    private List<Sportif> genererClassement(){

        List<Sportif> classement = new ArrayList<>();

        for (Sportif sportif : participants.keySet()) {

            boolean place = false;
            for (int i = 0; i < classement.size() && !place; i++) {

                Sportif currentSportif = classement.get(i);
                int currentPerf = participants.get(currentSportif);

                int perfSportAPlacer = participants.get(sportif);

                if( perfSportAPlacer > currentPerf ){
                    classement.add(i, sportif);
                    place = true;
                }
            }

            if( !place )
                classement.add(sportif);

        }

        return classement;
    }

    public List<Sportif> getClassements() {
        return new ArrayList<>(classements);
    }
}


