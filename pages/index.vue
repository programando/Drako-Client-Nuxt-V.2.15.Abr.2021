<template>
<div class="flex items-center justify-center h-screen overflow-hidden" style="background: #edf2f7;">

    <header class="w-full h-full bg-center bg-cover opacity-100" 
            style="background-image: url('/images/login/background-login.jpg');">
            <h1 class="mt-12 font-bold tracking-wide text-center text-white text-8xl">DRAKO - AUTOPARTES</h1>
      
        <div class="px-40 py-2 content">
            <div class="mx-8 mt-20 body">
                <div class="items-center justify-between md:flex">
                   
                    <div class="w-full mr-auto md:w-1/2" style="text-shadow: 0 20px 50px hsla(0,0%,0%,8);">                     
                            <FraseDiaria></FraseDiaria>
                    </div>

                    <div class="w-full mt-6 md:max-w-md">
                        <div class="px-4 py-4 mb-6 bg-white rounded-lg shadow-md card ">
                            <form >
                                <div class="flex items-center justify-center">
                                    <h2 class="text-2xl font-bold tracking-wide">
                                        Bienvenid@
                                    </h2> 
                                </div>
                                <h5 class="mb-2 text-sm font-semibold text-center text-gray-800">
                                   Registre sus credenciales para ingreso al sistema
                                </h5>
 
                           
                                <InputBasic type= "email"
                                        placeholder="Dirección electrónica (Email)"
                                        v-model="form.email" 
                                        :errors="errors.email"
                                        @keyup="clearErrors"
                                > </InputBasic>

                                <InputBasic type= "password"
                                        class="mt-6"
                                        placeholder="Password o contraseña"
                                        v-model="form.password" 
                                        @keyup="clearErrors"
                                > </InputBasic>


                                <div class="flex items-center justify-between mt-3">
                                  
                                    <nuxt-link to="/" class="text-gray-600" disabled="disabled"> 
                                            Olvidé mi contraseña ? 
                                    </nuxt-link>

                                    <ButtonLoading 
                                        @click.prevent="login" 
                                        size="small" 
                                        ref="ButtonLoading" 
                                        variant="success"
                                        variant-type="normal">  Ingresar al sistema 
                                    </ButtonLoading>

                                </div>
                                
                            </form>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </header>
</div>
</template>

<script>
  import User            from "@/models/User";
  import InputBasic      from "@/components/Input-Basic";
  import ButtonLoading   from "@/components/ButtonLoading";

  export default {
   
  name: 'IndexPage',

  data: () => ({
      form: {
        email: "jhonjamesmg@hotmail.com",
        password: "123456"
      },
      errors: [ ],
      buttonIsDisabled: false
  }),
  components : {  InputBasic, ButtonLoading } ,

   

   mounted() { 
       
   },

   methods: {
      login() {
          this.$router.replace({ path: '/clientes' });       
      },

      clearErrors() {
          this.errors = [];
          this.buttonIsDisabled = false;
      },

  }// Methods

}
</script>
