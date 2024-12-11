<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/1.png' alt='')    
      .col-lg-8.my-lg-0.my-3
        .row.justify-content-center.align-items-center.mb-4
          .col.pt-lg-0.pt-md-4
            p.mb-0 El siguiente diagrama proporciona una visión general sintetizada de los principales temas abordados en este componente: Construyendo la red: implementación de cableado estructurado. Este mapa está diseñado para ayudar al lector a sintetizar la información entre los diversos elementos que conforman el proceso de construcción de una red, sus materiales y mantenimiento.
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/2.png' alt='')

        .row.justify-content-center.align-items-center.bg1.p-4.brad
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/3.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 En el origen del diagrama se encuentran los conceptos principales de red y cableado estructurado, de los cuales se despliegan cuatro áreas fundamentales:  materiales, subsistemas, mantenimientos y data center fundamentos, importación de datos, técnicas de transformación, herramientas y mejores prácticas. Cada una de estas áreas se desglosa en subtemas clave, reflejando la estructura y el contenido del componente, desde los conceptos básicos hasta las aplicaciones prácticas y tendencias actuales.
        
    p.mb-5 El diagrama identifica y explica los componentes clave del cableado estructurado y los #[i data centers], como los equipos de testeo y certificación, el cableado horizontal y vertical, las áreas de trabajo y cuartos técnicos, junto los sistemas de soporte en los #[i data centers]. Esto permite a los aprendices entender la importancia y el papel de cada componente en la infraestructura de red.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img.img-a.img-t(src="@/assets/curso/temas/sintesis.svg", alt="La Figura 3 se denomina «Síntesis temática del componente», en ella se mencionan los principales temas tratados sobre la implementación del cableado estructurado- sus herramientas, sistemas, mantenimiento y fundamentos; junto a los subtemas que lo complementan.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis    

</template>

<script>
export default {
  name: 'Sintesis',
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
