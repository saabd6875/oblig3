package oslomet.webpro.oblig;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
@SuppressWarnings("ALL")
@Repository
public class BillettRepository {

    @Autowired
    JdbcTemplate db;


    class BillettRowMapper implements RowMapper < Billett > {
        @Override
        public Billett mapRow(ResultSet rs, int rowNum) throws SQLException {
            Billett billett = new Billett();
            billett.setId(rs.getLong("id"));
            billett.setLname(rs.getString("lname"));
            billett.setFname(rs.getString("fname"));
            billett.setPhonenr(rs.getString("phonenr"));
            billett.setEpost(rs.getString("epost"));
            billett.setQuantity(rs.getString("quantity"));
            billett.setFilm(rs.getString("film"));
            return billett;
        }
    }
    public int lagreOrdre(Billett billett){
        String sql = "INSERT INTO Billett(lname, fname, quantity, phonenr, epost, film) VALUES (?, ?, ?, ?, ?, ?);";
        return db.update(sql, billett.getLname(), billett.getFname(), billett.getQuantity(), billett.getPhonenr(), billett.getEpost(), billett.getFilm());
    }



    public List<Billett> hentAlle(){
        return db.query("SELECT * FROM billett", new BillettRowMapper() );
    }

    public Billett findById(Long id){
        return db.queryForObject("SELECT * FROM billett WHERE id=?", new BillettRowMapper(), id);

    }
    public void slettAlle(){
        String sql = "DELETE FROM Billett;";
        db.update(sql);
    }
    public void slettEn(Long id){
        String sql = "DELETE FROM Billett WHERE id = ?;";
        db.update(sql, id);

    }

    public int updateBillett(Billett billett){
        String sql = "UPDATE billett SET lname = ?, fname =?, phonenr =?, epost = ?, quantity = ?, film =? WHERE id = ?";
        return db.update(sql, billett.getLname(),billett.getFname(),billett.getPhonenr(),billett.getEpost(),billett.getQuantity(), billett.getFilm(), billett.getId());
    }
}
