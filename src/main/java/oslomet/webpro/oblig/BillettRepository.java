package oslomet.webpro.oblig;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreOrdre(Billett billett){
        String sql = "INSERT INTO Billett(lname, fname, quantity, phonenr, epost, film) VALUES (?,?,?,?,?,?);";
        db.update(sql, billett.getLname(),billett.getFname(),billett.getQuantity(),
                billett.getPhonenr(),billett.getEpost(),billett.getFilm());
    }


    public List<Billett> hentAlle(){
        String sql ="SELECT m.id, m.lname, m.fname,m.quantity, m.phonenr, m.epost, b.film "+
                "FROM Billett as m INNER JOIN Movie as b"+
                "ON m.film = b.film";
        List<Billett> billettList = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return billettList;
    }

    public List<Movie> hentFilm(){
        String sql ="SELECT * FROM Movie;";
        List<Movie> movieList = db.query(sql, new BeanPropertyRowMapper(Movie.class));
        return movieList;

    }
    public void slettAlle(){
        String sql = "DELETE FROM Billett;";
        db.update(sql);
    }
    public void slettEn(int id){
        String sql = "DELETE FROM Billett WHERE id = ?;";
        db.update(sql, id);

    }
}
