const menus = {
  ok: true,
  menu: [
    {
      dme_id: 1,
      dme_texto: "MANTENIMIENTOS",
      prg_id: -1,
      prg_url_panel: "",
      cme_id: 2,
      cme_nombre: "MANTENIMIENTOS SEGURIDAD",
      dme_orden: 1,
      hijos: [
        {
          dme_id: 2,
          dme_texto: "FORMULARIOS",
          prg_id: 1,
          prg_url_panel: "Formulario",
          cme_id: -1,
          cme_nombre: "",
          dme_orden: 1,
        },
        {
          dme_id: 3,
          dme_texto: "USUARIOS",
          prg_id: 2,
          prg_url_panel: "UsuariosSeguridad",
          cme_id: -1,
          cme_nombre: "",
          dme_orden: 2,
        },
        {
          dme_id: 4,
          dme_texto: "INCIDENCIAS",
          prg_id: 4,
          prg_url_panel: "Incidencias",
          cme_id: -1,
          cme_nombre: "",
          dme_orden: 3,
        },
        {
          dme_id: 5,
          dme_texto: "INSPECCIONES",
          prg_id: 5,
          prg_url_panel: "Inspecciones",
          cme_id: -1,
          cme_nombre: "",
          dme_orden: 4,
        },
        {
          dme_id: 6,
          dme_texto: "CAPACITACIONES",
          prg_id: 6,
          prg_url_panel: "Capacitaciones",
          cme_id: -1,
          cme_nombre: "",
          dme_orden: 5,
        },
      ],
    },
    {
      dme_id: 7,
      dme_texto: "USUARIOS SALUD",
      prg_id: 3,
      prg_url_panel: "UsuariosSalud",
      cme_id: -1,
      cme_nombre: "",
      dme_orden: 2,
    },
  ],
};

export default menus;
