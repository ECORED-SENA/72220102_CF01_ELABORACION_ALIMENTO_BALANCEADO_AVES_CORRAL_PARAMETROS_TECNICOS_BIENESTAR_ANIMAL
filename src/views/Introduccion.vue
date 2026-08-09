<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-3 La formulación de alimento balanceado constituye una de las actividades más importantes dentro de la producción avícola, ya que de ella depende el suministro adecuado de los nutrientes necesarios para el crecimiento, el mantenimiento, la reproducción y el bienestar de las aves. Una alimentación correctamente formulada favorece la eficiencia productiva, mejora la conversión alimenticia y contribuye a obtener productos de mayor calidad, al tiempo que optimiza el uso de los recursos disponibles. 
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 Para elaborar raciones balanceadas es indispensable comprender la fisiología digestiva de las aves, conocer sus requerimientos nutricionales en cada etapa de desarrollo y seleccionar materias primas que aporten energía, proteínas, aminoácidos, vitaminas, minerales y agua en las cantidades apropiadas. Asimismo, resulta fundamental considerar aspectos relacionados con la calidad de los ingredientes, la inocuidad de los alimentos, las buenas prácticas de fabricación y el cumplimiento de la normativa sobre bienestar animal. 
          p.mb-0 En este componente formativo se abordan los principios técnicos que orientan la formulación de alimentos balanceados para aves de corral, integrando conocimientos sobre digestión, nutrición, planificación alimentaria, ingredientes, procesos de elaboración y control de calidad. Estos contenidos proporcionan las bases necesarias para diseñar programas de alimentación que favorezcan la productividad, la sostenibilidad de los sistemas avícolas y el bienestar de los animales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
