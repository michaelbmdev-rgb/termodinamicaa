let datosCalculados = false;

let G_r = 1;
let G_rc = 1;
let G_p1 = 1;
let G_p2 = 1;

let G_t1 = 1;
let G_t2 = 1;
let G_t3 = 1;
let G_t4 = 1;

const canvas = document.getElementById("dieselCanvas");
const ctx = canvas.getContext("2d");

document.getElementById("btnCalcular").addEventListener("click", calcular);
document.getElementById("btnLimpiar").addEventListener("click", limpiar);

function obtenerNumero(id) {
    const valor = parseFloat(document.getElementById(id).value);

    if (isNaN(valor)) {
        throw new Error("Valor inválido");
    }

    return valor;
}

function calcular() {
    try {
        const r = obtenerNumero("txtCompresion");
        const rc = obtenerNumero("txtCorte");
        const k = obtenerNumero("txtCoeficiente");
        const t1 = obtenerNumero("txtTInicial");
        const p1 = obtenerNumero("txtPInicial");
        const cp = obtenerNumero("txtCp");
        const cv = obtenerNumero("txtCv");
        const m = obtenerNumero("txtM");

        if (r <= 1) {
            alert("La relación de compresión debe ser mayor que 1.");
            return;
        }

        if (rc <= 1) {
            alert("La relación de corte debe ser mayor que 1.");
            return;
        }

        if (k <= 1) {
            alert("El coeficiente adiabático debe ser mayor que 1.");
            return;
        }

        if (t1 <= 0 || p1 <= 0 || cp <= 0 || cv <= 0 || m <= 0) {
            alert("Todos los valores deben ser mayores que cero.");
            return;
        }

        const t2 = t1 * Math.pow(r, k - 1);
        const p2 = p1 * Math.pow(r, k);

        const t3 = t2 * rc;
        const t4 = t3 * Math.pow(rc / r, k - 1);

        const qIn = m * cp * (t3 - t2);
        const qOut = m * cv * (t4 - t1);

        const eficiencia =
            1 -
            (1 / Math.pow(r, k - 1)) *
            ((Math.pow(rc, k) - 1) / (k * (rc - 1)));

        const eficienciaPorcentaje = eficiencia * 100;

        document.getElementById("lblTemperatura2").textContent = t2.toFixed(2);
        document.getElementById("lblPresion2").textContent = p2.toFixed(2);
        document.getElementById("lblCalorEntrada").textContent = qIn.toFixed(2);
        document.getElementById("lblCalorSalida").textContent = qOut.toFixed(2);
        document.getElementById("lblEficiencia").textContent =
            eficienciaPorcentaje.toFixed(2) + "%";

        G_r = r;
        G_rc = rc;
        G_p1 = p1;
        G_p2 = p2;

        G_t1 = t1;
        G_t2 = t2;
        G_t3 = t3;
        G_t4 = t4;

        datosCalculados = true;

        dibujarGraficas();
    } catch (error) {
        alert("Por favor, ingresa solo números válidos.");
    }
}

function limpiar() {
    document.getElementById("txtCompresion").value = "";
    document.getElementById("txtCorte").value = "";
    document.getElementById("txtCoeficiente").value = "";
    document.getElementById("txtTInicial").value = "";
    document.getElementById("txtPInicial").value = "";
    document.getElementById("txtCp").value = "";
    document.getElementById("txtCv").value = "";
    document.getElementById("txtM").value = "";

    document.getElementById("lblTemperatura2").textContent = "0";
    document.getElementById("lblPresion2").textContent = "0";
    document.getElementById("lblCalorEntrada").textContent = "0";
    document.getElementById("lblCalorSalida").textContent = "0";
    document.getElementById("lblEficiencia").textContent = "0%";

    G_r = 1;
    G_rc = 1;
    G_p1 = 1;
    G_p2 = 1;

    G_t1 = 1;
    G_t2 = 1;
    G_t3 = 1;
    G_t4 = 1;

    datosCalculados = false;

    limpiarCanvas();
    dibujarPantallaInicial();

    document.getElementById("txtCompresion").focus();
}

function prepararCanvas() {
    const rect = canvas.getBoundingClientRect();
    const escala = window.devicePixelRatio || 1;

    canvas.width = rect.width * escala;
    canvas.height = rect.height * escala;

    ctx.setTransform(escala, 0, 0, escala, 0, 0);

    return {
        width: rect.width,
        height: rect.height
    };
}

function limpiarCanvas() {
    const area = prepararCanvas();

    ctx.clearRect(0, 0, area.width, area.height);

    ctx.fillStyle = "#e0edff";
    ctx.fillRect(0, 0, area.width, area.height);
}

function dibujarGraficas() {
    const area = prepararCanvas();

    ctx.clearRect(0, 0, area.width, area.height);
    ctx.fillStyle = "#e0edff";
    ctx.fillRect(0, 0, area.width, area.height);

    if (!datosCalculados) {
        dibujarPantallaInicial();
        return;
    }

    const espacio = 24;
    const anchoGrafica = (area.width - espacio * 3) / 2;
    const altoGrafica = area.height - 34;

    const pv = {
        x: espacio,
        y: 20,
        width: anchoGrafica,
        height: altoGrafica
    };

    const ts = {
        x: espacio * 2 + anchoGrafica,
        y: 20,
        width: anchoGrafica,
        height: altoGrafica
    };

    dibujarPanelGrafica(pv, "Diagrama P-V", "P", "V", "#0d47a1");
    dibujarPanelGrafica(ts, "Diagrama T-s", "T", "s", "#b00020");

    dibujarPV(pv);
    dibujarTS(ts);

    dibujarLeyenda(area.width, area.height);
}

function dibujarPantallaInicial() {
    const area = prepararCanvas();

    ctx.fillStyle = "#e0edff";
    ctx.fillRect(0, 0, area.width, area.height);

    ctx.fillStyle = "#0d6efd";
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Representación del ciclo diésel", area.width / 2, 38);

    ctx.fillStyle = "#5d6d7e";
    ctx.font = "14px Arial";
    ctx.fillText("Presiona Calcular para generar los diagramas P-V y T-s", area.width / 2, 70);

    ctx.strokeStyle = "rgba(13, 110, 253, 0.35)";
    ctx.setLineDash([8, 6]);
    ctx.lineWidth = 2;
    ctx.strokeRect(25, 95, area.width - 50, area.height - 125);
    ctx.setLineDash([]);
}

function dibujarPanelGrafica(grafica, titulo, ejeY, ejeX, colorTitulo) {
    const { x, y, width, height } = grafica;

    ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
    roundRect(x, y, width, height, 12, true, false);

    ctx.strokeStyle = "rgba(13, 110, 253, 0.18)";
    ctx.lineWidth = 1;
    roundRect(x, y, width, height, 12, false, true);

    ctx.fillStyle = colorTitulo;
    ctx.font = "bold 13px Arial";
    ctx.textAlign = "center";
    ctx.fillText(titulo, x + width / 2, y + 20);

    const margenIzq = 42;
    const margenDer = 22;
    const margenTop = 42;
    const margenBajo = 36;

    const ox = x + margenIzq;
    const oy = y + height - margenBajo;
    const xMax = x + width - margenDer;
    const yMax = y + margenTop;

    dibujarCuadricula(ox, yMax, xMax, oy);

    ctx.strokeStyle = "#111";
    ctx.lineWidth = 1.4;

    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(xMax, oy);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox, yMax);
    ctx.stroke();

    dibujarFlecha(xMax, oy, xMax - 10, oy - 5, xMax - 10, oy + 5);
    dibujarFlecha(ox, yMax, ox - 5, yMax + 10, ox + 5, yMax + 10);

    ctx.fillStyle = "#111";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(ejeX, xMax + 10, oy + 4);

    ctx.textAlign = "right";
    ctx.fillText(ejeY, ox - 8, yMax - 6);

    grafica.plot = {
        ox,
        oy,
        xMax,
        yMax,
        width: xMax - ox,
        height: oy - yMax
    };
}

function dibujarCuadricula(ox, yMax, xMax, oy) {
    ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
    ctx.lineWidth = 1;

    const divisiones = 4;

    for (let i = 1; i <= divisiones; i++) {
        const x = ox + ((xMax - ox) / divisiones) * i;
        const y = yMax + ((oy - yMax) / divisiones) * i;

        ctx.beginPath();
        ctx.moveTo(x, yMax);
        ctx.lineTo(x, oy);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(ox, y);
        ctx.lineTo(xMax, y);
        ctx.stroke();
    }
}

function dibujarPV(grafica) {
    const p = grafica.plot;

    const v1 = G_r;
    const v2 = 1;
    const v3 = G_rc;
    const v4 = G_r;

    const p1 = G_p1;
    const p2 = G_p2;
    const p3 = G_p2;
    const p4 = G_p2 * 0.28;

    const maxV = Math.max(v1, v2, v3, v4) * 1.15;
    const maxP = Math.max(p1, p2, p3, p4) * 1.15;

    function mapX(v) {
        return p.ox + (v / maxV) * p.width;
    }

    function mapY(valorP) {
        return p.oy - (valorP / maxP) * p.height;
    }

    const punto1 = { x: mapX(v1), y: mapY(p1), label: "1" };
    const punto2 = { x: mapX(v2), y: mapY(p2), label: "2" };
    const punto3 = { x: mapX(v3), y: mapY(p3), label: "3" };
    const punto4 = { x: mapX(v4), y: mapY(p4), label: "4" };

    ctx.fillStyle = "rgba(0, 84, 255, 0.09)";
    ctx.beginPath();
    ctx.moveTo(punto1.x, punto1.y);
    ctx.quadraticCurveTo(punto2.x + 45, punto1.y - 10, punto2.x, punto2.y);
    ctx.lineTo(punto3.x, punto3.y);
    ctx.quadraticCurveTo(punto4.x - 35, punto3.y + 60, punto4.x, punto4.y);
    ctx.lineTo(punto1.x, punto1.y);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = "#004cff";
    ctx.lineWidth = 2.5;

    ctx.beginPath();
    ctx.moveTo(punto1.x, punto1.y);
    ctx.quadraticCurveTo(punto2.x + 45, punto1.y - 10, punto2.x, punto2.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(punto2.x, punto2.y);
    ctx.lineTo(punto3.x, punto3.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(punto3.x, punto3.y);
    ctx.quadraticCurveTo(punto4.x - 35, punto3.y + 60, punto4.x, punto4.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(punto4.x, punto4.y);
    ctx.lineTo(punto1.x, punto1.y);
    ctx.stroke();

    dibujarFlechaLinea(punto1, punto2, "#004cff");
    dibujarFlechaLinea(punto2, punto3, "#004cff");
    dibujarFlechaLinea(punto3, punto4, "#004cff");
    dibujarFlechaLinea(punto4, punto1, "#004cff");

    dibujarPunto(punto1, "#004cff");
    dibujarPunto(punto2, "#004cff");
    dibujarPunto(punto3, "#004cff");
    dibujarPunto(punto4, "#004cff");

    dibujarEtiquetaProceso("1-2 Compresión", (punto1.x + punto2.x) / 2 - 20, (punto1.y + punto2.y) / 2 + 28, "#004cff");
    dibujarEtiquetaProceso("2-3 Presión constante", (punto2.x + punto3.x) / 2, punto2.y - 12, "#004cff");
    dibujarEtiquetaProceso("3-4 Expansión", (punto3.x + punto4.x) / 2 + 20, (punto3.y + punto4.y) / 2, "#004cff");
    dibujarEtiquetaProceso("4-1 Rechazo de calor", (punto4.x + punto1.x) / 2 + 6, (punto4.y + punto1.y) / 2 + 18, "#004cff");
}

function dibujarTS(grafica) {
    const p = grafica.plot;

    const maxT = Math.max(G_t1, G_t2, G_t3, G_t4) * 1.15;

    const s1 = 0.18;
    const s2 = 0.18;
    const s3 = 0.76;
    const s4 = 0.76;

    function mapX(s) {
        return p.ox + s * p.width;
    }

    function mapY(t) {
        return p.oy - (t / maxT) * p.height;
    }

    const punto1 = { x: mapX(s1), y: mapY(G_t1), label: "1" };
    const punto2 = { x: mapX(s2), y: mapY(G_t2), label: "2" };
    const punto3 = { x: mapX(s3), y: mapY(G_t3), label: "3" };
    const punto4 = { x: mapX(s4), y: mapY(G_t4), label: "4" };

    ctx.fillStyle = "rgba(255, 0, 0, 0.08)";
    ctx.beginPath();
    ctx.moveTo(punto1.x, punto1.y);
    ctx.lineTo(punto2.x, punto2.y);
    ctx.quadraticCurveTo(punto2.x + 35, punto2.y - 10, punto3.x, punto3.y);
    ctx.lineTo(punto4.x, punto4.y);
    ctx.quadraticCurveTo(punto1.x + 35, punto4.y + 8, punto1.x, punto1.y);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2.5;

    ctx.beginPath();
    ctx.moveTo(punto1.x, punto1.y);
    ctx.lineTo(punto2.x, punto2.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(punto2.x, punto2.y);
    ctx.quadraticCurveTo(punto2.x + 35, punto2.y - 10, punto3.x, punto3.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(punto3.x, punto3.y);
    ctx.lineTo(punto4.x, punto4.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(punto4.x, punto4.y);
    ctx.quadraticCurveTo(punto1.x + 35, punto4.y + 8, punto1.x, punto1.y);
    ctx.stroke();

    dibujarFlechaLinea(punto1, punto2, "#ff0000");
    dibujarFlechaLinea(punto2, punto3, "#ff0000");
    dibujarFlechaLinea(punto3, punto4, "#ff0000");
    dibujarFlechaLinea(punto4, punto1, "#ff0000");

    dibujarPunto(punto1, "#ff0000");
    dibujarPunto(punto2, "#ff0000");
    dibujarPunto(punto3, "#ff0000");
    dibujarPunto(punto4, "#ff0000");

    dibujarEtiquetaProceso("1-2 Isentrópico", punto1.x + 8, (punto1.y + punto2.y) / 2, "#b00020");
    dibujarEtiquetaProceso("2-3 Entrada de calor", (punto2.x + punto3.x) / 2, punto2.y - 12, "#b00020");
    dibujarEtiquetaProceso("3-4 Isentrópico", punto3.x + 8, (punto3.y + punto4.y) / 2, "#b00020");
    dibujarEtiquetaProceso("4-1 Salida de calor", (punto4.x + punto1.x) / 2, punto4.y + 24, "#b00020");
}

function dibujarPunto(punto, color) {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(punto.x, punto.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#111";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(punto.label, punto.x, punto.y - 10);
}

function dibujarEtiquetaProceso(texto, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "bold 10px Arial";
    ctx.textAlign = "center";
    ctx.fillText(texto, x, y);
}

function dibujarFlecha(x, y, x1, y1, x2, y2) {
    ctx.fillStyle = "#111";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.fill();
}

function dibujarFlechaLinea(p1, p2, color) {
    const angulo = Math.atan2(p2.y - p1.y, p2.x - p1.x);

    const x = p1.x + (p2.x - p1.x) * 0.62;
    const y = p1.y + (p2.y - p1.y) * 0.62;

    const tam = 7;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(
        x - tam * Math.cos(angulo - Math.PI / 6),
        y - tam * Math.sin(angulo - Math.PI / 6)
    );
    ctx.lineTo(
        x - tam * Math.cos(angulo + Math.PI / 6),
        y - tam * Math.sin(angulo + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fill();
}

function dibujarLeyenda(width, height) {
    const x = width / 2 - 140;
    const y = height - 18;

    ctx.font = "11px Arial";
    ctx.textAlign = "left";

    ctx.fillStyle = "#004cff";
    ctx.fillRect(x, y - 8, 12, 4);
    ctx.fillStyle = "#111";
    ctx.fillText("Diagrama P-V", x + 18, y - 4);

    ctx.fillStyle = "#ff0000";
    ctx.fillRect(x + 130, y - 8, 12, 4);
    ctx.fillStyle = "#111";
    ctx.fillText("Diagrama T-s", x + 148, y - 4);
}

function roundRect(x, y, width, height, radius, fill, stroke) {
    if (typeof radius === "number") {
        radius = {
            tl: radius,
            tr: radius,
            br: radius,
            bl: radius
        };
    }

    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();

    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
}

dibujarPantallaInicial();

window.addEventListener("resize", () => {
    if (datosCalculados) {
        dibujarGraficas();
    } else {
        dibujarPantallaInicial();
    }
});