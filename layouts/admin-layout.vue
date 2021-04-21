  <template>
    <div class="pagina">
          <header class="header">
              <HeaderBrand></HeaderBrand>
              <HeaderRightMenu></HeaderRightMenu>
          </header>

          <main class="container-principal">
               
                  <SideBarLeft></SideBarLeft>
                  <div class="contenido">
                      <nuxt/>
                  </div>
               
          </main>
    </div>
</template>

<script>
import HeaderBrand      from '@/components/ErpAdminHeaderBrand';
import HeaderRightMenu  from '@/components/ErpAdminHeaderRightMenu';
import SideBarLeft      from '@/components/ErpAdminSideBarLeft';
export default {
   
  data() {
    return {
     
    }
  },
  components: { HeaderBrand, HeaderRightMenu, SideBarLeft }, 
  methods: {
      
    }
  }

</script>
