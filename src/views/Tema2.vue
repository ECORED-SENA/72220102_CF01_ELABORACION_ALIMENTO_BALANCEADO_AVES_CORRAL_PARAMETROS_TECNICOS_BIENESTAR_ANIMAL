<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Requerimientos nutricionales y plan alimentario
      p.mb-3 La nutrición avícola es una de las áreas más importantes de la producción animal moderna, debido a que influye directamente en el crecimiento, la eficiencia alimenticia, la producción de huevos, la calidad de la carne, la salud, la resistencia a enfermedades, el bienestar animal y la rentabilidad de la explotación. En los sistemas avícolas tecnificados, la alimentación representa entre el #[b 65 % y el 75 %] de los costos totales de producción, lo que la convierte en el factor de mayor impacto económico dentro de la empresa avícola.
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .caja-2.color-2(data-aos="fade-right").mb-3
            p.mb-0  Las aves poseen un metabolismo altamente eficiente y acelerado, por lo que requieren un suministro constante y balanceado de nutrientes para expresar su máximo potencial genético. Una dieta insuficiente o desequilibrada puede generar pérdidas productivas, incremento de enfermedades, problemas reproductivos, disminución de la calidad del huevo y de la canal, aumento de la mortalidad y deterioro del bienestar animal.
          p.mb-0 El conocimiento de los requerimientos nutricionales permite formular alimentos balanceados ajustados a cada etapa fisiológica y productiva. De esta manera, cada ave recibe la cantidad adecuada de energía, proteínas, aminoácidos, vitaminas, minerales y agua para satisfacer sus necesidades de mantenimiento, crecimiento, producción y reproducción.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.jpg', alt='').m-auto
      p.mb-0 La nutrición moderna no solo busca maximizar la productividad, sino también garantizar condiciones adecuadas de bienestar animal, sostenibilidad ambiental y eficiencia económica, aspectos fundamentales para la avicultura actual.
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Concepto de nutrición y alimentación animal
      p.mb-5 Los conceptos de nutrición y alimentación están estrechamente relacionados, pero hacen referencia a procesos diferentes. Comprender esta diferencia es fundamental para diseñar programas alimentarios que favorezcan el aprovechamiento de los nutrientes y el desempeño productivo de las aves.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img12.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Nutrición animal
      p.mb-5 La nutrición animal es la ciencia que estudia los nutrientes contenidos en los alimentos, sus funciones en el organismo y los procesos biológicos mediante los cuales son utilizados para mantener la vida y desarrollar actividades productivas. La nutrición comprende una serie de procesos fisiológicos que permiten transformar los alimentos en nutrientes aprovechables por el organismo.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 4.
                span Proceso de digestión, absorción, metabolismo, transporte y excreción de nutrientes en aves
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t2/img2.png', alt='Diagrama del proceso digestivo de una gallina que integra las etapas de ingestión, digestión, absorción, transporte, metabolismo y excreción, mediante ilustraciones de los órganos digestivos y flechas que representan el recorrido del alimento y el aprovechamiento de los nutrientes por el organismo. ').m-auto
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
                .row(titulo="Ingestión").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Es el acto mediante el cual el ave consume el alimento y el agua. La cantidad ingerida depende de factores como la edad, la temperatura ambiental, la calidad del alimento, el estado sanitario y la disponibilidad de agua.
                .row(titulo="Digestión").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Proceso mecánico y químico mediante el cual los alimentos son transformados en compuestos más simples que puedan ser absorbidos por el organismo. En las aves, este proceso involucra el pico y la cavidad oral, el buche, el proventrículo, la molleja y el intestino delgado.
                .row(titulo="Absorción").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Los nutrientes liberados durante la digestión atraviesan la pared intestinal y pasan al torrente sanguíneo para ser transportados hacia los tejidos corporales.
                .row(titulo="Transporte").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Los nutrientes absorbidos son distribuidos por el sistema circulatorio hacia músculos, huesos, órganos y demás tejidos del organismo.
                .row(titulo="Metabolismo").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Conjunto de reacciones bioquímicas mediante las cuales los nutrientes son utilizados para producir energía, favorecer el crecimiento muscular, formar tejidos, producir huevos y mantener las funciones corporales.
                .row(titulo="Excreción").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 El organismo elimina las sustancias de desecho resultantes del metabolismo mediante las heces y la orina.
      p.mb-5 El desarrollo adecuado de estos procesos permite que las aves aprovechen eficientemente los nutrientes contenidos en la dieta y alcancen un óptimo desempeño productivo. Los principales objetivos de la nutrición avícola se presentan a continuación.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img4.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Mantener la salud
                    p.mb-0.text-center Favorece el adecuado funcionamiento del organismo y reduce el riesgo de enfermedades.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img5.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Favorecer el crecimiento corporal
                    p.mb-0.text-center Promueve el desarrollo de músculos, órganos y tejidos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img6.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Mejorar la conversión alimenticia
                    p.mb-0.text-center Incrementa el aprovechamiento de los nutrientes consumidos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img7.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Maximizar la producción de huevos
                    p.mb-0.text-center Contribuye a mantener altos niveles de postura y calidad del huevo.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img8.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Optimizar la calidad de la carne
                    p.mb-0.text-center Favorece el desarrollo muscular y mejora las características del producto final.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img9.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Fortalecer la respuesta inmunológica
                    p.mb-0.text-center Incrementa la resistencia frente a enfermedades.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img10.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Disminuir la mortalidad
                    p.mb-0.text-center Reduce las pérdidas ocasionadas por deficiencias nutricionales y enfermedades.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img11.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Garantizar el bienestar animal
                    p.mb-0.text-center Contribuye a mantener un adecuado estado fisiológico y productivo de las aves.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img12.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alimentación animal
          p.mb-5 La alimentación animal corresponde al conjunto de actividades prácticas mediante las cuales se suministran alimentos para satisfacer los requerimientos nutricionales de las aves. Estas actividades abarcan desde la selección de los ingredientes hasta la distribución del alimento en las instalaciones de producción.
      .bg-4
        .px-5
          .row.justify-content-center
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Selección de ingredientes
                    p.mb-0 Consiste en elegir materias primas que aporten nutrientes de calidad, como maíz, sorgo, trigo, harina de soya, harina de pescado, aceites vegetales y carbonato de calcio.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img12.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Formulación de dietas
                    p.mb-0 Proceso técnico mediante el cual se combinan los ingredientes para satisfacer los requerimientos nutricionales de las aves.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Elaboración del alimento
                    p.mb-0 Puede realizarse mediante mezclas artesanales, concentrados comerciales, alimentos peletizados o alimentos extruidos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img14.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Almacenamiento
                    p.mb-0 Comprende las acciones necesarias para conservar los ingredientes, evitando la humedad, la contaminación, el ataque de plagas y la formación de micotoxinas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Distribución del alimento
                    p.mb-0 Incluye el manejo adecuado de los comederos, la frecuencia de alimentación y el espacio disponible para cada ave.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img16.png', alt='' style="width: 300px").m-auto
      p.mb-5 Aunque la nutrición y la alimentación están estrechamente relacionadas, cada una cumple un papel diferente dentro de los sistemas de producción avícola.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Diferencias entre nutrición y alimentación animal
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nutrición
                      th.texto-left Alimentación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ciencia biológica.
                      td.texto-left Práctica de manejo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Estudia los nutrientes.
                      td.texto-left Suministra los alimentos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ocurre dentro del organismo.
                      td.texto-left Ocurre fuera del organismo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Analiza el metabolismo.
                      td.texto-left Analiza el consumo de alimento.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evalúa la utilización de los nutrientes.
                      td.texto-left Evalúa las estrategias de suministro.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Busca la eficiencia fisiológica.
                      td.texto-left Busca la eficiencia operativa.
          p.mb-5 La alimentación adecuada constituye uno de los principios fundamentales del bienestar animal, ya que garantiza el suministro continuo de agua y nutrientes indispensables para el mantenimiento de la salud y el desarrollo productivo de las aves.
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Disponibilidad de recursos")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t2/img17.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Disponibilidad de recursos
                  p.mb-0 Las aves deben disponer permanentemente de agua potable, alimentos nutritivos, acceso suficiente a los comederos y espacio adecuado para alimentarse.
            .py-3.py-md-4(titulo="Consecuencias de una nutrición deficiente")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t2/img18.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Consecuencias de una nutrición deficiente
                  p.mb-0 Puede ocasionar retraso en el crecimiento, disminución de la postura, estrés fisiológico, debilidad ósea, problemas locomotores, canibalismo, picaje de plumas, inmunosupresión y elevada mortalidad.
            .py-3.py-md-4(titulo="Importancia para la producción")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t2/img19.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Importancia para la producción
                  p.mb-0 Las prácticas nutricionales hacen parte integral de los programas de bienestar animal implementados en las granjas avícolas modernas, ya que favorecen la salud, el desempeño productivo y la sostenibilidad de la explotación.
          p.mb-0 La nutrición y la alimentación constituyen procesos complementarios que permiten satisfacer los requerimientos nutricionales de las aves, mejorar el aprovechamiento de los nutrientes y favorecer una producción avícola eficiente, rentable y sostenible.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Concepto de plan alimentario
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 Un plan alimentario es una herramienta técnica que organiza y programa el suministro de los nutrientes requeridos por las aves durante cada fase de producción. Consiste en diseñar una estrategia nutricional que permita alcanzar objetivos productivos específicos mediante el suministro oportuno de dietas balanceadas.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img20.jpg', alt='').m-auto
        .col-xl
          .caja-3(data-aos="fade-right")
            p.mb-0 Su elaboración requiere considerar las características fisiológicas de las aves, los objetivos de producción y las condiciones del sistema de explotación, con el propósito de garantizar un adecuado desempeño productivo y el aprovechamiento eficiente de los nutrientes. La implementación de un plan alimentario aporta múltiples beneficios para la producción avícola, los cuales se presentan a continuación.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img22.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Cobertura de los requerimientos nutricionales
                    p.mb-0.text-center Garantiza el suministro de energía, proteínas, aminoácidos, vitaminas, minerales y agua de acuerdo con la etapa productiva de las aves.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img23.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Eficiencia productiva
                    p.mb-0.text-center Favorece el crecimiento, la producción de huevos y el aprovechamiento de los nutrientes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img24.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Reducción de costos
                    p.mb-0.text-center Optimiza el uso de los ingredientes y mejora la rentabilidad de la explotación.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img25.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Salud intestinal
                    p.mb-0.text-center Contribuye al adecuado funcionamiento del sistema digestivo y disminuye el riesgo de trastornos digestivos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img26.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Conversión alimenticia
                    p.mb-0.text-center Mejora la utilización del alimento consumido y favorece la eficiencia biológica.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img27.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Uniformidad del lote
                    p.mb-0.text-center Promueve un desarrollo homogéneo de las aves durante las diferentes etapas de producción.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img28.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Bienestar animal
                    p.mb-0.text-center Garantiza una alimentación suficiente y balanceada, favoreciendo la salud y el desempeño productivo.
          p.mb-5 Antes de formular una dieta, es necesario realizar un diagnóstico inicial que permita conocer las características del lote y establecer las necesidades nutricionales de las aves:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-8(data-aos="fade-right")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img29.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Número de aves
                    p.mb-0.text-center Determina la cantidad de alimento que deberá suministrarse durante cada etapa productiva.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img30.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Edad
                    p.mb-0.text-center Permite establecer la fase alimenticia correspondiente.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img31.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Peso corporal
                    p.mb-0.text-center Facilita la evaluación del desarrollo y el ajuste de la dieta.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img32.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Línea genética
                    p.mb-0.text-center Define los requerimientos nutricionales de acuerdo con el potencial productivo de las aves.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img33.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Estado sanitario
                    p.mb-0.text-center Permite identificar condiciones que puedan afectar el consumo o el aprovechamiento de los nutrientes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img34.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Sistema de producción
                    p.mb-0.text-center Considera si la explotación es intensiva, semiintensiva o de traspatio, así como las condiciones de manejo e infraestructura.
            .col-xl-4(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img35.png', alt='' style="max-width: 350px").m-auto
          p.mb-5 Con base en este diagnóstico, se establecen los componentes que orientan la planificación y el seguimiento del programa de alimentación:
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Definición de objetivos productivos")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t2/img36.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Definición de objetivos productivos
                  p.mb-0 Consiste en establecer las metas zootécnicas de acuerdo con el tipo de explotación. En pollos de engorde se consideran la ganancia diaria de peso, la conversión alimenticia, la uniformidad del lote, el peso al sacrificio y el rendimiento en canal. En gallinas de postura se incluyen el porcentaje de postura, la masa y el peso del huevo, la calidad de la cáscara, la persistencia productiva y la eficiencia alimenticia.
            .py-3.py-md-4(titulo="Programación de fases alimenticias")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t2/img37.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Programación de fases alimenticias
                  p.mb-0 Organiza la alimentación según la edad, el desarrollo fisiológico y el propósito productivo. En pollos de engorde comprende las fases preiniciador, iniciador, crecimiento y finalizador. En gallinas de postura incluye iniciación, levante, desarrollo, prepostura y producción. La transición entre fases debe realizarse de manera gradual y de acuerdo con el desempeño del lote.
            .py-3.py-md-4(titulo="Seguimiento productivo y nutricional")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t2/img38.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Seguimiento productivo y nutricional
                  p.mb-0 Incluye el monitoreo permanente del consumo de alimento y agua, peso corporal, ganancia de peso, uniformidad del lote, conversión alimenticia, porcentaje de postura, peso y masa del huevo, mortalidad, morbilidad, calidad de la cáscara, color de la yema y estado general de las aves.
          p.mb-5 Además del seguimiento productivo, la formulación del plan alimentario debe fundamentarse en criterios técnicos que permitan responder a las condiciones propias de cada sistema de producción:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Principios para elaborar el plan alimentario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende la formulación de dietas que satisfagan los requerimientos nutricionales según la especie, la línea genética, la edad y la etapa productiva. También considera el uso de ingredientes disponibles de buena calidad, la optimización de costos, la inocuidad de los alimentos y el bienestar animal, además de la adaptación a las condiciones ambientales y al sistema de alojamiento.
            .row(titulo="Relación entre nutrición y productividad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Una alimentación balanceada favorece el crecimiento, la producción de huevos, la salud, la respuesta inmunológica y la rentabilidad de la explotación. En pollos de engorde mejora la conversión alimenticia y el peso de mercado; en gallinas de postura mantiene el pico de producción, la calidad del huevo, la resistencia ósea y la persistencia de la postura.
            .row(titulo="Ajuste del plan alimentario según el sistema de producción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El programa de alimentación debe adaptarse al tipo de explotación, al número de aves, a la disponibilidad de insumos, a la infraestructura, al nivel tecnológico, a la genética, al clima, a la presentación del alimento y a las condiciones sanitarias de la granja.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img39.png", alt="" ).m-auto
      p.mb-0 Estos componentes permiten diseñar planes alimentarios técnicamente fundamentados, ajustados a las condiciones de cada explotación y orientados a mejorar la eficiencia productiva, el bienestar animal y la rentabilidad de los sistemas de producción avícola.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Requerimientos nutricionales según especie y etapa productiva
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img40.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los requerimientos nutricionales representan la cantidad mínima de nutrientes que las aves necesitan para mantener sus funciones fisiológicas normales y alcanzar niveles óptimos de producción. Estos requerimientos varían continuamente durante la vida del ave y dependen de factores biológicos, fisiológicos, ambientales y productivos.
      p.mb-5 Conocer estos factores permite formular dietas ajustadas a las necesidades de cada especie y etapa de producción, favoreciendo el aprovechamiento de los nutrientes, el bienestar animal y la eficiencia de los sistemas de producción avícola. A continuación, se presentan los principales factores que influyen en los requerimientos nutricionales de las aves:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Especie
                  p.mb-0 Las necesidades nutricionales cambian según el tipo de ave y su finalidad productiva. Este factor determina la cantidad de energía, proteínas, minerales y vitaminas que debe aportar la dieta. Los pollos de engorde requieren dietas orientadas al crecimiento y la ganancia de peso, mientras que las gallinas de postura necesitan nutrientes para la producción de huevos y la calidad de la cáscara.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img41.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Edad
                  p.mb-0 Los requerimientos nutricionales varían durante las diferentes etapas de crecimiento y producción. Las aves jóvenes demandan dietas con mayor concentración de nutrientes, mientras que en las aves adultas estos se ajustan según las necesidades de mantenimiento o producción.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img42.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sexo
                  p.mb-0 Machos y hembras presentan diferencias en crecimiento y metabolismo que modifican los requerimientos de energía y proteína. Los machos suelen crecer más rápido, mientras que las hembras requieren nutrientes adicionales para la formación del huevo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img43.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Genética
                  p.mb-0 Las líneas genéticas modernas poseen un mayor potencial productivo, por lo que requieren dietas formuladas con mayor precisión y densidad nutricional.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img44.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ambiente
                  p.mb-0 Factores como la temperatura, la humedad y la ventilación influyen sobre el consumo de alimento. El calor reduce el consumo, mientras que el frío incrementa las necesidades energéticas del ave.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img45.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estado sanitario
                  p.mb-0 La salud de las aves influye en el aprovechamiento de los nutrientes. Las enfermedades disminuyen el consumo de alimento y aumentan los requerimientos nutricionales necesarios para favorecer la recuperación y mantener el desempeño productivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img46.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img47.jpg', alt='').m-auto
        .col-xl
          .caja-2.ajuste-2(data-aos="fade-left").mb-3
            p.mb-0  Los requerimientos nutricionales también cambian de acuerdo con la especie y la etapa productiva. Por esta razón, los programas de alimentación deben ajustarse a las necesidades específicas de cada sistema de producción.
          .caja-3.ajuste-2(data-aos="fade-left")
            p.mb-0 Los pollos de engorde modernos pueden alcanzar pesos superiores a #[b 2,5 kg] en menos de #[b 42 días], gracias a programas nutricionales altamente especializados que ajustan el contenido de proteína y energía durante cada fase de crecimiento.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-7
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Requerimientos nutricionales en pollos de engorde
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Fase
                      th.ajuste-border-tabla.texto-left Edad
                      th.ajuste-border-tabla.texto-left Proteína (%)
                      th.texto-left Energía (kcal/kg)
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Preiniciador
                      td.ajuste-border-tabla.texto-left 0-10 días
                      td.ajuste-border-tabla.texto-left 22-23
                      td.texto-left 2950-3000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Iniciador
                      td.ajuste-border-tabla.texto-left 11-21 días
                      td.ajuste-border-tabla.texto-left 21-22
                      td.texto-left 3000-3100
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Crecimiento
                      td.ajuste-border-tabla.texto-left 22-35 días
                      td.ajuste-border-tabla.texto-left 19-20
                      td.texto-left 3150-3200
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Finalizador
                      td.ajuste-border-tabla.texto-left 36-42 días
                      td.ajuste-border-tabla.texto-left 18-19
                      td.texto-left 3200-3300
          p.mb-5 La disminución gradual del contenido de proteína y el incremento de la densidad energética responden a los cambios fisiológicos que experimentan las aves durante su desarrollo, favoreciendo una adecuada conversión alimenticia y un mayor rendimiento productivo.
          .caja-1.color-3(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img48.jpg', alt='').m-auto
              .col-xl.caja-1_p
                h5 Densidad energética
                .caja-5.mb-3(data-aos="zoom-in")
                  .row.d-flex.align-items-center
                    .col.p-0
                      p.mb-0.texto-right Densidad energética =
                    .col
                      .text-center
                        p.mb-0.line--bottom kcal
                        p.mb-0 kg de alimento 
                h5 Ejemplo
                p.mb-0 3200 kcal/kg
                p.mb-0 Una dieta con mayor densidad energética permite cubrir los requerimientos cuando disminuye el consumo por altas temperaturas.
      p.mb-5 En las gallinas de postura, la alimentación debe garantizar tanto la producción de huevos como el mantenimiento de la salud ósea. Por ello, los requerimientos nutricionales varían de acuerdo con la etapa fisiológica de las aves.
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-7
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Requerimientos nutricionales en gallinas de postura
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Etapa
                      th.ajuste-border-tabla.texto-left Proteína (%)
                      th.texto-left Energía (kcal/kg)
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Levante
                      td.ajuste-border-tabla.texto-left 18-20
                      td.texto-left 2800
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Desarrollo
                      td.ajuste-border-tabla.texto-left 15-17
                      td.texto-left 2800-2900
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Producción
                      td.ajuste-border-tabla.texto-left 16-18
                      td.texto-left 2800-2900
          p.mb-5 Durante la etapa de producción, además del aporte de proteína y energía, es indispensable garantizar un adecuado suministro de minerales para favorecer la formación de la cáscara y mantener la salud ósea.
          .row.justify-content-center.mb-5
            .col-xl-7
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Requerimientos de calcio y fósforo durante la producción
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nutriente
                      th.texto-left Requerimiento
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Calcio
                      td.texto-left 3,8-4,5 %
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fósforo disponible
                      td.texto-left 0,35-0,45 %
          p.mb-0 El ajuste de los requerimientos nutricionales según la especie y la etapa productiva permite optimizar el aprovechamiento de los nutrientes, mejorar el desempeño zootécnico, favorecer el bienestar animal y aumentar la eficiencia de los sistemas de producción avícola.
          Separador
          #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.4 Energía, proteína, vitaminas, minerales y agua
      p.mb-5 Los nutrientes constituyen los componentes esenciales de cualquier alimento balanceado, ya que aportan la energía y los elementos necesarios para el crecimiento, el mantenimiento, la producción y la reproducción de las aves. Cada nutriente cumple funciones específicas dentro del organismo, por lo que una alimentación balanceada debe garantizar su adecuado suministro para favorecer el bienestar animal y el desempeño productivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img12.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Energía
      p.mb-5 La energía es el nutriente que impulsa todos los procesos fisiológicos y productivos de las aves. Su aporte adecuado permite mantener las funciones vitales y satisfacer las necesidades derivadas del crecimiento y la producción.
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img49.png', alt="" ).m-auto
              h4.text-center Funciones
              .caja-4_p
                p.mb-0.text-center Favorece el crecimiento, la producción de carne, la producción de huevos, la actividad muscular, la regulación térmica y el metabolismo celular.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img50.png', alt="" ).m-auto
              h4.text-center Fuentes
              .caja-4_p
                p.mb-0.text-center Maíz amarillo, sorgo, trigo, yuca, aceites vegetales y grasas animales.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img51.png', alt="" ).m-auto
              h4.text-center Consecuencias de la deficiencia
              .caja-4_p
                p.mb-0.text-center Disminución del crecimiento, menor producción de huevos, pérdida de peso e incremento de la conversión alimenticia.
      p.mb-5 El suministro adecuado de energía es indispensable para mantener el rendimiento productivo y el aprovechamiento eficiente de los demás nutrientes.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img12.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Proteína
      p.mb-5 La proteína constituye el principal material estructural del organismo y participa en la formación y reparación de los tejidos. Además, interviene en numerosos procesos metabólicos relacionados con el crecimiento y la producción.
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img52.png', alt="" ).m-auto
              h4.text-center Funciones
              .caja-4_p
                p.mb-0.text-center Formación muscular, desarrollo de órganos, producción de plumas, producción de huevos, formación de enzimas y producción de hormonas.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img53.png', alt="" ).m-auto
              h4.text-center Fuentes
              .caja-4_p
                p.mb-0.text-center Harina de soya, harina de pescado, torta de canola y harina de carne y hueso.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img54.png', alt="" ).m-auto
              h4.text-center Aminoácidos esenciales
              .caja-4_p
                p.mb-0.text-center Lisina, metionina, metionina + cistina, treonina, triptófano, valina, isoleucina y arginina. La metionina suele ser el primer aminoácido limitante en aves.
      p.mb-5 El adecuado aporte de proteínas y aminoácidos esenciales favorece el crecimiento, el desarrollo corporal y la eficiencia productiva.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img12.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Vitaminas
      p.mb-5 Las vitaminas actúan como reguladores metabólicos y participan en múltiples procesos fisiológicos indispensables para el desarrollo y la salud de las aves.
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img55.png', alt='').m-auto
          .col-xl.caja-1_p
            p.mb-0 Antes de revisar las principales deficiencias vitamínicas, es importante conocer las funciones que desempeñan en el organismo. Las vitaminas y los minerales desempeñan funciones esenciales en el organismo de las aves, ya que contribuyen al desarrollo y fortalecimiento del sistema óseo, favorecen una adecuada respuesta inmunológica, participan en los procesos reproductivos, intervienen en la coagulación sanguínea y regulan el metabolismo energético necesario para el crecimiento, el mantenimiento de las funciones vitales y la producción.
      p.mb-5 Las deficiencias vitamínicas pueden ocasionar diferentes alteraciones fisiológicas, como se presenta a continuación.
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Deficiencias asociadas a algunas vitaminas en aves
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Vitamina
                      th.texto-left Deficiencia
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold A
                      td.texto-left Problemas visuales.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold D3
                      td.texto-left Raquitismo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold E
                      td.texto-left Trastornos musculares.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold K
                      td.texto-left Hemorragias.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold B2
                      td.texto-left Parálisis de dedos.
          p.mb-5 El suministro adecuado de vitaminas contribuye al correcto funcionamiento del metabolismo y al mantenimiento de la salud de las aves.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img12.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Minerales
          p.mb-5 Los minerales participan en procesos estructurales y metabólicos indispensables para el crecimiento, la producción y el mantenimiento del equilibrio fisiológico.
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 7.
            span Minerales esenciales y sus funciones en las aves
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Mineral
                  th.texto-left Funciones e importancia
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Calcio
                  td.texto-left Es fundamental para la formación de huesos, la calidad de la cáscara y la contracción muscular.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fósforo
                  td.texto-left Participa en la formación ósea y en la producción de energía.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Sodio y cloro
                  td.texto-left Mantienen el equilibrio osmótico y ácido-base del organismo.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Microminerales
                  td.texto-left El zinc participa en el crecimiento y la salud de la piel; el manganeso interviene en la reproducción y la formación de huesos; el selenio actúa como antioxidante; y el hierro participa en el transporte de oxígeno.
      p.mb-5 El aporte adecuado de minerales favorece el desarrollo corporal, la producción y el funcionamiento normal de los diferentes sistemas del organismo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img12.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Agua
      p.mb-5 El agua es el nutriente de mayor consumo diario y uno de los más importantes para la supervivencia y la productividad de las aves. Representa aproximadamente entre el #[b 65 % y el 75 %] del peso corporal y más del #[b 60 %] del contenido del huevo.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img56.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 El agua es un nutriente indispensable para las aves, ya que participa en el transporte de nutrientes, la regulación de la temperatura corporal, la digestión y absorción de los nutrientes, la eliminación de los desechos metabólicos y la producción de huevos. Debido a estas funciones, un consumo adecuado de agua es esencial para mantener la salud y el rendimiento productivo. Por el contrario, una disminución en su consumo reduce de forma inmediata la ingesta de alimento, afecta el crecimiento y la producción, y compromete el bienestar de las aves.
          p.mb-0 La energía, las proteínas, las vitaminas, los minerales y el agua constituyen los nutrientes esenciales que deben incorporarse en cantidades adecuadas dentro de los alimentos balanceados, con el fin de satisfacer los requerimientos nutricionales de las aves y favorecer una producción avícola eficiente, saludable y sostenible.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img57.png', alt='').m-auto
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Cálculo del consumo de proteína
      p.mb-5 La cantidad de proteína que consume un ave depende del consumo diario de alimento y del porcentaje de proteína presente en la dieta.
      .caja-1.color-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img58.jpg', alt='').m-auto
          .col-xl.caja-1_p
            h5 Fórmula
            .caja-5.mb-3(data-aos="zoom-in")
              .row.align-items-center
                .col.p-0
                  p.mb-0.texto-right Proteína consumida =
                .col
                  .text-center
                    p.mb-0.line--bottom %Proteína
                    p.mb-0 100
                .col.p-0
                  p.mb-0.texto-left x  Consumo diario de alimento (g)
            h5 Ejemplo
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | Consumo = 110 g
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Proteína = 18 %
            .caja-5.d-inline-block.mb-3(data-aos="zoom-in")
              p.mb-0 0.18×110=19.8 g
            p.mb-0 El ave consume #[b 19,8 g de proteína por día].
      .caja-6(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.caja-1_p
            h5 Cálculo del consumo de energía
            .caja-5.mb-3(data-aos="zoom-in")
              .row.align-items-center
                .col.p-0
                  p.mb-0.texto-right EM consumida =
                .col
                  .text-center
                    p.mb-0.line--bottom EM (kcal/kg) × Consumo (g) 
                    p.mb-0 1000
            h5 Ejemplo
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  3200 kcal/kg
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  110 g de consumo
            .caja-5.d-inline-block(data-aos="zoom-in")
              .row.align-items-center
                .col
                  .text-center
                    p.mb-0.line--bottom 3200×110 = 352 kcal/día
                    p.mb-0 1000
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img59.jpg', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
