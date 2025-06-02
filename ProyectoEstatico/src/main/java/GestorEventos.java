import java.util.ArrayList;
import java.util.List;

public class GestorEventos {
    private List<Eventos> eventos;
    private List<Usuario> usuarios;
    private List<Asistentes> asistentes;

    public GestorEventos() {
        eventos = new ArrayList<>();
        usuarios = new ArrayList<>();
        asistentes = new ArrayList<>();
    }

    public void agregarEvento(Eventos evento) {
        eventos.add(evento);
    }

    public boolean borrarEvento(int id_evento) {
        return eventos.removeIf(element -> element.id_enventos() == id_evento);
    }

    public List<Eventos> getEventos() {
        return eventos;
    }

    public Eventos obtenerEventoPorId(int id_evento) {
        for (Eventos evento : eventos) {
            if (evento.id_enventos() == id_evento) {
                return evento;
            }
        }
        return null;
    }


    public boolean agregarUsuario(Usuario usuario) {
        return usuarios.add(usuario);
    }


    public Usuario buscarUsuarioPorCorreo(String correo) {
        for (Usuario usuario : usuarios) {
            if (usuario.correo().equals(correo)) {
                return usuario;
            }
        }
        return null;
    }

    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    public boolean agregarAsistente(Asistentes asistente) {
        return asistentes.add(asistente);
    }

    public boolean borrarAsistente(Asistentes asistente) {
        return asistentes.remove(asistente);
    }

    public Asistentes obtenerAsistentePorEventoYUsuario(Eventos evento, Usuario usuario) {
        for (Asistentes asistente : asistentes) {
            if (asistente.evento().equals(evento) && asistente.usuario().equals(usuario)) {
                return asistente;
            }
        }
        return null;
    }
    
    public List<Asistentes> getAsistentes() {
        return asistentes;
    }
}
