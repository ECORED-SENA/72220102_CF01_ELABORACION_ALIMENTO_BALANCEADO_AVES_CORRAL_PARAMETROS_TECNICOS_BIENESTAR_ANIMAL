<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Bienestar animal y buenas prácticas sanitarias en aves
      p.mb-3 El bienestar animal en la avicultura moderna no debe entenderse únicamente como un concepto ético, sino como un factor productivo que influye directamente sobre la eficiencia alimenticia, la respuesta inmunológica, la uniformidad del lote y la rentabilidad del sistema. En los sistemas intensivos de producción de pollos de engorde y gallinas de postura, pequeñas variaciones en el manejo, el ambiente o la sanidad pueden generar efectos significativos sobre la conversión alimenticia, la ganancia de peso y la calidad del producto final.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.color-2(data-aos="fade-right").mb-3
            p.mb-0  En este contexto, el bienestar animal se integra con la nutrición de precisión, la bioseguridad y la gestión sanitaria, formando un sistema interdependiente en el que el adecuado manejo de cada componente contribuye al desempeño productivo de las aves.
          p.mb-0 Asimismo, las exigencias normativas vigentes, especialmente las establecidas en las Resoluciones ICA 3651 de 2014 y 3652 de 2014, promueven la implementación de sistemas de manejo que garanticen condiciones adecuadas de confort, sanidad, alimentación y control epidemiológico en las explotaciones avícolas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img1.png', alt='').m-auto
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Concepto de bienestar animal
      p.mb-5 El bienestar animal puede entenderse como un estado dinámico que varía de acuerdo con la interacción entre el ave y su entorno de producción. En avicultura, el bienestar no depende únicamente de la ausencia de enfermedades, sino también de la capacidad del animal para mantener su equilibrio fisiológico, responder adecuadamente a las condiciones ambientales y expresar comportamientos propios de la especie dentro de las limitaciones del sistema de producción. Los principales aspectos relacionados con el bienestar animal se presentan a continuación.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Capacidad de adaptación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Capacidad de adaptación
              p.mb-0 Comprende la capacidad del ave para mantener la homeostasis fisiológica, adaptarse al ambiente térmico, responder adecuadamente al manejo humano, conservar el equilibrio inmunológico y expresar comportamientos propios de la especie dentro del sistema de producción.
        .py-3.py-md-4(titulo="Dimensión fisiológica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Dimensión fisiológica
              p.mb-0 Incluye procesos como la regulación de la temperatura corporal, el balance hídrico y electrolítico, la integridad intestinal, la función hepática y renal y la respuesta inmunológica. Las situaciones de estrés generan alteraciones fisiológicas que disminuyen la eficiencia alimenticia y afectan el crecimiento y la productividad.
        .py-3.py-md-4(titulo="Dimensión productiva")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Dimensión productiva
              p.mb-0 El bienestar se refleja en indicadores como la conversión alimenticia, la ganancia diaria de peso, la persistencia de la postura, la uniformidad del lote y la calidad de la canal y del huevo. Un mayor bienestar favorece una mejor eficiencia biológica y reduce el costo por unidad producida.
      p.mb-0 El bienestar animal constituye un componente esencial de los sistemas modernos de producción avícola, ya que contribuye a mejorar la salud, el desempeño productivo y la sostenibilidad de la explotación.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Principios y libertades del bienestar animal
      p.mb-5 Las Cinco Libertades constituyen uno de los principales referentes para evaluar las condiciones de bienestar animal en los sistemas de producción. Su aplicación favorece la salud, el comportamiento y el desempeño productivo de las aves.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Libertad de hambre y sed
                  p.mb-0 Garantiza el acceso permanente a agua y alimento de calidad. El agua debe presentar adecuada calidad microbiológica, temperatura entre #[b 20 y 25 °C], flujo suficiente y una adecuada relación agua-alimento. Su disminución afecta el consumo, el crecimiento y la producción de huevos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Libertad de incomodidad térmica
                  p.mb-0 Busca mantener a las aves en condiciones adecuadas de temperatura y confort. Los pollos son sensibles al estrés térmico; la zona de confort oscila entre #[b 18 y 24 °C] en la fase final y entre #[b 30 y 34 °C] durante los primeros días de vida. El exceso de calor disminuye el consumo de alimento, empeora la conversión alimenticia y aumenta la mortalidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Libertad de dolor, lesiones y enfermedad
                  p.mb-0 Comprende la prevención de enfermedades y la reducción del sufrimiento mediante programas de vacunación, medicina preventiva, monitoreo sanitario y necropsias diagnósticas. El control sanitario debe orientarse hacia la prevención y la vigilancia permanente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Libertad para expresar el comportamiento natural
                  p.mb-0 Favorece la manifestación de comportamientos propios de la especie mediante densidades adecuadas, ambientes enriquecidos, programas de iluminación y disponibilidad suficiente de comederos y bebederos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Libertad de miedo y estrés
                  p.mb-0 Busca minimizar las situaciones que generan temor o estrés. Un manejo inadecuado, la captura brusca, el transporte deficiente y los ruidos constantes afectan el bienestar y reducen la eficiencia productiva.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img9.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La aplicación de estos principios contribuye al bienestar de las aves, mejora la productividad y fortalece el cumplimiento de las buenas prácticas sanitarias en los sistemas de producción avícola.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Comportamiento animal
      p.mb-5 El comportamiento de las aves constituye un indicador temprano del estado sanitario, nutricional y ambiental del lote. En muchos casos, las alteraciones del comportamiento aparecen antes de que se manifiesten signos clínicos evidentes, por lo que su evaluación permite detectar oportunamente problemas relacionados con la alimentación, el manejo o la salud. A continuación, se presentan algunos de los principales aspectos que relacionan el comportamiento con el bienestar de las aves.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Indicadores de alerta")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Indicadores de alerta
              p.mb-0 La disminución del consumo de alimento, el aumento del consumo de agua, el agrupamiento anormal, la dispersión excesiva y los cambios en la vocalización pueden indicar estrés, enfermedad, incomodidad térmica o desequilibrios nutricionales.
        .py-3.py-md-4(titulo="Relación entre comportamiento y nutrición")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Relación entre comportamiento y nutrición
              p.mb-0 La deficiencia de sodio puede provocar picaje; una dieta con bajo contenido de proteína favorece el canibalismo; un aporte insuficiente de energía puede ocasionar apatía; y la deficiencia de calcio puede producir huesos frágiles y problemas locomotores.
        .py-3.py-md-4(titulo="Influencia del ambiente")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Influencia del ambiente
              p.mb-0 Niveles elevados de amoníaco causan irritación ocular y respiratoria; el exceso de humedad favorece la pododermatitis; y la presencia de polvo incrementa el estrés y los problemas respiratorios.
      p.mb-0 El seguimiento del comportamiento permite identificar oportunamente alteraciones que afectan la salud, el bienestar y la productividad de las aves.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Indicadores de bienestar
      p.mb-5 El bienestar animal en la avicultura moderna se evalúa mediante indicadores que permiten valorar la condición física, sanitaria y productiva de las aves, facilitando la identificación de oportunidades de mejora en los sistemas de producción.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img13.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Indicadores zootécnicos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen la conversión alimenticia (FCR), la ganancia diaria de peso (GDP), el índice de eficiencia productiva (IEP) y la uniformidad del lote, los cuales reflejan el desempeño general de las aves.
            .row(titulo="Indicadores fisiológicos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden parámetros como el hematocrito, el cortisol sérico, la temperatura cloacal y algunos indicadores de inmunidad, utilizados para identificar situaciones de estrés y alteraciones metabólicas.
            .row(titulo="Indicadores sanitarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen la mortalidad semanal, la morbilidad, las lesiones podales y la incidencia de ascitis, permitiendo evaluar el estado sanitario del lote.
            .row(titulo="Evaluación en planta de sacrificio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Considera lesiones en pechuga, hematomas, fracturas y calidad de la canal, con el fin de identificar problemas asociados a la crianza, captura, transporte y manejo previo al sacrificio.
      p.mb-0 La evaluación periódica de estos indicadores permite implementar acciones de mejora orientadas a fortalecer el bienestar animal y la productividad.
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Buenas prácticas sanitarias y bioseguridad
      p.mb-5 La bioseguridad constituye un sistema integral de prevención orientado a reducir el ingreso, la diseminación y el impacto de agentes que puedan afectar la salud de las aves y la productividad de la granja.
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Bioseguridad externa")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Bioseguridad externa
              p.mb-0 Busca impedir el ingreso de agentes infecciosos mediante el control de ingreso de personas, la desinfección de vehículos, la delimitación del perímetro y el control de aves silvestres.
        .py-3.py-md-4(titulo="Bioseguridad interna")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Bioseguridad interna
              p.mb-0 Reduce la propagación de enfermedades dentro de la explotación mediante sistemas todo dentro–todo fuera, limpieza y desinfección entre lotes, manejo adecuado de la cama y control del flujo de personal.
        .py-3.py-md-4(titulo="Bioseguridad alimentaria")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Bioseguridad alimentaria
              p.mb-0 Protege la calidad e inocuidad de los alimentos y de las materias primas mediante el control de micotoxinas, almacenamiento en condiciones secas, control de roedores y rotación de inventarios bajo el sistema FIFO.
        .py-3.py-md-4(titulo="Bioseguridad sanitaria")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Bioseguridad sanitaria
              p.mb-0 Comprende la prevención, vigilancia y diagnóstico de enfermedades mediante programas de vacunación, monitoreo epidemiológico, diagnóstico de laboratorio y necropsias sistemáticas.
      Separador
      #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.6 Buenas prácticas pecuarias
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img18.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Las Buenas Prácticas Pecuarias (BPP) constituyen un sistema de gestión orientado a garantizar la sanidad, la inocuidad, la trazabilidad y el bienestar animal en la producción avícola.
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-feather-alt
              | 
              p.mb-0 #[b Trazabilidad:] permite realizar el seguimiento del origen de las aves, los lotes de alimento, los tratamientos aplicados y los eventos sanitarios ocurridos durante todo el proceso productivo.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-feather-alt
              | 
              p.mb-0 #[b Control documental:] consiste en el registro organizado de la información relacionada con el consumo de alimento y agua, la mortalidad, los planes de vacunación, las actividades de limpieza y desinfección, así como otras labores técnicas necesarias para el seguimiento y control de la producción avícola.
      Separador
      #t_5_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.7 Evaluación del bienestar
      .caja-1(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img19.png', alt='').m-auto
          .col-xl.caja-1_p
            p La evaluación del bienestar animal permite valorar de manera objetiva las condiciones en las que se encuentran las aves dentro del sistema productivo, considerando tanto el estado del animal como el ambiente y las prácticas de manejo.
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  #[b Método animal–ambiente–manejo:] evalúa de manera integral el estado de las aves, las condiciones del ambiente y las prácticas de manejo implementadas en la granja para determinar el nivel de bienestar animal.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  #[b Herramientas de evaluación:] incluyen auditorías internas, listas de verificación del ICA, evaluaciones etológicas e indicadores productivos que permiten verificar el cumplimiento de los programas de bienestar animal e identificar oportunidades de mejora.
      Separador
      #t_5_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.8 Normatividad
      p.mb-5 La normatividad avícola establece los lineamientos técnicos y legales relacionados con la bioseguridad, el bienestar animal, el manejo sanitario y las condiciones de producción, contribuyendo al desarrollo de sistemas productivos responsables y sostenibles.
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img20.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Resolución ICA 3651 de 2014").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece disposiciones relacionadas con la bioseguridad, el control sanitario, el manejo del alimento y del agua y los registros productivos en las explotaciones avícolas.
            .row(titulo="Resolución ICA 3652 de 2014").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define lineamientos para el manejo de gallinas en producción, incluyendo condiciones de alojamiento, bienestar animal y control sanitario.
            .row(titulo="Ley 1774 de 2016").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reconoce a los animales como seres sintientes y fortalece su protección jurídica, estableciendo sanciones frente al maltrato animal e incorporando el enfoque de bienestar animal.
      Separador
      #t_5_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.9 Acciones de mejora
      p.mb-5 La mejora continua en avicultura busca optimizar permanentemente las condiciones de producción mediante ajustes en el ambiente, la nutrición, la sanidad y el manejo, favoreciendo el bienestar animal y la eficiencia del sistema productivo.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img21.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img22.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Optimización del ambiente
                    p.mb-0.text-center Incluye estrategias como ventilación tipo túnel, control automático de la temperatura y manejo adecuado de la humedad de la cama para mejorar el confort de las aves.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img23.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Optimización nutricional
                    p.mb-0.text-center Comprende la formulación de dietas por fases, el uso de aminoácidos sintéticos y el ajuste de las raciones con base en análisis bromatológicos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img24.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Optimización sanitaria
                    p.mb-0.text-center Incluye programas de vacunación ajustados a las condiciones regionales, fortalecimiento de la bioseguridad y monitoreo de micotoxinas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img25.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Optimización del manejo
                    p.mb-0.text-center Considera la capacitación continua del personal, la implementación de protocolos para captura y carga y la reducción del estrés durante la manipulación de las aves.
          p.mb-0 Estas acciones contribuyen a fortalecer el bienestar animal, mejorar la productividad y garantizar sistemas de producción avícola más eficientes, sostenibles y acordes con las exigencias sanitarias y normativas.

</template>

<script>
export default {
  name: 'Tema5',
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
