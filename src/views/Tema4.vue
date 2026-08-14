<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Formulación y balanceo de raciones
      p.mb-3 La formulación y el balanceo de raciones constituyen uno de los procesos más importantes dentro de la nutrición avícola moderna, ya que permiten diseñar dietas capaces de satisfacer los requerimientos nutricionales de las aves de acuerdo con su especie, edad, línea genética, estado fisiológico y objetivo productivo. Una ración correctamente balanceada garantiza que los nutrientes se suministren en las cantidades y proporciones adecuadas para mantener la salud, el bienestar animal y niveles óptimos de producción.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-4(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t4/img1.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 En la actualidad, la formulación de alimentos balanceados se fundamenta en principios científicos, análisis bromatológicos, requerimientos nutricionales específicos y herramientas informáticas que optimizan el uso de las materias primas disponibles. El objetivo principal es obtener el máximo rendimiento productivo al menor costo posible, sin comprometer la salud de las aves ni la calidad de los productos obtenidos.
          p.mb-0 La formulación nutricional debe considerar que las aves no requieren ingredientes específicos, sino nutrientes. Por esta razón, la selección de materias primas debe orientarse a cubrir las necesidades de energía, proteína, aminoácidos, vitaminas, minerales, agua y otros nutrientes esenciales, manteniendo el equilibrio adecuado entre ellos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img2.png', alt='').m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-2(data-aos="fade-right").mb-3
            p.mb-0  Una formulación deficiente puede ocasionar bajo crecimiento, disminución en la producción de huevos, baja conversión alimenticia, desuniformidad de los lotes, incremento de los costos de producción, problemas metabólicos, alteraciones óseas, mayor mortalidad y deterioro del bienestar animal.
          .caja-3.ajuste-2(data-aos="fade-right")
            p.mb-0 Por el contrario, una dieta correctamente formulada permite cubrir de manera adecuada los requerimientos nutricionales de las aves, favoreciendo una mayor productividad, mejor eficiencia alimenticia, mayor rentabilidad, mejor calidad de carne y huevos, fortalecimiento de la respuesta inmunológica y una mayor longevidad productiva.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img3.jpg', alt='').m-auto
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Concepto de ración alimentaria
      p.mb-5 La ración alimentaria es la cantidad total de alimento que consume un animal durante un período determinado, generalmente expresada en gramos por ave por día o en kilogramos por lote por día. Desde el punto de vista nutricional, una ración corresponde a la combinación de diferentes ingredientes que, en conjunto, aportan todos los nutrientes necesarios para cubrir los requerimientos de mantenimiento, crecimiento, reproducción y producción de las aves. Una ración balanceada debe suministrar los nutrientes indispensables para el adecuado funcionamiento del organismo, como se presenta a continuación.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Nutrientes esenciales en una ración alimentaria
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nutriente
                      th.texto-left Importancia
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Energía
                      td.texto-left Proporciona la energía necesaria para el mantenimiento, el crecimiento y la producción.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Proteína
                      td.texto-left Favorece la formación y reparación de tejidos, así como el desarrollo corporal.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aminoácidos esenciales
                      td.texto-left Permiten la síntesis de proteínas y el adecuado desarrollo de las aves.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Vitaminas
                      td.texto-left Participan en los procesos metabólicos y en el mantenimiento de la salud.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Minerales
                      td.texto-left Intervienen en la formación ósea, la producción de huevos y otras funciones fisiológicas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Agua
                      td.texto-left Es indispensable para la digestión, la absorción y el transporte de nutrientes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fibra
                      td.texto-left Contribuye al funcionamiento del sistema digestivo cuando se suministra en niveles adecuados.
          p.mb-5 Además de aportar todos los nutrientes necesarios, una buena ración debe reunir diversas características que garanticen un adecuado desempeño productivo y sanitario.
          .bg-carrusel
            .px-5
              .row.align-items-center.mb-5
                .col-xl-4(data-aos="fade-right")
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/t4/img4.png', alt='' style="max-width: 350px").m-auto
                .col-xl-8(data-aos="fade-left")
                  SlyderF(columnas="col-lg-6 col-xl-6")
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t4/img5.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Completa
                        p.mb-0.text-center Aporta todos los nutrientes necesarios para el mantenimiento, crecimiento y producción.
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t4/img6.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Balanceada
                        p.mb-0.text-center Contiene los nutrientes en las proporciones adecuadas según la especie y la etapa productiva.
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t4/img7.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Inocua
                        p.mb-0.text-center Está libre de contaminantes físicos, químicos y microbiológicos que puedan afectar la salud de las aves.
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t4/img8.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Digestible
                        p.mb-0.text-center Permite un adecuado aprovechamiento de los nutrientes por parte del organismo.
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t4/img9.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Palatable
                        p.mb-0.text-center Favorece el consumo voluntario del alimento.
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t4/img10.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Económica
                        p.mb-0.text-center Satisface los requerimientos nutricionales al menor costo posible sin afectar la calidad.
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t4/img11.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Uniforme
                        p.mb-0.text-center Mantiene una composición constante entre los diferentes lotes de producción.
              p.mb-5 Los conceptos de alimento y ración suelen utilizarse como sinónimos; sin embargo, presentan diferencias importantes que conviene conocer.
              .row.justify-content-center.mb-0
                .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                  .caja-4.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t4/img12.png', alt="" ).m-auto
                      h4.text-center Corresponde a un ingrediente individual
                      .caja-4_p
                        p.mb-0.text-center Es una mezcla de diferentes ingredientes.
                .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                  .caja-4.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t4/img13.png', alt="" ).m-auto
                      h4.text-center Puede aportar uno o varios nutrientes
                      .caja-4_p
                        p.mb-0.text-center Debe aportar todos los nutrientes requeridos por las aves.
                .col-xl-4.col-md-9(data-aos="fade-left")
                  .caja-4.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t4/img14.png', alt="" ).m-auto
                      h4.text-center No cubre por sí solo todos los requerimientos nutricionales
                      .caja-4_p
                        p.mb-0.text-center Cubre los requerimientos nutricionales de acuerdo con la etapa productiva.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Componentes de una ración balanceada
      p.mb-5 Una ración balanceada está conformada por diferentes tipos de ingredientes que cumplen funciones específicas dentro del organismo. La combinación adecuada de estos componentes permite cubrir los requerimientos nutricionales y favorecer un adecuado desempeño productivo.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Energéticos
                  p.mb-0 Incluyen ingredientes como maíz amarillo, sorgo, trigo, yuca y aceites vegetales. Su función principal es aportar energía para el crecimiento, la producción, la actividad muscular y la regulación térmica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Proteicos
                  p.mb-0 Comprenden harina de soya, harina de pescado, harina de carne y hueso, gluten de maíz y torta de canola. Suministran aminoácidos para el desarrollo muscular, la formación de tejidos, las plumas y la producción de huevos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Minerales
                  p.mb-0 Incluyen carbonato de calcio, fosfato bicálcico y sal común. Favorecen la formación ósea, la calidad de la cáscara del huevo y diversas funciones metabólicas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vitamínicos
                  p.mb-0 Comprenden las vitaminas A, D3, E, K, complejo B y vitamina C. Participan en numerosos procesos metabólicos y contribuyen al mantenimiento de la salud.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aditivos nutricionales
                  p.mb-0 Incluyen enzimas, probióticos, prebióticos, acidificantes, antioxidantes y secuestrantes de micotoxinas. Mejoran el aprovechamiento del alimento y favorecen la salud intestinal y el desempeño productivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Agua
                  p.mb-0 Es indispensable para la digestión, la absorción y el transporte de nutrientes, la regulación térmica y la producción de huevos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img20.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La adecuada selección y combinación de estos componentes permite formular raciones balanceadas que satisfacen los requerimientos nutricionales de las aves, favorecen su bienestar y contribuyen a mejorar la eficiencia y la rentabilidad de los sistemas de producción avícola.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Tipos de fórmulas alimenticias
      p.mb-5 Las fórmulas alimenticias se diseñan de acuerdo con la edad, la etapa productiva y el objetivo de producción de las aves. Este ajuste permite suministrar en cada fase la cantidad adecuada de energía, proteína, aminoácidos, minerales y vitaminas, favoreciendo un mejor crecimiento, producción y eficiencia alimenticia. Las principales fórmulas alimenticias utilizadas en avicultura se presentan a continuación.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img21.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Preiniciadora").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se suministra a los pollos de engorde entre los 0 y 10 días de edad. Se caracteriza por contener altos niveles de proteína, ingredientes de elevada digestibilidad y excelente calidad, favoreciendo el rápido desarrollo inicial del pollito.
            .row(titulo="Iniciadora").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se utiliza entre los 11 y 21 días de edad y está orientada a estimular el crecimiento y el desarrollo muscular acelerado.
            .row(titulo="Crecimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se suministra entre los 22 y 35 días y busca maximizar la ganancia de peso y mejorar el desarrollo corporal.
            .row(titulo="Finalizadora").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se utiliza desde los 36 días hasta el sacrificio. Su objetivo es optimizar el peso final y mejorar el rendimiento en canal.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Levante").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a la alimentación de las gallinas desde el nacimiento hasta las 8 semanas de edad, favoreciendo el desarrollo corporal.
            .row(titulo="Desarrollo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se suministra entre las 9 y las 17 semanas y prepara a las aves para el inicio de la producción.
            .row(titulo="Prepostura").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se utiliza entre las 16 y las 18 semanas para preparar el organismo antes del comienzo de la postura.
            .row(titulo="Postura I, II y III").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Son dietas formuladas para el inicio de la postura, el pico de producción y la etapa final del ciclo productivo, ajustando los nutrientes de acuerdo con las necesidades de cada fase.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img22.png", alt="" ).m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img23.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Además de su composición nutricional, las dietas pueden variar según su presentación física:
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-feather-alt
              | 
              p.mb-0 #[b Harina:] está compuesta por ingredientes finamente molidos. Su principal ventaja es el menor costo de elaboración; sin embargo, puede generar un mayor desperdicio de alimento. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-feather-alt
              | 
              p.mb-0 #[b Migaja:] se utiliza principalmente durante las primeras etapas de vida de los pollitos, ya que facilita el consumo y favorece una adecuada adaptación al alimento sólido. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-feather-alt
              | 
              p.mb-0 #[b Peletizado:] consiste en alimento comprimido en forma de pellets. Mejora el consumo y el aprovechamiento de los nutrientes, reduce el desperdicio y favorece una mejor conversión alimenticia.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-feather-alt
              | 
              p.mb-0 La selección de la fórmula y de la presentación física del alimento debe ajustarse a la edad, la especie y los objetivos productivos de las aves.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Métodos y técnicas de balanceo de dietas
      p.mb-5 El balanceo de dietas consiste en combinar materias primas en proporciones adecuadas para cubrir los requerimientos nutricionales de las aves según su edad, etapa productiva y objetivo de producción. Los principales métodos utilizados para el balanceo de dietas se presentan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Prueba y error")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Prueba y error
              p.mb-0 Consiste en seleccionar ingredientes, calcular el aporte de nutrientes y realizar ajustes sucesivos hasta cumplir los requerimientos nutricionales. Actualmente, se utiliza principalmente con fines académicos.
        .py-3.py-md-4(titulo="Cuadrado de Pearson")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cuadrado de Pearson
              p.mb-0 Permite balancear un nutriente utilizando dos ingredientes. Es uno de los métodos más sencillos para realizar formulaciones básicas.
        .py-3.py-md-4(titulo="Método algebraico")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Método algebraico
              p.mb-0 Emplea ecuaciones para balancear varios nutrientes de manera simultánea.
        .py-3.py-md-4(titulo="Programación lineal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Programación lineal
              p.mb-0 Es el método más utilizado en la industria, ya que permite formular dietas al menor costo posible, cumpliendo los requerimientos nutricionales y optimizando el uso de las materias primas disponibles.
      p.mb-0 Cada método presenta diferentes niveles de complejidad, por lo que su selección depende de los objetivos de formulación y de los recursos técnicos disponibles.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Formulación de raciones según requerimientos nutricionales
      p.mb-5 La formulación de raciones debe considerar diversos factores relacionados con las características de las aves y las condiciones del sistema de producción.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Especie
                  p.mb-0 La formulación debe ajustarse al tipo de ave. Los pollos de engorde requieren dietas orientadas al crecimiento y la ganancia de peso, mientras que las gallinas de postura necesitan nutrientes para la producción de huevos y la calidad de la cáscara.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Edad
                  p.mb-0 Los requerimientos cambian durante las diferentes etapas de vida. Las aves jóvenes demandan mayores niveles de proteína y aminoácidos, mientras que las adultas requieren más energía y, durante la postura, un mayor aporte de calcio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estado fisiológico
                  p.mb-0 La dieta debe adaptarse al momento biológico o productivo del ave, ya sea crecimiento, producción de huevos o reproducción.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Condiciones ambientales
                  p.mb-0 El clima influye en el consumo de alimento y en los requerimientos energéticos. En ambientes cálidos disminuye el consumo, por lo que se incrementa la densidad nutricional de la dieta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img31.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Los requerimientos nutricionales varían entre pollos de engorde y gallinas de postura, como se presenta a continuación.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Ejemplo de requerimientos nutricionales en aves
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nutriente
                      th.ajuste-border-tabla.texto-left Pollos de engorde (iniciación)
                      th.texto-left Gallinas de postura (producción)
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Energía metabolizable
                      td.ajuste-border-tabla.texto-left 3000 kcal/kg
                      td.texto-left 2800 kcal/kg
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Proteína cruda
                      td.ajuste-border-tabla.texto-left 22 %
                      td.texto-left 17 %
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Lisina
                      td.ajuste-border-tabla.texto-left 1,20 %
                      td.texto-left 0,85 %
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Metionina
                      td.ajuste-border-tabla.texto-left 0,50 %
                      td.texto-left —
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Calcio
                      td.ajuste-border-tabla.texto-left 1,00 %
                      td.texto-left 4,0 %
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fósforo disponible
                      td.ajuste-border-tabla.texto-left 0,50 %
                      td.texto-left 0,40 %
          p.mb-0 Estos valores constituyen una referencia para formular dietas ajustadas a las necesidades de cada sistema de producción.
          Separador
          #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.6 Aplicación del análisis bromatológico en el balanceo de dietas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 El análisis bromatológico permite conocer la composición real de las materias primas, incluyendo proteína, energía, aminoácidos, grasa, fibra, calcio, fósforo y humedad. Esta información facilita la formulación de dietas más precisas, económicas y ajustadas a los requerimientos nutricionales de las aves.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img32.jpg', alt='').m-auto
        .col-xl
          .caja-3(data-aos="fade-right")
            p.mb-0 Después de formular una dieta, es necesario evaluar su calidad mediante análisis químicos, físicos, microbiológicos y productivos, con el fin de verificar que el alimento cumple las especificaciones nutricionales y genera resultados satisfactorios en crecimiento, conversión alimenticia, producción de huevos y calidad del huevo.
            p.mb-0 Las principales aplicaciones del análisis bromatológico en el balanceo de dietas se presentan a continuación.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img33.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Determinación de la composición nutricional").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite conocer el contenido real de proteína, energía, aminoácidos, grasa, fibra, calcio, fósforo y humedad de las materias primas.
            .row(titulo="Ajuste de fórmulas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita la corrección de las dietas cuando los ingredientes presentan variaciones en su composición nutricional.
            .row(titulo="Optimización de costos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Favorece el uso eficiente de las materias primas sin afectar el desempeño productivo.
            .row(titulo="Control de calidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite verificar que el alimento balanceado cumple con las especificaciones nutricionales establecidas.
            .row(titulo="Evaluación del desempeño").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita el seguimiento de indicadores como crecimiento, conversión alimenticia, producción de huevos y calidad del huevo.
      p.mb-0 El análisis bromatológico constituye una herramienta fundamental para la formulación de dietas de precisión y el mejoramiento de la eficiencia de los sistemas de producción avícola.
      Separador
      #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.7 Eficiencia alimenticia y desempeño productivo
      p.mb-3 La eficiencia alimenticia expresa la capacidad del ave para transformar el alimento consumido en un producto útil, ya sea carne o huevos. Constituye uno de los principales indicadores de la rentabilidad de la producción avícola y permite evaluar el desempeño de los programas de alimentación.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-4(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t4/img34.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 La conversión alimenticia corresponde a la relación entre la cantidad de alimento consumido y el producto obtenido. Se calcula dividiendo el alimento consumido entre la ganancia de peso. Por ejemplo, si un lote consume #[b 1.800 kg] de alimento y produce #[b 1.000 kg] de ganancia de peso, la conversión alimenticia es #[b 1,8], lo que significa que se requieren #[b 1,8 kg] de alimento para producir #[b 1 kg] de peso vivo.
          p.mb-0 Diversos factores influyen sobre la eficiencia alimenticia y el desempeño productivo, como la calidad de la dieta, las materias primas utilizadas, el estado sanitario, el manejo y las condiciones de bienestar animal.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img35.png', alt='').m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img36.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img37.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Nutrición
                    p.mb-0.text-center Una dieta balanceada favorece el crecimiento y mejora la conversión alimenticia.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img38.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Calidad de las materias primas
                    p.mb-0.text-center Ingredientes de buena calidad incrementan el aprovechamiento de los nutrientes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img39.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Sanidad
                    p.mb-0.text-center Un adecuado estado sanitario mejora el consumo y el desempeño productivo.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img40.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Manejo
                    p.mb-0.text-center Buenas prácticas de alimentación y alojamiento favorecen la productividad.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img41.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Bienestar animal
                    p.mb-0.text-center Condiciones adecuadas reducen el estrés y mejoran la eficiencia alimenticia.
          p.mb-5 Una dieta correctamente formulada y balanceada contribuye a mejorar la conversión alimenticia, incrementar la producción, reducir la mortalidad y aumentar la rentabilidad de los sistemas de producción avícola.
          .caja-1(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t4/img42.png', alt='').m-auto
              .col-xl.caja-1_p
                h5 Aporte de proteína
                .caja-5.color-5.mb-3(data-aos="zoom-in")
                  .row.align-items-center
                    .col.p-0
                      p.mb-0.texto-right Proteína aportada =
                    .col
                      .text-center
                        p.mb-0.line--bottom (Cantidad del ingrediente × %Proteína)
                        p.mb-0 100
                h5 Ejemplo
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-feather-alt
                    | 60 kg de maíz
                  li.mb-0
                    span.fa-li
                      i.fas.fa-feather-alt
                    |  8,5 % proteína
                .caja-5.d-inline-block.color-5(data-aos="zoom-in")
                  p.mb-0 60×0.085=5.1 kg
      .caja-6(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.caja-1_p
            h5 Índice de Conversión Alimenticia (ICA)
            .caja-5.color-5.mb-3(data-aos="zoom-in")
              .row.align-items-center
                .col.p-0
                  p.mb-0.texto-right ICA =
                .col
                  .text-center
                    p.mb-0.line--bottom Alimento consumido (kg)
                    p.mb-0 Ganancia de peso (kg)
            h5 Ejemplo
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Consumo = 1,70 kg
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Ganancia = 1 kg
            .caja-5.d-inline-block.color-5.mb-3(data-aos="zoom-in")
              p.mb-0 ICA=1.70
            h5.mb-0 Mientras menor sea el ICA, mayor será la eficiencia alimenticia.
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img43.jpg', alt='').m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img44.png', alt='').m-auto
        .col-xl
          .caja-2.color-6.ajuste-4(data-aos="zoom-in")
            h5 Conversión porcentual de ingredientes
            p Cuando se formula una mezcla.
            .caja-5.d-inline-block.mb-3(data-aos="zoom-in")
              p.mb-0 ∑Ingredientes = 100%
            h5 Ejemplo
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Maíz = 58 %
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Soya = 32 %
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Aceite = 4 %
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Carbonato = 4 %
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Premezcla = 2 %
            h5.mb-0 Total = 100 %

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
