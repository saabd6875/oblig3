package oslomet.webpro.oblig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillettController {

    @Autowired
    BillettRepository rep;

    @PostMapping("/lagre")
    public void lagreOrdre(Billett billett){ rep.lagreOrdre(billett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return rep.hentAlle();
    }

    @GetMapping("/getBillettFromDB")
    public Billett getBillettFromDB(@RequestParam Long id){
        return rep.findById(id);
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlle();
    }

    @GetMapping("/slettEn")
    public void slettEn(Long id){rep.slettEn(id);}

    @PostMapping("/updateBillett")
    public String updateBillett(Billett billett){
        rep.updateBillett(billett);
        return "oppdatert";
    }

}

