export class LotePedido {
    idLotePedidos: number;
    codCliente: string;
    nombres: string;
    condicionDePago: string;
    montoTotalPedido: number;
    limiteCredito: number;
    fechaRecorte: Date;
    fechaCreacion: Date;
    estado: boolean;
    montoVencido: number;
    montoPorVencer: number;
    facturasVencidas: number;
    facturaVencida: Date;
    facturaPagada: Date;

    constructor(idLotePedidos: number, codCliente: string, nombres: string, condicionDePago: string, montoTotalPedido: number,
        limiteCredito: number, fechaRecorte: Date, fechaCreacion: Date, estado: boolean, montoVencido: number, montoPorVencer: number,
        facturasVencidas: number, facturaVencida: Date, facturaPagada: Date
    ) {
        this.idLotePedidos = idLotePedidos;
        this.codCliente = codCliente;
        this.nombres = nombres;
        this.condicionDePago = condicionDePago;
        this.montoTotalPedido = montoTotalPedido;
        this.limiteCredito = limiteCredito;
        this.fechaRecorte = fechaRecorte;
        this.fechaCreacion = fechaCreacion;
        this.estado = estado;
        this.montoVencido = montoVencido;
        this.montoPorVencer = montoPorVencer;
        this.facturasVencidas = facturasVencidas;
        this.facturaVencida = facturaVencida;
        this.facturaPagada = facturaPagada;
    }
}
