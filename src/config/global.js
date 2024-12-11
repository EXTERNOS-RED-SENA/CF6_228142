export default {
  global: {
    componenteFormativo:
      'Construyendo la red: implementación de cableado estructurado',
    descripcionCurso:
      'Este componente aborda la implementación y mantenimiento del cableado estructurado, destacando la importancia de los materiales y herramientas avanzadas, los subsistemas de cableado, y la infraestructura de <i>data centers</i>. Se exploran los estándares de rendimiento y calidad, así como las prácticas de mantenimiento preventivo, resolución de problemas y ampliación de sistemas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Materiales y herramientas avanzadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Equipos de testeo y certificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas especializadas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Control de calidad de materiales',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Subsistemas de cableado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cableado horizontal y vertical',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Área de trabajo y cuartos técnicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Entrada de servicios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mantenimiento de infraestructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Mantenimiento preventivo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Resolución de problemas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ampliación de sistemas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<i>Data center</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fundamentos y Estándares',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Infraestructura Física',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Sistemas de soporte',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Conclusiones',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Materiales y herramientas avanzadas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, septiembre 27). <i>Importancia de la correcta instalación de redes de fibra óptica.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RBa6CSZDwaQ',
    },
    {
      tema: 'Subsistemas de cableado',
      referencia:
        'Meneses, E. A. (2014). <i>Estándares y nuevos componentes del cableado estructurado</i>. ',
      tipo: 'Portal web',
      link: 'http://hdl.handle.net/20.500.12749/1284.',
    },
  ],
  glosario: [
    {
      termino: 'Ampliación de sistemas',
      significado:
        'Proceso de expandir la infraestructura de cableado estructurado para adaptarse a las necesidades cambiantes de una organización, incluyendo la adición de nuevos puntos de conexión, la expansión de cuartos técnicos y la actualización de equipos de red.',
    },
    {
      termino: 'Cableado horizontal',
      significado:
        'Infraestructura de cableado que conecta los equipos de usuario final con los cuartos técnicos, extendiéndose desde los paneles de parcheo hasta los puntos de conexión en las áreas de trabajo.',
    },
    {
      termino: 'Cableado vertical',
      significado:
        'Infraestructura de cableado que conecta los cuartos técnicos con los equipos de entrada de servicios, distribuyendo los servicios de red a lo largo del edificio.',
    },
    {
      termino: 'Certificación',
      significado:
        'Proceso de verificar que el cableado cumple con los estándares de rendimiento y calidad establecidos por organizaciones como el TIA y el ANSI.',
    },
    {
      termino: 'Conectores RJ-45',
      significado:
        'Dispositivos de conexión utilizados en redes de telecomunicaciones y redes de datos para conectar cables de par trenzado a equipos de red, como <i>routers, switches</i> y computadoras.',
    },
    {
      termino: 'Cuartos técnicos',
      significado:
        'Áreas especializadas dentro de un edificio que albergan equipos de red centralizados, como <i>switches, routers</i> y paneles de parcheo, proporcionando un entorno seguro y controlado para los equipos de red.',
    },
    {
      termino: 'Demarcadores',
      significado:
        'Dispositivos que marcan el punto de responsabilidad entre el proveedor de servicios y el propietario del edificio, facilitando la identificación y resolución de problemas de red.',
    },
    {
      termino: 'Entrada de servicios',
      significado:
        'Punto donde los servicios de red externos, como Internet y telefonía, ingresan al edificio, diseñado para proporcionar una conexión segura y protegida para los servicios de red.',
    },
    {
      termino: 'Infraestructura física',
      significado:
        'Componentes físicos de un data center, incluyendo los sistemas de cableado, los bastidores para servidores y los sistemas de ventilación y control de temperatura.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'Actividades y procesos realizados para asegurar que la infraestructura de cableado estructurado funcione de manera óptima y sin interrupciones, incluyendo la inspección regular de cables, conectores y equipos de red.',
    },
    {
      termino: 'Paneles de parcheo',
      significado:
        'Dispositivos utilizados en cuartos técnicos que actúan como puntos de terminación para los cables horizontales, facilitando la organización y gestión de las conexiones de red.',
    },
    {
      termino: 'Protectores de sobretensión',
      significado:
        'Dispositivos diseñados para proteger los equipos de red contra daños eléctricos causados por sobretensiones y picos de voltaje',
    },
    {
      termino: 'Resolución de problemas',
      significado:
        'Proceso de identificar y solucionar problemas en la infraestructura de cableado estructurado, utilizando equipos de testeo y certificación para diagnosticar y corregir fallos.',
    },
    {
      termino: 'Sistemas de alimentación ininterrumpida (UPS)',
      significado:
        'Dispositivos que proporcionan una fuente de energía confiable y redundante, asegurando la continuidad del servicio en caso de fallos en la red eléctrica.',
    },
    {
      termino: 'TIA-568',
      significado:
        'Estándar desarrollado por el <i>Telecommunications Industry Association </i>(TIA) que define las especificaciones para el cableado de par trenzado y otros componentes de la infraestructura de red, asegurando que cumplan con los requisitos de rendimiento y calidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'American National Standards Institute. (2017). TIA-942-B:<i> Telecommunications Infrastructure Standard for Data Centers</i>. TIA.',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). ISO/IEC 14763-2:2018 <i>Information technology — Implementation and operation of customer premises cabling — Part 2: Planning and installation</i>. ISO.',
    },
    {
      referencia:
        'Telecommunications Industry Association. (2017). TIA-568.2-D: <i>Balanced Twisted-Pair Telecommunications Cabling and Components Standard</i>. TIA.',
    },
    {
      referencia:
        'Uptime Institute. (2019). <i>Tier Standard: Topology.</i> Uptime Institute.',
    },
  ],
}
