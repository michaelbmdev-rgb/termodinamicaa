const tablaAguaSaturada = [
    { t: 0.01, psat: 0.6113, vf: 0.001000, vg: 206.14, uf: 0, ug: 2375.3, hf: 0.01, hg: 2501.4, sf: 0, sg: 9.1562 },
    { t: 5, psat: 0.8721, vf: 0.001000, vg: 147.12, uf: 20.97, ug: 2382.3, hf: 20.98, hg: 2510.6, sf: 0.0761, sg: 9.0257 },
    { t: 10, psat: 1.2276, vf: 0.001000, vg: 106.38, uf: 42.00, ug: 2389.2, hf: 42.01, hg: 2519.8, sf: 0.1510, sg: 8.9008 },
    { t: 15, psat: 1.7051, vf: 0.001001, vg: 77.93, uf: 62.999, ug: 2396.1, hf: 62.99, hg: 2528.9, sf: 0.2245, sg: 8.7814 },
    { t: 20, psat: 2.339, vf: 0.001002, vg: 57.79, uf: 83.95, ug: 2402.9, hf: 83.96, hg: 2538.1, sf: 0.2966, sg: 8.6672 },
    { t: 25, psat: 3.169, vf: 0.001003, vg: 43.36, uf: 104.88, ug: 2409.8, hf: 104.89, hg: 2547.2, sf: 0.3674, sg: 8.5580 },
    { t: 30, psat: 4.246, vf: 0.001004, vg: 32.89, uf: 125.78, ug: 2416.6, hf: 125.79, hg: 2556.3, sf: 0.4369, sg: 8.4533 },
    { t: 35, psat: 5.628, vf: 0.001006, vg: 25.22, uf: 146.67, ug: 2423.4, hf: 146.68, hg: 2565.3, sf: 0.5053, sg: 8.3531 },
    { t: 40, psat: 7.384, vf: 0.001008, vg: 19.52, uf: 167.56, ug: 2430.1, hf: 167.57, hg: 2574.3, sf: 0.5725, sg: 8.2570 },
    { t: 45, psat: 9.593, vf: 0.001010, vg: 15.26, uf: 188.44, ug: 2436.8, hf: 188.45, hg: 2583.2, sf: 0.6387, sg: 8.1648 },
    { t: 50, psat: 12.349, vf: 0.001012, vg: 12.03, uf: 209.32, ug: 2443.5, hf: 209.33, hg: 2592.1, sf: 0.7038, sg: 8.0763 },
    { t: 55, psat: 15.758, vf: 0.001015, vg: 9.568, uf: 230.21, ug: 2450.1, hf: 230.23, hg: 2600.9, sf: 0.7679, sg: 7.9913 },
    { t: 60, psat: 19.94, vf: 0.001017, vg: 7.671, uf: 251.11, ug: 2456.6, hf: 251.13, hg: 2609.6, sf: 0.8312, sg: 7.9096 },
    { t: 65, psat: 25.03, vf: 0.001020, vg: 6.197, uf: 272.02, ug: 2463.1, hf: 272.06, hg: 2618.3, sf: 0.8935, sg: 7.8310 },
    { t: 70, psat: 31.19, vf: 0.001023, vg: 5.042, uf: 292.95, ug: 2469.6, hf: 292.98, hg: 2626.8, sf: 0.9549, sg: 7.7553 },
    { t: 75, psat: 38.58, vf: 0.001026, vg: 4.131, uf: 313.90, ug: 2475.9, hf: 313.93, hg: 2635.3, sf: 1.0155, sg: 7.6824 },
    { t: 80, psat: 47.39, vf: 0.001029, vg: 3.407, uf: 334.86, ug: 2482.2, hf: 334.91, hg: 2643.7, sf: 1.0753, sg: 7.6122 },
    { t: 85, psat: 57.83, vf: 0.001033, vg: 2.828, uf: 355.84, ug: 2488.4, hf: 355.9, hg: 2651.9, sf: 1.1343, sg: 7.5445 },
    { t: 90, psat: 70.14, vf: 0.001036, vg: 2.361, uf: 376.85, ug: 2494.5, hf: 376.92, hg: 2660.1, sf: 1.1925, sg: 7.4791 },
    { t: 95, psat: 84.55, vf: 0.001040, vg: 1.982, uf: 379.88, ug: 2500.6, hf: 397.96, hg: 2668.1, sf: 1.2500, sg: 7.4159 },
    { t: 100, psat: 101.35, vf: 0.001044, vg: 1.6729, uf: 418.94, ug: 2506.5, hf: 419.04, hg: 2676.1, sf: 1.3069, sg: 7.3549 },
    { t: 105, psat: 120.82, vf: 0.001048, vg: 1.4194, uf: 440.02, ug: 2512.4, hf: 440.15, hg: 2683.8, sf: 1.3630, sg: 7.2958 },
    { t: 110, psat: 143.27, vf: 0.001052, vg: 1.2102, uf: 461.14, ug: 2518.1, hf: 461.30, hg: 2691.5, sf: 1.4185, sg: 7.2387 },
    { t: 115, psat: 169.06, vf: 0.001056, vg: 1.0366, uf: 482.30, ug: 2523.7, hf: 482.48, hg: 2699.0, sf: 1.4734, sg: 7.1833 },
    { t: 120, psat: 198.53, vf: 0.001060, vg: 0.8919, uf: 503.50, ug: 2529.3, hf: 503.71, hg: 2706.3, sf: 1.5276, sg: 7.1296 },
    { t: 125, psat: 232.10, vf: 0.001065, vg: 0.7706, uf: 524.74, ug: 2534.6, hf: 524.99, hg: 2713.5, sf: 1.5813, sg: 7.0775 },
    { t: 130, psat: 270.10, vf: 0.001070, vg: 0.6685, uf: 546.02, ug: 2539.9, hf: 546.31, hg: 2720.5, sf: 1.6344, sg: 7.0269 },
    { t: 135, psat: 313.00, vf: 0.001075, vg: 0.5822, uf: 567.35, ug: 2545.0, hf: 567.69, hg: 2727.3, sf: 1.6870, sg: 6.9777 },
    { t: 140, psat: 361.30, vf: 0.001080, vg: 0.5089, uf: 588.74, ug: 2550.0, hf: 589.13, hg: 2733.9, sf: 1.7391, sg: 6.9299 },
    { t: 145, psat: 415.40, vf: 0.001085, vg: 0.4463, uf: 610.18, ug: 2554.9, hf: 610.63, hg: 2740.3, sf: 1.7907, sg: 6.8833 },
    { t: 150, psat: 475.80, vf: 0.001091, vg: 0.3928, uf: 631.68, ug: 2559.5, hf: 632.20, hg: 2746.5, sf: 1.8418, sg: 6.8379 },
    { t: 155, psat: 543.10, vf: 0.001096, vg: 0.3468, uf: 653.24, ug: 2564.1, hf: 653.84, hg: 2752.4, sf: 1.8925, sg: 6.7935 },
    { t: 160, psat: 617.80, vf: 0.001102, vg: 0.3071, uf: 674.87, ug: 2568.4, hf: 675.55, hg: 2758.1, sf: 1.9427, sg: 6.7502 },
    { t: 165, psat: 700.50, vf: 0.001108, vg: 0.2727, uf: 696.56, ug: 2572.5, hf: 697.34, hg: 2763.5, sf: 1.9925, sg: 6.7078 },
    { t: 170, psat: 791.70, vf: 0.001114, vg: 0.2428, uf: 718.33, ug: 2576.5, hf: 719.21, hg: 2768.7, sf: 2.0419, sg: 6.6663 },
    { t: 175, psat: 892.00, vf: 0.001121, vg: 0.2168, uf: 740.17, ug: 2580.2, hf: 741.17, hg: 2773.6, sf: 2.0909, sg: 6.6256 },
    { t: 180, psat: 1002.1, vf: 0.001127, vg: 0.19405, uf: 762.09, ug: 2583.7, hf: 763.22, hg: 2778.2, sf: 2.1396, sg: 6.5857 },
    { t: 185, psat: 1122.7, vf: 0.001134, vg: 0.17409, uf: 784.10, ug: 2587.0, hf: 785.37, hg: 2782.4, sf: 2.1879, sg: 6.5465 },
    { t: 190, psat: 1254.4, vf: 0.001141, vg: 0.15654, uf: 806.19, ug: 2590.0, hf: 807.62, hg: 2786.4, sf: 2.2359, sg: 6.5079 },
    { t: 195, psat: 1397.8, vf: 0.001149, vg: 0.14105, uf: 828.37, ug: 2592.8, hf: 829.98, hg: 2790.0, sf: 2.2835, sg: 6.4698 },
    { t: 200, psat: 1553.8, vf: 0.001157, vg: 0.12736, uf: 850.65, ug: 2595.3, hf: 852.45, hg: 2793.2, sf: 2.3309, sg: 6.4323 },
    { t: 205, psat: 1723.0, vf: 0.001164, vg: 0.11521, uf: 873.04, ug: 2597.5, hf: 875.04, hg: 2796.0, sf: 2.3780, sg: 6.3952 },
    { t: 210, psat: 1906.2, vf: 0.001173, vg: 0.10441, uf: 895.53, ug: 2599.5, hf: 897.76, hg: 2798.5, sf: 2.4248, sg: 6.3585 },
    { t: 215, psat: 2104.0, vf: 0.001181, vg: 0.09479, uf: 918.14, ug: 2601.1, hf: 920.62, hg: 2800.5, sf: 2.4714, sg: 6.3221 },
    { t: 220, psat: 2318.0, vf: 0.001190, vg: 0.08619, uf: 940.87, ug: 2602.4, hf: 943.62, hg: 2802.1, sf: 2.5178, sg: 6.2861 },
    { t: 225, psat: 2548.0, vf: 0.001199, vg: 0.07849, uf: 963.73, ug: 2603.3, hf: 966.78, hg: 2803.3, sf: 2.5639, sg: 6.2503 },
    { t: 230, psat: 2795.0, vf: 0.001209, vg: 0.07158, uf: 986.74, ug: 2603.9, hf: 990.12, hg: 2804.0, sf: 2.6099, sg: 6.2146 },
    { t: 235, psat: 3060.0, vf: 0.001219, vg: 0.06537, uf: 1009.89, ug: 2604.1, hf: 1013.62, hg: 2804.2, sf: 2.6558, sg: 6.1791 },
    { t: 240, psat: 3344.0, vf: 0.001229, vg: 0.05976, uf: 1033.21, ug: 2604.0, hf: 1037.32, hg: 2803.8, sf: 2.7015, sg: 6.1437 },
    { t: 245, psat: 3648.0, vf: 0.001240, vg: 0.05471, uf: 1056.71, ug: 2603.4, hf: 1061.23, hg: 2803.0, sf: 2.7472, sg: 6.1083 },
    { t: 250, psat: 3973.0, vf: 0.001251, vg: 0.05013, uf: 1080.39, ug: 2602.4, hf: 1085.36, hg: 2801.5, sf: 2.7927, sg: 6.0730 },
    { t: 255, psat: 4319.0, vf: 0.001263, vg: 0.04598, uf: 1104.28, ug: 2600.9, hf: 1109.73, hg: 2799.5, sf: 2.8383, sg: 6.0375 },
    { t: 260, psat: 4688.0, vf: 0.001276, vg: 0.04221, uf: 1128.39, ug: 2599.0, hf: 1134.37, hg: 2796.9, sf: 2.8838, sg: 6.0019 },
    { t: 265, psat: 5081.0, vf: 0.001289, vg: 0.03877, uf: 1152.74, ug: 2596.6, hf: 1159.28, hg: 2793.6, sf: 2.9294, sg: 5.9662 },
    { t: 270, psat: 5499.0, vf: 0.001302, vg: 0.03564, uf: 1177.36, ug: 2593.7, hf: 1184.51, hg: 2789.7, sf: 2.9751, sg: 5.9301 },
    { t: 275, psat: 5942.0, vf: 0.001217, vg: 0.03279, uf: 1202.25, ug: 2590.2, hf: 1210.07, hg: 2785.0, sf: 3.0208, sg: 5.8938 },
    { t: 280, psat: 6412.0, vf: 0.001332, vg: 0.03017, uf: 1227.46, ug: 2586.1, hf: 1235.99, hg: 2779.6, sf: 3.0668, sg: 5.8571 },
    { t: 285, psat: 6909.0, vf: 0.001348, vg: 0.02777, uf: 1253.00, ug: 2581.4, hf: 1262.31, hg: 2773.3, sf: 3.1130, sg: 5.8199 },
    { t: 290, psat: 7436.0, vf: 0.001366, vg: 0.02557, uf: 1278.92, ug: 2576.0, hf: 1289.07, hg: 2766.2, sf: 3.1594, sg: 5.7821 },
    { t: 295, psat: 7993.0, vf: 0.001384, vg: 0.02354, uf: 1305.20, ug: 2569.9, hf: 1316.30, hg: 2758.1, sf: 3.2062, sg: 5.7437 },
    { t: 300, psat: 8581.0, vf: 0.001404, vg: 0.02167, uf: 1332.00, ug: 2563.0, hf: 1344.0, hg: 2749.0, sf: 3.2534, sg: 5.7045 },
    { t: 305, psat: 9202.0, vf: 0.001425, vg: 0.019948, uf: 1359.30, ug: 2555.2, hf: 1372.4, hg: 2738.7, sf: 3.3010, sg: 5.6643 },
    { t: 310, psat: 9856.0, vf: 0.001447, vg: 0.018350, uf: 1387.10, ug: 2546.4, hf: 1401.3, hg: 2727.3, sf: 3.3493, sg: 5.6230 },
    { t: 315, psat: 10547.0, vf: 0.001472, vg: 0.016867, uf: 1415.50, ug: 2536.6, hf: 1431.0, hg: 2714.5, sf: 3.3982, sg: 5.5804 },
    { t: 320, psat: 11274.0, vf: 0.001499, vg: 0.015488, uf: 1444.60, ug: 2525.5, hf: 1461.5, hg: 2700.1, sf: 3.4480, sg: 5.5362 },
    { t: 330, psat: 12845.0, vf: 0.001561, vg: 0.012996, uf: 1505.30, ug: 2498.9, hf: 1525.3, hg: 2665.9, sf: 3.5507, sg: 5.4417 },
    { t: 340, psat: 14586.0, vf: 0.001638, vg: 0.010797, uf: 1570.30, ug: 2464.6, hf: 1594.2, hg: 2622.0, sf: 3.6594, sg: 5.3357 },
    { t: 350, psat: 16513.0, vf: 0.001740, vg: 0.008813, uf: 1641.90, ug: 2418.4, hf: 1670.6, hg: 2563.9, sf: 3.7777, sg: 5.2112 },
    { t: 360, psat: 18651.0, vf: 0.001893, vg: 0.006945, uf: 1725.20, ug: 2351.5, hf: 1760.5, hg: 2481.0, sf: 3.9147, sg: 5.0526 },
    { t: 370, psat: 21030.0, vf: 0.002213, vg: 0.004925, uf: 1844.00, ug: 2228.5, hf: 1890.5, hg: 2332.1, sf: 4.1106, sg: 4.7971 },
    { t: 374.14, psat: 22090.0, vf: 0.003155, vg: 0.003155, uf: 2029.60, ug: 2029.6, hf: 2099.3, hg: 2099.3, sf: 4.4298, sg: 4.4298 }

]

function calcularTermodinamica() {
    // 1. Capturar valores de los inputs
    const Tempe = parseFloat(document.getElementById('Temperatura').value);
    const X = parseFloat(document.getElementById('Vapor').value);

    // 2. Validaciones básicas
    if (isNaN(Tempe) || isNaN(X)) {
        alert("Por favor, ingresa valores numéricos en ambos campos.");
        return;
    }
    if (X < 0 || X > 1) {
        alert("La fracción de vapor (X) debe estar entre 0 y 1.");
        return;
    }
    if (Tempe < 0.01 || Tempe > 374.14) {
        alert("Temperatura fuera de rango (0.01°C - 374.14°C).");
        return;
    }

    // 3. Buscar los puntos para interpolar
    let p1, p2;

    // Caso: Temperatura exacta en la tabla
    const exacta = tablaAguaSaturada.find(f => f.t === Tempe);
    if (exacta) {
        p1 = exacta;
        p2 = exacta; // No hace falta interpolar
    } else {
        // Buscar el rango
        for (let i = 0; i < tablaAguaSaturada.length - 1; i++) {
            if (Tempe > tablaAguaSaturada[i].t && Tempe < tablaAguaSaturada[i + 1].t) {
                p1 = tablaAguaSaturada[i];
                p2 = tablaAguaSaturada[i + 1];
                break;
            }
        }
    }

    // 4. Función de Interpolación Lineal
    const interpolar = (prop) => {
        if (p1 === p2) return p1[prop]; // Si es exacta
        return p1[prop] + ((Tempe - p1.t) * (p2[prop] - p1[prop])) / (p2.t - p1.t);
    };

    // 5. Obtener valores de líquido (f) y vapor (g) saturados
    const vf = interpolar('vf');
    const vg = interpolar('vg');
    const uf = interpolar('uf');
    const ug = interpolar('ug');
    const hf = interpolar('hf');
    const hg = interpolar('hg');
    const sf = interpolar('sf');
    const sg = interpolar('sg');

    // 6. Calcular Propiedades Promedio (Mezcla)
    // Fórmula: M_prom = Mf + X * (Mg - Mf)
    const vProm = vf + X * (vg - vf);
    const uProm = uf + X * (ug - uf);
    const hProm = hf + X * (hg - hf);
    const sProm = sf + X * (sg - sf);

    // 7. Mostrar resultados en los elementos
    document.getElementById('Vprome').value = vProm.toFixed(6); 
    document.getElementById('Uprome').value = uProm.toFixed(2);
    document.getElementById('Hprome').value = hProm.toFixed(2);
    document.getElementById('Sprome').value = sProm.toFixed(4);
}

/* ------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------BAROMETRICA-------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------*/

let modoCalculoBarometro = ''; // Variable global para saber qué calcular

function prepararBarometro(modo) {
    modoCalculoBarometro = modo;

    const inputP = document.getElementById('Presion');
    const inputH = document.getElementById('Altura');
    const inputD = document.getElementById('Densidad');

    // 1. Resetear TODO a su estado original primero
    const inputs = [inputP, inputH, inputD];

    inputs.forEach(input => {
        input.disabled = false;
        input.style.backgroundColor = "white";
        input.value = ""; // Opcional: limpia lo que el usuario escribió antes
    });

    // 2. Restaurar los placeholders originales
    inputP.placeholder = "Presion (Pa)";
    inputH.placeholder = "Altura (m)";
    inputD.placeholder = "Densidad (kg/m³)";

    // 3. Ahora sí, aplicar el bloqueo al que corresponde
    if (modo === 'P') {
        inputP.disabled = true;
        inputP.placeholder = "Se calculará Presión";
        inputP.style.backgroundColor = "#e9ecef";
    } else if (modo === 'H') {
        inputH.disabled = true;
        inputH.placeholder = "Se calculará Altura";
        inputH.style.backgroundColor = "#e9ecef";
    } else if (modo === 'D') {
        inputD.disabled = true;
        inputD.placeholder = "Se calculará Densidad";
        inputD.style.backgroundColor = "#e9ecef";
    }
}

function calcularBarometro() {
    const g = 9.81; // Gravedad constante
    const P = parseFloat(document.getElementById('Presion').value);
    const H = parseFloat(document.getElementById('Altura').value);
    const D = parseFloat(document.getElementById('Densidad').value);
    const output = document.getElementById('Vdensi');
    const unidad = document.getElementById('unidad-barometro');

    let resultado = 0;

    if (!modoCalculoBarometro) {
        alert("Por favor, selecciona primero qué quieres calcular (Presión, Altura o Densidad)");
        return;
    }

    // Lógica matemática según el modo seleccionado
    switch (modoCalculoBarometro) {
        case 'P':
            // P = D * g * H
            resultado = D * g * H;
            unidad.innerHTML = " Pa";
            break;
        case 'H':
            // H = P / (D * g)
            resultado = P / (D * g);
            unidad.innerHTML = " m";
            break;
        case 'D':
            // D = P / (g * H)
            resultado = P / (g * H);
            unidad.innerHTML = " kg/m³";
            break;
    }

    // Mostrar resultado con 4 decimales para mayor precisión de ingeniería
    output.value = isNaN(resultado) ? "Error en datos" : resultado.toFixed(4);
}

/* ------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------Piston MASA-------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------*/

let modoPiston = '';

function prepararPiston(modo) {
    modoPiston = modo;
    const inputP = document.getElementById('P-presion');
    const inputM = document.getElementById('P-masa');
    const inputA = document.getElementById('P-area');

    // Resetear estados
    [inputP, inputM, inputA].forEach(input => {
        input.disabled = false;
        input.style.backgroundColor = "white";
    });

    // Restaurar Placeholders
    inputP.placeholder = "Presión (Pa)";
    inputM.placeholder = "Masa (kg)";
    inputA.placeholder = "Área (m²)";

    // Bloquear el que se va a calcular
    if (modo === 'P') {
        inputP.disabled = true;
        inputP.placeholder = "Se calculará Presión";
        inputP.style.backgroundColor = "#e9ecef";
    } else if (modo === 'M') {
        inputM.disabled = true;
        inputM.placeholder = "Se calculará Masa";
        inputM.style.backgroundColor = "#e9ecef";
    } else if (modo === 'A') {
        inputA.disabled = true;
        inputA.placeholder = "Se calculará Área";
        inputA.style.backgroundColor = "#e9ecef";
    }
}

function calcularPiston() {
    const g = 9.81;
    const P = parseFloat(document.getElementById('P-presion').value);
    const M = parseFloat(document.getElementById('P-masa').value);
    const A = parseFloat(document.getElementById('P-area').value);
    const Patm = parseFloat(document.getElementById('P-atm').value) || 0; // Si está vacío, asume 0

    const output = document.getElementById('Vpiston');
    const unidad = document.getElementById('unidad-piston');
    let resultado = 0;

    if (!modoPiston) {
        alert("Selecciona qué deseas calcular: Presión, Masa o Área");
        return;
    }

    switch (modoPiston) {
        case 'P':
            // P = Patm + (m * g / A)
            resultado = Patm + (M * g / A);
            unidad.innerHTML = " Pa";
            break;
        case 'M':
            // M = (P - Patm) * A / g
            resultado = (P - Patm) * A / g;
            unidad.innerHTML = " kg";
            break;
        case 'A':
            // A = (m * g) / (P - Patm)
            resultado = (M * g) / (P - Patm);
            unidad.innerHTML = " m²";
            break;
    }


    output.value = isNaN(resultado) || !isFinite(resultado) ? "Error" : resultado.toFixed(4);
}

/* ------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------PISTON CON AGUA-------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------*/
let modoPistonAgua = '';

function prepararPistonAgua(modo) {
    modoPistonAgua = modo;
    const inputP = document.getElementById('PA-presion');
    const inputM = document.getElementById('PA-masa');
    const inputA = document.getElementById('PA-area');

    // Resetear
    [inputP, inputM, inputA].forEach(input => {
        input.disabled = false;
        input.style.backgroundColor = "white";
    });

    inputP.placeholder = "Presión (Pa)";
    inputM.placeholder = "Masa (kg)";
    inputA.placeholder = "Área (m²)";

    if (modo === 'P') {
        inputP.disabled = true;
        inputP.placeholder = "Se calculará Presión";
        inputP.style.backgroundColor = "#e9ecef";
    } else if (modo === 'M') {
        inputM.disabled = true;
        inputM.placeholder = "Se calculará Masa";
        inputM.style.backgroundColor = "#e9ecef";
    } else if (modo === 'A') {
        inputA.disabled = true;
        inputA.placeholder = "Se calculará Área";
        inputA.style.backgroundColor = "#e9ecef";
    }
}

function calcularPistonAgua() {
    const g = 9.81;
    const P = parseFloat(document.getElementById('PA-presion').value);
    const M = parseFloat(document.getElementById('PA-masa').value);
    const A = parseFloat(document.getElementById('PA-area').value);
    const Patm = parseFloat(document.getElementById('PA-atm').value) || 0;

    const output = document.getElementById('VpistonAgua');
    const unidad = document.getElementById('unidad-piston-agua');
    let resultado = 0;

    if (!modoPistonAgua) {
        alert("Selecciona una variable para calcular");
        return;
    }

    switch (modoPistonAgua) {
        case 'P':
            resultado = Patm + (M * g / A);
            unidad.innerHTML = " Pa";
            break;
        case 'M':
            resultado = ((P - Patm) * A) / g;
            unidad.innerHTML = " kg";
            break;
        case 'A':
            resultado = (M * g) / (P - Patm);
            unidad.innerHTML = " m²";
            break;
    }

    output.value = (isNaN(resultado) || !isFinite(resultado)) ? "Error" : resultado.toFixed(4);
}
/* ------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------MULTIFLUIDOS-------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------*/

// Guardamos las direcciones de los 4 tramos (por defecto todas bajan)
let direcciones = { 1: 'baja', 2: 'baja', 3: 'baja', 4: 'baja' };

function setDireccion(tramo, dir) {
    direcciones[tramo] = dir;

    const btnS = document.getElementById(`btn-s${tramo}`);
    const btnB = document.getElementById(`btn-b${tramo}`);

    if (dir === 'sube') {
        btnS.style.backgroundColor = "#2ecc71"; // Verde
        btnS.style.color = "white";
        btnB.style.backgroundColor = "#ffc107"; // Reset
        btnB.style.color = "black";
    } else {
        btnB.style.backgroundColor = "#e74c3c"; // Rojo
        btnB.style.color = "white";
        btnS.style.backgroundColor = "#ffc107"; // Reset
        btnS.style.color = "black";
    }
}

function calcularMultifluido() {
    const g = 9.81;
    let presionManometricaPa = 0;

    for (let i = 1; i <= 4; i++) {
        const h = parseFloat(document.getElementById(`h${i}`).value) || 0;
        const rho = parseFloat(document.getElementById(`p${i}`).value) || 0;

        if (h > 0 && rho > 0) {
            let presionTramo = rho * g * h;

            // REGLA: Bajando desde el aire sumamos, subiendo restamos
            if (direcciones[i] === 'baja') {
                presionManometricaPa += presionTramo;
            } else {
                presionManometricaPa -= presionTramo;
            }
        }
    }

    const pAtmPa = parseFloat(document.getElementById('atm1').value) || 0;
    const pAbsolutaPa = pAtmPa + presionManometricaPa;

    const output = document.getElementById('PATM');
    // Mostramos el resultado en kPa
    output.value = (pAbsolutaPa / 1000).toFixed(3);
}