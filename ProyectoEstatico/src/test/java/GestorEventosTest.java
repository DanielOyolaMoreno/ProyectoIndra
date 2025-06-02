import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.sql.Date;

public class GestorEventosTest {
    private GestorEventos gestorEventos;
    private Eventos eventoPrueba;
    private Usuario usuarioPrueba;
    private Asistentes asistentePrueba;

    @BeforeEach
    void setUp() {
        gestorEventos = new GestorEventos();

        usuarioPrueba = new Usuario("test@correo.com", "Test User");
        Ubicaciones ubicacionPrueba = new Ubicaciones(1, "Calle Falsa 123", false);
        Categoria categoriaPrueba = new Categoria(1, "Conferencia");
        Organizador organizadorPrueba = new Organizador(usuarioPrueba, "600000000");

        eventoPrueba = new Eventos(1, "Evento Test", Date.valueOf("2024-06-01"), 2, ubicacionPrueba, categoriaPrueba, organizadorPrueba);
        asistentePrueba = new Asistentes(eventoPrueba, usuarioPrueba);
    }

    @Test
    void testAgregarEvento() {
        gestorEventos.agregarEvento(eventoPrueba);
        assertEquals(1, gestorEventos.getEventos().size());
        assertTrue(gestorEventos.getEventos().contains(eventoPrueba));
    }

    @Test
    void testBorrarEvento() {
        gestorEventos.agregarEvento(eventoPrueba);
        boolean borrado = gestorEventos.borrarEvento(1);
        assertTrue(borrado);
        assertEquals(0, gestorEventos.getEventos().size());
    }

    @Test
    void testBorrarEventoNoExistente() {
        boolean borrado = gestorEventos.borrarEvento(999);
        assertFalse(borrado);
    }

    @Test
    void testObtenerEventoPorId() {
        gestorEventos.agregarEvento(eventoPrueba);
        Eventos eventoEncontrado = gestorEventos.obtenerEventoPorId(1);
        assertNotNull(eventoEncontrado);
        assertEquals(eventoPrueba, eventoEncontrado);
        assertNull(gestorEventos.obtenerEventoPorId(999));
    }

    @Test
    void testAgregarUsuario() {
        gestorEventos.agregarUsuario(usuarioPrueba);
        assertEquals(1, gestorEventos.getUsuarios().size());
        assertTrue(gestorEventos.getUsuarios().contains(usuarioPrueba));
    }

    @Test
    void testBuscarUsuarioPorCorreoExistente() {
        gestorEventos.agregarUsuario(usuarioPrueba);
        Usuario usuarioEncontrado = gestorEventos.buscarUsuarioPorCorreo("test@correo.com");
        assertNotNull(usuarioEncontrado);
        assertEquals("Test User", usuarioEncontrado.nombre());
    }

    @Test
    void testBuscarUsuarioPorCorreoInexistente() {
        Usuario usuarioEncontrado = gestorEventos.buscarUsuarioPorCorreo("noexiste@correo.com");
        assertNull(usuarioEncontrado);
    }

    @Test
    void testAgregarAsistente() {
        gestorEventos.agregarAsistente(asistentePrueba);
        assertEquals(1, gestorEventos.getAsistentes().size());
        assertTrue(gestorEventos.getAsistentes().contains(asistentePrueba));
    }

    @Test
    void testBorrarAsistente() {
        gestorEventos.agregarAsistente(asistentePrueba);
        boolean borrado = gestorEventos.borrarAsistente(asistentePrueba);
        assertTrue(borrado);
        assertEquals(0, gestorEventos.getAsistentes().size());
    }

    @Test
    void testObtenerAsistentePorEventoYUsuario() {
        gestorEventos.agregarAsistente(asistentePrueba);
        Asistentes encontrado = gestorEventos.obtenerAsistentePorEventoYUsuario(eventoPrueba, usuarioPrueba);
        assertNotNull(encontrado);
        assertEquals(asistentePrueba, encontrado);

        Ubicaciones ubicacion2 = new Ubicaciones(2, "Otra Calle", false);
        Categoria categoria2 = new Categoria(2, "Taller");
        Organizador organizador2 = new Organizador(usuarioPrueba, "600000001");
        Eventos otroEvento = new Eventos(2, "Otro Evento", Date.valueOf("2024-07-01"), 1, ubicacion2, categoria2, organizador2);
        assertNull(gestorEventos.obtenerAsistentePorEventoYUsuario(otroEvento, usuarioPrueba));
    }
}