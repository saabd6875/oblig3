package oslomet.webpro.oblig;


public class Billett {
    private Long id;
    private String lname;
    private String fname;
    private String phonenr;
    private String quantity;
    private String epost;
    private String film;

    public Billett(Long id, String lname, String fname, String phonenr, String quantity, String epost, String film) {
        this.id = id;
        this.lname =lname;
        this.fname = fname;
        this.phonenr = phonenr;
        this.quantity= quantity;
        this.epost = epost;
        this.film = film;

    }

    public Billett(){
        //default constructure
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getPhonenr() {
        return phonenr;
    }

    public void setPhonenr(String phonenr) {
        this.phonenr = phonenr;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }
}

