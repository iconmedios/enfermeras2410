import { defineConfig, presetUno, transformerDirectives  } from 'unocss'

export default defineConfig({
    presets:[
        presetUno(),
       
       ],
       theme:{
        colors:{
          'brand':{
            100: '#B4DEE4',
            200: '#5EC2C7',
            300: '#0AB2B9',
            400: '#058389',
            500: '#036D71',
            600: '#014346',
         
        },
            'main':{
                100: '#5E7A35',
                200: '#4A6A1B',
                300: '#335502',
                400: '#263E01',
                500: '#203501',
                600: '#1E3101',
             
            },
            'soft' :{
                10: '#F8FAF5',
                20: '#EBEEE6',
                30: '#D7DECC',
                40: '#D7DECC',
                50: '#D7DECC',
                60: '#869B67',
            }
        }
    },
    shortcuts:{
        "container"      : "mx-auto w-90% lg:w-80%",
        "centermin"      : "mx-auto w-90% lg:w-60%",
        "ic"             : "items-center",
        "icc"            : "items-center justify-center",
        "icb"            : "items-center justify-between",
        "all300"         : "transition-all ease-in-out duration-300",
        "all600"         : "transition-all ease-in-out duration-600",
    },
    
    transformers: [
        transformerDirectives(),
      ],  
      variants:[
        (matcher) => {
            if (matcher.startsWith('visible:')) {
              return {
                matcher: matcher.slice('visible:'.length),
                selector: (s) => `.visible ${s}`,
              }
            }
          }
      ]
})