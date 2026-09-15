export default {
  global: {
    Name: '<em>Front office: check-in</em>',
    Description:
      'La recepción interviene en la coordinación e interrelación con las demás áreas del hotel, siendo el primer contacto que se tiene con el cliente, donde un trato amable y profesional, responde a sus necesidades y asegurará que desee volver y lo recomiende. La importancia de conocer los procedimientos contribuye con el cumplimiento de la misión y visión del establecimiento hotelero.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo: 'Huésped',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recepción hotelera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estructura organizacional del área',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Personal de recepción',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Registro de huéspedes (<em>check-in</em>)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Reserva',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Disponibilidad (<em>Availability</em>)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Informe de ocupación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Formas impresas',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Llaves de habitaciones',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Procedimiento técnico para el registro de huéspedes',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Normativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Normativa de prevención de explotación sexual comercial de niños, niñas y adolescentes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Normativa aplicable para nacionales y extranjeros',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Documentos de identificación legalmente aceptados',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Protocolos internos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Porte del uniforme',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Presentación personal',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Trato con el huésped',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Uso de áreas del hotel',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Reportes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Recibo y entrega de turno',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Bitácoras',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/621602_CF07_DU.zip',
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
  glosario: [
    {
      termino: 'Acontecimiento',
      significado: 'Suceso, especialmente si es importante.',
    },
    {
      termino: 'Asidua',
      significado:
        'Que realiza con constancia y con cierta continuidad o frecuencia alguna cosa.',
    },
    {
      termino: '<em>Back-office</em>',
      significado:
        'Parte de la empresa donde se realizan las actividades de gestión en las que el cliente no tiene contacto directo con el personal (departamento de informática, recursos humanos, contabilidad, entre otros). Es todo lo que está detrás del mostrador, todo lo que no está de cara al cliente.',
    },
    {
      termino: 'Coadyuvar',
      significado: 'Contribuir o ayudar a la consecución de una cosa.',
    },
    {
      termino: 'Conserje',
      significado:
        'Persona encargada de la conserjería, que se ocupa entre otras funciones de dar a los clientes información general y particular del establecimiento y del destino.',
    },
    {
      termino: 'Dato',
      significado:
        'Elemento de conocimiento que no tiene significado por sí mismo; es algo incompleto que necesita pasar por un proceso de elaboración que le dé sentido, convirtiéndose en información.',
    },
    {
      termino: 'Esporádico',
      significado:
        'Que sucede o se hace con poca frecuencia, con intervalos de tiempo irregulares, y de forma aislada, sin relación con otros casos anteriores o posteriores.',
    },
    {
      termino: '<em>Front-office</em>',
      significado:
        'Parte de la empresa donde se realizan las actividades que tienen trato directo con el cliente. Es la oficina visible, como el departamento de ventas, reservas y recepción.',
    },
    {
      termino: 'Información',
      significado:
        'Conjunto de datos organizados que forman un mensaje sobre un tema en concreto. Los datos por sí solos no tienen sentido; es su organización lo que genera información.',
    },
    {
      termino: '<em>No-show</em>',
      significado:
        'Término utilizado cuando un cliente que tenía una reservación no se presenta, quedando la habitación vacante.',
    },
    {
      termino: 'Premura',
      significado: 'Prisa o urgencia con que se hace algo.',
    },
    {
      termino: 'Productiva',
      significado:
        'Que arroja un resultado favorable al comparar los ingresos con los costes.',
    },
    {
      termino: 'Reportar',
      significado: 'Transmitir o comunicar noticias o novedades.',
    },
    {
      termino: 'Requerimientos',
      significado:
        'Petición de una cosa que se considera necesaria, especialmente la que hace una autoridad.',
    },
    {
      termino: 'Sectores productivos',
      significado:
        'Divisiones de la economía según el tipo de actividad que realizan; son útiles o provechosos para el desarrollo económico.',
    },
    {
      termino: 'VIP',
      significado:
        'Sigla del inglés <em>Very Important Person</em>. Categoría asignada a huéspedes cuya influencia en su medio puede contribuir al posicionamiento y a las ventas del establecimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, D. I. (2015). La importancia del uniforme: embajador de la compañía. Blog del Hotel.',
      link: '',
    },
    {
      referencia:
        'Bardi, J. (2011). Hotel front office management. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Canalis, X. (2021). Historia de la llave de hotel. Hosteltur.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (1996, 26 de julio). Ley 300 de 1996, por la cual se expide la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 42.845.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8634',
    },
    {
      referencia:
        'Congreso de Colombia. (2001, 4 de agosto). Ley 679 de 2001, por medio de la cual se expide un estatuto para prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores, en desarrollo del artículo 44 de la Constitución. Diario Oficial No. 44.509.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18309',
    },
    {
      referencia:
        'Congreso de Colombia. (2009, 21 de julio). Ley 1336 de 2009, por medio de la cual se adiciona y robustece la Ley 679 de 2001, de lucha contra la explotación, la pornografía y el turismo sexual con niños, niñas y adolescentes. Diario Oficial No. 47.417.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36877',
    },
    {
      referencia:
        'Congreso de Colombia. (2020, 31 de diciembre). Ley 2068 de 2020, por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 51.544.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=172558',
    },
    {
      referencia:
        'Congreso de Colombia. (2021, 14 de julio). Ley 2101 de 2021, por medio de la cual se reduce la jornada laboral semanal de manera gradual, sin disminuir el salario de los trabajadores y se dictan otras disposiciones. Diario Oficial No. 51.731.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=166506',
    },
    {
      referencia:
        'Instituto Colombiano de Bienestar Familiar (ICBF). (2018). Línea de política pública para la prevención y erradicación de la explotación sexual comercial de niñas, niños y adolescentes 2018-2028. ICBF.',
      link:
        'https://www.icbf.gov.co/sites/default/files/linea_pp_escnna_20180620.pdf',
    },
    {
      referencia:
        'Migración Colombia. (2020). Resolución 2357 de 2020, por la cual se establecen los criterios para el cumplimiento de obligaciones migratorias. Unidad Administrativa Especial Migración Colombia.',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/resolucion_uaemc_2357_2020.htm',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003). Norma Técnica Sectorial NTSH 003: establecimientos de alojamiento y hospedaje norma de competencia laboral: prestación del servicio de recepción y reservas conforme a manuales existentes. MinCIT.',
      link: 'https://fontur.com.co/sites/default/files/2020-11/NTSH003.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2009). Norma Técnica Sectorial Hotelera NTSH 006: clasificación de los establecimientos de alojamiento y hospedaje categorización por estrellas de hoteles, requisitos normativos. MinCIT.',
      link: 'https://fontur.com.co/sites/default/files/2020-11/NTSH006.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2021, 15 de julio). Resolución 700 de 2021, por la cual se implementa la Tarjeta de Registro de Alojamiento. MinCIT.',
      link:
        'https://www.mincit.gov.co/normatividad/resoluciones/2021/resolucion-700-del-15-de-julio-de-2021-por-la-cual',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s. f.). Manual de buenas prácticas para la prevención de la explotación sexual comercial de niñas, niños y adolescentes (ESCNNA) en viajes y turismo. MinCIT.',
      link: '',
    },
    {
      referencia:
        'SENA. (s. f.). Guía práctica en el procedimiento de <em>check-in</em> [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=uUcVZQl-LE4',
    },
    {
      referencia:
        'Villanueva, R. (2012). Organización y prestación del servicio de recepción en alojamientos. IC Editorial.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Isabel Suárez Delgado',
          cargo: 'Experto temático',
          centro: 'Centro de Gestión y Servicios – Regional Antioquia',
        },
        {
          nombre: 'Harbey Castelblanco',
          cargo: 'Experto temático',
          centro: 'Centro Nacional Colombo Alemán – Regional Atlántico ',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
