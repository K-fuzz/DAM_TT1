	       document.addEventListener('deviceready', manuf);
               document.addEventListener('online', donline);
               document.addEventListener('offline', doffline);
               
               

                function Ok() {
        		var nombre = document.getElementById('Nombre').value
        		alert("Bienvenido, "+ nombre+".")};

        	function cancelar(){
        		alert("Gracias por utilizar esta app, hasta pronto!")
        	};

        	var i = 1
        	function manuf(){
                        var devicem = device.model
                        document.getElementById("dmodel").innerHTML = devicem;
                        
                        var devicep = device.platform
                        document.getElementById("dplat").innerHTML = devicep;

                        document.addEventListener('volumedownbutton', volume);
                        document.addEventListener('volumeupbutton', volume);
                        document.addEventListener('pause', pausa);
                        document.addEventListener('resume', resume);
                        i
                        document.getElementById("inicio").innerHTML = "Inicio = "+ i++;
                   

                         };

                
                function donline(){

                        document.getElementById("dnet").innerHTML = "online";
                        var divr = document.getElementById("dnet")
                        divr.style.background = "#00FC0F"
                        divr.style.width = "53px"
                                        };
                function doffline(){

                        document.getElementById("dnet").innerHTML = "offline";
                        var divr = document.getElementById("dnet")
                        divr.style.background = "red"
                        divr.style.width = "53px"
                                        };

                
                function volume() {
                navigator.notification.beep(3);
                alert("no es posible modifical el volumen")

                };
                
         var timer = setInterval(a,2000)               
       function onSuccess(acceleration) {

            document.getElementById("x").innerHTML= 'X: ' + acceleration.x;
            document.getElementById("y").innerHTML= 'Y: ' + acceleration.y;
            document.getElementById("z").innerHTML= 'Z: ' + acceleration.z;

            if (acceleration.z <= 0){navigator.vibrate(2000) && clearInterval(timer)};
            
        }

        function onError() {
            alert('onError!');
        }

       

       function a(){
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
         };

         var p = 1
         var r = 1
        function pausa(){
            p
            document.getElementById("pausa").innerHTML="Pausas = " + p++;

        }

         function resume(){
            r
            document.getElementById("resume").innerHTML="Reaudado = " + r++;

        }

        function reset(){
        	p = 0
        	r = 0
        	i = 0
        	document.getElementById("pausa").innerHTML = "Pausas = " + p;
        	document.getElementById("resume").innerHTML = "Reaudado = " + r;
        	document.getElementById("inicio").innerHTML = "Inicio = " + i++;
                   
        }














                       