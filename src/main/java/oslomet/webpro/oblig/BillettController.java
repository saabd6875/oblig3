package oslomet.webpro.oblig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillettController {

    @Autowired
    BillettRepository rep;

    @PostMapping("/lagreOrdre")
    public void lagreOrdre(Billett billett){ rep.lagreOrdre(billett);}

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){ return rep.hentAlle();}

    @GetMapping("/hentMovies")
    public List<Movie> hentMovies(){
        return rep.hentMovies();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlle();
    }

    @GetMapping("/slettEn")
    public void slettEn(int id){rep.slettEn(id);}
}
