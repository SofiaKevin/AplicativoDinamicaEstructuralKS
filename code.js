const formulario = document.getElementById('formulario');

//para almacenar los input que se van ingresando
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
    n: /^([2-5][0-9]{0}|5)$/,
    amort: /^[1-9]$|^[1-9][0-9]$|^(100)$/,
    Wesp: /^[0-9]+([.])?([0-9]+)?$/,
    E: /^[0-9]+([.])?([0-9]+)?$/,
    Hp: /^[0-9]+([.])?([0-9]+)?$/,
    Dm: /^[0-9]+([.])?([0-9]+)?$/,
    base_c: /^[0-9]+([.])?([0-9]+)?$/,
    altura_c: /^[0-9]+([.])?([0-9]+)?$/,
    base_v: /^[0-9]+([.])?([0-9]+)?$/,
    altura_v: /^[0-9]+([.])?([0-9]+)?$/
}

// campor para poner los mismo valores, si un campor es valido o no

const campos = {
    n: false,    
    amort: false,
    Wesp: false,
    E: false,
    Hp: false,
    Dm: false,
    base_c: false,
    altura_c: false,
    base_v: false,
    altura_v: false,
}

// event listener para que haga comprobocacion al enviar form y aparezca que falta rellenar campos

const validarFormulario = (e) => {
    switch (e.target.name){
        case "n": // en caso de que el nombre del input se n neciesot que ejecute este codigo
            validarCampo(expresiones.n, e.target, 'n');
        break;

        case "amort": // en caso de que el amort del input se usuario neciesot que ejecute este codigo
            validarCampo(expresiones.amort, e.target, 'amort');
        break;

        case "Wesp": // en caso de que el nombre del input se usuario neciesot que ejecute este codigo
            validarCampo(expresiones.Wesp, e.target, 'Wesp');
        break;

        case "E": // en caso de que el nombre del input se usuario neciesot que ejecute este codigo
            validarCampo(expresiones.E, e.target, 'E');
        break;

        case "Hp": // en caso de que el nombre del input se usuario neciesot que ejecute este codigo
            validarCampo(expresiones.Hp, e.target, 'Hp');
        break;

        case "Dm": // en caso de que el nombre del input se usuario neciesot que ejecute este codigo
            validarCampo(expresiones.Dm, e.target, 'Dm');
        break;

        case "base_c": // en caso de que el nombre del input se usuario neciesot que ejecute este codigo
            validarCampo(expresiones.base_c, e.target, 'base_c');
        break;

        case "altura_c": // en caso de que el nombre del input se usuario neciesot que ejecute este codigo
            validarCampo(expresiones.altura_c, e.target, 'altura_c');
        break;

        case "base_v": // en caso de que el nombre del input se usuario neciesot que ejecute este codigo
            validarCampo(expresiones.base_v, e.target, 'base_v');
        break;

        case "altura_v": // en caso de que el nombre del input se usuario neciesot que ejecute este codigo
            validarCampo(expresiones.altura_v, e.target, 'altura_v');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');

        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

        campos[campo] = true;

    }else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');

        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');

        campos[campo] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});


// cuando le de clic necesito que ejecute una funci??n de tipo flecha, esta funci??n no va a mandar a ninguna pagina externa, solo lo va a validar y que apareza un msj: mirar si aqui puedo poner calcular()
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // para que cuando se de clic y no esten bueno, no env??e nada

    // debemos comprobar que todos los campos esten bien
    if(campos.n && campos.amort && campos.Wesp && campos.E && campos.Hp && campos.Dm && campos.base_c && campos.altura_c && campos.base_v && campos.altura_v){

        calcular();

        // formulario.reset();    

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        

        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 3000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });

        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }

});

function sumar(){
    var n = document.getElementById('n').value;
    var amort = document.getElementById('amort').value;
    var Wesp = document.getElementById('Wesp').value;
    var E = document.getElementById('E').value;
    var Hp = document.getElementById('Hp').value;
    var Dm = document.getElementById('Dm').value;
    var base_c = document.getElementById('base_c').value;
    var altura_c = document.getElementById('altura_c').value;
    var base_v = document.getElementById('base_v').value;
    var altura_v = document.getElementById('altura_v').value;

    n = parseFloat(n);
    amort = parseFloat(amort);
    Wesp = parseFloat(Wesp);
    E = parseFloat(E);
    Hp = parseFloat(Hp);
    Dm = parseFloat(Dm);
    base_c = parseFloat(base_c);
    altura_c = parseFloat(altura_c);
    base_v = parseFloat(base_v);
    altura_v = parseFloat(altura_v);
    

    total = n + Wesp + E + Hp + Dm + base_c + altura_c + base_v + altura_v + amort;

    console.log(total);
}

function refresh (){
    location.reload();
    window.scrollTo(0, 0);
}



// ahora se hace algo similar para los input pero arriba

function calcular(){

    // window.scrollTo(0, 1190);

    var n = document.getElementById('n').value;
    var amort = document.getElementById('amort').value;
    var Wesp = document.getElementById('Wesp').value;
    var E = document.getElementById('E').value;
    var Hp = document.getElementById('Hp').value;
    var Dm = document.getElementById('Dm').value;
    var base_c = document.getElementById('base_c').value;
    var altura_c = document.getElementById('altura_c').value;
    var base_v = document.getElementById('base_v').value;
    var altura_v = document.getElementById('altura_v').value;

    n = parseFloat(n);
    amort = parseFloat(amort);
    Wesp = parseFloat(Wesp);
    E = parseFloat(E);
    Hp = parseFloat(Hp);
    Dm = parseFloat(Dm);
    base_c = parseFloat(base_c);
    altura_c = parseFloat(altura_c);
    base_v = parseFloat(base_v);
    altura_v = parseFloat(altura_v);
    

var range = Array.from({length:n}, (v,i) => i+1);

function mayoramenor (a,b){ 
    return b - a;
}

range = range.sort(mayoramenor);



function cifrasvector(elemento, n){
        for (i=0; i<elemento.length; i++){
            elemento[i] = parseFloat(elemento[i].toFixed(n));
        }
        return elemento;			
}

function cifrasmatriz(elemento, n){
        for (i=0; i<elemento.length; i++){
            for (j=0; j<elemento.length; j++){
                elemento[i][j] = elemento[i][j].toFixed(n);
                elemento[i][j] = parseFloat(elemento[i][j]);
            }
        }
        return elemento;
}

// Volumen de vigas

var Vol_v = base_v * altura_v * Dm;  //m3

// Volumen de columnas

var Vol_c = base_c * altura_c * Hp; //m3

// Peso de vigas

var W_v = Wesp * Vol_v; // kN

// Peso de columnas 

var W_c = Wesp * Vol_c * 2; // kN

// Peso total de cada piso, fuerza aplicada

var W_total = W_v + W_c;  // kN

// Inercia

var I_c = new Array();

for (i=0; i<n; i++){
    I_c[i] = (base_c*Math.pow(altura_c,3))/12;	 // en m4
}

// Rigidez y masa

var k_ = new Array();
var m = new Array();

for (i=0; i<n; i++) {
    k_[i] = (12*E*(Math.pow(10, 9))*2*I_c[i])/(Math.pow(Hp, 3));	   // en N/m
    m[i] = (W_total*1000)/9.81;    //	en kg
}


// Matriz de rigidez [K]

var K = new Array();

for (i=0; i<n; i++){
    K[i] = new Array();
    for (j=0; j<n; j++){
        if (i==0 && j==0){
            K[i][j] = k_[j];
        }else if (j==i+1){
            K[i][j] = -k_[i];
        }else if (j==i-1){
            K[i][j] = -k_[j];
        }else if (i==j){
            K[i][j] = k_[i]+k_[i-1];
        }else {
            K[i][j] = 0;
        }
    }		
}

// Matriz de masas

var Masa = new Array();

for (i=0; i<n; i++){
    Masa[i] = new Array();
    for (j=0; j<n; j++){
        if (i==j){
            Masa[i][j] = m[i];
        }else{
            Masa[i][j] = 0;
        }
    }	
}

// Ecuaci??n para frecuencias naturales (w) 

//------------------Funci??n para crear matriz-----------------------//

function createMatriz(size){
    var matriz = new Array(size);
    for (i = 0; i < size ; i++){ 
    matriz[i] = new Array(size); 
    } 
    return matriz;
}

//------------------Funci??n resta de matrices-----------------------//

function resta(matriz1, matriz2){
    var resultado = new Array();
    for (i=0; i<matriz1.length; i++){
        resultado[i] = new Array();
        for (j=0; j<matriz1.length; j++){
            resultado[i][j] = matriz1[i][j] - matriz2[i][j];			
        }
    }
    return resultado;
}

//---------------Funci??n multiplicaci??n de matrices--------------------//

function multiplicar(matriz1, matriz2){
    var resultado = createMatriz(matriz1.length)
    for (i=0; i<matriz1.length; i++){
        for (j=0; j<matriz1.length; j++){
        resultado[i][j] = 0;
            for (x=0; x<matriz1.length; x++){
            resultado[i][j] = resultado[i][j] + (matriz1[i][x]*matriz2[x][j]);				
            }
        }
    }
    return resultado;
}

//---------------Funci??n multiplicaci??n de matriz x vector--------------------//	

function matrizxvector(matriz, vector){
    var x = new Array();
    for (i=0; i<matriz.length; i++){
        x[i] = 0;
        for (j=0; j<matriz.length; j++){
            x[i]= x[i] + matriz[i][j]*vector[j];
        }
    }
    return x;
}

//---------------Funci??n para inversa de una matriz-------------------//

function inversa(matriz){
    
if(matriz.length==2){
    var det = (matriz[0][0]*matriz[1][1])-(matriz[1][0]*matriz[0][1]);
    var M = createMatriz(matriz.length);
    for (i=0; i<matriz.length; i++){
        for(j=0; j<matriz.length; j++){
            if (i==j){
                if (i==0){
                    M[i][j] = matriz[i+1][j+1];
                }else{
                    M[i][j] = matriz[i-1][j-1];	
                }
            }else{
                M[i][j] = -matriz[i][j];
            }
        }
    }
    var MI = createMatriz(matriz.length);
    for (i=0; i<matriz.length; i++){
        for(j=0; j<matriz.length; j++){
            MI[i][j] = M[i][j]*(1/det);
        }
    }
    
    return MI;
}

else if(matriz.length>2){
    
    function createMatrizGauss(matriz){
    var identidad = createMatriz(matriz.length);
    var matrizGauss = createMatriz(matriz.length);
    
    for (i=0; i<matriz.length; i++){
        for (j=0; j<matriz.length; j++){
            if (i==j){
                identidad[i][j] = 1
            }else{
                identidad[i][j] = 0
            }
        }
    }
    
    for (i=0; i<matriz.length; i++){
        matrizGauss[i] = matriz[i].concat(identidad[i]);
    }
    
    return matrizGauss;
    
    }
    
    var C = createMatrizGauss(matriz);
    var piv = 1;
    var B = new Array(C.length);
    
    for (i=0; i<C.length; i++){
        B[i] = new Array(C[0].length);
    }
    
    var MI = createMatriz(matriz.length);

    for (k=-1; k<matriz.length; k++){
        if (k>-1){
            piv = C[k][k];
        }if (k<matriz.length-1){
            for (i=0; i<matriz.length; i++){
                for (j=0; j<matriz.length*2; j++){
                    if (i==k+1){
                        B[i][j] = C[i][j];
                    }else{
                        B[i][j] = (C[k+1][k+1]*C[i][j]-C[i][k+1]*C[k+1][j])/piv;
                    }
                }
            }
            
            for (i=0; i<matriz.length; i++){
                for (j=0; j<matriz.length*2; j++){
                    if (B[i][i]==0){
                        for (x=i; x<i+1; x++){
                            for (y=0; y<matriz.length*2; y++){
                                var a = B[x][y];
                                var b = B[x+1][y];
                                B[x][y] = b;
                                B[x+1][y] = a;
                            }
                        }
                    }
                    C[i][j] = B[i][j];
                }
            }
        }else if (k>=matriz.length-1){
            for(i=0; i<matriz.length; i++){
                for (j=matriz.length; j<matriz.length*2; j++){
                    MI[i][j-matriz.length] = C[i][j]/piv;
                }
            }
        }
    }
    return MI;
}
}

//--------Polinomio caracter??sctico de una matriz (vectores propios)--------//

function pcaracteristico(matriz){
    var b = new Array();
    var B = createMatriz(matriz.length);
    for (n=0; n<matriz.length; n++){
        
        if (n==0){
            B = matriz;
            var tr = 0;
            for (i=0; i<matriz.length; i++){
                for (j=0; j<matriz.length; j++){
                    if (i==j){
                        tr = tr + B[i][j];
                    }
                }
            }
            b[n] = tr;
        }if (n>0){
            var bI = new Array();
            for(i=0; i<matriz.length; i++){
                bI[i] = new Array();
                for (j=0; j<matriz.length; j++){
                    if (i==j){
                        bI[i][j] = b[n-1];
                    }else if (i != j){
                        bI[i][j] = 0;
                    }
                }
            }
            var C = resta(B, bI);
            var B = multiplicar(matriz, C);
            var tr = 0;
            for (i=0; i<matriz.length; i++){
                for (j=0; j<matriz.length; j++){
                    if (i==j){
                        tr = tr + B[i][j];
                    }
                }
            }					
            b[n] = tr*(1/(n+1));			
        }
    }
    
    var coeflambda = new Array(matriz.length+1);
    for (i=0; i<=matriz.length; i++){
        if (i==matriz.length){
            coeflambda[i] = 1;
        }else{
            coeflambda[i] = -b[matriz.length-i-1];
        }
        coeflambda[i] = coeflambda[i]*Math.pow(-1,matriz.length);
    }
    
    for (i=0; i<coeflambda.length; i++){
        coeflambda[i] = coeflambda[i]/coeflambda[coeflambda.length-1];
    }
    
    return coeflambda;
}

//-------------M??todo de Bairstow, ra??ces de polinomio------------------//

// Los coeficientes se colocan desde el t??rmino independiente al t??rmino de mayor grado.
// Este m??todo presenta un l??mite iteraciones, para n??meros muy grandes, presenta fallas.

function hallaraices(a){
    
    function divisionsintetica(poli, raiz){
    var grado = poli.length-1;
    var x = poli[grado];
    poli.splice(grado,1);
    for (i=grado-1; i>=0; i--){
        var y = poli[i];
        poli[i] = x;
        x = y + x*raiz;
    }
    return poli;
}

var r = -1;
var s = -1;
var dr = 1;
var ds = 1;
var error = 0.000000000000001;
var maxiter = 1000000000000000;

var raices = new Array();

for (k=0; k<maxiter; k=k+2){
    var n = a.length-1; //grado del polinomio
    
    if (n>2){
        
        do {
            var b = new Array(a.length);
            for (i=n; i>=0; i--){
                if (i==n){
                    b[i] = a[n];
                }else if (i==n-1){
                    b[n-1] = a[n-1] + r*b[n];
                }else{
                    b[i] = a[i] + r*b[i+1] + s*b[i+2];	
                }
            }
            
            var c = new Array(n);
            for (i=n; i>=1; i--){
                if (i==n){
                    c[i-1] = b[n];
                }else if (i==n-1){
                    c[n-1-1] = b[n-1] + r*c[n-1];
                }else{
                    c[i-1] = b[i] + r*c[i] + s*c[i+1];
                }
            }
            
            dr = (c[2]*b[0]-c[1]*b[1])/((Math.pow(c[1],2)-c[0]*c[2]));
            ds = (c[0]*b[1]-c[1]*b[0])/((Math.pow(c[1],2)-c[0]*c[2]));

            r = r + dr;
            s = s + ds;
            
            
        }while ((Math.abs(dr/r))>error && (Math.abs(ds/s))>error);
        
        if ((Math.pow(r,2)) + 4*s > 0){
            var x1 = (r + Math.sqrt((Math.pow(r,2)) + 4*s))/2;
            var x2 = (r - Math.sqrt((Math.pow(r,2)) + 4*s))/2;
            
            raices[k] = x1;
            raices[k+1] = x2;
            
            a = divisionsintetica(a, raices[k]);
            a = divisionsintetica(a, raices[k+1]);
            
        }else if((Math.pow(r,2)) + 4*s < 0){
            var x1 = (r + Math.sqrt(Math.abs((Math.pow(r,2)) + 4*s)))/2;
            var x2 = (r - Math.sqrt(Math.abs((Math.pow(r,2)) + 4*s)))/2;
            
            a = divisionsintetica(a, x1);
            a = divisionsintetica(a, x2);

        }			
    }
    
    else if (n==2){
        var disc = (Math.pow(a[1],2)) - 4*a[2]*a[0];
        if (disc > 0){
            var x1 = (-a[1] + Math.sqrt(disc))/(2*a[2]);
            var x2 = (-a[1] - Math.sqrt(disc))/(2*a[2]);
            
            raices[k] = x1;
            raices[k+1] = x2;
            
            break;
            
        }else if (disc < 0){
            
            continue;
            
        }
    }
    
    else if (n==1){
        
        raices[k] = -a[0];
        
        break;
    }
}
return raices;
}

// Inversa de matriz de Masa

var inver_Masa = inversa(Masa);

var matrizA = multiplicar(inver_Masa, K);

var polinomio = pcaracteristico(matrizA);

var raicespoli = hallaraices(polinomio);

function menoramayor (a,b){ 
    return a - b;
}

function mayoramenor (a,b){ 
    return b - a;
}

var raicespoli = raicespoli.sort(menoramayor);  //organiza de menor a mayor, del primer al ??ltimo piso. Para part masa deben ir en este sentido

// Las ra??ces que se hallan del polinomio caracter??stico deben ser iguales al n??mero de pisos que se est?? trabajando y valores positivos. De no ser as??, esto indicar??a una inconsistencia en los valores propuestos y, por tanto, la funci??n modosnormales no dar??a un resultado correcto	

// Frecuencias naturales

var w = new Array();

for (i=0; i<raicespoli.length; i++){
    w[i] = Math.pow(raicespoli[i], (1/2));	 // en rad/s
}	

var w = w.sort(mayoramenor); //organiza de mayor a menor, del ??ltimo piso al primero porque as?? se est?? imprimiendo
    
// Ciclos por segundo (f) y per??odos naturales (T)

var f = new Array();
var T = new Array();

for (i=0; i<w.length; i++) { 
    f[i] = w[i]/(2*Math.PI);  // en ciclos por s
    T[i] = 1/f[i];	// en s
}

// Modos normales 

//------------------Funci??n para modos normales----------------------//	

function modosnormales(matrizA, lambda){
var n = matrizA.length;
var Modo = createMatriz(n);
            
if (n==2){
        
var Z = new Array();
    for(i=0; i<n; i++){
        Z[i] = new Array();
        for (j=0; j<n; j++){
            if (i==j){
                Z[i][j] = matrizA[i][j]-lambda[i];
            }else if (i!=j){
                Z[i][j] = matrizA[i][j];
            }
        }
    }
    
    for (i=0; i<n; i++){
        for (j=0; j<n; j++){
            if (i==0){
                Modo[i][j] = 1;
            }else if (i==1 && j==0){
                Modo[i][j] = -(Z[0][0]/Z[0][1]);
            }else if (i==1 && j==1){
                Modo[i][j] = -(Z[1][0]/Z[1][1]);
            }
        }
    }
    
    return Modo;
    
}

else if (n>2){
    
    for(t=0; t<n; t++){ 
        
        var Z = new Array();
        for (i=0; i<n; i++){
            Z[i] = new Array();
            for (j=0; j<n; j++){
                if (i==j){
                    Z[i][j] = matrizA[i][j] - lambda[t];
                }else if (i!=j){
                    Z[i][j] = matrizA[i][j];
                }
            }
        }
        
        var Te = new Array();
        for (i=1; i<n; i++){
            Te[i-1] = new Array();
            //for (j=0; j<n-1; j++){
            for (j=1; j<n; j++){
                Te[i-1][j-1] = Z[i][j];
                //T[i-1][j] = Z[i][j];
            }
        }
                        
        var vT = new Array();
        for (i=1; i<n; i++){
            for (j=0; j<1; j++){	// pasa al otro lado el vector de la izquierda
            //for (j=n-1; j<n; j++){	//pasa al otro lado el vector de la derecha
                vT[i-1] = -Z[i][j];
            }
        }

        Te = cifrasmatriz(Te, 6);
        vT = cifrasvector(vT, 6);
        
        var inver_T = inversa(Te);
        
        var resultado = matrizxvector(inver_T, vT);
        
        for (i=0; i<n; i++){
            if (i==0){
                Modo[i][t] = 1; 
            }else{
                Modo[i][t] = resultado[i-1]; 
            }
        }			
    }
    
    return Modo;
    
}
}

var Modos = modosnormales(matrizA, raicespoli);    // primer piso a ??ltimo por vectores para part masa

// Matriz modal 

var fi = new Array();
    
for(i=0; i<n; i++){
    fi[i] = new Array();
    for(j=0; j<n; j++){
        D = 0;
        for(k=0; k<n; k++){
            D = D + m[k]*(Math.pow(Modos[k][j], 2));
        }
        D = Math.pow(D,1/2);
        fi[i][j] = Modos[i][j]/D;
    }
}

// Matriz modal transpuesta

var Tfi = createMatriz(n);

for (i=0; i<n; i++){
    for (j=0; j<n; j++){
        Tfi[j][i] = fi[i][j];
    }
}

// Verificar ortogonalidad Tfi*Masa*fi = I

var Tfi_M = multiplicar(Tfi, Masa);

var ort = multiplicar(Tfi_M, fi);

// Amplitud de cada piso

var W =  new Array();

for (i=0; i<n; i++){
    W[i] = new Array();
    for(j=0; j<n; j++){
        W[i][j] = (Math.pow(w[i],(2*(j+1))-1))/2;
    }
}

var epsi = new Array();

for (i=0; i<n; i++){
    epsi[i] = amort/100;
}	

// Para hallar las amplitudes de cada piso: a = [W]^-1*epsi	
//  ------- Se debe resolver un sistema de ecuaciones x=[A]^-1*[B]  

// Inversa de W

var inver_W = inversa(W);

var Amplitudes = matrizxvector(inver_W, epsi);	
    
// Matriz de amortiguamiento ([C] = [M]*SUM(i=0,hasta n-1)ai*[P]^i), donde [P] = [M]^-1*[K]

// Matriz [P] = [M]^-1*[K]

var P = multiplicar(inver_Masa, K);

//----------Funci??n sumatoria para matriz de amortiguamiento--------------//

function sumatoria(a, matriz){
    var n = matriz.length;
    var S = createMatriz(n);
    var M = createMatriz(n);
    
    for (k=0; k<n; k++){
        if (k==0){
            for (i=0; i<n; i++){
                for (j=0; j<n; j++){
                    S[i][j] = matriz[i][j]*a[k];
                }
            }
        }		

        else if (k==1){
            M = multiplicar(matriz, matriz);
            for (i=0; i<n; i++){
                for (j=0; j<n; j++){
                    S[i][j] = S[i][j] + M[i][j]*a[k];
                }
            }					
        }				
    
        else if(k>1){
            M = multiplicar(M, matriz);
            for (i=0; i<n; i++){
                for (j=0; j<n; j++){
                    S[i][j] = S[i][j] + M[i][j]*a[k];
                }
            }
        }
    }	
    return S;
}

var sum = sumatoria(Amplitudes, P);

// Matriz de amortiguamiento 

var C = multiplicar(Masa, sum);

// Determinante matriz de amortiguamiento

function determinante(matriz){
    
    if(matriz.length==2){
        var det = (matriz[0][0]*matriz[1][1])-(matriz[1][0]*matriz[0][1]);
        return det;
    } 
    
    suma = 0;
    for(var i=0; i<matriz.length; i++){
        var nm = createMatriz(matriz.length-1);
        for(var j=0; j<matriz.length; j++){
            if(j!= i){
                for(var k=1; k<matriz.length; k++){
                    indice = -1;
                    if(j<i){
                        indice = j;
                    }else if(j>i){
                        indice = j-1;
                    }nm[indice][k-1] = matriz[j][k];
                }
            }
        }
                
        if(i%2==0){
            suma += matriz[i][0] * determinante(nm);                            
        }else{
            suma -= matriz[i][0] * determinante(nm);
        }                        
    }
    return suma;
}




// ---------------Parte dos--------------------//

// Factor de participaci??n

// USE MODOS PARA P PARA USAR DEL PRIMER PISO AL ULTIMO
// FACTOR P QUED?? DE PRIMER PISO AL ULTIMO por el orden de los modos m??s no por el de masa!!!!

var factorP = new Array();

for (i=0; i<n; i++){
    num = 0; 
    den = 0;
    for (j=0; j<n; j++){
        num = num + m[j]*Modos[j][i];
        den = den + m[j]*Math.pow(Modos[j][i],2);
    }
    factorP[i] = num/den;	//	adimensional
}

// Masa total estructura

var masaT = 0;

for (i=0; i<n; i++){
    masaT = masaT + m[i];
}

// Participaci??n de la masa

var Partmasa = new Array(); // Vector con la participaci??n de la masa en kg
var Partmasaxmodo = new Array();
var Partmasaporcent = new Array();
var porcent = 0; // contador que lleva la suma de porcentajes
var porcentajeM; // % de participiaci??n de masa alcanzado

for(i=0; i<n; i++){
    temp = 0;
    for(j=0; j<n; j++){
        temp = temp + m[j]*Modos[j][i];  // en kg
    }

    porcent = porcent + ((factorP[i]*temp*100)/masaT);

    if (porcent < 90){
        Partmasa[i] = factorP[i]*temp; // en kg
    }else if (porcent > 90){
        Partmasa[i] = factorP[i]*temp;
        porcentajeM = porcent;
        break;
    }
}

for (i=0; i<n; i++){
    temp = 0;
    for(j=0; j<n; j++){
        temp = temp + m[j]*Modos[j][i];
    }
    Partmasaxmodo[i] = factorP[i]*temp
    Partmasaporcent[i] = (factorP[i]*temp*100)/masaT;

}





// Datos para graficar el espectro s??smico de dise??o (AQU?? SE DEBE INSERTAR AUTOMATICA/)


I = 1.10;
Aa = 0.25;
Av = 0.25;
Fa = 1.30;
Fv = 1.90;

To = 0.1*((Av*Fv)/(Aa*Fa));
Tc = 0.48*((Av*Fv)/(Aa*Fa));
Tl = 2.4*Fv;

var ejex = new Array();
var ejey = new Array();

for (i=0; i<40; i++){

    if (i<=5){
        if (i==0){
            ejex[i] = 0;
            prom = (To - ejex[i])/6;
        }else if (i>0 && i<5){
            ejex[i] = ejex[i-1] + prom;
        }else{
            ejex[i] = To;
        }
        
        ejey[i] = 2.5*Aa*Fa*I;

    }

    if (i>5 && i<=7){
        if (i==6){
            ejex[i] = (Tc - To)/2; 
        }else{
            ejex[i] = Tc;
        }
        
        ejey[i] = 2.5*Aa*Fa*I;

    }

    if (i>7 && i<=18){
        prom = (Tl - Tc)/12;
        ejex[i] = ejex[i-1] + prom;
        ejey[i] = (1.2*Av*Fv*I)/ejex[i];
    }

    if (i==19){
        ejex[i] = Tl;
        ejey[i] = (1.2*Av*Fv*I)/ejex[i];
    }

    delta = ejex[19] - ejex[18];
        
    if (i>19){
        ejex[i] = ejex[i-1] + delta;
        ejey[i] = (1.2*Av*Fv*Tl*I)/Math.pow(ejex[i],2);
    }
}

// Valores de pseudoaceleraci??n obtenidos por el espectro (interpolaci??n)

T = T.sort(mayoramenor); // Se debe cambiar el orden ya que el primer modo que participa se refiere la frecuencia natural m??s peque??a con per??odo m??s grande, es decir, el primer piso.

var pseudoS = new Array();

for (i=0; i<Partmasa.length; i++){
    for(j=1; j<40; j++){
        if (T[i]>ejex[j-1] && T[i]<ejex[j]){
            pseudoSy = (((T[i]-ejex[j-1])/(ejex[j]-ejex[j-1]))*(ejey[j]-ejey[j-1])) + ejey[j-1];
            pseudoS[i] = pseudoSy; 
            break;
        }
    }
}


ejex = cifrasvector(ejex, 2);
ejey = cifrasvector(ejey, 4);

// Variable A
// QUEDA DEL PRIMER PISO AL ULTIMO

var A = new Array();

for (i=0; i<Partmasa.length; i++){
    A[i] = factorP[i]*pseudoS[i]*9.81; // en m/s2
}

// Vectores aceleraci??n por cada masa que participa representados como vectores columna
// Queda del primer piso al ??ltimo

var vectores_a = new Array();

for (i=0; i<n; i++){ // tama??o de fila por numero de pisos 
    vectores_a[i] = new Array(Partmasa.length);
    for (j=0; j<Partmasa.length; j++){ // tama??o de columna por numero de Partmasa
        vectores_a[i][j] = A[j]*Modos[i][j];	// en m/s2
    }
}

// Vector fuerza total donde cada componente corresponde a la fuerza de cada piso (no estoy segura si es as??)

var Ftotal = new Array();

// QUEDA DEL PRIMER PISO AL ??LITMO

if (Partmasa.length == 1){
    for (i=0; i<n; i++){
        Ftotal[i] = new Array();
        for (j=0; j<Partmasa.length; j++){
            Ftotal[i][j] = vectores_a[i][j]*m[i]; // en N
        }
    }
}else if (Partmasa.length > 1){
    for (i=0; i<n; i++){
        Ftotal[i] = 0;
        for (j=0; j<Partmasa.length; j++){
            Ftotal[i] = Ftotal[i] + Math.pow(vectores_a[i][j]*m[i], 2);
        }
        Ftotal[i] = Math.sqrt(Ftotal[i]);
    }
}


var Despectral = new Array();

for (i=0; i<Partmasa.length; i++){
    Despectral[i] = Math.pow((T[i]/(2*Math.PI)),2)*A[i];  // en m
}

var Dxpiso = new Array();

if (Partmasa.length == 1){
    for (i=0; i<n; i++){
        Dxpiso[i] = new Array();
        for (j=0; j<Partmasa.length; j++){
            Dxpiso[i][j] = Despectral[j]*Modos[i][j];	// en m
        }
    }
}else if (Partmasa.length > 1){
    for (i=0; i<n; i++){
        Dxpiso[i] = 0;
        for (j=0; j<Partmasa.length; j++){
            Dxpiso[i] = Dxpiso[i] + Math.pow(Despectral[j]*Modos[i][j], 2);
        }
        Dxpiso[i] = Math.sqrt(Dxpiso[i]);
    }
}








//////////// IMPRESI??N ////////////// 

var rango = Array.from({length:n}, (v,i) => i+1);
rango = rango.sort(mayoramenor);

k_ = cifrasvector(k_, 2);

m = cifrasvector(m, 1);

K = cifrasmatriz(K, 0);

Masa = cifrasmatriz(Masa, 0);

inver_Masa = cifrasmatriz(inver_Masa, 5);

w = cifrasvector(w, 2);

f = cifrasvector(f, 2);

T = T.sort(menoramayor); // se cambia nuevamente para representar los datos como son
T = cifrasvector(T, 3);

Modos = cifrasmatriz(Modos,3);

fi = cifrasmatriz(fi, 4);

Tfi = cifrasmatriz(Tfi, 4);

ort = cifrasmatriz(ort, 0);

W = cifrasmatriz(W, 2);

inver_W = cifrasmatriz(inver_W, 10);

Amplitudes = cifrasvector(Amplitudes, 20);

P = cifrasmatriz(P, 2);

sum = cifrasmatriz(sum, 6);

C = cifrasmatriz(C, 0);

// Coeficiente de amortiguamiento

detC = determinante(C);

detMasa = determinante(Masa);

detK = determinante(K);

gamma = (detC /(2*Math.pow(detK*detMasa, 0.5)))*100;

pseudoS = cifrasvector(pseudoS, 3)

factorP = cifrasvector(factorP, 3)

rango = rango.sort(menoramayor);

Partmasaporcent = cifrasvector(Partmasaporcent, 2);

rango = rango.sort(mayoramenor);

for (i=0; i<n; i++){
    for (j=0; j<Partmasa.length; j++){
        vectores_a[i][j] = vectores_a[i][j].toFixed(2);
        vectores_a[i][j] = parseFloat(vectores_a[i][j]);
    }
}

for (i=0; i<n; i++){
    Ftotal[i] = (Ftotal[i]/1000).toFixed(2);
    Ftotal[i] = parseFloat(Ftotal[i]);
}

for (i=0; i<Partmasa.length; i++){
    Despectral[i] = (Despectral[i]*1000).toFixed(2);
    Despectral[i] = parseFloat(Despectral[i]);
}

for (i=0; i<n; i++){
    Dxpiso[i] = (Dxpiso[i]*1000).toFixed(2);
    Dxpiso[i] = parseFloat(Dxpiso[i]);
}






function show1(context, canvas) {

    // Matriz de masa

    x = 70;

    y = 100;

    context.beginPath();

    context.font = 'bold 22px Century Gothic';

    context.fillStyle = 'black';

    context.fillText('C??lculo de matriz de amortiguamiento', 50, 50);

    context.closePath();

    context.beginPath();

    context.font = 'bold 15px Century Gothic';

    context.fillText('Matriz de masa [kg]', x, y);

    context.fillText('[M] =', x-50, y + (20*(n/2)) + 20)

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    longy = 30;

    for (i=0; i<n; i++){

        iter = (20*n) + 20;

        context.moveTo(x, y + 10);
        context.lineTo(x + 10, y + 10);
        context.moveTo(x, y + 10);
        context.lineTo(x, y + iter);
        context.moveTo(x, y + iter);
        context.lineTo(x + 10, y + iter);
        
        esp = i*20;
        for (j=0; j<n; j++){
            longx = j*100;
            if (Masa[i][j] == 0){
                context.fillText(Masa[i][j], x + 5 + longx + 25, y + longy + esp);
            }else{
                context.fillText(Masa[i][j], x + 5 + longx, y + longy + esp);
            }		
        }

        context.moveTo(x + 5 + longx + 70, y + 10);
        context.lineTo(x + 5 + longx + 70 + 10, y + 10);
        context.moveTo(x + 5 + longx + 70 + 10, y + 10);
        context.lineTo(x + 5 + longx + 70 + 10, y + iter);
        context.moveTo(x + 5 + longx + 70 + 10, y + iter);
        context.lineTo(x + 5 + longx + 70, y + iter);

    }

    context.stroke();

    context.closePath();

    // Matriz de rigidez
    
    iter = 50;

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Matriz de rigidez [N/m]', x, y);

    context.fillText('[K] =', x-50, y + (20*(n/2)) + 20)

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    for (i=0; i<n; i++){

        iter = (20*n) + 20;

        context.moveTo(x, y + 10);
        context.lineTo(x + 10, y + 10);
        context.moveTo(x, y + 10);
        context.lineTo(x, y + iter);
        context.moveTo(x, y + iter);
        context.lineTo(x + 10, y + iter);

        esp = i*20;
        for (j=0; j<n; j++){
            longx = j*100;
            if (K[i][j] == 0){
                context.fillText(K[i][j], x + 5 + longx + 25, y + longy + esp);
            }else{
                context.fillText(K[i][j], x + 5 + longx, y + longy + esp);
            }		
        }

        context.moveTo(x + 5 + longx + 90, y + 10);
        context.lineTo(x + 5 + longx + 90 + 10, y + 10);
        context.moveTo(x + 5 + longx + 90 + 10, y + 10);
        context.lineTo(x + 5 + longx + 90 + 10, y + iter);
        context.moveTo(x + 5 + longx + 90 + 10, y + iter);
        context.lineTo(x + 5 + longx + 90, y + iter);

    }

    context.stroke();

    context.closePath();

    // Frecuencias naturales

    iter = 50;

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Frecuencias naturales', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    for (i=0; i<n; i++){

        esp = i*20;

        context.fillText('w'+ rango[i] + ' = ' + w[i] + ' rad/s', x, y + longy + esp);

    }

    context.stroke();
    
    context.closePath();

    // Ciclos por segundo

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Ciclos por segundo', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    for (i=0; i<n; i++){

        esp = i*20;

        context.fillText('f'+ rango[i] + ' = ' + f[i] + ' cps', x, y + longy + esp);

    }

    context.stroke();
    
    context.closePath();

    // Per??odos naturales

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Per??odos naturales', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    for (i=0; i<n; i++){

        esp = i*20;

        context.fillText('T'+ rango[i] + ' = ' + T[i] + ' s', x, y + longy + esp);

    }

    context.stroke();
    
    context.closePath();

    // Matriz de modos de vibraci??n

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Matriz de modos de vibraci??n', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    for (i=0; i<n; i++){

        iter = (20*n) + 20;

        context.moveTo(x, y + 10);
        context.lineTo(x + 10, y + 10);
        context.moveTo(x, y + 10);
        context.lineTo(x, y + iter);
        context.moveTo(x, y + iter);
        context.lineTo(x + 10, y + iter);

        esp = i*20;
        for (j=0; j<n; j++){
            longx = j*100;
            if (Modos[i][j] == 1){
                context.fillText(Modos[i][j], x + 5 + longx + 15, y + longy + esp);
            }else{
                context.fillText(Modos[i][j], x + 5 + longx, y + longy + esp);
            }		
        }

        context.moveTo(x + 5 + longx + 40, y + 10);
        context.lineTo(x + 5 + longx + 40 + 10, y + 10);
        context.moveTo(x + 5 + longx + 40 + 10, y + 10);
        context.lineTo(x + 5 + longx + 40 + 10, y + iter);
        context.moveTo(x + 5 + longx + 40 + 10, y + iter);
        context.lineTo(x + 5 + longx + 40, y + iter);
        
    }

    context.stroke();

    context.closePath();

    // Ortogonalidad

    iter = 50;

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Ortogonalidad', x, y);

    context.fillText('[I] =', x-50, y + (20*(n/2)) + 20);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    for (i=0; i<n; i++){

        iter = (20*n) + 20;

        context.moveTo(x, y + 10);
        context.lineTo(x + 10, y + 10);
        context.moveTo(x, y + 10);
        context.lineTo(x, y + iter);
        context.moveTo(x, y + iter);
        context.lineTo(x + 10, y + iter);

        esp = i*20;
        for (j=0; j<n; j++){
            longx = j*100;
            context.fillText(ort[i][j], x + 5 + longx + 15, y + longy + esp);		
        }

        context.moveTo(x + 5 + longx + 40, y + 10);
        context.lineTo(x + 5 + longx + 40 + 10, y + 10);
        context.moveTo(x + 5 + longx + 40 + 10, y + 10);
        context.lineTo(x + 5 + longx + 40 + 10, y + iter);
        context.moveTo(x + 5 + longx + 40 + 10, y + iter);
        context.lineTo(x + 5 + longx + 40, y + iter);

    }

    context.stroke();

    context.closePath();

    // Matriz de amortiguamiento

    iter = 50;

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Matriz de amortiguamiento', x, y);

    context.fillText('[C] =', x-50, y + (20*(n/2)) + 20)

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    for (i=0; i<n; i++){

        iter = (20*n) + 20;

        context.moveTo(x, y + 10);
        context.lineTo(x + 10, y + 10);
        context.moveTo(x, y + 10);
        context.lineTo(x, y + iter);
        context.moveTo(x, y + iter);
        context.lineTo(x + 10, y + iter);

        esp = i*20;
        for (j=0; j<n; j++){
            longx = j*110;
            if (C[i][j] == 0){
                context.fillText(C[i][j], x + 5 + longx + 25, y + longy + esp);
            }else{
                context.fillText(C[i][j], x + 5 + longx, y + longy + esp);
            }		
        }

        context.moveTo(x + 5 + longx + 90, y + 10);
        context.lineTo(x + 5 + longx + 90 + 10, y + 10);
        context.moveTo(x + 5 + longx + 90 + 10, y + 10);
        context.lineTo(x + 5 + longx + 90 + 10, y + iter);
        context.moveTo(x + 5 + longx + 90 + 10, y + iter);
        context.lineTo(x + 5 + longx + 90, y + iter);

    }

    context.stroke();

    context.closePath();
    
}

var parte1 = document.getElementById('Parte1');

if (n == 2){
    parte1.setAttribute("height", "900");
}else if (n == 3){
    parte1.setAttribute("height", "1060");
}else if (n == 4){
    parte1.setAttribute("height", "1220");
}else if (n == 5){
    parte1.setAttribute("height", "1390");
}

var ctxparte1 = parte1.getContext('2d');

show1 (ctxparte1, parte1);




function show2(context, canvas) {

    // Coeficiente de amortiguamiento

    x = 70;

    y = 100;

    context.beginPath();

    context.font = 'bold 22px Century Gothic';

    context.fillStyle = 'black';

    context.fillText('C??lculo de fuerzas y desplazamientos', 50, 50);

    context.closePath();

    context.beginPath();

    context.font = 'bold 15px Century Gothic';

    context.fillText('Coeficiente de amortiguamiento', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    iter = 50;

    longy = 30;

    context.fillText(5 + ' %', x, y + longy);

    context.stroke();

    context.closePath();

    // Factor de participaci??n

    context.translate(x, y + longy + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Factor de participaci??n', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    rango = rango.sort(menoramayor);

    for (i=0; i<n; i++){

        esp = i*20;
        context.fillText('Modo '+ rango[i] + ' = ' + factorP[i], x, y + longy + esp);

    }

    context.stroke();
    
    context.closePath();

    // Participaci??n de la masa en cada modo

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Participaci??n de la masa en cada modo', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    rango = rango.sort(menoramayor);

    for (i=0; i<n; i++){

        esp = i*20;

        context.fillText('En el modo '+ rango[i] + ' participa el ' + Partmasaporcent[i] + ' % de la masa total del p??rtico. ', x, y + longy + esp);
    }

    if (Partmasa.length==1){

        context.fillText('El 90% de la participaci??n de la masa est?? en el modo '+ Partmasa.length + '.', x, y + esp + 2*longy + 10);

    }else if (Partmasa.length>1){

        context.fillText('El 90% de la participaci??n de la masa est?? en los '+ Partmasa.length + ' primeros modos.', x, y + esp + 2*longy + 10);

        for (i=0; i<Partmasa.length; i++){

            longx = i*75;

            totalP = 0;

            for (j=0; j<Partmasa.length; j++){

                totalP = totalP + Partmasaporcent[j];

            }

            if (i<Partmasa.length-1){

                context.fillText(Partmasaporcent[i] + ' % +', x + longx, y + esp + 2*longy + 50);

            }else if (i==Partmasa.length-1){

                context.fillText(Partmasaporcent[i] + ' %  =  ' + totalP + ' %   >  90% ', x + longx, y + esp + 2*longy + 50);

            }
        }
    }

    context.stroke();
    
    context.closePath();

    // Pseudoaceleraci??n

    if (Partmasa.length == 1){

        context.translate(x, y + esp + 2*longy + 10 + iter);

    }else if (Partmasa.length>1){

        context.translate(x, y + esp + 2*longy + 50 + iter)

    }

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Pseudoaceleraciones', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    rango = rango.sort(menoramayor);

    T = T.sort(mayoramenor);

    for (i=0; i<Partmasa.length; i++){

        esp = i*20;

        context.fillText('T' + rango[i] + ' = ' + T[i] + ' s' + '   ???   '+'Sa'+ rango[i] + ' = ' + pseudoS[i], x, y + longy + esp);
    }

    context.stroke();
    
    context.closePath();

    // Matriz o vector de aceleraci??n

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Matriz o vector de aceleraci??n [m/s\u00B2]', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';
    
    for (i=0; i<n; i++){

        iter = (20*n) + 20;

        context.moveTo(x, y + 10);
        context.lineTo(x + 10, y + 10);
        context.moveTo(x, y + 10);
        context.lineTo(x, y + iter);
        context.moveTo(x, y + iter);
        context.lineTo(x + 10, y + iter);

        esp = i*20;
        for (j=0; j<Partmasa.length; j++){
            longx = j*110;
            if (vectores_a[i][j] == 0){
                context.fillText(vectores_a[i][j], x + 5 + longx + 25,  y + longy + esp);
            }else{
                context.fillText(vectores_a[i][j], x + 5 + longx, y + longy + esp);
            }		
        }

        context.moveTo(x + 5 + longx + 45, y + 10);
        context.lineTo(x + 5 + longx + 45 + 10, y + 10);
        context.moveTo(x + 5 + longx + 45 + 10, y + 10);
        context.lineTo(x + 5 + longx + 45 + 10, y + iter);
        context.moveTo(x + 5 + longx + 45 + 10, y + iter);
        context.lineTo(x + 5 + longx + 45, y + iter);
    }

    context.stroke();

    context.closePath();

    // Fuerza total

    iter = 50;

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Fuerza total', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    rango = rango.sort(mayoramenor);

    for (i=0; i<n; i++){

        esp = i*20;

        context.fillText('F'+ rango[i] + ' = ' + Ftotal[i] + ' kN', x, y + longy + esp);
    }

    context.stroke();
    
    context.closePath();

    // Desplazamientos espectrales

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Desplazamientos espectrales', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    rango = rango.sort(menoramayor);

    for (i=0; i<Partmasa.length; i++){

        esp = i*20;

        context.fillText('X'+ rango[i] + ' = ' + Despectral[i] + ' mm', x, y + longy + esp);
    }

    context.stroke();
    
    context.closePath();

    // Desplazamientos por cada piso

    context.translate(x, y + longy + esp + iter);

    context.beginPath();

    x = 0;

    y = 0;

    context.font = 'bold 15px Century Gothic';

    context.fillText('Desplazamientos de cada piso', x, y);

    context.closePath();

    context.beginPath();

    context.font = '15px Century Gothic';

    rango = rango.sort(mayoramenor);

    for (i=0; i<n; i++){

        esp = i*20;

        context.fillText('x'+ rango[i] + ' = ' + Dxpiso[i] + ' mm', x, y + longy + esp);
    }

    context.stroke();
    
    context.closePath();


}

var parte2 = document.getElementById('Parte2');

if (n == 2){
    parte2.setAttribute("height", "900");
}else if (n == 3){
    parte2.setAttribute("height", "1060");
}else if (n == 4){
    parte2.setAttribute("height", "1220");
}else if (n == 5){
    parte2.setAttribute("height", "1390");
}

var ctxparte2 = parte2.getContext('2d');

show2 (ctxparte2, parte2);

          var ctx = document.getElementById('chart').getContext('2d');
    

        var chart = new Chart (ctx,{
            type: 'line',
            data: {
                labels: ejex, //eje x
                datasets: [  // eje y
                    {
                        borderColor: 'green',
                        data: ejey,
                        borderWidth: 2,
                    },
                ]
            },
            options: {
                bezierCurve : true, //
                responsive: false,
                maintainAspectRatio: false,
                layout: {
                    padding: 10,
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Espectro S??smico de Dise??o de la Ciudad de Pasto',
                        color: 'black',
                        font: {
                            family: 'Century Gothic',
                            size: 23,
                        },
                        padding: 25,
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'T(s)',
                            color: 'black',
                            font:{
                                family: 'Century Gothic',
                                size: 20,
                                weight: 'bold',
                                lineHeight: 1.2,
                            },
                           //padding: {top: 10, left: 0, right: 0, bottom: 0}, 
                        },
                        ticks: {
                            color: 'black',
                            font:{
                                family: 'Century Gothic',
                            },
                            maxRotation: 0,
                            //autoSkip: false,
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Sa(g)',
                            color: 'black',
                            font:{
                                family: 'Century Gothic',
                                size: 20,
                                weight: 'bold',
                                lineHeight: 1.2,
                            },
                            //padding: {top: 10, left: 0, right: 0, bottom: 10}, 
                        },
                        ticks: {
                            color: 'black',
                            font:{
                                family: 'Century Gothic',
                            }
                        }
                    }
                },
                elements: {
                    line: {
                        borderWidth: 8,
                        fill: false,
                    },
                    point: {
                        radius: 1.5,
                        //borderWidth: 4,
                        backgroundColor: 'white',
                        //hoverRadius: 8,
                        //hoverBorderWidth: 4,
                    }
                }
            }
        })
     
    
    

    // function show3 () {
    //     const ctx = document.getElementById('chart').getContext('2d');  // coge la instancia del canvas(ver clase), buscar el chart y devolver 2d
    //     graficar(ctx);
    // }

    // show3();      




//---------- Simulaci??n ----------


Hp = 90;
var hplanta = 10;
var bplanta = 300;
var amplitude = new Array();

for (i=0; i<n; i++){
    amplitude[i] = (n-i)*6;
}

function show3(n){

window.requestAnimFrame = (function (callback) {

    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||

        function (callback) {

            window.setTimeout(callback, 1000 / 60);

        };

})();

// Funci??n que dibuja rect??ngulos para el movimiento oscilatorio

function drawRectangle(myRectangle, context, canvas) {

    context.beginPath();

    context.font = 'bold 22px Century Gothic';

    context.fillStyle = 'black';

    context.fillText('Simulaci??n del movimiento', canvas.width/2 - bplanta/2 ,17);

    context.closePath();

    context.beginPath();

    context.strokeStyle = 'black';

    context.lineWidth = '1.5';

    context.setLineDash([]);

    for (i=0; i<myRectangle.length; i++){

        context.rect(myRectangle[i][0], myRectangle[i][1], bplanta, hplanta);

        context.fillStyle = '#8ED6FF'; 

        context.fill(); 

        context.stroke(); 
        
    }

    context.closePath();

}

// Funci??n que dibuja el contorno de los rect??ngulos en posici??n inicial

function drawRectangleLines(myRectangle, context) {

    context.beginPath();

    context.strokeStyle = 'black';

    context.lineWidth = '1';

    context.setLineDash([2, 4]);

    for (i=0; i<myRectangle.length; i++){
        
        context.rect(myRectangle[i][0], myRectangle[i][1], bplanta, hplanta);
        
    }

    context.stroke();

    context.closePath();

}

// Funci??n que permite el movimiento esperado

function animate(n, myRectangle, myRectangle1, canvas, context, startTime, amplitude) {

    // Actualizar

    var time = (new Date()).getTime() - startTime;

    // in ms

    var period = 2000;

    var centerX = canvas.width / 2 - bplanta / 2;

    var nextX = new Array();        

    for (j=0; j<n; j++){

        nextX[j] = amplitude[j] * Math.sin(time * 2 * Math.PI / period) + centerX;
        
        myRectangle[j][0] = nextX[j];
    }

    context.beginPath();

    context.setLineDash([]);

    context.lineWidth = '1.5';

    for (i=0; i<n; i++){

        prox = 100 + hplanta*(i+1) + Hp*(i+1);

        context.moveTo(nextX[i], prox - Hp);

        context.lineTo(nextX[i+1], prox);

        context.moveTo(nextX[i] + bplanta, prox - Hp);

        context.lineTo(nextX[i+1] + bplanta, prox);

        if (i==n-1){

        context.moveTo(nextX[i], prox - Hp);

        context.lineTo((canvas.width/2) - bplanta/2, prox);

        context.moveTo((canvas.width/2) - bplanta/2 - 8, prox);

        context.lineTo((canvas.width/2) - bplanta/2 + 8, prox)

        context.moveTo(nextX[i] + bplanta, prox - Hp);

        context.lineTo((canvas.width/2) + bplanta/2, prox);

        context.moveTo((canvas.width/2) + bplanta/2 - 10, prox);

        context.lineTo((canvas.width/2) + bplanta/2 + 10, prox);                  

        }
    }	
    

    // Borrar

    context.clearRect(0, 0, canvas.width, canvas.height); // borra el lienzo de fotogramas

    context.stroke();

    drawRectangleLines(myRectangle1, context);

    context.closePath();

    //Dibujar

    drawRectangle(myRectangle, context, canvas);

    //Expresar los desplazamientos

    context.beginPath();

    for (i=0; i<n; i++){

        context.font = 'bold 15px Century Gothic',

        context.fillStyle = 'black',

        context.fillText(('???   ' +'x' + range[i] + ' = ' + Dxpiso[i]+ ' mm'), canvas.width/2 + bplanta/2 + 70, myRectangle[i][1]+10)

    }

    context.closePath();

    // Dibujar l??neas punteadas posici??n inicial

    context.beginPath();

    context.strokeStyle = 'black';

    context.lineWidth = '1';

    context.setLineDash([2, 4]);

    context.moveTo(myRectangle1[0][0], myRectangle1[0][1]);

    context.lineTo(myRectangle1[n-1][0], myRectangle1[n-1][1] + Hp + hplanta);

    context.moveTo(myRectangle1[0][0] + bplanta, myRectangle1[0][1]);

    context.lineTo(myRectangle1[n-1][0] + bplanta,  myRectangle1[n-1][1] + Hp + hplanta);

    context.stroke();

    context.closePath();

    //Pedir un nuevo cuadro

    requestAnimFrame(function () {

        animate(n, myRectangle,  myRectangle1, canvas, context, startTime, amplitude);

    });

}

var canvas2 = document.getElementById('myCanvas');

if (n == 2){
    canvas2.setAttribute("height", "400");
}else if (n == 3){
    canvas2.setAttribute("height", "550");
}else if (n == 4){
    canvas2.setAttribute("height", "650");
}else if (n == 5){
    canvas2.setAttribute("height", "750");
}

var context2 = canvas2.getContext('2d');


// Ciclo que guarda en matriz las coordenadas (x,y) de cada rect??ngulo del movimiento oscilatorio

var myRectangle = new Array();

for (i=0; i<n; i++){
    myRectangle[i] = new Array();
    for (j=0; j<2; j++){
        if (j==0){
            myRectangle[i][j] = canvas2.width/2 - bplanta/2;
        }
        else if (i==0 && j==1){
            myRectangle[i][j] = 100; // espacio inicial desde arriba
        }
        else{
            myRectangle[i][j] = myRectangle[i-1][j] + Hp + hplanta;
        }
        
    }

}

// Ciclo que guarda en matriz las coordenadas (x,y) de cada rect??ngulo para dibujo de posici??n inicial

var myRectangle1 = new Array();

for (i=0; i<n; i++){
    myRectangle1[i] = new Array();
    for (j=0; j<2; j++){
        if (j==0){
            myRectangle1[i][j] = canvas2.width/2 - bplanta/2;
        }
        else if (i==0 && j==1){
            myRectangle1[i][j] = 100; // espacio inicial desde arriba
        }
        else{
            myRectangle1[i][j] = myRectangle1[i-1][j] + Hp + hplanta;
        }
        
    }

}

//Esperar un segundo antes de que comience la animaci??n

setTimeout(function () {

    var startTime = (new Date()).getTime();

    animate(n, myRectangle,  myRectangle1, canvas2, context2, startTime, amplitude);

}, 1000);

}

show3 (n);

}




