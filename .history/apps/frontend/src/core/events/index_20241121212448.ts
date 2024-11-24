import Evento from "./models/Evento";
import Convidado from "./models/Convidado";

import complementarConvidado from "./functions/complementarConvidado";
import complementarEvento from "./functions/complementarEvento";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";
import criarEventoVazio from "./functions/criarEventoVazio";
import validarConvidado from "./functions/validarConvidado";
import validarEvento from "./functions/validarEvento";

export type { Evento, Convidado };

export {
    complementarConvidado,
    complementarEvento,
    criarConvidadoVazio,
    criarEventoVazio,
    validarConvidado,
    validarEvento
}