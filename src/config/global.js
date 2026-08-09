export default {
  global: {
    Name: 'Formulación de alimento balanceado en aves',
    Description:
      'Este componente formativo desarrolla los fundamentos para la formulación de alimentos balanceados en aves de corral. Aborda la fisiología digestiva, los requerimientos nutricionales, la selección de ingredientes, la elaboración de dietas, el control de calidad y el bienestar animal. Su propósito es fortalecer las competencias técnicas para diseñar programas de alimentación eficientes, sostenibles y acordes con los parámetros productivos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        titulo: 'Fisiología digestiva en aves granívoras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Funciones del sistema digestivo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Componentes del sistema digestivo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Especializaciones digestivas en aves granívoras',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Identificación de la función digestiva animal',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Relación entre órganos digestivos y absorción de nutrientes',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Importancia de la fisiología digestiva en la producción avícola',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Requerimientos nutricionales y plan alimentario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de nutrición y alimentación animal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Concepto de plan alimentario',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Requerimientos nutricionales según especie y etapa productiva',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Energía, proteína, vitaminas, minerales y agua',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Cálculo del consumo de proteína',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis bromatológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de análisis bromatológico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Importancia en la alimentación animal',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Parámetros bromatológicos básicos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Control de calidad de materias primas',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Muestreo bromatológico',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Micotoxinas y análisis bromatológico',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo:
              'Aplicación del análisis bromatológico en la formulación de alimentos',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Formulación y balanceo de raciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de ración alimentaria',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Componentes de una ración balanceada',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos de fórmulas alimenticias',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Métodos y técnicas de balanceo de dietas',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Formulación de raciones según requerimientos nutricionales',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo:
              'Aplicación del análisis bromatológico en el balanceo de dietas',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Eficiencia alimenticia y desempeño productivo',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Bienestar animal y buenas prácticas sanitarias en aves',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de bienestar animal',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Principios y libertades del bienestar animal',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Comportamiento animal',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Indicadores de bienestar',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Buenas prácticas sanitarias y bioseguridad',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Buenas Prácticas Pecuarias',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Evaluación del bienestar',
            hash: 't_5_7',
          },
          {
            numero: '5.8',
            titulo: ' Normatividad',
            hash: 't_5_8',
          },
          {
            numero: '5.9',
            titulo: 'Acciones de mejora',
            hash: 't_5_9',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      termino: 'Bioseguridad',
      significado:
        'medidas destinadas a prevenir la entrada y propagación de enfermedades en los sistemas de producción animal.',
    },
    {
      termino: 'Digestibilidad',
      significado:
        'capacidad que tiene un alimento para ser digerido y aprovechado por el organismo.',
    },
    {
      termino: 'Granívora',
      significado:
        'ave cuya alimentación se basa principalmente en granos y semillas.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'condición que garantiza que un alimento no representa riesgos para la salud cuando se utiliza adecuadamente.',
    },
    {
      termino: 'Metabolismo',
      significado:
        'conjunto de reacciones químicas mediante las cuales el organismo transforma y utiliza los nutrientes.',
    },
    {
      termino: 'Micotoxinas',
      significado:
        'sustancias tóxicas producidas por algunos hongos que pueden contaminar los alimentos.',
    },
    {
      termino: 'Molleja',
      significado:
        'órgano muscular que tritura mecánicamente el alimento en las aves.',
    },
    {
      termino: 'Peristaltismo',
      significado:
        'movimiento muscular que impulsa el alimento a través del aparato digestivo.',
    },
    {
      termino: 'Proventrículo',
      significado:
        'primera porción del estómago de las aves, donde inicia la digestión química.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad para identificar y seguir el origen, procesamiento y destino de un producto durante toda la cadena de producción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023, 1 de febrero). Mejorar las condiciones de bienestar de las aves, un propósito del ICA.',
      link: 'https://www.ica.gov.co/noticias/mejorar-condiciones-bienestar-aves',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023, 29 de marzo). El ICA inició pruebas en campo de la metodología que evaluará el bienestar animal en aves de corral.',
      link: 'https://www.ica.gov.co/noticias/ica-inicio-metodologia-bienestar-animal-ave-corral',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023, 2 de mayo). Profesionales del ICA se capacitan en evaluación del bienestar animal en aves de corral.',
      link: 'https://www.ica.gov.co/noticias/ica-capacitacion-evaluacion-aves-de-corral',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023, 19 de septiembre). El ICA avanza en extensión agropecuaria con bienestar animal.',
      link: 'https://www.ica.gov.co/noticias/capacitacion-bienestar-animal-narino',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023, 16 de noviembre). Colombia avanza en bienestar animal en la producción primaria.',
      link: 'https://www.ica.gov.co/noticias/colombia-avanza-bienestar-animal-produccion-agroal',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2024). Inocuidad en la producción pecuaria primaria y bienestar animal.',
      link: 'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2024). Bienestar animal en la producción pecuaria colombiana.',
      link: '',
    },
    {
      referencia:
        'Nicol, C. J., Abeyesinghe, S. M., & Chang, Y.-M. (2024). An analysis of the welfare of fast-growing and slower-growing strains of broiler chicken. Frontiers in Animal Science, 5, Article 1374609.',
      link: 'https://doi.org/10.3389/fanim.2024.1374609',
    },
    {
      referencia:
        'Ozenturk, U., Chen, Z., Jamone, L., & Versace, E. (2023). Robotics for poultry farming: Challenges and opportunities. arXiv.',
      link: 'https://arxiv.org/abs/2311.05069',
    },
    {
      referencia:
        'Yang, X., Dai, H., Wu, Z., Bist, R., Subedi, S., Sun, J., Lu, G., Li, C., & Liu, T. (2023). SAM for poultry science. arXiv.',
      link: 'https://arxiv.org/abs/2305.10254',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
