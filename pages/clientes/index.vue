<template>
  <div>
    <h1 class="pb-1 text-2xl text-black">Documentos electrónicos DIAN</h1>

    <table class="flex flex-row flex-no-wrap w-full my-1 overflow-hidden rounded-lg sm:bg-white sm:shadow-lg">
			<thead class="text-white">
				<tr class="flex flex-col mb-2 bg-blue-500 rounded-l-lg flex-no wrap sm:table-row sm:rounded-none sm:mb-0">
					<th class="p-3 text-left">Fecha</th>
					<th class="p-3 text-left">Factura</th>
					<th class="p-3 text-left">Cliente</th>
					<th class="p-3 text-left">Dian</th>
					<th class="p-3 text-left" width="50px">Pdf</th>
					<th class="p-3 text-left" width="50px">Xml</th>
					 
				</tr>

			</thead>
			<tbody class="flex-1 sm:flex-none">
 
        <tr v-for="(Factura, index) in Facturas" :key="Factura.id_fact_elctrnca"
          class="flex flex-col mb-1 text-xs flex-no wrap sm:table-row sm:mb-0" >		
					<td class="p-1 border border-grey-light hover:bg-gray-100">{{ Factura['fcha_dcmnto'] }} </td>
					<td class="p-1 truncate border border-grey-light hover:bg-gray-100">{{ Factura['prfjo_dcmnto'] }}-{{ Factura['nro_dcmnto']}} </td>
					<td class="p-1 truncate border border-grey-light hover:bg-gray-100">{{ Factura['name'] }} </td>
					<td class="p-1 truncate border border-grey-light hover:bg-gray-100">
                <div class="inline-flex items-center p-0 text-xs leading-none text-pink-600 bg-white rounded-full shadow">
                     <span v-if="Factura['rspnse_dian']"
                        class="inline-flex items-center justify-center h-5 px-3 text-white bg-green-600 rounded-full">Recibida</span>
                     <span v-else
                         class="inline-flex items-center justify-center h-5 px-3 text-white bg-red-600 rounded-full">Pendiente</span>
                </div>
          </td>

					<td  class="p-1 text-sm text-center border border-grey-light hover:bg-gray-100" > 
              <button v-if="Factura['rspnse_dian'] "   
                @click="downloadFiles($event, Factura, index, 'pdf')"
                class="inline-flex items-center px-2 py-1 text-sm text-red-500 rounded outline-none ">
                 <img src="/images/pdf.png" width="90%" alt="">    
              </button>
          </td>

              	<td  class="p-1 text-sm text-center border border-grey-light hover:bg-gray-100" > 
                      <button v-if="Factura['rspnse_dian'] "   
                          @click="downloadFiles($event, Factura, index, 'xml')"
                          class="inline-flex items-center px-2 py-1 text-sm text-black rounded outline-none ">
                            <img src="/images/xml.png" width="90%" alt="">
                      </button>
            </td>
          
	
				</tr>
        <tr>
 
        </tr>
 

			</tbody>
		</table>

  </div>
</template>


<script>

import Facturas        from "@/models/Facturas";
import { Messages }    from "@/mixins/Messages";


export default {
  name: 'UltimasFacturasCreadas',
  layout :'admin-layout',
    data: () => ({
      Facturas    : [],
 
    }),
  
    
     mounted() {
          this.getFacturas();
     },
      mixins: {Messages }, 

      methods:  {
              getFacturas (url  ) {
 
                    Facturas.getFacturas ( url  )
                    .then (response => {
                      this.Facturas      = response.data;
                    })
                    .catch( error => {
                        //this.errors = error.response.data.error;                         
                    })
              }, 

              downloadFiles ( e,Factura, index, filetype   ) {
                let idFactura = Factura['id_fact_elctrnca'];
                let Url       = process.env.URL_API+`invoices/download/${filetype}/${idFactura}`;
                window.open(Url, '_blank');
              },
 
          nextPage () {
                console.log(this.nextPageLink);
                this.getFacturas ( this.nextPageLink );
          },
        },
       
    }  

 
</script>



<style scoped>
  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }
  
  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 5px solid rgba(0, 0, 0, .1);
  }
 
</style>
