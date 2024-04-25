package oslomet.webpro.oblig;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@SuppressWarnings("ALL")
@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreOrdre(Billett billett){
        String sql = "INSERT INTO Billetter(lname, fname, quantity, phonenr, epost, film) VALUES (?, ?, ?, ?, ?, ?);";
        db.update(sql, billett.getLname(), billett.getFname(), billett.getQuantity(), billett.getPhonenr(), billett.getEpost(), billett.getFilm());
    }



    public List<Billett> hentAlle(){
        String sql ="SELECT lname, fname, quantity, phonenr, epost, film "+
                "FROM Billetter";
        List <Billett> billettList = db.query( sql, new BeanPropertyRowMapper(Billett.class));
        return billettList;
    }

    public void slettAlle(){
        String sql = "DELETE FROM Billetter;";
        db.update(sql);
    }
    public void slettEn(int id){
        String sql = "DELETE FROM Billetter WHERE id = ?;";
        db.update(sql, id);

    }
}
