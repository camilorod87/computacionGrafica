window.onload = function()
{
//alert('Camilo Alberto Rodriguez Avila')

    codigo();
}

function codigo()
{
    
    function movimiento(path, obj, vel)
    {
        
        var pathLength = path.getTotalLength();
        var tween = new TWEEN.Tween({ length: 0  })
        .to({ length: pathLength }, vel)
        .onUpdate(function()
        {
            var point = path.getPointAtLength(this.length);
            obj.style.webkitTransform = 'translate('+ point.x + 'px,'+ point.y +'px)';
        }).repeat(999999999).start();
        animate = function()
        {
            requestAnimationFrame(animate)
            TWEEN.update()
        }
        animate();
    }
    var tamReal = false;
    var crealunas = function(objeto, luna)
    {
        var tamanoluna = luna.tamano;
        
        if(tamReal)
        {
            
            tamanoluna = Math.round(elSaturno.tamano * (luna.porcentaje / 100));
            
        }
        objeto.style.width = tamanoluna + "px";
        objeto.style.height = tamanoluna + "px";
        objeto.style.backgroundImage = "url('lunas/"+luna.imagen+"')";
        objeto.style.backgroundSize = tamanoluna + "px " + tamanoluna + "px";
        var margen = (Math.round(tamanoluna / 2)) * -1;
        objeto.style.marginTop = margen + "px";
        objeto.style.marginLeft = margen + "px";
        objeto.style.borderRadius = "50%";
        objeto.style.position = "absolute";
      
    }
    var lunas = [
               {nombre: "Dione", 
                 imagen: "dione.png",
                 porcentaje: 0.2,
                 tamano: 50 
                },
                {nombre: "Japeto", 
                 imagen: "japeto.png",
                 porcentaje: 0.4,
                 tamano: 15 
                },
                {nombre: "Rea", 
                 imagen: "rea.png",
                 porcentaje: 0.6,
                 tamano: 20 
                },
                {nombre: "Titan", 
                 imagen: "titan.png",
                 porcentaje: 0.9,
                 tamano: 60 
                }];
    var objSaturno = nom_div('saturno_svg');
    var elSaturno = {
        tamano: objSaturno.height.baseVal.value, 
        x : objSaturno.x.baseVal.value, 
        y : objSaturno.y.baseVal.value
    };
    var objeto = "";
    var ruta = "";
    var velInicia = 8000;
    for(var i = 1; i <= lunas.length; i++)
    {
        objeto = nom_div("objeto_" + i);
        ruta = nom_div("ruta_" + i);
        crealunas(objeto, lunas[i - 1]);
        movimiento(ruta, objeto, velInicia);
        velInicia += 4000;
    }
       function nom_div(div)
    {
        return document.getElementById(div);
    }
}