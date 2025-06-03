import java.sql.Date;

public record Eventos(int id_enventos, String nombre, Date fecha, int duracion, Ubicaciones ubicaciones, Categoria categoria, Organizador organizador) {
}
