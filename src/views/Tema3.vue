<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Análisis bromatológico
      p.mb-5 A continuación, se presenta la importancia del análisis bromatológico en la nutrición avícola, destacando su papel en la evaluación de la calidad de las materias primas y en la formulación de dietas que favorecen el rendimiento productivo, la salud y el bienestar de las aves.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-7(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t3/img1.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Análisis bromatológico de materias primas"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img2.png" ).m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto de análisis bromatológico
      p La bromatología es la disciplina científica encargada de estudiar los alimentos desde el punto de vista de su composición, valor nutritivo, calidad, conservación, inocuidad y aprovechamiento biológico. El análisis bromatológico comprende el conjunto de procedimientos físicos, químicos, microbiológicos e instrumentales utilizados para determinar la composición nutricional de una materia prima o alimento balanceado. 
      p.mb-5 Su finalidad es establecer con exactitud la concentración de nutrientes presentes en los ingredientes utilizados para la alimentación animal y verificar si cumplen con los requerimientos nutricionales de una especie determinada. La evolución de las técnicas de análisis ha permitido ampliar la información que puede obtenerse sobre la calidad de las materias primas.
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img3.png', alt="" ).m-auto
              h4.text-center Análisis tradicionales
              .caja-4_p
                p.mb-0.text-center Inicialmente, se limitaban a determinar el contenido de humedad, proteína, grasa, fibra y cenizas.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img4.png', alt="" ).m-auto
              h4.text-center Análisis actuales
              .caja-4_p
                p.mb-0.text-center Gracias al desarrollo tecnológico, permiten evaluar aminoácidos digestibles, ácidos grasos, minerales específicos, vitaminas, energía metabolizable, micotoxinas, contaminantes químicos, residuos de pesticidas, metales pesados y calidad microbiológica.
      p.mb-5 Para garantizar resultados confiables, todo análisis bromatológico debe cumplir una serie de principios fundamentales.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img6.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Representatividad
                    p.mb-0.text-center La muestra analizada debe representar fielmente el lote de materia prima del cual fue tomada.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img7.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Precisión
                    p.mb-0.text-center Los resultados deben reflejar con exactitud la composición del alimento.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img8.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Repetibilidad
                    p.mb-0.text-center El análisis debe producir resultados consistentes cuando se realiza nuevamente bajo las mismas condiciones.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img9.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Confiabilidad
                    p.mb-0.text-center Los métodos utilizados deben estar validados científicamente y garantizar resultados seguros y reproducibles.
          p.mb-0 El cumplimiento de estos principios garantiza que la información obtenida sea confiable y útil para la formulación de alimentos balanceados, el control de calidad de las materias primas y la toma de decisiones en los sistemas de producción avícola.
          Separador
          #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.2 Importancia en la alimentación animal
      p.mb-5 La formulación de alimentos balanceados requiere información nutricional precisa y actualizada. La calidad de una dieta nunca será superior a la calidad de las materias primas que la componen. Por esta razón, el análisis bromatológico constituye la base científica sobre la cual se construyen los programas modernos de alimentación animal. A continuación, se presentan los principales aportes del análisis bromatológico en la alimentación animal.
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Formulación de dietas
                  p.mb-0 Permite conocer la proteína real disponible, el contenido energético, la digestibilidad, el perfil de aminoácidos, la concentración de minerales y la calidad de las grasas. Con esta información se formulan dietas más precisas y eficientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Productividad avícola
                  p.mb-0 En pollos de engorde favorece una mayor ganancia diaria de peso, mejor desarrollo muscular, mejor conversión alimenticia y menor tiempo de engorde. En gallinas de postura, contribuye a incrementar el porcentaje de postura, mejorar la calidad de la cáscara, aumentar la persistencia productiva y mantener la calidad interna del huevo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Salud intestinal
                  p.mb-0 Favorece la integridad de la mucosa intestinal, el desarrollo de una microbiota benéfica, una mejor absorción de nutrientes y una menor incidencia de enteritis.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bioseguridad
                  p.mb-0 Permite identificar riesgos asociados con micotoxinas, hongos, Salmonella, Clostridium, coliformes y contaminación química, fortaleciendo los programas de bioseguridad de las granjas avícolas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Protección ambiental
                  p.mb-0 La formulación precisa reduce la excreción de nitrógeno, fósforo y minerales al medio ambiente, contribuyendo a disminuir la contaminación de suelos y fuentes hídricas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Parámetros bromatológicos básicos
      p Los parámetros bromatológicos permiten conocer la composición nutricional y la calidad de las materias primas y de los alimentos balanceados. Su evaluación facilita la formulación de dietas ajustadas a los requerimientos de las aves y el control de la calidad de los ingredientes utilizados en la producción avícola.
      p.mb-5 Los principales parámetros bromatológicos se presentan a continuación.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img15.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Humedad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a la cantidad de agua presente en el alimento. Un contenido superior al #[b 14 %] en el maíz favorece la fermentación, el crecimiento de hongos, la producción de micotoxinas y el deterioro nutricional durante el almacenamiento.
            .row(titulo="Materia seca").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representa la fracción libre de agua e incluye la totalidad de los nutrientes del alimento. Constituye la base para comparar correctamente diferentes materias primas.
            .row(titulo="Proteína cruda").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Indica la cantidad total de proteína estimada en el alimento. Participa en el crecimiento muscular, la formación de tejidos, la producción de plumas, la síntesis de enzimas y la formación del huevo. Puede determinarse mediante los métodos Kjeldahl, Dumas o espectroscopia NIRS.
            .row(titulo="Aminoácidos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La calidad de la proteína depende del contenido de aminoácidos esenciales, entre ellos lisina, metionina, cistina, treonina, triptófano, valina y arginina. La deficiencia de cualquiera de ellos limita el aprovechamiento de la proteína.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Extracto etéreo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representa el contenido de grasas y aceites del alimento. Aporta energía, favorece la absorción de las vitaminas A, D, E y K, reduce la generación de polvo y mejora la palatabilidad.
            .row(titulo="Fibra cruda").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Influye en la salud digestiva y en el tránsito intestinal. Un exceso disminuye el crecimiento, el aprovechamiento energético y el consumo de alimento.
            .row(titulo="Cenizas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representan el contenido total de minerales presentes en el alimento, incluidos macrominerales y microminerales indispensables para la producción y la salud de las aves.
            .row(titulo="Energía metabolizable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a la energía realmente disponible para el ave después de las pérdidas digestivas y metabólicas. Es uno de los parámetros más importantes para la formulación de dietas.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img16.png", alt="" ).m-auto
      p.mb-0 La evaluación conjunta de estos parámetros permite establecer la calidad nutricional de las materias primas y seleccionar los ingredientes más adecuados para la elaboración de alimentos balanceados.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Control de calidad de materias primas
      p.mb-5 El control bromatológico permite evaluar no solo el contenido nutricional de las materias primas, sino también su estado de conservación y su aptitud para la alimentación de las aves.
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Física")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Física
              p.mb-0 Incluye la evaluación del color, olor, textura, tamaño de partícula o granulometría, presencia de impurezas y daños ocasionados por insectos. Permite identificar materias primas deterioradas o de baja calidad.
        .py-3.py-md-4(titulo="Microbiológica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Microbiológica
              p.mb-0 Determina la presencia de microorganismos como Salmonella spp., Escherichia coli, Clostridium spp., hongos y levaduras, los cuales pueden afectar la salud de las aves y la inocuidad de los alimentos.
        .py-3.py-md-4(titulo="Toxicológica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Toxicológica
              p.mb-0 Detecta sustancias tóxicas como aflatoxinas, fumonisinas, ocratoxinas, zearalenona y algunos metales pesados que pueden afectar el crecimiento, la producción y la supervivencia de las aves.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Muestreo bromatológico
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img20.png', alt='').m-auto
          .col-xl.caja-1_p
            p El muestreo bromatológico consiste en obtener una muestra representativa del alimento o de la materia prima que será analizada en el laboratorio. La confiabilidad de los resultados depende directamente de la calidad del muestreo. Para obtener una muestra representativa, se recomienda:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Seleccionar varios puntos del lote. 
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Tomar diferentes submuestras. 
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Homogeneizar adecuadamente el material recolectado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Reducir la muestra mediante el método de cuarteo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Empacar el material en recipientes limpios. 
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                |  Rotular correctamente cada muestra. 
      p.mb-0 Entre los errores más frecuentes se encuentran la toma de muestras únicamente en la superficie, el uso de recipientes contaminados, la falta de homogeneización, la exposición al calor o la humedad y el rotulado incorrecto.
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Micotoxinas y análisis bromatológico
      p.mb-5 Las micotoxinas son sustancias tóxicas producidas por hongos que representan uno de los principales riesgos para la alimentación avícola. Su detección forma parte de los programas de control de calidad de las materias primas.
      .bg-1
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Principales micotoxinas y sus efectos en las aves
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Micotoxina
                      th.texto-left Importancia
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aflatoxinas
                      td.texto-left Disminuyen el consumo de alimento, afectan el crecimiento, deprimen el sistema inmunológico y aumentan la mortalidad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ocratoxinas
                      td.texto-left Pueden producir alteraciones renales y disminuir el desempeño productivo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fumonisinas
                      td.texto-left Afectan el metabolismo y reducen la eficiencia alimenticia.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Toxina T-2
                      td.texto-left Produce lesiones en la cavidad oral, disminuye el consumo de alimento y afecta la respuesta inmunológica.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Zearalenona
                      td.texto-left Puede ocasionar alteraciones reproductivas y afectar el desempeño de las aves.
          Separador
          #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.7 Aplicación del análisis bromatológico en la formulación de alimentos
          p.mb-5 El análisis bromatológico permite conocer el valor nutritivo real de los ingredientes y constituye la base para la formulación de alimentos balanceados ajustados a las necesidades de las aves.
          .bg-carrusel
            .px-5
              .row.align-items-center.mb-5
                .col-xl-4(data-aos="fade-right")
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 350px").m-auto
                .col-xl-8(data-aos="fade-left")
                  SlyderF(columnas="col-lg-6 col-xl-6")
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t3/img22.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Ajuste de niveles de inclusión
                        p.mb-0.text-center Permite modificar la participación de los ingredientes según su composición nutricional real.
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t3/img23.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Corrección de deficiencias nutricionales
                        p.mb-0.text-center Facilita el ajuste de las dietas para cubrir los requerimientos de las aves.
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t3/img24.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Optimización de costos
                        p.mb-0.text-center Favorece el uso eficiente de las materias primas y mejora la rentabilidad de la producción.
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t3/img25.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Mejoramiento de la productividad
                        p.mb-0.text-center Contribuye a incrementar el desempeño productivo y la eficiencia alimenticia.
                    .tarjeta.color-acento-botones
                      .row.justify-content-center.mb-3
                        .col-12
                          img(src='@/assets/curso/temas/t3/img26.png' ).m-auto
                      .box___card_sinbordes_p
                        h4.mb-3.estilo-text Nutrición de precisión
                        p.mb-0.text-center Proporciona información confiable para formular dietas balanceadas y garantizar la calidad de los alimentos.
              p.mb-0 El análisis bromatológico constituye una herramienta esencial para la nutrición de precisión, el aseguramiento de la calidad de las materias primas y el mejoramiento de la productividad, el bienestar animal y la sostenibilidad de los sistemas de producción avícola.

</template>

<script>
import audio1 from '@/assets/curso/podcast/podcast.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
